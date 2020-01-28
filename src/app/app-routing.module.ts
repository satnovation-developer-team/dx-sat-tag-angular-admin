import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homepage/home/home.component';
import { UsermanagementHomeComponent } from './usermanagement/usermanagement-home/usermanagement-home.component';
import { UsermanagementEditComponent } from './usermanagement/usermanagement-edit/usermanagement-edit.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesSinglePageHomeComponent } from './courses-single-page/courses-single-page-home/courses-single-page-home.component';
import { CoursesSinglePageAddComponent } from './courses-single-page/courses-single-page-add/courses-single-page-add.component';
import { SigninPageComponent } from './authentication/signin-page/signin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruitersHomeComponent } from './recruiters/recruiters-home/recruiters-home.component';
import { RecruitersAddComponent } from './recruiters/recruiters-add/recruiters-add.component';
import { CollegeHomeComponent } from './college/college-home/college-home.component';
import { CollegeAddComponent } from './college/college-add/college-add.component';
import { CoursesAddFeeComponent } from './courses/courses-add-fee/courses-add-fee.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ApplicationFormHomeComponent } from './application-form/application-form-home/application-form-home.component';
import { PatnerWithUsHomeComponent } from './patner-with-us/patner-with-us-home/patner-with-us-home.component';
import { PatnerWithUsViewComponent } from './patner-with-us/patner-with-us-view/patner-with-us-view.component';
import { ApplicationFormViewComponent } from './application-form/application-form-view/application-form-view.component';
import { LocationHomeComponent } from './location/location-home/location-home.component';
import { ApplicationServiceChargeHomeComponent } from './application-service-charge/application-service-charge-home/application-service-charge-home.component';
import { ApplicationServiceChargeAddComponent } from './application-service-charge/application-service-charge-add/application-service-charge-add.component';
import { CollegeRespondedApplicationFormComponent } from './college-responded-application-form/college-responded-application-form.component';
import { AllFeesMasterComponent } from './fees/all-fees-master/all-fees-master.component';
import { FeesSetupComponent } from './fees/fees-setup/fees-setup.component';
import { CollegeDashboardHomeComponent } from './college-dashboard/college-dashboard-home/college-dashboard-home.component';
import { CollegeMessagesComponent } from './college-messages/college-messages.component';
import { FacilatiesHomeComponent } from './facilaties/facilaties-home/facilaties-home.component';
import { FacilatiesAddComponent } from './facilaties/facilaties-add/facilaties-add.component';
import { ClassHomeComponent } from './class/class-home/class-home.component';
import { ClassAddComponent } from './class/class-add/class-add.component';
import { ClassFeedComponent } from './class/class-feed/class-feed.component';
import { StreamHomeComponent } from './stream/stream-home/stream-home.component';
import { SchoolHomeComponent } from './school/school-home/school-home.component';
import { SchoolAddComponent } from './school/school-add/school-add.component';
import { ClassFeeComponent } from './class/class-fee/class-fee.component';
import { SpecializationSingleHomeComponent } from './specialization-single/specialization-single-home/specialization-single-home.component';
import { SpecializationSingleAddComponent } from './specialization-single/specialization-single-add/specialization-single-add.component';
import { RatingsComponent } from './ratings/ratings.component';
import { AboutUsHomeComponent } from './about-us/about-us-home/about-us-home.component';
import { TalkToExpertHomeComponent } from './talk-to-expert/talk-to-expert-home/talk-to-expert-home.component';
import { AllIndiaBoardHomeComponent } from './all-india-board/all-india-board-home/all-india-board-home.component';
import { StateRegularBoardHomeComponent } from './state-regular-board/state-regular-board-home/state-regular-board-home.component';
import { OpenBoardHomeComponent } from './open-board/open-board-home/open-board-home.component';
import { TestimonalComponent } from './school/testimonal/testimonal.component';
import { CollegeLoginComponent } from './college/college-login/college-login.component';
import { CollegeManageLoginComponent } from './college/college-manage-login/college-manage-login.component';
import { CollegeEditLoginCredentialsComponent } from './college/college-edit-login-credentials/college-edit-login-credentials.component';
import { ExamHomeComponent } from './exam/exam-home/exam-home.component';
import { ResultHomeComponent } from './result/result-home/result-home.component';
import { UsermanagmentHomeComponent } from './usermanagment/usermanagment-home/usermanagment-home.component';
import { AssignPrivilageComponent } from './assign-privilage/assign-privilage.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { HomeBenefitsComponent } from './homepage/home-benefits/home-benefits.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';

