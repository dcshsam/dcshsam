sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sam.myProjectApp.controller.Firstview", {
		onInit: function () {

		},
		
		doSomething: function() {
		   sap.ui.core.UIComponent.getRouterFor(this).navTo("second");
		
		}
	});
});