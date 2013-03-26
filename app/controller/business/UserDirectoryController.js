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
Ext.define('ExtJSCodeSample.controller.business.UserDirectoryController', function() {
    /**
     * Event handler to persist newly created user to server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function createUserEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(createUserSuccessHandler, createUserFailureHandler, this);
        userDelegate.createUser(event.getUser());
    }

    /**
     * Create user success handler
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    function createUserSuccessHandler(user) {
        ExtJSCodeSample.model.ModelLocator.get('users').add(user);
    }

    /**
     * Create user failure handler
     */
    function createUserFailureHandler() {

    }

    /**
     * Event handler to load users list from server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function readUsersEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(readUsersSuccessHandler, readUsersFailureHandler, this);
        userDelegate.readUsers();
    }

    /**
     * Read users success handler
     *
     * @param {ExtJSCodeSample.store.UserDirectoryStore} users
     */
    function readUsersSuccessHandler(users) {
        ExtJSCodeSample.model.ModelLocator.set('users', users);
    }

    /**
     * Read users failure handler
     */
    function readUsersFailureHandler() {

    }

    /**
     * Event handler to persist updated user to server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function updateUserEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(updateUserSuccessHandler, updateUserFailureHandler, this);
        userDelegate.updateUser(event.getUser());
    }

    function updateUserSuccessHandler(user) {
        var users = ExtJSCodeSample.model.ModelLocator.get('users');
        users.update(user);
    }

    function updateUserFailureHandler(user) {

    }

    /**
     * Event handler to delete user and persist to server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function deleteUserEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(deleteUserSuccessHandler, deleteUserFailureHandler, this);
        userDelegate.deleteUser(event.getUser());
    }

    /**
     * Delete user success handler
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    function deleteUserSuccessHandler(user) {
        var users = ExtJSCodeSample.model.ModelLocator.get('users');
        if(!users)
            return;

        var index = users.find('id', user.get('id'));
        users.removeAt(index);
    }

    function deleteUserFailureHandler() {

    }

    return {
        extend: 'Ext.app.Controller',

        requires: [
            'ExtJSCodeSample.event.UserDirectoryEvent',
            'ExtJSCodeSample.delegate.mock.UserDirectoryDelegate'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER, createUserEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, readUsersEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER, updateUserEventHandler, this);
            this.application.addListener(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, deleteUserEventHandler, this);
        }
    }
});