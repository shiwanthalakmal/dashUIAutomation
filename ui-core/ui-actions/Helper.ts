import {browser, element, by, ElementFinder, ElementArrayFinder, ExpectedConditions, ProtractorBy} from 'protractor';
import * as webdriver from "selenium-webdriver";
import {FrameworkException} from "../../ui-utils/ui-exceptions/FrameworkException";
import {AssertionError} from "../../ui-utils/ui-exceptions/AssertionError";
import {ApplicationException} from "../../ui-utils/ui-exceptions/ApplicationException";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let assert = chai.assert;
let should = chai.should();

export namespace Helper {

    import Promise = webdriver.promise.Promise;
    import WebElement = webdriver.WebElement;

    export class Navigation {

        /**
         * Navigate to the given url with waiting time
         * @param url
         * @param timeout
         */
        public safeGet(url: string, timeout: number): void {
            browser.get(url, timeout);
        }

        /**
         * Navigate to the given url
         * @param url
         */
        public get(url: string): void {
            browser.get(url);
        }

        /**
         * Verify the existing url
         * @param url
         * @returns {boolean}
         */
        public expectUrl(url: string): boolean {
            if (!url) {
                return false;
            }
            expect(browser.getCurrentUrl()).toContain(url);
        }

        /**
         * Return current browser url
         * @returns {wdpromise.Promise<any>}
         */
        public getCurrentUrl(): any {
            return browser.getLocationAbsUrl();
        }

        /**
         * Browser navigate to backward
         */
        public navigateBack(): void {
            browser.navigate().back();
        }

        /**
         * Browser navigate to forward
         */
        public navigateForward(): void {
            browser.navigate().forward();
        }

        /**
         * Browser refresh
         */
        public browserRefresh(): void {
            browser.refresh();
        }

        /**
         * Browser view maximize
         */
        public browserMaximize(): void {
            browser.manage().window().maximize();
        }

        /**
         * Return the browser current title
         */
        public browserTitle(): void {
            browser.getTitle();
        }

        /**
         * Execute javascript executor commands
         * @param script
         * @param element
         * @returns {wdpromise.Promise<any>}
         */
        public executeScript(script: string, element: ElementFinder) {
            return browser.executeScript(script, element);
        }

    }


    export class Waits {
        mainElementsWaitTime: 12000;

        /**
         * Wait for alert present and it's contains appear
         * @param expectedAlertText
         */
        public waitForAlertText(expectedAlertText: string): void {
            browser.wait(function () {
                return browser.switchTo().alert().then(
                    function () { return true; },
                    function () { return false; }
                );
            }, 5000);
            browser.switchTo().alert().then(function (alert) {
                expect(alert.getText(function (alertText) {
                    expect(alertText).toContain(expectedAlertText);
                }));
                alert.dismiss();
            });
        }

        /**
         * Wait for the element present in dom
         * @param element
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementPresent(element: WebElement) {
            return browser.wait(function () {
                return browser.isElementPresent(element);
            }, this.mainElementsWaitTime);
        }

        /**
         * Wait for the element display in dom
         * @param element
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementDisplayed(element: ElementFinder) {
            return browser.wait(function () {
                return element.isDisplayed();
            }, this.mainElementsWaitTime);
        }

        /**
         * Wait for the element disappear
         * @param element
         * @returns {Promise<R>}
         */
        public waitForElementMissed(element: ElementFinder) {
            return element.isPresent().then(function (present) {
                return expect(present).toBeFalsy();
            });
        }

        /**
         * Wait for angular async
         */
        public waitForAngular(): void {
            browser.waitForAngular();
        }

        /**
         * Wait for given time period
         * @param milliseconds
         */
        public waitFor(milliseconds: number): void {
            browser.sleep(milliseconds);
        }

