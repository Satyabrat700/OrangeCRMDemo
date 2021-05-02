
let loginPage = require('../pages/loginPage');
let addNewEmployee = require('../pages/addNewEmployee');
let ExcelReader = require('../testData/ExcelReader.js');
let assignLeaveforVacation=require('../pages/assignLeaveforVacation');
let addUserLoginDetails=require('../pages/addUserLoginDetails');
let LoginAndVerifyLeave=require('../pages/LoginAndVerifyLeave');


describe('Assign Leave for Vacation', function () {
      
      var Test_Data=ExcelReader.read_from_excel('Sheet1','C:/Users/satya/OneDrive/Desktop/Projects/ProtractorDemo/testData/testData.xlsx');
      Test_Data.forEach(function(data){

              if(typeof(data) === "string"){data = JSON.parse(data)}

        it('LoginPage', async function () {
        
          await loginPage.getURL(data.URL);

          await loginPage.enterUserName(data.userName);

          await loginPage.enterpassword(data.password);

          await loginPage.clickLoginButton();

          await loginPage.verifyHomePageafterLogin();
        })

        it('Add New Employee details', async function () {
    
          await addNewEmployee.addEmployee(data.url1,data.firstName,data.lastName,data.empID);
          await addNewEmployee.addContact(data.streetName);
          await addNewEmployee.addEmergencyContact(data.emerContactName,data.relationship,data.homePhone);
          await addNewEmployee.Dependents(data.dependent_name,data.depOption,data.DOB);
          await addNewEmployee.Job(data.jobtitle);
          await addNewEmployee.Salary(data.payGrade,data.salaryCompnent,data.currency,data.basicSalary);
          await addNewEmployee.taxExemptions(data.status);
          await addNewEmployee.reportTo(data.supervisorName,data.reportingMethod);
          await addNewEmployee.Qualification(data.experience_employer,data.jobTitle);
          await addNewEmployee.Membership(data.membershipType);
        })


            it('Add user details', async function () {
             

                await addUserLoginDetails.addUserDetails(data.empName,data.UserID,data.UserPassword);

            })

            it('Assign leave for vacation', async function () {
         

                    await assignLeaveforVacation.assignLeave(data.empName,data.VacationType,data.startDate,data.endDate,data.Comment,data.LeaveURL);

            })


          it('Login and verify leave', async function () {
              

                    await LoginAndVerifyLeave.logOut();
                    await LoginAndVerifyLeave.loginAndVerify(data.UserID,data.UserPassword,data.startDate,data.endDate,data.empName,data.URL);
                    console.log("End");


            })

   })
    afterEach(() => {
        browser.manage().logs().get('browser').then((browserLog) => {
            console.log(browserLog); // Outputs: []
        });
    });
  });

 

