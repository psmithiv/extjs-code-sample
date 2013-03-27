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
Ext.define('ExtJSCodeSample.controls.Grid', function() {
    var _selectedItem;

    /**
     * Grid selection change event handler to persist selected item so that it can
     * later be reset when the sore dispatches a data change event
     *
     * @param {ExtJSCodeSample.controls.Grid} scope
     * @param {Ext.data.Model[]} selectedItem
     */
    function selectionChangedEventHandler(scope, selectedItem) {
        _selectedItem = selectedItem[0];
    }

    /**
     * Resets the selected item when the Store dispatches the data changed event
     */
    function storeDataChangedEventHandler() {
        setSelection.call(this, _selectedItem);
    }

    /**
     * Sets the selected record
     *
     * @param {Ext.data.Model} item
     */
    function setSelection(item) {
        var selectionField = this.getMaintainSelectionProperty();

        var itemIndex = item ? this.getStore().find(selectionField, item.get(selectionField)) : 0;
        this.getSelectionModel().select(itemIndex);
    }

    return {
        extend: 'Ext.grid.Panel',
        alias: 'widget.grid',

        config: {
            maintainSelection: false,
            maintainSelectionProperty: 'id'
        },

        /**
         * Adds selection change and data change listeners when setting store so that
         * selected item can be reset on data change event
         *
         * @Override
         * @param {Ext.data.Store} store
         */
        bindStore: function(store) {
            this.callParent([store]);

            if(!this.getMaintainSelection())
                return;

            this.addListener('selectionchange', selectionChangedEventHandler, this);

            store.addListener('datachanged', storeDataChangedEventHandler, this);
            setSelection.call(this, _selectedItem);
        }
    }
});
