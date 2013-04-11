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
 * Custom Grid control that allows for easily maintaining the selectedItem when calling bindStore
 */
Ext.define('ExtJSCodeSample.controls.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.grid',

    config: {
        /**
         * @cfg {Boolean} maintainSelection - Wither or not the grid should maintain the selectedItem when calling bindStore
         */
        maintainSelection: false,

        /**
         * @cfg {String} maintainSelectionProperty - The object property to use when 'resetting' the selectedItem
         */
        maintainSelectionProperty: 'id'
    },

    /**
     * @private
     * {Object} selectedItem - The currently selected item
     */
    selectedItem: null,

    /**
     * Adds selection change and data change listeners when setting store so that
     * selected item can be reset on data change event
     *
     * @override
     * @param {Ext.data.Store} store - Store to use to populate grid
     */
    bindStore: function(store) {
        this.callParent([store]);

        if(!this.getMaintainSelection())
            return;

        this.addListener('selectionchange', this.selectionChangedEventHandler, this);

        store.addListener('datachanged', this.storeDataChangedEventHandler, this);
        this.setSelection(this.selectedItem);
    },

    /**
     * Grid selection change event handler to persist selected item so that it can
     * later be reset when the sore dispatches a data change event
     *
     * @private
     * @param {ExtJSCodeSample.controls.Grid} scope
     * @param {Ext.data.Model|[]} selectedItem
     */
    selectionChangedEventHandler: function(scope, selectedItem) {
        this.selectedItem = selectedItem[0];
    },
    
    /**
     * Resets the selected item when the Store dispatches the data changed event
     *
     * @private
     */
    storeDataChangedEventHandler: function() {
        this.setSelection(this.selectedItem);
    },
    
    /**
     * Sets the selected record
     *
     * @private
     * @param {Ext.data.Model} item
     */
    setSelection: function(item) {
        var selectionField = this.getMaintainSelectionProperty();
    
        var itemIndex = item ? this.getStore().find(selectionField, item.get(selectionField)) : 0;
        this.getSelectionModel().select(itemIndex);
    }
});