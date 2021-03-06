"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaxDeclaration {
    static getAttributeTypeMap() {
        return TaxDeclaration.attributeTypeMap;
    }
}
exports.TaxDeclaration = TaxDeclaration;
TaxDeclaration.discriminator = undefined;
TaxDeclaration.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
        "type": "string"
    },
    {
        "name": "employmentBasis",
        "baseName": "EmploymentBasis",
        "type": "EmploymentBasis"
    },
    {
        "name": "tFNExemptionType",
        "baseName": "TFNExemptionType",
        "type": "TFNExemptionType"
    },
    {
        "name": "taxFileNumber",
        "baseName": "TaxFileNumber",
        "type": "string"
    },
    {
        "name": "australianResidentForTaxPurposes",
        "baseName": "AustralianResidentForTaxPurposes",
        "type": "boolean"
    },
    {
        "name": "residencyStatus",
        "baseName": "ResidencyStatus",
        "type": "ResidencyStatus"
    },
    {
        "name": "taxFreeThresholdClaimed",
        "baseName": "TaxFreeThresholdClaimed",
        "type": "boolean"
    },
    {
        "name": "taxOffsetEstimatedAmount",
        "baseName": "TaxOffsetEstimatedAmount",
        "type": "number"
    },
    {
        "name": "hasHELPDebt",
        "baseName": "HasHELPDebt",
        "type": "boolean"
    },
    {
        "name": "hasSFSSDebt",
        "baseName": "HasSFSSDebt",
        "type": "boolean"
    },
    {
        "name": "hasTradeSupportLoanDebt",
        "baseName": "HasTradeSupportLoanDebt",
        "type": "boolean"
    },
    {
        "name": "upwardVariationTaxWithholdingAmount",
        "baseName": "UpwardVariationTaxWithholdingAmount",
        "type": "number"
    },
    {
        "name": "eligibleToReceiveLeaveLoading",
        "baseName": "EligibleToReceiveLeaveLoading",
        "type": "boolean"
    },
    {
        "name": "approvedWithholdingVariationPercentage",
        "baseName": "ApprovedWithholdingVariationPercentage",
        "type": "number"
    },
    {
        "name": "hasStudentStartupLoan",
        "baseName": "HasStudentStartupLoan",
        "type": "boolean"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=taxDeclaration.js.map