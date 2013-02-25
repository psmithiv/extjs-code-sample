Ext.define('ExtJSCodeSample.controller.business.InitializationController', function() {
    function initApplication() {
        initLocaleManager();
    }

    function initLocaleManager() {
        var lm = plugins.locale.LocaleManager;
        lm.addListener(plugins.locale.event.LocaleEvent.LOCALE_MANAGER_READY, localeManagerReadyHandler, this);

        var locales = new plugins.locale.store.LocalesStore({
            data: [
                {id: 'en_us', label: 'English', url: '/locales/en_us.json'},
                {id: 'es_us', label: 'Spanish', url: '/locales/es_us.json'}
            ]
        });
        lm.setLocales(locales);

        var locale = lm.getPersistedLocale();
        locale = locale ? locale : 'en_us';
        lm.setLocale(locale);
    }

    function localeManagerReadyHandler() {
        Ext.getBody().unmask();
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'plugins.locale.store.LocalesStore',
            'plugins.locale.event.LocaleEvent',
            'ExtJSCodeSample.event.InitializationEvent',
            'ExtJSCodeSample.controller.business.PersistenceController'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.InitializationEvent.APP_READY, initApplication, this)
        }
    }
});