"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("././asset"));
__export(require("././assetStatus"));
__export(require("././assetStatusQueryParam"));
__export(require("././assetType"));
__export(require("././assets"));
__export(require("././bookDepreciationDetail"));
__export(require("././bookDepreciationSetting"));
__export(require("././fieldValidationErrorsElement"));
__export(require("././modelError"));
__export(require("././pagination"));
__export(require("././resourceValidationErrorsElement"));
__export(require("././setting"));
const asset_1 = require("././asset");
const assetStatus_1 = require("././assetStatus");
const assetStatusQueryParam_1 = require("././assetStatusQueryParam");
const assetType_1 = require("././assetType");
const assets_1 = require("././assets");
const bookDepreciationDetail_1 = require("././bookDepreciationDetail");
const bookDepreciationSetting_1 = require("././bookDepreciationSetting");
const fieldValidationErrorsElement_1 = require("././fieldValidationErrorsElement");
const modelError_1 = require("././modelError");
const pagination_1 = require("././pagination");
const resourceValidationErrorsElement_1 = require("././resourceValidationErrorsElement");
const setting_1 = require("././setting");
/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "AssetStatus": assetStatus_1.AssetStatus,
    "AssetStatusQueryParam": assetStatusQueryParam_1.AssetStatusQueryParam,
    "BookDepreciationSetting.DepreciationMethodEnum": bookDepreciationSetting_1.BookDepreciationSetting.DepreciationMethodEnum,
    "BookDepreciationSetting.AveragingMethodEnum": bookDepreciationSetting_1.BookDepreciationSetting.AveragingMethodEnum,
    "BookDepreciationSetting.DepreciationCalculationMethodEnum": bookDepreciationSetting_1.BookDepreciationSetting.DepreciationCalculationMethodEnum,
};
let typeMap = {
    "Asset": asset_1.Asset,
    "AssetType": assetType_1.AssetType,
    "Assets": assets_1.Assets,
    "BookDepreciationDetail": bookDepreciationDetail_1.BookDepreciationDetail,
    "BookDepreciationSetting": bookDepreciationSetting_1.BookDepreciationSetting,
    "FieldValidationErrorsElement": fieldValidationErrorsElement_1.FieldValidationErrorsElement,
    "ModelError": modelError_1.ModelError,
    "Pagination": pagination_1.Pagination,
    "ResourceValidationErrorsElement": resourceValidationErrorsElement_1.ResourceValidationErrorsElement,
    "Setting": setting_1.Setting,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            if (subType === 'string') {
                return transformedData.join(',');
            }
            else {
                return transformedData;
            }
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserializeDateFormats(type, data) {
        const isDate = new Date(data);
        if (isNaN(isDate.getTime())) {
            const re = /-?\d+/;
            const m = re.exec(data);
            return new Date(parseInt(m[0], 10));
        }
        else {
            return isDate;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            if (type === "string" && data.toString().substring(0, 6) === "/Date(") {
                return this.deserializeDateFormats(type, data); // For MS dates that are of type 'string'
            }
            else {
                return data;
            }
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData = [];
            // Asset API returns string even for Array<Model>
            const dataFormatted = typeof data == 'string' ? JSON.parse(data) : data;
            for (let index in dataFormatted) {
                let currentData = dataFormatted[index];
                transformedData.push(ObjectSerializer.deserialize(currentData, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return this.deserializeDateFormats(type, data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
exports.ObjectSerializer = ObjectSerializer;
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
exports.HttpBasicAuth = HttpBasicAuth;
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}
exports.ApiKeyAuth = ApiKeyAuth;
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
exports.OAuth = OAuth;
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map