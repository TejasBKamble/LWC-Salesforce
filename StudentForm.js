import { LightningElement,track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import STUDENT_OBJECT from '@salesforce/schema/Student__c';
import ACADEMIC_OBJECT from '@salesforce/schema/Academic_Record__c';
import DESIRED_PROGRAMS from '@salesforce/schema/Desired_Program__c';

export default class StudentForm3 extends LightningElement {
    @track studentName = '';
    @track studentEmail = '';
    @track studentMobile = '';
    @track GenderValues='';
    @track CouresValues='';
    @track DepartmentValues='';

    dateOfBarthValue='';
    PersentageTENValue='';
    PersentageTwelveValue='';
    cityNameValue='';
    zipCodeValue='';
    AddressValue='';
    EmergencyContactNameValue='';
    EmergencyPhoneValue='';
    RelationValue='';

    @track InstitutionName = '';
    @track cGPA = '';
    @track startdate;
    @track enddate;
    @track courseType='';
    @track degreeValues='';

    @track DesiredProgramNameValuse='';
    @track CourseNameValues='';
    @track StatusValues='';

    get CourseNameOptions() {
        return [
            { label: 'Aeronautics Engineering', value: 'Aeronautics Engineering' },
            { label: 'IT', value: 'IT' },
            { label: 'Computer engineering', value: 'Computer engineering' },
            { label: 'Electronics Engineering', value: 'Electronics Engineering' },
            { label: 'Chemical Engineering', value: 'Chemical Engineering' }
            
        ];
    }
    // get StatusOptions() {
    //     return [
    //         { label: 'Interested', value: 'Interested' },
    //         { label: 'Applied', value: 'Applied' },
    //         { label: 'Accepted', value: 'Accepted' },
    //         { label: 'Enrolled', value: 'Enrolled' }
            
    //     ];
    // }

     // Student Picllist
    get GenderOptions() {
        return [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Others', value: 'Others' }
            
        ];
    }
    get StudentCouresOptions() {
        return [
            { label: 'C & C++', value: 'C & C++' },
            { label: 'java', value: 'java' },
            { label: 'Python', value: 'Python' },
            { label: 'Salesforce', value: 'Salesforce' },
            { label: 'ServiceNow', value: 'ServiceNow' }
            
        ];
    }
    get DepartmentOptions() {
        return [
            { label: 'Civil', value: 'Civil' },
            { label: 'CS', value: 'CS' },
            { label: 'IT', value: 'IT' },
            { label: 'Electrical', value: 'Electrical' },
            { label: 'Electronic and Telecom', value: 'Electronic and Telecom' },
             { label: 'Mechnical', value: 'Mechnical' }
        ];
    }

    // Student Picllist  Mechnical


    get degreeOptions(){
        return [
            { label: 'Bachelors of science', value: 'Bachelors of science' },
            { label: 'Bachelors of Engineering', value: 'Bachelors of Engineering' },
            { label: 'Bachelors of Art', value: 'Bachelors of Art' },
            { label: 'Bachelors Of Computer Science', value: 'Bachelors Of Computer Science' }
            
        ];

    }
    dateOfBarthChange(event){
        this.dateOfBarthValue=event.target.value;
    }

    PersentageTENChange(event){
        this.PersentageTENValue=event.target.value;

    }

    PersentageTwelveChange(event){
        this.PersentageTwelveValue=event.target.value;

    }

    cityNameChange(event){
        this.cityNameValue=event.target.value;

    }

    zipCodeChange(event){
        this.zipCodeValue=event.target.value;

    }

    AddressChange(event){
        this.AddressValue=event.target.value;

    }

    EmergencyContactNameChange(event){
        this.EmergencyContactNameValue=event.target.value;

    }

    EmergencyPhoneChange(event){
        this.EmergencyPhoneValue=event.target.value;

    }

    RelationChange(event){
        this.RelationValue=event.target.value;

    }

     // StatusOptionChange(event){

    //     this.StatusValues=event.target.value;
    // }

    DesiredProgramNameChange(event){
        this.DesiredProgramNameValuse=event.target.value;
    }

    CourseNameChange(event){

        this.CourseNameValues=event.target.value;
    }

   

    GenderOptionChange(event){
        this.GenderValues=event.target.value;
    }

    CouresStdOptionChange(event){
        this.CouresValues=event.target.value;
    }

    DepartmentOptionChange(event){
        this.DepartmentValues=event.target.value;
    }

    handleStudendNameChange(event){
        this.studentName=event.target.value;
    }

    handleStudendEmailChange(event){
        this.studentEmail=event.target.value;
    }
    handleStudendMobileChange(event){
        this.studentMobile=event.target.value;
    }

    handleInstitutionNameChange(event){
        this.InstitutionName=event.target.value;
    }
    handlecGPAChange(event){
        this.cGPA=event.target.value;
    }
    startdateChange(event){
        this.startdate=event.target.value;
    }
    enddateChange(event){
        this.enddate=event.target.value;
    }
    // coursrOptionChange(event){
    //     this.courseType=event.target.value;
    // }
    degreeOptionChange(event){
        this.degreeValues=event.target.value;
    }

    async handleSave(){
        console.log('Handel Save RUN');

        const studentRecord = {
            apiName: STUDENT_OBJECT.objectApiName,
            fields: {
                Name: this.studentName,
                Email__c:this.studentEmail,
                Mobile_Number__c:this.studentMobile,
                Gender__c:this.GenderValues,
                Department__c:this.DepartmentValues,

                DOB__c:this.dateOfBarthValue,
                Percentage_10th__c:this.PersentageTENValue,
                Percentage_12th__c:this.PersentageTwelveValue,
                Pastal_Zip_Code__c:this.zipCodeValue,
                City__c:this.cityNameValue,
                Emergency_Contact_Name__c:this.EmergencyContactNameValue,
                Emergency_Contact__c:this.EmergencyPhoneValue,
                Relationship__c:this.RelationValue,
                Address__c:this.AddressValue

            }
        };

        const desiredProgram = {
            apiName: DESIRED_PROGRAMS.objectApiName,
            fields: {
                Name:this.DesiredProgramNameValuse,
                 Course_Name__c:this.CourseNameValues,
                // Status__c:this.StatusValues,
               
                Student__c:''
                
            }
        };

        const academicRecord = {
            apiName: ACADEMIC_OBJECT.objectApiName,
            fields: {
                Institution_Name__c: this.InstitutionName,
                cGPA__c:this.cGPA,
                Start_Date__c:this.startdate,
                End_Date__c:this.enddate,
               // Courses_Completed__c:this.courseType,
                Degree__c:this.degreeValues,
                Student__c:''
                
            }
        };

        try {
            console.log('Try Block');
            // Save Account record
            const studentR = await createRecord(studentRecord);
            const StudentID = studentR.id;

            // Associate Contact with Account
            academicRecord.fields.Student__c = StudentID;

            desiredProgram.fields.Student__c=StudentID;

            // Save Contact record
            await createRecord(academicRecord);

           await createRecord(desiredProgram);

            // Reset fields after successful save
               this.studentName = '';
                this.studentEmailValue = '';
                this.studentMobileValue = '';
                this.GenderValues='';
                this.CouresValues='';
                this.DepartmentValues='';
                
                this.dateOfBarthValue='';
                this.PersentageTENValue='';
                this.PersentageTwelveValue='';
                this.cityNameValue='';
                this.zipCodeValue='';
                this.AddressValue='';
                this.EmergencyContactNameValue='';
                this.EmergencyPhoneValue='';
                this.RelationValue='';

                this.InstitutionName = '';
                this.cGPA = '';
                this.startdate='';
                this.enddate='';
                this.courseType='';
                this.degreeValues='';

                this.DesiredProgramNameValuse='';
                this.CourseNameValues='';
                this.StatusValues='';
            

            // Optionally, show success message or navigate to a new page
            console.log('Records saved successfully');
        } catch (error) {
            console.error('Error saving records', error);
            // Handle error appropriately (show error message, log, etc.)
        }

        // Toast Event

        const event = new ShowToastEvent({
            title: 'Thank You',
            message: 'Records saved successfully',
            variant: 'success', // or 'error', 'warning', 'info'
        });
        this.dispatchEvent(event);
        
    }
}
