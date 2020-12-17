import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {Helper} from "../../ui-actions/Helper";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";
import {ElementNotFoundException} from "../../../ui-utils/ui-exceptions/ElementNotFoundException";

export class Typable{

    public enterText(locator : WebElement, value: string) : void {
        try{
            new Helper.Waits().waitForElementVisible(<ElementArrayFinder>locator,10000);
            locator.clear();
            locator.sendKeys(value);
            new Helper.Waits().waitFor(1000);
        }catch (err){
            throw new ElementNotFoundException("Element locator is not available ! "+ err.message);
        }
    }

    public enterTextIfExist(locator : WebElement, value: string) : void {
        try{
            locator.isDisplayed().then(function(result) {
                if ( result ) {
                    console.log('xxxxxxxxx');
                } else {
                    console.log('zzzzzzzzz');
                }
            })
        }catch (err){
            throw new ElementNotFoundException("Element locator is not available ! "+ err.message);
        }
    }

}