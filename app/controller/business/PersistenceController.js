Ext.define('ExtJSCodeSample.controller.business.PersistenceController', function() {
   return {
       extend: 'Ext.app.Controller',

       requires: [
           'Ext.util.Cookies',
           'ExtJSCodeSample.model.UserCredentialsModel'
       ],

       statics: {
           /**
            * Encrypt un/pw and persist to cookie
            *
            * @param {ExtJSCodeSample.model.UserCredentialsModel} user
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
            * @return {ExtJSCodeSample.model.UserCredentialsModel}
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
   }
});