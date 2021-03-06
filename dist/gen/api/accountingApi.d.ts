/// <reference types="node" />
import http = require('http');
import fs = require('fs');
import { Account } from '../model/accounting/account';
import { Accounts } from '../model/accounting/accounts';
import { Actions } from '../model/accounting/actions';
import { Allocations } from '../model/accounting/allocations';
import { Attachments } from '../model/accounting/attachments';
import { BankTransactions } from '../model/accounting/bankTransactions';
import { BankTransfers } from '../model/accounting/bankTransfers';
import { BatchPayments } from '../model/accounting/batchPayments';
import { BrandingThemes } from '../model/accounting/brandingThemes';
import { CISOrgSettings } from '../model/accounting/cISOrgSettings';
import { CISSettings } from '../model/accounting/cISSettings';
import { ContactGroups } from '../model/accounting/contactGroups';
import { Contacts } from '../model/accounting/contacts';
import { CreditNotes } from '../model/accounting/creditNotes';
import { Currencies } from '../model/accounting/currencies';
import { Currency } from '../model/accounting/currency';
import { Employees } from '../model/accounting/employees';
import { ExpenseClaims } from '../model/accounting/expenseClaims';
import { HistoryRecords } from '../model/accounting/historyRecords';
import { ImportSummaryObject } from '../model/accounting/importSummaryObject';
import { InvoiceReminders } from '../model/accounting/invoiceReminders';
import { Invoices } from '../model/accounting/invoices';
import { Items } from '../model/accounting/items';
import { Journals } from '../model/accounting/journals';
import { LinkedTransaction } from '../model/accounting/linkedTransaction';
import { LinkedTransactions } from '../model/accounting/linkedTransactions';
import { ManualJournals } from '../model/accounting/manualJournals';
import { OnlineInvoices } from '../model/accounting/onlineInvoices';
import { Organisations } from '../model/accounting/organisations';
import { Overpayments } from '../model/accounting/overpayments';
import { Payment } from '../model/accounting/payment';
import { PaymentDelete } from '../model/accounting/paymentDelete';
import { PaymentService } from '../model/accounting/paymentService';
import { PaymentServices } from '../model/accounting/paymentServices';
import { Payments } from '../model/accounting/payments';
import { Prepayments } from '../model/accounting/prepayments';
import { PurchaseOrders } from '../model/accounting/purchaseOrders';
import { Quotes } from '../model/accounting/quotes';
import { Receipts } from '../model/accounting/receipts';
import { RepeatingInvoices } from '../model/accounting/repeatingInvoices';
import { ReportWithRows } from '../model/accounting/reportWithRows';
import { Reports } from '../model/accounting/reports';
import { RequestEmpty } from '../model/accounting/requestEmpty';
import { Setup } from '../model/accounting/setup';
import { TaxRates } from '../model/accounting/taxRates';
import { TrackingCategories } from '../model/accounting/trackingCategories';
import { TrackingCategory } from '../model/accounting/trackingCategory';
import { TrackingOption } from '../model/accounting/trackingOption';
import { TrackingOptions } from '../model/accounting/trackingOptions';
import { Users } from '../model/accounting/users';
import { Authentication } from '../model/accounting/models';
import { OAuth } from '../model/accounting/models';
export declare enum AccountingApiApiKeys {
}
export declare class AccountingApi {
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
    setApiKey(key: AccountingApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Creates a new chart of accounts
     * @param xeroTenantId Xero identifier for Tenant
     * @param account Account object in body of request
     */
    createAccount(xeroTenantId: string, account: Account, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Accounts;
    }>;
    /**
     *
     * @summary Creates an attachment on a specific account
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for Account object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    createAccountAttachmentByFileName(xeroTenantId: string, accountID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates an attachment for a specific bank transaction by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param fileName The name of the file being attached
     * @param body Byte array of file in body of request
     */
    createBankTransactionAttachmentByFileName(xeroTenantId: string, bankTransactionID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific bank transactions
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createBankTransactionHistoryRecord(xeroTenantId: string, bankTransactionID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more spent or received money transaction
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactions BankTransactions with an array of BankTransaction objects in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    createBankTransactions(xeroTenantId: string, bankTransactions: BankTransactions, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransactions;
    }>;
    /**
     *
     * @summary Creates a bank transfer
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransfers BankTransfers with array of BankTransfer objects in request body
     */
    createBankTransfer(xeroTenantId: string, bankTransfers: BankTransfers, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransfers;
    }>;
    /**
     *
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     * @param fileName The name of the file being attached to a Bank Transfer
     * @param body Byte array of file in body of request
     */
    createBankTransferAttachmentByFileName(xeroTenantId: string, bankTransferID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific bank transfer
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createBankTransferHistoryRecord(xeroTenantId: string, bankTransferID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or many batch payments for invoices
     * @param xeroTenantId Xero identifier for Tenant
     * @param batchPayments BatchPayments with an array of Payments in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createBatchPayment(xeroTenantId: string, batchPayments: BatchPayments, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchPayments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific batch payment
     * @param xeroTenantId Xero identifier for Tenant
     * @param batchPaymentID Unique identifier for BatchPayment
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createBatchPaymentHistoryRecord(xeroTenantId: string, batchPaymentID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates a new custom payment service for a specific branding theme
     * @param xeroTenantId Xero identifier for Tenant
     * @param brandingThemeID Unique identifier for a Branding Theme
     * @param paymentService PaymentService object in body of request
     */
    createBrandingThemePaymentServices(xeroTenantId: string, brandingThemeID: string, paymentService: PaymentService, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentServices;
    }>;
    /**
     *
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param fileName Name for the file you are attaching
     * @param body Byte array of file in body of request
     */
    createContactAttachmentByFileName(xeroTenantId: string, contactID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a contact group
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroups ContactGroups with an array of names in request body
     */
    createContactGroup(xeroTenantId: string, contactGroups: ContactGroups, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactGroups;
    }>;
    /**
     *
     * @summary Creates contacts to a specific contact group
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroupID Unique identifier for a Contact Group
     * @param contacts Contacts with array of contacts specifying the ContactID to be added to ContactGroup in body of request
     */
    createContactGroupContacts(xeroTenantId: string, contactGroupID: string, contacts: Contacts, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Creates a new history record for a specific contact
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createContactHistory(xeroTenantId: string, contactID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates multiple contacts (bulk) in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contacts Contacts with an array of Contact objects to create in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createContacts(xeroTenantId: string, contacts: Contacts, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Creates allocation for a specific credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param allocations Allocations with array of Allocation object in body of request.
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createCreditNoteAllocation(xeroTenantId: string, creditNoteID: string, allocations: Allocations, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Allocations;
    }>;
    /**
     *
     * @summary Creates an attachment for a specific credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param fileName Name of the file you are attaching to Credit Note
     * @param body Byte array of file in body of request
     * @param includeOnline Allows an attachment to be seen by the end customer within their online invoice
     */
    createCreditNoteAttachmentByFileName(xeroTenantId: string, creditNoteID: string, fileName: string, body: fs.ReadStream, includeOnline?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createCreditNoteHistory(xeroTenantId: string, creditNoteID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates a new credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNotes Credit Notes with array of CreditNote object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    createCreditNotes(xeroTenantId: string, creditNotes: CreditNotes, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreditNotes;
    }>;
    /**
     *
     * @summary Create a new currency for a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param currency Currency object in the body of request
     */
    createCurrency(xeroTenantId: string, currency: Currency, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Currencies;
    }>;
    /**
     *
     * @summary Creates new employees used in Xero payrun
     * @param xeroTenantId Xero identifier for Tenant
     * @param employees Employees with array of Employee object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createEmployees(xeroTenantId: string, employees: Employees, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Creates a history record for a specific expense claim
     * @param xeroTenantId Xero identifier for Tenant
     * @param expenseClaimID Unique identifier for a ExpenseClaim
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createExpenseClaimHistory(xeroTenantId: string, expenseClaimID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates expense claims
     * @param xeroTenantId Xero identifier for Tenant
     * @param expenseClaims ExpenseClaims with array of ExpenseClaim object in body of request
     */
    createExpenseClaims(xeroTenantId: string, expenseClaims: ExpenseClaims, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseClaims;
    }>;
    /**
     *
     * @summary Creates an attachment for a specific invoice or purchase bill by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param fileName Name of the file you are attaching
     * @param body Byte array of file in body of request
     * @param includeOnline Allows an attachment to be seen by the end customer within their online invoice
     */
    createInvoiceAttachmentByFileName(xeroTenantId: string, invoiceID: string, fileName: string, body: fs.ReadStream, includeOnline?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createInvoiceHistory(xeroTenantId: string, invoiceID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more sales invoices or purchase bills
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoices Invoices with an array of invoice objects in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    createInvoices(xeroTenantId: string, invoices: Invoices, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invoices;
    }>;
    /**
     *
     * @summary Creates a history record for a specific item
     * @param xeroTenantId Xero identifier for Tenant
     * @param itemID Unique identifier for an Item
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createItemHistory(xeroTenantId: string, itemID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more items
     * @param xeroTenantId Xero identifier for Tenant
     * @param items Items with an array of Item objects in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    createItems(xeroTenantId: string, items: Items, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Items;
    }>;
    /**
     *
     * @summary Creates linked transactions (billable expenses)
     * @param xeroTenantId Xero identifier for Tenant
     * @param linkedTransaction LinkedTransaction object in body of request
     */
    createLinkedTransaction(xeroTenantId: string, linkedTransaction: LinkedTransaction, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkedTransactions;
    }>;
    /**
     *
     * @summary Creates a specific attachment for a specific manual journal by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     * @param fileName The name of the file being attached to a ManualJournal
     * @param body Byte array of file in body of request
     */
    createManualJournalAttachmentByFileName(xeroTenantId: string, manualJournalID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Xero generated unique identifier for a manual journal
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createManualJournalHistoryRecord(xeroTenantId: string, manualJournalID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more manual journals
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournals ManualJournals array with ManualJournal object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createManualJournals(xeroTenantId: string, manualJournals: ManualJournals, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ManualJournals;
    }>;
    /**
     *
     * @summary Creates a single allocation for a specific overpayment
     * @param xeroTenantId Xero identifier for Tenant
     * @param overpaymentID Unique identifier for a Overpayment
     * @param allocations Allocations array with Allocation object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createOverpaymentAllocations(xeroTenantId: string, overpaymentID: string, allocations: Allocations, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Allocations;
    }>;
    /**
     *
     * @summary Creates a history record for a specific overpayment
     * @param xeroTenantId Xero identifier for Tenant
     * @param overpaymentID Unique identifier for a Overpayment
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createOverpaymentHistory(xeroTenantId: string, overpaymentID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates a single payment for invoice or credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param payment Request body with a single Payment object
     */
    createPayment(xeroTenantId: string, payment: Payment, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Payments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific payment
     * @param xeroTenantId Xero identifier for Tenant
     * @param paymentID Unique identifier for a Payment
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createPaymentHistory(xeroTenantId: string, paymentID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates a payment service
     * @param xeroTenantId Xero identifier for Tenant
     * @param paymentServices PaymentServices array with PaymentService object in body of request
     */
    createPaymentService(xeroTenantId: string, paymentServices: PaymentServices, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentServices;
    }>;
    /**
     *
     * @summary Creates multiple payments for invoices or credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param payments Payments array with Payment object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createPayments(xeroTenantId: string, payments: Payments, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Payments;
    }>;
    /**
     *
     * @summary Allows you to create an Allocation for prepayments
     * @param xeroTenantId Xero identifier for Tenant
     * @param prepaymentID Unique identifier for Prepayment
     * @param allocations Allocations with an array of Allocation object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createPrepaymentAllocations(xeroTenantId: string, prepaymentID: string, allocations: Allocations, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Allocations;
    }>;
    /**
     *
     * @summary Creates a history record for a specific prepayment
     * @param xeroTenantId Xero identifier for Tenant
     * @param prepaymentID Unique identifier for a PrePayment
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createPrepaymentHistory(xeroTenantId: string, prepaymentID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates attachment for a specific purchase order
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for Purchase Order object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    createPurchaseOrderAttachmentByFileName(xeroTenantId: string, purchaseOrderID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific purchase orders
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for a PurchaseOrder
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createPurchaseOrderHistory(xeroTenantId: string, purchaseOrderID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more purchase orders
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrders PurchaseOrders with an array of PurchaseOrder object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createPurchaseOrders(xeroTenantId: string, purchaseOrders: PurchaseOrders, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Creates attachment for a specific quote
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for Quote object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    createQuoteAttachmentByFileName(xeroTenantId: string, quoteID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific quote
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for an Quote
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createQuoteHistory(xeroTenantId: string, quoteID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Create one or more quotes
     * @param xeroTenantId Xero identifier for Tenant
     * @param quotes Quotes with an array of Quote object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    createQuotes(xeroTenantId: string, quotes: Quotes, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Quotes;
    }>;
    /**
     *
     * @summary Creates draft expense claim receipts for any user
     * @param xeroTenantId Xero identifier for Tenant
     * @param receipts Receipts with an array of Receipt object in body of request
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    createReceipt(xeroTenantId: string, receipts: Receipts, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Receipts;
    }>;
    /**
     *
     * @summary Creates an attachment on a specific expense claim receipts by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param fileName The name of the file being attached to the Receipt
     * @param body Byte array of file in body of request
     */
    createReceiptAttachmentByFileName(xeroTenantId: string, receiptID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a history record for a specific receipt
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createReceiptHistory(xeroTenantId: string, receiptID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates an attachment from a specific repeating invoices by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     * @param fileName The name of the file being attached to a Repeating Invoice
     * @param body Byte array of file in body of request
     */
    createRepeatingInvoiceAttachmentByFileName(xeroTenantId: string, repeatingInvoiceID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Creates a  history record for a specific repeating invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     * @param historyRecords HistoryRecords containing an array of HistoryRecord objects in body of request
     */
    createRepeatingInvoiceHistory(xeroTenantId: string, repeatingInvoiceID: string, historyRecords: HistoryRecords, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Creates one or more tax rates
     * @param xeroTenantId Xero identifier for Tenant
     * @param taxRates TaxRates array with TaxRate object in body of request
     */
    createTaxRates(xeroTenantId: string, taxRates: TaxRates, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TaxRates;
    }>;
    /**
     *
     * @summary Create tracking categories
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategory TrackingCategory object in body of request
     */
    createTrackingCategory(xeroTenantId: string, trackingCategory: TrackingCategory, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Creates options for a specific tracking category
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     * @param trackingOption TrackingOption object in body of request
     */
    createTrackingOptions(xeroTenantId: string, trackingCategoryID: string, trackingOption: TrackingOption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingOptions;
    }>;
    /**
     *
     * @summary Deletes a chart of accounts
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for retrieving single object
     */
    deleteAccount(xeroTenantId: string, accountID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Accounts;
    }>;
    /**
     *
     * @summary Deletes a specific contact from a contact group using a unique contact Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroupID Unique identifier for a Contact Group
     * @param contactID Unique identifier for a Contact
     */
    deleteContactGroupContact(xeroTenantId: string, contactGroupID: string, contactID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Deletes all contacts from a specific contact group
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroupID Unique identifier for a Contact Group
     */
    deleteContactGroupContacts(xeroTenantId: string, contactGroupID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Deletes a specific item
     * @param xeroTenantId Xero identifier for Tenant
     * @param itemID Unique identifier for an Item
     */
    deleteItem(xeroTenantId: string, itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Deletes a specific linked transactions (billable expenses)
     * @param xeroTenantId Xero identifier for Tenant
     * @param linkedTransactionID Unique identifier for a LinkedTransaction
     */
    deleteLinkedTransaction(xeroTenantId: string, linkedTransactionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Updates a specific payment for invoices and credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param paymentID Unique identifier for a Payment
     * @param paymentDelete
     */
    deletePayment(xeroTenantId: string, paymentID: string, paymentDelete: PaymentDelete, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Payments;
    }>;
    /**
     *
     * @summary Deletes a specific tracking category
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     */
    deleteTrackingCategory(xeroTenantId: string, trackingCategoryID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Deletes a specific option for a specific tracking category
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     * @param trackingOptionID Unique identifier for a Tracking Option
     */
    deleteTrackingOptions(xeroTenantId: string, trackingCategoryID: string, trackingOptionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingOptions;
    }>;
    /**
     *
     * @summary Sends a copy of a specific invoice to related contact via email
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param requestEmpty
     */
    emailInvoice(xeroTenantId: string, invoiceID: string, requestEmpty: RequestEmpty, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     *
     * @summary Retrieves a single chart of accounts by using a unique account Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for retrieving single object
     */
    getAccount(xeroTenantId: string, accountID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Accounts;
    }>;
    /**
     *
     * @summary Retrieves an attachment for a specific account by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for Account object
     * @param fileName Name of the attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getAccountAttachmentByFileName(xeroTenantId: string, accountID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific account using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for Account object
     * @param attachmentID Unique identifier for Attachment object
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getAccountAttachmentById(xeroTenantId: string, accountID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific accounts by using a unique account Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for Account object
     */
    getAccountAttachments(xeroTenantId: string, accountID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves the full chart of accounts
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getAccounts(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Accounts;
    }>;
    /**
     *
     * @summary Retrieves a single spent or received money transaction by using a unique bank transaction Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getBankTransaction(xeroTenantId: string, bankTransactionID: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransactions;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific bank transaction by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param fileName The name of the file being attached
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getBankTransactionAttachmentByFileName(xeroTenantId: string, bankTransactionID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves specific attachments from a specific BankTransaction using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param attachmentID Xero generated unique identifier for an attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getBankTransactionAttachmentById(xeroTenantId: string, bankTransactionID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves any attachments from a specific bank transactions
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     */
    getBankTransactionAttachments(xeroTenantId: string, bankTransactionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves any spent or received money transactions
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page Up to 100 bank transactions will be returned in a single API call with line items details
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getBankTransactions(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransactions;
    }>;
    /**
     *
     * @summary Retrieves history from a specific bank transaction using a unique bank transaction Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     */
    getBankTransactionsHistory(xeroTenantId: string, bankTransactionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves specific bank transfers by using a unique bank transfer Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     */
    getBankTransfer(xeroTenantId: string, bankTransferID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransfers;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment on a specific bank transfer by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     * @param fileName The name of the file being attached to a Bank Transfer
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getBankTransferAttachmentByFileName(xeroTenantId: string, bankTransferID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific bank transfer using a unique attachment ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     * @param attachmentID Xero generated unique identifier for an Attachment to a bank transfer
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getBankTransferAttachmentById(xeroTenantId: string, bankTransferID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments from a specific bank transfer
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     */
    getBankTransferAttachments(xeroTenantId: string, bankTransferID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history from a specific bank transfer using a unique bank transfer Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     */
    getBankTransferHistory(xeroTenantId: string, bankTransferID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves all bank transfers
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getBankTransfers(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransfers;
    }>;
    /**
     *
     * @summary Retrieves history from a specific batch payment
     * @param xeroTenantId Xero identifier for Tenant
     * @param batchPaymentID Unique identifier for BatchPayment
     */
    getBatchPaymentHistory(xeroTenantId: string, batchPaymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves either one or many batch payments for invoices
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getBatchPayments(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BatchPayments;
    }>;
    /**
     *
     * @summary Retrieves a specific branding theme using a unique branding theme Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param brandingThemeID Unique identifier for a Branding Theme
     */
    getBrandingTheme(xeroTenantId: string, brandingThemeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BrandingThemes;
    }>;
    /**
     *
     * @summary Retrieves the payment services for a specific branding theme
     * @param xeroTenantId Xero identifier for Tenant
     * @param brandingThemeID Unique identifier for a Branding Theme
     */
    getBrandingThemePaymentServices(xeroTenantId: string, brandingThemeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentServices;
    }>;
    /**
     *
     * @summary Retrieves all the branding themes
     * @param xeroTenantId Xero identifier for Tenant
     */
    getBrandingThemes(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BrandingThemes;
    }>;
    /**
     *
     * @summary Retrieves a specific contacts in a Xero organisation using a unique contact Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     */
    getContact(xeroTenantId: string, contactID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific contact by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param fileName Name for the file you are attaching
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getContactAttachmentByFileName(xeroTenantId: string, contactID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific contact using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param attachmentID Unique identifier for a Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getContactAttachmentById(xeroTenantId: string, contactID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific contact in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     */
    getContactAttachments(xeroTenantId: string, contactID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves a specific contact by contact number in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactNumber This field is read only on the Xero contact screen, used to identify contacts in external systems (max length &#x3D; 50).
     */
    getContactByContactNumber(xeroTenantId: string, contactNumber: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Retrieves CIS settings for a specific contact in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     */
    getContactCISSettings(xeroTenantId: string, contactID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CISSettings;
    }>;
    /**
     *
     * @summary Retrieves a specific contact group by using a unique contact group Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroupID Unique identifier for a Contact Group
     */
    getContactGroup(xeroTenantId: string, contactGroupID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactGroups;
    }>;
    /**
     *
     * @summary Retrieves the contact Id and name of all the contacts in a contact group
     * @param xeroTenantId Xero identifier for Tenant
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getContactGroups(xeroTenantId: string, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactGroups;
    }>;
    /**
     *
     * @summary Retrieves history records for a specific contact
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     */
    getContactHistory(xeroTenantId: string, contactID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves all contacts in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param iDs Filter by a comma separated list of ContactIDs. Allows you to retrieve a specific set of contacts in a single call.
     * @param page e.g. page&#x3D;1 - Up to 100 contacts will be returned in a single API call.
     * @param includeArchived e.g. includeArchived&#x3D;true - Contacts with a status of ARCHIVED will be included in the response
     */
    getContacts(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, iDs?: Array<string>, page?: number, includeArchived?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Retrieves a specific credit note using a unique credit note Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getCreditNote(xeroTenantId: string, creditNoteID: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreditNotes;
    }>;
    /**
     *
     * @summary Retrieves credit notes as PDF files
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     */
    getCreditNoteAsPdf(xeroTenantId: string, creditNoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment on a specific credit note by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param fileName Name of the file you are attaching to Credit Note
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getCreditNoteAttachmentByFileName(xeroTenantId: string, creditNoteID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific credit note using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param attachmentID Unique identifier for a Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getCreditNoteAttachmentById(xeroTenantId: string, creditNoteID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     */
    getCreditNoteAttachments(xeroTenantId: string, creditNoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     */
    getCreditNoteHistory(xeroTenantId: string, creditNoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves any credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 credit notes will be returned in a single API call with line items shown for each credit note
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getCreditNotes(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreditNotes;
    }>;
    /**
     *
     * @summary Retrieves currencies for your Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getCurrencies(xeroTenantId: string, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Currencies;
    }>;
    /**
     *
     * @summary Retrieves a specific employee used in Xero payrun using a unique employee Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param employeeID Unique identifier for a Employee
     */
    getEmployee(xeroTenantId: string, employeeID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Retrieves employees used in Xero payrun
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getEmployees(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Retrieves a specific expense claim using a unique expense claim Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param expenseClaimID Unique identifier for a ExpenseClaim
     */
    getExpenseClaim(xeroTenantId: string, expenseClaimID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseClaims;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific expense claim
     * @param xeroTenantId Xero identifier for Tenant
     * @param expenseClaimID Unique identifier for a ExpenseClaim
     */
    getExpenseClaimHistory(xeroTenantId: string, expenseClaimID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves expense claims
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getExpenseClaims(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseClaims;
    }>;
    /**
     *
     * @summary Retrieves a specific sales invoice or purchase bill using a unique invoice Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getInvoice(xeroTenantId: string, invoiceID: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invoices;
    }>;
    /**
     *
     * @summary Retrieves invoices or purchase bills as PDF files
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     */
    getInvoiceAsPdf(xeroTenantId: string, invoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves an attachment from a specific invoice or purchase bill by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param fileName Name of the file you are attaching
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getInvoiceAttachmentByFileName(xeroTenantId: string, invoiceID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific invoices or purchase bills by using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param attachmentID Unique identifier for an Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getInvoiceAttachmentById(xeroTenantId: string, invoiceID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific invoice or purchase bill
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     */
    getInvoiceAttachments(xeroTenantId: string, invoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history records for a specific invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     */
    getInvoiceHistory(xeroTenantId: string, invoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves invoice reminder settings
     * @param xeroTenantId Xero identifier for Tenant
     */
    getInvoiceReminders(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InvoiceReminders;
    }>;
    /**
     *
     * @summary Retrieves sales invoices or purchase bills
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param iDs Filter by a comma-separated list of InvoicesIDs.
     * @param invoiceNumbers Filter by a comma-separated list of InvoiceNumbers.
     * @param contactIDs Filter by a comma-separated list of ContactIDs.
     * @param statuses Filter by a comma-separated list Statuses. For faster response times we recommend using these explicit parameters instead of passing OR conditions into the Where filter.
     * @param page e.g. page&#x3D;1 – Up to 100 invoices will be returned in a single API call with line items shown for each invoice
     * @param includeArchived e.g. includeArchived&#x3D;true - Contacts with a status of ARCHIVED will be included in the response
     * @param createdByMyApp When set to true you\&#39;ll only retrieve Invoices created by your app
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getInvoices(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, iDs?: Array<string>, invoiceNumbers?: Array<string>, contactIDs?: Array<string>, statuses?: Array<string>, page?: number, includeArchived?: boolean, createdByMyApp?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invoices;
    }>;
    /**
     *
     * @summary Retrieves a specific item using a unique item Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param itemID Unique identifier for an Item
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getItem(xeroTenantId: string, itemID: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Items;
    }>;
    /**
     *
     * @summary Retrieves history for a specific item
     * @param xeroTenantId Xero identifier for Tenant
     * @param itemID Unique identifier for an Item
     */
    getItemHistory(xeroTenantId: string, itemID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves items
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getItems(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Items;
    }>;
    /**
     *
     * @summary Retrieves a specific journal using a unique journal Id.
     * @param xeroTenantId Xero identifier for Tenant
     * @param journalID Unique identifier for a Journal
     */
    getJournal(xeroTenantId: string, journalID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Journals;
    }>;
    /**
     *
     * @summary Retrieves journals
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param offset Offset by a specified journal number. e.g. journals with a JournalNumber greater than the offset will be returned
     * @param paymentsOnly Filter to retrieve journals on a cash basis. Journals are returned on an accrual basis by default.
     */
    getJournals(xeroTenantId: string, ifModifiedSince?: Date, offset?: number, paymentsOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Journals;
    }>;
    /**
     *
     * @summary Retrieves a specific linked transaction (billable expenses) using a unique linked transaction Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param linkedTransactionID Unique identifier for a LinkedTransaction
     */
    getLinkedTransaction(xeroTenantId: string, linkedTransactionID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkedTransactions;
    }>;
    /**
     *
     * @summary Retrieves linked transactions (billable expenses)
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Up to 100 linked transactions will be returned in a single API call. Use the page parameter to specify the page to be returned e.g. page&#x3D;1.
     * @param linkedTransactionID The Xero identifier for an Linked Transaction
     * @param sourceTransactionID Filter by the SourceTransactionID. Get the linked transactions created from a particular ACCPAY invoice
     * @param contactID Filter by the ContactID. Get all the linked transactions that have been assigned to a particular customer.
     * @param status Filter by the combination of ContactID and Status. Get  the linked transactions associated to a  customer and with a status
     * @param targetTransactionID Filter by the TargetTransactionID. Get all the linked transactions allocated to a particular ACCREC invoice
     */
    getLinkedTransactions(xeroTenantId: string, page?: number, linkedTransactionID?: string, sourceTransactionID?: string, contactID?: string, status?: string, targetTransactionID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkedTransactions;
    }>;
    /**
     *
     * @summary Retrieves a specific manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     */
    getManualJournal(xeroTenantId: string, manualJournalID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ManualJournals;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific manual journal by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     * @param fileName The name of the file being attached to a ManualJournal
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getManualJournalAttachmentByFileName(xeroTenantId: string, manualJournalID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Allows you to retrieve a specific attachment from a specific manual journal using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     * @param attachmentID Unique identifier for a Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getManualJournalAttachmentById(xeroTenantId: string, manualJournalID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachment for a specific manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     */
    getManualJournalAttachments(xeroTenantId: string, manualJournalID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves manual journals
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 manual journals will be returned in a single API call with line items shown for each overpayment
     */
    getManualJournals(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ManualJournals;
    }>;
    /**
     *
     * @summary Retrieves history for a specific manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Xero generated unique identifier for a manual journal
     */
    getManualJournalsHistory(xeroTenantId: string, manualJournalID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves a URL to an online invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     */
    getOnlineInvoice(xeroTenantId: string, invoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: OnlineInvoices;
    }>;
    /**
     *
     * @summary Retrieves a list of the key actions your app has permission to perform in the connected Xero organisation.
     * @param xeroTenantId Xero identifier for Tenant
     */
    getOrganisationActions(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Actions;
    }>;
    /**
     *
     * @summary Retrieves the CIS settings for the Xero organistaion.
     * @param xeroTenantId Xero identifier for Tenant
     * @param organisationID The unique Xero identifier for an organisation
     */
    getOrganisationCISSettings(xeroTenantId: string, organisationID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CISOrgSettings;
    }>;
    /**
     *
     * @summary Retrieves Xero organisation details
     * @param xeroTenantId Xero identifier for Tenant
     */
    getOrganisations(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Organisations;
    }>;
    /**
     *
     * @summary Retrieves a specific overpayment using a unique overpayment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param overpaymentID Unique identifier for a Overpayment
     */
    getOverpayment(xeroTenantId: string, overpaymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Overpayments;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific overpayment
     * @param xeroTenantId Xero identifier for Tenant
     * @param overpaymentID Unique identifier for a Overpayment
     */
    getOverpaymentHistory(xeroTenantId: string, overpaymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves overpayments
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 overpayments will be returned in a single API call with line items shown for each overpayment
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getOverpayments(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Overpayments;
    }>;
    /**
     *
     * @summary Retrieves a specific payment for invoices and credit notes using a unique payment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param paymentID Unique identifier for a Payment
     */
    getPayment(xeroTenantId: string, paymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Payments;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific payment
     * @param xeroTenantId Xero identifier for Tenant
     * @param paymentID Unique identifier for a Payment
     */
    getPaymentHistory(xeroTenantId: string, paymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves payment services
     * @param xeroTenantId Xero identifier for Tenant
     */
    getPaymentServices(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PaymentServices;
    }>;
    /**
     *
     * @summary Retrieves payments for invoices and credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page Up to 100 payments will be returned in a single API call
     */
    getPayments(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Payments;
    }>;
    /**
     *
     * @summary Allows you to retrieve a specified prepayments
     * @param xeroTenantId Xero identifier for Tenant
     * @param prepaymentID Unique identifier for a PrePayment
     */
    getPrepayment(xeroTenantId: string, prepaymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Prepayments;
    }>;
    /**
     *
     * @summary Retrieves history record for a specific prepayment
     * @param xeroTenantId Xero identifier for Tenant
     * @param prepaymentID Unique identifier for a PrePayment
     */
    getPrepaymentHistory(xeroTenantId: string, prepaymentID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves prepayments
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param page e.g. page&#x3D;1 – Up to 100 prepayments will be returned in a single API call with line items shown for each overpayment
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getPrepayments(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, page?: number, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Prepayments;
    }>;
    /**
     *
     * @summary Retrieves a specific purchase order using a unique purchase order Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for a PurchaseOrder
     */
    getPurchaseOrder(xeroTenantId: string, purchaseOrderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Retrieves specific purchase order as PDF files using a unique purchase order Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for an Purchase Order
     */
    getPurchaseOrderAsPdf(xeroTenantId: string, purchaseOrderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment for a specific purchase order by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for Purchase Order object
     * @param fileName Name of the attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getPurchaseOrderAttachmentByFileName(xeroTenantId: string, purchaseOrderID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves specific attachment for a specific purchase order using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for Purchase Order object
     * @param attachmentID Unique identifier for Attachment object
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getPurchaseOrderAttachmentById(xeroTenantId: string, purchaseOrderID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific purchase order
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for Purchase Orders object
     */
    getPurchaseOrderAttachments(xeroTenantId: string, purchaseOrderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves a specific purchase order using purchase order number
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderNumber Unique identifier for a PurchaseOrder
     */
    getPurchaseOrderByNumber(xeroTenantId: string, purchaseOrderNumber: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Retrieves history for a specific purchase order
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for a PurchaseOrder
     */
    getPurchaseOrderHistory(xeroTenantId: string, purchaseOrderID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves purchase orders
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param status Filter by purchase order status
     * @param dateFrom Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom&#x3D;2015-12-01&amp;DateTo&#x3D;2015-12-31
     * @param dateTo Filter by purchase order date (e.g. GET https://.../PurchaseOrders?DateFrom&#x3D;2015-12-01&amp;DateTo&#x3D;2015-12-31
     * @param order Order by an any element
     * @param page To specify a page, append the page parameter to the URL e.g. ?page&#x3D;1. If there are 100 records in the response you will need to check if there is any more data by fetching the next page e.g ?page&#x3D;2 and continuing this process until no more results are returned.
     */
    getPurchaseOrders(xeroTenantId: string, ifModifiedSince?: Date, status?: 'DRAFT' | 'SUBMITTED' | 'AUTHORISED' | 'BILLED' | 'DELETED', dateFrom?: string, dateTo?: string, order?: string, page?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Retrieves a specific quote using a unique quote Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for an Quote
     */
    getQuote(xeroTenantId: string, quoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Quotes;
    }>;
    /**
     *
     * @summary Retrieves a specific quote as a PDF file using a unique quote Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for an Quote
     */
    getQuoteAsPdf(xeroTenantId: string, quoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific quote by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for Quote object
     * @param fileName Name of the attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getQuoteAttachmentByFileName(xeroTenantId: string, quoteID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific quote using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for Quote object
     * @param attachmentID Unique identifier for Attachment object
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getQuoteAttachmentById(xeroTenantId: string, quoteID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific quote
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for Quote object
     */
    getQuoteAttachments(xeroTenantId: string, quoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history records of a specific quote
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for an Quote
     */
    getQuoteHistory(xeroTenantId: string, quoteID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves sales quotes
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param dateFrom Filter for quotes after a particular date
     * @param dateTo Filter for quotes before a particular date
     * @param expiryDateFrom Filter for quotes expiring after a particular date
     * @param expiryDateTo Filter for quotes before a particular date
     * @param contactID Filter for quotes belonging to a particular contact
     * @param status Filter for quotes of a particular Status
     * @param page e.g. page&#x3D;1 – Up to 100 Quotes will be returned in a single API call with line items shown for each quote
     * @param order Order by an any element
     * @param quoteNumber Filter by quote number (e.g. GET https://.../Quotes?QuoteNumber&#x3D;QU-0001)
     */
    getQuotes(xeroTenantId: string, ifModifiedSince?: Date, dateFrom?: string, dateTo?: string, expiryDateFrom?: string, expiryDateTo?: string, contactID?: string, status?: string, page?: number, order?: string, quoteNumber?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Quotes;
    }>;
    /**
     *
     * @summary Retrieves a specific draft expense claim receipt by using a unique receipt Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getReceipt(xeroTenantId: string, receiptID: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Receipts;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific expense claim receipts by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param fileName The name of the file being attached to the Receipt
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getReceiptAttachmentByFileName(xeroTenantId: string, receiptID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachments from a specific expense claim receipts by using a unique attachment Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param attachmentID Unique identifier for a Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getReceiptAttachmentById(xeroTenantId: string, receiptID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments for a specific expense claim receipt
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     */
    getReceiptAttachments(xeroTenantId: string, receiptID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves a history record for a specific receipt
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     */
    getReceiptHistory(xeroTenantId: string, receiptID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves draft expense claim receipts for any user
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    getReceipts(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Receipts;
    }>;
    /**
     *
     * @summary Retrieves a specific repeating invoice by using a unique repeating invoice Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     */
    getRepeatingInvoice(xeroTenantId: string, repeatingInvoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RepeatingInvoices;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific repeating invoices by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     * @param fileName The name of the file being attached to a Repeating Invoice
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getRepeatingInvoiceAttachmentByFileName(xeroTenantId: string, repeatingInvoiceID: string, fileName: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves a specific attachment from a specific repeating invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     * @param attachmentID Unique identifier for a Attachment
     * @param contentType The mime type of the attachment file you are retrieving i.e image/jpg, application/pdf
     */
    getRepeatingInvoiceAttachmentById(xeroTenantId: string, repeatingInvoiceID: string, attachmentID: string, contentType: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves attachments from a specific repeating invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     */
    getRepeatingInvoiceAttachments(xeroTenantId: string, repeatingInvoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Retrieves history record for a specific repeating invoice
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     */
    getRepeatingInvoiceHistory(xeroTenantId: string, repeatingInvoiceID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: HistoryRecords;
    }>;
    /**
     *
     * @summary Retrieves repeating invoices
     * @param xeroTenantId Xero identifier for Tenant
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getRepeatingInvoices(xeroTenantId: string, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: RepeatingInvoices;
    }>;
    /**
     *
     * @summary Retrieves report for aged payables by contact
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactId Unique identifier for a Contact
     * @param date The date of the Aged Payables By Contact report
     * @param fromDate The from date of the Aged Payables By Contact report
     * @param toDate The to date of the Aged Payables By Contact report
     */
    getReportAgedPayablesByContact(xeroTenantId: string, contactId: string, date?: string, fromDate?: string, toDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for aged receivables by contact
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactId Unique identifier for a Contact
     * @param date The date of the Aged Receivables By Contact report
     * @param fromDate The from date of the Aged Receivables By Contact report
     * @param toDate The to date of the Aged Receivables By Contact report
     */
    getReportAgedReceivablesByContact(xeroTenantId: string, contactId: string, date?: string, fromDate?: string, toDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves a specific report for BAS using a unique report Id (only valid for AU orgs)
     * @param xeroTenantId Xero identifier for Tenant
     * @param reportID Unique identifier for a Report
     */
    getReportBASorGST(xeroTenantId: string, reportID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for BAS (only valid for AU orgs)
     * @param xeroTenantId Xero identifier for Tenant
     */
    getReportBASorGSTList(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for balancesheet
     * @param xeroTenantId Xero identifier for Tenant
     * @param date The date of the Balance Sheet report
     * @param periods The number of periods for the Balance Sheet report
     * @param timeframe The period size to compare to (MONTH, QUARTER, YEAR)
     * @param trackingOptionID1 The tracking option 1 for the Balance Sheet report
     * @param trackingOptionID2 The tracking option 2 for the Balance Sheet report
     * @param standardLayout The standard layout boolean for the Balance Sheet report
     * @param paymentsOnly return a cash basis for the Balance Sheet report
     */
    getReportBalanceSheet(xeroTenantId: string, date?: string, periods?: number, timeframe?: 'MONTH' | 'QUARTER' | 'YEAR', trackingOptionID1?: string, trackingOptionID2?: string, standardLayout?: boolean, paymentsOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for bank summary
     * @param xeroTenantId Xero identifier for Tenant
     * @param fromDate The from date for the Bank Summary report e.g. 2018-03-31
     * @param toDate The to date for the Bank Summary report e.g. 2018-03-31
     */
    getReportBankSummary(xeroTenantId: string, fromDate?: string, toDate?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for budget summary
     * @param xeroTenantId Xero identifier for Tenant
     * @param date The date for the Bank Summary report e.g. 2018-03-31
     * @param period The number of periods to compare (integer between 1 and 12)
     * @param timeframe The period size to compare to (1&#x3D;month, 3&#x3D;quarter, 12&#x3D;year)
     */
    getReportBudgetSummary(xeroTenantId: string, date?: string, period?: number, timeframe?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for executive summary
     * @param xeroTenantId Xero identifier for Tenant
     * @param date The date for the Bank Summary report e.g. 2018-03-31
     */
    getReportExecutiveSummary(xeroTenantId: string, date?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves report for profit and loss
     * @param xeroTenantId Xero identifier for Tenant
     * @param fromDate The from date for the ProfitAndLoss report e.g. 2018-03-31
     * @param toDate The to date for the ProfitAndLoss report e.g. 2018-03-31
     * @param periods The number of periods to compare (integer between 1 and 12)
     * @param timeframe The period size to compare to (MONTH, QUARTER, YEAR)
     * @param trackingCategoryID The trackingCategory 1 for the ProfitAndLoss report
     * @param trackingCategoryID2 The trackingCategory 2 for the ProfitAndLoss report
     * @param trackingOptionID The tracking option 1 for the ProfitAndLoss report
     * @param trackingOptionID2 The tracking option 2 for the ProfitAndLoss report
     * @param standardLayout Return the standard layout for the ProfitAndLoss report
     * @param paymentsOnly Return cash only basis for the ProfitAndLoss report
     */
    getReportProfitAndLoss(xeroTenantId: string, fromDate?: string, toDate?: string, periods?: number, timeframe?: 'MONTH' | 'QUARTER' | 'YEAR', trackingCategoryID?: string, trackingCategoryID2?: string, trackingOptionID?: string, trackingOptionID2?: string, standardLayout?: boolean, paymentsOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieve reports for 1099
     * @param xeroTenantId Xero identifier for Tenant
     * @param reportYear The year of the 1099 report
     */
    getReportTenNinetyNine(xeroTenantId: string, reportYear?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Reports;
    }>;
    /**
     *
     * @summary Retrieves report for trial balance
     * @param xeroTenantId Xero identifier for Tenant
     * @param date The date for the Trial Balance report e.g. 2018-03-31
     * @param paymentsOnly Return cash only basis for the Trial Balance report
     */
    getReportTrialBalance(xeroTenantId: string, date?: string, paymentsOnly?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ReportWithRows;
    }>;
    /**
     *
     * @summary Retrieves tax rates
     * @param xeroTenantId Xero identifier for Tenant
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param taxType Filter by tax type
     */
    getTaxRates(xeroTenantId: string, where?: string, order?: string, taxType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TaxRates;
    }>;
    /**
     *
     * @summary Retrieves tracking categories and options
     * @param xeroTenantId Xero identifier for Tenant
     * @param where Filter by an any element
     * @param order Order by an any element
     * @param includeArchived e.g. includeArchived&#x3D;true - Categories and options with a status of ARCHIVED will be included in the response
     */
    getTrackingCategories(xeroTenantId: string, where?: string, order?: string, includeArchived?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Retrieves specific tracking categories and options using a unique tracking category Id
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     */
    getTrackingCategory(xeroTenantId: string, trackingCategoryID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Retrieves a specific user
     * @param xeroTenantId Xero identifier for Tenant
     * @param userID Unique identifier for a User
     */
    getUser(xeroTenantId: string, userID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Users;
    }>;
    /**
     *
     * @summary Retrieves users
     * @param xeroTenantId Xero identifier for Tenant
     * @param ifModifiedSince Only records created or modified since this timestamp will be returned
     * @param where Filter by an any element
     * @param order Order by an any element
     */
    getUsers(xeroTenantId: string, ifModifiedSince?: Date, where?: string, order?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Users;
    }>;
    /**
     *
     * @summary Sets the chart of accounts, the conversion date and conversion balances
     * @param xeroTenantId Xero identifier for Tenant
     * @param setup Object including an accounts array, a conversion balances array and a conversion date object in body of request
     */
    postSetup(xeroTenantId: string, setup: Setup, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImportSummaryObject;
    }>;
    /**
     *
     * @summary Updates a chart of accounts
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for retrieving single object
     * @param accounts Request of type Accounts array with one Account
     */
    updateAccount(xeroTenantId: string, accountID: string, accounts: Accounts, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Accounts;
    }>;
    /**
     *
     * @summary Updates attachment on a specific account by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param accountID Unique identifier for Account object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    updateAccountAttachmentByFileName(xeroTenantId: string, accountID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a single spent or received money transaction
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param bankTransactions
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateBankTransaction(xeroTenantId: string, bankTransactionID: string, bankTransactions: BankTransactions, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransactions;
    }>;
    /**
     *
     * @summary Updates a specific attachment from a specific bank transaction by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactionID Xero generated unique identifier for a bank transaction
     * @param fileName The name of the file being attached
     * @param body Byte array of file in body of request
     */
    updateBankTransactionAttachmentByFileName(xeroTenantId: string, bankTransactionID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransferID Xero generated unique identifier for a bank transfer
     * @param fileName The name of the file being attached to a Bank Transfer
     * @param body Byte array of file in body of request
     */
    updateBankTransferAttachmentByFileName(xeroTenantId: string, bankTransferID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific contact in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param contacts an array of Contacts containing single Contact object with properties to update
     */
    updateContact(xeroTenantId: string, contactID: string, contacts: Contacts, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactID Unique identifier for a Contact
     * @param fileName Name for the file you are attaching
     * @param body Byte array of file in body of request
     */
    updateContactAttachmentByFileName(xeroTenantId: string, contactID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific contact group
     * @param xeroTenantId Xero identifier for Tenant
     * @param contactGroupID Unique identifier for a Contact Group
     * @param contactGroups an array of Contact groups with Name of specific group to update
     */
    updateContactGroup(xeroTenantId: string, contactGroupID: string, contactGroups: ContactGroups, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContactGroups;
    }>;
    /**
     *
     * @summary Updates a specific credit note
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param creditNotes an array of Credit Notes containing credit note details to update
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateCreditNote(xeroTenantId: string, creditNoteID: string, creditNotes: CreditNotes, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreditNotes;
    }>;
    /**
     *
     * @summary Updates attachments on a specific credit note by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNoteID Unique identifier for a Credit Note
     * @param fileName Name of the file you are attaching to Credit Note
     * @param body Byte array of file in body of request
     */
    updateCreditNoteAttachmentByFileName(xeroTenantId: string, creditNoteID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific expense claims
     * @param xeroTenantId Xero identifier for Tenant
     * @param expenseClaimID Unique identifier for a ExpenseClaim
     * @param expenseClaims
     */
    updateExpenseClaim(xeroTenantId: string, expenseClaimID: string, expenseClaims: ExpenseClaims, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExpenseClaims;
    }>;
    /**
     *
     * @summary Updates a specific sales invoices or purchase bills
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param invoices
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateInvoice(xeroTenantId: string, invoiceID: string, invoices: Invoices, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invoices;
    }>;
    /**
     *
     * @summary Updates an attachment from a specific invoices or purchase bill by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoiceID Unique identifier for an Invoice
     * @param fileName Name of the file you are attaching
     * @param body Byte array of file in body of request
     */
    updateInvoiceAttachmentByFileName(xeroTenantId: string, invoiceID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific item
     * @param xeroTenantId Xero identifier for Tenant
     * @param itemID Unique identifier for an Item
     * @param items
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateItem(xeroTenantId: string, itemID: string, items: Items, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Items;
    }>;
    /**
     *
     * @summary Updates a specific linked transactions (billable expenses)
     * @param xeroTenantId Xero identifier for Tenant
     * @param linkedTransactionID Unique identifier for a LinkedTransaction
     * @param linkedTransactions
     */
    updateLinkedTransaction(xeroTenantId: string, linkedTransactionID: string, linkedTransactions: LinkedTransactions, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: LinkedTransactions;
    }>;
    /**
     *
     * @summary Updates a specific manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     * @param manualJournals
     */
    updateManualJournal(xeroTenantId: string, manualJournalID: string, manualJournals: ManualJournals, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ManualJournals;
    }>;
    /**
     *
     * @summary Updates a specific attachment from a specific manual journal by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournalID Unique identifier for a ManualJournal
     * @param fileName The name of the file being attached to a ManualJournal
     * @param body Byte array of file in body of request
     */
    updateManualJournalAttachmentByFileName(xeroTenantId: string, manualJournalID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates or creates one or more spent or received money transaction
     * @param xeroTenantId Xero identifier for Tenant
     * @param bankTransactions
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateOrCreateBankTransactions(xeroTenantId: string, bankTransactions: BankTransactions, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BankTransactions;
    }>;
    /**
     *
     * @summary Updates or creates one or more contacts in a Xero organisation
     * @param xeroTenantId Xero identifier for Tenant
     * @param contacts
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    updateOrCreateContacts(xeroTenantId: string, contacts: Contacts, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Contacts;
    }>;
    /**
     *
     * @summary Updates or creates one or more credit notes
     * @param xeroTenantId Xero identifier for Tenant
     * @param creditNotes an array of Credit Notes with a single CreditNote object.
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateOrCreateCreditNotes(xeroTenantId: string, creditNotes: CreditNotes, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreditNotes;
    }>;
    /**
     *
     * @summary Creates a single new employees used in Xero payrun
     * @param xeroTenantId Xero identifier for Tenant
     * @param employees Employees with array of Employee object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    updateOrCreateEmployees(xeroTenantId: string, employees: Employees, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Employees;
    }>;
    /**
     *
     * @summary Updates or creates one or more sales invoices or purchase bills
     * @param xeroTenantId Xero identifier for Tenant
     * @param invoices
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateOrCreateInvoices(xeroTenantId: string, invoices: Invoices, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Invoices;
    }>;
    /**
     *
     * @summary Updates or creates one or more items
     * @param xeroTenantId Xero identifier for Tenant
     * @param items
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateOrCreateItems(xeroTenantId: string, items: Items, summarizeErrors?: boolean, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Items;
    }>;
    /**
     *
     * @summary Updates or creates a single manual journal
     * @param xeroTenantId Xero identifier for Tenant
     * @param manualJournals ManualJournals array with ManualJournal object in body of request
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    updateOrCreateManualJournals(xeroTenantId: string, manualJournals: ManualJournals, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ManualJournals;
    }>;
    /**
     *
     * @summary Updates or creates one or more purchase orders
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrders
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    updateOrCreatePurchaseOrders(xeroTenantId: string, purchaseOrders: PurchaseOrders, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Updates or creates one or more quotes
     * @param xeroTenantId Xero identifier for Tenant
     * @param quotes
     * @param summarizeErrors If false return 200 OK and mix of successfully created objects and any with validation errors
     */
    updateOrCreateQuotes(xeroTenantId: string, quotes: Quotes, summarizeErrors?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Quotes;
    }>;
    /**
     *
     * @summary Updates a specific purchase order
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for a PurchaseOrder
     * @param purchaseOrders
     */
    updatePurchaseOrder(xeroTenantId: string, purchaseOrderID: string, purchaseOrders: PurchaseOrders, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PurchaseOrders;
    }>;
    /**
     *
     * @summary Updates a specific attachment for a specific purchase order by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param purchaseOrderID Unique identifier for Purchase Order object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    updatePurchaseOrderAttachmentByFileName(xeroTenantId: string, purchaseOrderID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific quote
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for an Quote
     * @param quotes
     */
    updateQuote(xeroTenantId: string, quoteID: string, quotes: Quotes, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Quotes;
    }>;
    /**
     *
     * @summary Updates a specific attachment from a specific quote by filename
     * @param xeroTenantId Xero identifier for Tenant
     * @param quoteID Unique identifier for Quote object
     * @param fileName Name of the attachment
     * @param body Byte array of file in body of request
     */
    updateQuoteAttachmentByFileName(xeroTenantId: string, quoteID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific draft expense claim receipts
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param receipts
     * @param unitdp e.g. unitdp&#x3D;4 – (Unit Decimal Places) You can opt in to use four decimal places for unit amounts
     */
    updateReceipt(xeroTenantId: string, receiptID: string, receipts: Receipts, unitdp?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Receipts;
    }>;
    /**
     *
     * @summary Updates a specific attachment on a specific expense claim receipts by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param receiptID Unique identifier for a Receipt
     * @param fileName The name of the file being attached to the Receipt
     * @param body Byte array of file in body of request
     */
    updateReceiptAttachmentByFileName(xeroTenantId: string, receiptID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates a specific attachment from a specific repeating invoices by file name
     * @param xeroTenantId Xero identifier for Tenant
     * @param repeatingInvoiceID Unique identifier for a Repeating Invoice
     * @param fileName The name of the file being attached to a Repeating Invoice
     * @param body Byte array of file in body of request
     */
    updateRepeatingInvoiceAttachmentByFileName(xeroTenantId: string, repeatingInvoiceID: string, fileName: string, body: fs.ReadStream, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Attachments;
    }>;
    /**
     *
     * @summary Updates tax rates
     * @param xeroTenantId Xero identifier for Tenant
     * @param taxRates
     */
    updateTaxRate(xeroTenantId: string, taxRates: TaxRates, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TaxRates;
    }>;
    /**
     *
     * @summary Updates a specific tracking category
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     * @param trackingCategory
     */
    updateTrackingCategory(xeroTenantId: string, trackingCategoryID: string, trackingCategory: TrackingCategory, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingCategories;
    }>;
    /**
     *
     * @summary Updates a specific option for a specific tracking category
     * @param xeroTenantId Xero identifier for Tenant
     * @param trackingCategoryID Unique identifier for a TrackingCategory
     * @param trackingOptionID Unique identifier for a Tracking Option
     * @param trackingOption
     */
    updateTrackingOptions(xeroTenantId: string, trackingCategoryID: string, trackingOptionID: string, trackingOption: TrackingOption, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TrackingOptions;
    }>;
}
