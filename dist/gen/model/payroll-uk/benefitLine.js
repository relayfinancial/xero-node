"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BenefitLine {
    static getAttributeTypeMap() {
        return BenefitLine.attributeTypeMap;
    }
}
exports.BenefitLine = BenefitLine;
BenefitLine.discriminator = undefined;
BenefitLine.attributeTypeMap = [
    {
        "name": "benefitTypeID",
        "baseName": "benefitTypeID",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "number"
    }
];
//# sourceMappingURL=benefitLine.js.map