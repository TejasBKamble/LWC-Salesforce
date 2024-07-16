import { LightningElement } from 'lwc';
import getData from '@salesforce/apex/SearchDataTable.getData';
import {NavigationMixin} from 'lightning/navigation';


const actions = [
    { label:'View', name:'view' },
    { label:'Edit', name:'edit' }
];

const col=[
    {label:'Name',fieldName:'Name'},
    {label:'Mobile_Number',fieldName:'Mobile_Number__c'},
    {label:'Email',fieldName:'Email__c'},
    {label:'Department',fieldName:'Department__c'},

    { type: 'action', typeAttributes: { rowActions: actions } }
    
]

export default class SearchDataTableStudent extends NavigationMixin(LightningElement) {
    columns=col;
    searchValue;
    displayResult;

    connectedCallback() {
        // Load all records initially
        this.ImperativeCall('');
    }

    handelSearch(event){
       console.log("Handel Search RUN");
        this.searchValue = event.target.value;
        this.ImperativeCall(this.searchValue);
    }

    ImperativeCall(searchStr) 
    {
        getData({ str: searchStr })
            .then((result) => {
                console.log('Result ', result);
                this.displayResult = result;
            })
            .catch((error) => {
                console.log('Error Occurred in Search', error);
            });
    }

    handleRowAction(event) {
        console.log('Row Action triggered');
        const actionName = event.detail.action;
        const row = event.detail.row;
    
        console.log('Action:', actionName);
        console.log('Row data:', row);
    
        switch (actionName.name) 
        {
            case 'view':
                console.log('View action triggered');
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        actionName:'view',
                        objectApiName:'Student__c'
                    }
                });
                break;
            case 'edit':
                console.log('Edit action triggered');
                this[NavigationMixin.Navigate]({
                    type:'standard__recordPage',
                    attributes:{
                        recordId:row.Id,
                        actionName:'edit',
                        objectApiName:'Student__c'
                    }
                });
                break;
            default:
                console.log('Unknown action');
                break;
        }
    }

}
