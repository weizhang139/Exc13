jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 EtPersonSet in the list
// * All 3 EtPersonSet have at least one EtAddr

sap.ui.require([
	"sap/ui/test/Opa5",
	"zexc13/ui/demo/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zexc13/ui/demo/test/integration/pages/App",
	"zexc13/ui/demo/test/integration/pages/Browser",
	"zexc13/ui/demo/test/integration/pages/Master",
	"zexc13/ui/demo/test/integration/pages/Detail",
	"zexc13/ui/demo/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zexc13.ui.demo.view."
	});

	sap.ui.require([
		"zexc13/ui/demo/test/integration/MasterJourney",
		"zexc13/ui/demo/test/integration/NavigationJourney",
		"zexc13/ui/demo/test/integration/NotFoundJourney",
		"zexc13/ui/demo/test/integration/BusyJourney",
		"zexc13/ui/demo/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});