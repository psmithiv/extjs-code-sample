Ext.define('plugins.locale.store.LocalesStore', function() {
    return {
        extend: 'Ext.data.Store',

        requires: [
            'plugins.locale.model.LocaleModel'
        ],

        model: 'plugins.locale.model.LocaleModel',

        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                root: ''
            }
        }
    }
});