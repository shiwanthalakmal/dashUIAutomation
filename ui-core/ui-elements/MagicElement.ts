import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseMagicElement} from "../ui-element-base/core/BaseMagicElement";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class MagicElement extends BaseMagicElement{

    constructor(locator: WebElement) {
        super(locator);
    }

}