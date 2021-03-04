import { Client, TokenSet } from 'openid-client';
import * as xero from './gen/api';
export interface IXeroClientConfig {
    clientId: string;
    clientSecret: string;
    redirectUris: string[];
    scopes: string[];
    state?: string;
    httpTimeout?: number;
}
export interface XeroIdToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    iat: number;
    at_hash: string;
    sid: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    preferred_username: string;
    email: string;
    given_name: string;
    family_name: string;
    amr: string[];
}
export interface XeroAccessToken {
    nbf: number;
    exp: number;
    iss: string;
    aud: string;
    client_id: string;
    sub: string;
    auth_time: number;
    idp: string;
    xero_userid: string;
    global_session_id: string;
    jti: string;
    scope: string[];
    amr: string[];
}
export declare class XeroClient {
    readonly config?: IXeroClientConfig;
    constructor(config?: IXeroClientConfig);
    private _tokenSet;
    private _tenants;
    readonly accountingApi: xero.AccountingApi;
    readonly assetApi: xero.AssetApi;
    readonly filesApi: xero.FilesApi;
    readonly projectApi: xero.ProjectApi;
    readonly payrollAUApi: xero.PayrollAuApi;
    readonly bankFeedsApi: xero.BankFeedsApi;
    readonly payrollUKApi: xero.PayrollUkApi;
    readonly payrollNZApi: xero.PayrollNzApi;
    openIdClient: Client;
    get tenants(): any[];
    initialize(): Promise<XeroClient>;
    buildConsentUrl(): Promise<string>;
    apiCallback(callbackUrl: string): Promise<TokenSet>;
    disconnect(connectionId: string): Promise<TokenSet>;
    readTokenSet(): TokenSet;
    setTokenSet(tokenSet: TokenSet): void;
    refreshToken(): Promise<TokenSet>;
    revokeToken(): Promise<undefined>;
    private encodeBody;
    formatMsDate(dateString: string): string;
    refreshWithRefreshToken(clientId: any, clientSecret: any, refreshToken: any): Promise<TokenSet>;
    private postWithRefreshToken;
    updateTenants(fullOrgDetails?: boolean): Promise<any[]>;
    private queryApi;
    private setAccessToken;
}
