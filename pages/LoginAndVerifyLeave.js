
    let LoginAndVerifyLeave = function () {

    let welcomeButton=element(by.id("welcome"));
    let logOutLink=element(by.linkText("Logout"));
    let userName = element(by.id('txtUsername'));
    let password = element(by.id('txtPassword'));
    let loginButton = element(by.id('btnLogin'));
    let menu_leave_viewLeaveModule=element(by.xpath("//a[@id='menu_leave_viewLeaveModule']/b"));
    let menu_leave_viewMyLeaveList=element(by.id("menu_leave_viewMyLeaveList"));
    let calFromDate=element(by.id("calFromDate"));
    let calToDate=element(by.id("calToDate"));
    let btnSearch=element(by.id("btnSearch"))
    let textTobeValidated=element(by.xpath("//table[@id='resultTable']/tbody/tr/td[2]"));
    this.logOut = async function () {
          try {
	                await welcomeButton.click();
		              await logOutLink.click();

          } catch (error) {
                console.log(error+'occured inside logOut block');

               }
    }

   this.loginAndVerify = async function (UserID,UserPassword,startDate,endDate,empName) {
          try {
	  await userName.sendKeys(UserID);
		await password.sendKeys(UserPassword);

    await loginButton.click();
		await menu_leave_viewLeaveModule.click();
		await menu_leave_viewMyLeaveList.click();
	

		await calFromDate.click();
		await calFromDate.sendKeys(startDate);
    await calToDate.click();
		await calToDate.sendKeys(endDate);
		await btnSearch.click();
    expect(await element(textTobeValidated).getText()).toContain(empName);
              } catch (error) {
                console.log(error+'occured inside loginAndVerify block');

              }

    }
 
};
module.exports = new LoginAndVerifyLeave();