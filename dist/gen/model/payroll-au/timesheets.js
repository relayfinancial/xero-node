"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timesheets {
    static getAttributeTypeMap() {
        return Timesheets.attributeTypeMap;
    }
}
exports.Timesheets = Timesheets;
Timesheets.discriminator = undefined;
Timesheets.attributeTypeMap = [
    {
        "name": "timesheets",
        "baseName": "Timesheets",
        "type": "Array<Timesheet>"
    }
];
//# sourceMappingURL=timesheets.js.map