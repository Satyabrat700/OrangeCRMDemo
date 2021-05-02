"use strict";

var LoginAndVerifyLeave = function LoginAndVerifyLeave() {
  var welcomeButton = element(by.id("welcome"));
  var logOutLink = element(by.linkText("Logout"));
  var userName = element(by.id('txtUsername'));
  var password = element(by.id('txtPassword'));
  var loginButton = element(by.id('btnLogin'));
  var menu_leave_viewLeaveModule = element(by.xpath("//a[@id='menu_leave_viewLeaveModule']/b"));
  var menu_leave_viewMyLeaveList = element(by.id("menu_leave_viewMyLeaveList"));
  var calFromDate = element(by.id("calFromDate"));
  var calToDate = element(by.id("calToDate"));
  var btnSearch = element(by.id("btnSearch"));
  var textTobeValidated = element(by.xpath("//table[@id='resultTable']/tbody/tr/td[2]"));

  this.logOut = function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(welcomeButton.click());

          case 3:
            browser.driver.sleep(2000);
            _context.next = 6;
            return regeneratorRuntime.awrap(logOutLink.click());

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside logOut block');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };

  this.loginAndVerify = function _callee2(UserID, UserPassword, startDate, endDate, empName, URL) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            desiredOption = userName;
            EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(desiredOption), 5000);
            _context2.next = 6;
            return regeneratorRuntime.awrap(desiredOption.click());

          case 6:
            _context2.next = 8;
            return regeneratorRuntime.awrap(userName.sendKeys(UserID));

          case 8:
            _context2.next = 10;
            return regeneratorRuntime.awrap(password.sendKeys(UserPassword));

          case 10:
            _context2.next = 12;
            return regeneratorRuntime.awrap(loginButton.click());

          case 12:
            _context2.next = 14;
            return regeneratorRuntime.awrap(menu_leave_viewLeaveModule.click());

          case 14:
            _context2.next = 16;
            return regeneratorRuntime.awrap(menu_leave_viewMyLeaveList.click());

          case 16:
            _context2.next = 18;
            return regeneratorRuntime.awrap(calFromDate.click());

          case 18:
            _context2.next = 20;
            return regeneratorRuntime.awrap(calFromDate.clear());

          case 20:
            _context2.next = 22;
            return regeneratorRuntime.awrap(calFromDate.sendKeys(startDate));

          case 22:
            _context2.next = 24;
            return regeneratorRuntime.awrap(btnSearch.click());

          case 24:
            _context2.next = 26;
            return regeneratorRuntime.awrap(calToDate.click());

          case 26:
            _context2.next = 28;
            return regeneratorRuntime.awrap(calToDate.clear());

          case 28:
            _context2.next = 30;
            return regeneratorRuntime.awrap(calToDate.sendKeys(endDate));

          case 30:
            _context2.next = 32;
            return regeneratorRuntime.awrap(btnSearch.click());

          case 32:
            _context2.t0 = expect;
            _context2.next = 35;
            return regeneratorRuntime.awrap(textTobeValidated.getText());

          case 35:
            _context2.t1 = _context2.sent;
            _context2.t2 = empNameVerify;
            (0, _context2.t0)(_context2.t1).toContain(_context2.t2);
            _context2.next = 43;
            break;

          case 40:
            _context2.prev = 40;
            _context2.t3 = _context2["catch"](0);
            console.log(_context2.t3 + 'occured inside loginAndVerify block');

          case 43:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 40]]);
  };
};

module.exports = new LoginAndVerifyLeave();