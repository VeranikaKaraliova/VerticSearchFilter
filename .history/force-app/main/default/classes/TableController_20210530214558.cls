public with sharing class TableController {
    public static List<Contact> TableController() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone
            FROM Contact
        ];
    }
    
}
