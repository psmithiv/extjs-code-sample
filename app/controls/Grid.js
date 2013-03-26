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
    function storeDataChangedEventHandler(item) {
        var selectedItem = this.getSelectionModel().getSelection()[0];
        setSelection.call(this, selectedItem);
    }

    function setSelection(item) {
        var selectionField = this.getMaintainSelectionProperty();
        var selectedIndex = item ? this.getStore().find(selectionField, item.get(selectionField)) : 0;
        this.getSelectionModel().select(selectedIndex);
    }

    return {
        extend: 'Ext.grid.Panel',
        alias: 'widget.grid',

        config: {
            maintainSelection: false,
            maintainSelectionProperty: 'id'
        },

        bindStore: function(store) {
            var selectedItem = this.getSelectionModel().getSelection()[0];

            this.callParent([store]);

            if(!this.getMaintainSelection())
                return;

            store.addListener('datachanged', storeDataChangedEventHandler, this);
            setSelection.call(this, selectedItem);
        }
    }
});
