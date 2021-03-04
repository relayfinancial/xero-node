/// <reference types="node" />
import http = require('http');
import { ChargeType } from '../model/projects/chargeType';
import { Project } from '../model/projects/project';
import { ProjectCreateOrUpdate } from '../model/projects/projectCreateOrUpdate';
import { ProjectPatch } from '../model/projects/projectPatch';
import { ProjectUsers } from '../model/projects/projectUsers';
import { Projects } from '../model/projects/projects';
import { Task } from '../model/projects/task';
import { Tasks } from '../model/projects/tasks';
import { TimeEntries } from '../model/projects/timeEntries';
import { TimeEntry } from '../model/projects/timeEntry';
import { TimeEntryCreateOrUpdate } from '../model/projects/timeEntryCreateOrUpdate';
import { Authentication } from '../model/projects/models';
import { OAuth } from '../model/projects/models';
export declare enum ProjectApiApiKeys {
}
export declare class ProjectApi {
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
    setApiKey(key: ProjectApiApiKeys, value: string): void;
    set accessToken(token: string);
    /**
     *
     * @summary Create one or more new projects
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectCreateOrUpdate Create a new project with ProjectCreateOrUpdate object
     */
    createProject(xeroTenantId: string, projectCreateOrUpdate: ProjectCreateOrUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Project;
    }>;
    /**
     * Allows you to create a specific task
     * @summary Creates a time entry for a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param timeEntryCreateOrUpdate The time entry object you are creating
     */
    createTimeEntry(xeroTenantId: string, projectId: string, timeEntryCreateOrUpdate: TimeEntryCreateOrUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeEntry;
    }>;
    /**
     * Allows you to delete a specific time entry
     * @summary Deletes a time entry for a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param timeEntryId You can specify an individual task by appending the id to the endpoint
     */
    deleteTimeEntry(xeroTenantId: string, projectId: string, timeEntryId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Allows you to retrieve a specific project using the projectId
     * @summary Retrieves a single project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     */
    getProject(xeroTenantId: string, projectId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Project;
    }>;
    /**
     * Allows you to retrieve the users on a projects.
     * @summary Retrieves a list of all project users
     * @param xeroTenantId Xero identifier for Tenant
     * @param page set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.
     * @param pageSize Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.
     */
    getProjectUsers(xeroTenantId: string, page?: number, pageSize?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ProjectUsers;
    }>;
    /**
     * Allows you to retrieve, create and update projects.
     * @summary Retrieves all projects
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectIds Search for all projects that match a comma separated list of projectIds
     * @param contactID Filter for projects for a specific contact
     * @param states Filter for projects in a particular state (INPROGRESS or CLOSED)
     * @param page set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.
     * @param pageSize Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.
     */
    getProjects(xeroTenantId: string, projectIds?: Array<string>, contactID?: string, states?: string, page?: number, pageSize?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Projects;
    }>;
    /**
     * Allows you to retrieve a specific project
     * @summary Retrieves a single project task
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param taskId You can specify an individual task by appending the taskId to the endpoint, i.e. GET https://.../tasks/{taskID}
     */
    getTask(xeroTenantId: string, projectId: string, taskId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Task;
    }>;
    /**
     * Allows you to retrieve a specific project
     * @summary Retrieves all project tasks
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param page Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.
     * @param pageSize Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.
     * @param taskIds taskIdsSearch for all tasks that match a comma separated list of taskIds, i.e. GET https://.../tasks?taskIds&#x3D;{taskID},{taskID}
     * @param chargeType
     */
    getTasks(xeroTenantId: string, projectId: string, page?: number, pageSize?: number, taskIds?: string, chargeType?: ChargeType, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Tasks;
    }>;
    /**
     * Allows you to retrieve the time entries associated with a specific project
     * @summary Retrieves all time entries associated with a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId Identifier of the project, that the task (which the time entry is logged against) belongs to.
     * @param userId The xero user identifier of the person who logged time.
     * @param taskId Identifier of the task that time entry is logged against.
     * @param invoiceId Finds all time entries for this invoice.
     * @param contactId Finds all time entries for this contact identifier.
     * @param page Set to 1 by default. The requested number of the page in paged response - Must be a number greater than 0.
     * @param pageSize Optional, it is set to 50 by default. The number of items to return per page in a paged response - Must be a number between 1 and 500.
     * @param states Comma-separated list of states to find. Will find all time entries that are in the status of whatever is specified.
     * @param isChargeable Finds all time entries which relate to tasks with the charge type &#x60;TIME&#x60; or &#x60;FIXED&#x60;.
     * @param dateAfterUtc ISO 8601 UTC date. Finds all time entries on or after this date filtered on the &#x60;dateUtc&#x60; field.
     * @param dateBeforeUtc ISO 8601 UTC date. Finds all time entries on or before this date filtered on the &#x60;dateUtc&#x60; field.
     */
    getTimeEntries(xeroTenantId: string, projectId: string, userId?: string, taskId?: string, invoiceId?: string, contactId?: string, page?: number, pageSize?: number, states?: Array<string>, isChargeable?: boolean, dateAfterUtc?: Date, dateBeforeUtc?: Date, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeEntries;
    }>;
    /**
     * Allows you to get a single time entry in a project
     * @summary Retrieves a single time entry for a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param timeEntryId You can specify an individual time entry by appending the id to the endpoint
     */
    getTimeEntry(xeroTenantId: string, projectId: string, timeEntryId: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TimeEntry;
    }>;
    /**
     * Allows you to update a specific projects.
     * @summary creates a project for the specified contact
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param projectPatch Update the status of an existing Project
     */
    patchProject(xeroTenantId: string, projectId: string, projectPatch: ProjectPatch, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Allows you to update a specific projects.
     * @summary Updates a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param projectCreateOrUpdate Request of type ProjectCreateOrUpdate
     */
    updateProject(xeroTenantId: string, projectId: string, projectCreateOrUpdate: ProjectCreateOrUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Allows you to update time entry in a project
     * @summary Updates a time entry for a specific project
     * @param xeroTenantId Xero identifier for Tenant
     * @param projectId You can specify an individual project by appending the projectId to the endpoint
     * @param timeEntryId You can specify an individual time entry by appending the id to the endpoint
     * @param timeEntryCreateOrUpdate The time entry object you are updating
     */
    updateTimeEntry(xeroTenantId: string, projectId: string, timeEntryId: string, timeEntryCreateOrUpdate: TimeEntryCreateOrUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
