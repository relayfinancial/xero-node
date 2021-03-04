"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Amount {
    static getAttributeTypeMap() {
        return Amount.attributeTypeMap;
    }
}
exports.Amount = Amount;
Amount.discriminator = undefined;
Amount.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "CurrencyCode"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    }
];
//# sourceMappingURL=amount.js.map