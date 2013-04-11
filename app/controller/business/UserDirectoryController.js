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
 * Business controller for all crud functionality surrounding the UserDirectory
 */
Ext.define('ExtJSCodeSample.controller.business.UserDirectoryController', {
    extend: 'Ext.app.Controller',

    requires: [
        'ExtJSCodeSample.event.UserDirectoryEvent',
        'ExtJSCodeSample.delegate.mock.UserDirectoryDelegate'
    ],

    /**
     * Adds event listeners for UserDirectoryEvent
     *
     * @override
     */
    init: function() {
        this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER, this.createUserEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, this.readUsersEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER, this.updateUserEventHandler, this);
        this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, this.deleteUserEventHandler, this);
    },

    /**
     * Event handler to persist newly created user to server
     *
     * @private
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event - UserDirectoryEvent of type CREATE_USER
     */
    createUserEventHandler: function(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(this.createUserSuccessHandler, this.createUserFailureHandler, this);
        userDelegate.createUser(event.getUser());
    },

    /**
     * Create user success handler to sett UserDTO on ModelLocator.users
     *
     * @private
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO returned by server after successful create Ajax call
     */
    createUserSuccessHandler: function(user) {
        ExtJSCodeSample.model.ModelLocator.get('users').add(user);
    },

    /**
     * Create user failure handler
     *
     * @private
     */
    createUserFailureHandler: function() {

    },

    /**
     * Event handler to load users list from server
     *
     * @private
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event - UserDirectoryEvent of type READ_USERS
     */
    readUsersEventHandler: function(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(this.readUsersSuccessHandler, this.readUsersFailureHandler, this);
        userDelegate.readUsers();
    },

    /**
     * Read users success handler to set UserDirectoryStore on ModelLocator
     *
     * @private
     * @param {ExtJSCodeSample.store.UserDirectoryStore} users - UserDirectoryStore returned by server after successful Ajax read users call
     */
    readUsersSuccessHandler: function(users) {
        ExtJSCodeSample.model.ModelLocator.set('users', users);
    },

    /**
     * Read users failure handler
     *
     * @private
     */
    readUsersFailureHandler: function() {

    },

    /**
     * Event handler to persist updated user to server
     *
     * @private
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event UserDirectoryEvent of type UPDATE_USER
     */
    updateUserEventHandler: function(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(this.updateUserSuccessHandler, this.updateUserFailureHandler, this);
        userDelegate.updateUser(event.getUser());
    },

    /**
     * Update user success handler to update a specific user on ModelLocator.users
     *
     * @private
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO returned by server after a successful update Ajax call
     */
    updateUserSuccessHandler: function(user) {
        var users = ExtJSCodeSample.model.ModelLocator.get('users');
        users.update(user);
    },

    /**
     * Update user fault handler
     *
     * @private
     * @param {Object} fault - Fault Object
     */
    updateUserFailureHandler: function(fault) {

    },

    /**
     * Event handler to delete user and persist to server
     *
     * @private
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event - UserDirectoryEvent of type DELETE_USER
     */
    deleteUserEventHandler: function(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(this.deleteUserSuccessHandler, this.deleteUserFailureHandler, this);
        userDelegate.deleteUser(event.getUser());
    },

    /**
     * Delete user success handler to delete user from ModelLocator.users
     *
     * @private
     * @param {ExtJSCodeSample.model.dto.UserDTO} user - UserDTO returned by server after a successful delete Ajax call
     */
    deleteUserSuccessHandler: function(user) {
        var users = ExtJSCodeSample.model.ModelLocator.get('users');
        if(!users)
            return;

        var index = users.find('id', user.get('id'));
        users.removeAt(index);
    },

    /**
     * Delete user fault handler
     *
     * @private
     */
    deleteUserFailureHandler: function() {

    }
});