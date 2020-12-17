import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseRadioButton} from "../ui-element-base/core/BaseRadioButton";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";


export class RadioButton extends BaseRadioButton{

    constructor(locator: WebElement) {
        super(locator);
    }

}
