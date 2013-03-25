Ext.define('ExtJSCodeSample.controller.view.CRUDViewController', function() {
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
        resetUserFormClickHandler.call(this);
        this.getUserForm().loadRecord(new ExtJSCodeSample.model.dto.UserDTO());

        setUserFormWindowTitle.call(this, true);

        this.getUserFormWindow().show();
    }

    /**
     * Edit user button click handler
     */
    function editUserClickHandler() {
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];
        this.getUserForm().loadRecord(selectedUser);

        setUserFormWindowTitle.call(this, false);

        this.getUserFormWindow().show();
    }

    /**
     * Delete user button click handler
     */
    function deleteUserClickHandler() {
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];
        var e = new ExtJSCodeSample.event.UserDirectoryEvent(selectedUser);
        this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, e);
    }

    /**
     * Set the form window title
     *
     * @param {Boolean} newUser
     */
    function setUserFormWindowTitle(newUser) {
        var lm = nineam.locale.LocaleManager.getProperties();
        var title = newUser ?  lm.crud.window.title.new : lm.crud.window.title.edit;
        this.getUserFormWindow().setTitle(title);
    }

    /**
     * Clear out the user form
     */
    function resetUserFormClickHandler() {
        this.getUserForm().getForm().reset();
    }

    function submitUserFormClickHandler() {
        var record = new ExtJSCodeSample.model.dto.UserDTO(this.getUserForm().getValues());

        var en = record.get('id') ? ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER : ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER;
        var e = new ExtJSCodeSample.event.UserDirectoryEvent(record);
        this.application.fireEvent(en, e);
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
        },{
            selector: 'userWindow',
            ref: 'userFormWindow'
        },{
            selector: 'userWindow form',
            ref: 'userForm'
        }],

        init: function() {
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
                },

                'userWindow button[action=reset]' : {
                    click: resetUserFormClickHandler
                },

                'userWindow button[action=submit]' : {
                    click: submitUserFormClickHandler
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

            if(this.getUserFormWindow() && view.isHidden())
                this.getUserFormWindow().hide();

            if(!view.isHidden())
                this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, {});
        }
    }
});