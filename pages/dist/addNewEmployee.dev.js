"use strict";

//addNewEmployee method to create details for a new employee
var addNewEmployee = function addNewEmployee() {
  var clickPIM = element(by.xpath("//a[@id='menu_pim_viewPimModule']/b"));
  var FirstName = element(by.id("firstName"));
  var LastName = element(by.id("lastName"));
  var employeeId = element(by.id("employeeId"));
  var btnSave = element(by.id("btnSave"));
  var clickContactDetailsLink = element(by.linkText("Contact Details"));
  var contact_street1 = element(by.id("contact_street1"));
  var clickEmergencyContactLink = element(by.linkText("Emergency Contacts"));
  var btnAddContact = element(by.id("btnAddContact"));
  var emgcontacts_name = element(by.id("emgcontacts_name"));
  var emgcontacts_relationship = element(by.id("emgcontacts_relationship"));
  var emgcontacts_homePhone = element(by.id("emgcontacts_homePhone"));
  var clickDependantsLink = element(by.linkText("Dependents"));
  var btnAddDependent = element(by.id("btnAddDependent"));
  var dependent_name = element(by.id("dependent_name"));
  var dependent_relationshipType = element(by.id("dependent_relationshipType"));
  var dependent_dateOfBirth = element(by.id("dependent_dateOfBirth"));
  var btnSaveDependent = element(by.id("btnSaveDependent"));
  var clickJobLink = element(by.linkText("Job"));
  var job_job_title = element(by.id("job_job_title"));
  var clickSalaryLink = element(by.linkText("Salary"));
  var addSalary = element(by.id("addSalary"));
  var salary_sal_grd_code = element(by.id("salary_sal_grd_code"));
  var salary_salary_component = element(by.id("salary_salary_component"));
  var salary_currency_id = element(by.id("salary_currency_id"));
  var salary_basic_salary = element(by.id("salary_basic_salary"));
  var btnSalarySave = element(by.id("btnSalarySave"));
  var clickTaxExemptionsLink = element(by.linkText("Tax Exemptions"));
  var tax_federalStatus = element(by.id("tax_federalStatus"));
  var clickReportToLink = element(by.linkText("Report-to"));
  var btnAddSupervisorDetail = element(by.id("btnAddSupervisorDetail"));
  var reportto_supervisorName_empName = element(by.id("reportto_supervisorName_empName"));
  var reportto_reportingMethodType = element(by.id("reportto_reportingMethodType"));
  var btnSaveReportTo = element(by.id("btnSaveReportTo"));
  var clickQualificationsLink = element(by.linkText("Qualifications"));
  var addWorkExperience = element(by.id("addWorkExperience"));
  var experience_employer = element(by.id("experience_employer"));
  var experience_jobtitle = element(by.id("experience_jobtitle"));
  var btnWorkExpSave = element(by.id("btnWorkExpSave"));
  var clickMembershipLink = element(by.linkText("Memberships"));
  var btnAddMembershipDetail = element(by.id("btnAddMembershipDetail"));
  var membership_membership = element(by.id("membership_membership"));
  var btnSaveMembership = element(by.id("btnSaveMembership"));
  process.on('unhandledRejection', function (err) {
    throw err;
  });

  this.addEmployee = function _callee(url1, firstName, lastName, empID) {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(clickPIM.click());

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(browser.get(url1));

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(FirstName.clear());

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(FirstName.click());

          case 9:
            _context.next = 11;
            return regeneratorRuntime.awrap(FirstName.sendKeys(firstName));

          case 11:
            _context.next = 13;
            return regeneratorRuntime.awrap(LastName.click());

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(LastName.sendKeys(lastName));

          case 15:
            _context.next = 17;
            return regeneratorRuntime.awrap(employeeId.clear());

          case 17:
            _context.next = 19;
            return regeneratorRuntime.awrap(employeeId.click());

          case 19:
            _context.next = 21;
            return regeneratorRuntime.awrap(employeeId.sendKeys(empID));

          case 21:
            _context.next = 23;
            return regeneratorRuntime.awrap(btnSave.click());

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0 + 'occured inside add Employee block');

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 25]]);
  }; // Contact details method for adding Contact details like street name etc..


  this.addContact = function _callee2(streetName) {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(clickContactDetailsLink.click());

          case 3:
            _context2.next = 5;
            return regeneratorRuntime.awrap(btnSave.click());

          case 5:
            _context2.next = 7;
            return regeneratorRuntime.awrap(contact_street1.click());

          case 7:
            _context2.next = 9;
            return regeneratorRuntime.awrap(contact_street1.sendKeys(streetName));

          case 9:
            _context2.next = 11;
            return regeneratorRuntime.awrap(btnSave.click());

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.log('error occured inside contact details block' + _context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 13]]);
  }; // Emergency Contact details method for adding Contact details like emeregency contact name etc..   


  this.addEmergencyContact = function _callee3(emerContactName, relationship, homePhone) {
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(clickEmergencyContactLink.click());

          case 3:
            _context3.next = 5;
            return regeneratorRuntime.awrap(btnAddContact.click());

          case 5:
            _context3.next = 7;
            return regeneratorRuntime.awrap(emgcontacts_name.click());

          case 7:
            _context3.next = 9;
            return regeneratorRuntime.awrap(emgcontacts_name.sendKeys(emerContactName));

          case 9:
            _context3.next = 11;
            return regeneratorRuntime.awrap(emgcontacts_relationship.click());

          case 11:
            _context3.next = 13;
            return regeneratorRuntime.awrap(emgcontacts_relationship.sendKeys(relationship));

          case 13:
            _context3.next = 15;
            return regeneratorRuntime.awrap(emgcontacts_homePhone.click());

          case 15:
            _context3.next = 17;
            return regeneratorRuntime.awrap(emgcontacts_homePhone.sendKeys(homePhone));

          case 17:
            _context3.next = 22;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](0);
            console.log('error occured inside Emergencycontact block' + _context3.t0);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 19]]);
  }; // Dependents details method for adding Dependents etc..   


  this.Dependents = function _callee4(dependentname, depOption, DOB) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(clickDependantsLink.click());

          case 3:
            _context4.next = 5;
            return regeneratorRuntime.awrap(btnAddDependent.click());

          case 5:
            _context4.next = 7;
            return regeneratorRuntime.awrap(dependent_name.click());

          case 7:
            _context4.next = 9;
            return regeneratorRuntime.awrap(dependent_name.sendKeys(dependent_name));

          case 9:
            _context4.next = 11;
            return regeneratorRuntime.awrap(dependent_relationshipType.click());

          case 11:
            _context4.next = 13;
            return regeneratorRuntime.awrap(dependent_relationshipType(by.cssContainingText('option', depOption)).click());

          case 13:
            _context4.next = 15;
            return regeneratorRuntime.awrap(dependent_relationshipType.click());

          case 15:
            _context4.next = 17;
            return regeneratorRuntime.awrap(dependent_dateOfBirth.click());

          case 17:
            _context4.next = 19;
            return regeneratorRuntime.awrap(dependent_dateOfBirth.sendKeys(DOB));

          case 19:
            _context4.next = 21;
            return regeneratorRuntime.awrap(btnSaveDependent.click());

          case 21:
            _context4.next = 26;
            break;

          case 23:
            _context4.prev = 23;
            _context4.t0 = _context4["catch"](0);
            console.log('error occured in Dependents block' + _context4.t0);

          case 26:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 23]]);
  }; // Job method for adding job details etc..   


  this.Job = function _callee5(jobtitle) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(clickJobLink.click());

          case 3:
            _context5.next = 5;
            return regeneratorRuntime.awrap(btnSave.click());

          case 5:
            _context5.next = 7;
            return regeneratorRuntime.awrap(job_job_title.click());

          case 7:
            _context5.next = 9;
            return regeneratorRuntime.awrap(job_job_title.element(by.cssContainingText('option', jobtitle)).click());

          case 9:
            _context5.next = 11;
            return regeneratorRuntime.awrap(job_job_title.click());

          case 11:
            _context5.next = 13;
            return regeneratorRuntime.awrap(btnSave.click());

          case 13:
            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            console.log('error occured in Job block' + _context5.t0);

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 15]]);
  }; // Salary method for adding Salary details etc..   


  this.Salary = function _callee6(payGrade, salaryCompnent, currency, basicSalary) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(clickSalaryLink.click());

          case 3:
            _context6.next = 5;
            return regeneratorRuntime.awrap(addSalary.click());

          case 5:
            _context6.next = 7;
            return regeneratorRuntime.awrap(salary_salary_component.click());

          case 7:
            _context6.next = 9;
            return regeneratorRuntime.awrap(salary_salary_component.sendKeys(salaryCompnent));

          case 9:
            _context6.next = 11;
            return regeneratorRuntime.awrap(salary_currency_id.click());

          case 11:
            _context6.next = 13;
            return regeneratorRuntime.awrap(salary_currency_id.element(by.label('option', currency)).click());

          case 13:
            _context6.next = 15;
            return regeneratorRuntime.awrap(salary_basic_salary.click());

          case 15:
            _context6.next = 17;
            return regeneratorRuntime.awrap(salary_basic_salary.sendKeys(basicSalary));

          case 17:
            _context6.next = 19;
            return regeneratorRuntime.awrap(btnSalarySave.click());

          case 19:
            _context6.next = 24;
            break;

          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](0);
            console.log('error occured in salaryblock' + _context6.t0);

          case 24:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 21]]);
  }; // Tax Exemption method for adding tax details etc..   


  this.taxExemptions = function _callee7(status) {
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(clickTaxExemptionsLink.click());

          case 3:
            _context7.next = 5;
            return regeneratorRuntime.awrap(btnSave.click());

          case 5:
            _context7.next = 7;
            return regeneratorRuntime.awrap(tax_federalStatus.click());

          case 7:
            _context7.next = 9;
            return regeneratorRuntime.awrap(tax_federalStatus.element(by.cssContainingText('option', status)).click());

          case 9:
            _context7.next = 11;
            return regeneratorRuntime.awrap(btnSave.click());

          case 11:
            _context7.next = 16;
            break;

          case 13:
            _context7.prev = 13;
            _context7.t0 = _context7["catch"](0);
            console.log('error occured in taxExemption block' + _context7.t0);

          case 16:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 13]]);
  }; // Report To method for adding supervisor details etc..   


  this.reportTo = function _callee8(supervisorName, reportingMethod) {
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return regeneratorRuntime.awrap(clickReportToLink.click());

          case 3:
            _context8.next = 5;
            return regeneratorRuntime.awrap(btnAddSupervisorDetail.click());

          case 5:
            _context8.next = 7;
            return regeneratorRuntime.awrap(reportto_supervisorName_empName.click());

          case 7:
            _context8.next = 9;
            return regeneratorRuntime.awrap(reportto_supervisorName_empName.sendKeys(supervisorName));

          case 9:
            _context8.next = 11;
            return regeneratorRuntime.awrap(reportto_reportingMethodType.click());

          case 11:
            _context8.next = 13;
            return regeneratorRuntime.awrap(reportto_reportingMethodType.element(by.cssContainingText('option', reportingMethod)).click());

          case 13:
            _context8.next = 15;
            return regeneratorRuntime.awrap(btnSaveReportTo.click());

          case 15:
            _context8.next = 20;
            break;

          case 17:
            _context8.prev = 17;
            _context8.t0 = _context8["catch"](0);
            console.log('error occured in Report to block' + _context8.t0);

          case 20:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 17]]);
  }; // Qualification method for adding qualification details etc..   


  this.Qualification = function _callee9(experienceemployer, jobTitle) {
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return regeneratorRuntime.awrap(clickQualificationsLink.click());

          case 3:
            _context9.next = 5;
            return regeneratorRuntime.awrap(addWorkExperience.click());

          case 5:
            _context9.next = 7;
            return regeneratorRuntime.awrap(experience_employer.click());

          case 7:
            _context9.next = 9;
            return regeneratorRuntime.awrap(experience_employer.sendKeys(experience_employer));

          case 9:
            _context9.next = 11;
            return regeneratorRuntime.awrap(experience_jobtitle.click());

          case 11:
            _context9.next = 13;
            return regeneratorRuntime.awrap(experience_jobtitle.sendKeys(jobTitle));

          case 13:
            _context9.next = 15;
            return regeneratorRuntime.awrap(btnWorkExpSave.click());

          case 15:
            _context9.next = 20;
            break;

          case 17:
            _context9.prev = 17;
            _context9.t0 = _context9["catch"](0);
            console.log('error occured in Qualification block' + _context9.t0);

          case 20:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 17]]);
  }; // Membership method for adding membership details etc.. 


  this.Membership = function _callee10(membershipType) {
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return regeneratorRuntime.awrap(clickMembershipLink.click());

          case 3:
            _context10.next = 5;
            return regeneratorRuntime.awrap(btnAddMembershipDetail.click());

          case 5:
            _context10.next = 7;
            return regeneratorRuntime.awrap(membership_membership.click());

          case 7:
            _context10.next = 9;
            return regeneratorRuntime.awrap(membership_membership.element(by.cssContainingText('option', membershipType)).click());

          case 9:
            _context10.next = 11;
            return regeneratorRuntime.awrap(membership_membership.click());

          case 11:
            _context10.next = 13;
            return regeneratorRuntime.awrap(btnSaveMembership.click());

          case 13:
            _context10.next = 18;
            break;

          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](0);
            console.log('error occured');

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 15]]);
  };
};

module.exports = new addNewEmployee();