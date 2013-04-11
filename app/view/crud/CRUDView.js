/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 extjs-code-sample is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 extjs-code-sample is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with extjs-code-sample.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Crud View (UserDirectory)
 */
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
        maintainSelection: true,

        columns: [{
            dataIndex: 'name',
            width: 150,
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.name' }
            ]
        },{
            dataIndex: 'phone',
            width: 150,
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.phone' }
            ]
        },{
            dataIndex: 'email',
            width: 250,
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.email' }
            ]
        },{
            dataIndex: 'notes',
            flex: 1,
            hideable: false,
            plugins: [
                { ptype: 'localization', method: 'setText', key: 'crud.grid.notes' }
            ]
        }]
    },{
        xtype: 'userWindow',
        renderTo: document.body,
        closeAction: 'hide'
    }]
});