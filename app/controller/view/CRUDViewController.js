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
 * View controller responsible for managing CRUDView
 */
Ext.define('ExtJSCodeSample.controller.view.CRUDViewController', {
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

    /**
     * Adds listeners for view sub component events, as well as ModelChangeEvent
     *
     * @override
     */
    init: function() {
        this.callParent(arguments);

        this.control({
            'crudView button[action=newUser]': {
                click: this.newUserClickHandler
            },

            'crudView button[action=editUser]': {
                click: this.editUserClickHandler
            },

            'crudView button[action=deleteUser]' : {
                click: this.deleteUserClickHandler
            },

            'userWindow button[action=reset]' : {
                click: this.resetUserFormClickHandler
            },

            'userWindow button[action=submit]' : {
                click: this.submitUserFormClickHandler
            }
        });

        ExtJSCodeSample.model.ModelLocator.addListener(ExtJSCodeSample.data.event.ModelChangeEvent.CHANGED, this.userDirectoryStoreChangeHandler, this);
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
    },

    /**
     * ModelLocator change event handler for setting store on CRUDView.grid
     *
     * @private
     * @param {ExtJSCodeSample.data.event.ModelChangeEvent} event - ModelChangeEvent of type CHANGED
     */
    userDirectoryStoreChangeHandler: function(event) {
        if(event.getFieldName() == 'users')
            this.getUserGrid().bindStore(event.getNewValue());
    },

    /**
     * New user button click handler that shows the UserFormWindow
     *
     * @private
     */
    newUserClickHandler: function() {
        this.resetUserFormClickHandler();

        this.getUserForm().loadRecord(new ExtJSCodeSample.model.dto.UserDTO());

        this.setUserFormWindowTitle(true);

        this.getUserFormWindow().show();
    },

    /**
     * Edit user button click handler that shows the UserFormWindow
     *
     * @private
     */
    editUserClickHandler: function() {
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];
        this.getUserForm().loadRecord(selectedUser);

        this.setUserFormWindowTitle(false);

        this.getUserFormWindow().show();
    },

    /**
     * Delete user button click handler that dispatches a UserDirectoryEvent.DELETE_USER event
     *
     * @private
     */
    deleteUserClickHandler: function() {
        var selectedUser = this.getUserGrid().getSelectionModel().getSelection()[0];
        var e = new ExtJSCodeSample.event.UserDirectoryEvent(selectedUser);
        this.application.fireEvent(ExtJSCodeSample.event.UserDirectoryEvent.DELETE_USER, e);
    },

    /**
     * Set the form window title
     *
     * @private
     * @param {Boolean} newUser - Wither or not the user being displayed in the form window is new or being edited
     */
    setUserFormWindowTitle: function(newUser) {
        var lm = nineam.locale.LocaleManager.getProperties();
        var title = newUser ?  lm.crud.window.title.new : lm.crud.window.title.edit;
        this.getUserFormWindow().setTitle(title);
    },

    /**
     * Clear out the user form
     *
     * @private
     */
    resetUserFormClickHandler: function() {
        this.getUserForm().getForm().reset();
    },

    /**
     * User form submit button click handler that dispatches UserDirectoryEvent.UPDATE_USER in the case of editing an existing user
     * and UserDirectoryEvent.CREATE_USER in the case of creating a new user
     *
     * @private
     */
    submitUserFormClickHandler: function() {
        this.getUserFormWindow().hide();

        var record = new ExtJSCodeSample.model.dto.UserDTO(this.getUserForm().getValues());
        record.set('id', this.getUserForm().getRecord().get('id'));

        var en = record.get('id') > 0 ? ExtJSCodeSample.event.UserDirectoryEvent.UPDATE_USER : ExtJSCodeSample.event.UserDirectoryEvent.CREATE_USER;
        var e = new ExtJSCodeSample.event.UserDirectoryEvent(record);
        this.application.fireEvent(en, e);
    }
});