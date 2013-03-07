Ext.define('ExtJSCodeSample.controls.Grid', function() {
    function storeDataChangedEventHandler(item) {
        var selectedItem = this.getSelectionModel().getSelection()[0];
        setSelection.call(this, selectedItem);
    }

    function setSelection(item) {
        var selectionField = this.getMaintainSelectionField();
        var selectedIndex = item ? this.getStore().find(selectionField, item.get(selectionField)) : 0;
        this.getSelectionModel().select(selectedIndex);
    }

    return {
        extend: 'Ext.grid.Panel',
        alias: 'widget.grid',

        config: {
            maintainSelection: false,
            maintainSelectionField: 'id'
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
