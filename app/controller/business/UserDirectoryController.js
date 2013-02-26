Ext.define('ExtJSCodeSample.controller.business.UserDirectoryController', function() {
    /**
     * Event handler to persist newly created user to server
     *
     * @param event:ExtJSCodeSample.event.UserDirectoryEvent
     */
    function createUserEventHandler(event) {

    }

    /**
     * Create user success handler
     *
     * @param user:UserDTO
     */
    function createUserSuccessHandler(user) {

    }

    function createUserFailureHandler() {

    }

    /**
     * Event handler to load users list from server
     *
     * @param event:UserDirectoryEvent
     */
    function readUsersEventHandler(event) {
        var userDelegate = new ExtJSCodeSample.delegate.mock.UserDirectoryDelegate(readUsersSuccessHandler, readUsersFailureHandler, this);
        userDelegate.readUsers();
    }

    /**
     * Read users success handler
     *
     * @param users:Array<UserDTO>
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
     * @param event:UserDirectoryEvent
     */
    function updateUserEventHandler(event) {

    }

    /**
     * Event handler to delete user and persist to server
     *
     * @param event:UserDirectoryEvent
     */
    function deleteUserEventHandler(event) {

    };

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