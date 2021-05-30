public with sharing class tableContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> tableContact() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone, CreatedDate
            FROM Contact
       ];
    }
}
