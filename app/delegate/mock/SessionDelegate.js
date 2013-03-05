Ext.define('ExtJSCodeSample.delegate.mock.SessionDelegate', function() {
    var _success = null;
    var _failure = null;
    var _scope = null;

    return {
        requires: [
            'Ext.Ajax',
            'ExtJSCodeSample.model.dto.UserDTO'
        ],

        constructor: function(success, failure, scope) {
            _success = success;
            _failure = failure;
            _scope = scope;
        },

        /**
         * Login to server
         *
         * @param {String} username
         * @param {String} password
         */
        login: function(username, password) {
            var response = "{" +
                                "'success': true, " +
                                "'authenticatedUser': {" +
                                    "'username': '" + username + "', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "}" +
                            "}";

            if(!_success || !_scope)
                return;

            response = Ext.JSON.decode(response);
            var userDTO = new ExtJSCodeSample.model.dto.UserDTO(response.authenticatedUser);
            _success.call(_scope, userDTO);
        }
    }
});