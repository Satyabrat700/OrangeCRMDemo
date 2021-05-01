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
            _context.next = 5;
            return regeneratorRuntime.awrap(logOutLink.click());

          case 5:
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside logOut block');

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };

  this.loginAndVerify = function _callee2(UserID, UserPassword, startDate, endDate, empName) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(userName.sendKeys(UserID));

          case 3:
            _context2.next = 5;
            return regeneratorRuntime.awrap(password.sendKeys(UserPassword));

          case 5:
            _context2.next = 7;
            return regeneratorRuntime.awrap(loginButton.click());

          case 7:
            _context2.next = 9;
            return regeneratorRuntime.awrap(menu_leave_viewLeaveModule.click());

          case 9:
            _context2.next = 11;
            return regeneratorRuntime.awrap(menu_leave_viewMyLeaveList.click());

          case 11:
            _context2.next = 13;
            return regeneratorRuntime.awrap(calFromDate.click());

          case 13:
            _context2.next = 15;
            return regeneratorRuntime.awrap(calFromDate.sendKeys(startDate));

          case 15:
            _context2.next = 17;
            return regeneratorRuntime.awrap(calToDate.click());

          case 17:
            _context2.next = 19;
            return regeneratorRuntime.awrap(calToDate.sendKeys(endDate));

          case 19:
            _context2.next = 21;
            return regeneratorRuntime.awrap(btnSearch.click());

          case 21:
            _context2.t0 = expect;
            _context2.next = 24;
            return regeneratorRuntime.awrap(element(textTobeValidated).getText());

          case 24:
            _context2.t1 = _context2.sent;
            _context2.t2 = empName;
            (0, _context2.t0)(_context2.t1).toContain(_context2.t2);
            _context2.next = 32;
            break;

          case 29:
            _context2.prev = 29;
            _context2.t3 = _context2["catch"](0);
            console.log(_context2.t3 + 'occured inside loginAndVerify block');

          case 32:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 29]]);
  };
};

module.exports = new LoginAndVerifyLeave();