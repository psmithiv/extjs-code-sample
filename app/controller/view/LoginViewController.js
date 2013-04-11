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

/**
 * View controller responsible for managing LoginView
 */
Ext.define('ExtJSCodeSample.controller.view.LoginViewController', {
    extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

    requires: [
        'ExtJSCodeSample.event.StateEvent',
        'ExtJSCodeSample.model.constants.Views',
        'ExtJSCodeSample.controller.business.PersistenceController',
        'ExtJSCodeSample.model.UserCredentialsModel'
    ],

    refs: [{
        selector: 'loginView',
        ref: 'loginView'
    },{
        selector: 'loginPanel.form',
        ref: 'loginForm'
    }],

    /**
     * Adds listeners to view child components
     *
     * @override
     */
    init: function() {
        this.callParent(arguments);

        this.control({
            'loginPanel button[action=clearLogin]': {
                click: this.resetClickHandler
            },

            'loginPanel button[action=login]': {
                click: this.loginClickHandler,
                render: this.setFormValues
            },

            'loginPanel checkbox[name=rememberMe]': {
                change: this.rememberMeChangeHandler
            }
        });
    },

    /**
     * @override
     */
    applicationStateChangedHandler: function(event) {
        this.getLoginView().setVisible(event.getView() == ExtJSCodeSample.model.constants.Views.LOGIN);
    },

    /**
     * Click handler to reset login form fields
     *
     * @private
     */
    resetClickHandler: function() {
        this.getLoginForm().getForm().reset();
    },

    /**
     * Click handler to collect input from loginPanel.form and dispatch SessionEvent.LOGIN
     *
     * @private
     */
    loginClickHandler: function() {
        var values = this.getLoginForm().getValues();
        values.rememberMe = values.rememberMe == 'on'; //convert 'on' to true else false

        var record = new ExtJSCodeSample.model.UserCredentialsModel(values);
        var e = new ExtJSCodeSample.event.SessionEvent(record);
        this.application.fireEvent(ExtJSCodeSample.event.SessionEvent.LOGIN, e);
    },

    /**
     * Once the last button of the form has rendered, set the form field values
     *
     * @private
     */
    setFormValues: function() {
        var u = ExtJSCodeSample.controller.business.PersistenceController.getCredentials();
        u = u.get('rememberMe') ? u : new ExtJSCodeSample.model.UserCredentialsModel();
        this.getLoginForm().loadRecord(u);
    },

    /**
     * Remember me checkbox click handler that clears the user credentials from the browser cookie
     *
     * @private
     * @param {Ext.CheckBox} target - CheckBox generating the event
     * @param {Boolean} value - The value of the CheckBox
     */
    rememberMeChangeHandler: function(target, value) {
        if(!value)
            ExtJSCodeSample.controller.business.PersistenceController.clearCredentials();
    }
});