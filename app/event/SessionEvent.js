Ext.define('ExtJSCodeSample.event.SessionEvent', function() {
    var _userCredentials;

    return {
        statics: {
            LOGIN: 'ExtJSCodeSample.event.SessionEvent.LOGIN',
            LOGOUT: 'ExtJSCodeSample.event.SessionEvent.LOGOUT'
        },

        getUserCredentials: function() {
            return _userCredentials;
        },

        /**
         * @param {ExtJSCodeSample.model.UserCredentialsModel} userCredentials
         */
        constructor: function(userCredentials)
        {
            _userCredentials = userCredentials;
        }
    }
})