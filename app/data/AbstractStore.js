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
 * Base class for all Stores in the application allowing for easy update of specific records on the store.
 */
Ext.define('ExtJSCodeSample.data.AbstractStore', {
    extend: 'Ext.data.Store',

    /**
     * Update a model object on the store by replacing it with a new model
     *
     * @param {Object} model - Model to replace existing model in store
     * @param {String} property - Property to use to find model to be replaced
     */
    update: function(model, property) {
        property = property ? property : 'id';

        var index = this.find(property, model.get(property));

        if(index < 0)
            return;

        this.insert(index, model);
        this.removeAt(index+1);
    }
})