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
 * Event dispatched by ObservableModel any time the set method is called and the value being passed has changed
 */
Ext.define('ExtJSCodeSample.data.event.ModelChangeEvent', {
    statics: {
        /**
         * Dispatched when a property on an ObservableModel has changed
         *
         * @event
         */
        CHANGED: 'ExtJSCodeSample.event.ModelChangeEvent.CHANGED'
    },

    /**
     * @private
     * {String} fieldName - The name of the field that has changed
     */
    fieldName: '',

    /**
     * @private
     * {Object} newValue - The new value of the field that has changed
     */
    newValue: {},

    /**
     * @private
     * {Object} oldValue - The old value of the field that has changed
     */
    oldValue: {},

    /**
     * Get the name of the field that has changed
     *
     * @return {String}
     */
    getFieldName: function() {
        return this.fieldName;
    },

    /**
     * Get the new value for the field that has changed
     *
     * @return {Object}
     */
    getNewValue: function() {
        return this.newValue;
    },

    /**
     * Get the old value for the field that has changed
     *
     * @return {Object}
     */
    getOldValue: function() {
        return this.oldValue;
    },

    /**
     * @param {String} fieldName - Name of field on model that changed
     * @param {Object} newValue - New value on model
     * @param {Object} oldValue - Previous value on model
     */
    constructor: function(fieldName, newValue, oldValue) {
        this.fieldName = fieldName;
        this.newValue = newValue;
        this.oldValue = oldValue;
    }
});