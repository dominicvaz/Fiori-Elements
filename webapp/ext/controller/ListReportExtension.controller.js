sap.ui.define([
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel"
], function (MessageToast, MessageBox, JSONModel) {
    "use strict";

    return {
       
        _aCartItems: [],

        onAddToCart: function () {

            var oSmartTable = this.getView().byId("listReport");
            var oTable = oSmartTable.getTable();
            var aContexts = oTable.getSelectedContexts();
 

            aContexts.map(ctx => ctx.getObject()).forEach(prod => {
                if (!this._aCartItems.some(c => c.ProductID === prod.ProductID)) {
                    this._aCartItems.push(prod);
                }
            });

            MessageToast.show("Items added to cart!");
        },

        onOpenCart: function () {

            if (!this._oDialog) {
                this._oDialog = sap.ui.xmlfragment(
                    "listreport.ext.fragment.CartDialog",
                    this
                );
                this.getView().addDependent(this._oDialog);
            }

            this._oDialog.setModel(
                new JSONModel({ Products: this._aCartItems }),
                "cart"
            );
            this._oDialog.open();
        },

        onCloseCartDialog: function () {
            this._oDialog?.close();
        }
    };
});