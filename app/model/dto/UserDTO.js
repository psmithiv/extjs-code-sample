Ext.define('ExtJSCodeSample.model.dto.UserDTO', function() {
    return {
        extend: 'ExtJSCodeSample.data.ObservableModel',

        fields: [
            {name: 'id', type: 'int'},
            {name: 'username', type: 'string'},
            {name: 'name', type: 'string'},
            {name: 'phone', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'notes', type: 'string'}
        ]
    }
});