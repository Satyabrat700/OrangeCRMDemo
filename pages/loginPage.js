let loginPage = function () {


    let userName = element(by.id('txtUsername'));
    let password = element(by.id('txtPassword'));
    let loginButton = element(by.id('btnLogin'));

    this.getURL =  async function (URL) {
  
        await browser.get(URL);


    };

    this.enterUserName =  async function (user) {
        await userName.sendKeys(user);


    };
    this.enterpassword = async function (userPassword) {

        await password.sendKeys(userPassword);

    };

    this.clickLoginButton =  async function () {

        await loginButton.click();

    };

    this.verifyHomePageafterLogin = async function () {

        var text = element(by.xpath("//*[@id='branding']/a[1]/img"));
      expect(await text.isPresent()).toBe(false);

    };
};
module.exports = new loginPage();