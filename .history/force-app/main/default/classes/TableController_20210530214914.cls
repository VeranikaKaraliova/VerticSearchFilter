public with sharing class TableController {
    public static List<Contact> tableController() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone
            FROM Contact
        ];
    }
    
}
