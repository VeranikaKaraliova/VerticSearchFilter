// import { LightningElement, wire } from 'lwc';
// import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
// import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
// import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
// import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
// import MOBILE_PHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
// import CREATED_DATE_FIELD from '@salesforce/schema/Contact.CreatedDate';

// import getContacts from '@salesforce/apex/tableContacts.getContacts';


// const COLUMNS = [
//   { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
//   { label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
//   { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'text' }
// ];
// export default class ContactList extends LightningElement {
//   columns = COLUMNS;
//   @wire(getContacts)
//   contact;
// }


import { LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text' },
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getAccounts)
    accounts;
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

