Ext.define('ExtJSCodeSample.data.event.ModelChangeEvent', function() {
    var _fieldName = '';
    var _newValue = {};
    var _oldValue = {};

    return {
        statics: {
            CHANGED: 'ExtJSCodeSample.event.ModelChangeEvent.CHANGED'
        },

        getFieldName: function() {
            return _fieldName;
        },

        getNewValue: function() {
            return _newValue;
        },

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