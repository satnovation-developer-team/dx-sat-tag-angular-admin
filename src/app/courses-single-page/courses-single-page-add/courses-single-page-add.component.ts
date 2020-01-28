import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import * as ClassicEditor from 'ckeditor4-angular';
declare var jquery: any;
declare var $;
import { DataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-single-page-add',
  templateUrl: './courses-single-page-add.component.html',
  styleUrls: ['./courses-single-page-add.component.css']
})
export class CoursesSinglePageAddComponent implements OnInit, OnDestroy {
  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  
  public Editor = ClassicEditor;

  currentForm;
  formData: any = {};

  informationForm: FormGroup;
  guideForm: FormGroup;
  overviewForm: FormGroup;
  requiredSkillSetForm: FormGroup;
  eligibiltyCriteriaForm: FormGroup;
  enternaceExamAcceptableForm: FormGroup;
  courseCurriculumForm: FormGroup;
  viewSpecializationForm: FormGroup;
  recruitersForm: FormGroup;

  invalidError = false;

  informationSubmitted = false;
  guideSubmitted = false;
  overviewSubmitted = false;
  requiredSkillSetSubmitted = false;
  eligibiltyCriteriaSubmitted = false;
  enternaceExamAcceptableSubmitted = false;
  courseCurriculumSubmitted = false;
  viewSpecializationSubmitted = false;
  recruitersSubmitted = false;

  informationFormControl: any;
  guideFormControl: any;
  overviewFormControl: any;
  requiredSkillSetControl: any;
  eligibiltyCriteriaControl: any;
  enternaceExamAcceptableControl: any;
  courseCurriculumControl: any;
  viewSpecializationControl: any;
  recruitersControl: any;

  informationFormValidations = {
    'image_upload': [
      { type: 'required', message: 'Please Upload File.' },
    ],
    'course_name': [
      { type: 'required', message: 'Course Name is required.' },
    ],
    'category': [
      { type: 'required', message: 'Please select category.' },
    ],
    'area_of_interest': [
      { type: 'required', message: 'Area of interest is required.' },
    ],
  };

  guideFormValidations = {
    'pdf_upload': [
      { type: 'required', message: 'Please Upload File.' },
    ],
  };

  overviewFormValidations = {
    'overview':[
      { type: 'required', message: 'This field is required.' },
    ]
  }

