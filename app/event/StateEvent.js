Ext.define('ExtJSCodeSample.event.StateEvent', function() {
    var _view = '';
    var _data = [];

    return {
        statics: {
            SET_INITIAL_STATE: 'ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE',
            SET_STATE: 'ExtJSCodeSample.event.StateEvent.SET_STATE',
            STATE_CHANGED: 'ExtJSCodeSample.event.StateEvent.STATE_CHANGED',
            STATE_CHANGE_COMPLETE: 'ExtJSCodeSample.event.StateEvent.STATE_CHANGE_COMPLETE'
        },

        getView: function() {
            return _view;
        },

        getData: function() {
            return _data;
        },

        constructor: function(view, data)
        {
            _view = view;
            _data = data;
        }
    }
})