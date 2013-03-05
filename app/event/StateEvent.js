Ext.define('ExtJSCodeSample.event.StateEvent', function() {
    var _view = '';
    var _data = [];

    return {
        statics: {
            SET_INITIAL_STATE: 'ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE',
            SET_STATE: 'ExtJSCodeSample.event.StateEvent.SET_STATE',
            STATE_CHANGED: 'ExtJSCodeSample.event.StateEvent.STATE_CHANGED',

            BROWSER_FORWARD: 'ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD',
            BROWSER_BACK: 'ExtJSCodeSample.event.StateEvent.BROWSER_BACK',
            BROWSER_REFRESH: 'ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH'
        },

        getView: function() {
            return _view;
        },

        getData: function() {
            return _data;
        },

        /**
         *
         * @param {String} view
         * @param {Array} data
         */
        constructor: function(view, data)
        {
            _view = view;
            _data = data;
        }
    }
})