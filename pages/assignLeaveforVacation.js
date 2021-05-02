	
  let assignLeaveforVacation = function () {
  
    let leaveModule=element(by.xpath("//a[@id='menu_leave_viewLeaveModule']/b"));
    let menu_leave_assignLeave=element(by.id("menu_leave_assignLeave"));
    let assignleave_txtEmployee_empName=element(by.id("assignleave_txtEmployee_empName"));
    let assignleave_txtLeaveType=element(by.id("assignleave_txtLeaveType"));
    let assignleave_txtFromDate=element(by.id("assignleave_txtFromDate"));
    let assignleave_txtToDate=element(by.id("assignleave_txtToDate"))
    let assignleave_txtComment=element(by.id("assignleave_txtComment"));
    let assignBtn=element(by.id("assignBtn"));
    let confirmOkButton=element(by.id("confirmOkButton"));

            process.on('unhandledRejection', err => {
            throw err;
        });
        

    this.assignLeave = async function (empName,VacationType,startDate,endDate,Comment,LeaveURL) {
              try {

		            await leaveModule.click();
		            await menu_leave_assignLeave.click();
                browser.get(LeaveURL);
		            await assignleave_txtEmployee_empName.click();
		            await assignleave_txtEmployee_empName.sendKeys(empName);
		            
                await assignleave_txtLeaveType.click();
                var desiredOption = assignleave_txtLeaveType.element(by.cssContainingText('option',VacationType));
                var EC = protractor.ExpectedConditions;
                browser.wait(EC.visibilityOf(desiredOption), 5000);
                desiredOption.click();
		            //await assignleave_txtLeaveType.element(by.cssContainingText('option',VacationType)).click();
		            await assignleave_txtFromDate.click();
		            await assignleave_txtFromDate.sendKeys(startDate);
                 await assignleave_txtEmployee_empName.click();
                await assignleave_txtToDate.click();
                await assignleave_txtToDate.clear();
	            	await assignleave_txtToDate.sendKeys(endDate);

                 await assignleave_txtEmployee_empName.click();
		            await assignleave_txtComment.click();
		            await assignleave_txtComment.sendKeys(Comment);
		            await assignBtn.click();
		            await confirmOkButton.click();
                            } catch (error) {
                console.log(error+'occured inside assignLeaveforEmp block');

            }
        }

  };
  module.exports = new assignLeaveforVacation();