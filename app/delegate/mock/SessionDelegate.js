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
Ext.define('ExtJSCodeSample.delegate.mock.SessionDelegate', function() {
    var _success = null;
    var _failure = null;
    var _scope = null;

    return {
        requires: [
            'Ext.Ajax',
            'ExtJSCodeSample.model.dto.UserDTO'
        ],

        constructor: function(success, failure, scope) {
            _success = success;
            _failure = failure;
            _scope = scope;
        },

        /**
         * Login to server
         *
         * @param {String} username
         * @param {String} password
         */
        login: function(username, password) {
            var response = "{" +
                                "'success': true, " +
                                "'authenticatedUser': {" +
                                    "'username': '" + username + "', " +
                                    "'name': 'Paul Smith', " +
                                    "'phone': '917-674-9375', " +
                                    "'email': 'paul.smith.iv@ninthavenuemedia.com', " +
                                    "'notes': ''" +
                                "}" +
                            "}";

            if(!_success || !_scope)
                return;

            response = Ext.JSON.decode(response);
            var userDTO = new ExtJSCodeSample.model.dto.UserDTO(response.authenticatedUser);
            _success.call(_scope, userDTO);
        }
    }
});