Ext.define('ExtJSCodeSample.event.DialogEvent', function() {
    var _data = {};

    return {
        statics: {
            SHOW_LOGOUT_DIALOG: 'ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG',
            HIDE_LOGOUT_DIALOG: 'ExtJSCodeSample.event.DialogEvent.HIDE_LOGOUT_DIALOG'
        },

        /**
         * Getter for generic data property to pass values to DialogController
         *
         * @return {{}}
         */
        getData: function() {
            return _data;
        },

        constructor: function(data) {
            _data = data;
        }
    }
})
