Ext.define('ExtJSCodeSample.controller.view.CRUDViewController', function() {
    function newUserClickHandler() {
        //fireEvent to open blank users dialog
        //console.log('newUserClickHandler');
    };

    function editUserClickHandler() {
        //fireEvent to open users dialog with selected user
        //console.log('editUserClickHandler');
    };

    function deleteUserClickHandler() {
        //fireEvent to show are you sure dialog box (yes|no)
        //console.log('deleteUserClickHandler');
    };

    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views',
            'ExtJSCodeSample.event.UserDirectoryEvent'
        ],

        refs: [{
            selector: 'crudView',
            ref: 'crudView'
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
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            var view = this.getCrudView();
            view.setVisible(event.getView() == ExtJSCodeSample.model.constants.Views.CRUD);

            if(view.hidden)
                return;

            this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.READ_USERS, {});
        }
    }
});
