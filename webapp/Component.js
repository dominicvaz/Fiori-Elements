sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent", "sap/ui/model/json/JSONModel"],
    function (Component, JSONModel) {
        "use strict";

        return Component.extend("listreport.Component", {
            metadata: { manifest: "json" },

            init: function () {
                Component.prototype.init.apply(this, arguments);

                var oCartModel = new JSONModel({ cartItems: [] });
                this.setModel(oCartModel, "cartModel");
            }
        });
    }
);