sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast",
"sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"],function(Controller,MessageToast,JSONModel,ResourceModel){
	"use strict";
	return Controller.extend("ngom.vicky.controller.App",{
		onInit : function () {
			
			var oData = {"name":"world"};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel,"input");
			
			//already set i18n resource model in manifest
	/*		var oResourceModel = new ResourceModel({
				bundleName : "ngom.vicky.i18n.i18n"
			});
			this.getView().setModel(oResourceModel,"i18n");*/
		},
		
		onButtonPressed: function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var oText = this.getView().getModel("input").getProperty("/name");
			//if key not exists, then key as text
			//[]args to replace placeholder in i18n
			var msg = oBundle.getText("outputMessaget",[oText]);
			MessageToast.show(msg);
		},

	});
});