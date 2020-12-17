import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {BaseTextArea} from "../ui-element-base/core/BaseTextArea";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export class TextArea extends BaseTextArea{

    constructor(locator: WebElement) {
        super(locator);
    }

    public clearText() : void{
        this.locator.clear();
    }

}
