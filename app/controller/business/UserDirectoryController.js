Ext.define('ExtJSCodeSample.controller.business.UserDirectoryController', function() {
    /**
     * Event handler to persist newly created user to server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function createUserEventHandler(event) {

    }

    /**
     * Create user success handler
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    function createUserSuccessHandler(user) {

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

    }

    /**
     * Event handler to delete user and persist to server
     *
     * @param {ExtJSCodeSample.event.UserDirectoryEvent} event
     */
    function deleteUserEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(deleteUsersSuccessHandler, deleteUsersFailureHandler, this);
        userDelegate.deleteUser(event.getUser());
    }

    /**
     * Delete user success handler
     *
     * @param {ExtJSCodeSample.model.dto.UserDTO} user
     */
    function deleteUsersSuccessHandler(user) {
        var users = ExtJSCodeSample.model.ModelLocator.get('users');
        if(!users)
            return;

        var index = users.find('id', user.get('id'));
        users.removeAt(index);
    }

    function deleteUsersFailureHandler() {

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