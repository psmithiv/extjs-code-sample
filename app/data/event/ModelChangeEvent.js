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
Ext.define('ExtJSCodeSample.data.event.ModelChangeEvent', {
    statics: {
        CHANGED: 'ExtJSCodeSample.event.ModelChangeEvent.CHANGED'
    },

    /**
     * @private
     * {String} fieldName
     */
    fieldName: '',

    /**
     * @private
     * {Object} newValue
     */
    newValue: {},

    /**
     * @private
     * {Object} oldValue
     */
    oldValue: {},

    /**
     * Get the name of the field that has changed
     *
     * @return {string}
     */
    getFieldName: function() {
        return this.fieldName;
    },

    /**
     * Get the new value for the field that has changed
     *
     * @return {{}}
     */
    getNewValue: function() {
        return this.newValue;
    },

    /**
     * Get the old balue for the field that has changed
     * @return {{}}
     */
    getOldValue: function() {
        return this.oldValue;
    },

    /**
     * @constructor
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