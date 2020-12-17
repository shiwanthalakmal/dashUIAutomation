import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseLink} from "../ui-element-base/core/BaseLink";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Link extends BaseLink{

    constructor(locator: WebElement) {
        super(locator);
    }

}
