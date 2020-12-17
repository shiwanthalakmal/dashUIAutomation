import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseLabel} from "../ui-element-base/core/BaseLabel";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Label extends BaseLabel{

    constructor(locator: WebElement) {
        super(locator);
    }

}
