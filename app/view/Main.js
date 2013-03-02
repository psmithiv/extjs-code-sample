Ext.define("ExtJSCodeSample.view.Main", {
    extend: 'Ext.Container',
    alias: 'widget.mainView',

    requires: [
        'ExtJSCodeSample.view.header.HeaderView',
        'ExtJSCodeSample.view.crud.CRUDView',
        'ExtJSCodeSample.view.socket.SocketView'
    ],

    layout: {
        type: 'vbox'
    },

    items: [{
            xtype: 'container',
            width: '100%',
            flex: 1,
            layout: 'fit',
            items: [{
                xtype: 'crudView',
                hidden: true
            },{
                xtype: 'socketView',
                hidden: true
            }]
        }]
});