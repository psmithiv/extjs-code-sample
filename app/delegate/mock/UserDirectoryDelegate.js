Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', function() {
    var _success;
    var _failure;
    var _scope;

    var readUsersResponse = "{" +
                                "'success': true, " +
                                "'users': [{" +
                                    "'id': 100, " +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Daddy'" +
                                "},{" +
                                    "'id': 101, " +
                                    "'username': 'ksmithiv', " +
                                    "'name': 'Karla Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Mommy'" +
                                "},{" +
                                    "'id': 102, " +
                                    "'username': 'ajsmith', " +
                                    "'name': 'Alana Smith', " +
                                    "'phone': '555-555-555', " +
                                    "'email': 'email@ninthavenuemedia.com', " +
                                    "'notes': 'Daughter'" +
                                "},{" +
                                    "'id': 103, " +
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
            if(!_success || !_scope)
                return;

            user.set('id', Math.floor(Math.random() * 1000 + 1));
            _success.call(_scope, user);
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
            if(!_success || !_scope)
                return;

            _success.call(_scope, user);
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