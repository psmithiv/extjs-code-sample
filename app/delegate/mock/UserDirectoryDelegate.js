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
 * Mock delegate for making user directory CRUD calls
 */
Ext.define('ExtJSCodeSample.delegate.mock.UserDirectoryDelegate', {
    requires: [
        'ExtJSCodeSample.store.UserDirectoryStore'
    ],

    /**
     * @private
     * {Function} success - Function to call after successful Ajax call
     */
    success: {},

    /**
     * @private
     * {Function} failure - Function to call after failed Ajax call
     */
    failure: {},

    /**
     * @private
     * {Object} scope - Scope to execute success/failure methods within
     */
    scope: {},

    /**
     * @private
     * {String} readUsersResponse - Mock read users response data
     */
    readUsersResponse: "{" +
                            "'success': true, " +
                            "'users': [{" +
                                "'id': 100, " +
                                "'username': 'psmithiv', " +
                                "'name': 'Paul Smith', " +
                                "'phone': '555-555-5555', " +
                                "'email': 'email@ninthavenuemedia.com', " +
                                "'notes': 'Daddy'" +
                            "},{" +
                                "'id': 101, " +
                                "'username': 'ksmithiv', " +
                                "'name': 'Karla Smith', " +
                                "'phone': '555-555-5555', " +
                                "'email': 'email@ninthavenuemedia.com', " +
                                "'notes': 'Mommy'" +
                            "},{" +
                                "'id': 102, " +
                                "'username': 'ajsmith', " +
                                "'name': 'Alana Smith', " +
                                "'phone': '555-555-5555', " +
                                "'email': 'email@ninthavenuemedia.com', " +
                                "'notes': 'Daughter'" +
                            "},{" +
                                "'id': 103, " +
                                "'username': 'atsmith', " +
                                "'name': 'Aiden Smith', " +
                                "'phone': '555-555-5555', " +
                                "'email': 'email@ninthavenuemedia.com', " +
                                "'notes': 'Son'" +
                            "}]" +
                        "}",

    /**
     * @param {Function} success - Method to call after successful Ajax call
     * @param {Function} failure - Method to call after failed Ajax call
     * @param {Object} scope - The scope within which to execute a success/failure method call
     */
    constructor: function(success, failure, scope) {
        this.success = success;
        this.failure = failure;
        this.scope = scope;
    },

    /**
     * Save new user to server
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO to be saved
     */
    createUser: function(user) {
        if(!this.success || !this.scope)
            return;

        user.set('id', Math.floor(Math.random() * 1000 + 1));
        this.success.call(this.scope, user);
    },

    /**
     * Get list of users from server
     */
    readUsers: function() {
        if(!this.success || !this.scope)
            return;

        var data = ExtJSCodeSample.model.ModelLocator.get('users');
        if(!data)
            data = new ExtJSCodeSample.store.UserDirectoryStore({data: Ext.JSON.decode(this.readUsersResponse)});

        this.success.call(this.scope, data);
    },

    /**
     * Call server to update user
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO to update server side
     */
    updateUser: function(user) {
        if(!this.success || !this.scope)
            return;

        this.success.call(this.scope, user);
    },

    /**
     * Notify server to delete user
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO to be deleted server side
     */
    deleteUser: function(user) {
        if(!this.success || !this.scope)
            return;

        this.success.call(this.scope, user)
    }
});