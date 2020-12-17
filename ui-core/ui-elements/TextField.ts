import {browser, element, by, ElementFinder, ExpectedConditions, protractor} from 'protractor';
import {BaseTextField} from "../ui-element-base/core/BaseTextField";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class TextField extends BaseTextField{

    constructor(locator: WebElement) {
        super(locator);
    }

    public enterTextAndSubmit(value: string) : void{
        super.enterText(value);
        let enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
    }

    public clearText() : void{
        this.locator.clear();
    }

}