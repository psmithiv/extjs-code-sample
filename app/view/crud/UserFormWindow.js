Ext.define('ExtJSCodeSample.view.crud.UserFormWindow', function() {
    return {
        extend: 'Ext.window.Window',

        require: [
            'nineam.locale.LocaleManager'
        ],

        width: 500,
        height: 500,
        modal: true,

        config: {
            existingUser: false,
            user: {}
        },

        plugins: [
            { ptype: 'localization', method: 'setTitle', key: 'crud.title' }
        ],

        init: function() {
            this.callParent(arguments);
        }
    }
})