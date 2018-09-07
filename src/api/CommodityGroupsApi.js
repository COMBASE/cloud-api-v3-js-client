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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/CommodityGroup', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListCommodityGroup', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/CommodityGroup'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListCommodityGroup'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CommodityGroupsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.CommodityGroup, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListCommodityGroup, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, CommodityGroup, ForbiddenError, NotFoundError, ResultListCommodityGroup, TooManyRequestsError) {
  'use strict';

  /**
   * CommodityGroups service.
   * @module api/CommodityGroupsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new CommodityGroupsApi. 
   * @alias module:api/CommodityGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCommodityGroups operation.
     * @callback module:api/CommodityGroupsApi~addCommodityGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new commodity groups
     * 
     * @param {Array.<module:model/CommodityGroup>} body a array of new commodity groups
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CommodityGroupsApi~addCommodityGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addCommodityGroups = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCommodityGroups");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addCommodityGroups");
      }


      var pathParams = {
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
      var returnType = [AddOrUpdateResult];

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCommodityGroup operation.
     * @callback module:api/CommodityGroupsApi~deleteCommodityGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single commodity group
     * 
     * @param {String} commodityGroupId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CommodityGroupsApi~deleteCommodityGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCommodityGroup = function(commodityGroupId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'commodityGroupId' is set
      if (commodityGroupId === undefined || commodityGroupId === null) {
        throw new Error("Missing the required parameter 'commodityGroupId' when calling deleteCommodityGroup");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteCommodityGroup");
      }


      var pathParams = {
        'commodityGroupId': commodityGroupId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups/{commodityGroupId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommodityGroup operation.
     * @callback module:api/CommodityGroupsApi~getCommodityGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommodityGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single commodity group
     * 
     * @param {String} commodityGroupId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CommodityGroupsApi~getCommodityGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommodityGroup}
     */
    this.getCommodityGroup = function(commodityGroupId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'commodityGroupId' is set
      if (commodityGroupId === undefined || commodityGroupId === null) {
        throw new Error("Missing the required parameter 'commodityGroupId' when calling getCommodityGroup");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCommodityGroup");
      }


      var pathParams = {
        'commodityGroupId': commodityGroupId,
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
      var returnType = CommodityGroup;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups/{commodityGroupId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommodityGroups operation.
     * @callback module:api/CommodityGroupsApi~getCommodityGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCommodityGroup} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all commodity groups
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/CommodityGroupsApi~getCommodityGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCommodityGroup}
     */
    this.getCommodityGroups = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCommodityGroups");
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
      var returnType = ResultListCommodityGroup;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCommodityGroup operation.
     * @callback module:api/CommodityGroupsApi~updateCommodityGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single commodity group
     * 
     * @param {String} commodityGroupId id of the related object (important: id should match the uuid-format)
     * @param {module:model/CommodityGroup} body the properties to update of the commodity group
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CommodityGroupsApi~updateCommodityGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCommodityGroup = function(commodityGroupId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'commodityGroupId' is set
      if (commodityGroupId === undefined || commodityGroupId === null) {
        throw new Error("Missing the required parameter 'commodityGroupId' when calling updateCommodityGroup");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCommodityGroup");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCommodityGroup");
      }


      var pathParams = {
        'commodityGroupId': commodityGroupId,
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
      var returnType = null;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups/{commodityGroupId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCommodityGroups operation.
     * @callback module:api/CommodityGroupsApi~updateCommodityGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of commodity groups
     * [number] must be set in the objects, otherwise the object cannot be updated
     * @param {Array.<module:model/CommodityGroup>} body a array of existing commodity groups
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CommodityGroupsApi~updateCommodityGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateCommodityGroups = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCommodityGroups");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCommodityGroups");
      }


      var pathParams = {
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
      var returnType = [AddOrUpdateResult];

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/commodityGroups', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
