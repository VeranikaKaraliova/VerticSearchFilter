public with sharing class tableContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> tableContacts() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone, CreatedDate
            FROM Contact
       ];
    }
}
