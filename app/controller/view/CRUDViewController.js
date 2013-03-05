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
        //fireEvent to open blank users dialog
        //console.log('newUserClickHandler');
    }

    /**
     * Edit user button click handler
     */
    function editUserClickHandler() {
        //fireEvent to open users dialog with selected user
        //console.log('editUserClickHandler');
    }

    /**
     * Delete user button click handler
     */
    function deleteUserClickHandler() {
        console.log('deleteUserClickHandler');
        var e = new ExtJSCodeSample.event.UserDirectoryEvent('USER')
        this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, e);
    }

    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views',
            'ExtJSCodeSample.event.UserDirectoryEvent'
        ],

        refs: [{
            selector: 'crudView',
            ref: 'crudView'
        },{
            selector: 'crudView grid[name=usersGrid]',
            ref: 'userGrid'
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

            if(!view.hidden)
                this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, {});
        }
    }
});
