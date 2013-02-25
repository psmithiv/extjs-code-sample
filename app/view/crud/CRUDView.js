Ext.define('ExtJSCodeSample.view.crud.CRUDView', {
    extend: 'Ext.Container',
    alias: 'widget.crudView',
    cls: 'view',

    layout: {
        type: 'vbox'
    },

    items: [{
        xtype: 'container',
        width: '100%',
        height: 22,
        layout: {
            type: 'hbox'
        },
        items: [{
            xtype: 'container',
            height: 22,
            flex: 1,
            layout: {
                type: 'vbox',
                padding: '6 0 0 0'
            },

            items: [{
                xtype: 'label',
                cls: 'arial14',
                plugins: [
                    { ptype: 'localization', method: 'setText', key: 'crud.title' }
                ]
            }]
        },{
            xtype: 'button',
            action: 'newUser',
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.buttons.new' }
            ]
        },{
            xtype: 'container',
            width : 5
        },{
            xtype: 'button',
            action: 'editUser',
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.buttons.edit' }
            ]
        },{
            xtype: 'container',
            width : 5
        },{
            xtype: 'button',
            action: 'deleteUser',
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.buttons.delete' }
            ]
        }]
    },{
        xtype: 'container',
        height: 5
    },{
        xtype: 'grid',
        width: '100%',
        name: 'usersGrid',
        flex: 1,

        columns: [{
            dataIndex: 'name',
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.name' }
            ]
        },{
            dataIndex: 'phone',
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.phone' }
            ]
        },{
            dataIndex: 'email',
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.email' }
            ]
        },{
            dataIndex: 'note',
            flex: 1,
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.notes' }
            ]
        }]
    }]
});