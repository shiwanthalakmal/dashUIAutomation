import {Component} from "../../../dash-e2e-pageobjects/aspect-objects/Component";
let random = require("random-js")();

import {Navigate} from "../../../dash-e2e-pageobjects/aspect-objects/Navigate";
import {DashDashboardProfilePage} from "../../../dash-e2e-pageobjects/page-objects/DashDashboardProfilePage";


describe('[DASH: CREATE FLOWS]', function() {

    let dash_value :any;

    using("Create a new dashboard with basic configurations using data-driven approach and verify it",
        [
            ['VP', 'Dev'],
            ['VP', 'QA']

        ],
        function (OrgName, GroupName) {
            fit('[DATA]: Create a new dashboard with basic configurations and verify it', () => {
                Navigate.visit('DashDashboardPage').
                check_And_Validate_dash_page_title('Dashboards').
                step_click_on_the_new_team_dashboard_button().
                step_create_basic_dashboard('Dashboard - '+dash_value,'Auto Desc','R&D',OrgName,GroupName).
                check_and_validate_dashboard_profile_title('Dashboard - '+dash_value).
                step_move_to_landing_page_by_click_header_dashboard_tab().
                step_enter_dash_record_under_search_box('Dashboard - '+dash_value).
                check_and_validate_dash_record_under_table('Dashboard - '+dash_value);
            });

        });


    it('TEST[001]: Create a new dashboard with basic configurations and verify it', function() {

        Navigate.visit('DashDashboardPage').
            check_And_Validate_dash_page_title('Dashboards').
            step_click_on_the_new_team_dashboard_button().
            step_create_basic_dashboard('Dashboard - '+dash_value,'Auto Desc','R&D','VP','QA').
            check_and_validate_dashboard_profile_title('Dashboard - '+dash_value).
            step_move_to_landing_page_by_click_header_dashboard_tab().
            step_enter_dash_record_under_search_box('Dashboard - '+dash_value).
            check_and_validate_dash_record_under_table('Dashboard - '+dash_value);
    });

    it('TEST[002]: Create app web-link type web-viewer widgets under basic dash-board - general link site', function() {

        Component.CreateBasicDashboard(dash_value);
            new DashDashboardProfilePage().
            step_click_on_profile_edit_setting().
            step_adding_given_dashapp_widget_using_add_app('Web Viewer').
            check_and_validate_recently_added_new_widget_title('Web Viewer').
            step_press_webviewer_adding_icon().step_webviewer_set_site_details_and_test('http://www.ideaboardz.com/').
            check_and_validate_link_site_test_completed_tooltip().
            step_webviewer_set_site_bookmark_and_add_as_link_and_save_widget('Idea Boardz').
            check_and_validate_newly_created_site_under_webviewer_panel('Idea Boardz','http://www.ideaboardz.com/').
            check_and_validate_created_webviewer_site_in_new_tab('link','http://www.ideaboardz.com/');
    });

    it('TEST[003]: Create app web-site type web-viewer widgets under basic dash-board - general web site', function() {

        Component.CreateBasicDashboard(dash_value);
            new DashDashboardProfilePage().
            step_click_on_profile_edit_setting().
            step_adding_given_dashapp_widget_using_add_app('Web Viewer').
            check_and_validate_recently_added_new_widget_title('Web Viewer').
            step_press_webviewer_adding_icon().step_webviewer_set_site_details_and_test('http://www.espn.in/?src=com').
            check_and_validate_web_site_test_completed_tooltip().
            step_webviewer_without_set_site_bookmark_and_add_as_link_and_save_widget().
            check_and_validate_newly_created_media_site_under_webviewer_panel('ESPN: The Worldwide Leader in Sports').
            check_and_validate_created_webviewer_site_in_new_tab('web','http://www.espn.in/?src=com');
    });

    it('TEST[004]: Create file-share widgets and record adding, downloading and deletion flows under basic dash-board - file sharing using file-picker ', function() {

        Component.CreateBasicDashboard(dash_value);
        new DashDashboardProfilePage().
        step_click_on_profile_edit_setting().
        step_adding_given_dashapp_widget_using_add_app('File Share').
        check_and_validate_recently_added_new_widget_title('File Share').
        step_fileshare_widget_policy_make_agree().step_fileshare_upload_using_filepicker_and_save_widget().
        step_fileshare_download_given_record().step_fileshare_delete_given_record_under_widget().step_fileshare_global_save_with_dash_profile();
    });

    it('TEST[005]: Create news-reel widgets and verifying, under basic dash-board', function() {

        Component.CreateBasicDashboard(dash_value);
        new DashDashboardProfilePage().
        step_click_on_profile_edit_setting().
        step_adding_given_dashapp_widget_using_add_app('Newsreel').
        check_and_validate_recently_added_new_widget_title('Newsreel').
        step_newsreel_perform_new_news_using_adding_icon().
        step_newsreel_set_newsreel_information_and_related_attachment_details('Auto Newsreel - '+dash_value, 'Auto Newsreel Summary !').
        check_and_validate_current_pagination_count().
        step_increase_delivery_scope_in_organization().step_add_newsreel_story_record().
        check_and_validate_created_newsreel_record_availability_and_save_record('Auto Newsreel - '+dash_value, 'Auto Newsreel Summary !').
        check_And_validate_successful_newsreel_adding_message('Story added successfully.').
        check_and_validate_current_pagination_count().step_save_recently_created_newsreel_record();
    });

    fit('TEST[006]: Create news-reel widgets, editing flows verifying under basic dash-board', function() {

        Component.CreateBasicDashboard(dash_value);
        new DashDashboardProfilePage().
        step_click_on_profile_edit_setting().
        step_adding_given_dashapp_widget_using_add_app('Newsreel').
        check_and_validate_recently_added_new_widget_title('Newsreel').step_newsreel_perform_new_news_using_adding_icon().
        step_newsreel_set_newsreel_information_and_related_attachment_details('Auto Newsreel - '+dash_value, 'Auto Newsreel Summary !').
        step_increase_delivery_scope_in_organization().step_add_newsreel_story_record().
        check_and_validate_created_newsreel_record_availability_and_save_record('Auto Newsreel - '+dash_value, 'Auto Newsreel Summary !').
        step_save_recently_created_newsreel_record().step_update_existing_newsreel_record_and_save('Update Newsreel - '+dash_value, 'Update Summary !');
    });










    function using(name, values, func){
        for (var i = 0, count = values.length; i < count; i++) {
            if (Object.prototype.toString.call(values[i]) !== '[object Array]') {
                values[i] = [values[i]];
            }
            func.apply(this, values[i]);
        }
    }

    beforeEach(() => {
        dash_value = random.integer(100000, 999999);
        console.log('');
        console.log('');
        console.log('');
        console.log('************************************************************************************************ ');
    });

    afterAll(() => {
        console.log('******************************** [DASH Test Automation: Suite] - COMPLETED ! ************************************');
    });


});

