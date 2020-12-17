import {Helper, PageBase, Factory} from '../class-loader';
import Elements from '../../dash-e2e-tests/resources/elements/modules-loader.json';
import {Button} from "../../../ui-core/ui-elements/Button";
import {ConfigRoute} from "../../ConfigRoute";

const log = Factory.getLogger("Module.DashHeaderModule");

export class DashHeaderModule extends PageBase{

    private lnkDashLogo          : any;
    private lnkDashHome         : any;
    private lnkDashNotification : any;
    private lnkDashView         : any;
    private lnkDashFullScreen   : any;
    private lnkDashProfileIcon  : any;

    constructor(){
        super();
        const element = Elements.DashHeaderModule;
        this.lnkDashLogo             = super.findLocators(element.lnkDashLogo.findBy,element.lnkDashLogo.value);
        this.lnkDashHome            = super.findLocators(element.lnkDashHome.findBy,element.lnkDashHome.value);
        this.lnkDashNotification    = super.findLocators(element.lnkDashNotification.findBy,element.lnkDashNotification.value);
        this.lnkDashView            = super.findLocators(element.lnkDashView.findBy,element.lnkDashView.value);
        this.lnkDashFullScreen      = super.findLocators(element.lnkDashFullScreen.findBy,element.lnkDashFullScreen.value);
        this.lnkDashProfileIcon     = super.findLocators(element.lnkDashProfileIcon.findBy,element.lnkDashProfileIcon.value);
    }

    public action_click_on_the_dash_logo() : void{

    }

    public action_check_dash_logo_availability() : void{

    }

    public action_click_on_the_dashboard_home_tab() : void{

        ConfigRoute.visit_page('http://op.triton-tek.com/test/');
        this.Helper_Waits.waitFor(2000);
    }

    public action_click_on_the_notification_tab() : void{

    }

    public action_click_on_the_view_switch_tab() : void{

    }

    public action_click_on_the_full_screen_tab() : void{

    }

    public action_click_on_the_profile_tab() : void{

    }
}