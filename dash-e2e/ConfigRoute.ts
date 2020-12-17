import {browser, ElementArrayFinder, element} from "protractor";

export class ConfigRoute{

    constructor(){

    }

    public static visit_page(url: string) : void{
        browser.get(url,60000);
    }

    public static on_page(): void{

    }

}