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
Ext.define('ExtJSCodeSample.event.StateEvent', {
    statics: {
        SET_INITIAL_STATE: 'ExtJSCodeSample.event.StateEvent.SET_INITIAL_STATE',
        SET_STATE: 'ExtJSCodeSample.event.StateEvent.SET_STATE',
        STATE_CHANGED: 'ExtJSCodeSample.event.StateEvent.STATE_CHANGED',

        BROWSER_FORWARD: 'ExtJSCodeSample.event.StateEvent.BROWSER_FORWARD',
        BROWSER_BACK: 'ExtJSCodeSample.event.StateEvent.BROWSER_BACK',
        BROWSER_REFRESH: 'ExtJSCodeSample.event.StateEvent.BROWSER_REFRESH'
    },

    /**
     * @private
     * {String} view
     */
    view: '',

    /**
     *
     * @return {String}
     */
    getView: function() {
        return this.view;
    },

    /**
     * @private
     * {Array} data
     */
    data: [],

    /**
     *
     * @return {Array}
     */
    getData: function() {
        return this.data;
    },

    /**
     *
     * @param {String} view
     * @param {Array} data
     */
    constructor: function(view, data)
    {
        this.view = view;
        this.data = data;
    }
})