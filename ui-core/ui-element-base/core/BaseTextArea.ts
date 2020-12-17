import {BaseElement} from './BaseElement';
import {Clickable} from '../behavior/Clickable';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";
import {Typable} from "../behavior/Typable";

export abstract class BaseTextArea extends BaseElement{

    private mouse : Clickable;
    protected keyboard : Typable;
    protected locator : WebElement;

    constructor(locator: WebElement){
        super(locator);
        this.mouse = new Clickable();
        this.keyboard = new Typable();
        this.locator = locator;
    }

    public enterText(value: string) : void{
        this.keyboard.enterText(this.locator, value);
    }

    public click() : void{
        this.mouse.click(this.locator);
    }

}
