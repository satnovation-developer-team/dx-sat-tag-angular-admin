import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
declare var $;
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-college-add',
  templateUrl: './college-add.component.html',
  styleUrls: ['./college-add.component.css']
})
export class CollegeAddComponent implements OnInit, OnDestroy{
  public  overviewData = '<p>hello World</p>';

  overviewForm: FormGroup;
  admissionEligibiltyCriteriaForm: FormGroup;
  enteranceExamAcceptableForm: FormGroup;
  facilitiesForm: FormGroup;
  galleryForm: FormGroup;
  eventsForm: FormGroup;
  scholarshipForm: FormGroup;
  qaForm: FormGroup;
  articleForm: FormGroup;
  contactForm: FormGroup;
  informationForm: FormGroup;
  courseForm: FormGroup;
  reviewPartForm: FormGroup;
  dynamicFieldForm: FormGroup;

  invalidError = false;

  overviewSubmitted = false;
  admissionEligibiltyCriteriaSubmitted = false;
  enteranceExamAcceptableSubmitted = false;
  facilitiesSubmitted = false;
  gallerySubmitted = false;
  eventsSubmitted = false;
  scholarshipSubmitted = false;
  qaSubmitted = false;
  articleSubmitted = false;
  contactSubmitted = false;
  informationSubmitted = false;
  courseSubmitted = false;
  reviewPartSubmitted = false;
  dynamicFieldSubmitted = false;

  overviewFormControl: any;
  admissionEligibiltyCriteriaFormControl: any;
  enteranceExamAcceptableFormControl: any;
  facilitiesFormControl: any;
  galleryFormControl: any;
  eventsFormControl: any;
  scholarshipFormControl: any;
  qaFormControl: any;
  articleControl: any;
  contactFormControl: any;
  informationFormControl: any;
  courseFormControl: any;
  reviewPartFormControl: any;
  dynamicFieldFormControl: any;
  

