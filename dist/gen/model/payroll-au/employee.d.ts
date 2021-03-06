import { BankAccount } from '././bankAccount';
import { EmployeeStatus } from '././employeeStatus';
import { HomeAddress } from '././homeAddress';
import { LeaveBalance } from '././leaveBalance';
import { LeaveLine } from '././leaveLine';
import { OpeningBalances } from '././openingBalances';
import { PayTemplate } from '././payTemplate';
import { SuperMembership } from '././superMembership';
import { TaxDeclaration } from '././taxDeclaration';
import { ValidationError } from '././validationError';
export declare class Employee {
    /**
    * First name of employee
    */
    'firstName': string;
    /**
    * Last name of employee
    */
    'lastName': string;
    /**
    * Date of birth of the employee (YYYY-MM-DD)
    */
    'dateOfBirth': string;
    'homeAddress'?: HomeAddress;
    /**
    * Start date for an employee (YYYY-MM-DD)
    */
    'startDate'?: string;
    /**
    * Title of the employee
    */
    'title'?: string;
    /**
    * Middle name(s) of the employee
    */
    'middleNames'?: string;
    /**
    * The email address for the employee
    */
    'email'?: string;
    /**
    * The employee’s gender. See Employee Gender
    */
    'gender'?: Employee.GenderEnum;
    /**
    * Employee phone number
    */
    'phone'?: string;
    /**
    * Employee mobile number
    */
    'mobile'?: string;
    /**
    * Employee’s twitter name
    */
    'twitterUserName'?: string;
    /**
    * Authorised to approve other employees\' leave requests
    */
    'isAuthorisedToApproveLeave'?: boolean;
    /**
    * Authorised to approve timesheets
    */
    'isAuthorisedToApproveTimesheets'?: boolean;
    /**
    * JobTitle of the employee
    */
    'jobTitle'?: string;
    /**
    * Employees classification
    */
    'classification'?: string;
    /**
    * Xero unique identifier for earnings rate
    */
    'ordinaryEarningsRateID'?: string;
    /**
    * Xero unique identifier for payroll calendar for the employee
    */
    'payrollCalendarID'?: string;
    /**
    * The Employee Group allows you to report on payroll expenses and liabilities for each group of employees
    */
    'employeeGroupName'?: string;
    /**
    * Xero unique identifier for an Employee
    */
    'employeeID'?: string;
    /**
    * Employee Termination Date (YYYY-MM-DD)
    */
    'terminationDate'?: string;
    'bankAccounts'?: Array<BankAccount>;
    'payTemplate'?: PayTemplate;
    'openingBalances'?: OpeningBalances;
    'taxDeclaration'?: TaxDeclaration;
    'leaveBalances'?: Array<LeaveBalance>;
    'leaveLines'?: Array<LeaveLine>;
    'superMemberships'?: Array<SuperMembership>;
    'status'?: EmployeeStatus;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
export declare namespace Employee {
    enum GenderEnum {
        N,
        M,
        F,
        I
    }
}
