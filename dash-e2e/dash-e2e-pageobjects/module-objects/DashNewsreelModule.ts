import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../dash-e2e-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
var fs = require('fs');
var path = require('path');
import {browser, ElementArrayFinder, protractor, element, by} from "protractor";
import {TextField} from "../../../ui-core/ui-elements/TextField";

const log = Factory.getLogger("Module.DashNewsreelModule");

export class DashNewsreelModule extends PageBase {

    private btnNewsreelPaginationList    : any;
    private btnNewsreelAddIcon           : any;
    private txtFldNewsreelHeadline       : any;
    private txtFldNewsreelSummary        : any;
    private btnNewsreelBrowseEditClose   : any;
    private ddlDivisionOption            : any;
    private ddlOrganizationOption        : any;
    private ddlTeamOption                : any;
    private btnNewsreelAddScope          : any;
    private btnNewsreelAddStory          : any;
    private btnSaveWebViewerRecords      : any;
    private btnNewsreelRecordsEdit       : any;
    private btnNewsreelRecordsDelete       : any;
    private btnNewsreelRecordsDeleteConfirm       : any;
    private btnNewsreelPaginations       : any;

    constructor() {
        super();
        const element = Elements.DashNewsreelModule;
        this.btnNewsreelPaginationList   = super.findLocators(element.btnNewsreelPaginationList.findBy, element.btnNewsreelPaginationList.value);
        this.btnNewsreelAddIcon          = super.findLocators(element.btnNewsreelAddIcon.findBy, element.btnNewsreelAddIcon.value);
        this.txtFldNewsreelHeadline      = super.findLocators(element.txtFldNewsreelHeadline.findBy, element.txtFldNewsreelHeadline.value);
        this.txtFldNewsreelSummary       = super.findLocators(element.txtFldNewsreelSummary.findBy, element.txtFldNewsreelSummary.value);
        this.btnNewsreelBrowseEditClose  = super.findLocators(element.btnNewsreelBrowseEditClose.findBy, element.btnNewsreelBrowseEditClose.value);
        this.ddlDivisionOption           = super.findLocators(element.ddlDivisionOption.findBy, element.ddlDivisionOption.value);
        this.ddlOrganizationOption       = super.findLocators(element.ddlOrganizationOption.findBy, element.ddlOrganizationOption.value);
        this.ddlTeamOption               = super.findLocators(element.ddlTeamOption.findBy, element.ddlTeamOption.value);
        this.btnNewsreelAddScope         = super.findLocators(element.btnNewsreelAddScope.findBy, element.btnNewsreelAddScope.value);
        this.btnNewsreelAddStory         = super.findLocators(element.btnNewsreelAddStory.findBy, element.btnNewsreelAddStory.value);
        this.btnSaveWebViewerRecords     = super.findLocators(element.btnSaveWebViewerRecords.findBy, element.btnSaveWebViewerRecords.value);
        this.btnNewsreelRecordsEdit      = super.findLocator(element.btnNewsreelRecordsEdit.findBy, element.btnNewsreelRecordsEdit.value);
        this.btnNewsreelRecordsDelete    = super.findLocators(element.btnNewsreelRecordsDelete.findBy, element.btnNewsreelRecordsDelete.value);
        this.btnNewsreelRecordsDeleteConfirm = super.findLocators(element.btnNewsreelRecordsDeleteConfirm.findBy, element.btnNewsreelRecordsDeleteConfirm.value);
        this.btnNewsreelPaginations      = super.findLocators(element.btnNewsreelPaginations.findBy, element.btnNewsreelPaginations.value);
    }

    public step_adding_new_newsreel_using_adding_icon(): void{
        this.Helper_Waits.waitForElementClickable(this.btnNewsreelAddIcon,this.high);
        new Button(this.btnNewsreelAddIcon).click();
    }

    public step_set_newsreel_information_and_related_attachment_details(title: string, summary: string): void {
        new TextField(this.txtFldNewsreelHeadline).enterText(title);
        console.log('||||||||||||||||||||||||| ********* '+summary);
        new TextField(this.txtFldNewsreelSummary).enterText(summary);
        this.action_upload_cover_photo('other-1.jpg');
        this.action_upload_suppliment_files('pdf');
        this.action_upload_suppliment_files('word');
        this.action_upload_suppliment_files('excel');
        this.action_upload_suppliment_files('text');
    }

    public step_increase_delivery_scope_in_organization(): void{
        this.action_increase_r_and_d_type_scope('Finance/IT', 'VP', 'Dev');
        this.action_increase_r_and_d_type_scope('Operations', 'VP', 'QA');
        this.action_increase_r_and_d_type_scope('Commercial', 'MegaFilters', 'All Team');
        this.action_increase_r_and_d_type_scope('Corp. Strategy', 'VP', 'QA');
        this.action_increase_r_and_d_type_scope('HR/Legal/E&C', 'VP', 'QA');
    }

