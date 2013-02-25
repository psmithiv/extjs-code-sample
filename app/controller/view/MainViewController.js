Ext.define('ExtJSCodeSample.controller.view.MainViewController', function() {
    return {
        extend: 'ExtJSCodeSample.controller.view.AbstractViewController',

        requires: [
            'ExtJSCodeSample.model.constants.Views'
        ],

        refs: [{
            selector: 'mainView',
            ref: 'mainView'
        }],

        init: function() {
            this.callParent(arguments);
        },

        /**
         * @override
         */
        applicationStateChangedHandler: function(event) {
            this.getMainView().setVisible(event.getView() != ExtJSCodeSample.model.constants.Views.LOGIN);
        }
    }
});