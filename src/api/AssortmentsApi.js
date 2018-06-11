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
    define(['ApiClient', 'model/Assortment', 'model/BadRequestError', 'model/CommodityGroupResource', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListAssortment', 'model/ResultListCommodityGroupResource', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Assortment'), require('../model/BadRequestError'), require('../model/CommodityGroupResource'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListAssortment'), require('../model/ResultListCommodityGroupResource'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.AssortmentsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.Assortment, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.CommodityGroupResource, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListAssortment, root.KoronacloudApiV3.ResultListCommodityGroupResource, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, Assortment, BadRequestError, CommodityGroupResource, ForbiddenError, NotFoundError, ResultListAssortment, ResultListCommodityGroupResource, TooManyRequestsError) {
  'use strict';

  /**
   * Assortments service.
   * @module api/AssortmentsApi
   * @version 3
   */

  /**
   * Constructs a new AssortmentsApi. 
   * @alias module:api/AssortmentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAssortment operation.
     * @callback module:api/AssortmentsApi~getAssortmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Assortment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the assortment
     * 
     * @param {String} accountId the account id
     * @param {String} assortmentIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/AssortmentsApi~getAssortmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Assortment}
     */
    this.getAssortment = function(accountId, assortmentIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAssortment");
      }

      // verify the required parameter 'assortmentIdOrNumber' is set
      if (assortmentIdOrNumber === undefined || assortmentIdOrNumber === null) {
        throw new Error("Missing the required parameter 'assortmentIdOrNumber' when calling getAssortment");
      }


      var pathParams = {
        'accountId': accountId,
        'assortmentIdOrNumber': assortmentIdOrNumber
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
        '/accounts/{accountId}/assortments/{assortmentIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAssortments operation.
     * @callback module:api/AssortmentsApi~getAssortmentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListAssortment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all assortments
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/AssortmentsApi~getAssortmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListAssortment}
     */
    this.getAssortments = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getAssortments");
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
      var returnType = ResultListAssortment;

      return this.apiClient.callApi(
        '/accounts/{accountId}/assortments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommodityGroup operation.
     * @callback module:api/AssortmentsApi~getCommodityGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommodityGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the commodity group
     * 
     * @param {String} accountId the account id
     * @param {String} commodityGroupIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/AssortmentsApi~getCommodityGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommodityGroupResource}
     */
    this.getCommodityGroup = function(accountId, commodityGroupIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCommodityGroup");
      }

      // verify the required parameter 'commodityGroupIdOrNumber' is set
      if (commodityGroupIdOrNumber === undefined || commodityGroupIdOrNumber === null) {
        throw new Error("Missing the required parameter 'commodityGroupIdOrNumber' when calling getCommodityGroup");
      }


      var pathParams = {
        'accountId': accountId,
        'commodityGroupIdOrNumber': commodityGroupIdOrNumber
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
      var returnType = CommodityGroupResource;

      return this.apiClient.callApi(
        '/accounts/{accountId}/commodityGroups/{commodityGroupIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommodityGroups operation.
     * @callback module:api/AssortmentsApi~getCommodityGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCommodityGroupResource} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all commodity groups
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/AssortmentsApi~getCommodityGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCommodityGroupResource}
     */
    this.getCommodityGroups = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCommodityGroups");
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
      var returnType = ResultListCommodityGroupResource;

      return this.apiClient.callApi(
        '/accounts/{accountId}/commodityGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
