Ext.define('ExtJSCodeSample.controller.business.DialogController', function() {
    var logoutDialog = {};

    /**
     * Show logout dialog event handler method
     *
     * @param event:ExtJSCodeSample.event.DialogEvent
     */
    function showLogoutDialogEventHandler(event) {
        var lm = plugins.locale.LocaleManager.getProperties().dialogs.logout;

        var dialog = Ext.Msg.show({
                        title: lm.title,
                        msg: lm.message,
                        buttons: Ext.Msg.OKCANCEL,
                        icon: Ext.Msg.QUESTION,
                        fn: showLogoutDialogButtonClickHandler,
                        scope: this
                    });

        logoutDialog = {dialog: dialog, navForward: event.data.navForward || false};
    }

    /**
     * Show logout button click handler
     *
     * @param buttonId:String
     */
    function showLogoutDialogButtonClickHandler(buttonId) {
        console.log('showLogoutDialogButtonClickHandler');
        if(buttonId == 'ok')
            this.application.fireEvent(ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH, {});
        else if(buttonId == 'cancel' && logoutDialog.navForward)
            this.application.fireEvent(ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD, {});
    }

    /**
     * Hide any dialogs that may be open
     */
    function hideLogoutDialogEventHandler() {
        if(logoutDialog.dialog && logoutDialog.dialog.isVisible())
            logoutDialog.dialog.hide();
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'Ext.History',
            'ExtJSCodeSample.event.DialogEvent',
            'ExtJSCodeSample.event.StateEvent',
            'plugins.locale.LocaleManager'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG, showLogoutDialogEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.DialogEvent.HIDE_LOGOUT_DIALOG, hideLogoutDialogEventHandler, this);
        }
    }
});