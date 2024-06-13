export default class CreateRecord_Without_Apex extends LightningElement {
    // Properties
    accid; // This property will store the ID of the created record
    name = ''; // This property will store the name entered by the user

    // Method to handle the change event on the input field
    hamdelName(event){
        this.name = event.target.value; // Update the 'name' property with the value from the input field
    }

    // Method to handle the click event on the submit button
    handelClick(){
        const fields = {}; // Create an empty object to store field values

        fields[NameField.fieldApiName] = this.name; // Add the 'name' property to the 'fields' object using its API name

        const recordInput = {apiName: AccountObj.objectApiName, fields}; // Create an object with the API name of the object and the fields to be created

        createRecord(recordInput) //wire Addapter
            .then(account => {
                this.accid = account.id; // If the record creation is successful, store the ID in 'accid'
            })
            .catch(error => {
                console.error("error:" + JSON.stringify(error)); // If there's an error, log it to the console
            });
    }
}
