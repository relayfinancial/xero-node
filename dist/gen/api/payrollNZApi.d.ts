/// <reference types="node" />
import http = require('http');
import { Benefit } from '../model/payroll-nz/benefit';
import { Deduction } from '../model/payroll-nz/deduction';
import { DeductionObject } from '../model/payroll-nz/deductionObject';
import { Deductions } from '../model/payroll-nz/deductions';
import { EarningsRate } from '../model/payroll-nz/earningsRate';
import { EarningsRateObject } from '../model/payroll-nz/earningsRateObject';
import { EarningsRates } from '../model/payroll-nz/earningsRates';
import { EarningsTemplate } from '../model/payroll-nz/earningsTemplate';
import { EarningsTemplateObject } from '../model/payroll-nz/earningsTemplateObject';
import { Employee } from '../model/payroll-nz/employee';
import { EmployeeEarningsTemplates } from '../model/payroll-nz/employeeEarningsTemplates';
import { EmployeeLeave } from '../model/payroll-nz/employeeLeave';
import { EmployeeLeaveBalances } from '../model/payroll-nz/employeeLeaveBalances';
import { EmployeeLeaveObject } from '../model/payroll-nz/employeeLeaveObject';
import { EmployeeLeaveSetup } from '../model/payroll-nz/employeeLeaveSetup';
import { EmployeeLeaveSetupObject } from '../model/payroll-nz/employeeLeaveSetupObject';
import { EmployeeLeaveType } from '../model/payroll-nz/employeeLeaveType';
import { EmployeeLeaveTypeObject } from '../model/payroll-nz/employeeLeaveTypeObject';
import { EmployeeLeaveTypes } from '../model/payroll-nz/employeeLeaveTypes';
import { EmployeeLeaves } from '../model/payroll-nz/employeeLeaves';
import { EmployeeObject } from '../model/payroll-nz/employeeObject';
import { EmployeeOpeningBalance } from '../model/payroll-nz/employeeOpeningBalance';
import { EmployeeOpeningBalancesObject } from '../model/payroll-nz/employeeOpeningBalancesObject';
import { EmployeePayTemplates } from '../model/payroll-nz/employeePayTemplates';
import { EmployeeTax } from '../model/payroll-nz/employeeTax';
import { EmployeeTaxObject } from '../model/payroll-nz/employeeTaxObject';
import { Employees } from '../model/payroll-nz/employees';
import { Employment } from '../model/payroll-nz/employment';
import { EmploymentObject } from '../model/payroll-nz/employmentObject';
import { LeavePeriods } from '../model/payroll-nz/leavePeriods';
import { LeaveType } from '../model/payroll-nz/leaveType';
import { LeaveTypeObject } from '../model/payroll-nz/leaveTypeObject';
import { LeaveTypes } from '../model/payroll-nz/leaveTypes';
import { PayRun } from '../model/payroll-nz/payRun';
import { PayRunCalendar } from '../model/payroll-nz/payRunCalendar';
import { PayRunCalendarObject } from '../model/payroll-nz/payRunCalendarObject';
import { PayRunCalendars } from '../model/payroll-nz/payRunCalendars';
import { PayRunObject } from '../model/payroll-nz/payRunObject';
import { PayRuns } from '../model/payroll-nz/payRuns';
import { PaySlip } from '../model/payroll-nz/paySlip';
import { PaySlipObject } from '../model/payroll-nz/paySlipObject';
import { PaySlips } from '../model/payroll-nz/paySlips';
import { PaymentMethod } from '../model/payroll-nz/paymentMethod';
import { PaymentMethodObject } from '../model/payroll-nz/paymentMethodObject';
import { Reimbursement } from '../model/payroll-nz/reimbursement';
import { ReimbursementObject } from '../model/payroll-nz/reimbursementObject';
import { Reimbursements } from '../model/payroll-nz/reimbursements';
import { SalaryAndWage } from '../model/payroll-nz/salaryAndWage';
import { SalaryAndWageObject } from '../model/payroll-nz/salaryAndWageObject';
import { SalaryAndWages } from '../model/payroll-nz/salaryAndWages';
import { Settings } from '../model/payroll-nz/settings';
import { StatutoryDeductionObject } from '../model/payroll-nz/statutoryDeductionObject';
import { StatutoryDeductions } from '../model/payroll-nz/statutoryDeductions';
import { SuperannuationObject } from '../model/payroll-nz/superannuationObject';
import { Superannuations } from '../model/payroll-nz/superannuations';
import { Timesheet } from '../model/payroll-nz/timesheet';
import { TimesheetLine } from '../model/payroll-nz/timesheetLine';
import { TimesheetLineObject } from '../model/payroll-nz/timesheetLineObject';
import { TimesheetObject } from '../model/payroll-nz/timesheetObject';
import { Timesheets } from '../model/payroll-nz/timesheets';
import { TrackingCategories } from '../model/payroll-nz/trackingCategories';
import { Authentication } from '../model/payroll-nz/models';
import { OAuth } from '../model/payroll-nz/models';
export declare enum PayrollNzApiApiKeys {
}
export declare class PayrollNzApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected binaryHeaders: any;
    protected authentications: {
        default: Authentication;
        OAuth2: OAuth;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PayrollNzApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Approves a timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     */
    approveTimesheet(xeroTenantId: string, timesheetID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetObject;
    }>;
    /**
     *
     * @summary Creates a new deduction for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param deduction
     */
    createDeduction(xeroTenantId: string, deduction: Deduction, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeductionObject;
    }>;
    /**
     *
     * @summary Creates a new earnings rate
     * @param xeroTenantId Xero identifier for Tenant
     * @param earningsRate
     */
    createEarningsRate(xeroTenantId: string, earningsRate: EarningsRate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsRateObject;
    }>;
    /**
     *
     * @summary Creates an employees
     * @param xeroTenantId Xero identifier for Tenant
     * @param employee
     */
    createEmployee(xeroTenantId: string, employee: Employee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeObject;
    }>;
    /**
     *
     * @summary Creates earnings template records for an employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param earningsTemplate
     */
    createEmployeeEarningsTemplate(xeroTenantId: string, employeeID: string, earningsTemplate: EarningsTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsTemplateObject;
    }>;
    /**
     *
     * @summary Creates leave records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeLeave
     */
    createEmployeeLeave(xeroTenantId: string, employeeID: string, employeeLeave: EmployeeLeave, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveObject;
    }>;
    /**
     *
     * @summary Creates a leave set-up for a specific employee. This is required before viewing, configuring and requesting leave for an employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeLeaveSetup
     */
    createEmployeeLeaveSetup(xeroTenantId: string, employeeID: string, employeeLeaveSetup: EmployeeLeaveSetup, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveSetupObject;
    }>;
    /**
     *
     * @summary Creates leave type records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeLeaveType
     */
    createEmployeeLeaveType(xeroTenantId: string, employeeID: string, employeeLeaveType: EmployeeLeaveType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveTypeObject;
    }>;
    /**
     *
     * @summary Creates opening balances for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeOpeningBalance
     */
    createEmployeeOpeningBalances(xeroTenantId: string, employeeID: string, employeeOpeningBalance: Array<EmployeeOpeningBalance>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeOpeningBalancesObject;
    }>;
    /**
     *
     * @summary Creates a payment method for an employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param paymentMethod
     */
    createEmployeePaymentMethod(xeroTenantId: string, employeeID: string, paymentMethod: PaymentMethod, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentMethodObject;
    }>;
    /**
     *
     * @summary Creates an employee salary and wage record
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param salaryAndWage
     */
    createEmployeeSalaryAndWage(xeroTenantId: string, employeeID: string, salaryAndWage: SalaryAndWage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SalaryAndWageObject;
    }>;
    /**
     *
     * @summary Creates an employment detail for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employment
     */
    createEmployment(xeroTenantId: string, employeeID: string, employment: Employment, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmploymentObject;
    }>;
    /**
     *
     * @summary Creates a new leave type
     * @param xeroTenantId Xero identifier for Tenant
     * @param leaveType
     */
    createLeaveType(xeroTenantId: string, leaveType: LeaveType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveTypeObject;
    }>;
    /**
     *
     * @summary Creates multiple employee earnings template records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param earningsTemplate
     */
    createMultipleEmployeeEarningsTemplate(xeroTenantId: string, employeeID: string, earningsTemplate: Array<EarningsTemplate>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeEarningsTemplates;
    }>;
    /**
     *
     * @summary Creates a pay run
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRun
     */
    createPayRun(xeroTenantId: string, payRun: PayRun, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunObject;
    }>;
    /**
     *
     * @summary Creates a new payrun calendar
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunCalendar
     */
    createPayRunCalendar(xeroTenantId: string, payRunCalendar: PayRunCalendar, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunCalendarObject;
    }>;
    /**
     *
     * @summary Creates a new reimbursement
     * @param xeroTenantId Xero identifier for Tenant
     * @param reimbursement
     */
    createReimbursement(xeroTenantId: string, reimbursement: Reimbursement, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReimbursementObject;
    }>;
    /**
     *
     * @summary Creates a new superannuation
     * @param xeroTenantId Xero identifier for Tenant
     * @param benefit
     */
    createSuperannuation(xeroTenantId: string, benefit: Benefit, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperannuationObject;
    }>;
    /**
     *
     * @summary Creates a new timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheet
     */
    createTimesheet(xeroTenantId: string, timesheet: Timesheet, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetObject;
    }>;
    /**
     *
     * @summary Create a new timesheet line for a specific time sheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     * @param timesheetLine
     */
    createTimesheetLine(xeroTenantId: string, timesheetID: string, timesheetLine: TimesheetLine, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetLineObject;
    }>;
    /**
     *
     * @summary Deletes an employee\'s earnings template record
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param payTemplateEarningID Id for single pay template earnings object
     */
    deleteEmployeeEarningsTemplate(xeroTenantId: string, employeeID: string, payTemplateEarningID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsTemplateObject;
    }>;
    /**
     *
     * @summary Deletes a leave record for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param leaveID Leave id for single object
     */
    deleteEmployeeLeave(xeroTenantId: string, employeeID: string, leaveID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveObject;
    }>;
    /**
     *
     * @summary Deletes an employee\'s salary and wages record
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param salaryAndWagesID Id for single salary and wages object
     */
    deleteEmployeeSalaryAndWage(xeroTenantId: string, employeeID: string, salaryAndWagesID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SalaryAndWageObject;
    }>;
    /**
     *
     * @summary Deletes a timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     */
    deleteTimesheet(xeroTenantId: string, timesheetID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetLine;
    }>;
    /**
     *
     * @summary Deletes a timesheet line for a specific timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     * @param timesheetLineID Identifier for the timesheet line
     */
    deleteTimesheetLine(xeroTenantId: string, timesheetID: string, timesheetLineID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetLine;
    }>;
    /**
     *
     * @summary Retrieves a single deduction by using a unique deduction ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param deductionId Identifier for the deduction
     */
    getDeduction(xeroTenantId: string, deductionId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DeductionObject;
    }>;
    /**
     *
     * @summary Retrieves deductions for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getDeductions(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Deductions;
    }>;
    /**
     *
     * @summary Retrieves a specific earnings rates by using a unique earnings rate id
     * @param xeroTenantId Xero identifier for Tenant
     * @param earningsRateID Identifier for the earnings rate
     */
    getEarningsRate(xeroTenantId: string, earningsRateID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsRateObject;
    }>;
    /**
     *
     * @summary Retrieves earnings rates
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getEarningsRates(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsRates;
    }>;
    /**
     *
     * @summary Retrieves an employees using a unique employee ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployee(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeObject;
    }>;
    /**
     *
     * @summary Retrieves leave balances for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeeLeaveBalances(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveBalances;
    }>;
    /**
     *
     * @summary Retrieves leave periods for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param startDate Filter by start date
     * @param endDate Filter by end date
     */
    getEmployeeLeavePeriods(xeroTenantId: string, employeeID: string, startDate?: string, endDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeavePeriods;
    }>;
    /**
     *
     * @summary Retrieves leave types for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeeLeaveTypes(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveTypes;
    }>;
    /**
     *
     * @summary Retrieves leave records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeeLeaves(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaves;
    }>;
    /**
     *
     * @summary Retrieves the opening balance for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeeOpeningBalances(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeOpeningBalancesObject;
    }>;
    /**
     *
     * @summary Retrieves pay templates for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeePayTemplates(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeePayTemplates;
    }>;
    /**
     *
     * @summary Retrieves available payment methods for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeePaymentMethod(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentMethodObject;
    }>;
    /**
     *
     * @summary Retrieves an employee\'s salary and wages record by using a unique salary and wage ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param salaryAndWagesID Id for single pay template earnings object
     */
    getEmployeeSalaryAndWage(xeroTenantId: string, employeeID: string, salaryAndWagesID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SalaryAndWages;
    }>;
    /**
     *
     * @summary Retrieves an employee\'s salary and wages
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getEmployeeSalaryAndWages(xeroTenantId: string, employeeID: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SalaryAndWages;
    }>;
    /**
     *
     * @summary Retrieves tax records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeeTax(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeTaxObject;
    }>;
    /**
     *
     * @summary Retrieves employees
     * @param xeroTenantId Xero identifier for Tenant
     * @param firstName Filter by first name
     * @param lastName Filter by last name
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getEmployees(xeroTenantId: string, firstName?: string, lastName?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Retrieves a specific leave type by using a unique leave type ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param leaveTypeID Identifier for the leave type
     */
    getLeaveType(xeroTenantId: string, leaveTypeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveTypeObject;
    }>;
    /**
     *
     * @summary Retrieves leave types
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     * @param activeOnly Filters leave types by active status. By default the API returns all leave types.
     */
    getLeaveTypes(xeroTenantId: string, page?: number, activeOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LeaveTypes;
    }>;
    /**
     *
     * @summary Retrieves a specific pay run by using a unique pay run ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunID Identifier for the pay run
     */
    getPayRun(xeroTenantId: string, payRunID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunObject;
    }>;
    /**
     *
     * @summary Retrieves a specific payrun calendar by using a unique payroll calendar ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param payrollCalendarID Identifier for the payrun calendars
     */
    getPayRunCalendar(xeroTenantId: string, payrollCalendarID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunCalendarObject;
    }>;
    /**
     *
     * @summary Retrieves payrun calendars
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getPayRunCalendars(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunCalendars;
    }>;
    /**
     *
     * @summary Retrieves pay runs
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     * @param status By default get payruns will return all the payruns for an organization. You can add GET https://api.xero.com/payroll.xro/2.0/payRuns?statu&#x3D;{PayRunStatus} to filter the payruns by status.
     */
    getPayRuns(xeroTenantId: string, page?: number, status?: 'Draft' | 'Posted', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRuns;
    }>;
    /**
     *
     * @summary Retrieves a specific payslip by a unique pay slip ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param paySlipID Identifier for the payslip
     */
    getPaySlip(xeroTenantId: string, paySlipID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaySlipObject;
    }>;
    /**
     *
     * @summary Retrieves payslips
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunID PayrunID which specifies the containing payrun of payslips to retrieve. By default, the API does not group payslips by payrun.
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getPaySlips(xeroTenantId: string, payRunID: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaySlips;
    }>;
    /**
     *
     * @summary Retrieves a specific reimbursement by using a unique reimbursement ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param reimbursementID Identifier for the reimbursement
     */
    getReimbursement(xeroTenantId: string, reimbursementID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReimbursementObject;
    }>;
    /**
     *
     * @summary Retrieves reimbursements
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getReimbursements(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Reimbursements;
    }>;
    /**
     *
     * @summary Retrieves settings
     * @param xeroTenantId Xero identifier for Tenant
     */
    getSettings(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Settings;
    }>;
    /**
     *
     * @summary Retrieves a specific statutory deduction by using a unique statutory deductions id
     * @param xeroTenantId Xero identifier for Tenant
     * @param id Identifier for the statutory deduction
     */
    getStatutoryDeduction(xeroTenantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StatutoryDeductionObject;
    }>;
    /**
     *
     * @summary Retrieves statutory deductions
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getStatutoryDeductions(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: StatutoryDeductions;
    }>;
    /**
     *
     * @summary Retrieves a specific superannuation using a unique superannuation ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param superannuationID Identifier for the superannuation
     */
    getSuperannuation(xeroTenantId: string, superannuationID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SuperannuationObject;
    }>;
    /**
     *
     * @summary Retrieves superannuations
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getSuperannuations(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Superannuations;
    }>;
    /**
     *
     * @summary Retrieves a specific timesheet by using a unique timesheet ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     */
    getTimesheet(xeroTenantId: string, timesheetID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetObject;
    }>;
    /**
     *
     * @summary Retrieves timesheets
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     * @param employeeId By default get Timesheets will return the timesheets for all employees in an organization. You can add GET https://…/timesheets?filter&#x3D;employeeId&#x3D;&#x3D;{EmployeeID} to get only the timesheets of a particular employee.
     * @param payrollCalendarId By default get Timesheets will return all the timesheets for an organization. You can add GET https://…/timesheets?filter&#x3D;payrollCalendarId&#x3D;&#x3D;{PayrollCalendarID} to filter the timesheets by payroll calendar id
     */
    getTimesheets(xeroTenantId: string, page?: number, employeeId?: string, payrollCalendarId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Timesheets;
    }>;
    /**
     *
     * @summary Retrieves tracking categories
     * @param xeroTenantId Xero identifier for Tenant
     */
    getTrackingCategories(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Reverts a timesheet to draft
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     */
    revertTimesheet(xeroTenantId: string, timesheetID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetObject;
    }>;
    /**
     *
     * @summary Updates an existing employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employee
     */
    updateEmployee(xeroTenantId: string, employeeID: string, employee: Employee, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeObject;
    }>;
    /**
     *
     * @summary Updates an earnings template records for an employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param payTemplateEarningID Id for single pay template earnings object
     * @param earningsTemplate
     */
    updateEmployeeEarningsTemplate(xeroTenantId: string, employeeID: string, payTemplateEarningID: string, earningsTemplate: EarningsTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsTemplateObject;
    }>;
    /**
     *
     * @summary Updates leave records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param leaveID Leave id for single object
     * @param employeeLeave
     */
    updateEmployeeLeave(xeroTenantId: string, employeeID: string, leaveID: string, employeeLeave: EmployeeLeave, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveObject;
    }>;
    /**
     *
     * @summary Updates an employee\'s salary and wages record
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param salaryAndWagesID Id for single pay template earnings object
     * @param salaryAndWage
     */
    updateEmployeeSalaryAndWage(xeroTenantId: string, employeeID: string, salaryAndWagesID: string, salaryAndWage: SalaryAndWage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SalaryAndWageObject;
    }>;
    /**
     *
     * @summary Updates the tax records for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeTax
     */
    updateEmployeeTax(xeroTenantId: string, employeeID: string, employeeTax: EmployeeTax, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeTaxObject;
    }>;
    /**
     *
     * @summary Updates a pay run
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunID Identifier for the pay run
     * @param payRun
     */
    updatePayRun(xeroTenantId: string, payRunID: string, payRun: PayRun, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayRunObject;
    }>;
    /**
     *
     * @summary Creates an employee pay slip
     * @param xeroTenantId Xero identifier for Tenant
     * @param paySlipID Identifier for the payslip
     * @param paySlip
     */
    updatePaySlipLineItems(xeroTenantId: string, paySlipID: string, paySlip: PaySlip, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaySlipObject;
    }>;
    /**
     *
     * @summary Updates a timesheet line for a specific timesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param timesheetID Identifier for the timesheet
     * @param timesheetLineID Identifier for the timesheet line
     * @param timesheetLine
     */
    updateTimesheetLine(xeroTenantId: string, timesheetID: string, timesheetLineID: string, timesheetLine: TimesheetLine, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimesheetLineObject;
    }>;
}
