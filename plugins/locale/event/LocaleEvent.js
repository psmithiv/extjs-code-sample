Ext.define('plugins.locale.event.LocaleEvent', function() {
    return {
        statics: {
            INITIALIZED: 'plugins.locale.event.LocaleEvent.INITIALIZED',
            LOCALES_CHANGED: 'plugins.locale.event.LocaleEvent.LOCALES_CHANGED',
            LOCALE_CHANGED: 'plugins.locale.event.LocaleEvent.LOCALE_CHANGED'
        }
    }
});