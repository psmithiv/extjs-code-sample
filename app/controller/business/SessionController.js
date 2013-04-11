/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/
Ext.define('ExtJSCodeSample.controller.business.SessionController', {
    extend: 'Ext.app.Controller',

    requires: [
        'ExtJSCodeSample.event.SessionEvent',
        'ExtJSCodeSample.event.StateEvent',
        'ExtJSCodeSample.delegate.mock.SessionDelegate',
        'ExtJSCodeSample.data.event.ModelChangeEvent',
        'ExtJSCodeSample.model.ModelLocator',
        'ExtJSCodeSample.controller.business.PersistenceController'
    ],

    /**
     * Controller initialization method
     */
    init: function() {
        this.application.addListener(ExtJSCodeSample.event.SessionEvent.LOGIN, this.loginEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.SessionEvent.LOGOUT, this.logoutEventHandler, this);
    },

    /**
     * Model representing the needed information to authenticate a user
     *
     * @private
     * {ExtJSCodeSample.model.UserCredentialsModel} userCredentials
     */
    userCredentials: {},

    /**
     * Establish session with backend
     *
     * @private
     * @param {ExtJSCodeSample.event.SessionEvent} event
     */
    loginEventHandler: function(event) {
        this.userCredentials = event.getUserCredentials();

        var authDelegate = new ExtJSCodeSample.delegate.mock.SessionDelegate(this.loginSuccessHandler, this.loginFaultHandler, this);
        authDelegate.login(this.userCredentials.get('username'), this.userCredentials.get('password'));
    },

    /**
     * Success event handler for establishing session with backend
     *
     * @private
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    loginSuccessHandler: function(user) {
        var sm = ExtJSCodeSample.model.ModelLocator.get('session');
        sm.set('authenticated', true);
        sm.set('authenticatedUser', user);

        if(this.userCredentials.get('rememberMe'))
            ExtJSCodeSample.controller.business.PersistenceController.setCredentials(this.userCredentials);

        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE);
    },

    /**
     * Fault event handler for establishing session with backend
     *
     * @private
     * @param {Object} fault
     */
    loginFaultHandler: function(fault) {
        //Stub method for when backend is in place
    },

    /**
     * Terminate session with backend
     *
     * @private
     * @param {ExtJSCodeSample.event.SessionEvent} event
     */
    logoutEventHandler: function(event) {
        //Stub method for when backend is in place
    },

    /**
     * Success event handler for terminating session with backend
     *
     * @private
     */
    logoutSuccessHandler: function() {
        //Stub method for when backend is in place
    },

    /**
     * Fault event handler for terminating session with backend
     *
     * @private
     * @param {Object} fault
     */
    logoutFaultHandler: function(fault) {
        //Stub method for when backend is in place
    }
})