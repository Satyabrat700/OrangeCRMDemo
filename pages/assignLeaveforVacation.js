	
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
        

    this.assignLeave = async function (txtEmployee_empName,VacationType,startDate,endDate,Comment) {
              try {

		            await leaveModule.click();
		            await menu_leave_assignLeave.click();
		            await assignleave_txtEmployee_empName.click();
		            await assignleave_txtEmployee_empName.sendKeys(txtEmployee_empName);
                await assignleave_txtLeaveType.clear();
		            await assignleave_txtLeaveType.click()
		            .then(() =>  eassignleave_txtLeaveType.element(by.cssContainingText('option', VacationType)).click());
		            await assignleave_txtLeaveType.click();
		            await assignleave_txtFromDate.click();
		            await eassignleave_txtFromDate.sendKeys(startDate);
	            	await assignleave_txtToDate.sendKeys(endDate);
		            await assignleave_txtComment.click();
		            await assignleave_txtComment.sendKeys(Comment);
		            await eassignBtn.click();
		            await econfirmOkButton.click();
                            } catch (error) {
                console.log(error+'occured inside assignLeaveforEmp block');

            }
        }

  };
  module.exports = new assignLeaveforVacation();