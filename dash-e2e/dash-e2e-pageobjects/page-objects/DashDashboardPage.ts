import {PageBase, TextField, Button, Factory, ConfigRoute} from "../class-loader";
import Elements from "../../dash-e2e-tests/resources/elements/element-loader.json";
import {Link} from "../../../ui-core/ui-elements/Link";
import {DashCreateNewDashboardPage} from "./DashCreateNewDashboardPage";
import {browser, protractor} from "protractor";

const log = Factory.getLogger("Page.DashDashboardPage");

export class DashDashboardPage extends PageBase{

    private lblDashPageTitle        : any;
    private lnkDashMyDashboard      : any;
    private btnDashNewTeamDashboard : any;
    private txtDashSearchRecord     : any;

    constructor(){
        super();
        const element = Elements.DashDashboardPage;
        this.lblDashPageTitle       = super.findLocators(element.lblDashPageTitle.findBy,element.lblDashPageTitle.value);
        this.lnkDashMyDashboard     = super.findLocators(element.lnkDashMyDashboard.findBy,element.lnkDashMyDashboard.value);
        this.btnDashNewTeamDashboard= super.findLocators(element.btnDashNewTeamDashboard.findBy,element.btnDashNewTeamDashboard.value);
        this.txtDashSearchRecord    = super.findLocators(element.txtDashSearchRecord.findBy,element.txtDashSearchRecord.value);
    }

    /**
     * Get: load dash-dashboard base url
     * @returns {DashDashboardPage}
     */
    public get(): DashDashboardPage{
        ConfigRoute.visit_page('http://op.triton-tek.com/test/');
        this.action_skip_loading_wait_loader();
        log.info("Step: navigate to http://op.triton-tek.com/test/ [:get:]");
        return new DashDashboardPage();
    }

    /**
     * Validate: verify dash-board page title
     * @param title
     * @returns {DashDashboardPage}
     */
    public check_And_Validate_dash_page_title(title: string): DashDashboardPage{
        this.Helper_Assertion.expectToEqual(this.lblDashPageTitle,title);
        log.info("Validate: Verify dash page tile [:check_And_Validate_dash_page_title:]");
        return new DashDashboardPage();
    }

    /**
     * Step: Click on the my-dashboard link
     * @returns {DashDashboardPage}
     */
    public step_click_on_the_my_dashboard_link(): DashDashboardPage{
        new Link(this.lnkDashMyDashboard).click();
        log.info("Step: Click on the my dashboard link [:step_click_on_the_my_dashboard_link:]");
        return new DashDashboardPage();
    }

    /**
     * Step: Click on the new team dashboard button
     * @returns {DashDashboardPage}
     */
    public step_click_on_the_new_team_dashboard_button(): DashCreateNewDashboardPage{
        new Button(this.btnDashNewTeamDashboard).click();
        log.info("Step: Click on the new dashboard button [:step_click_on_the_new_team_dashboard_button:]");
        return new DashCreateNewDashboardPage();
    }

    /**
     * Step: Enter search record under search box
     * @param record
     * @returns {DashDashboardPage}
     */
    public step_enter_dash_record_under_search_box(record: string): DashDashboardPage{
        this.Helper_Waits.waitForAngular();this.action_skip_loading_wait_loader();
        this.Helper_Waits.waitForElementDisplayed(this.txtDashSearchRecord);
        new TextField(this.txtDashSearchRecord).enterTextAndSubmit(record);this.action_skip_loading_wait_loader();
        log.info("Step: Enter search string into search box");
        return new DashDashboardPage();
    }

    /**
     * Validate: Verify created dashboard record availability
     * @param record
     * @returns {DashDashboardPage}
     */
    public check_and_validate_dash_record_under_table(record: string): DashDashboardPage{
        let tblRows = this.findLocators("xpath","//*[@ng-repeat='(colRenderIndex, col) in colContainer.renderedColumns track by col.uid']");
        this.Helper_Actions.checkTextContentFromList(tblRows, record);
        log.info("Validate: Verify dashboard record name under table [:check_and_validate_dash_record_under_table:]");
        return new DashDashboardPage();
    }


    /**
     * ********************************* Supporting Actions ************************************************************
     */


    /**
     * Action: Wait until loading stage completed
     */
    private action_skip_loading_wait_loader(){
        let loader = this.findLocators("xpath","//*[@ng-show='loading']");
        this.Helper_Waits.waitForElementVisible(loader,this.high);
        this.Helper_Waits.waitForElementInvisible(loader,this.high);
    }

    /**
     * Action: Wait until initial page load
     */
    private action_skip_initial_page_loading_wait_loader(){
        let loader = this.findLocators("xpath","//*[@ng-show='loading']");
        this.Helper_Waits.waitForElementVisible(loader,this.high);
        this.Helper_Waits.waitForElementInvisible(loader,this.high);
    }


}