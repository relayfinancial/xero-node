
export class Benefit {
    /**
    * unique identifier in Xero
    */
    'id'?: string;
    /**
    * Name of the employer pension
    */
    'name': string;
    /**
    * Category type of the employer pension
    */
    'category': Benefit.CategoryEnum;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId': string;
    /**
    * Xero identifier for Expense Account
    */
    'expenseAccountId': string;
    /**
    * Standard amount of the employer pension
    */
    'standardAmount'?: number;
    /**
    * Percentage of gross of the employer pension
    */
    'percentage': number;
    /**
    * Calculation Type of the employer pension (FixedAmount or PercentageOfGross).
    */
    'calculationType': Benefit.CalculationTypeEnum;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
    /**
    * Identifier of subject To NIC
    */
    'subjectToNIC'?: boolean;
    /**
    * Identifier of subject To pension
    */
    'subjectToPension'?: boolean;
    /**
    * Identifier of subject To Tax
    */
    'subjectToTax'?: boolean;
    /**
    * Identifier of calculating on qualifying earnings
    */
    'isCalculatingOnQualifyingEarnings'?: boolean;
    /**
    * display the balance to employee
    */
    'showBalanceToEmployee'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "Benefit.CategoryEnum"
        },
        {
            "name": "liabilityAccountId",
            "baseName": "liabilityAccountId",
            "type": "string"
        },
        {
            "name": "expenseAccountId",
            "baseName": "expenseAccountId",
            "type": "string"
        },
        {
            "name": "standardAmount",
            "baseName": "standardAmount",
            "type": "number"
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number"
        },
        {
            "name": "calculationType",
            "baseName": "calculationType",
            "type": "Benefit.CalculationTypeEnum"
        },
        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        },
        {
            "name": "subjectToNIC",
            "baseName": "subjectToNIC",
            "type": "boolean"
        },
        {
            "name": "subjectToPension",
            "baseName": "subjectToPension",
            "type": "boolean"
        },
        {
            "name": "subjectToTax",
            "baseName": "subjectToTax",
            "type": "boolean"
        },
        {
            "name": "isCalculatingOnQualifyingEarnings",
            "baseName": "isCalculatingOnQualifyingEarnings",
            "type": "boolean"
        },
        {
            "name": "showBalanceToEmployee",
            "baseName": "showBalanceToEmployee",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Benefit.attributeTypeMap;
    }
}

export namespace Benefit {
    export enum CategoryEnum {
        StakeholderPension = <any> 'StakeholderPension',
        Other = <any> 'Other'
    }
    export enum CalculationTypeEnum {
        FixedAmount = <any> 'FixedAmount',
        PercentageOfGross = <any> 'PercentageOfGross'
    }
}
