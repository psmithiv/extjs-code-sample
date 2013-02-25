Ext.define('ExtJSCodeSample.event.UserDirectoryEvent', function() {
    var user = {};

    return {
        requires: 'ExtJSCodeSample.model.dto.UserDTO',

        statics: {
            CREATE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER',
            READ_USERS: 'ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS',
            UPDATE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER',
            DELETE_USER: 'ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER'
        },

        getUser: function() {
            return this.user
        },

        constructor: function(user)
        {
            this.user = user;
        }
    }
});
