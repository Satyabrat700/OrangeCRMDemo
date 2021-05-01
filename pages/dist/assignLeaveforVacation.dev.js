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

  this.assignLeave = function _callee(txtEmployee_empName, VacationType, startDate, endDate, Comment) {
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
            _context.next = 7;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.click());

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(assignleave_txtEmployee_empName.sendKeys(txtEmployee_empName));

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(assignleave_txtLeaveType.clear());

          case 11:
            _context.next = 13;
            return regeneratorRuntime.awrap(assignleave_txtLeaveType.click().then(function () {
              return eassignleave_txtLeaveType.element(by.cssContainingText('option', VacationType)).click();
            }));

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(assignleave_txtLeaveType.click());

          case 15:
            _context.next = 17;
            return regeneratorRuntime.awrap(assignleave_txtFromDate.click());

          case 17:
            _context.next = 19;
            return regeneratorRuntime.awrap(eassignleave_txtFromDate.sendKeys(startDate));

          case 19:
            _context.next = 21;
            return regeneratorRuntime.awrap(assignleave_txtToDate.sendKeys(endDate));

          case 21:
            _context.next = 23;
            return regeneratorRuntime.awrap(assignleave_txtComment.click());

          case 23:
            _context.next = 25;
            return regeneratorRuntime.awrap(assignleave_txtComment.sendKeys(Comment));

          case 25:
            _context.next = 27;
            return regeneratorRuntime.awrap(eassignBtn.click());

          case 27:
            _context.next = 29;
            return regeneratorRuntime.awrap(econfirmOkButton.click());

          case 29:
            _context.next = 34;
            break;

          case 31:
            _context.prev = 31;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside assignLeaveforEmp block');

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 31]]);
  };
};

module.exports = new assignLeaveforVacation();