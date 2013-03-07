Ext.define('ExtJSCodeSample.controller.view.CRUDViewController', function() {
    var userFormWindow

    /**
     * ModelLocator change event handler for setting store on CRUDView.grid
     *
     * @param {ExtJSCodeSample.data.event.ModelChangeEvent} event
     */
    function userDirectoryStoreChangeHandler(event) {
        if(event.getFieldName() != 'users')
            return;

        this.getUserGrid().bindStore(event.getNewValue());
    }

    /**
     * New user button click handler
     */
    function newUserClickHandler() {
        console.log('newUserClickHandler');
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];

        userFormWindow = new ExtJSCodeSample.view.crud.UserFormWindow({existingUser: false});
        userFormWindow.show();
    }

    function saveNewUser(user) {
        //dispatch event to save new user
    }

    /**
     * Edit user button click handler
     */
    function editUserClickHandler() {
        //fireEvent to open users dialog with selected user
        //console.log('editUserClickHandler');
    }

    function saveEditedUser(user) {
        //dispatch event to save edited user
    }

    /**
     * Delete user button click handler
     */
    function deleteUserClickHandler() {
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];
        var e = new ExtJSCodeSample.event.UserDirectoryEvent(selectedUser);
        this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, e);
    }

    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views',
            'ExtJSCodeSample.event.UserDirectoryEvent',
            'ExtJSCodeSample.view.crud.UserFormWindow'
        ],

        refs: [{
            selector: 'crudView',
            ref: 'crudView'
        },{
            selector: 'crudView grid[name=usersGrid]',
            ref: 'userGrid'
        }],

        init: function() {
            console.log('init');

            this.callParent(arguments);

            this.control({
                'crudView button[action=newUser]': {
                    click: newUserClickHandler
                },

                'crudView button[action=editUser]': {
                    click: editUserClickHandler
                },

                'crudView button[action=deleteUser]' : {
                    click: deleteUserClickHandler
                }
            });

            ExtJSCodeSample.model.ModelLocator.addListener(ExtJSCodeSample.data.event.ModelChangeEvent.CHANGED, userDirectoryStoreChangeHandler, this);
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            var view = this.getCrudView();
            view.setVisible(event.getView() == ExtJSCodeSample.model.constants.Views.CRUD);

            if(userFormWindow && view.isHidden())
                userFormWindow.hide();

            if(!view.isHidden())
                this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, {});
        }
    }
});