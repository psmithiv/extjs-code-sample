/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/
Ext.define('ExtJSCodeSample.controller.business.StateController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.util.History',
        'ExtJSCodeSample.event.StateEvent',
        'ExtJSCodeSample.event.DialogEvent',
        'ExtJSCodeSample.model.constants.Views',
        'ExtJSCodeSample.model.ModelLocator'
    ],

    init: function() {
        this.application.addListener(ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE, this.setInitialStateEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.StateEvent.SET_STATE, this.setStateEventHandler, this);

        this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_BACK, this.browserBackEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD, this.browserForwardEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH, this.browserRefreshEventHandler, this);

        Ext.History.init();
        Ext.History.addListener("change", this.urlHistoryChangeHandler, this);
    },

    /**
     * Event handler to set the initial state of the application post startup/login
     *
     * NAVIGATE TO:
     *      1. View in URL hash
     *      2. View in cookie (todo)
     *      3. Default view
     *
     * @private
     */
    setInitialStateEventHandler: function() {
        var hash = Ext.History.getHash();
        if(hash)
        {
            this.urlHistoryChangeHandler(hash);
            return;
        }

        var e = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.CRUD, {});
        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_STATE, e);
    },

    /**
     * Event handler to update the browser hash and in turn update the application state
     *
     * @private
     * @param {ExtJSCodeSample.event.StateEvent} event
     */
    setStateEventHandler: function(event) {
        var hash = Ext.JSON.encode({view: event.getView(), data: event.getData()});
        Ext.History.setHash(hash);
    },

    /**
     * Event handler to navigate one item back in browser history
     *
     * @private
     */
    browserBackEventHandler: function() {
        Ext.History.back();
    },

    /**
     * Event handler to navigate one item forward in browser history
     *
     * @private
     */
    browserForwardEventHandler: function() {
        Ext.History.forward();
    },

    /**
     * Event handler to refresh web browser
     *
     * @private
     */
    browserRefreshEventHandler: function() {
        location.reload();
    },

    /**
     * Event handler to update application state when browser hash changes
     *
     * @private
     * @param {String} hash - Hash string from browser url
     */
    urlHistoryChangeHandler: function(hash) {
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
});