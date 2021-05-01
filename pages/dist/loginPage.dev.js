"use strict";

var loginPage = function loginPage() {
  var userName = element(by.id('txtUsername'));
  var password = element(by.id('txtPassword'));
  var loginButton = element(by.id('btnLogin'));

  this.getURL = function _callee(URL) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(browser.get(URL));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  this.enterUserName = function _callee2(user) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(userName.sendKeys(user));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  this.enterpassword = function _callee3(userPassword) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(password.sendKeys(userPassword));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  this.clickLoginButton = function _callee4() {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(loginButton.click());

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    });
  };

  this.verifyHomePageafterLogin = function _callee5() {
    var text;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            text = element(by.xpath("//*[@id='branding']/a[1]/img"));
            _context5.t0 = expect;
            _context5.next = 4;
            return regeneratorRuntime.awrap(text.isPresent());

          case 4:
            _context5.t1 = _context5.sent;
            (0, _context5.t0)(_context5.t1).toBe(false);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

module.exports = new loginPage();