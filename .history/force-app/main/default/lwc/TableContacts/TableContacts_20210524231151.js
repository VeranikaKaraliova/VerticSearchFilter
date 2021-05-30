import { LightningElement } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';


import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';

export default class TableContacts extends LightningElement {
  // greeting = 'World';
  // changeHandler(event) {
  //   this.greeting = event.target.value;
  // }

  public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE AccountId = :accountId
            WITH SECURITY_ENFORCED
       ];
    }
}

  get name() {
    return this.contact.data ? getSObjectValue(this.contact.data, NAME_FIELD) : '';
  }
  get title() {
      return this.contact.data ? getSObjectValue(this.contact.data, TITLE_FIELD) : '';
  }
  get email() {
      return this.contact.data ? getSObjectValue(this.contact.data, EMAIL_FIELD) : '';
  }

}