        /**
         * An expectation for checking if the given text is present in the
         * element. Returns false if the elementFinder does not find an element.
         * @param element
         * @param text
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementText(element: ElementArrayFinder, text: string, timeout: number) {
            return browser.wait(ExpectedConditions.textToBePresentInElement(element.first(), text), timeout);
        }

        /**
         * An expectation for checking if the given text is present in the element’s
         * value. Returns false if the elementFinder does not find an element.
         * @param element
         * @param value
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementValue(element: ElementArrayFinder, value: string, timeout: number) {
            return browser.wait(ExpectedConditions.textToBePresentInElementValue(element.first(), value), timeout);
        }

        /**
         * An expectation for checking that an element is present on the DOM
         * of a page. This does not necessarily mean that the element is visible.
         * This is the opposite of 'stalenessOf'.
         * @param element
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementInDOM(element: ElementArrayFinder, timeout: number) {
            return browser.wait(ExpectedConditions.presenceOf(element.first()), timeout);
        }

        /**
         * An expectation for checking that an element is present on the DOM of a
         * page and visible. Visibility means that the element is not only displayed
         * but also has a height and width that is greater than 0. This is the
         * opposite
         * of 'invisibilityOf'.
         * @param element
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementVisible(element: ElementArrayFinder, timeout: number) {
            return browser.wait(ExpectedConditions.visibilityOf(element.first()), timeout);
        }

        /**
         * An expectation for checking that an element is either invisible or not
         * present on the DOM. This is the opposite of 'visibilityOf'.
         * @param element
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementInvisible(element: ElementArrayFinder, timeout: number) {
            return browser.wait(ExpectedConditions.invisibilityOf(element.first()), timeout,'Oops ! Element not visiable.');
        }

        /**
         * An Expectation for checking an element is visible and enabled such that you
         * can click it.
         * @param element
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementClickable(element: ElementArrayFinder, timeout: number) {
            return browser.wait(ExpectedConditions.elementToBeClickable(element.first()), timeout,'Oops ! Element not clickable.');
        }

        /**
         * An expectation for checking the selection is selected.
         * @param element
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForElementSelected(element: ElementArrayFinder, timeout: number) {
            return browser.wait(ExpectedConditions.elementToBeSelected(element.first()), timeout);
        }

        /**
         * An expectation for checking that the URL contains a case-sensitive
         * substring.
         * @param url
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForUrlChange(url: string, timeout: number) {
            return browser.wait(ExpectedConditions.urlContains(url), timeout);
        }

        /**
         * An expectation for checking the title of a page.
         * @param title
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForTitleChange(title: string, timeout: number) {
            return browser.wait(ExpectedConditions.titleIs(title), timeout);
        }

        /**
         * Expect an alert to be present.
         * @param timeout
         * @returns {wdpromise.Promise<any>}
         */
        public waitForAlert(timeout: number) {
            return browser.wait(ExpectedConditions.alertIsPresent(), timeout);
        }

    }




    export class Actions {

        public randomDigits(digitsNumber: number) {
            return Math.floor(Math.random() * (Math.pow(10, digitsNumber) + 1));
        }

        public click(element: any): void {
            element.click();
        }

        public getElementCount(element: ElementArrayFinder) : void {
            element.count().then(function (count) {
               console.log(count);
            });
        }


        public checkTextAvailability(element: ElementArrayFinder, expected: string) {
            element.filter(function (elementItem, index) {
               return elementItem.getText().then(function (text) {
                   if(text === expected) {
                       console.log('Yes ! Found text is:' + text);
                       return true;
                   }else{
                       console.log('Not found text is:' + text);
                       throw new Error();
                   }
               });
            }).then(function (bool) {

            }).catch(function (err) {
                throw new AssertionError("Ooops ! Couldn't found "+expected+" value ...")
            });
        }

        public checkTextFromList(element: ElementArrayFinder, expected: string) {
            let status :boolean = false;
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function (text) {
                    if(text === expected) {
                        console.log('Yes ! Found text is:' + text);
                        status = true;
                        return true;
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new AssertionError("Ooops ! Couldn't found "+expected+" value ...");
                }
            });
        }

