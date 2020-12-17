import {PageBase, TextField, Button, Factory, ConfigRoute} from "../class-loader";
import Elements from "../../dash-e2e-tests/resources/elements/element-loader.json";
import {DashDashboardProfilePage} from "./DashDashboardProfilePage";

const log = Factory.getLogger("Page.DashCreateNewDashboardPage");

export class DashCreateNewDashboardPage extends PageBase {

    private txtFldDashboardName         : any;
    private txtFldDashboardDescription  : any;
    private radioBtnDivisions           : any;
    private txtFldOrgName               : any;
    private txtFldOrgGroupName          : any;
    private btnConfirmNewDashboard      : any;
    private lblConfirmationMsg          : any;

    constructor() {
        super();
        const element = Elements.DashCreateNewDashboardPage;
        this.txtFldDashboardName        = super.findLocators(element.txtFldDashboardName.findBy, element.txtFldDashboardName.value);
        this.txtFldDashboardDescription = super.findLocators(element.txtFldDashboardDescription.findBy, element.txtFldDashboardDescription.value);
        this.radioBtnDivisions          = super.findLocators(element.radioBtnDivisions.findBy, element.radioBtnDivisions.value);
        this.txtFldOrgName              = super.findLocators(element.txtFldOrgName.findBy, element.txtFldOrgName.value);
        this.txtFldOrgGroupName         = super.findLocators(element.txtFldOrgGroupName.findBy, element.txtFldOrgGroupName.value);
        this.btnConfirmNewDashboard     = super.findLocators(element.btnConfirmNewDashboard.findBy, element.btnConfirmNewDashboard.value);
        this.lblConfirmationMsg         = super.findLocators(element.lblConfirmationMsg.findBy, element.lblConfirmationMsg.value);
    }

    /**
     * Step: Fill basic details for dashboard creation flow required fields and submit
     * @param name
     * @param dscr
     * @param division
     * @param orgName
     * @param teamName
     * @returns {DashDashboardProfilePage}
     */
    public step_create_basic_dashboard(name: string, dscr: string, division: string, orgName: string, teamName: string): DashDashboardProfilePage{
        new TextField(this.txtFldDashboardName).enterText(name);
        new TextField(this.txtFldDashboardDescription).enterText(dscr);
        this.actionChooseDivisions(division);
        new TextField(this.txtFldOrgName).enterTextAndSubmit(orgName);
        new TextField(this.txtFldOrgGroupName).enterTextAndSubmit(teamName);
        new Button(this.btnConfirmNewDashboard).click();
        return new DashDashboardProfilePage();
    }


    /*******************************************************************************************************************
     **************************************** Scenarios Related Actions ************************************************
     *******************************************************************************************************************/
    private actionChooseDivisions(div: string): void{
        if(div === 'R&D'){
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,1);
        }else if(div === 'Pperations'){
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,2);
        }else if(div === 'Finance'){
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,3);
        }else if(div === 'Commercial'){
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,4);
        }else if(div === 'Strategy'){
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,5);
        }else {
            this.Helper_Actions.findSpecificElementAndClick(this.radioBtnDivisions,6);
        }
    }



}