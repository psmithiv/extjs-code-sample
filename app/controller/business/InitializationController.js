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
Ext.define('ExtJSCodeSample.controller.business.InitializationController', {
    extend: 'Ext.app.Controller',

    requires: [
        'nineam.locale.store.LocalesStore',
        'nineam.locale.event.LocaleEvent',
        'ExtJSCodeSample.event.InitializationEvent',
        'ExtJSCodeSample.controller.business.PersistenceController'
    ],

    /**
     * Controller initialization method
     */
    init: function() {
        this.application.addListener(ExtJSCodeSample.event.InitializationEvent.APP_READY, this.initApplicationEventHandler, this);
    },

    /**
     * Initialize application event handler
     *
     * @private
     */
    initApplicationEventHandler: function() {
        this.initLocaleManager();
    },

    /**
     * Initialize LocaleManager by setting locales and selected locale
     *
     * @private
     */
    initLocaleManager: function() {
        var lm = nineam.locale.LocaleManager;
        lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, this.localeManagerInitializedEventHandler, this);

        var locales = new nineam.locale.store.LocalesStore({
            data: [
                {id: 'en_us', label: 'English', url: '/locales/en_us.json'},
                {id: 'es_us', label: 'Spanish', url: '/locales/es_us.json'}
            ]
        });
        lm.setLocales(locales);

        var locale = lm.getPersistedLocale();
        locale = locale ? locale : 'en_us';
        lm.setLocale(locale);
    },

    /**
     * LocaleManager initialized event handler
     *
     * @private
     */
    localeManagerInitializedEventHandler: function() {
        Ext.getBody().unmask();
    }
});