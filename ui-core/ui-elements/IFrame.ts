import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseIFrame} from "../ui-element-base/core/BaseIFrame";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class IFrame extends BaseIFrame{

    constructor(locator: WebElement) {
        super(locator);
    }

}
