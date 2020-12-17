import {BaseElement} from './BaseElement';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import {Tickable} from "../behavior/Tickable";
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";

export abstract class BaseCheckBox extends BaseElement{

    private tickable : Tickable;
    protected locator : WebElement;

    constructor(locator: WebElement){
        super(locator);
        this.tickable = new Tickable();
        this.locator = locator;
    }

    public check() : void{
        this.tickable.check(this.locator);
    }

}
