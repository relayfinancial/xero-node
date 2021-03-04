import localVarRequest = require('request');
import http = require('http');
import fs = require('fs');

/* tslint:disable:no-unused-locals */
import { FeedConnection } from '../model/bankfeeds/feedConnection';
import { FeedConnections } from '../model/bankfeeds/feedConnections';
import { Statement } from '../model/bankfeeds/statement';
import { Statements } from '../model/bankfeeds/statements';

import { ObjectSerializer, Authentication, VoidAuth } from '../model/bankfeeds/models';
import { OAuth } from '../model/bankfeeds/models';

let defaultBasePath = 'https://api.xero.com/bankfeeds.xro/1.0';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

const test = (params: any, cb: any) => {
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	console.log('[xero-node]  ', JSON.stringify(params));
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
	return localVarRequest(params, cb);
};

const resolveWrapper = (resolve: any, resp: any) => {
	console.log("-----------------------------------");
	console.log('[xero-node] resp ', JSON.stringify(resp));
	console.log("-----------------------------------");
	resolve(resp);
}

export enum BankFeedsApiApiKeys {}

export class BankFeedsApi {
	protected _basePath = defaultBasePath;
	protected defaultHeaders: any = { 'user-agent': 'xero-node-4.10.2' };
	protected _useQuerystring: boolean = false;
	protected binaryHeaders: any = {};

	protected authentications = {
		default: <Authentication>new VoidAuth(),
		OAuth2: new OAuth(),
	};

	constructor(basePath?: string);
	constructor(basePathOrUsername: string, password?: string, basePath?: string) {
		if (password) {
			if (basePath) {
				this.basePath = basePath;
			}
		} else {
			if (basePathOrUsername) {
				this.basePath = basePathOrUsername;
			}
		}
	}

	set useQuerystring(value: boolean) {
		this._useQuerystring = value;
	}

	set basePath(basePath: string) {
		this._basePath = basePath;
	}

	get basePath() {
		return this._basePath;
	}

	public setDefaultAuthentication(auth: Authentication) {
		this.authentications.default = auth;
	}

	public setApiKey(key: BankFeedsApiApiKeys, value: string) {
		(this.authentications as any)[BankFeedsApiApiKeys[key]].apiKey = value;
	}

	set accessToken(token: string) {
		this.authentications.OAuth2.accessToken = token;
	}

