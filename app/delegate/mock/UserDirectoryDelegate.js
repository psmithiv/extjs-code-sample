Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', function() {
    var _success;
    var _failure;
    var _scope;

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
            var response = "{" +
                                "'success': true, " +
                                "'users': [{" +
                                    "'id': 0, " +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "},{" +
                                    "'id': 1, " +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "},{" +
                                    "'id': 2, " +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "}]" +
                            "}";

            if(!_success || !_scope)
                return;

            var r = Ext.JSON.decode(response);
            var us = new ExtJSCodeSample.store.UserDirectoryStore({data: r});
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

            _success.call(_scope)
        }
    }
});