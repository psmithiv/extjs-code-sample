Ext.define('ExtJSCodeSample.controls.Grid', function() {
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

            var selectionField = this.getMaintainSelectionField();
            var selectedIndex = selectedItem ? store.find(selectionField, selectedItem.get(selectionField)) : 0;
            this.getSelectionModel().select(selectedIndex);
        }
    }
});
