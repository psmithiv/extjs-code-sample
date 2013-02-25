Ext.define("ExtJSCodeSample.view.login.LoginView", {
    extend: 'Ext.Container',
    alias: 'widget.loginView',

    requires: [
        'ExtJSCodeSample.view.login.LoginPanel'
    ],

    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
    },

    items: [{
        xtype: 'loginPanel'
    }]
});