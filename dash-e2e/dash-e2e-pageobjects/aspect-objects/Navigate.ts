import {DashDashboardPage} from "../page-objects/DashDashboardPage";
export class Navigate {

    public static visit(page: string): any{
        switch (page){
            case "DashDashboardPage":
                return <DashDashboardPage> new DashDashboardPage().get();

            default:
        }
    }
}