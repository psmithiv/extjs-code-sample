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
Ext.define('ExtJSCodeSample.controller.view.HeaderViewController', {
    extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

    requires: [
        'ExtJSCodeSample.model.constants.Views',
        'ExtJSCodeSample.event.StateEvent',
        'ExtJSCodeSample.data.event.ModelChangeEvent',
        'ExtJSCodeSample.model.ModelLocator',
        'nineam.locale.LocaleManager',
        'nineam.locale.event.LocaleEvent'
    ],

    refs: [{
        selector: 'headerView',
        ref: 'headerView'
    },{
        selector: 'headerView container[name=navigationContainer]',
        ref: 'navigationContainer'
    },{
        selector: 'headerView button[name=crud]',
        ref: 'crudButton'
    },{
        selector: 'headerView button[name=socket]',
        ref: 'socketButton'
    },{
        selector: 'headerView button[name=map]',
        ref: 'mapButton'
    },{
        selector: 'headerView label[name=userInfo]',
        ref: 'userInfoLabel'
    },{
        selector: 'headerView combobox[name=locales]',
        ref: 'localesComboBox'
    }],

    /**
     * Controller initialization method
     */
    init: function() {
        this.callParent(arguments);

        this.control({
            'headerView button[action=nav]': {
                click: this.navigationClickHandler
            },

            'headerView combobox[name=locales]': {
                select: this.localesSelectHandler
            }
        });

        var sm = ExtJSCodeSample.model.ModelLocator.get('session');
        sm.addListener(ExtJSCodeSample.data.event.ModelChangeEvent.CHANGED, this.sessionModelChangedHandler, this);

        nineam.locale.LocaleManager.addListener(nineam.locale.event.LocaleEvent.LOCALES_CHANGED, this.localesChangedEventHandler, this);
        nineam.locale.LocaleManager.addListener(nineam.locale.event.LocaleEvent.LOCALE_CHANGED, this.localeChangedEventHandler, this);
    },

    /**
     * @override
     */
    applicationStateChangedHandler: function(event) {
        switch(event.getView())
        {
            case ExtJSCodeSample.model.constants.Views.CRUD:
                this.getCrudButton().toggle(true);
                break;

            case ExtJSCodeSample.model.constants.Views.SOCKET:
                this.getSocketButton().toggle(true);
                break;

            case ExtJSCodeSample.model.constants.Views.MAP:
                this.getMapButton().toggle(true);
                break;

            default:
                this.getCrudButton().toggle(false);
                this.getSocketButton().toggle(false);
                this.getMapButton().toggle(false);
        }
    },

    /**
     * Click event handler for headerView.buttons
     *
     * @private
     * @param {Ext.Button} target
     */
    navigationClickHandler: function(target) {
        var se;
        switch(target) {
            case this.getCrudButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.CRUD, {});
                break;

            case this.getSocketButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.SOCKET, {});
                break;

            case this.getMapButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.MAP, {});
                break;
        }

        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_STATE, se);
    },

    /**
     * Locales combobox selection change handler
     *
     * @private
     * @param {Ext.ComboBox} target
     * @param {nineam.locale.model.LocaleModel} record
     */
    localesSelectHandler: function(target, record) {
        nineam.locale.LocaleManager.setLocale(record[0].data.id);
    },

    /**
     * Session Model changed event handler
     *
     * @private
     * @param {ExtJSCodeSample.data.event.ModelChangeEvent} event
     */
    sessionModelChangedHandler: function(event) {
        var session = ExtJSCodeSample.model.ModelLocator.get('session');
        this.getNavigationContainer().setVisible(session.get('authenticated'));

        if(event.getFieldName() == 'authenticatedUser') {
            var user = session.get('authenticatedUser');
            this.getUserInfoLabel().setText([user.get('username'), user.get('email')]);
        }
    },

    /**
     * Locales changed event handler
     *
     * @private
     * @param {ExtJSCodeSample.event.LocaleEvent} event
     */
    localesChangedEventHandler: function(event) {
        this.getLocalesComboBox().bindStore(nineam.locale.LocaleManager.getLocales(), true);
    },

    /**
     * Selected locale changed event handler
     *
     * @private
     * @param {ExtJSCodeSample.event.LocaleEvent} event
     */
    localeChangedEventHandler: function(event) {
        this.getLocalesComboBox().setValue(nineam.locale.LocaleManager.getLocale());
    }
});