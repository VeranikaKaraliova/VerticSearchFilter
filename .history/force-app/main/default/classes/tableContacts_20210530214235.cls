public with sharing class tableContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone
            FROM Contact
       ];
    }
}
