import { EarningsRateCalculationType } from '././earningsRateCalculationType';

export class EarningsLine {
    /**
    * Xero unique id for earnings rate
    */
    'earningsRateID': string;
    'calculationType'?: EarningsRateCalculationType;
    /**
    * Annual salary for earnings line
    */
    'annualSalary'?: number;
    /**
    * number of units for earning line
    */
    'numberOfUnitsPerWeek'?: number;
    /**
    * Rate per unit of the EarningsLine.
    */
    'ratePerUnit'?: number;
    /**
    * Normal number of units for EarningsLine. Applicable when RateType is \"MULTIPLE\"
    */
    'normalNumberOfUnits'?: number;
    /**
    * Earnings rate amount
    */
    'amount'?: number;
    /**
    * Earnings rate number of units.
    */
    'numberOfUnits'?: number;
    /**
    * Earnings rate amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "earningsRateID",
            "baseName": "EarningsRateID",
            "type": "string"
        },
        {
            "name": "calculationType",
            "baseName": "CalculationType",
            "type": "EarningsRateCalculationType"
        },
        {
            "name": "annualSalary",
            "baseName": "AnnualSalary",
            "type": "number"
        },
        {
            "name": "numberOfUnitsPerWeek",
            "baseName": "NumberOfUnitsPerWeek",
            "type": "number"
        },
        {
            "name": "ratePerUnit",
            "baseName": "RatePerUnit",
            "type": "number"
        },
        {
            "name": "normalNumberOfUnits",
            "baseName": "NormalNumberOfUnits",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "numberOfUnits",
            "baseName": "NumberOfUnits",
            "type": "number"
        },
        {
            "name": "fixedAmount",
            "baseName": "FixedAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return EarningsLine.attributeTypeMap;
    }
}

