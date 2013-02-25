Ext.define("ExtJSCodeSample.view.header.HeaderView", {
    extend: 'Ext.Container',
    alias: 'widget.headerView',

    requires: [
        'ExtJSCodeSample.controls.Marquee'
    ],

    layout: {
        type: 'hbox',
        padding: 10
    },

    items: [{
        xtype: 'panel',
        width: 100,
        height: '100%',
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'center'
        },
        items: [{
            xtype: 'container',
            plugins: [
                { ptype: 'localization', method: 'update', key: 'header.logo' }
            ]
        }]
    },{
        xtype: 'container',
        width: 10
    },{
        xtype: 'container',
        flex: 1,
        height: '100%',
        padding: '18 0 0 0',
        items: [{
            xtype: 'button',
            action: 'nav',
            name: 'crud',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.crud' }
            ]
        },{
            xtype: 'button',
            action: 'nav',
            name: 'socket',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.sockets' }
            ]
        },{
            xtype: 'button',
            action: 'nav',
            name: 'map',
            enableToggle: true,
            toggleGroup: 'navgroup',
            allowDepress: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'header.buttons.maps' }
            ]
        }]
    },{
        xtype: 'marquee',
        name: 'userInfo',
        padding: '4 0 0 0'
    },{
        xtype: 'container',
        width: 10
    },{
        xtype: 'combobox',
        valueField: 'id',
        displayField: 'label',
        name: 'locales',
        width: 100,
        editable: false,
        forceSelection: true
    }]
});