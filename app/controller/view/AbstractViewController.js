Ext.define('ExtJSCodeSample.controller.view.AbstractViewController', function() {
    return {
        extend: 'Ext.app.Controller',

        requires: [
            'ExtJSCodeSample.event.StateEvent'
        ],

        init: function() {
            this.application.addListener(ExtJSCodeSample.event.StateEvent.STATE_CHANGED, this.applicationStateChangedHandler, this);
        },

        /**
         * Event handler for changes in application state (should be overridden by child class')
         *
         * @param {ExtJSCodeSample.event.StateEvent} event
         */
        applicationStateChangedHandler: function(event) {

        }
    }
})
