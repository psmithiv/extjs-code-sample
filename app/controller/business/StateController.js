Ext.define('ExtJSCodeSample.controller.business.StateController', function() {
    /**
     * Event handler to set the initial state of the application post startup/login
     *
     * NAVIGATE TO:
     *      1. View in URL hash
     *      2. View in cookie (todo)
     *      3. Default view
     */
    function setInitialStateEventHandler() {
        var hash = Ext.History.getHash();
        if(hash)
        {
            urlHistoryChangeHandler.call(this, hash);
            return;
        }

        var e = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.CRUD, {});
        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_STATE, e);
    }

    /**
     * Event handler to update the browser hash and in turn update the application state
     *
     * @param {ExtJSCodeSample.event.StateEvent} event
     */
    function setStateEventHandler(event) {
        var hash = Ext.JSON.encode({view: event.getView(), data: event.getData()});
        Ext.History.setHash(hash);
    }

    /**
     * event handler to navigate one item back in browser history
     */
    function browserBackEventHandler() {
        Ext.History.back();
    }

    /**
     * Event handler to navigate one item forward in browser history
     */
    function browserForwardEventHandler() {
        console.log('forward')
        Ext.History.forward();
    }

    /**
     * Event handler to refresh web browser
     */
    function browserRefreshEventHandler() {
        console.log('refresh');
        location.reload();
    }

    /**
     * Event handler to update application state when browser hash changes
     *
     * @param {String} hash
     */
    function urlHistoryChangeHandler(hash) {
        var authenticated = ExtJSCodeSample.model.ModelLocator.get('session').get('authenticated');
        if(!authenticated)
            return;

        if(hash) {
            this.application.fireEvent(ExtJSCodeSample.event.DialogEvent.HIDE_LOGOUT_DIALOG, {});

            var obj = Ext.JSON.decode(unescape(hash));
            var e = new ExtJSCodeSample.event.StateEvent(obj.view, obj.data);
            this.application.fireEvent(ExtJSCodeSample.event.StateEvent.STATE_CHANGED, e);
        } else {
            this.application.fireEvent(ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG, {data: {navForward:true} });
        }
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'Ext.util.History',
            'ExtJSCodeSample.event.StateEvent',
            'ExtJSCodeSample.event.DialogEvent',
            'ExtJSCodeSample.model.constants.Views',
            'ExtJSCodeSample.model.ModelLocator'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE, setInitialStateEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.StateEvent.SET_STATE, setStateEventHandler, this);

            this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_BACK, browserBackEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD, browserForwardEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH, browserRefreshEventHandler, this);

            Ext.History.init();
            Ext.History.addListener("change", urlHistoryChangeHandler, this);
        }
    }
})