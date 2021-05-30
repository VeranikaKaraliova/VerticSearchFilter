public with sharing class TableController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> tableController() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone
            FROM Contact
        ];
    }
    
}
