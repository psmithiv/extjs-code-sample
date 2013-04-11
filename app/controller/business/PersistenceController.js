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
 * Business controller responsible for writing model objects to a
 * cookie as well as reading cookie values back to models.
 */
Ext.define('ExtJSCodeSample.controller.business.PersistenceController', {
   extend: 'Ext.app.Controller',

   requires: [
       'Ext.util.Cookies',
       'ExtJSCodeSample.model.UserCredentialsModel'
   ],

   statics: {
       /**
        * Encrypt un/pw and persist to cookie
        *
        * @param {ExtJSCodeSample.model.UserCredentialsModel} user - UserCredentialsModel containing the necessary information to authenticate a user
        */
       setCredentials: function(user) {
           var d = new Date(new Date().getTime()+(1000*60*60*24*365)); //365days
           Ext.util.Cookies.set('un', user.get('username'), d);
           Ext.util.Cookies.set('pw', user.get('password'), d); //TODO: Encrypt password
           Ext.util.Cookies.set('rm', user.get('rememberMe'), d);
       },

       /**
        * Pull un/pw from cookie, decrypt and return
        *
        * @return {ExtJSCodeSample.model.UserCredentialsModel} - UserCredentialsModel containing the necessary information to authenticate a user
        */
       getCredentials: function() {
           var un = Ext.util.Cookies.get('un');
           var pw = Ext.util.Cookies.get('pw'); //TODO: Decrypt password
           var rm = Ext.util.Cookies.get('rm');

           return new ExtJSCodeSample.model.UserCredentialsModel({username: un, password: pw, rememberMe: rm});
       },

       /**
        * Clear remember me un/pw from cookie
        */
       clearCredentials: function() {
           Ext.util.Cookies.clear('un');
           Ext.util.Cookies.clear('pw');
           Ext.util.Cookies.clear('rm');
       }
   }
});