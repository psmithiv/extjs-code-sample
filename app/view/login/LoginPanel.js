Ext.define('ExtJSCodeSample.view.login.LoginPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginPanel',

    bodyPadding: 10,

    plugins: [
        { ptype: 'localization', method: 'setTitle', key: 'login.title' }
    ],

    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'middle'
        },

        items: [{
            xtype: 'label',
            width: 120,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'login.username' }
            ]
        },{
            xtype: 'textfield',
            name: 'username',
            width: 180,
            allowBlank: false
        }]
    },{
        xtype: 'container',
        height: 5
    },{
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'middle'
        },

        items: [{
            xtype: 'label',
            width: 120,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'login.password' }
            ]
        },{
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            width: 180,
            allowBlank: false
        }]
    },{
        xtype: 'container',
        width: 300,

        layout: {
            type: 'hbox',
            aligh: 'middle',
            pack: 'end'
        },

        items: [{
            xtype: 'checkbox',
            name: 'rememberMe'
        },{
            xtype: 'container',
            width: 5
        },{
            xtype: 'label',
            width: 162,
            padding: '4px 0px 10px 0px',
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'login.rememberMe' }
            ]
        }]
    },{
        xtype: 'container',
        width: 300,

        layout: {
            type: 'hbox',
            pack: 'end'
        },

        items: [{
            xtype: 'button',
            action: 'clearLogin',
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'login.reset' }
            ]
        },{
            xtype: 'container',
            width: 5
        },{
            xtype: 'button',
            action: 'login',
            formBind: true,
            disabled: true,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'login.submit' }
            ]
        }]
    }]
});
