public with sharing class TableController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> tableController() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone, CreatedDate
            FROM Contact
            ORDER BY LastName
        ];
    }
    
}