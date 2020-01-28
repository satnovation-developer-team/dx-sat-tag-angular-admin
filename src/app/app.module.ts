import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './homepage/home/home.component';
import { UsermanagementHomeComponent } from './usermanagement/usermanagement-home/usermanagement-home.component';
import { UsermanagementEditComponent } from './usermanagement/usermanagement-edit/usermanagement-edit.component';
import { CoursesHomeComponent } from './courses/courses-home/courses-home.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesSinglePageHomeComponent } from './courses-single-page/courses-single-page-home/courses-single-page-home.component';
import { CoursesSinglePageAddComponent } from './courses-single-page/courses-single-page-add/courses-single-page-add.component';
import { SigninPageComponent } from './authentication/signin-page/signin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { RecruitersHomeComponent } from './recruiters/recruiters-home/recruiters-home.component';
import { RecruitersAddComponent } from './recruiters/recruiters-add/recruiters-add.component';
import { CollegeHomeComponent } from './college/college-home/college-home.component';
import { CollegeAddComponent } from './college/college-add/college-add.component';
import { CoursesAddFeeComponent } from './courses/courses-add-fee/courses-add-fee.component';
import { ApplicationFormHomeComponent } from './application-form/application-form-home/application-form-home.component';
import { PatnerWithUsHomeComponent } from './patner-with-us/patner-with-us-home/patner-with-us-home.component';



import { FacilatiesHomeComponent } from './facilaties/facilaties-home/facilaties-home.component';
import { FacilatiesAddComponent } from './facilaties/facilaties-add/facilaties-add.component';
import { ClassHomeComponent } from './class/class-home/class-home.component';
import { ClassAddComponent } from'./class/class-add/class-add.component';
import { ClassFeedComponent } from './class/class-feed/class-feed.component';
import { StreamHomeComponent } from './stream/stream-home/stream-home.component';
import { SchoolHomeComponent } from './school/school-home/school-home.component';
import { SchoolAddComponent } from './school/school-add/school-add.component';
import { ClassFeeComponent } from './class/class-fee/class-fee.component';
import { SpecializationSingleHomeComponent } from './specialization-single/specialization-single-home/specialization-single-home.component';
import { SpecializationSingleAddComponent } from './specialization-single/specialization-single-add/specialization-single-add.component';
import { RatingsComponent } from './ratings/ratings.component';

import { PatnerWithUsViewComponent } from './patner-with-us/patner-with-us-view/patner-with-us-view.component';
import { ApplicationFormViewComponent } from './application-form/application-form-view/application-form-view.component';
import { LocationHomeComponent } from './location/location-home/location-home.component';
import { ApplicationServiceChargeHomeComponent } from './application-service-charge/application-service-charge-home/application-service-charge-home.component';
import { ApplicationServiceChargeAddComponent } from './application-service-charge/application-service-charge-add/application-service-charge-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TalkToExpertHomeComponent } from './talk-to-expert/talk-to-expert-home/talk-to-expert-home.component';
import { AllIndiaBoardHomeComponent } from './all-india-board/all-india-board-home/all-india-board-home.component';
import { StateRegularBoardHomeComponent } from './state-regular-board/state-regular-board-home/state-regular-board-home.component';
import { OpenBoardHomeComponent } from './open-board/open-board-home/open-board-home.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { CollegeRespondedApplicationFormComponent } from './college-responded-application-form/college-responded-application-form.component';
import { AllFeesMasterComponent } from './fees/all-fees-master/all-fees-master.component';
import { FeesSetupComponent } from './fees/fees-setup/fees-setup.component';
import { CollegeDashboardLoginComponent } from './college-dashboard/college-dashboard-login/college-dashboard-login.component';
import { CollegeDashboardHomeComponent } from './college-dashboard/college-dashboard-home/college-dashboard-home.component';
import { CollegeMessagesComponent } from './college-messages/college-messages.component';
import { AboutUsHomeComponent } from './about-us/about-us-home/about-us-home.component';
import { TestimonalComponent } from './school/testimonal/testimonal.component';
import { CollegeLoginComponent } from './college/college-login/college-login.component';
import { CollegeManageLoginComponent } from './college/college-manage-login/college-manage-login.component';
import { CollegeEditLoginCredentialsComponent } from './college/college-edit-login-credentials/college-edit-login-credentials.component';
import { ExamHomeComponent } from './exam/exam-home/exam-home.component';
import { ResultHomeComponent } from './result/result-home/result-home.component';
import { UsermanagmentHomeComponent } from './usermanagment/usermanagment-home/usermanagment-home.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { AssignPrivilageComponent } from './assign-privilage/assign-privilage.component';
import { RoleMasterComponent } from './role-master/role-master.component';
import { HomeBenefitsComponent } from './homepage/home-benefits/home-benefits.component';
import { SendNotificationComponent } from './send-notification/send-notification.component';
import { VendorDashboardHomeComponent } from './vendor-dashboard/vendor-dashboard-home/vendor-dashboard-home.component';
import { VendorDashboardLoginComponent } from './vendor-dashboard/vendor-dashboard-login/vendor-dashboard-login.component';
import { TalkToCounsellerHomeComponent } from './talk-to-counseller/talk-to-counseller-home/talk-to-counseller-home.component';
import { CoursesAfterTenthUgPgHomeComponent } from './courses-after-10-12-ug-pg/courses-after-tenth-ug-pg-home/courses-after-tenth-ug-pg-home.component';
import { InterestOfYourCoursesHomeComponent } from './interest-of-your-courses/interest-of-your-courses-home/interest-of-your-courses-home.component';
import { FeaturedCollegeSchoolHomeComponent } from './featured-college-schools/featured-college-school-home/featured-college-school-home.component';
import { TopCollegeSchoolHomeComponent } from './top-college-schools/top-college-school-home/top-college-school-home.component';

