/**
 * KORONA.cloud API v3
 * Our api provides access to our cloud services
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdditionalReceiptInfoType', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListAdditionalReceiptInfoType', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdditionalReceiptInfoType'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListAdditionalReceiptInfoType'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.AdditionalReceiptInfoTypesApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AdditionalReceiptInfoType, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListAdditionalReceiptInfoType, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AdditionalReceiptInfoType, BadRequestError, ForbiddenError, NotFoundError, ResultListAdditionalReceiptInfoType, TooManyRequestsError) {
  'use strict';

  /**
   * AdditionalReceiptInfoTypes service.
   * @module api/AdditionalReceiptInfoTypesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AdditionalReceiptInfoTypesApi. 
   * @alias module:api/AdditionalReceiptInfoTypesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAdditionalReceiptInfoType operation.
     * @callback module:api/AdditionalReceiptInfoTypesApi~getAdditionalReceiptInfoTypeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AdditionalReceiptInfoType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single additional receipt info type
     * 
     * @param {String} additionalReceiptInfoTypeId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/AdditionalReceiptInfoTypesApi~getAdditionalReceiptInfoTypeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AdditionalReceiptInfoType}
     */
    this.getAdditionalReceiptInfoType = function(additionalReceiptInfoTypeId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'additionalReceiptInfoTypeId' is set
      if (additionalReceiptInfoTypeId === undefined || additionalReceiptInfoTypeId === null) {
        throw new Error("Missing the required parameter 'additionalReceiptInfoTypeId' when calling getAdditionalReceiptInfoType");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getAdditionalReceiptInfoType");
      }


      var pathParams = {
        'additionalReceiptInfoTypeId': additionalReceiptInfoTypeId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AdditionalReceiptInfoType;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/additionalReceiptInfoTypes/{additionalReceiptInfoTypeId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAdditionalReceiptInfoTypes operation.
     * @callback module:api/AdditionalReceiptInfoTypesApi~getAdditionalReceiptInfoTypesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListAdditionalReceiptInfoType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all additional receipt info types
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/AdditionalReceiptInfoTypesApi~getAdditionalReceiptInfoTypesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListAdditionalReceiptInfoType}
     */
    this.getAdditionalReceiptInfoTypes = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getAdditionalReceiptInfoTypes");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'revision': opts['revision'],
        'includeDeleted': opts['includeDeleted'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListAdditionalReceiptInfoType;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/additionalReceiptInfoTypes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
