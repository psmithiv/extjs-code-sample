Ext.define('ExtJSCodeSample.controller.view.LoginViewController', function() {
    /**
     * Reset form by clearing out input fields
     */
    function resetClickHandler() {
        this.getLoginForm().getForm().reset();
    };

    /**
     * Collect input from loginPanel.form and dispatch SessionEvent.LOGIN
     */
    function loginClickHandler() {
        var values = this.getLoginForm().getValues();
        var e = new ExtJSCodeSample.event.SessionEvent(values.username, values.password, this.getRememberMeCheckBox().getValue());
        this.application.fireEvent(ExtJSCodeSample.event.SessionEvent.LOGIN, e);
    };

    /**
     * Once the last button of the form has rendered, set the form field values
     */
    function setFormValues() {
        var u = ExtJSCodeSample.controller.business.PersistenceController.getCredentials();
        var un = u.get('username');
        var pw = u.get('password');

        if(!un || !pw)
            return;

        this.getUserNameField().setValue(un);
        this.getPasswordField().setValue(pw);
        this.getRememberMeCheckBox().setValue(true);
    }

    function rememberMeChangeHandler(target, value) {
        if(value)
            return;

        ExtJSCodeSample.controller.business.PersistenceController.clearCredentials();
    }

    return {
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
        },{
            selector: 'loginPanel textfield[name=username]',
            ref: 'userNameField'
        },{
            selector: 'loginPanel textfield[name=password]',
            ref: 'passwordField'
        },{
            selector: 'loginPanel checkbox[name=rememberme]',
            ref: 'rememberMeCheckBox'
        }],

        init: function() {
            this.callParent(arguments);

            this.control({
                'loginPanel button[action=clearLogin]': {
                    click: resetClickHandler
                },

                'loginPanel button[action=login]': {
                    click: loginClickHandler,
                    render: setFormValues
                },

                'loginPanel checkbox[name=rememberme]': {
                    change: rememberMeChangeHandler
                }
            });
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            this.getLoginView().setVisible(event.getView() == ExtJSCodeSample.model.constants.Views.LOGIN);
        }
    }
});