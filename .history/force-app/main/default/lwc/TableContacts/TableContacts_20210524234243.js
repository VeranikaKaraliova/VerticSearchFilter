import { LightningElement } from 'lwc';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class TableContacts extends LightningElement {
  // greeting = 'World';
  // changeHandler(event) {
  //   this.greeting = event.target.value;
  // }

  objectApiName = CONTACT_OBJECT;
    fields = [NAME_FIELD, EMAIL_FIELD];
    // handleSuccess(event) {
    //     const toastEvent = new ShowToastEvent({
    //         title: "Cntact created",
    //         message: "Record ID: " + event.detail.id,
    //         variant: "success"
    //     });
    //     this.dispatchEvent(toastEvent);
    // }



}