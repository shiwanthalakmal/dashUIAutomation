import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../dash-e2e-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {TextField} from "../../../ui-core/ui-elements/TextField";
import {browser, protractor} from "protractor";

const log = Factory.getLogger("Module.DashWebViewerModule");

export class DashWebViewerModule extends PageBase{

    private btnWevViewerAddIcon      : any;
    private txtFldWebViewerSiteUrl   : any;
    private btnWebViewerSiteTest     : any;
    private btnWebViewerSiteCancel   : any;
    private txtFldWebViewerSiteBookmark: any;
    private btnWebViewerAddAsLink    : any;
    private btnWebViewerAddWbSiteAddress: any;
    private lnkWebSitesUnderWebViewer: any;
    private lnkMediaSitesNavIconUnderWebViewer: any;
    private btnSaveWebViewerRecords   : any;
    private lblLinkURLTestToolTip     : any;
    private lblWebURLTestToolTip      : any;


    constructor(){
        super();
        const element = Elements.DashWebViewerModule;
        this.btnWevViewerAddIcon            = super.findLocators(element.btnWevViewerAddIcon.findBy,element.btnWevViewerAddIcon.value);
        this.txtFldWebViewerSiteUrl         = super.findLocators(element.txtFldWebViewerSiteUrl.findBy,element.txtFldWebViewerSiteUrl.value);
        this.btnWebViewerSiteTest           = super.findLocators(element.btnWebViewerSiteTest.findBy,element.btnWebViewerSiteTest.value);
        this.btnWebViewerSiteCancel         = super.findLocators(element.btnWebViewerSiteCancel.findBy,element.btnWebViewerSiteCancel.value);
        this.txtFldWebViewerSiteBookmark    = super.findLocators(element.txtFldWebViewerSiteBookmark.findBy,element.txtFldWebViewerSiteBookmark.value);
        this.btnWebViewerAddAsLink          = super.findLocators(element.btnWebViewerAddAsLink.findBy,element.btnWebViewerAddAsLink.value);
        this.btnWebViewerAddWbSiteAddress    = super.findLocators(element.btnWebViewerAddWbSiteAddress.findBy,element.btnWebViewerAddWbSiteAddress.value);
        this.lnkWebSitesUnderWebViewer      = super.findLocators(element.lnkWebSitesUnderWebViewer.findBy,element.lnkWebSitesUnderWebViewer.value);
        this.lnkMediaSitesNavIconUnderWebViewer= super.findLocators(element.lnkMediaSitesNavIconUnderWebViewer.findBy,element.lnkMediaSitesNavIconUnderWebViewer.value);
        this.btnSaveWebViewerRecords        = super.findLocators(element.btnSaveWebViewerRecords.findBy,element.btnSaveWebViewerRecords.value);
        this.lblLinkURLTestToolTip          = super.findLocators(element.lblLinkURLTestToolTip.findBy, element.lblLinkURLTestToolTip.value);
        this.lblWebURLTestToolTip           = super.findLocators(element.lblWebURLTestToolTip.findBy, element.lblWebURLTestToolTip.value);
    }

    public action_webviewer_adding_icon_press() : void{
        new Button(this.btnWevViewerAddIcon).click();
    }

    public action_webviewer_enter_site_url_and_test(site: string): void{
        new TextField(this.txtFldWebViewerSiteUrl).enterText(site);
        new Button(this.btnWebViewerSiteTest).click();
    }

    public action_webviewer_set_bookmark_name_and_add_as_link_and_save(name: string): void{
        this.Helper_Waits.waitForElementClickable(this.txtFldWebViewerSiteBookmark, this.high);
        new TextField(this.txtFldWebViewerSiteBookmark).enterText(name);
        new Button(this.btnWebViewerAddAsLink).click();
        new Button(this.btnSaveWebViewerRecords).click();this.Helper_Waits.waitForAngular();
    }

    public action_webviewer_without_bookmark_name_and_add_as_link_and_save(): void{
        this.Helper_Waits.waitForElementClickable(this.btnWebViewerAddWbSiteAddress,this.high);
        new Button(this.btnWebViewerAddWbSiteAddress).click();
        new Button(this.btnSaveWebViewerRecords).click();
    }

    public action_webviewer_choose_websites_under_webviewer_and_verify(name: string, url: string): void{
        this.Helper_Waits.waitForElementClickable(this.lnkWebSitesUnderWebViewer,this.medium);
        this.Helper_Actions.checkTextContentFromList(this.lnkWebSitesUnderWebViewer,name);
        this.Helper_Actions.findContentAndClick(this.lnkWebSitesUnderWebViewer,name);this.Helper_Waits.waitFor(this.medium);
    }

    public action_webviewer_choose_media_websites_under_webviewer_and_verify(name: string): void{
        this.Helper_Waits.waitForAngular();this.Helper_Waits.waitForElementText(this.lnkWebSitesUnderWebViewer, name, this.medium);
        this.Helper_Actions.checkTextContentFromList(this.lnkWebSitesUnderWebViewer,name);
        this.Helper_Waits.waitForElementClickable(this.lnkMediaSitesNavIconUnderWebViewer,this.high);
        this.Helper_Actions.findElementAndClick(this.lnkMediaSitesNavIconUnderWebViewer);this.Helper_Waits.waitFor(this.medium);
    }

    public action_webviewer_url_test_completed_tooltip_verification(type: string): void{
        this.Helper_Waits.waitFor(this.medium);
        if(type == "link"){
            //this.Helper_Actions.checkTextContentFromList(this.lblLinkURLTestToolTip,'This web page will display directly in the Dash page.');
        }if(type === "web"){
            //this.Helper_Actions.checkTextContentFromList(this.lblWebURLTestToolTip,'This web page will display as a separate page in your browser.');
        }else{log.warn('Something went wrong in calling parameters');}
    }

    public action_webviewer_verify_site_browser_url(url: string): void{
        var handlersList;
        browser.getAllWindowHandles().then(function (handles) {
            handlersList = handles;
            var newWindowHandle = handles[1];
            browser.switchTo().window(newWindowHandle).then(function () {
                log.warn('Switch to new window handler -> '+ newWindowHandle);
            });
        });
        this.Helper_Assertion.expectURL(browser.driver.getCurrentUrl(), url);
        browser.driver.close().then(function () {
            browser.switchTo().window(handlersList[0]);
        });
    }

}