"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeOpeningBalancesObject {
    static getAttributeTypeMap() {
        return EmployeeOpeningBalancesObject.attributeTypeMap;
    }
}
exports.EmployeeOpeningBalancesObject = EmployeeOpeningBalancesObject;
EmployeeOpeningBalancesObject.discriminator = undefined;
EmployeeOpeningBalancesObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "openingBalances",
        "baseName": "openingBalances",
        "type": "EmployeeOpeningBalances"
    }
];
//# sourceMappingURL=employeeOpeningBalancesObject.js.map