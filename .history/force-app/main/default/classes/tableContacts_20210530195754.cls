public with sharing class tableContacts {
    // @AuraEnabled(cacheable=true)
    // public static List<Contact> getContacts() {
    //     return [
    //         SELECT FirstName, LastName, Email, AccountId, MobilePhone
    //         FROM Contact
    //    ];
    // }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Name, AnnualRevenue, Industry
            FROM Account
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
