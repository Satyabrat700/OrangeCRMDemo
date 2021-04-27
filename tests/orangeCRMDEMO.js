
let loginPage = require('../pages/loginPage');


describe('Assign Leave for Vacation', function () {
  browser.waitForAngularEnabled(false);
  browser.ignoreSynchronization = true;
it('Login Page',function(){
  browser.sleep(5000);
  loginPage.getURL('https://opensource-demo.orangehrmlive.com/');
  browser.sleep(5000);
  loginPage.enterUserName('Admin');
  browser.sleep(5000);
  loginPage.enterpassword('admin123');
  browser.sleep(3000);
  loginPage.clickLoginButton();
  browser.sleep(5000);

  loginPage.verifyHomePageafterLogin();
});
});