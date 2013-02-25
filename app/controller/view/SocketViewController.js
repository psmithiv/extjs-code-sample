Ext.define('ExtJSCodeSample.controller.view.SocketViewController', function() {
    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views'
        ],

        refs: [{
            selector: 'socketView',
            ref: 'socketView'
        }],

        init: function() {
            this.callParent(arguments);
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            this.getSocketView().setVisible(event.getView() == ExtJSCodeSample.model.constants.Views.SOCKET);
        }
    }
});