        public checkTextContentFromList(element: ElementArrayFinder, expected: string) {
            let status :boolean = false;
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function (text) {
                    if(text.includes(expected)) {
                        console.log('Yes ! Found text is:' + text);
                        status = true;
                        return true;
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new AssertionError("Ooops ! Couldn't found "+expected+" value ...");
                }
            });
        }

        public checkSpecificElementTextContains(element: ElementArrayFinder, expected: number,  contains: string) : void{
            let checkIndex: number = -1;
            let status :boolean = false;
            element.filter(function(elem, index) {
                return elem.getText().then(function(value) {
                    checkIndex++;
                    if(index === (expected-1)){
                        if (value.includes(contains)) {
                            console.log('Yes ! Found text '+contains+' under '+expected+' record');
                            status = true;
                            return true;
                        }
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new AssertionError("Ooops ! Couldn't found '"+contains+"' under '"+expected+"' record ...");
                }
            });
        }

        public checkTextNotAvailability(element: ElementArrayFinder, expected: string) {
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function (text) {
                    if(text === expected) {
                        console.log('Oops ! Found text is:' + text);
                        throw new Error();

                    }else{
                        console.log('Yes ! Text not found:' + text);
                        return true;
                    }
                });
            }).then(function (bool) {

            }).catch(function (err) {
                throw new AssertionError("Oops ! Still text available : "+expected+" ...")
            });
        }

        public checkElementAttributeValue(element: ElementArrayFinder, attribute: string, attrivalue: string) : void{
            let status :boolean = false;
            element.filter(function(elem, index) {
                return elem.getAttribute(attribute).then(function(value) {
                    if (value.includes(attrivalue)) {
                        console.log('Yes ! Found attribute option is:' + attrivalue);
                        status = true;
                        return true;
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new AssertionError("Ooops ! Couldn't found '"+attribute+"' attribute in element or value mismatch ...");
                }
            });
        }

        public checkSpecificElementAttributeValue(element: ElementArrayFinder, expected: number, attribute: string, attrivalue: string) : void{
            let checkIndex: number = -1;
            let status :boolean = false;
            element.filter(function(elem, index) {
                return elem.getAttribute(attribute).then(function(value) {
                    checkIndex++;
                    if(index === (expected-1)){
                        if (value.includes(attrivalue)) {
                            console.log('Yes ! Found attribute option is:' + attrivalue);
                            status = true;
                            return true;
                        }
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new AssertionError("Ooops ! Couldn't found '"+attribute+"' attribute in element or value is mismatch ...");
                }
            });
        }

        public selectOptionByText(element: ElementArrayFinder,optionToSelect: string) : void{
            let clickedIndex: number;
            element.first().$$('option').filter(function(elem, index) {
                return elem.getText().then(function(text) {
                        if (text === optionToSelect) {
                            elem.click();
                            console.log('Yes ! Found option is:' + text);
                        }
                    return text === optionToSelect;
                });
            }).then(function (bool) {

            }).catch(function (err) {
                console.log('Ooops ! Error... '+err.message);
            });
        }

        public selectOptionByVisibleText(element: ElementArrayFinder,optionToSelect: string) : void{
            let clickedIndex: number;
            element.first().$$('option').filter(function(elem, index) {
                return elem.getText().then(function(text) {
                    if (text === optionToSelect) {
                        elem.click();
                        //console.log('Yes ! Found option is:' + text);
                    }
                    return text === optionToSelect;
                });
            }).then(function (bool) {

            }).catch(function (err) {
                console.log('Ooops ! Error... '+err.message);
            });
        }

        public selectOptionByValue(element: ElementArrayFinder,valueToSelect: string) : void{
            let clickedIndex: number;
            element.first().$$('option').filter(function(elem, index) {
                return elem.getAttribute("value").then(function(value) {
                    if (value === valueToSelect) {
                        elem.click();
                        console.log('Yes ! Found option is:' + value);
                    }
                    return value === valueToSelect;
                });
            }).then(function (bool) {

            }).catch(function (err) {
                console.log('Ooops ! Error... '+err.message);
            });
        }

        public findNoOfElementTextMatch(element:ElementArrayFinder, expected: string, count: number){
            let textFound: number = 0;
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function(text) {
                    if(text.includes(expected)){
                        textFound++;
                    }
                    return text === expected;
                });
            }).then(function (bool) {
                new Assertion().expect(textFound,count);
            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public findNoOfElementAndVerify(element:ElementArrayFinder, key: string){
            let clickedIndex: number = -1;
            element.filter(function (elementItem, index) {
                clickedIndex++;
                if(index === (500)){
                    return true;
                }
            }).then(function (bool) {
                console.log('||||||||||||||||||||||||| ********* Found ! '+key+' Elements Count: '+clickedIndex);
            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public findSpecificElementAndClick(element: ElementArrayFinder,expected: number){
            let clickedIndex: number = -1;
            element.filter(function (elementItem, index) {
                clickedIndex++;
                if(index === (expected-1)){
                    element.get(clickedIndex).click();
                    return true;
                }
            }).then(function (bool) {

            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public findFirstElementAndClick(element: ElementArrayFinder){
            try {
                element.first().click();
                new Helper.Waits().waitFor(500);
            }catch(err) {
                throw new FrameworkException('Ooops ! Error... [:findSpecificElementAndClick():] '+err.message);
            }
        }

        public findTextAndClick(element: ElementArrayFinder,expected: string) {
            let clickedIndex: number = -1;
            let status :boolean = false;
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function (text) {
                    if(text === expected) {
                        clickedIndex = index;
                        status = true;
                        return true;
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new ApplicationException("Ooops ! Couldn't found "+expected+" Record ...");
                }else{
                    element.get(clickedIndex).click();
                }
            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public findContentAndClick(element: ElementArrayFinder,expected: string) {
            let clickedIndex: number = -1;
            let status :boolean = false;
            element.filter(function (elementItem, index) {
                return elementItem.getText().then(function (text) {
                    if(text.includes(expected)) {
                        clickedIndex = index;
                        status = true;
                        return true;
                    }
                });
            }).then(function (bool) {
                if(!status){
                    throw new ApplicationException("Ooops ! Couldn't found "+expected+" Record ...");
                }else{
                    element.get(clickedIndex).click();
                }
            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public findElementAndClick(element: ElementArrayFinder) {
            let clickedIndex: number = -1;
            element.filter(function (elementItem, index) {
                return true;
            }).then(function (bool) {
                element.get(clickedIndex).click();
            }).catch(function (err) {
                throw new FrameworkException('Ooops ! Error... '+err.message);
            });
        }

        public isEnabled(element: any) {
            return expect(element.first().isEnabled()).to.eventually.be.true;
        }

        public isDisabled(element: any) {
            return expect(element.first().isEnabled()).to.eventually.be.false;
        }

        public enterText(element: any, text: any) {
            element.first().sendKeys(text);
        }

        public getInnerHtml(element: any) {
            return element.first().getInnerHtml();
        }

        public getSize(element: any) {
            return element.first().getSize();
        }

        public isDisplayed(element: any) {
             return expect(element.first().isDisplayed()).to.eventually.be.true;
        }

        public isNotDisplayed(element: any) {
            return expect(element.first().isDisplayed()).to.eventually.be.false;
        }

        public isPresent(element: any) {
              return expect(element.first().isPresent()).to.eventually.be.true;
        }

        public submit(element: any): void {
            element.first().submit();
        }

        public clearText(element: any): void {
            element.first().clear();
        }

        public getAttribute(element: any, attribute: string) {
            return element.first().getAttribute(attribute);
        }

        public getLocation(element: any) {
            return element.first().getLocation();
        }

        public getTagName(element: any) {
            return element.first().getTagName();
        }

        public isElementPresent(element: ElementFinder, locator: ElementFinder) {
            return element.first().isElementPresent(locator);
        }

        public isSelected(element: any) {
            return expect(element.first().isSelected()).to.eventually.be.true;
        }

    }



    export class Assertion {

        public expectURL(actual: any, expected: any){
            return assert.eventually.equal(actual, expected, 'URL Verification Error !');
        }

        public expectWithin(element: any, start: number, end: number){
            return expect(element.first().getText()).to.eventually.be.within(start, end);
        }

        public expectArrayLength(element: any, size: number){
            return expect(element.first().getText()).to.eventually.have.length(size);
        }

        public expectNotEqual(element: any, expected: any) {
            return assert.eventually.notEqual(element.first().getText(), expected, 'Verification Error !');
        }

        public expectToEqual(element: any, expected: any) {
            return assert.eventually.equal(element.first().getText(), expected, 'Verification Error !');
        }

        public expectToContain(element: any, expected: any) {
            return assert.eventually.include(element.first().getText(), expected,'Verification Error !');
        }

        public expectCollection(expected: string[],actual: string[]) {
            return expect(expected).toEqual(actual);
        }

        public expect(expected: any,actual: any){
            return expect(actual).to.equal(expected);
        }

    }
}