import {AssumptionPrivilegeComponent} from './assumption-privilege/assumption-privilege.component';
import { PatnerWithUsViewCollegeComponent } from './patner-with-us/patner-with-us-view-college/patner-with-us-view-college.component';
import { PatnerWithUsViewSchoolComponent } from './patner-with-us/patner-with-us-view-school/patner-with-us-view-school.component';

import { DataService } from './shared/services/data.service';
import { CommonUrlsService } from './shared/services/common-urls.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsermanagementHomeComponent,
    UsermanagementEditComponent,
    CoursesHomeComponent,
    CoursesAddComponent,
    CoursesSinglePageHomeComponent,
    CoursesSinglePageAddComponent,
    SigninPageComponent,
    DashboardComponent,
    RecruitersHomeComponent,
    RecruitersAddComponent,
    CollegeHomeComponent,
    CollegeAddComponent,
    CoursesAddFeeComponent,
    ApplicationFormHomeComponent,
    PatnerWithUsHomeComponent,
    PatnerWithUsViewComponent,
    ApplicationFormViewComponent,
    LocationHomeComponent,
    ApplicationServiceChargeHomeComponent,
    ApplicationServiceChargeAddComponent,
    CollegeRespondedApplicationFormComponent,
    AllFeesMasterComponent,
    FeesSetupComponent,
    CollegeDashboardLoginComponent,
    CollegeDashboardHomeComponent,
    CollegeMessagesComponent,
    FacilatiesHomeComponent,
    FacilatiesAddComponent,
    ClassHomeComponent,
    ClassAddComponent,
    StreamHomeComponent,
    ClassFeedComponent,
    SchoolHomeComponent,
    SchoolAddComponent,
    ClassFeeComponent,
    SpecializationSingleHomeComponent,
    SpecializationSingleAddComponent,
    RatingsComponent,
    AboutUsHomeComponent,
    TalkToExpertHomeComponent,
    AllIndiaBoardHomeComponent,
    StateRegularBoardHomeComponent,
    OpenBoardHomeComponent,
    TestimonalComponent,
    CollegeLoginComponent,
    CollegeManageLoginComponent,
    CollegeEditLoginCredentialsComponent,
    ExamHomeComponent,
    ResultHomeComponent,
    UsermanagmentHomeComponent,
    UserCreationComponent,
    AssignPrivilageComponent,
    RoleMasterComponent,
    HomeBenefitsComponent,
    SendNotificationComponent,
    VendorDashboardHomeComponent,
    VendorDashboardLoginComponent,
    TalkToCounsellerHomeComponent,
    CoursesAfterTenthUgPgHomeComponent,
    InterestOfYourCoursesHomeComponent,
    FeaturedCollegeSchoolHomeComponent,
    TopCollegeSchoolHomeComponent,
    AssumptionPrivilegeComponent,
    PatnerWithUsViewCollegeComponent,
    PatnerWithUsViewSchoolComponent,
  ],
  imports: [
    BrowserModule, MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    AppRoutingModule,CKEditorModule, BrowserAnimationsModule,FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService, CommonUrlsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
