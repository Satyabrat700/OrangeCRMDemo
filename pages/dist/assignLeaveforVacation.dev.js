"use strict";

var assignLeaveforVacation = function assignLeaveforVacation() {
  var leaveModule = element(by.xpath("//a[@id='menu_leave_viewLeaveModule']/b"));
  var menu_leave_assignLeave = element(by.id("menu_leave_assignLeave"));
  var assignleave_txtEmployee_empName = element(by.id("assignleave_txtEmployee_empName"));
  var assignleave_txtLeaveType = element(by.id("assignleave_txtLeaveType"));
  var assignleave_txtFromDate = element(by.id("assignleave_txtFromDate"));
  var assignleave_txtToDate = element(by.id("assignleave_txtToDate"));
  var assignleave_txtComment = element(by.id("assignleave_txtComment"));
  var assignBtn = element(by.id("assignBtn"));
  var confirmOkButton = element(by.id("confirmOkButton"));
  process.on('unhandledRejection', function (err) {
    throw err;
  });

  this.assignLeave = function _callee(empName, VacationType, startDate, endDate, Comment, LeaveURL) {
    var desiredOption, EC;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(leaveModule.click());

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(menu_leave_assignLeave.click());

          case 5:
            browser.get(LeaveURL);
            _context.next = 8;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.click());

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.sendKeys(empName));

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap(assignleave_txtLeaveType.click());

          case 12:
            desiredOption = assignleave_txtLeaveType.element(by.cssContainingText('option', VacationType));
            EC = protractor.ExpectedConditions;
            browser.wait(EC.visibilityOf(desiredOption), 5000);
            desiredOption.click(); //await assignleave_txtLeaveType.element(by.cssContainingText('option',VacationType)).click();

            _context.next = 18;
            return regeneratorRuntime.awrap(assignleave_txtFromDate.click());

          case 18:
            _context.next = 20;
            return regeneratorRuntime.awrap(assignleave_txtFromDate.sendKeys(startDate));

          case 20:
            _context.next = 22;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.click());

          case 22:
            _context.next = 24;
            return regeneratorRuntime.awrap(assignleave_txtToDate.click());

          case 24:
            _context.next = 26;
            return regeneratorRuntime.awrap(assignleave_txtToDate.clear());

          case 26:
            _context.next = 28;
            return regeneratorRuntime.awrap(assignleave_txtToDate.sendKeys(endDate));

          case 28:
            _context.next = 30;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.click());

          case 30:
            _context.next = 32;
            return regeneratorRuntime.awrap(assignleave_txtComment.click());

          case 32:
            _context.next = 34;
            return regeneratorRuntime.awrap(assignleave_txtComment.sendKeys(Comment));

          case 34:
            _context.next = 36;
            return regeneratorRuntime.awrap(assignBtn.click());

          case 36:
            _context.next = 38;
            return regeneratorRuntime.awrap(confirmOkButton.click());

          case 38:
            _context.next = 43;
            break;

          case 40:
            _context.prev = 40;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside assignLeaveforEmp block');

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 40]]);
  };
};

module.exports = new assignLeaveforVacation();