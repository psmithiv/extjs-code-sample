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
         * @param user:ExtJSCodeSample.model.dto.UserDTO
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
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "},{" +
                                    "'username': 'psmithiv', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "},{" +
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
         * @param user:ExtJSCodeSample.model.dto.UserDTO
         */
        updateUser: function(user) {

        },

        /**
         * Notify server to delete user
         *
         * @param user:ExtJSCodeSample.model.dto.UserDTO
         */
        deleteUser: function(user) {

        }
    }
});