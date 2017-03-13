sap.ui.define(["sap/ui/core/UIComponent"],function(UIComponent){
	"use stirct"
	return UIComponent.extend("ngom.vicky.Component",{
		
		metadata:{
			manifest:"json"
		},
		
		init : function () {

			//call parent innit method
			//all manifest models are already set in this
			UIComponent.prototype.init.apply(this,arguments);
			
		}
	});
});