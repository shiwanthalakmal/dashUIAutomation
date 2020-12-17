import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {Helper} from '../../ui-actions/Helper';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";
import {ElementNotFoundException} from "../../../ui-utils/ui-exceptions/ElementNotFoundException";

export class Clickable{

    public click(locator : WebElement) : void {
        try{
            new Helper.Waits().waitForElementClickable(<ElementArrayFinder>locator,10000);
            locator.click();
            new Helper.Waits().waitFor(1000);
        }catch (err){
            throw new ElementNotFoundException("Element locator is not available ! "+ err.message);
        }
    }

}
