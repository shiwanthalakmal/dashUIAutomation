import {BaseElement} from './BaseElement';
import {Clickable} from '../behavior/Clickable';
import {Typable} from '../behavior/Typable';
import {browser, element, by, ElementFinder, ExpectedConditions} from 'protractor';
import * as webdriver from "selenium-webdriver";
import WebElement = webdriver.WebElement;
import {Helper} from "../../ui-actions/Helper";
import {WorkingMemory} from "../../../ui-utils/ui-memory/WorkingMemory";

export abstract class BaseTextField extends BaseElement{

    private mouse : Clickable;
    protected keyboard : Typable;
    protected locator : WebElement;

    constructor(locator: WebElement){
        super(locator);
        this.mouse = new Clickable();
        this.keyboard = new Typable();
    }

    public enterText(value: string) : void{
        this.keyboard.enterText(this.locator, value);
    }

    public enterTextIfExist(value: string) : void{
        this.keyboard.enterTextIfExist(this.locator,value);
    }

    public clickOnText() : void {
        this.mouse.click(this.locator);
    }

    public getTextSaveMemory(key: string) : void {
        WorkingMemory.getInstance().setPromiseMemory(key,this.locator.getText());
    }

}
