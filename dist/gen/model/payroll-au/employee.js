"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static getAttributeTypeMap() {
        return Employee.attributeTypeMap;
    }
}
exports.Employee = Employee;
Employee.discriminator = undefined;
Employee.attributeTypeMap = [
    {
        "name": "firstName",
        "baseName": "FirstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "LastName",
        "type": "string"
    },
    {
        "name": "dateOfBirth",
        "baseName": "DateOfBirth",
        "type": "string"
    },
    {
        "name": "homeAddress",
        "baseName": "HomeAddress",
        "type": "HomeAddress"
    },
    {
        "name": "startDate",
        "baseName": "StartDate",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "Title",
        "type": "string"
    },
    {
        "name": "middleNames",
        "baseName": "MiddleNames",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "Email",
        "type": "string"
    },
    {
        "name": "gender",
        "baseName": "Gender",
        "type": "Employee.GenderEnum"
    },
    {
        "name": "phone",
        "baseName": "Phone",
        "type": "string"
    },
    {
        "name": "mobile",
        "baseName": "Mobile",
        "type": "string"
    },
    {
        "name": "twitterUserName",
        "baseName": "TwitterUserName",
        "type": "string"
    },
    {
        "name": "isAuthorisedToApproveLeave",
        "baseName": "IsAuthorisedToApproveLeave",
        "type": "boolean"
    },
    {
        "name": "isAuthorisedToApproveTimesheets",
        "baseName": "IsAuthorisedToApproveTimesheets",
        "type": "boolean"
    },
    {
        "name": "jobTitle",
        "baseName": "JobTitle",
        "type": "string"
    },
    {
        "name": "classification",
        "baseName": "Classification",
        "type": "string"
    },
    {
        "name": "ordinaryEarningsRateID",
        "baseName": "OrdinaryEarningsRateID",
        "type": "string"
    },
    {
        "name": "payrollCalendarID",
        "baseName": "PayrollCalendarID",
        "type": "string"
    },
    {
        "name": "employeeGroupName",
        "baseName": "EmployeeGroupName",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
        "type": "string"
    },
    {
        "name": "terminationDate",
        "baseName": "TerminationDate",
        "type": "string"
    },
    {
        "name": "bankAccounts",
        "baseName": "BankAccounts",
        "type": "Array<BankAccount>"
    },
    {
        "name": "payTemplate",
        "baseName": "PayTemplate",
        "type": "PayTemplate"
    },
    {
        "name": "openingBalances",
        "baseName": "OpeningBalances",
        "type": "OpeningBalances"
    },
    {
        "name": "taxDeclaration",
        "baseName": "TaxDeclaration",
        "type": "TaxDeclaration"
    },
    {
        "name": "leaveBalances",
        "baseName": "LeaveBalances",
        "type": "Array<LeaveBalance>"
    },
    {
        "name": "leaveLines",
        "baseName": "LeaveLines",
        "type": "Array<LeaveLine>"
    },
    {
        "name": "superMemberships",
        "baseName": "SuperMemberships",
        "type": "Array<SuperMembership>"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "EmployeeStatus"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
(function (Employee) {
    let GenderEnum;
    (function (GenderEnum) {
        GenderEnum[GenderEnum["N"] = 'N'] = "N";
        GenderEnum[GenderEnum["M"] = 'M'] = "M";
        GenderEnum[GenderEnum["F"] = 'F'] = "F";
        GenderEnum[GenderEnum["I"] = 'I'] = "I";
    })(GenderEnum = Employee.GenderEnum || (Employee.GenderEnum = {}));
})(Employee = exports.Employee || (exports.Employee = {}));
//# sourceMappingURL=employee.js.map