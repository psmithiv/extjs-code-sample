Ext.define('ExtJSCodeSample.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',

    requires: [
        'ExtJSCodeSample.view.login.LoginView',
        'ExtJSCodeSample.view.Main'
    ],

    minWidth: 750,
    minHeight: 550,
    autoScroll: true,

    layout: 'fit',

    items: [{
        xtype: 'loginView'
    },{
        xtype: 'mainView',
        hidden: true
    }]
});