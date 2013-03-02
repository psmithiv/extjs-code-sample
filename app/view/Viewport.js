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

    layout: 'vbox',

    items: [{
        xtype: 'headerView',
        width: '100%',
        height: 60
    },{
        xtype: 'container',
        width: '100%',
        flex: 1,
        layout: 'fit',

        items: [{
                xtype: 'loginView',
                padding: '0px 0px 60px 0px'
            },{
                xtype: 'mainView',
                hidden: true
            }
        ]
    }]
});