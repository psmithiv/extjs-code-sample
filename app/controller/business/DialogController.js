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
Ext.define('ExtJSCodeSample.controller.business.DialogController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.History',
        'ExtJSCodeSample.event.DialogEvent',
        'ExtJSCodeSample.event.StateEvent',
        'nineam.locale.LocaleManager'
    ],

    /**
     * Object literal representing a dialog instance
     *
     * @private
     * {{{Object} dialog, {Boolean} navForward}} - logoutDialog
     */
    logoutDialog: {},

    /**
     * Controller initialization method
     */
    init: function() {
        this.application.addListener(ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG, this.showLogoutDialogEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.DialogEvent.HIDE_LOGOUT_DIALOG, this.hideLogoutDialogEventHandler, this);
    },

    /**
     * Show logout dialog event handler method
     *
     * @private
     * @param {ExtJSCodeSample.event.DialogEvent} event
     */
    showLogoutDialogEventHandler: function(event) {
        var lm = nineam.locale.LocaleManager.getProperties().dialogs.logout;

        var dialog = Ext.Msg.show({
            title: lm.title,
            msg: lm.message,
            buttons: Ext.Msg.OKCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: this.showLogoutDialogButtonClickHandler,
            scope: this
        });

        this.logoutDialog = {dialog: dialog, navForward: event.data.navForward || false};
    },

    /**
     * Show logout button click handler
     *
     * @private
     * @param {String} buttonId
     */
    showLogoutDialogButtonClickHandler: function(buttonId) {
        if(buttonId == 'ok')
            this.application.fireEvent(ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH, {});
        else if(buttonId == 'cancel' && this.logoutDialog.navForward)
            this.application.fireEvent(ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD, {});
    },

    /**
     * Hide any dialogs that may be open
     *
     * @private
     */
    hideLogoutDialogEventHandler: function() {
        if(this.logoutDialog.dialog && logoutDialog.dialog.isVisible())
            this.logoutDialog.dialog.hide();
    }
});