    public step_add_newsreel_story(): void{
        new Button(this.btnNewsreelAddStory).click();
    }

    public check_And_validate_successful_newsreel_adding_message(msg: string): void{
        var newsOk : any = element.all(by.xpath("//div[@ng-bind-html='message.text']"));
        this.Helper_Waits.waitForElementClickable(newsOk,this.high);
        this.Helper_Actions.checkTextContentFromList(newsOk,msg);
    }

    public check_and_validate_current_pagination_count(): void{
        this.Helper_Actions.findNoOfElementAndVerify(this.btnNewsreelPaginations,'Pagination');
    }

    public check_and_validate_created_newsreel_view_and_save_record(title: string, summary: string): void{
        var newsTitle : any = element.all(by.xpath("//h4 [contains(text(),'"+title+"')]"));
        var newsSummary : any = element.all(by.xpath("//p [contains(text(),'"+summary+"')]"));
        this.Helper_Waits.waitForElementClickable(newsTitle, this.high);
        this.Helper_Assertion.expectToEqual(newsTitle,title);
        this.Helper_Assertion.expectToEqual(newsSummary,summary);
    }

    public step_save_recently_created_newsreel_record(): void{
        new Button(this.btnSaveWebViewerRecords).click();this.Helper_Waits.waitForAngular();
    }

    public step_delete_newsreel_record_from_widget(): void{
        this.Helper_Waits.waitForElementClickable(this.btnNewsreelRecordsDelete, this.high);
        new Button(this.btnNewsreelRecordsDelete).click();
        new Button(this.btnNewsreelRecordsDeleteConfirm).click();
    }

    public step_edit_existing_newsreel_record_and_save_record(title: string, summary: string): void{
        this.Helper_Waits.waitForElementClickable(this.btnNewsreelPaginationList,this.high);
        console.log('||||||||||||||||||||||||| ********* '+title);
        console.log('||||||||||||||||||||||||| ********* '+summary);
        browser.executeScript("arguments[0].click()",this.btnNewsreelRecordsEdit);
        new TextField(this.txtFldNewsreelHeadline).enterText(title);
        new TextField(this.txtFldNewsreelSummary).enterText(summary);
        this.action_upload_cover_photo('other-2.jpg');
        new Button(this.btnNewsreelAddStory).click();
    }







    /*******************************************************************************************************************
     **************************************** Scenarios Related Actions ************************************************
     *******************************************************************************************************************/

    private action_upload_cover_photo(image:string): void{
        this.findLocators("id","fileInput").sendKeys(this.action_generate_file_cabin_location(image));
        this.Helper_Waits.waitForElementClickable(this.btnNewsreelBrowseEditClose, this.medium);
        new Button(this.btnNewsreelBrowseEditClose).click();this.Helper_Waits.waitForElementClickable(this.txtFldNewsreelHeadline,this.medium);
    }

    private action_upload_suppliment_files(type: string): string{
        var absolutePath: string;
        var locator = this.findLocators("id","supplementFileInput");
        if(type === 'word'){
            absolutePath = this.action_generate_file_cabin_location('word-file.docx');
            locator.sendKeys(absolutePath);this.Helper_Waits.waitFor(this.medium);
        }else if(type === 'pdf'){
            absolutePath = this.action_generate_file_cabin_location('pdf-file.pdf');
            locator.sendKeys(absolutePath);this.Helper_Waits.waitFor(this.medium);
        }else if(type === 'excel'){
            absolutePath = this.action_generate_file_cabin_location('data-file.csv');
            locator.sendKeys(absolutePath);this.Helper_Waits.waitFor(this.medium);
        }else{
            absolutePath = this.action_generate_file_cabin_location('test-file');
            locator.sendKeys(absolutePath);this.Helper_Waits.waitFor(this.medium);
        }
        return absolutePath;
    }

    private action_generate_file_cabin_location(file: string): string{
        var absolutePath = path.join(__dirname,'..\\..\\dash-e2e-tests\\resources\\files-cabin\\test-files\\'+file);
        absolutePath = absolutePath.replace('typeScript\\','');
        return absolutePath;
    }

    private action_increase_r_and_d_type_scope(division: string, org: string, team: string): void{
        this.Helper_Waits.waitForElementClickable(this.ddlDivisionOption,this.medium);
        this.Helper_Actions.selectOptionByVisibleText(this.ddlDivisionOption,division);
        this.Helper_Actions.selectOptionByVisibleText(this.ddlOrganizationOption,org);
        if(team !== 'SKIP') {
            this.Helper_Waits.waitForElementClickable(this.ddlTeamOption,this.medium);
            this.Helper_Actions.selectOptionByVisibleText(this.ddlTeamOption, team);
        }
        this.Helper_Waits.waitForElementClickable(this.btnNewsreelAddScope, this.medium);
        new Button(this.btnNewsreelAddScope).click();
    }

}