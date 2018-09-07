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
    define(['ApiClient', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListSupplier', 'model/Supplier', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListSupplier'), require('../model/Supplier'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.SuppliersApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListSupplier, root.KoronacloudApiV3.Supplier, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, ForbiddenError, NotFoundError, ResultListSupplier, Supplier, TooManyRequestsError) {
  'use strict';

  /**
   * Suppliers service.
   * @module api/SuppliersApi
   * @version 3.0.0
   */

  /**
   * Constructs a new SuppliersApi. 
   * @alias module:api/SuppliersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSupplier operation.
     * @callback module:api/SuppliersApi~getSupplierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Supplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single supplier
     * 
     * @param {String} supplierIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/SuppliersApi~getSupplierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Supplier}
     */
    this.getSupplier = function(supplierIdOrNumber, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'supplierIdOrNumber' is set
      if (supplierIdOrNumber === undefined || supplierIdOrNumber === null) {
        throw new Error("Missing the required parameter 'supplierIdOrNumber' when calling getSupplier");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getSupplier");
      }


      var pathParams = {
        'supplierIdOrNumber': supplierIdOrNumber,
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
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/suppliers/{supplierIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSuppliers operation.
     * @callback module:api/SuppliersApi~getSuppliersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListSupplier} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all suppliers
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/SuppliersApi~getSuppliersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListSupplier}
     */
    this.getSuppliers = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getSuppliers");
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
      var returnType = ResultListSupplier;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/suppliers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
