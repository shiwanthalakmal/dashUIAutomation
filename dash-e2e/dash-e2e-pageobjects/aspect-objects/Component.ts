import {Navigate} from "./Navigate";
export class Component {

    public static CreateBasicDashboard(dash_value: number): void{
        Navigate.visit('DashDashboardPage')
            .check_And_Validate_dash_page_title('Dashboards')
            .step_click_on_the_new_team_dashboard_button()
            .step_create_basic_dashboard('Dashboard - '+dash_value,'Auto Desc','R&D','VP','QA')
            .check_and_validate_dashboard_profile_title('Dashboard - '+dash_value);
        console.log("|||||||||||||||||||| ********* Created Dashboard : Dashboard - "+dash_value+" ************ ||||||||||||||||")
    }

    public static AddNewWebSiteUnderWebViewer(): void{}
}