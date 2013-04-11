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
Ext.define('ExtJSCodeSample.event.DialogEvent', {
    statics: {
        /**
         * @event
         */
        SHOW_LOGOUT_DIALOG: 'ExtJSCodeSample.event.DialogEvent.SHOW_LOGOUT_DIALOG',

        /**
         * @event
         */
        HIDE_LOGOUT_DIALOG: 'ExtJSCodeSample.event.DialogEvent.HIDE_LOGOUT_DIALOG'
    },

    /**
     * @private
     */
    data: {},

    /**
     * Getter for generic data property
     *
     * @return {Object}
     */
    getData: function() {
        return this.data;
    },

    /**
     * @param data
     */
    constructor: function(data) {
        this.data = data;
    }
})
