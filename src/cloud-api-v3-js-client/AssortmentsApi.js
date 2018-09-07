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
    define(['ApiClient', 'model/Assortment', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListAssortment', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Assortment'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListAssortment'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.AssortmentsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.Assortment, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListAssortment, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, Assortment, BadRequestError, ForbiddenError, NotFoundError, ResultListAssortment, TooManyRequestsError) {
  'use strict';

  /**
   * Assortments service.
   * @module cloud-api-v3-js-client/AssortmentsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new AssortmentsApi. 
   * @alias module:cloud-api-v3-js-client/AssortmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAssortment operation.
     * @callback module:cloud-api-v3-js-client/AssortmentsApi~getAssortmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assortment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single assortment
     * 
     * @param {String} assortmentId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/AssortmentsApi~getAssortmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Assortment}
     */
    this.getAssortment = function(assortmentId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'assortmentId' is set
      if (assortmentId === undefined || assortmentId === null) {
        throw new Error("Missing the required parameter 'assortmentId' when calling getAssortment");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getAssortment");
      }


      var pathParams = {
        'assortmentId': assortmentId,
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
      var returnType = Assortment;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/assortments/{assortmentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssortments operation.
     * @callback module:cloud-api-v3-js-client/AssortmentsApi~getAssortmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListAssortment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all assortments
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:cloud-api-v3-js-client/AssortmentsApi~getAssortmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListAssortment}
     */
    this.getAssortments = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getAssortments");
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
      var returnType = ResultListAssortment;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/assortments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));