  overviewFormValidations = {
    'overview': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  admissionEligibiltyCriteriaFormValidations = {
    'eligibility_criteria': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  enteranceExamAcceptableFormValidations = {
    'entrance_exam': [
      { type: 'required', message: 'This field is required.' },
    ],
    'JEEE':[],
    'GATE':[],
  }

  facilitiesFormValidations = {
    'class_room': [],
    'auditorium': [],
  }

  galleryFormValidations = {
    'category_image_upload':[
      { type: 'required', message: 'Please Upload File.' },
    ],
    'category_name':[
      { type: 'required', message: 'This field is required.' },
    ]
  }

  eventsFormValidations = {
    'event_image_upload': [
      { type: 'required', message: 'Please Upload File.' },
    ],
    'event_name': [
      { type: 'required', message: 'This field is required.' },
    ],
    'event_date': [
      { type: 'required', message: 'Please Upload File.' },
    ],
    'event_description': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  scholarshipFormValidations = {
    'scholarship' : [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  contactFormValidations = {
    'college_title': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_description': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_url': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_email_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_mobile_number': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_phone_number': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_map': [
      { type: 'required', message: 'This field is required.' },
    ]
  }

  informationFormValidations = {
    'image_upload': [
      { type: 'required', message: 'This field is required.' },
    ],
    'university_name': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_name': [
      { type: 'required', message: 'This field is required.' },
    ],
    'broucher_upload': [
      { type: 'required', message: 'This field is required.' },
    ],
    'college_type_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'locations_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'placements_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'accreditations_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'ownerships_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'approvals_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'offers_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'application_charges_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'service_charges_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'rank_id': [
      { type: 'required', message: 'This field is required.' },
    ],
    'featured': [
      { type: 'required', message: 'This field is required.' },
    ],
    'top_colleges': [
      { type: 'required', message: 'This field is required.' },
    ],
    // 'placement_maxval': [
    //   { type: 'required', message: 'This field is required.' },
    // ],
    // 'infrastructure_maxval': [
    //   { type: 'required', message: 'This field is required.' },
    // ],
    // 'faculty_maxval': [
    //   { type: 'required', message: 'This field is required.' },
    // ],
    // 'campuslife_maxval': [
    //   { type: 'required', message: 'This field is required.' },
    // ],
    // 'value_formoney_maxval': [
    //   { type: 'required', message: 'This field is required.' },
    // ]
  }
  
  formData:any = {};
  informationFormData: any = {};
  events;
  subscriptions = {
    get_events_list: null,
    college_single_page_store: null,
    college_information_page_store: null,
    list_placement:null,
    list_accreditation: null,
    list_servicecharge: null,
    list_appcharge: null,
    list_approval: null,
    list_rank: null,
    list_coursedemand: null,
    list_ownership: null,
    list_coursestatus: null,
    list_admission: null,
    list_offers: null,
    list_collegetype: null,
    list_modeofstudy: null,
    list_specialization: null,
    list_location: null,
    list_course: null,
  };

  placement: any;
  accreditation: any;
  rank: any;
  servicecharge:any;
  appcharge: any;
  approval:any;
  coursedemand:any;
  ownership: any;
  coursestatus: any;
  admission: any;
  offers: any;
  collegetype: any;
  modeofstudy: any;
  specialization:any;
  location: any;
  course: any;

  constructor(public dataService: DataService, private _fb: FormBuilder) { 
    this.getEventsList();

    this.InitializeOverviewForm();
    this.IntializeAdmissionEligibiltyCriteriaForm();
    this.InitializeEnteranceExamAcceptableForm();
    this.InitializeFacilitiesForm();
    this.InitializeGalleryForm();
    this.InitializeEventsForm();
    this.InitializeScholarshipForm();
    this.InitializeContactForm();
    this.InitializeQaForm();
    this.InitializeArticleForm();
    this.InitializeInformationForm();
    this.InitializeCourseForm();
    this.InitializeDynamicFieldForm();
  }

  ngOnInit() {

    this.loadData();

    this.overviewFormControl = this.overviewForm.controls;
    this.admissionEligibiltyCriteriaFormControl = this.admissionEligibiltyCriteriaForm.controls;
    this.enteranceExamAcceptableFormControl = this.enteranceExamAcceptableForm.controls;
    this.facilitiesFormControl = this.facilitiesForm.controls;
    this.galleryFormControl = this.galleryForm.controls;
    this.eventsFormControl = this.eventsForm.controls;
    this.scholarshipFormControl = this.scholarshipForm.controls;
    this.contactFormControl = this.contactForm.controls;
    this.informationFormControl = this.informationForm.controls;
  }

  loadData(){
    this.subscriptions.list_placement = this.dataService.getListData('colleges/get_placement').subscribe((res) => {
      if (res.result) {
        this.placement = res.result;
      }
    });

    this.subscriptions.list_accreditation = this.dataService.getListData('colleges/get_accreditation').subscribe((res) => {
      if (res.result) {
        this.accreditation = res.result;
      }
    });

    this.subscriptions.list_approval = this.dataService.getListData('colleges/get_approval').subscribe((res) => {
      if (res.result) {
        this.approval = res.result;
      }
    });

    this.subscriptions.list_rank = this.dataService.getListData('college/get_rank').subscribe((res) => {
      if (res.result) {
        this.rank = res.result;
      }
    });

    this.subscriptions.list_coursedemand = this.dataService.getListData('college/get_coursedemand').subscribe((res) => {
      if (res.result) {
        this.coursedemand = res.result;
      }
    });

    this.subscriptions.list_ownership = this.dataService.getListData('colleges/get_ownership').subscribe((res) => {
      if (res.result) {
        this.ownership = res.result;
      }
    });

    this.subscriptions.list_coursestatus = this.dataService.getListData('colleges/get_coursestatus').subscribe((res) => {
      if (res.result) {
        this.coursestatus = res.result;
      }
    });

    this.subscriptions.list_admission = this.dataService.getListData('courses/get_admission').subscribe((res) => {
      if (res.result) {
        this.admission = res.result;
      }
    });

    this.subscriptions.list_offers = this.dataService.getListData('college/get_offers').subscribe((res) => {
      if (res.result) {
        this.offers = res.result;
      }
    });

    this.subscriptions.list_collegetype = this.dataService.getListData('college/get_collegetype').subscribe((res) => {
      if (res.result) {
        this.collegetype = res.result;
      }
    });

    this.subscriptions.list_modeofstudy = this.dataService.getListData('college/get_modeofstudy').subscribe((res) => {
      if (res.result) {
        this.modeofstudy = res.result;
      }
    });

    this.subscriptions.list_specialization = this.dataService.getListData('specialization').subscribe((res) => {
      if (res.result) {
        this.specialization = res.result;
      }
    });

    this.subscriptions.list_location = this.dataService.getListData('locations/get_location').subscribe((res) => {
      if (res.result) {
        this.location = res.result;
      }
    });

    this.subscriptions.list_servicecharge = this.dataService.getListData('appcharges/get_servicecharge').subscribe((res) => {
      if (res.result) {
        this.servicecharge = res.result;
      }
    });

    this.subscriptions.list_appcharge = this.dataService.getListData('appcharges/get_appcharge').subscribe((res) => {
      if (res.result) {
        this.appcharge = res.result;
      }
    });

    this.subscriptions.list_course = this.dataService.getListData('courses').subscribe((res) => {
      if (res.result) {
        this.course = res.result;
      }
    });

  }

  get formArr1() {
    return this.qaForm.get('college_question') as FormArray;
  }

  get formArr2() {
    return this.articleForm.get('college_article') as FormArray;
  }

  get formCourse() {
    return this.courseForm.get('courses') as FormArray;
  }

  get formArr() {
    return this.informationForm.get('review_part') as FormArray;
  }

  get dynamic_fields() {
    return this.dynamicFieldForm.get('dynamic_fields') as FormArray;
  }

  InitializeOverviewForm() {
    this.overviewForm = new FormGroup({
      overview: new FormControl('', [Validators.required]),
    });
  }

  IntializeAdmissionEligibiltyCriteriaForm()
  {
    this.admissionEligibiltyCriteriaForm = new FormGroup({
      eligibility_criteria: new FormControl('', [Validators.required]),
    });
  }

  InitializeEnteranceExamAcceptableForm()
  {
    this.enteranceExamAcceptableForm = new FormGroup({
      entrance_exam: new FormControl('', [Validators.required]),
      GATE: new FormControl(''),
      JEEE: new FormControl(''),
    });
  }

  InitializeFacilitiesForm()
  {
    this.facilitiesForm = new FormGroup({
      class_room: new FormControl(''),
      auditorium: new FormControl(''),
    });
  }

  InitializeGalleryForm()
  {
    this.galleryForm = new FormGroup({
      category_image_upload: new FormControl('', [Validators.required]),
      category_name: new FormControl('', [Validators.required]),
    });
  }

  InitializeEventsForm()
  {
    this.eventsForm = new FormGroup({
      event_image_upload: new FormControl('', [Validators.required]),
      event_name: new FormControl('', [Validators.required]),
      event_date: new FormControl('', [Validators.required]),
      event_description: new FormControl('', [Validators.required]),
    }); 
  }

  InitializeScholarshipForm()
  {
    this.scholarshipForm = new FormGroup({
      scholarship: new FormControl('', [Validators.required]),
    }); 
  }

  InitializeContactForm()
  {
    this.contactForm = new FormGroup({
      college_title: new FormControl('', [Validators.required]),
      college_description: new FormControl('', [Validators.required]),
      college_url: new FormControl('', [Validators.required]),
      college_email_id: new FormControl('', [Validators.required]),
      college_mobile_number: new FormControl('', [Validators.required]),
      college_phone_number: new FormControl('', [Validators.required]),
      college_map: new FormControl('', [Validators.required]),
    });
  }

  InitializeQaForm()
  {
    this.qaForm = this._fb.group({
      college_question: this._fb.array([this.initItemRows1()])
    });
  }

  InitializeArticleForm()
  {
    this.articleForm = this._fb.group({
      college_article: this._fb.array([this.initItemRows2()])
    });
  }

  InitializeInformationForm()
  {
    this.informationForm = new FormGroup({
      review_part: new FormArray([this.initReviewPartItem()]),
      // dynamic_fields: new FormArray([this.initDynamicFieldsItem()]),
      image_upload: new FormControl('', [Validators.required]),
      university_name: new FormControl('', [Validators.required]),
      college_name: new FormControl('', [Validators.required]),
      broucher_upload: new FormControl('', [Validators.required]),
      college_type_id: new FormControl('', [Validators.required]),
      locations_id: new FormControl('', [Validators.required]),
      placements_id: new FormControl('', [Validators.required]),
      accreditations_id: new FormControl('', [Validators.required]),
      ownerships_id: new FormControl('', [Validators.required]),
      approvals_id: new FormControl('', [Validators.required]),
      offers_id: new FormControl('', [Validators.required]),
      application_charges_id: new FormControl('', [Validators.required]),
      service_charges_id: new FormControl('', [Validators.required]),
      rank_id: new FormControl('', [Validators.required]),
      featured: new FormControl('', [Validators.required]),
      top_colleges: new FormControl('', [Validators.required]),
      placement_maxval: new FormControl('', [Validators.required]),
      infrastructure_maxval: new FormControl('', [Validators.required]),
      faculty_maxval: new FormControl('', [Validators.required]),
      campuslife_maxval: new FormControl('', [Validators.required]),
      value_formoney_maxval: new FormControl('', [Validators.required]),
    });

    this.informationForm.patchValue({
      placements: 'placements',
    });
  }

  InitializeDynamicFieldForm()
  {
    this.dynamicFieldForm = this._fb.group({
      dynamic_fields: this._fb.array([this.initDynamicFieldsItem()])
    });
  }

  InitializeCourseForm()
  {
    this.courseForm = this._fb.group({
      courses: this._fb.array([this.initCourseItem()])
    });
  }

  initCourseItem(){
    return this._fb.group({
      course_year: [''],
      course_id: [''],
      // college_information_id: [''],
      admission_id: [''],
      accreditation_id: [''],
      specialization_id: [''],
      course_status_id: [''],
      course_demand_id: [''],
      mode: [''],
      approvals_id: [''],
      rank_id: [''],
    });
  }

  initReviewPartItem() {
    return this._fb.group({
      placements: ['placements'],
      infrastructure: ['infrastructure'],
      faculty: ['faculty'],
      campuslife: ['campuslife'],
      value_for_money: ['value for money'],
      placement_maxval: ['', Validators.required],
      infrastructure_maxval: ['', Validators.required],
      faculty_maxval: ['', Validators.required],
      campuslife_maxval: ['', Validators.required],
      value_formoney_maxval: ['', Validators.required]
    });
  }

  initDynamicFieldsItem()
  {
    return this._fb.group({
      key: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  initItemRows1() {
    return this._fb.group({
      question: [''],
      answers:['']
    });
  }

  initItemRows2() {
    return this._fb.group({
      title: [''],
      description: ['']
    });
  }

  addNewReviewPart() {
    // this.reviewPartForm.push(this.informationForm);
    this.dynamic_fields.push(this.initDynamicFieldsItem());
  }

  addNewCourse() {
    this.formCourse.push(this.initCourseItem());
  }

  addNewQA() {
    this.formArr1.push(this.initItemRows1());
  }

  addNewArticle(){
    this.formArr2.push(this.initItemRows2());
  }

  deleteRow(index: number) {
    this.formCourse.removeAt(index);
  }

  fileselect(value) {
    console.log("hi",value);
  }

  informationFormSubmit()
  {
      console.log('this.informationForm.value', this.informationForm.value);
      console.log('this.dynamicFieldForm.value', this.dynamicFieldForm.value);
      console.log('this.courseForm.value', this.courseForm.value);
    this.informationSubmitted = true;
    if (this.informationForm.value) {
      let review_part = [];

      this.informationForm.value.review_part.forEach(element => {
        // console.log('element',element)
        if (element.placements || element.placement_maxval) {
          review_part.push({ 'review_type': element.placements, 'maximum_value': element.placement_maxval.toString() });
        }
        if (element.infrastructure || element.infrastructure_maxval) {
          review_part.push({ 'review_type': element.infrastructure, 'maximum_value': element.infrastructure_maxval.toString() });
        }
        if (element.faculty || element.faculty_maxval) {
          review_part.push({ 'review_type': element.faculty, 'maximum_value': element.faculty_maxval.toString() });
        }
        if (element.campuslife || element.campuslife_maxval) {
          review_part.push({ 'review_type': element.campuslife, 'maximum_value': element.campuslife_maxval.toString() });
        }
        if (element.value_for_money || element.value_formoney_maxval) {
          review_part.push({ 'review_type': element.value_for_money, 'maximum_value': element.value_formoney_maxval.toString() });
        }
      });

      // console.log('this.informationForm.value', this.informationForm.value.splice(0,1));
      // console.log('this.informationForm.value', this.informationForm.value);

      this.dynamicFieldForm.value.dynamic_fields.forEach(element => {
        // console.log('element',element);
        review_part.push({ 'review_type': element.key, 'maximum_value': element.value.toString() });
      });

      this.informationForm.value.review_part = review_part;

      this.informationForm.value['courses'] = this.courseForm.value.courses;
      this.informationForm.value.mode = [];
      //this.informationForm.value.mode.mode_of_study_name = this.informationForm.value.mode;
      this.informationForm.value['courses'].forEach((element,value) => {
        let store_mode = this.informationForm.value.courses[value].mode;
        delete this.informationForm.value.courses[value].mode;

        if (store_mode){
          store_mode.forEach(element_of_mode => {
            console.log('element_of_mode', element_of_mode);
            this.informationForm.value.mode.push({ 'mode_of_study_name': element_of_mode });
          });
        }
        
      });
      


      delete this.informationForm.value.placement_maxval;
      delete this.informationForm.value.infrastructure_maxval;
      delete this.informationForm.value.faculty_maxval;
      delete this.informationForm.value.campuslife_maxval;
      delete this.informationForm.value.value_formoney_maxval;

      console.log('test', this.informationForm.value);

      this.subscriptions.college_information_page_store = this.dataService.storeData('college/save_collegeinfo', this.informationForm.value).subscribe((res) => {
        console.log('res', res);
        if (res) {
          // window.location.reload();
        }
      }),
        (error) => {
        }
    // this.informationFormData['review_part'] = review_part;
    // console.log('review_part', this.informationFormData);
    }
    else{
      this.informationForm.invalid;
    }
  }

  overviewFormSubmit(formID) {
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

  admissionEligibiltyCriteriaFormSubmit(formID) {
    this.admissionEligibiltyCriteriaSubmitted = true;
    if (this.admissionEligibiltyCriteriaForm.valid) {

      $('#admission_eligibilty_criteria').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['eligibility_criteria'] = this.admissionEligibiltyCriteriaForm.value.eligibility_criteria;
      // console.log('this.formData', this.formData);
    }
    else {
      this.overviewForm.invalid;
    }
  }

  enteranceExamAcceptableFormSubmit(formID){
    this.enteranceExamAcceptableSubmitted = true;
    if (this.enteranceExamAcceptableForm.valid) {

      $('#enterance_exam_acceptable').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['entrance_exam'] = this.enteranceExamAcceptableForm.value.entrance_exam;
      this.formData['GATE'] = this.enteranceExamAcceptableForm.value.GATE;
      this.formData['JEEE'] = this.enteranceExamAcceptableForm.value.JEEE;
      // console.log('this.formData', this.formData);
    }
    else {
      this.enteranceExamAcceptableForm.invalid;
    }
  }

  facilitiesFormSubmit(formID)
  {
    this.facilitiesSubmitted = true;
    // if (this.enteranceExamAcceptableForm.valid) {

      $('#facilities').hide();
      $(formID).show();
      $(formID).tab('show');

    this.formData['class_room'] = this.facilitiesForm.value.class_room;
    this.formData['auditorium'] = this.facilitiesForm.value.auditorium;
    // console.log('this.formData', this.formData);
    // }
    // else {
    //   this.enteranceExamAcceptableForm.invalid;
    // }
  }

  galleryFormSubmit(formID) {
    this.gallerySubmitted = true;
    if (this.galleryForm.valid) {

      $('#gallery').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['category_image_upload'] = this.galleryForm.value.category_image_upload;
      this.formData['category_name'] = this.galleryForm.value.category_name;
      // console.log('this.formData', this.formData);
    }
    else {
      this.galleryForm.invalid;
    }
  }

  eventsFormSubmit(formID)
  {
    this.eventsSubmitted = true;
    if (this.eventsForm.valid) {

      $('#events').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['event_image_upload'] = this.eventsForm.value.event_image_upload;
      this.formData['event_name'] = this.eventsForm.value.event_name;
      this.formData['event_date'] = this.eventsForm.value.event_date;
      this.formData['event_description'] = this.eventsForm.value.event_description;
      // console.log('this.formData', this.formData);
    }
    else {
      this.eventsForm.invalid;
    }
  }

  scholarshipFormSubmit(formID)
  {
    this.scholarshipSubmitted = true;
    if (this.scholarshipForm.valid) {

      $('#scholarship').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['scholarship'] = this.scholarshipForm.value.scholarship;
      // console.log('this.formData', this.formData);
    }
    else {
      this.scholarshipForm.invalid;
    }
  }

  qaFormSubmit(formID)
  {
    // console.log('data', this.qaForm.value);
    this.qaSubmitted = true;
    if (this.qaForm.valid) {

      $('#qa').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['college_question'] = this.qaForm.value.college_question;
      // console.log('this.formData', this.formData);
    }
    else {
      this.qaForm.invalid;
    }
  }

  articleFormSubmit(formID)
  {
    // console.log('data', this.qaForm.value);
    this.articleSubmitted = true;
    if (this.articleForm.valid) {

      $('#article').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['college_article'] = this.articleForm.value.college_article;

    }
    else {
      this.articleForm.invalid;
    }
  }

  contactFormSubmit(formID) {
    this.contactSubmitted = true;
    if (this.contactForm.valid) {

      $('#contact').hide();
      $(formID).show();
      $(formID).tab('show');

      this.formData['college_title'] = this.contactForm.value.college_title;
      this.formData['college_description'] = this.contactForm.value.college_description;
      this.formData['college_url'] = this.contactForm.value.college_url;
      this.formData['college_email_id'] = this.contactForm.value.college_email_id;
      this.formData['college_mobile_number'] = this.contactForm.value.college_mobile_number;
      this.formData['college_phone_number'] = this.contactForm.value.college_phone_number;
      this.formData['college_map'] = this.contactForm.value.college_map;

      console.log('this.formData', this.formData);

      this.subscriptions.college_single_page_store = this.dataService.storeData('college/save_colleges', this.formData).subscribe((res) => {
        console.log('res', res);
        if (res) {
          window.location.reload();
        }
      }),
        (error) => {
        }

    }
    else {
      this.contactForm.invalid;
    }
  }


  navigateBack(prevFormID, currentFormID) {
    $(prevFormID).show();
    $(currentFormID).hide();
  }

  getEventsList()
  {
    this.subscriptions.get_events_list = this.dataService.getListData('college/get_event').subscribe((res) => {
      if (res.result) {
        this.events = res.result;
      }
    }),
      (error) => {
      }
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

