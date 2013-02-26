Ext.define('ExtJSCodeSample.controller.business.DialogController', function() {
    function showLogoutDialogEventHandler() {
        var lm = plugins.locale.LocaleManager.getProperties().dialogs.logout;

        Ext.Msg.show({
            title: lm.title,
            msg: lm.message,
            buttons: Ext.Msg.OKCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: showLogoutDialogButtonHandler
        });
    }

    function showLogoutDialogButtonHandler(buttonId) {
        if(buttonId == 'ok')
            location.reload();
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'ExtJSCodeSample.event.DialogEvent',
            'plugins.locale.LocaleManager'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG, showLogoutDialogEventHandler, this);
        }
    }
});