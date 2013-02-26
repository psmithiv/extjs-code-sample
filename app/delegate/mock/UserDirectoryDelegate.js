Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', function() {
    var success;
    var failure;
    var scope;

    return {
        requires: [
            'ExtJSCodeSample.store.UserDirectoryStore'
        ],

        constructor: function(successFunc, failureFunc, callerScope) {
            success = successFunc;
            failure = failureFunc;
            scope = callerScope;
        },

        /**
         * Save user to server
         *
         * @param user:UserDTO
         */
        createUser: function(user) {

        },

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

            if(!success || !scope)
                return;

            var r = Ext.JSON.decode(response);
            var us = new ExtJSCodeSample.store.UserDirectoryStore({data: r});
            success.call(scope, us);
        },

        updateUser: function(user) {

        },

        deleteUser: function(user) {

        }
    }
});