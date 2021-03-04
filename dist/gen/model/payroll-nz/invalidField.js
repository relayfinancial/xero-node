"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidField {
    static getAttributeTypeMap() {
        return InvalidField.attributeTypeMap;
    }
}
exports.InvalidField = InvalidField;
InvalidField.discriminator = undefined;
InvalidField.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    }
];
//# sourceMappingURL=invalidField.js.map