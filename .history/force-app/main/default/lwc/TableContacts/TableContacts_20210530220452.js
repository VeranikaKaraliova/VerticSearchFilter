import { LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Contact.Mobile';
import CREATED_DATE_FIELD from '@salesforce/schema/Contact.CreatedDate';

import tableController from '@salesforce/apex/TableController.tableController';


const COLUMNS = [
  { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
  { label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
  { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' },
  { label: 'Account Id', fieldName: ACCOUNT_ID_FIELD.fieldApiName, type: 'text' },
  { label: 'Mobile Phone', fieldName: MOBILE_PHONE_FIELD.fieldApiName, type: 'text' },
  { label: 'Create dDate', fieldName: CREATED_DATE_FIELD.fieldApiName, type: 'text' }
];
export default class ContactList extends LightningElement {
  columns = COLUMNS;
  @wire(tableController)
  contact;
}








// export default class TableContacts extends LightningElement {
  // greeting = 'World';
  // changeHandler(event) {
  //   this.greeting = event.target.value;
  // }

  // objectApiName = CONTACT_OBJECT;
  //   fields = [NAME_FIELD, EMAIL_FIELD];
    // handleSuccess(event) {
    //     const toastEvent = new ShowToastEvent({
    //         title: "Cntact created",
    //         message: "Record ID: " + event.detail.id,
    //         variant: "success"
    //     });
    //     this.dispatchEvent(toastEvent);
    // }



// }
