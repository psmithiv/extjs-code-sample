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
 * Event for creating/destroying session with the server
 */
Ext.define('ExtJSCodeSample.event.SessionEvent', {
    statics: {
        /**
         * Dispatch to login a user
         *
         * @event
         */
        LOGIN: 'ExtJSCodeSample.event.SessionEvent.LOGIN',

        /**
         * Dispatch to logout a user
         *
         * @event
         */
        LOGOUT: 'ExtJSCodeSample.event.SessionEvent.LOGOUT'
    },

    /**
     * @private
     * {ExtJSCodeSample.model.UserCredentialsModel} userCredentials - Credentials used to establish user session
     */
    userCredentials: {},

    /**
     * Getter method for userCredentials
     *
     * @return {ExtJSCodeSample.model.UserCredentialsModel}
     */
    getUserCredentials: function() {
        return this.userCredentials;
    },

    /**
     * @param {ExtJSCodeSample.model.UserCredentialsModel} userCredentials - Credentials used to establish user session
     */
    constructor: function(userCredentials)
    {
        this.userCredentials = userCredentials;
    }
})