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
    define(['ApiClient', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/StatisticListTopSeller', 'model/StatisticMapStringRevenueData', 'model/StatisticRevenueData', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/StatisticListTopSeller'), require('../model/StatisticMapStringRevenueData'), require('../model/StatisticRevenueData'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.StatisticsApi = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.BadRequestError, root.CloudApiV3JsClient.ForbiddenError, root.CloudApiV3JsClient.NotFoundError, root.CloudApiV3JsClient.StatisticListTopSeller, root.CloudApiV3JsClient.StatisticMapStringRevenueData, root.CloudApiV3JsClient.StatisticRevenueData, root.CloudApiV3JsClient.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, ForbiddenError, NotFoundError, StatisticListTopSeller, StatisticMapStringRevenueData, StatisticRevenueData, TooManyRequestsError) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getRevenue operation.
     * @callback module:api/StatisticsApi~getRevenueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticRevenueData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns information about the revenue in the given period
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationalUnit number of the organizational unit
     * @param {module:model/String} opts.period time period for comparison
     * @param {module:api/StatisticsApi~getRevenueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticRevenueData}
     */
    this.getRevenue = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getRevenue");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'organizationalUnit': opts['organizationalUnit'],
        'period': opts['period'],
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
      var returnType = StatisticRevenueData;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/statistics/revenueData', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRevenueForCustomerGroups operation.
     * @callback module:api/StatisticsApi~getRevenueForCustomerGroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticMapStringRevenueData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the turnover per customer group during the given period
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationalUnit number of the organizational unit
     * @param {module:model/String} opts.period time period for comparison
     * @param {module:api/StatisticsApi~getRevenueForCustomerGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticMapStringRevenueData}
     */
    this.getRevenueForCustomerGroups = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getRevenueForCustomerGroups");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'organizationalUnit': opts['organizationalUnit'],
        'period': opts['period'],
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
      var returnType = StatisticMapStringRevenueData;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/statistics/revenueDataForCustomerGroups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRevenueHourly operation.
     * @callback module:api/StatisticsApi~getRevenueHourlyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticMapStringRevenueData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the turnover per hour during the given period
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationalUnit number of the organizational unit
     * @param {module:model/String} opts.period time period for comparison
     * @param {module:api/StatisticsApi~getRevenueHourlyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticMapStringRevenueData}
     */
    this.getRevenueHourly = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getRevenueHourly");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'organizationalUnit': opts['organizationalUnit'],
        'period': opts['period'],
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
      var returnType = StatisticMapStringRevenueData;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/statistics/revenueDataHourly', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTopSeller operation.
     * @callback module:api/StatisticsApi~getTopSellerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatisticListTopSeller} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the top-seller
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationalUnit number of the organizational unit
     * @param {module:model/String} opts.period time period for comparison
     * @param {Number} opts.limit maximum number of products to show
     * @param {module:api/StatisticsApi~getTopSellerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatisticListTopSeller}
     */
    this.getTopSeller = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getTopSeller");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'organizationalUnit': opts['organizationalUnit'],
        'period': opts['period'],
        'limit': opts['limit'],
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
      var returnType = StatisticListTopSeller;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/statistics/topSeller', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
