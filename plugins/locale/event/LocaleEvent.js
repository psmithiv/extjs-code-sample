Ext.define('plugins.locale.event.LocaleEvent', function() {
    return {
        statics: {
            LOCALE_MANAGER_READY: 'plugins.locale.event.LocaleEvent.LOCALE_MANAGER_READY',
            LOCALES_CHANGED: 'plugins.locale.event.LocaleEvent.LOCALES_CHANGED',
            LOCALE_CHANGED: 'plugins.locale.event.LocaleEvent.LOCALE_CHANGED'
        }
    }
});