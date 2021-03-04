/// <reference types="node" />
import http = require('http');
import { FeedConnection } from '../model/bankfeeds/feedConnection';
import { FeedConnections } from '../model/bankfeeds/feedConnections';
import { Statement } from '../model/bankfeeds/statement';
import { Statements } from '../model/bankfeeds/statements';
import { Authentication } from '../model/bankfeeds/models';
import { OAuth } from '../model/bankfeeds/models';
export declare enum BankFeedsApiApiKeys {
}
export declare class BankFeedsApi {
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
    setApiKey(key: BankFeedsApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
     * @summary Create one or more new feed connection
     * @param xeroTenantId Xero identifier for Tenant
     * @param feedConnections Feed Connection(s) array object in the body
     */
    createFeedConnections(xeroTenantId: string, feedConnections: FeedConnections, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FeedConnections;
    }>;
    /**
     *
     * @summary Creates one or more new statements
     * @param xeroTenantId Xero identifier for Tenant
     * @param statements Statements array of objects in the body
     */
    createStatements(xeroTenantId: string, statements?: Statements, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Statements;
    }>;
    /**
     * By passing in FeedConnections array object in the body, you can delete a feed connection.
     * @summary Delete an existing feed connection
     * @param xeroTenantId Xero identifier for Tenant
     * @param feedConnections Feed Connections array object in the body
     */
    deleteFeedConnections(xeroTenantId: string, feedConnections: FeedConnections, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FeedConnections;
    }>;
    /**
     * By passing in a FeedConnection Id options, you can search for matching feed connections
     * @summary Retrieve single feed connection based on a unique id provided
     * @param xeroTenantId Xero identifier for Tenant
     * @param id Unique identifier for retrieving single object
     */
    getFeedConnection(xeroTenantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FeedConnection;
    }>;
    /**
     * By passing in the appropriate options, you can search for available feed connections in the system.
     * @summary Searches for feed connections
     * @param xeroTenantId Xero identifier for Tenant
     * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page&#x3D;1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
     * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize&#x3D;100 to specify page size of 100.
     */
    getFeedConnections(xeroTenantId: string, page?: number, pageSize?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FeedConnections;
    }>;
    /**
     * By passing in a statement id, you can search for matching statements
     * @summary Retrieve single statement based on unique id provided
     * @param xeroTenantId Xero identifier for Tenant
     * @param statementId statement id for single object
     */
    getStatement(xeroTenantId: string, statementId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Statement;
    }>;
    /**
     * By passing in parameters, you can search for matching statements
     * @summary Retrieve all statements
     * @param xeroTenantId Xero identifier for Tenant
     * @param page unique id for single object
     * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize&#x3D;100 to specify page size of 100.
     * @param xeroApplicationId
     * @param xeroUserId
     */
    getStatements(xeroTenantId: string, page?: number, pageSize?: number, xeroApplicationId?: string, xeroUserId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Statements;
    }>;
}