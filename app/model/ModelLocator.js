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
Ext.define('ExtJSCodeSample.model.ModelLocator', function() {
    return {
        extend: 'ExtJSCodeSample.data.ObservableModel',

        requires: [
            'ExtJSCodeSample.model.SessionModel'
        ],

        singleton: true,

        fields: [
            {name: 'session', type: 'ExtJSCodeSample.model.SessionModel'},
            {name: 'usersList', type: 'Ext.Store'}
        ],

        constructor: function() {
            this.callParent(arguments);

            //We cannot set a fields defaultValue to a complex object, so we do it here
            this.set('session', new ExtJSCodeSample.model.SessionModel(), true);
        }
    }
});