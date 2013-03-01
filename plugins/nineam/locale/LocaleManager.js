Ext.define('nineam.locale.LocaleManager', function() {
    var initialized = false;

    var _locales = {};
    var _locale = '';
    var _properties = {};

    var clients = [];
    /**
     * Load properties file for localizing components
     */
    function loadPropertiesFile() {
        var d = new nineam.locale.delegate.LocaleDelegate(loadPropertiesFileResultHandler, loadPropertiesFileFaultHandler, this);
        var rec = _locales.findRecord('id', _locale);
        d.loadPropertiesFile(rec.get('url'));
    }

    /**
     * Load localization properties file result handler
     *
     * @param result:Object
     */
    function loadPropertiesFileResultHandler(result) {
        _properties = result;

        updateClients();

        Ext.util.Cookies.set('locale', _locale, new Date(new Date().getTime()+(1000*60*60*24*365)));

        this.fireEvent(nineam.locale.event.LocaleEvent.LOCALE_CHANGED, {});

        if(!initialized)
        {
            initialized = true;
            this.fireEvent(nineam.locale.event.LocaleEvent.INITIALIZED, {});
        }
    }

    /**
     * Load localization properties file fault handler
     */
    function loadPropertiesFileFaultHandler() {
        //dispatch fault event
    }

    /**
     * Go over and update all localized components in the application
     */
    function updateClients() {
        var len = clients.length;
        for(var i=0; i<len; i++) {
            var c = clients[i];

            try {
                //c.getClient()[c.getMethod()].call(c.getClient(), eval('_properties.' + c.getKey()));
                c.client[c.method].call(c.client, eval('_properties.' + c.key));
            } catch(e) {
                continue;
            }
        }
    }

    return {
        extend: 'Ext.app.Controller',
        singleton: true,

        requires: [
            'nineam.locale.event.LocaleEvent',
            'nineam.locale.delegate.LocaleDelegate'
        ],

        /**
         * Get store of available locales
         *
         * @return {nineam.locale.store.LocalesStore}
         */
        getLocales: function() {
            return _locales;
        },

        /**
         * Set store of available locales
         *
         * @param value:nineam.locale.store.LocalesStore
         */
        setLocales: function(value) {
            _locales = value;

            this.fireEvent(nineam.locale.event.LocaleEvent.LOCALES_CHANGED, {});
        },

        /**
         * Get the currently selected locale
         *
         * @return {string}
         */
        getLocale: function() {
            return _locale;
        },

        /**
         * Set the current locale
         *
         * @param value:String
         */
        setLocale: function(value) {
            _locale = value;

            loadPropertiesFile.call(this);
        },

        /**
         * Get loaded locales object
         *
         * @return {{}}
         */
        getProperties: function() {
            return _properties;
        },

        /**
         * Get id of last loaded locale
         * @return {string}
         */
        getPersistedLocale: function() {
            return Ext.util.Cookies.get('locale');
        },

        /**
         * Register a client component for localization
         *
         * @param client:nineam.model.ClientModel
         */
        registerClient: function(client) {
            clients.push(client);
        }
    }
});