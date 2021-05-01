"use strict";

var loginPage = require('../pages/loginPage');

var addNewEmployee = require('../pages/addNewEmployee');

var ExcelReader = require('../testData/ExcelReader.js');

var assignLeaveforVacation = require('../pages/assignLeaveforVacation');

var addUserLoginDetails = require('../pages/addUserLoginDetails');

var LoginAndVerifyLeave = require('../pages/LoginAndVerifyLeave');

describe('Assign Leave for Vacation', function () {
  var Test_Data = ExcelReader.read_from_excel('Sheet1', 'C:/Users/satya/OneDrive/Desktop/Projects/ProtractorDemo/testData/testData.xlsx');
  Test_Data.forEach(function (data) {
    if (typeof data === "string") {
      data = JSON.parse(data);
    }

    it('LoginPage', function _callee() {
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(loginPage.getURL(data.URL));

            case 2:
              _context.next = 4;
              return regeneratorRuntime.awrap(loginPage.enterUserName(data.userName));

            case 4:
              _context.next = 6;
              return regeneratorRuntime.awrap(loginPage.enterpassword(data.password));

            case 6:
              _context.next = 8;
              return regeneratorRuntime.awrap(loginPage.clickLoginButton());

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(loginPage.verifyHomePageafterLogin());

            case 10:
            case "end":
              return _context.stop();
          }
        }
      });
    });
    it('Add New Employee details', function _callee2() {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(addNewEmployee.addEmployee(data.url1, data.firstName, data.lastName, data.empID));

            case 2:
              _context2.next = 4;
              return regeneratorRuntime.awrap(addNewEmployee.addContact(data.streetName));

            case 4:
              _context2.next = 6;
              return regeneratorRuntime.awrap(addNewEmployee.addEmergencyContact(data.emerContactName, data.relationship, data.homePhone));

            case 6:
              _context2.next = 8;
              return regeneratorRuntime.awrap(addNewEmployee.Dependents(data.dependent_name, data.depOption, data.DOB));

            case 8:
              _context2.next = 10;
              return regeneratorRuntime.awrap(addNewEmployee.Job(data.jobtitle));

            case 10:
              _context2.next = 12;
              return regeneratorRuntime.awrap(addNewEmployee.Salary(data.payGrade, data.salaryCompnent, data.currency, data.basicSalary));

            case 12:
              _context2.next = 14;
              return regeneratorRuntime.awrap(addNewEmployee.taxExemptions(data.status));

            case 14:
              _context2.next = 16;
              return regeneratorRuntime.awrap(addNewEmployee.reportTo(data.supervisorName, data.reportingMethod));

            case 16:
              _context2.next = 18;
              return regeneratorRuntime.awrap(addNewEmployee.Qualification(data.experience_employer, data.jobTitle));

            case 18:
              _context2.next = 20;
              return regeneratorRuntime.awrap(addNewEmployee.Membership(data.membershipType));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      });
    }); //       it('Add user details', async function () {
    //             browser.waitForAngularEnabled(false);
    //             browser.ignoreSynchronization = true;
    //               await addUserLoginDetails.addUserDetails(data.txtEmployee_empName,data.VacationType,data.startDate,data.endDate,data.Comment);
    //           })
    //         it('Assign leave for vacation', async function () {
    //                   browser.waitForAngularEnabled(false);
    //                   browser.ignoreSynchronization = true;
    //                   await assignLeaveforVacation.assignLeave(data.empName,data.UserID,data.UserPassword);
    //           })
    //         it('Login and verify leave', async function () {
    //                   browser.waitForAngularEnabled(false);
    //                   browser.ignoreSynchronization = true;
    //                   await LoginAndVerifyLeave.logOut();
    //                   await LoginAndVerifyLeave.loginAndVerify(data.UserID,data.UserPassword,data.startDate,data.endDate,data.empName);
    //           })
  });
});