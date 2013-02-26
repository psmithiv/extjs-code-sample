Ext.onReady(function() {
    Ext.getBody().mask('Loading application', 'splashscreen');
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        plugins: '/plugins'
    }
});

Ext.application({
    controllers: [
        'ExtJSCodeSample.controller.business.InitializationController',
        'ExtJSCodeSample.controller.business.StateController',
        'ExtJSCodeSample.controller.business.SessionController',
        'ExtJSCodeSample.controller.business.UserDirectoryController',
        'ExtJSCodeSample.controller.business.PersistenceController',
        'ExtJSCodeSample.controller.view.LoginViewController',
        'ExtJSCodeSample.controller.view.MainViewController',
        'ExtJSCodeSample.controller.view.HeaderViewController',
        'ExtJSCodeSample.controller.view.CRUDViewController',
        'ExtJSCodeSample.controller.view.SocketViewController'
    ],

    views: [
        'Main',
        'ExtJSCodeSample.view.header.HeaderView',
        'ExtJSCodeSample.view.login.LoginView',
        'ExtJSCodeSample.view.crud.CRUDView',
        'ExtJSCodeSample.view.socket.SocketView'
    ],

    name: 'ExtJSCodeSample',

    requires: [
        'plugins.locale.LocaleManager',
        'plugins.locale.LocalePlugin',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.Label',
        'Ext.tab.Bar',
        'Ext.grid.Panel'
    ],

    autoCreateViewport: true,

    launch: function() {
        this.fireEvent(ExtJSCodeSample.event.InitializationEvent.APP_READY, {});
    }
});