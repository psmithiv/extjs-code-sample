Ext.define('ExtJSCodeSample.data.ObservableModel', function() {
   return {
       extend: 'Ext.data.Model',

       requires: [
           'ExtJSCodeSample.data.event.ModelChangeEvent'
       ],

       set: function (fieldName, newValue, suppressChangeEvent) {
           var previousValue = this.get(fieldName);
           var returnValue = this.callParent([fieldName, newValue]);

           if(!suppressChangeEvent && newValue != previousValue)
           {
               var e = new ExtJSCodeSample.data.event.ModelChangeEvent(fieldName, newValue, previousValue);
               this.fireEvent(ExtJSCodeSample.data.event.ModelChangeEvent.CHANGED, e);
           }

           return returnValue;
       }
   }
});