describe('Calculator Programme', function () {

    it('addition', function () {

        console.log('Inside addition');
        browser.get('http://juliemr.github.io/protractor-demo/');

        var input = element(by.model('first'));
        input.sendKeys('46');

        var input = element(by.model('second'));
        input.sendKeys('44');

        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(3000);
        var res=element(by.cssContainingText('.ng-binding','90'));
        expect(res.getText()).toEqual('90');


    });

});