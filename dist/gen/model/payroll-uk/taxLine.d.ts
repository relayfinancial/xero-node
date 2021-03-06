export declare class TaxLine {
    /**
    * Xero identifier for payroll tax line
    */
    'taxLineID'?: string;
    /**
    * Tax line description
    */
    'description'?: string;
    /**
    * Identifies if the amount is paid for by the employee or employer. True if employer pays the tax
    */
    'isEmployerTax'?: boolean;
    /**
    * The amount of the tax line
    */
    'amount'?: number;
    /**
    * Tax type ID
    */
    'globalTaxTypeID'?: string;
    /**
    * Identifies if the tax line is a manual adjustment
    */
    'manualAdjustment'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
