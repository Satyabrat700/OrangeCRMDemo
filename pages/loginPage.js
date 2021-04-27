let loginPage = function () {


    let userName = element(by.id('txtUsername'));
    let password = element(by.id('txtPassword'));
    let loginButton = element(by.id('btnLogin'));

    this.getURL = function (url) {
        browser.get(url);


    };

    this.enterUserName = function (user) {
        userName.sendKeys(user);


    };
    this.enterpassword = function (userPassword) {

        password.sendKeys(userPassword);

    };

    this.clickLoginButton = function () {

        loginButton.click();

    };

    this.verifyHomePageafterLogin = function () {

        var text = element(by.xpath("//*[@id='branding']/a[1]/img"));
        // expect(text.isPresent()).toBe(true);

    };
};
module.exports = new loginPage();