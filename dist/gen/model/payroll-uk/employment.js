"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employment {
    static getAttributeTypeMap() {
        return Employment.attributeTypeMap;
    }
}
exports.Employment = Employment;
Employment.discriminator = undefined;
Employment.attributeTypeMap = [
    {
        "name": "payrollCalendarID",
        "baseName": "payrollCalendarID",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "employeeNumber",
        "baseName": "employeeNumber",
        "type": "string"
    },
    {
        "name": "niCategory",
        "baseName": "niCategory",
        "type": "Employment.NiCategoryEnum"
    }
];
(function (Employment) {
    let NiCategoryEnum;
    (function (NiCategoryEnum) {
        NiCategoryEnum[NiCategoryEnum["A"] = 'A'] = "A";
        NiCategoryEnum[NiCategoryEnum["B"] = 'B'] = "B";
        NiCategoryEnum[NiCategoryEnum["C"] = 'C'] = "C";
        NiCategoryEnum[NiCategoryEnum["H"] = 'H'] = "H";
        NiCategoryEnum[NiCategoryEnum["J"] = 'J'] = "J";
        NiCategoryEnum[NiCategoryEnum["M"] = 'M'] = "M";
        NiCategoryEnum[NiCategoryEnum["Z"] = 'Z'] = "Z";
        NiCategoryEnum[NiCategoryEnum["X"] = 'X'] = "X";
    })(NiCategoryEnum = Employment.NiCategoryEnum || (Employment.NiCategoryEnum = {}));
})(Employment = exports.Employment || (exports.Employment = {}));
//# sourceMappingURL=employment.js.map