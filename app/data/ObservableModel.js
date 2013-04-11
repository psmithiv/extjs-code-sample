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
 * Base class for all Model's within the application. Allows objects to listen to ModelChangeEvent that fires
 * whenever the models set method is called and the value being passed is different then the current value.
 */
Ext.define('ExtJSCodeSample.data.ObservableModel', {
   extend: 'Ext.data.Model',

   requires: [
       'ExtJSCodeSample.data.event.ModelChangeEvent'
   ],

   /**
    * When setting field on model, if property has changed and not suppressing
    * change event, dispatch ModelChangeEvent
    *
    * @override
    * @param {String} fieldName - The name of the field to set
    * @param {Object} newValue - The value to place on the field
    * @param {Boolean} suppressChangeEvent - Wither or not to suppress the ModelChangeEvent
    *
    * @return {{}}
    */
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
});