import { TalkToCounsellerHomeComponent } from './talk-to-counseller/talk-to-counseller-home/talk-to-counseller-home.component';
import { CoursesAfterTenthUgPgHomeComponent } from './courses-after-10-12-ug-pg/courses-after-tenth-ug-pg-home/courses-after-tenth-ug-pg-home.component';
import { InterestOfYourCoursesHomeComponent } from './interest-of-your-courses/interest-of-your-courses-home/interest-of-your-courses-home.component';
import { FeaturedCollegeSchoolHomeComponent } from './featured-college-schools/featured-college-school-home/featured-college-school-home.component';
import { TopCollegeSchoolHomeComponent } from './top-college-schools/top-college-school-home/top-college-school-home.component';
import { PatnerWithUsViewCollegeComponent } from './patner-with-us/patner-with-us-view-college/patner-with-us-view-college.component';
import { PatnerWithUsViewSchoolComponent } from './patner-with-us/patner-with-us-view-school/patner-with-us-view-school.component';

const routes: Routes = [
  // {path:'',component:SigninPageComponent,outlet:"login"},
  { path: 'dashboard', component: DashboardComponent },
  {path:'home',component:HomeComponent},
  { path: '', component: SigninPageComponent },
  // { path: '', component: DashboardComponent },
  { path: 'usermanagement', component: UsermanagementHomeComponent },
  { path: 'usermanagement_edit', component: UsermanagementEditComponent },
  { path: 'courses', component: CoursesHomeComponent },
  { path: 'courses_add', component: CoursesAddComponent },
  { path: "courses_single_page", component: CoursesSinglePageHomeComponent },
  { path: "courses_single_page_add", component: CoursesSinglePageAddComponent },
  { path: "recruiters", component: RecruitersHomeComponent },
  { path: "recruiters_add", component: RecruitersAddComponent },
  { path: "college_home", component: CollegeHomeComponent },
  { path: "college_add", component: CollegeAddComponent },
  { path: "courses_add_fee", component: CoursesAddFeeComponent },
  { path: "application_form_home", component: ApplicationFormHomeComponent },
  { path: "partner_with_us_home", component: PatnerWithUsHomeComponent },
  { path: "partner_with_us_view_vendor", component: PatnerWithUsViewComponent },
  { path: "partner_with_us_view_college", component: PatnerWithUsViewCollegeComponent },
  { path: "partner_with_us_view_school", component: PatnerWithUsViewSchoolComponent },
  { path: "application_form_view", component: ApplicationFormViewComponent },
  { path: "location", component: LocationHomeComponent },
  { path: "application_service_charge_home", component: ApplicationServiceChargeHomeComponent },
  { path: "application_service_charge_add", component: ApplicationServiceChargeAddComponent },
  { path: "college_responded_application_form_home", component: CollegeRespondedApplicationFormComponent },
  { path: "fees_master", component: AllFeesMasterComponent },
  { path: "fees_setup", component: FeesSetupComponent },
  { path: "college_dashboard_home", component: CollegeDashboardHomeComponent },
  { path: "college_messages", component: CollegeMessagesComponent },
   { path: "facilaties_home", component: FacilatiesHomeComponent },
  { path: "facilaties_add", component: FacilatiesAddComponent },
  { path: "class-home", component: ClassHomeComponent },
  { path: "class-add", component: ClassAddComponent },
  { path: "class-fee", component: ClassFeeComponent },
  { path: "stream-home", component: StreamHomeComponent },
  { path: "school-home", component: SchoolHomeComponent },
  { path: "school-add", component: SchoolAddComponent },
  { path: "specialization-single-home", component: SpecializationSingleHomeComponent },
  { path: "specialization-single-add", component: SpecializationSingleAddComponent },
  { path: "ratings", component: RatingsComponent },
  { path: "about-us-home", component: AboutUsHomeComponent },
  { path: "talk_to_expert_home", component: TalkToExpertHomeComponent },
  { path: "all_india_board_home", component: AllIndiaBoardHomeComponent },
  { path: "state_regular_board_home", component: StateRegularBoardHomeComponent },
  { path: "open_board_home", component: OpenBoardHomeComponent },
  { path: "testimonal", component: TestimonalComponent },
  {path:"colleg_login",component:CollegeLoginComponent},
  {path:"college_manage_login",component:CollegeManageLoginComponent},
  {path:"college_edit_login_credentials",component:CollegeEditLoginCredentialsComponent},
  { path: "exam_home", component: ExamHomeComponent },
  { path: "result_home", component: ResultHomeComponent },
  { path: "usermanagment-home", component: UsermanagmentHomeComponent },
  { path: "assign-privilage", component: AssignPrivilageComponent },
  { path: "user-creation", component: UserCreationComponent },
  { path: "role-master", component: RoleMasterComponent },
  { path: "home-benefits", component: HomeBenefitsComponent },
  { path: "send-notification", component: SendNotificationComponent },
  { path: "talk_to_counseller", component: TalkToCounsellerHomeComponent},
  {path:"cousrse_after_10th_12th_ug_pg",component:CoursesAfterTenthUgPgHomeComponent},
  {path:"interest_of_your_courses",component:InterestOfYourCoursesHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
