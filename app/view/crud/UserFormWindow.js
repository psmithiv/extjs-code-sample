Ext.define('ExtJSCodeSample.view.crud.UserFormWindow', function() {
    return {
        extend: 'Ext.window.Window',

        require: [
            'nineam.locale.LocaleManager'
        ],

        alias: 'widget.userWindow',

        modal: true,
        resizable: false,

        items: [{
            xtype: 'form',

            width: '100%',
            flex: 1,

            layout: {
                type: 'vbox',
                padding: '10px 10px 10px 10px'
            },

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
                        { ptype: 'localization', method: 'setText', key: 'crud.window.name' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'name',
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
                        { ptype: 'localization', method: 'setText', key: 'crud.window.phone' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'phone',
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
                        { ptype: 'localization', method: 'setText', key: 'crud.window.email' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'email',
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
                    align: 'top'
                },

                items: [{
                    xtype: 'label',
                    width: 120,
                    padding: '3px 0px 0px 0px',
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'crud.window.notes' }
                    ]
                },{
                    xtype: 'textfield',
                    name: 'notes',
                    width: 180,
                    height: 100
                }]
            },{
                xtype: 'container',
                height: 5
            },{
                xtype: 'container',
                width: 300,

                layout: {
                    type: 'hbox',
                    pack: 'end'
                },

                items: [{
                    xtype: 'button',
                    action: 'reset',
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'login.reset' }
                    ]
                },{
                    xtype: 'container',
                    width: 5
                },{
                    xtype: 'button',
                    action: 'submit',
                    formBind: true,
                    disabled: true,
                    plugins: [
                        { ptype: 'localization', method: 'setText', key: 'login.submit' }
                    ]
                }]
            }]
        }]
    }
})