Ext.define('ExtJSCodeSample.controller.view.HeaderViewController', function() {
    /**
     * Click event handler for headerView.buttons
     *
     * @param target:Button
     * @param event:Event
     */
    function navigationClickHandler(target, event) {
        var se;
        switch(target) {
            case this.getCrudButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.CRUD, {});
                break;

            case this.getSocketButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.SOCKET, {});
                break;

            case this.getMapButton():
                se = new ExtJSCodeSample.event.StateEvent(ExtJSCodeSample.model.constants.Views.MAP, {});
                break;
        }

        this.application.fireEvent(ExtJSCodeSample.event.StateEvent.SET_STATE, se);
    }

    function localesSelectHandler(target, record) {
        plugins.locale.LocaleManager.setLocale(record[0].data.id);
    }

    /**
     * Session Model changed event handler
     *
     * @param event:ModelChangeEvent
     */
    function sessionModelChangedHandler(event) {
        if(event.getFieldName() != 'authenticatedUser')
            return;

        var user = ExtJSCodeSample.model.ModelLocator.get('session').get('authenticatedUser');
        this.getUserInfoLabel().setText([user.get('username'), user.get('email')]);
    }

    /**
     * Locales changed event handler
     *
     * @param event:LocaleEvent
     */
    function localesChangedEventHandler(event) {
        this.getLocalesComboBox().bindStore(plugins.locale.LocaleManager.getLocales(), true);
    }

    function localeChangedEventHandler(event) {
        this.getLocalesComboBox().setValue(plugins.locale.LocaleManager.getLocale());
    }

    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views',
            'ExtJSCodeSample.event.StateEvent',
            'ExtJSCodeSample.data.event.ModelChangeEvent',
            'ExtJSCodeSample.model.ModelLocator',
            'plugins.locale.LocaleManager',
            'plugins.locale.event.LocaleEvent'
        ],

        refs: [{
            selector: 'headerView',
            ref: 'headerView'
        },{
            selector: 'headerView button[name=crud]',
            ref: 'crudButton'
        },{
            selector: 'headerView button[name=socket]',
            ref: 'socketButton'
        },{
            selector: 'headerView button[name=map]',
            ref: 'mapButton'
        },{
            selector: 'headerView label[name=userInfo]',
            ref: 'userInfoLabel'
        },{
            selector: 'headerView combobox[name=locales]',
            ref: 'localesComboBox'
        }],

        init: function() {
            this.callParent(arguments);

            this.control({
                'headerView button[action=nav]': {
                    click: navigationClickHandler
                },

                'headerView combobox[name=locales]': {
                    select: localesSelectHandler
                }
            });

            var sm = ExtJSCodeSample.model.ModelLocator.get('session');
            sm.addListener(ExtJSCodeSample.data.event.ModelChangeEvent.CHANGED, sessionModelChangedHandler, this);

            plugins.locale.LocaleManager.addListener(plugins.locale.event.LocaleEvent.LOCALES_CHANGED, localesChangedEventHandler, this);
            plugins.locale.LocaleManager.addListener(plugins.locale.event.LocaleEvent.LOCALE_CHANGED, localeChangedEventHandler, this);
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            switch(event.getView())
            {
                case ExtJSCodeSample.model.constants.Views.CRUD:
                    this.getCrudButton().toggle(true);
                    break;

                case ExtJSCodeSample.model.constants.Views.SOCKET:
                    this.getSocketButton().toggle(true);
                    break;

                case ExtJSCodeSample.model.constants.Views.MAP:
                    this.getMapButton().toggle(true);
                    break;

                default:
                    this.getCrudButton().toggle(false);
                    this.getSocketButton().toggle(false);
                    this.getMapButton().toggle(false);
            }
        }
    }
});