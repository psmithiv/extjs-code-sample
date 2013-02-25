Ext.define('ExtJSCodeSample.model.ModelLocator', function() {
    return {
        extend: 'ExtJSCodeSample.data.ObservableModel',

        requires: [
            'ExtJSCodeSample.model.SessionModel'
        ],

        singleton: true,

        fields: [
            {name: 'session', type: 'ExtJSCodeSample.model.SessionModel'},
            {name: 'usersList', type: 'Ext.Store'}
        ],

        constructor: function() {
            this.callParent(arguments);

            //We cannot set a fields defaultValue to a complex object, so we do it here
            this.set('session', new ExtJSCodeSample.model.SessionModel(), true);
        }
    }
});