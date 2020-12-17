import {browser, element, by, ElementFinder, ElementArrayFinder} from 'protractor';
import {Helper} from '../../ui-core/ui-actions/Helper';
import {TextField} from "../ui-elements/TextField";

export class PageBase{

    protected Helper_Waits: Helper.Waits;
    protected Helper_Actions: Helper.Actions;
    protected Helper_Navigation: Helper.Navigation;
    protected Helper_Assertion: Helper.Assertion;

    protected low : number = 2000;
    protected medium : number = 5000;
    protected high : number = 100000;

    constructor(){
        this.Helper_Waits = new Helper.Waits();
        this.Helper_Actions = new Helper.Actions();
        this.Helper_Navigation = new Helper.Navigation();
        this.Helper_Assertion = new Helper.Assertion();
    }

    protected initialize(){

    }

    protected step_initializer(){

    }

    protected findLocator(locatorType: string, locatorValue: string) : ElementFinder{
        switch (locatorType){
            case "id":
                return element(by.id(locatorValue));
            case "css":
                return element(by.css(locatorValue));
            case "model":
                return element(by.model(locatorValue));
            case "binding":
                return element(by.binding(locatorValue));
            case "buttonText":
                return element(by.buttonText(locatorValue));
            case "partialButtonText":
                return element(by.partialButtonText(locatorValue));
            case "linkText":
                return element(by.linkText(locatorValue));
            case "partialLinkText":
                return element(by.partialLinkText(locatorValue));
            case "cssContainingText":
                return element(by.cssContainingText(locatorValue,""));
            case "exactBinding":
                return element(by.exactBinding(locatorValue));
            case "repeater":
                return element(by.repeater(locatorValue));
            case "exactRepeater":
                return element(by.exactRepeater(locatorValue));
            case "options":
                return element(by.options(locatorValue));
            case "deepCss":
                return element(by.deepCss(locatorValue));
            case "className":
                return element(by.className(locatorValue));
            case "name":
                return element(by.name(locatorValue));
            case "tagName":
                return element(by.tagName(locatorValue));
            case "xpath":
                return element(by.xpath(locatorValue));
            default:
                //console.log("Sorry, Something wrong !!!");
        }
    }

    protected findLocators(locatorType: string, locatorValue: string) : ElementArrayFinder{
        switch (locatorType){
            case "id":
                return element.all(by.id(locatorValue));
            case "css":
                return element.all(by.css(locatorValue));
            case "model":
                return element.all(by.model(locatorValue));
            case "binding":
                return element.all(by.binding(locatorValue));
            case "buttonText":
                return element.all(by.buttonText(locatorValue));
            case "partialButtonText":
                return element.all(by.partialButtonText(locatorValue));
            case "linkText":
                return element.all(by.linkText(locatorValue));
            case "partialLinkText":
                return element.all(by.partialLinkText(locatorValue));
            case "cssContainingText":
                return element.all(by.cssContainingText(locatorValue,""));
            case "exactBinding":
                return element.all(by.exactBinding(locatorValue));
            case "repeater":
                return element.all(by.repeater(locatorValue));
            case "exactRepeater":
                return element.all(by.exactRepeater(locatorValue));
            case "options":
                return element.all(by.options(locatorValue));
            case "deepCss":
                return element.all(by.deepCss(locatorValue));
            case "className":
                return element.all(by.className(locatorValue));
            case "name":
                return element.all(by.name(locatorValue));
            case "tagName":
                return element.all(by.tagName(locatorValue));
            case "xpath":
                return element.all(by.xpath(locatorValue));

            default:
                //console.log("Sorry, Something wrong !!!");
        }
    }






}