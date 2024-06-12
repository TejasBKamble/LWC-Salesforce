import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import AccountObj from '@salesforce/schema/Account';
import NameField from '@salesforce/schema/Account.Name';
export default class CreateRecord_Without_Apex extends LightningElement {

    accid;
    name='';

    hamdelName(event){
        this.name=event.target.value;
    }

    handelClick(){

        const fields={};

        fields[NameField.fieldApiName]=this.name;

        console.log("fields:"+JSON.stringify(fields));

        const recordInput={apiName : AccountObj.objectApiName,fields};

        createRecord(recordInput)
        .then(account =>{
            then.accid=account.id;
        })
        .catch(error=>{
            console.error("error:"+JSON.stringify(error))
        })
    }
}