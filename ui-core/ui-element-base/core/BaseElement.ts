import {Element} from '../behavior/Element';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export abstract class BaseElement implements Element{

    protected locator: WebElement;

    constructor(locator: WebElement){
        this.locator = locator;
    }

    public getElement() : WebElement{
        return this.locator;
    }

    public getText() : string {
        return "Test";
    }
}
