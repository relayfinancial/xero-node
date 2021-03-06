/// <reference types="node" />
import http = require('http');
import { Asset } from '../model/assets/asset';
import { AssetStatusQueryParam } from '../model/assets/assetStatusQueryParam';
import { AssetType } from '../model/assets/assetType';
import { Assets } from '../model/assets/assets';
import { Setting } from '../model/assets/setting';
import { Authentication } from '../model/assets/models';
import { OAuth } from '../model/assets/models';
export declare enum AssetApiApiKeys {
}
export declare class AssetApi {
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
    setApiKey(key: AssetApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     * Adds an asset to the system
     * @summary adds a fixed asset
     * @param xeroTenantId Xero identifier for Tenant
     * @param asset Fixed asset you are creating
     */
    createAsset(xeroTenantId: string, asset: Asset, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Asset;
    }>;
    /**
     * Adds an fixed asset type to the system
     * @summary adds a fixed asset type
     * @param xeroTenantId Xero identifier for Tenant
     * @param assetType Asset type to add
     */
    createAssetType(xeroTenantId: string, assetType?: AssetType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AssetType;
    }>;
    /**
     * By passing in the appropriate asset id, you can search for a specific fixed asset in the system
     * @summary Retrieves fixed asset by id
     * @param xeroTenantId Xero identifier for Tenant
     * @param id fixed asset id for single object
     */
    getAssetById(xeroTenantId: string, id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Asset;
    }>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset types in the system
     * @summary searches fixed asset settings
     * @param xeroTenantId Xero identifier for Tenant
     */
    getAssetSettings(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Setting;
    }>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset types in the system
     * @summary searches fixed asset types
     * @param xeroTenantId Xero identifier for Tenant
     */
    getAssetTypes(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<AssetType>;
    }>;
    /**
     * By passing in the appropriate options, you can search for available fixed asset in the system
     * @summary searches fixed asset
     * @param xeroTenantId Xero identifier for Tenant
     * @param status Required when retrieving a collection of assets. See Asset Status Codes
     * @param page Results are paged. This specifies which page of the results to return. The default page is 1.
     * @param pageSize The number of records returned per page. By default the number of records returned is 10.
     * @param orderBy Requests can be ordered by AssetType, AssetName, AssetNumber, PurchaseDate and PurchasePrice. If the asset status is DISPOSED it also allows DisposalDate and DisposalPrice.
     * @param sortDirection ASC or DESC
     * @param filterBy A string that can be used to filter the list to only return assets containing the text. Checks it against the AssetName, AssetNumber, Description and AssetTypeName fields.
     */
    getAssets(xeroTenantId: string, status: AssetStatusQueryParam, page?: number, pageSize?: number, orderBy?: 'AssetType' | 'AssetName' | 'AssetNumber' | 'PurchaseDate' | 'PurchasePrice' | 'DisposalDate' | 'DisposalPrice', sortDirection?: 'asc' | 'desc', filterBy?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Assets;
    }>;
}
