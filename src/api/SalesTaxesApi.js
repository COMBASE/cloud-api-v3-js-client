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
    define(['ApiClient', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListSalesTax', 'model/SalesTax', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListSalesTax'), require('../model/SalesTax'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.SalesTaxesApi = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.BadRequestError, root.CloudApiV3JsClient.ForbiddenError, root.CloudApiV3JsClient.NotFoundError, root.CloudApiV3JsClient.ResultListSalesTax, root.CloudApiV3JsClient.SalesTax, root.CloudApiV3JsClient.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, ForbiddenError, NotFoundError, ResultListSalesTax, SalesTax, TooManyRequestsError) {
  'use strict';

  /**
   * SalesTaxes service.
   * @module api/SalesTaxesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SalesTaxesApi. 
   * @alias module:api/SalesTaxesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSalesTax operation.
     * @callback module:api/SalesTaxesApi~getSalesTaxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SalesTax} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single sales tax
     * 
     * @param {String} salesTaxId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/SalesTaxesApi~getSalesTaxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SalesTax}
     */
    this.getSalesTax = function(salesTaxId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'salesTaxId' is set
      if (salesTaxId === undefined || salesTaxId === null) {
        throw new Error("Missing the required parameter 'salesTaxId' when calling getSalesTax");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getSalesTax");
      }


      var pathParams = {
        'salesTaxId': salesTaxId,
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
      var returnType = SalesTax;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/salesTaxes/{salesTaxId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSalesTaxes operation.
     * @callback module:api/SalesTaxesApi~getSalesTaxesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListSalesTax} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all sales taxes
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/SalesTaxesApi~getSalesTaxesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListSalesTax}
     */
    this.getSalesTaxes = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getSalesTaxes");
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
      var returnType = ResultListSalesTax;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/salesTaxes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
