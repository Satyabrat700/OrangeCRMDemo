let addUserLoginDetails = function () {
   let menu_admin_viewAdminModule=element(by.xpath("//a[@id='menu_admin_viewAdminModule']/b"));
	 let menu_admin_UserManagement=element(by.id("menu_admin_UserManagement"));
	 let btnAdd=element(by.id("btnAdd"));
	 let systemUser_employeeName_empName=element(by.id("systemUser_employeeName_empName"));
	 let systemUser_userName=element(by.id("systemUser_userName"));
	 let content=element(by.id("content"));
	 let systemUser_password=element(by.id("systemUser_password"));
	 let btnSave=element(by.id("btnSave"));

    this.addUserDetails = async function (empName,UserID,UserPassword) {

		try {
    await menu_admin_viewAdminModule.click();
		await menu_admin_UserManagement.click();
		await btnAdd.click();
		await systemUser_employeeName_empName.click();
		await systemUser_employeeName_empName.sendKeys(empName);
		await systemUser_employeeName_empName.click();
		await systemUser_employeeName_empName.sendKeys(UserID);
		await content.click();
		await systemUser_password.sendKeys(UserPassword);
		await systemUser_password.click();
		await systemUser_password.sendKeys(UserPassword);
		await btnSave.click();

						} catch (error) {
                console.log(error+'occured inside assignLeaveforEmp block');

            }
    }

  
 
};
module.exports = new addUserLoginDetails();