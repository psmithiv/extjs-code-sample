Ext.define('ExtJSCodeSample.controller.business.SessionController', function() {
    var userCredentials;

    /**
     * Establish session with backend
     *
     * @param {ExtJSCodeSample.event.SessionEvent} event
     */
    function loginEventHandler(event) {
        userCredentials = event.getUserCredentials();
        console.log('userCredentials.username: ' + userCredentials.get('username'));

        var authDelegate = new ExtJSCodeSample.delegate.mock.SessionDelegate(loginSuccessHandler, loginFaultHandler, this);
        authDelegate.login(userCredentials.get('username'), userCredentials.get('password'));
   }

    /**
     * Success event handler for establishing session with backend
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    function loginSuccessHandler(user) {
        var sm = ExtJSCodeSample.model.ModelLocator.get('session');
        sm.set('authenticated', true);
        sm.set('authenticatedUser', user);

        if(userCredentials.get('rememberme'))
        {
            ExtJSCodeSample.controller.business.PersistenceController.setCredentials(userCredentials);
        }

        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE);
    }

    /**
     * Fault event handler for establishing session with backend
     *
     * @param {Object} fault
     */
    function loginFaultHandler(fault) {
        //Stub method for when backend is in place
    }

    /**
     * Terminate session with backend
     *
     * @param {ExtJSCodeSample.event.SessionEvent} event
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
     * @param {Object} fault
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