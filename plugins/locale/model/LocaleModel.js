Ext.define('plugins.locale.model.LocaleModel', function() {
    return {
        extend: 'Ext.data.Model',

        fields: [
            {name: 'id', type: 'string'},
            {name: 'label', type: 'string'},
            {name: 'url', type: 'string'}
        ]
    }
});