
import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CUSTOMERNAME from '@salesforce/schema/Orders__c.Customer_Name__c';
import WORKERNAME from '@salesforce/schema/Orders__c.Worker_Name__c';
import SERVICEID from '@salesforce/schema/Orders__c.ServiceID__c';
import SERVICEDURATION_IN_HOUR from '@salesforce/schema/Orders__c.Service_duration_in_Hour__c';
import ORDERDATE from '@salesforce/schema/Orders__c.Order_Date__c';
import AMOUNT_PAYABLE from '@salesforce/schema/Orders__c.Amount_Payable__c';


export default class CreateOrder extends LightningElement {
    // objectApiName is "Account" when this component is placed on an account record page
    

    fields = [CUSTOMERNAME, WORKERNAME, SERVICEID,SERVICEDURATION_IN_HOUR,ORDERDATE,AMOUNT_PAYABLE];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}