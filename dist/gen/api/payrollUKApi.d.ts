/// <reference types="node" />
import http = require('http');
import { Benefit } from '../model/payroll-uk/benefit';
import { BenefitObject } from '../model/payroll-uk/benefitObject';
import { Benefits } from '../model/payroll-uk/benefits';
import { Deduction } from '../model/payroll-uk/deduction';
import { DeductionObject } from '../model/payroll-uk/deductionObject';
import { Deductions } from '../model/payroll-uk/deductions';
import { EarningsOrderObject } from '../model/payroll-uk/earningsOrderObject';
import { EarningsOrders } from '../model/payroll-uk/earningsOrders';
import { EarningsRate } from '../model/payroll-uk/earningsRate';
import { EarningsRateObject } from '../model/payroll-uk/earningsRateObject';
import { EarningsRates } from '../model/payroll-uk/earningsRates';
import { EarningsTemplate } from '../model/payroll-uk/earningsTemplate';
import { EarningsTemplateObject } from '../model/payroll-uk/earningsTemplateObject';
import { Employee } from '../model/payroll-uk/employee';
import { EmployeeLeave } from '../model/payroll-uk/employeeLeave';
import { EmployeeLeaveBalances } from '../model/payroll-uk/employeeLeaveBalances';
import { EmployeeLeaveObject } from '../model/payroll-uk/employeeLeaveObject';
import { EmployeeLeaveType } from '../model/payroll-uk/employeeLeaveType';
import { EmployeeLeaveTypeObject } from '../model/payroll-uk/employeeLeaveTypeObject';
import { EmployeeLeaveTypes } from '../model/payroll-uk/employeeLeaveTypes';
import { EmployeeLeaves } from '../model/payroll-uk/employeeLeaves';
import { EmployeeObject } from '../model/payroll-uk/employeeObject';
import { EmployeeOpeningBalances } from '../model/payroll-uk/employeeOpeningBalances';
import { EmployeeOpeningBalancesObject } from '../model/payroll-uk/employeeOpeningBalancesObject';
import { EmployeePayTemplateObject } from '../model/payroll-uk/employeePayTemplateObject';
import { EmployeePayTemplates } from '../model/payroll-uk/employeePayTemplates';
import { EmployeeStatutoryLeaveBalanceObject } from '../model/payroll-uk/employeeStatutoryLeaveBalanceObject';
import { EmployeeStatutoryLeavesSummaries } from '../model/payroll-uk/employeeStatutoryLeavesSummaries';
import { EmployeeStatutorySickLeave } from '../model/payroll-uk/employeeStatutorySickLeave';
import { EmployeeStatutorySickLeaveObject } from '../model/payroll-uk/employeeStatutorySickLeaveObject';
import { EmployeeTaxObject } from '../model/payroll-uk/employeeTaxObject';
import { Employees } from '../model/payroll-uk/employees';
import { Employment } from '../model/payroll-uk/employment';
import { EmploymentObject } from '../model/payroll-uk/employmentObject';
import { LeavePeriods } from '../model/payroll-uk/leavePeriods';
import { LeaveType } from '../model/payroll-uk/leaveType';
import { LeaveTypeObject } from '../model/payroll-uk/leaveTypeObject';
import { LeaveTypes } from '../model/payroll-uk/leaveTypes';
import { PayRun } from '../model/payroll-uk/payRun';
import { PayRunCalendar } from '../model/payroll-uk/payRunCalendar';
import { PayRunCalendarObject } from '../model/payroll-uk/payRunCalendarObject';
import { PayRunCalendars } from '../model/payroll-uk/payRunCalendars';
import { PayRunObject } from '../model/payroll-uk/payRunObject';
import { PayRuns } from '../model/payroll-uk/payRuns';
import { PaymentMethod } from '../model/payroll-uk/paymentMethod';
import { PaymentMethodObject } from '../model/payroll-uk/paymentMethodObject';
import { PayslipObject } from '../model/payroll-uk/payslipObject';
import { Payslips } from '../model/payroll-uk/payslips';
import { Reimbursement } from '../model/payroll-uk/reimbursement';
import { ReimbursementObject } from '../model/payroll-uk/reimbursementObject';
import { Reimbursements } from '../model/payroll-uk/reimbursements';
import { SalaryAndWage } from '../model/payroll-uk/salaryAndWage';
import { SalaryAndWageObject } from '../model/payroll-uk/salaryAndWageObject';
import { SalaryAndWages } from '../model/payroll-uk/salaryAndWages';
import { Settings } from '../model/payroll-uk/settings';
import { Timesheet } from '../model/payroll-uk/timesheet';
import { TimesheetLine } from '../model/payroll-uk/timesheetLine';
import { TimesheetLineObject } from '../model/payroll-uk/timesheetLineObject';
import { TimesheetObject } from '../model/payroll-uk/timesheetObject';
import { Timesheets } from '../model/payroll-uk/timesheets';
import { TrackingCategories } from '../model/payroll-uk/trackingCategories';
import { Authentication } from '../model/payroll-uk/models';
import { OAuth } from '../model/payroll-uk/models';
export declare enum PayrollUkApiApiKeys {
}
export declare class PayrollUkApi {
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
    setApiKey(key: PayrollUkApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Approves a specific timesheet
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
     * @summary Creates a new employee benefit
     * @param xeroTenantId Xero identifier for Tenant
     * @param benefit
     */
    createBenefit(xeroTenantId: string, benefit: Benefit, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BenefitObject;
    }>;
    /**
     *
     * @summary Creates a new deduction
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
     * @summary Creates employees
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
     * @summary Creates an earnings template records for a specific employee
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
     * @summary Creates employee leave type records
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
     * @summary Creates an opening balance for a specific employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeOpeningBalances
     */
    createEmployeeOpeningBalances(xeroTenantId: string, employeeID: string, employeeOpeningBalances: EmployeeOpeningBalances, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeOpeningBalancesObject;
    }>;
    /**
     *
     * @summary Creates an employee payment method
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
     * @summary Creates a salary and wage record for a specific employee
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
     * @summary Creates statutory sick leave records
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeStatutorySickLeave
     */
    createEmployeeStatutorySickLeave(xeroTenantId: string, employeeStatutorySickLeave: EmployeeStatutorySickLeave, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeStatutorySickLeaveObject;
    }>;
    /**
     *
     * @summary Creates employment detail for a specific employee using a unique employee ID
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
     * @summary Creates multiple earnings template records for a specific employee using a unique employee ID
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
        body: EmployeePayTemplates;
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
     * @summary Creates a new timesheet line for a specific timesheet using a unique timesheet ID
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
     * @summary Deletes a specific employee\'s earnings template record
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
        body?: any;
    }>;
    /**
     *
     * @summary Deletes a specific employee\'s leave record
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
     * @summary Deletes a salary and wages record for a specific employee
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
        body?: any;
    }>;
    /**
     *
     * @summary Deletes a specific timesheet
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
     * @summary Deletes a specific timesheet line
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
     * @summary Retrieves a specific benefit by using a unique benefit ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param id Identifier for the benefit
     */
    getBenefit(xeroTenantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BenefitObject;
    }>;
    /**
     *
     * @summary Retrieves employee benefits
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getBenefits(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Benefits;
    }>;
    /**
     *
     * @summary Retrieves a specific deduction by using a unique deduction ID
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
     * @summary Retrieves deductions
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
     * @summary Retrieves a specific earnings orders by using a unique earnings orders id
     * @param xeroTenantId Xero identifier for Tenant
     * @param id Identifier for the deduction
     */
    getEarningsOrder(xeroTenantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsOrderObject;
    }>;
    /**
     *
     * @summary Retrieves earnings orders
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 100.
     */
    getEarningsOrders(xeroTenantId: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EarningsOrders;
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
     * @summary Retrieves specific employees by using a unique employee ID
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
     * @summary Retrieves a specific employee\'s leave record using a unique employee ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param leaveID Leave id for single object
     */
    getEmployeeLeave(xeroTenantId: string, employeeID: string, leaveID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeLeaveObject;
    }>;
    /**
     *
     * @summary Retrieves a specific employee\'s leave balances using a unique employee ID
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
     * @summary Retrieves a specific employee\'s leave periods using a unique employee ID
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
     * @summary Retrieves a specific employee\'s leave types using a unique employee ID
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
     * @summary Retrieves a specific employee\'s leave records using a unique employee ID
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
     * @summary Retrieves a specific employee\'s openingbalances using a unique employee ID
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
     * @summary Retrieves a specific employee pay templates using a unique employee ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     */
    getEmployeePayTemplate(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeePayTemplateObject;
    }>;
    /**
     *
     * @summary Retrieves a specific employee\'s payment method using a unique employee ID
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
     * @summary Retrieves a specific salary and wages record for a specific employee using a unique salary and wage id
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
     * @summary Retrieves a specific employee\'s salary and wages by using a unique employee ID
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
     * @summary Retrieves a specific employee\'s leave balances using a unique employee ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param leaveType Filter by the type of statutory leave
     * @param asOfDate The date from which to calculate balance remaining. If not specified, current date UTC is used.
     */
    getEmployeeStatutoryLeaveBalances(xeroTenantId: string, employeeID: string, leaveType?: string, asOfDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeStatutoryLeaveBalanceObject;
    }>;
    /**
     *
     * @summary Retrieves a statutory sick leave for an employee
     * @param xeroTenantId Xero identifier for Tenant
     * @param statutorySickLeaveID Statutory sick leave id for single object
     */
    getEmployeeStatutorySickLeave(xeroTenantId: string, statutorySickLeaveID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeStatutorySickLeaveObject;
    }>;
    /**
     *
     * @summary Retrieves tax records for a specific employee using a unique employee ID
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
     * @summary Retrieves a specific payrun calendar by using a unique payrun calendar ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param payRunCalendarID Identifier for the payrun calendars
     */
    getPayRunCalendar(xeroTenantId: string, payRunCalendarID: string, options?: {
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
     * @summary Retrieves a specific payslip by using a unique payslip ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param payslipID Identifier for the payslip
     */
    getPaySlip(xeroTenantId: string, payslipID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PayslipObject;
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
        body: Payslips;
    }>;
    /**
     *
     * @summary Retrieves a specific reimbursement by using a unique reimbursement id
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
     * @summary Retrieves payroll settings
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
     * @summary Retrieves a specific employee\'s summary of statutory leaves using a unique employee ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param activeOnly Filter response with leaves that are currently active or yet to be taken. If not specified, all leaves (past, current, and future scheduled) are returned
     */
    getStatutoryLeaveSummary(xeroTenantId: string, employeeID: string, activeOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeStatutoryLeavesSummaries;
    }>;
    /**
     *
     * @summary Retrieve a specific timesheet by using a unique timesheet ID
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
     * @summary Reverts a specific timesheet to draft
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
     * @summary Updates a specific employee\'s detail
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
     * @summary Updates a specific employee\'s earnings template records
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
     * @summary Updates a specific employee\'s leave records
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
     * @summary Updates a specific employee\'s opening balances
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Employee id for single object
     * @param employeeOpeningBalances
     */
    updateEmployeeOpeningBalances(xeroTenantId: string, employeeID: string, employeeOpeningBalances: EmployeeOpeningBalances, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: EmployeeOpeningBalancesObject;
    }>;
    /**
     *
     * @summary Updates salary and wages record for a specific employee
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
     * @summary Updates a specific pay run
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
     * @summary Updates a specific timesheet line for a specific timesheet
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
