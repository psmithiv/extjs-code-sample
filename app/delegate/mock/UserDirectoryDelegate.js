Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', function() {
    var success;
    var failure;
    var scope;

    return {
        requires: [
            'Ext.Ajax'
        ],

        constructor: function(successFunc, failureFunc, callerScope) {
            success = successFunc;
            failure = failureFunc;
            scope = callerScope;
        },

        createUser: function(user) {

        },

        readUsers: function() {
            var response = "{" +
                                "'success': true, " +
                                "'users': [" +
                                    "{'username': 'psmithiv', 'name': 'Paul C. Smith IV', 'phone': '917-674-9375', 'email': 'paul.smith.iv@ninthavenuemedia.com', 'notes': ''}," +
                                    "{'username': 'psmithiv', 'name': 'Paul C. Smith IV', 'phone': '917-674-9375', 'email': 'paul.smith.iv@ninthavenuemedia.com', 'notes': ''}," +
                                    "{'username': 'psmithiv', 'name': 'Paul C. Smith IV', 'phone': '917-674-9375', 'email': 'paul.smith.iv@ninthavenuemedia.com', 'notes': ''}," +
                                    "{'username': 'psmithiv', 'name': 'Paul C. Smith IV', 'phone': '917-674-9375', 'email': 'paul.smith.iv@ninthavenuemedia.com', 'notes': ''}," +
                                    "{'username': 'psmithiv', 'name': 'Paul C. Smith IV', 'phone': '917-674-9375', 'email': 'paul.smith.iv@ninthavenuemedia.com', 'notes': ''}" +
                                "]" +
                            "}";

            if(!success || !scope)
                return;

            response = Ext.JSON.decode(response);
            success.apply(scope, response.users);
        },

        updateUser: function(user) {

        },

        deleteUser: function(user) {

        }
    }
});