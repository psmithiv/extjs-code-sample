Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', function() {
    var _success;
    var _failure;
    var _scope;

    var readUsersResponse = "{" +
                                "'success': true, " +
                                "'users': [{" +
                                    "'id': 0, " +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Daddy'" +
                                "},{" +
                                    "'id': 1, " +
                                    "'username': 'ksmithiv', " +
                                    "'name': 'Karla Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Mommy'" +
                                "},{" +
                                    "'id': 2, " +
                                    "'username': 'ajsmith', " +
                                    "'name': 'Alana Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Daughter'" +
                                "},{" +
                                    "'id': 3, " +
                                    "'username': 'atsmith', " +
                                    "'name': 'Aiden Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Son'" +
                                "}]" +
                            "}";

    return {
        requires: [
            'ExtJSCodeSample.store.UserDirectoryStore'
        ],

        constructor: function(success, failure, scope) {
            _success = success;
            _failure = failure;
            _scope = scope;
        },

        /**
         * Save new user to server
         *
         * @param {ExtJSCodeSample.model.dto.UserDTO} user
         */
        createUser: function(user) {

        },

        /**
         * Get list of users from server
         */
        readUsers: function() {
            if(!_success || !_scope)
                return;

            var us = new ExtJSCodeSample.store.UserDirectoryStore({data: Ext.JSON.decode(readUsersResponse)});
            _success.call(_scope, us);
        },

        /**
         * Save user to server
         *
         * @param {ExtJSCodeSample.model.dto.UserDTO} user
         */
        updateUser: function(user) {

        },

        /**
         * Notify server to delete user
         *
         * @param {ExtJSCodeSample.model.dto.UserDTO} user
         */
        deleteUser: function(user) {
            if(!_success || !_scope)
                return;

            _success.call(_scope, user)
        }
    }
});