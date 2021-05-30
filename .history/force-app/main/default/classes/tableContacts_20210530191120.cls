public class tableContacts {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT FirstName, LastName, Email, AccountId, MobilePhone, CreatedDate
            FROM Contact
       ];
    }
}