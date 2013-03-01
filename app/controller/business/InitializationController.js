Ext.define('ExtJSCodeSample.controller.business.InitializationController', function() {
    /**
     * Initialize application event handler
     */
    function initApplicationEventHandler() {
        initLocaleManager();
    }

    /**
     * Initialize LocaleManager by setting locales and selected locale
     */
    function initLocaleManager() {
        var lm = nineam.locale.LocaleManager;
        lm.addListener(nineam.locale.event.LocaleEvent.INITIALIZED, localeManagerInitializedEventHandler, this);

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
    }

    /**
     * LocaleManager initialized event handler
     */
    function localeManagerInitializedEventHandler() {
        Ext.getBody().unmask();
    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'nineam.locale.store.LocalesStore',
            'nineam.locale.event.LocaleEvent',
            'ExtJSCodeSample.event.InitializationEvent',
            'ExtJSCodeSample.controller.business.PersistenceController'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.InitializationEvent.APP_READY, initApplicationEventHandler, this)
        }
    }
});