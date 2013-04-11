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
Ext.define('ExtJSCodeSample.delegate.mock.SessionDelegate', {
    requires: [
        'Ext.Ajax',
        'ExtJSCodeSample.model.dto.UserDTO'
    ],

    /**
     * @private
     */
    success: null,

    /**
     * @private
     */
    failure: null,

    /**
     * @private
     */
    scope: null,

    /**
     * @constructor
     * @param {Function} success - Function to call on successful Ajax call
     * @param {Function} failure - Function to call on failed Ajax call
     * @param {Object} scope -
     */
    constructor: function(success, failure, scope) {
        this.success = success;
        this.failure = failure;
        this.scope = scope;
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

        if(!this.success || !this.scope)
            return;

        response = Ext.JSON.decode(response);
        var userDTO = new ExtJSCodeSample.model.dto.UserDTO(response.authenticatedUser);
        this.success.call(this.scope, userDTO);
    }
});