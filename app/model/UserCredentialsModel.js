Ext.define('ExtJSCodeSample.model.UserCredentialsModel', function() {
   return {
       extend: 'Ext.data.Model',

       fields: [
           {name: 'username', type: 'string'},
           {name: 'password', type: 'string'}
       ]
   }
});