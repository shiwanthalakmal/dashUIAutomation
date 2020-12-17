import {PageBase, TextField, Button, Factory, ConfigRoute} from "../class-loader";
import Elements from "../../dash-e2e-tests/resources/elements/element-loader.json";
import {DashHeaderModule} from "../module-objects/DashHeaderModule";
import {DashDashboardPage} from "./DashDashboardPage";
import {DashWebViewerModule} from "../module-objects/DashWebViewerModule";
import {DashFileShareModule} from "../module-objects/DashFileShareModule";
import {DashNewsreelModule} from "../module-objects/DashNewsreelModule";

const log = Factory.getLogger("Page.DashDashboardProfilePage");

export class DashDashboardProfilePage extends PageBase {

    private lblDashProfileTitle     : any;
    private btnWidgetRadOnly        : any;
    private btnWidgetEdit           : any;
    private btnWidgetAddApp         : any;
    private btnWidgetAddChart       : any;
    private btnWidgetPanelTabPIKM   : any;
    private btnWidgetPanelTabDashApp: any;
    private btnWidgetPanelTabBusiness: any;
    private btnWidgetPanelTabAbbvie : any;
    private lblWidgetTitle          : any;

    private dashHeaderModule        : any;
    private dashWebViewerModule     : any;
    private dashFileShareModule     : any;
    private dashNewsreelModule      : any;

    constructor() {
        super();
        const element = Elements.DashDashboardProfilePage;
        this.dashHeaderModule = new DashHeaderModule();
        this.dashWebViewerModule = new DashWebViewerModule();
        this.dashFileShareModule = new DashFileShareModule;
        this.dashNewsreelModule = new DashNewsreelModule();
        this.lblDashProfileTitle        = super.findLocators(element.lblDashProfileTitle.findBy, element.lblDashProfileTitle.value);
        this.btnWidgetRadOnly           = super.findLocators(element.btnWidgetRadOnly.findBy, element.btnWidgetRadOnly.value);
        this.btnWidgetEdit              = super.findLocators(element.btnWidgetEdit.findBy, element.btnWidgetEdit.value);
        this.btnWidgetAddApp            = super.findLocators(element.btnWidgetAddApp.findBy, element.btnWidgetAddApp.value);
        this.btnWidgetAddChart          = super.findLocators(element.btnWidgetAddChart.findBy, element.btnWidgetAddChart.value);
        this.btnWidgetPanelTabPIKM      = super.findLocators(element.btnWidgetPanelTabPIKM.findBy, element.btnWidgetPanelTabPIKM.value);
        this.btnWidgetPanelTabDashApp   = super.findLocators(element.btnWidgetPanelTabDashApp.findBy, element.btnWidgetPanelTabDashApp.value);
        this.btnWidgetPanelTabBusiness  = super.findLocators(element.btnWidgetPanelTabBusiness.findBy, element.btnWidgetPanelTabBusiness.value);
        this.btnWidgetPanelTabAbbvie    = super.findLocators(element.btnWidgetPanelTabAbbvie.findBy, element.btnWidgetPanelTabAbbvie.value);
        this.lblWidgetTitle             = super.findLocators(element.lblWidgetTitle.findBy, element.lblWidgetTitle.value);
    }

    /**
     * Validate: Verify newly crested dashboard profile page tile
     * @param title
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_dashboard_profile_title(title: string): DashDashboardProfilePage{
        this.Helper_Assertion.expectToEqual(this.lblDashProfileTitle, title);
        log.info("Validate: Verify newly created dashboard title name [:check_and_validate_dashboard_profile_title:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Move back to dashboard landing page vis header dashboard tab
     * @returns {DashDashboardPage}
     */
    public step_move_to_landing_page_by_click_header_dashboard_tab(): DashDashboardPage{
        this.dashHeaderModule.action_click_on_the_dashboard_home_tab();
        log.info("Step: Move back to dashboard landing page [:step_move_to_landing_page_by_click_header_dashboard_tab:]");
        return new DashDashboardPage();
    }

