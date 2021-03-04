"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CISOrgSettings {
    static getAttributeTypeMap() {
        return CISOrgSettings.attributeTypeMap;
    }
}
exports.CISOrgSettings = CISOrgSettings;
CISOrgSettings.discriminator = undefined;
CISOrgSettings.attributeTypeMap = [
    {
        "name": "cISSettings",
        "baseName": "CISSettings",
        "type": "Array<CISOrgSetting>"
    }
];
//# sourceMappingURL=cISOrgSettings.js.map