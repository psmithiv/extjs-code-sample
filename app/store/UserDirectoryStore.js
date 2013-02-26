Ext.define('ExtJSCodeSample.store.UserDirectoryStore', function() {
    return {
        extend: 'Ext.data.Store',

        model: 'ExtJSCodeSample.model.dto.UserDTO',

        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: 'users'
            }
        }
    }
});