  requiredSkillSetValidations = {
    'skill_set': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  eligibiltyCriteriaValidations = {
    'eligibility_criteria': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  enternaceExamAcceptableValidations = {
    'entrance_exam': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  courseCurriculumValisations = {
    'course_curriculum': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  recruitersValisations = {
    'job_profile': [
      { type: 'required', message: 'This field is required.' },
    ],
    'recruiters_content': [
      { type: 'required', message: 'This field is required.' },
    ],
    'ICICI_group': [],
    'Tata_consultancy_services': [],
  }

  viewSpecializationValidations = {
    'specialization': [
      { type: 'required', message: 'This field is required.' },
    ],
  }

  subscriptions = {
    course_single_page_store: null,
  };

 
  constructor(private fb:FormBuilder, public dataService: DataService, public router: Router) {
    this.InitializeInformationForm();
    this.InitializeGuideForm();
    this.InitializeOverviewForm();
    this.InitializeRequiredSkillSetForm();
    this.InitializeEligibiltyCriteriaForm();
    this.InitializeEnternaceExamAcceptableForm();
    this.InitializeCourseCurriculumForm();
    this.TntializeViewSpecializationForm();
    this.InitializeRecruitersForm();
   }

  ngOnInit() {
    this.informationFormControl = this.informationForm.controls;
    this.guideFormControl = this.guideForm.controls;
    this.overviewFormControl = this.overviewForm.controls;
    this.requiredSkillSetControl = this.requiredSkillSetForm.controls;
    this.eligibiltyCriteriaControl = this.eligibiltyCriteriaForm.controls;
    this.enternaceExamAcceptableControl = this.enternaceExamAcceptableForm.controls;
    this.courseCurriculumControl = this.courseCurriculumForm.controls;
    this.viewSpecializationControl = this.viewSpecializationForm.controls;
    this.recruitersControl = this.recruitersForm.controls;
  }

  // initialize login Form
  InitializeInformationForm() {
    this.informationForm = new FormGroup({
      image_upload: new FormControl('', [Validators.required]),
      course_name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      area_of_interest: new FormControl('', [Validators.required]),
    });
  }

  InitializeGuideForm()
  {
    this.guideForm = new FormGroup({
      pdf_upload: new FormControl('', [Validators.required]),
    });
  }

  InitializeOverviewForm()
  {
    this.overviewForm = new FormGroup({
      overview: new FormControl('', [Validators.required]),
    });
  }

  InitializeRequiredSkillSetForm()
  {
    this.requiredSkillSetForm = new FormGroup({
      skill_set: new FormControl('', [Validators.required]),
    });
  }

  InitializeEligibiltyCriteriaForm()
  {
    this.eligibiltyCriteriaForm = new FormGroup({
      eligibility_criteria: new FormControl('', [Validators.required]),
    });
  }

  InitializeEnternaceExamAcceptableForm()
  {
    this.enternaceExamAcceptableForm = new FormGroup({
      entrance_exam: new FormControl('', [Validators.required]),
    });
  }

  InitializeCourseCurriculumForm()
  {
    this.courseCurriculumForm = new FormGroup({
      course_curriculum: new FormControl('', [Validators.required]),
    });
  }

  InitializeRecruitersForm()
  {
    this.recruitersForm = new FormGroup({
      job_profile: new FormControl('', [Validators.required]),
      recruiters_content: new FormControl('', [Validators.required]),
      Tata_consultancy_services: new FormControl(''),
      ICICI_group: new FormControl(''),
    });
  }

  TntializeViewSpecializationForm()
  {
    this.viewSpecializationForm = new FormGroup({
      specialization: new FormControl('', [Validators.required]),
    });
  }

  fileselect(value){
    // console.log("hi",value);
  }

  informationFormSubmit(formID) {
    // console.log('formData',this.informationForm.value);
    
    this.informationSubmitted = true;
    if (this.informationForm.valid) {

      $('#information').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['image_upload'] = this.informationForm.value.image_upload;
      this.formData['course_name'] = this.informationForm.value.course_name;
      this.formData['category'] = this.informationForm.value.category;
      this.formData['area_of_interest'] = this.informationForm.value.area_of_interest;

      }
      else {
        this.informationForm.invalid;
      }
    }

  guideFormSubmit(formID)
  {
   
    this.guideSubmitted = true;
    if (this.guideForm.valid) {
      
      $('#guide').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['pdf_upload'] = this.guideForm.value.pdf_upload;

    }
    else {
      this.guideForm.invalid;
    }
  }

  overviewFormSubmit(formID)
  {
    this.overviewSubmitted = true;
    if (this.overviewForm.valid) {
      
      $('#overview').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['overview'] = this.overviewForm.value.overview;
    }
    else {
      this.overviewForm.invalid;
    }
  }

  requiredSkillSetFormSubmit(formID) {
    
    this.requiredSkillSetSubmitted = true;
    if (this.requiredSkillSetForm.valid) {

      $('#required_skill_set').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['skill_set'] = this.requiredSkillSetForm.value.skill_set;
    }
    else {
      this.requiredSkillSetForm.invalid;
    }
  }

  eligibiltyCriteriaFormSubmit(formID)
  {
    this.eligibiltyCriteriaSubmitted = true;
    if (this.eligibiltyCriteriaForm.valid) {

      $('#eligibilty_criteria').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['eligibility_criteria'] = this.eligibiltyCriteriaForm.value.eligibility_criteria;
    }
    else {
      this.eligibiltyCriteriaForm.invalid;
    }
  }

  enternaceExamAcceptableFormSubmit(formID)
  {
    this.enternaceExamAcceptableSubmitted = true;
    if (this.enternaceExamAcceptableForm.valid) {

      $('#enternace_exam_acceptable').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['entrance_exam'] = this.enternaceExamAcceptableForm.value.entrance_exam;
    }
    else {
      this.enternaceExamAcceptableForm.invalid;
    }
  }

  courseCurriculumFormSubmit(formID)
  {
    
    this.courseCurriculumSubmitted = true;
    if (this.courseCurriculumForm.valid) {

      $('#course_curriculum').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['course_curriculum'] = this.courseCurriculumForm.value.course_curriculum;
    }
    else {
      this.courseCurriculumForm.invalid;
    }
  }

  viewSpecializationFormSubmit(formID)
  {
    this.viewSpecializationSubmitted = true;
    if (this.viewSpecializationForm.valid) {

    $('#view_specialization').hide();
    $(formID).show();
    $(formID).tab('show');

    this.formData['specialization'] = this.viewSpecializationForm.value.specialization;
    }
    else{
      this.viewSpecializationForm.invalid;
    }
  }

  recruitersFormSubmit(formID)
  {
    
    this.recruitersSubmitted = true;
    if (this.recruitersForm.valid) {

      // $('#recruiters').hide();
      // $(formID).show();
      // $(formID).tab('show');

      this.formData['job_profile'] = this.recruitersForm.value.job_profile;
      this.formData['recruiters_content'] = this.recruitersForm.value.recruiters_content;
      this.formData['ICICI_group'] = this.recruitersForm.value.ICICI_group;
      this.formData['Tata_consultancy_services'] = this.recruitersForm.value.Tata_consultancy_services;
      console.log('formData', this.formData);
      this.subscriptions.course_single_page_store = this.dataService.storeData('course', this.formData).subscribe((res) => {
          if (res) {
            window.location.reload();
          }
        }),
          (error) => {
          }
    }
    else {
      this.recruitersForm.invalid;
    }
  }

  navigateBack(prevFormID,currentFormID)
  {
    $(prevFormID).show();
    $(currentFormID).hide();
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      for (let sub in this.subscriptions) {
        if (this.subscriptions[sub]) {
          this.subscriptions[sub].unsubscribe();
        }
      }
    }
  }
  
}
