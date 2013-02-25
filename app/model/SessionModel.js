Ext.define('ExtJSCodeSample.model.SessionModel', function() {
    return {
        extend: 'ExtJSCodeSample.data.ObservableModel',

        fields: [
            {name: 'authenticated', type: 'boolean', defaultValue: false},
            {name: 'authenticatedUser', type:'ExtJSCodeSample.model.dto.UserDTO'}
        ]
    }
});