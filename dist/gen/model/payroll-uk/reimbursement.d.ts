export declare class Reimbursement {
    /**
    * Xero unique identifier for a reimbursement
    */
    'reimbursementID'?: string;
    /**
    * Name of the reimbursement
    */
    'name': string;
    /**
    * Xero unique identifier for the account used for the reimbursement
    */
    'accountID': string;
    /**
    * Indicates that whether the reimbursement is active
    */
    'currentRecord'?: boolean;
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
