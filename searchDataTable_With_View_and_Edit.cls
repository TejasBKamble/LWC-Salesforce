public with sharing class SearchDataTable {
    
    @AuraEnabled
    public static List<Student__c> getData(string str){
        try {

            string name='%'+str+'%';

            return[SELECT Id, Name, Mobile_Number__c, Email__c,Department__c from Student__c where name like :name];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
