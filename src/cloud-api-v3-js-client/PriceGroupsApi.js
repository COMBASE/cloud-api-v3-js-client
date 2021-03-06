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
    define(['ApiClient', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/PriceGroup', 'model/ResultListPriceGroup', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/PriceGroup'), require('../model/ResultListPriceGroup'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.PriceGroupsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.PriceGroup, root.KoronacloudApiV3.ResultListPriceGroup, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, ForbiddenError, NotFoundError, PriceGroup, ResultListPriceGroup, TooManyRequestsError) {
  'use strict';

  /**
   * PriceGroups service.
   * @module cloud-api-v3-js-client/PriceGroupsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new PriceGroupsApi. 
   * @alias module:cloud-api-v3-js-client/PriceGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPriceGroup operation.
     * @callback module:cloud-api-v3-js-client/PriceGroupsApi~getPriceGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PriceGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single price group
     * 
     * @param {String} priceGroupId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/PriceGroupsApi~getPriceGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PriceGroup}
     */
    this.getPriceGroup = function(priceGroupId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'priceGroupId' is set
      if (priceGroupId === undefined || priceGroupId === null) {
        throw new Error("Missing the required parameter 'priceGroupId' when calling getPriceGroup");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getPriceGroup");
      }


      var pathParams = {
        'priceGroupId': priceGroupId,
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
      var returnType = PriceGroup;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/priceGroups/{priceGroupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPriceGroups operation.
     * @callback module:cloud-api-v3-js-client/PriceGroupsApi~getPriceGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListPriceGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all price groups
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:cloud-api-v3-js-client/PriceGroupsApi~getPriceGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListPriceGroup}
     */
    this.getPriceGroups = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getPriceGroups");
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
      var returnType = ResultListPriceGroup;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/priceGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
