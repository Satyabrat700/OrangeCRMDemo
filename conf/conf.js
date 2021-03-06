var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var HtmlReporter = require("protractor-beautiful-reporter");

var reporter = new HtmlScreenshotReporter({
  dest: "target/screenshots",
  filename: "my-report.html",
});

// An example configuration file.
exports.config = {
  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  directConnect: true,
  seleniumAddress: "http://10.10.20.235:4460/wd/hub",

  // Capabilities to be passed to the webdriver instance.

  capabilities: {
    browserName: "chrome", // providing the browser name ::::::Demo for GIT
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ["..\\tests\\orangeCRMDEMO.js"],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: async function () {
    await browser.waitForAngularEnabled(false);
    var jasmineReporters = require("jasmine-reporters");
    jasmine.getEnv().addReporter(
      new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: "./",
        filePrefix: "xmlresults",
      })
    );
    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(
      new AllureReporter({
        resultsDir: "allure-results",
      })
    );

    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "tmp/screenshots",
      }).getJasmine2Reporter()
    );

    var fs = require("fs-extra");

    fs.emptyDir("screenshots/", function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == "failed") {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get("browserName");

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream(
                "screenshots/" + browserName + "-" + result.fullName + ".png"
              );
              stream.write(new Buffer(png, "base64"));
              stream.end();
            });
          });
        }
      },
    });
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get("browserName");
      browserVersion = caps.get("version");

      var HTMLReport = require("protractor-html-reporter");

      testConfig = {
        reportTitle: "Test Execution Report",
        outputPath: "./",
        screenshotPath: "./screenshots",
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
      };
      new HTMLReport().from("xmlresults.xml", testConfig);
    });
  },
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get("browserName");
      browserVersion = caps.get("version");

      var HTMLReport = require("protractor-html-reporter");

      testConfig = {
        reportTitle: "Test Execution Report",
        outputPath: "./",
        screenshotPath: "./screenshots",
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
      };
      new HTMLReport().from("xmlresults.xml", testConfig);
    });
  },
};
