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
 * Login panel/form to authenticating user
 */
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
