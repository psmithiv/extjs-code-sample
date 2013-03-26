/*
 Copyright (c) 2013 [ninth avenue media, LLC] (mailto: paul.smith.iv@ninthavenuemedia.com)

 9am-localization-plugin is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 9am-localization-plugin is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with 9am-localization-plugin.  If not, see <http://www.gnu.org/licenses/>.
*/
Ext.define('nineam.locale.LocalePlugin', function() {
    return {
        extend: 'Ext.AbstractPlugin',
        alias: 'plugin.localization',

        required: [
            'nineam.locale.LocaleManager',
            'nineam.locale.model.ClientModel'
        ],

        // these get overridden each time the plugins client is configured
        method: '',
        key: '',

        /**
         * @override
         */
        init: function(client) {
            //TODO: Create client model object for client registration
            //var m = new nineam.locale.model.ClientModel({client: client, method: this.method, key: this.key});
            nineam.locale.LocaleManager.registerClient({client: client, method: this.method, key: this.key});
        }
    }
});