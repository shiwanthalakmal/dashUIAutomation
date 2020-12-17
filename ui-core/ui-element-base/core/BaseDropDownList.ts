import {BaseElement} from './BaseElement';
import {Clickable} from '../behavior/Clickable';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";
import {Selectable} from "../behavior/Selectable";

export abstract class BaseDropDownList extends BaseElement{

    private mouse : Clickable;
    private select : Selectable;
    protected locator : WebElement;

    constructor(locator: WebElement){
        super(locator);
        this.mouse = new Clickable();
        this.select = new Selectable;
        this.locator = locator;
    }

    public selectOptionByValue(optionToSelect: string) : void{

    }

    public selectOptionByLabel() : void{

    }

    public selectOptionByText(optionToSelect: string) : void{

    }

    public click() : void{
        this.mouse.click(this.locator);
    }

}