    /**
     * Step: Click on the profile edit button
     * @returns {DashDashboardProfilePage}
     */
    public step_click_on_profile_edit_setting(): DashDashboardProfilePage{
        new Button(this.btnWidgetEdit).click();this.Helper_Waits.waitForAngular();
        log.info("Step: Click on the profile edit setting [:step_click_on_profile_edit_setting:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Click on the profile read-only button
     * @returns {DashDashboardProfilePage}
     */
    public step_click_on_profile_read_only_setting(): DashDashboardProfilePage{
        new Button(this.btnWidgetRadOnly).click();
        log.info("Step: Click on the profile read only setting [:step_click_on_profile_read_only_setting:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Adding given pikm type widget app
     * @param option
     * @returns {DashDashboardProfilePage}
     */
    public step_adding_given_pikm_widget_using_add_app(option: string): DashDashboardProfilePage{
        new Button(this.btnWidgetAddApp).click();
        new Button(this.btnWidgetPanelTabPIKM).click();
        let panelOption = this.findLocators("xpath","//*[contains(text(),'"+option+"')]");
        new Button(panelOption).click();this.Helper_Waits.waitFor(this.low);
        log.info("Step: Adding given pikm type widget app  [:step_adding_given_pikm_widget_add_app:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Adding given dash-app type widget app
     * @param option
     * @returns {DashDashboardProfilePage}
     */
    public step_adding_given_dashapp_widget_using_add_app(option: string): DashDashboardProfilePage{
        this.Helper_Waits.waitForElementClickable(this.btnWidgetAddApp, this.high);
        new Button(this.btnWidgetAddApp).click();
        new Button(this.btnWidgetPanelTabDashApp).click();
        let panelOption = this.findLocators("xpath","//*[contains(text(),'"+option+"')]");
        this.Helper_Waits.waitForElementClickable(panelOption, this.medium);
        new Button(panelOption).click();
        log.info("Step: Adding given dash-app type widget app  [:step_adding_given_dashapp_widget_using_add_app:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Adding given business-app type widget app
     * @param option
     * @returns {DashDashboardProfilePage}
     */
    public step_adding_given_businessapp_widget_using_add_app(option: string): DashDashboardProfilePage{
        new Button(this.btnWidgetAddApp).click();
        new Button(this.btnWidgetPanelTabDashApp).click();
        let panelOption = this.findLocators("xpath","//*[contains(text(),'"+option+"')]");
        new Button(panelOption).click();this.Helper_Waits.waitFor(this.low);
        log.info("Step: Adding given business-app type widget app  [:step_adding_given_businessapp_widget_using_add_app:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Adding given abbvie-app type widget app
     * @param option
     * @returns {DashDashboardProfilePage}
     */
    public step_adding_given_abbvieapp_widget_using_add_app(option: string): DashDashboardProfilePage{
        new Button(this.btnWidgetAddApp).click();
        new Button(this.btnWidgetPanelTabDashApp).click();
        let panelOption = this.findLocators("xpath","//*[contains(text(),'"+option+"')]");
        new Button(panelOption).click();this.Helper_Waits.waitFor(this.low);
        log.info("Step: Adding given abbvie-app type widget app  [:step_adding_given_abbvieapp_widget_using_add_app:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify recently added widget title
     * @param title
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_recently_added_new_widget_title(title: string): DashDashboardProfilePage{
        this.Helper_Waits.waitForElementDisplayed(this.lblWidgetTitle);
        this.Helper_Assertion.expectToEqual(this.lblWidgetTitle,title);
        log.info("Validate: Verify recently added widget title [:check_and_validate_recently_added_new_widget_title:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Press adding icon under web-viewer panel
     * @returns {DashDashboardProfilePage}
     */
    public step_press_webviewer_adding_icon(): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_adding_icon_press();
        log.info("Step: press adding icon under web-viewer panel [:step_press_webviewer_adding_icon:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Enter web-viewer site details and test
     * @param site
     * @returns {DashDashboardProfilePage}
     */
    public step_webviewer_set_site_details_and_test(site: string): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_enter_site_url_and_test(site);
        log.info("Step: Enter web-viewer site details and test [:step_webviewer_set_site_details_and_test:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Enter site bookmark details and add as link under web-viewer
     * @param name
     * @returns {DashDashboardProfilePage}
     */
    public step_webviewer_set_site_bookmark_and_add_as_link_and_save_widget(name: string): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_set_bookmark_name_and_add_as_link_and_save(name);
        log.info("Step: Enter web-viewer site bookmark & press add as link button [:step_webviewer_set_site_bookmark_and_add_as_link:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Without entering site bookmark details and add as link under web-viewer
     * @param name
     * @returns {DashDashboardProfilePage}
     */
    public step_webviewer_without_set_site_bookmark_and_add_as_link_and_save_widget(): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_without_bookmark_name_and_add_as_link_and_save();
        log.info("Step: Without entering web-viewer site bookmark & press add as link button [:step_webviewer_without_set_site_bookmark_and_add_as_link_and_save_widget:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify newly created site link under web-widget panel
     * @param name
     * @param url
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_newly_created_site_under_webviewer_panel(name: string, url: string): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_choose_websites_under_webviewer_and_verify(name, url);
        log.info("Validate: Verify newly created site record under web-viewer panel and its url navigation [:check_and_validate_newly_created_site_under_webviewer_panel:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify newly created media link under web-widget panel
     * @param name
     * @param url
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_newly_created_media_site_under_webviewer_panel(name: string): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_choose_media_websites_under_webviewer_and_verify(name);
        log.info("Validate: Verify newly created site record under web-viewer panel and its url navigation [:check_and_validate_newly_created_media_site_under_webviewer_panel:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify link site url test completed tool-tip
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_link_site_test_completed_tooltip(): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_url_test_completed_tooltip_verification('link');
        log.info("Validate: Verify link site url test completed tool-tip [:check_and_validate_list_site_test_completed_tooltip:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify web site url test completed tool-tip
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_web_site_test_completed_tooltip(): DashDashboardProfilePage{
        this.dashWebViewerModule.action_webviewer_url_test_completed_tooltip_verification('web');
        log.info("Validate: Verify web site url test completed tool-tip [:check_and_validate_web_site_test_completed_tooltip:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify newly created site record browser url in new tab
     * @param type [site, link]
     * @param url
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_created_webviewer_site_in_new_tab(type: string,url: string): DashDashboardProfilePage{
        if(type === 'web') {
            this.dashWebViewerModule.action_webviewer_verify_site_browser_url(url);
        }else{
            this.dashWebViewerModule.action_webviewer_verify_site_browser_url(url);
        }
        log.info("Validate: Verify newly created site record browser url in new tab [:check_and_validate_created_webviewer_site_in_new_tab:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Make agree with file-sharing policy
     * @returns {DashDashboardProfilePage}
     */
    public step_fileshare_widget_policy_make_agree(): DashDashboardProfilePage{
        this.dashFileShareModule.step_make_agree_file_sharing_widget();
        log.info("Step: Make agree with file-sharing policy [:step_fileshare_widget_policy_make_agree:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Upload file using file-picker under file-share widget
     * @returns {DashDashboardProfilePage}
     */
    public step_fileshare_upload_using_filepicker_and_save_widget(): DashDashboardProfilePage{
        this.dashFileShareModule.step_brows_file_using_filepicker_and_save_widget();
        log.info("Step: Upload file using file-picker under file-share widget [:step_fileshare_upload_using_filepicker_and_save_widget:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Make download given file under file-share widget
     * @returns {DashDashboardProfilePage}
     */
    public step_fileshare_download_given_record( ): DashDashboardProfilePage{
        this.dashFileShareModule.step_download_given_file_using_download_icon();
        log.info("Step: c [:step_fileshare_download_given_record:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Make delete given file under file-share widget
     * @returns {DashDashboardProfilePage}
     */
    public step_fileshare_delete_given_record_under_widget(): DashDashboardProfilePage{
        this.dashFileShareModule.step_delete_given_fileshare_record();
        log.info("Step: Make delete given file under file-share widget [:step_fileshare_delete_given_record_under_widget:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Make save full dash profile page with file-share widget
     * @returns {DashDashboardProfilePage}
     */
    public step_fileshare_global_save_with_dash_profile(): DashDashboardProfilePage{
        this.dashFileShareModule.step_save_fileshare_widget_globally();
        log.info("Step: Make save full dash profile page with file-share widget [:step_fileshare_global_save_with_dash_profile:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Perform new newsreel using adding icon
     */
    public step_newsreel_perform_new_news_using_adding_icon(): DashDashboardProfilePage{
        this.dashNewsreelModule.step_adding_new_newsreel_using_adding_icon();
        log.info("Step: Perform new newsreel using adding icon [:step_newsreel_perform_new_news_using_adding_icon:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Set newsreel information and its related files attachments
     * @param title
     * @param summary
     * @returns {DashDashboardProfilePage}
     */
    public step_newsreel_set_newsreel_information_and_related_attachment_details(title: string, summary: string): DashDashboardProfilePage{
        this.dashNewsreelModule.step_set_newsreel_information_and_related_attachment_details(title, summary);
        log.info("Step: Set newsreel information and its related files attachments [:step_newsreel_set_newsreel_information_and_related_attachment_details:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Make increase delivery scope in organization
     * @returns {DashDashboardProfilePage}
     */
    public step_increase_delivery_scope_in_organization(): DashDashboardProfilePage{
        this.dashNewsreelModule.step_increase_delivery_scope_in_organization();
        log.info("Step: Make increase delivery scope in organization [:step_increase_delivery_scope_in_organization:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Submit newsreel record as a story
     * @returns {DashDashboardProfilePage}
     */
    public step_add_newsreel_story_record(): DashDashboardProfilePage{
        this.dashNewsreelModule.step_add_newsreel_story();
        log.info("Step: Submit newsreel record as a story");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify successful newsreel creation overlay
     * @param msg
     * @returns {DashDashboardProfilePage}
     */
    public check_And_validate_successful_newsreel_adding_message(msg: string): DashDashboardProfilePage{
        this.dashNewsreelModule.check_And_validate_successful_newsreel_adding_message(msg);
        log.info("Validate: Verify newsreel adding successfully adding message");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify amount of the pagination icons
     * @param count
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_current_pagination_count(): DashDashboardProfilePage{
        this.dashNewsreelModule.check_and_validate_current_pagination_count();
        log.info("Validate: Verify newsreel pagination count");
        return new DashDashboardProfilePage();
    }

    /**
     * Validate: Verify created newsreel record availability
     * @param title
     * @param summary
     * @returns {DashDashboardProfilePage}
     */
    public check_and_validate_created_newsreel_record_availability_and_save_record(title: string, summary: string): DashDashboardProfilePage{
        this.dashNewsreelModule.check_and_validate_created_newsreel_view_and_save_record(title, summary);
        log.info("Validate: Verify created newsreel record availability [:check_and_validate_created_newsreel_record_availability:]");
        return new DashDashboardProfilePage();
    }

    public step_save_recently_created_newsreel_record(): DashDashboardProfilePage{
        this.dashNewsreelModule.step_save_recently_created_newsreel_record();
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Update existing newsreel record and save it
     * @returns {DashDashboardProfilePage}
     */
    public step_update_existing_newsreel_record_and_save(title: string, summary: string) : DashDashboardProfilePage{
        this.dashNewsreelModule.step_edit_existing_newsreel_record_and_save_record(title,summary);
        log.info("Step: Update existing newsreel record and save it [:step_update_existing_newsreel_record_and_save:]");
        return new DashDashboardProfilePage();
    }

    /**
     * Step: Delete recently added news-reel from widget
     * @returns {DashDashboardProfilePage}
     */
    public step_delete_recently_created_newsreel_from_widget(): DashDashboardProfilePage{
        this.dashNewsreelModule.step_delete_newsreel_record_from_widget();
        log.info("Step: Delete recently added news-reel from widget [:step_delete_recently_created_newsreel_from_widget:]");
        return new DashDashboardProfilePage();
    }
}