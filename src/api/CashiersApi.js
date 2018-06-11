/**
 * KORONA.cloud API v3
 * Our api provides access to our cloud services
 *
 * OpenAPI spec version: 3
 * Contact: support@combase.net
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
    define(['ApiClient', 'model/BadRequestError', 'model/Cashier', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListCashier', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/Cashier'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListCashier'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CashiersApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.Cashier, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListCashier, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, Cashier, ForbiddenError, NotFoundError, ResultListCashier, TooManyRequestsError) {
  'use strict';

  /**
   * Cashiers service.
   * @module api/CashiersApi
   * @version 3
   */

  /**
   * Constructs a new CashiersApi. 
   * @alias module:api/CashiersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCashier operation.
     * @callback module:api/CashiersApi~getCashierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Cashier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the cashier
     * 
     * @param {String} accountId the account id
     * @param {String} cashierIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/CashiersApi~getCashierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Cashier}
     */
    this.getCashier = function(accountId, cashierIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCashier");
      }

      // verify the required parameter 'cashierIdOrNumber' is set
      if (cashierIdOrNumber === undefined || cashierIdOrNumber === null) {
        throw new Error("Missing the required parameter 'cashierIdOrNumber' when calling getCashier");
      }


      var pathParams = {
        'accountId': accountId,
        'cashierIdOrNumber': cashierIdOrNumber
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
      var returnType = Cashier;

      return this.apiClient.callApi(
        '/accounts/{accountId}/cashiers/{cashierIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCashiers operation.
     * @callback module:api/CashiersApi~getCashiersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCashier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all cashiers
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/CashiersApi~getCashiersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCashier}
     */
    this.getCashiers = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCashiers");
      }


      var pathParams = {
        'accountId': accountId
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
      var returnType = ResultListCashier;

      return this.apiClient.callApi(
        '/accounts/{accountId}/cashiers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
