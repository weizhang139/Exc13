jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"zexc13/ui/demo/test/integration/NavigationJourneyPhone",
		"zexc13/ui/demo/test/integration/NotFoundJourneyPhone",
		"zexc13/ui/demo/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});