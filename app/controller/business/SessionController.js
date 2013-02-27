Ext.define('ExtJSCodeSample.controller.business.SessionController', function() {
    var un = '';
    var pw = '';
    var rm = '';

    /**
     * Establish session with backend
     *
     * @param event:SessionEvent
     */
    function loginEventHandler(event) {
        un = event.getUserName();
        pw = event.getPassword();
        rm = event.getRememberMe();

        var authDelegate = new ExtJSCodeSample.delegate.mock.SessionDelegate(loginSuccessHandler, loginFaultHandler, this);
        authDelegate.login(un, pw);
   }

    /**
     * Success event handler for establishing session with backend
     *
     * @param user:UserDTO
     */
    function loginSuccessHandler(user) {
        var sm = ExtJSCodeSample.model.ModelLocator.get('session');
        sm.set('authenticated', true);
        sm.set('authenticatedUser', user);

        if(rm)
        {
            var user = new ExtJSCodeSample.model.UserCredentialsModel({username:un, password:pw});
            ExtJSCodeSample.controller.business.PersistenceController.setCredentials(user);
        }

        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE);
    }

    /**
     * Fault event handler for establishing session with backend
     *
     * @param fault:Object
     */
    function loginFaultHandler(fault) {
        //Stub method for when backend is in place
    }

    /**
     * Terminate session with backend
     *
     * @param event:SessionEvent
     */
    function logoutEventHandler(event) {
        //Stub method for when backend is in place
    }

    /**
     * Success event handler for terminating session with backend
     *
     */
    function logoutSuccessHandler() {
        //Stub method for when backend is in place
    }

    /**
     * Fault event handler for terminating session with backend
     *
     * @param fault:Object
     */
    function logoutFaultHandler(fault) {
        //Stub method for when backend is in place
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'ExtJSCodeSample.event.SessionEvent',
            'ExtJSCodeSample.event.StateEvent',
            'ExtJSCodeSample.delegate.mock.SessionDelegate',
            'ExtJSCodeSample.data.event.ModelChangeEvent',
            'ExtJSCodeSample.model.ModelLocator',
            'ExtJSCodeSample.controller.business.PersistenceController'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.SessionEvent.LOGIN, loginEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.SessionEvent.LOGOUT, logoutEventHandler, this);
        }
    }
})