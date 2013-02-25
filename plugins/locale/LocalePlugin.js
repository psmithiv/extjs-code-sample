Ext.define('plugins.locale.LocalePlugin', function() {
    return {
        extend: 'Ext.AbstractPlugin',
        alias: 'plugin.localization',

        required: [
            'plugins.locale.LocaleManager',
            'plugins.locale.model.ClientModel'
        ],

        // these get overridden each time the plugins client is configured
        method: '',
        key: '',

        /**
         * @override
         */
        init: function(client) {
            //TODO: Create client model object for client registration
            //var m = new plugins.locale.model.ClientModel({client: client, method: this.method, key: this.key});
            plugins.locale.LocaleManager.registerClient({client: client, method: this.method, key: this.key});
        }
    }
});