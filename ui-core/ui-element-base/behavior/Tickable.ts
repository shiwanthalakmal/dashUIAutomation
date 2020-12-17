import {browser, element, by, ElementFinder} from 'protractor';
import {Helper} from '../../ui-actions/Helper';
import WebElement = webdriver.WebElement;
import * as webdriver from "selenium-webdriver";
import {ElementNotFoundException} from "../../../ui-utils/ui-exceptions/ElementNotFoundException";

export class Tickable{

    public check(locator : WebElement) : void {

        try{
            locator.isSelected().then(function (selected) {
                if(!selected){
                    locator.click();
                }
            })
        }catch (err){
            throw new ElementNotFoundException("Element locator is not available ! "+ err.message);
        }
    }
}