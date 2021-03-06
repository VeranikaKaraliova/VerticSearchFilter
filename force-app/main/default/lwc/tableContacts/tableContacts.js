import { LightningElement, wire } from 'lwc';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import MOBILE_PHONE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import CREATED_DATE_FIELD from '@salesforce/schema/Contact.CreatedDate';

import tableController from '@salesforce/apex/TableController.tableController';


const COLUMNS = [
  { label: 'First Name', fieldName: FIRST_NAME_FIELD.fieldApiName, type: 'text' },
  { label: 'Last Name', fieldName: LAST_NAME_FIELD.fieldApiName, type: 'text' },
  { label: 'Email', fieldName: EMAIL_FIELD.fieldApiName, type: 'email' },
  { label: 'Account Id', fieldName: ACCOUNT_ID_FIELD.fieldApiName, type: 'ID' },
  { label: 'Mobile Phone', fieldName: MOBILE_PHONE_FIELD.fieldApiName, type: 'phone' },
  { label: 'Created Date', fieldName: CREATED_DATE_FIELD.fieldApiName, type: 'datetime' }
];
export default class ContactList extends LightningElement {
  columns = COLUMNS;
  @wire(tableController)
  contact;
}
