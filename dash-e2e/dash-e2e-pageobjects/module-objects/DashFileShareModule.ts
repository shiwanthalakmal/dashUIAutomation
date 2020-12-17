import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../dash-e2e-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
var fs = require('fs');
var path = require('path');
import {browser, protractor} from "protractor";
import {TextField} from "../../../ui-core/ui-elements/TextField";

const log = Factory.getLogger("Module.DashFileShareModule");

export class DashFileShareModule extends PageBase {

    private brnFileShareAgree           : any;
    private brnFileShareUploadIcon      : any;
    private btnSaveFileShareRecords     : any;
    private btnFileShareDownload        : any;
    private btnFileShareDeleteFile      : any;
    private btnFileShareDeleteConfirm   : any;
    private btnFileShareTableRecord     : any;

    constructor() {
        super();
        const element = Elements.DashFileShareModule;
        this.brnFileShareAgree          = super.findLocators(element.brnFileShareAgree.findBy, element.brnFileShareAgree.value);
        this.brnFileShareUploadIcon     = super.findLocators(element.brnFileShareUploadIcon.findBy, element.brnFileShareUploadIcon.value);
        this.btnSaveFileShareRecords    = super.findLocators(element.btnSaveFileShareRecords.findBy, element.btnSaveFileShareRecords.value);
        this.btnFileShareDownload       = super.findLocators(element.btnFileShareDownload.findBy, element.btnFileShareDownload.value);
        this.btnFileShareDeleteFile     = super.findLocators(element.btnFileShareDeleteFile.findBy, element.btnFileShareDeleteFile.value);
        this.btnFileShareDeleteConfirm  = super.findLocators(element.btnFileShareDeleteConfirm.findBy, element.btnFileShareDeleteConfirm.value);
        this.btnFileShareTableRecord    = super.findLocators(element.btnFileShareTableRecord.findBy, element.btnFileShareTableRecord.value);
    }

    public step_make_agree_file_sharing_widget(): void{
        new Button(this.brnFileShareAgree).click();
    }

    public step_brows_file_using_filepicker_and_save_widget(): void{
        var absolutePath = path.join(__dirname,'..\\..\\dash-e2e-tests\\resources\\files-cabin\\test-files\\image-file.jpg');
        absolutePath = absolutePath.replace('typeScript\\','');
        this.Helper_Waits.waitForElementClickable(this.brnFileShareUploadIcon,this.medium);
        new TextField(this.brnFileShareUploadIcon).enterText(absolutePath);
        this.Helper_Waits.waitForElementClickable(this.btnFileShareTableRecord, this.high);
        new Button(this.btnSaveFileShareRecords).click();this.Helper_Waits.waitForAngular();
        this.Helper_Waits.waitForElementClickable(this.btnFileShareTableRecord, this.medium);
    }

    public step_download_given_file_using_download_icon(): void{
        new Button(this.btnFileShareDownload).click();
    }

    public step_delete_given_fileshare_record(): void{
        new Button(this.btnFileShareDeleteFile).click();
        this.Helper_Waits.waitForElementClickable(this.btnFileShareDeleteConfirm,this.medium);
        new Button(this.btnFileShareDeleteConfirm).click();
    }

    public step_save_fileshare_widget_globally(): void{
        new Button(this.btnSaveFileShareRecords).click();
        this.Helper_Waits.waitForAngular();
    }

}