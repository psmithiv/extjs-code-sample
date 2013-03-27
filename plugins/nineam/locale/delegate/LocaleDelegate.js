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
Ext.define('nineam.locale.delegate.LocaleDelegate', function() {
    var _success = null;
    var _failure = null;
    var _scope = null;

    function ajaxSuccess(response) {
        response = Ext.JSON.decode(response.responseText);
        _success.call(_scope, response);
    }

    function ajaxFailure() {
        //TODO
    }

    return {
        requires: [
            'Ext.Ajax'
        ],

        constructor: function(success, failure, scope) {
            _success = success;
            _failure = failure;
            _scope = scope;
        },

        loadPropertiesFile: function(url) {
            if(!_success || !_scope)
                return;

            var req = Ext.Ajax.request({
                url: url,

                success: ajaxSuccess,
                failure: ajaxFailure
            })
        }
    }
});