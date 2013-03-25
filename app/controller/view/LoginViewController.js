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
        values.rememberMe = values.rememberMe == 'on'; //convert 'on' to true else false

        var record = new ExtJSCodeSample.model.UserCredentialsModel(values);
        var e = new ExtJSCodeSample.event.SessionEvent(record);
        this.application.fireEvent(ExtJSCodeSample.event.SessionEvent.LOGIN, e);
    };

    /**
     * Once the last button of the form has rendered, set the form field values
     */
    function setFormValues() {
        var u = ExtJSCodeSample.controller.business.PersistenceController.getCredentials();
        u = u.get('rememberMe') ? u : new ExtJSCodeSample.model.UserCredentialsModel();
        this.getLoginForm().loadRecord(u);
    }

    /**
     * Remember me checkbox click handler.
     *
     * @param {Ext.CheckBox} target
     * @param {Boolean} value
     */
    function rememberMeChangeHandler(target, value) {
        if(!value)
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

                'loginPanel checkbox[name=rememberMe]': {
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