	/**
	 * By passing in the FeedConnections array object in the body, you can create one or more new feed connections
	 * @summary Create one or more new feed connection
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param feedConnections Feed Connection(s) array object in the body
	 */
	public async createFeedConnections(
		xeroTenantId: string,
		feedConnections: FeedConnections,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: FeedConnections }> {
		const localVarPath = this.basePath + '/FeedConnections';
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling createFeedConnections.'
			);
		}

		// verify required parameter 'feedConnections' is not null or undefined
		if (feedConnections === null || feedConnections === undefined) {
			throw new Error(
				'Required parameter feedConnections was null or undefined when calling createFeedConnections.'
			);
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'POST',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
			body: ObjectSerializer.serialize(feedConnections, 'FeedConnections'),
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: FeedConnections }>(
				(resolve, reject) => {
					test(localVarRequestOptions, (error, response, body) => {
						if (error) {
							reject(error);
						} else {
							body = ObjectSerializer.deserialize(body, 'FeedConnections');
							if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
								resolveWrapper(resolve, { response: response, body: body });
							} else {
								reject({ response: response, body: body });
							}
						}
					});
				}
			);
		});
	}
	/**
	 *
	 * @summary Creates one or more new statements
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param statements Statements array of objects in the body
	 */
	public async createStatements(
		xeroTenantId: string,
		statements?: Statements,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: Statements }> {
		const localVarPath = this.basePath + '/Statements';
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling createStatements.'
			);
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'POST',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
			body: ObjectSerializer.serialize(statements, 'Statements'),
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: Statements }>((resolve, reject) => {
				test(localVarRequestOptions, (error, response, body) => {
					if (error) {
						reject(error);
					} else {
						body = ObjectSerializer.deserialize(body, 'Statements');
						if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
							resolveWrapper(resolve, { response: response, body: body });
						} else {
							reject({ response: response, body: body });
						}
					}
				});
			});
		});
	}
	/**
	 * By passing in FeedConnections array object in the body, you can delete a feed connection.
	 * @summary Delete an existing feed connection
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param feedConnections Feed Connections array object in the body
	 */
	public async deleteFeedConnections(
		xeroTenantId: string,
		feedConnections: FeedConnections,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: FeedConnections }> {
		const localVarPath = this.basePath + '/FeedConnections/DeleteRequests';
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling deleteFeedConnections.'
			);
		}

		// verify required parameter 'feedConnections' is not null or undefined
		if (feedConnections === null || feedConnections === undefined) {
			throw new Error(
				'Required parameter feedConnections was null or undefined when calling deleteFeedConnections.'
			);
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'POST',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
			body: ObjectSerializer.serialize(feedConnections, 'FeedConnections'),
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: FeedConnections }>(
				(resolve, reject) => {
					test(localVarRequestOptions, (error, response, body) => {
						if (error) {
							reject(error);
						} else {
							body = ObjectSerializer.deserialize(body, 'FeedConnections');
							if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
								resolveWrapper(resolve, { response: response, body: body });
							} else {
								reject({ response: response, body: body });
							}
						}
					});
				}
			);
		});
	}
	/**
	 * By passing in a FeedConnection Id options, you can search for matching feed connections
	 * @summary Retrieve single feed connection based on a unique id provided
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param id Unique identifier for retrieving single object
	 */
	public async getFeedConnection(
		xeroTenantId: string,
		id: string,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: FeedConnection }> {
		const localVarPath =
			this.basePath +
			'/FeedConnections/{id}'.replace('{' + 'id' + '}', encodeURIComponent(String(id)));
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling getFeedConnection.'
			);
		}

		// verify required parameter 'id' is not null or undefined
		if (id === null || id === undefined) {
			throw new Error('Required parameter id was null or undefined when calling getFeedConnection.');
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'GET',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: FeedConnection }>(
				(resolve, reject) => {
					test(localVarRequestOptions, (error, response, body) => {
						if (error) {
							reject(error);
						} else {
							body = ObjectSerializer.deserialize(body, 'FeedConnection');
							if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
								resolveWrapper(resolve, { response: response, body: body });
							} else {
								reject({ response: response, body: body });
							}
						}
					});
				}
			);
		});
	}
	/**
	 * By passing in the appropriate options, you can search for available feed connections in the system.
	 * @summary Searches for feed connections
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param page Page number which specifies the set of records to retrieve. By default the number of the records per set is 10. Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?page&#x3D;1 to get the second set of the records. When page value is not a number or a negative number, by default, the first set of records is returned.
	 * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/FeedConnections?pageSize&#x3D;100 to specify page size of 100.
	 */
	public async getFeedConnections(
		xeroTenantId: string,
		page?: number,
		pageSize?: number,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: FeedConnections }> {
		const localVarPath = this.basePath + '/FeedConnections';
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling getFeedConnections.'
			);
		}

		if (page !== undefined) {
			localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'number');
		}

		if (pageSize !== undefined) {
			localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, 'number');
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'GET',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: FeedConnections }>(
				(resolve, reject) => {
					test(localVarRequestOptions, (error, response, body) => {
						if (error) {
							reject(error);
						} else {
							body = ObjectSerializer.deserialize(body, 'FeedConnections');
							if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
								resolveWrapper(resolve, { response: response, body: body });
							} else {
								reject({ response: response, body: body });
							}
						}
					});
				}
			);
		});
	}
	/**
	 * By passing in a statement id, you can search for matching statements
	 * @summary Retrieve single statement based on unique id provided
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param statementId statement id for single object
	 */
	public async getStatement(
		xeroTenantId: string,
		statementId: string,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: Statement }> {
		const localVarPath =
			this.basePath +
			'/Statements/{statementID}'.replace(
				'{' + 'statementId' + '}',
				encodeURIComponent(String(statementId))
			);
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling getStatement.'
			);
		}

		// verify required parameter 'statementId' is not null or undefined
		if (statementId === null || statementId === undefined) {
			throw new Error(
				'Required parameter statementId was null or undefined when calling getStatement.'
			);
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'GET',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: Statement }>((resolve, reject) => {
				test(localVarRequestOptions, (error, response, body) => {
					if (error) {
						reject(error);
					} else {
						body = ObjectSerializer.deserialize(body, 'Statement');
						if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
							resolveWrapper(resolve, { response: response, body: body });
						} else {
							reject({ response: response, body: body });
						}
					}
				});
			});
		});
	}
	/**
	 * By passing in parameters, you can search for matching statements
	 * @summary Retrieve all statements
	 * @param xeroTenantId Xero identifier for Tenant
	 * @param page unique id for single object
	 * @param pageSize Page size which specifies how many records per page will be returned (default 10). Example - https://api.xero.com/bankfeeds.xro/1.0/Statements?pageSize&#x3D;100 to specify page size of 100.
	 * @param xeroApplicationId
	 * @param xeroUserId
	 */
	public async getStatements(
		xeroTenantId: string,
		page?: number,
		pageSize?: number,
		xeroApplicationId?: string,
		xeroUserId?: string,
		options: { headers: { [name: string]: string } } = { headers: {} }
	): Promise<{ response: http.IncomingMessage; body: Statements }> {
		const localVarPath = this.basePath + '/Statements';
		let localVarQueryParameters: any = {};
		let localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
		let localVarFormParams: any = {};

		// verify required parameter 'xeroTenantId' is not null or undefined
		if (xeroTenantId === null || xeroTenantId === undefined) {
			throw new Error(
				'Required parameter xeroTenantId was null or undefined when calling getStatements.'
			);
		}

		if (page !== undefined) {
			localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'number');
		}

		if (pageSize !== undefined) {
			localVarQueryParameters['pageSize'] = ObjectSerializer.serialize(pageSize, 'number');
		}

		localVarHeaderParams['Xero-Tenant-Id'] = ObjectSerializer.serialize(xeroTenantId, 'string');
		localVarHeaderParams['Xero-Application-Id'] = ObjectSerializer.serialize(
			xeroApplicationId,
			'string'
		);
		localVarHeaderParams['Xero-User-Id'] = ObjectSerializer.serialize(xeroUserId, 'string');

		(<any>Object).assign(localVarHeaderParams, options.headers);
		let localVarUseFormData = false;

		let localVarRequestOptions: localVarRequest.Options = {
			method: 'GET',
			qs: localVarQueryParameters,
			headers: localVarHeaderParams,
			uri: localVarPath,
			useQuerystring: this._useQuerystring,
			json: true,
		};

		let authenticationPromise = Promise.resolve();
		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.OAuth2.applyToRequest(localVarRequestOptions)
		);

		authenticationPromise = authenticationPromise.then(() =>
			this.authentications.default.applyToRequest(localVarRequestOptions)
		);
		return authenticationPromise.then(() => {
			if (Object.keys(localVarFormParams).length) {
				if (localVarUseFormData) {
					(<any>localVarRequestOptions).formData = localVarFormParams;
				} else {
					localVarRequestOptions.form = localVarFormParams;
				}
			}
			return new Promise<{ response: http.IncomingMessage; body: Statements }>((resolve, reject) => {
				test(localVarRequestOptions, (error, response, body) => {
					if (error) {
						reject(error);
					} else {
						body = ObjectSerializer.deserialize(body, 'Statements');
						if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
							resolveWrapper(resolve, { response: response, body: body });
						} else {
							reject({ response: response, body: body });
						}
					}
				});
			});
		});
	}
}
