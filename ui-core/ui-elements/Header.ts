import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseHeader} from "../ui-element-base/core/BaseHeader";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Header extends BaseHeader{

    constructor(locator: WebElement) {
        super(locator);
    }

}
