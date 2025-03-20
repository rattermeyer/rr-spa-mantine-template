/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  JsonSchema,
  RepresentationModelObject,
} from '../models/index';
import {
    JsonSchemaFromJSON,
    JsonSchemaToJSON,
    RepresentationModelObjectFromJSON,
    RepresentationModelObjectToJSON,
} from '../models/index';

/**
 * 
 */
export class ProfileControllerApi extends runtime.BaseAPI {

    /**
     */
    async descriptorRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/profile/customers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     */
    async descriptor(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.descriptorRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async listAllFormsOfMetadataRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RepresentationModelObject>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/profile`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RepresentationModelObjectFromJSON(jsonValue));
    }

    /**
     */
    async listAllFormsOfMetadata(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RepresentationModelObject> {
        const response = await this.listAllFormsOfMetadataRaw(initOverrides);
        return await response.value();
    }

}
