"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
}); // An example configuration file.

exports.config = _defineProperty({
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',
  //directConnect: true,
  seleniumAddress: 'http://10.10.20.235:4460/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome' // providing the browser name ::

  },
  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['..\\tests\\orangeCRMDEMO.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  beforeLaunch: function beforeLaunch() {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },
  // Assign the test reporter to each running instance
  onPrepare: function onPrepare() {
    var jasmineReporters, AllureReporter, fs;
    return regeneratorRuntime.async(function onPrepare$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(browser.waitForAngularEnabled(false));

          case 2:
            jasmineReporters = require('jasmine-reporters');
            jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
              consolidateAll: true,
              savePath: './',
              filePrefix: 'xmlresults'
            }));
            jasmine.getEnv().addReporter(reporter);
            AllureReporter = require('jasmine-allure-reporter');
            jasmine.getEnv().addReporter(new AllureReporter({
              resultsDir: 'allure-results'
            }));
            fs = require('fs-extra');
            fs.emptyDir('screenshots/', function (err) {
              console.log(err);
            });
            jasmine.getEnv().addReporter({
              specDone: function specDone(result) {
                if (result.status == 'failed') {
                  browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
                    browser.takeScreenshot().then(function (png) {
                      var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
                      stream.write(new Buffer(png, 'base64'));
                      stream.end();
                    });
                  });
                }
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  // Close the report after all tests finish
  afterLaunch: function afterLaunch(exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
  onComplete: function onComplete() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();
    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');

      var HTMLReport = require('protractor-html-reporter');

      testConfig = {
        reportTitle: 'Test Execution Report',
        outputPath: './',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }
}, "onComplete", function onComplete() {
  var browserName, browserVersion;
  var capsPromise = browser.getCapabilities();
  capsPromise.then(function (caps) {
    browserName = caps.get('browserName');
    browserVersion = caps.get('version');

    var HTMLReport = require('protractor-html-reporter');

    testConfig = {
      reportTitle: 'Test Execution Report',
      outputPath: './',
      screenshotPath: './screenshots',
      testBrowser: browserName,
      browserVersion: browserVersion,
      modifiedSuiteName: false,
      screenshotsOnlyOnFailure: true
    };
    new HTMLReport().from('xmlresults.xml', testConfig);
  });
});