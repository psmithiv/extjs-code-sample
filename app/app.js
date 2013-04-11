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
 * Application Entry Point
 */

Ext.onReady(function() {
    Ext.getBody().mask('Loading application', 'splashscreen');
});

Ext.Loader.setConfig({
    enabled: true,
    paths: {
        nineam: '/plugins/nineam'
    }
});

Ext.application({
    controllers: [
        'ExtJSCodeSample.controller.business.InitializationController',
        'ExtJSCodeSample.controller.business.StateController',
        'ExtJSCodeSample.controller.business.SessionController',
        'ExtJSCodeSample.controller.business.UserDirectoryController',
        'ExtJSCodeSample.controller.business.PersistenceController',
        'ExtJSCodeSample.controller.business.DialogController',
        'ExtJSCodeSample.controller.view.LoginViewController',
        'ExtJSCodeSample.controller.view.MainViewController',
        'ExtJSCodeSample.controller.view.HeaderViewController',
        'ExtJSCodeSample.controller.view.CRUDViewController',
        'ExtJSCodeSample.controller.view.SocketViewController'
    ],

    views: [
        'Main',
        'ExtJSCodeSample.view.header.HeaderView',
        'ExtJSCodeSample.view.login.LoginView',
        'ExtJSCodeSample.view.crud.CRUDView',
        'ExtJSCodeSample.view.socket.SocketView'
    ],

    name: 'ExtJSCodeSample',

    requires: [
        'nineam.locale.LocaleManager',
        'nineam.locale.LocalePlugin',
        'ExtJSCodeSample.controls.Grid',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.Label',
        'Ext.tab.Bar',
        'Ext.grid.Panel'
    ],

    autoCreateViewport: true,

    /**
     * Event handler for application launch that dispatches InitializationEvent.APP_READY
     */
    launch: function() {
        this.fireEvent(ExtJSCodeSample.event.InitializationEvent.APP_READY, {});
    }
});