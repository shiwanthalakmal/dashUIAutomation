export default
{
  "DashDashboardPage": {
    "lblDashPageTitle": {findBy: "xpath", value: "//h1[contains(text(),'Dashboards')]"},
    "lnkDashMyDashboard": {findBy: "xpath", value: "//*[contains(text(),'My Dashboard')]"},
    "btnDashNewTeamDashboard": {findBy: "xpath", value: "//*[contains(text(),'New Team Dashboard')]"},
    "txtDashSearchRecord": {findBy: "model", value: "state.search"}
  },

  "DashCreateNewDashboardPage": {
    "txtFldDashboardName": {findBy: "css", value: "#dashName"},
    "txtFldDashboardDescription": {findBy: "model", value: "metaData.dashboardDescription"},
    "radioBtnDivisions": {findBy: "model", value: "metaData.divisionType"},
    "txtFldOrgName": {findBy: "xpath", value: "(//*[@id='sponsorOrg'])[1]"},
    "txtFldOrgGroupName": {findBy: "xpath", value: "(//*[@id='teamName'])[1]"},
    "btnConfirmNewDashboard": {findBy: "css", value: "button[ng-click='next()']"},
    "lblConfirmationMsg": {findBy: "xpath", value: "//*[contains(text(),'Dashboard - 003')]"}
  },

  "DashDashboardProfilePage": {
    "lblDashProfileTitle": {findBy: "binding", value: "project.name"},
    "btnWidgetRadOnly": {findBy: "xpath", value: "//*[contains(text(),'Read Only')]"},
    "btnWidgetEdit": {findBy: "xpath", value: "//*[@ng-if='!state.isNew']//button[1]"},
    "btnWidgetAddApp": {findBy: "xpath", value: "//*[contains(text(),'Add App')]"},
    "btnWidgetAddChart": {findBy: "xpath", value: "//*[contains(text(),'Add Chart')]"},
    "btnWidgetPanelTabPIKM": {findBy: "xpath", value: "//*[contains(text(),'PIKM')]"},
    "btnWidgetPanelTabDashApp": {findBy: "xpath", value: "//*[contains(text(),'Dash Apps')]"},
    "btnWidgetPanelTabBusiness": {findBy: "xpath", value: "//*[contains(text(),'Business Application')]"},
    "btnWidgetPanelTabAbbvie": {findBy: "xpath", value: "//*[contains(text(),'Abbvie Apps')]"},
    "lblWidgetTitle": {findBy: "binding", value: "plot.name"},

  },
}


