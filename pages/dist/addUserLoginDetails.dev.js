"use strict";

var addUserLoginDetails = function addUserLoginDetails() {
  var menu_admin_viewAdminModule = element(by.xpath("//a[@id='menu_admin_viewAdminModule']/b"));
  var menu_admin_UserManagement = element(by.id("menu_admin_UserManagement"));
  var btnAdd = element(by.id("btnAdd"));
  var systemUser_employeeName_empName = element(by.id("systemUser_employeeName_empName"));
  var systemUser_userName = element(by.id("systemUser_userName"));
  var content = element(by.id("content"));
  var systemUser_password = element(by.id("systemUser_password"));
  var formInputText = element(by.name("systemUser[confirmPassword]"));
  var btnSave = element(by.id("btnSave"));

  this.addUserDetails = function _callee(empName, UserID, UserPassword) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(menu_admin_viewAdminModule.click());

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(btnAdd.click());

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(systemUser_employeeName_empName.clear());

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(systemUser_employeeName_empName.click());

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(systemUser_employeeName_empName.sendKeys(empName));

          case 11:
            _context.next = 13;
            return regeneratorRuntime.awrap(systemUser_userName.clear());

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(systemUser_userName.click());

          case 15:
            _context.next = 17;
            return regeneratorRuntime.awrap(systemUser_userName.sendKeys(UserID));

          case 17:
            _context.next = 19;
            return regeneratorRuntime.awrap(systemUser_password.clear());

          case 19:
            _context.next = 21;
            return regeneratorRuntime.awrap(systemUser_password.click());

          case 21:
            _context.next = 23;
            return regeneratorRuntime.awrap(systemUser_password.sendKeys(UserPassword));

          case 23:
            _context.next = 25;
            return regeneratorRuntime.awrap(formInputText.clear());

          case 25:
            _context.next = 27;
            return regeneratorRuntime.awrap(formInputText.click());

          case 27:
            _context.next = 29;
            return regeneratorRuntime.awrap(formInputText.sendKeys(UserPassword));

          case 29:
            browser.sleep(3000);
            _context.next = 32;
            return regeneratorRuntime.awrap(btnSave.click());

          case 32:
            _context.next = 37;
            break;

          case 34:
            _context.prev = 34;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside assignLeaveforEmp block');

          case 37:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 34]]);
  };
};

module.exports = new addUserLoginDetails();