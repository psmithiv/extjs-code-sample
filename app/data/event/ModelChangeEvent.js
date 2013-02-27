Ext.define('ExtJSCodeSample.data.event.ModelChangeEvent', function() {
    var _fieldName = '';
    var _newValue = {};
    var _oldValue = {};

    return {
        statics: {
            CHANGED: 'ExtJSCodeSample.event.ModelChangeEvent.CHANGED'
        },

        /**
         * Get the name of the field that has changed
         *
         * @return {string}
         */
        getFieldName: function() {
            return _fieldName;
        },

        /**
         * Get the new value for the field that has changed
         *
         * @return {{}}
         */
        getNewValue: function() {
            return _newValue;
        },

        /**
         * Get the old balue for the field that has changed
         * @return {{}}
         */
        getOldValue: function() {
            return _oldValue;
        },

        constructor: function(fieldName, newValue, oldValue) {
            _fieldName = fieldName;
            _newValue = newValue;
            _oldValue = oldValue;
        }
    }
});