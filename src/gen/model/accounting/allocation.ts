import { CreditNote } from '././creditNote';
import { Invoice } from '././invoice';
import { Overpayment } from '././overpayment';
import { Prepayment } from '././prepayment';
import { ValidationError } from '././validationError';

export class Allocation {
    'invoice': Invoice;
    'overpayment'?: Overpayment;
    'prepayment'?: Prepayment;
    'creditNote'?: CreditNote;
    /**
    * the amount being applied to the invoice
    */
    'amount': number;
    /**
    * the date the allocation is applied YYYY-MM-DD.
    */
    'date': string;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invoice",
            "baseName": "Invoice",
            "type": "Invoice"
        },
        {
            "name": "overpayment",
            "baseName": "Overpayment",
            "type": "Overpayment"
        },
        {
            "name": "prepayment",
            "baseName": "Prepayment",
            "type": "Prepayment"
        },
        {
            "name": "creditNote",
            "baseName": "CreditNote",
            "type": "CreditNote"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "Date",
            "type": "string"
        },
        {
            "name": "statusAttributeString",
            "baseName": "StatusAttributeString",
            "type": "string"
        },
        {
            "name": "validationErrors",
            "baseName": "ValidationErrors",
            "type": "Array<ValidationError>"
        }    ];

    static getAttributeTypeMap() {
        return Allocation.attributeTypeMap;
    }
}

