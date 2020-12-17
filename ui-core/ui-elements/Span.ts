import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseSpan} from "../ui-element-base/core/BaseSpan";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class Span extends BaseSpan{

    constructor(locator: WebElement) {
        super(locator);
    }

}
