import {BaseElement} from './BaseElement';
import {Clickable} from '../behavior/Clickable';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export abstract class BaseSpan extends BaseElement{

    private mouse : Clickable;
    protected locator : WebElement;

    constructor(locator: WebElement){
        super(locator);
        this.mouse = new Clickable();
        this.locator = locator;
    }

    public click() : void{
        this.mouse.click(this.locator);
    }

}
