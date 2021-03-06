/// <reference types="node" />
import http = require('http');
import fs = require('fs');
import { Association } from '../model/files/association';
import { FileObject } from '../model/files/fileObject';
import { FileResponse204 } from '../model/files/fileResponse204';
import { Files } from '../model/files/files';
import { Folder } from '../model/files/folder';
import { Authentication } from '../model/files/models';
import { OAuth } from '../model/files/models';
export declare enum FilesApiApiKeys {
}
export declare class FilesApi {
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
    setApiKey(key: FilesApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     * By passing in the appropriate options, you can create a new folder
     * @summary Creates a new file association
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     * @param association
     */
    createFileAssociation(xeroTenantId: string, fileID: string, association?: Association, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Association;
    }>;
    /**
     * By passing in the appropriate properties, you can create a new folder
     * @summary Creates a new folder
     * @param xeroTenantId Xero identifier for Tenant
     * @param folder
     */
    createFolder(xeroTenantId: string, folder?: Folder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    /**
     * Delete a specific file
     * @summary Deletes a specific file
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     */
    deleteFile(xeroTenantId: string, fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileResponse204;
    }>;
    /**
     * By passing in the appropriate options, you can create a new folder
     * @summary Deletes an existing file association
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     * @param objectId Object id for single object
     */
    deleteFileAssociation(xeroTenantId: string, fileID: string, objectId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileResponse204;
    }>;
    /**
     * By passing in the appropriate ID, you can delete a folder
     * @summary Deletes a folder
     * @param xeroTenantId Xero identifier for Tenant
     * @param folderId Folder id for single object
     */
    deleteFolder(xeroTenantId: string, folderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileResponse204;
    }>;
    /**
     * By passing in the appropriate options,
     * @summary Retrieves an association object using a unique object ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param objectId Object id for single object
     */
    getAssociationsByObject(xeroTenantId: string, objectId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Association>;
    }>;
    /**
     *
     * @summary Retrieves a file by a unique file ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     */
    getFile(xeroTenantId: string, fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileObject;
    }>;
    /**
     * By passing in the appropriate options,
     * @summary Retrieves a specific file associations
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     */
    getFileAssociations(xeroTenantId: string, fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Association>;
    }>;
    /**
     * By passing in the appropriate options, retrieve data for specific file
     * @summary Retrieves the content of a specific file
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     */
    getFileContent(xeroTenantId: string, fileID: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    /**
     *
     * @summary Retrieves files
     * @param xeroTenantId Xero identifier for Tenant
     * @param pagesize pass an optional page size value
     * @param page number of records to skip for pagination
     * @param sort values to sort by
     */
    getFiles(xeroTenantId: string, pagesize?: number, page?: number, sort?: 'Name' | 'Size' | 'CreatedDateUTC', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Files;
    }>;
    /**
     * By passing in the appropriate ID, you can search for specific folder
     * @summary Retrieves specific folder by using a unique folder ID
     * @param xeroTenantId Xero identifier for Tenant
     * @param folderId Folder id for single object
     */
    getFolder(xeroTenantId: string, folderId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    /**
     * By passing in the appropriate options, you can search for available folders
     * @summary Retrieves folders
     * @param xeroTenantId Xero identifier for Tenant
     * @param sort values to sort by
     */
    getFolders(xeroTenantId: string, sort?: 'Name' | 'Size' | 'CreatedDateUTC', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Folder>;
    }>;
    /**
     * Search for the user inbox
     * @summary Retrieves inbox folder
     * @param xeroTenantId Xero identifier for Tenant
     */
    getInbox(xeroTenantId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    /**
     * Updates file properties of a single file
     * @summary Update a file
     * @param xeroTenantId Xero identifier for Tenant
     * @param fileID File id for single object
     * @param fileObject
     */
    updateFile(xeroTenantId: string, fileID: string, fileObject?: FileObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileObject;
    }>;
    /**
     * By passing in the appropriate ID and properties, you can update a folder
     * @summary Updates an existing folder
     * @param xeroTenantId Xero identifier for Tenant
     * @param folderId Folder id for single object
     * @param folder
     */
    updateFolder(xeroTenantId: string, folderId: string, folder: Folder, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Folder;
    }>;
    /**
     *
     * @summary Uploads a File
     * @param xeroTenantId Xero identifier for Tenant
     * @param folderId pass an optional folder id to save file to specific folder
     * @param body
     * @param name exact name of the file you are uploading
     * @param filename
     * @param mimeType
     */
    uploadFile(xeroTenantId: string, folderId?: string, body?: fs.ReadStream, name?: string, filename?: string, mimeType?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileObject;
    }>;
}
