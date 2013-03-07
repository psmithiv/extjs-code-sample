Ext.define('nineam.locale.LocaleManager', function() {
    var initialized = false;

    var _locales = null;
    var _locale = null;
    var _properties = null;

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
            setClient(clients[i]);
        }
    }

    /**
     * Call specify method on client object and pass value from _properties based on key
     *
     * @param {Object} clientModel
     */
    function setClient(clientModel) {
        try {
            clientModel.client[clientModel.method].call(clientModel.client, eval('_properties.' + clientModel.key));
        } catch(e) {}
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
         * @param {Object} clientModel
         */
        //TODO: Create nineam.model.ClientModel
        registerClient: function(clientModel) {
            clients.push(clientModel);

            if(_properties)
                setClient(clientModel);
        }
    }
});