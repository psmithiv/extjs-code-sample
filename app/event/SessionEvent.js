Ext.define('ExtJSCodeSample.event.SessionEvent', function() {
    var _username = '';
    var _password = '';
    var _rememberMe = false;

    return {
        statics: {
            LOGIN: 'ExtJSCodeSample.event.SessionEvent.LOGIN',
            LOGOUT: 'ExtJSCodeSample.event.SessionEvent.LOGOUT'
        },

        getUserName: function() {
            return _username;
        },

        getPassword: function() {
            return _password;
        },

        getRememberMe: function() {
            return _rememberMe;
        },

        /**
         *
         * @param {String} username
         * @param {String} password
         * @param {Boolean} rememberMe
         */
        constructor: function(username, password, rememberMe)
        {
            _username = username;
            _password = password;
            _rememberMe = rememberMe;
        }
    }
})