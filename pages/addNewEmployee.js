//addNewEmployee method to create details for a new employee

let addNewEmployee = function () {

        let clickPIM=element(by.xpath("//a[@id='menu_pim_viewPimModule']/b"));
        let FirstName=element(by.id("firstName"));
        let LastName=element(by.id("lastName"));
        let employeeId=element(by.id("employeeId"));
        let btnSave=element(by.id("btnSave"));
        let clickContactDetailsLink=element(by.linkText("Contact Details"));
        let contact_street1=element(by.id("contact_street1"));
        let clickEmergencyContactLink=element(by.linkText("Emergency Contacts"));
        let btnAddContact=element(by.id("btnAddContact"));
        let emgcontacts_name=element(by.id("emgcontacts_name"));
        let emgcontacts_relationship=element(by.id("emgcontacts_relationship"));
        let emgcontacts_homePhone=element(by.id("emgcontacts_homePhone"));
        let clickDependantsLink=element(by.linkText("Dependents"));
        let btnAddDependent=element(by.id("btnAddDependent"));
        let dependent_name=element(by.id("dependent_name"));
        let dependent_relationshipType=element(by.id("dependent_relationshipType"));
        let dependent_dateOfBirth=element(by.id("dependent_dateOfBirth"));
        let btnSaveDependent=element(by.id("btnSaveDependent"));
        let clickJobLink=element(by.linkText("Job"));
        let job_job_title= element(by.id("job_job_title"));
        let clickSalaryLink=element(by.linkText("Salary"));
        let addSalary=element(by.id("addSalary"));
        let salary_sal_grd_code=element(by.id("salary_sal_grd_code"));
        let salary_salary_component=element(by.id("salary_salary_component"));
        let salary_currency_id=element(by.id("salary_currency_id"))
        let salary_basic_salary=element(by.id("salary_basic_salary"));
        let btnSalarySave=element(by.id("btnSalarySave"));
        let clickTaxExemptionsLink=element(by.linkText("Tax Exemptions"));
        let tax_federalStatus=element(by.id("tax_federalStatus"));
        let clickReportToLink=element(by.linkText("Report-to"));
        let btnAddSupervisorDetail=element(by.id("btnAddSupervisorDetail"));
        let reportto_supervisorName_empName=element(by.id("reportto_supervisorName_empName"));
        let reportto_reportingMethodType=element(by.id("reportto_reportingMethodType"));
        let btnSaveReportTo=element(by.id("btnSaveReportTo"));
        let clickQualificationsLink=element(by.linkText("Qualifications"));
        let addWorkExperience=element(by.id("addWorkExperience"));
        let experience_employer=element(by.id("experience_employer"));
        let experience_jobtitle=element(by.id("experience_jobtitle"));
        let btnWorkExpSave=element(by.id("btnWorkExpSave"))
        let clickMembershipLink= element(by.linkText("Memberships"));
        let btnAddMembershipDetail=element(by.id("btnAddMembershipDetail"));
        let membership_membership=element(by.id("membership_membership"));
		let btnSaveMembership=element(by.id("btnSaveMembership"));

    
        process.on('unhandledRejection', err => {
            throw err;
        });
        

        this.addEmployee = async function (url1,firstName,lastName,empID) {
            try {
           await clickPIM.click();
           await browser.get(url1);
           await FirstName.clear();
           await FirstName.click();
           await FirstName.sendKeys(firstName);
           await LastName.click();
           await LastName.sendKeys(lastName);
           await employeeId.clear();
           await employeeId.click();
           await employeeId.sendKeys(empID);
           await btnSave.click();
         
            } catch (error) {
                console.log(error+'occured inside add Employee block');

            }

    };
// Contact details method for adding Contact details like street name etc..
        this.addContact = async function (streetName) {
            try {
            await clickContactDetailsLink.click();
            await btnSave.click();
            await contact_street1.click();
            await contact_street1.sendKeys(streetName);
            await btnSave.click();
             
             } catch (error) {
                console.log('error occured inside contact details block'+error);
            }

    };
// Emergency Contact details method for adding Contact details like emeregency contact name etc..   
      this.addEmergencyContact = async function (emerContactName,relationship,homePhone) {
          try {
            await clickEmergencyContactLink.click();
            await btnAddContact.click();
            await emgcontacts_name.click();
            await emgcontacts_name.sendKeys(emerContactName);
            await emgcontacts_relationship.click();
            await emgcontacts_relationship.sendKeys(relationship);
            await emgcontacts_homePhone.click();
            await emgcontacts_homePhone.sendKeys(homePhone);
             
            } catch (error) {
                console.log('error occured inside Emergencycontact block'+error);
            }
    };


// Dependents details method for adding Dependents etc..   
      this.Dependents = async function (dependentname,depOption,DOB) {
          try {
           await clickDependantsLink.click();
           await btnAddDependent.click();
           await dependent_name.click();
           await dependent_name.sendKeys(dependent_name);
           await dependent_relationshipType.click();
           await dependent_relationshipType(by.cssContainingText('option', depOption)).click();
           await dependent_relationshipType.click();
           await dependent_dateOfBirth.click();
           await dependent_dateOfBirth.sendKeys(DOB);
           await btnSaveDependent.click();
            
           } catch (error) {
                console.log('error occured in Dependents block'+error);
           }
    };
// Job method for adding job details etc..   
      this.Job = async function (jobtitle) {
          try {
            await clickJobLink.click();
            await btnSave.click();
            await job_job_title.click();
            await job_job_title.element(by.cssContainingText('option', jobtitle)).click();
            await job_job_title.click();
            await btnSave.click();  
             
            } catch (error) {
                console.log('error occured in Job block'+error);
           }
    };

    // Salary method for adding Salary details etc..   
      this.Salary = async function (payGrade,salaryCompnent,currency,basicSalary) {
          try {
         await clickSalaryLink.click();
         await addSalary.click();
      // await salary_sal_grd_code.click();
       //await salary_sal_grd_code.element(by.cssContainingText('option', payGrade)).click();
      // await salary_sal_grd_code.click();
        await salary_salary_component.click();
        await salary_salary_component.sendKeys(salaryCompnent);
        await salary_currency_id.click()
        await salary_currency_id.element(by.label('option', currency)).click();
      
        await salary_basic_salary.click();
        await salary_basic_salary.sendKeys(basicSalary);
         await btnSalarySave.click();
        
        } catch (error) {
                console.log('error occured in salaryblock'+error);
        }

    };

       // Tax Exemption method for adding tax details etc..   
      this.taxExemptions= async function (status) {
          try {
        await clickTaxExemptionsLink.click();
        await btnSave.click();
        await tax_federalStatus.click();
        await tax_federalStatus.element(by.cssContainingText('option', status)).click();
        
        await btnSave.click();
         
         } catch (error) {
                console.log('error occured in taxExemption block'+error);
        }

    };
     // Report To method for adding supervisor details etc..   
    this.reportTo= async function (supervisorName,reportingMethod) {
           try {
        await clickReportToLink.click();
        await btnAddSupervisorDetail.click();
        await reportto_supervisorName_empName.click();
        await reportto_supervisorName_empName.sendKeys(supervisorName);
        await reportto_reportingMethodType.click();
        await reportto_reportingMethodType.element(by.cssContainingText('option', reportingMethod)).click();
        
        await btnSaveReportTo.click();
         
           } catch (error) {
                console.log('error occured in Report to block'+error);
        }
    };

   // Qualification method for adding qualification details etc..   
    this.Qualification= async function (experienceemployer,jobTitle) {
          try {
        await clickQualificationsLink.click();
        await addWorkExperience.click();
        await experience_employer.click();
        await experience_employer.sendKeys(experience_employer);
        await experience_jobtitle.click();
        await experience_jobtitle.sendKeys(jobTitle);
        await btnWorkExpSave.click();
         
            } catch (error) {
                console.log('error occured in Qualification block'+error);
        }


    };
     
// Membership method for adding membership details etc.. 
    this.Membership= async function (membershipType) {
  try {
        await clickMembershipLink.click();
        await btnAddMembershipDetail.click();
        await membership_membership.click();
        await membership_membership.element(by.cssContainingText('option', membershipType)).click();
        await membership_membership.click();
        await btnSaveMembership.click(); 
          } catch (error) {
                console.log('error occured');
        } 
    };

};
module.exports = new addNewEmployee();