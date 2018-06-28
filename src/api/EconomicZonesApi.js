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
    define(['ApiClient', 'model/BadRequestError', 'model/EconomicZone', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListEconomicZone', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/EconomicZone'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListEconomicZone'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.EconomicZonesApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.EconomicZone, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListEconomicZone, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, EconomicZone, ForbiddenError, NotFoundError, ResultListEconomicZone, TooManyRequestsError) {
  'use strict';

  /**
   * EconomicZones service.
   * @module api/EconomicZonesApi
   * @version 3.0.0
   */

  /**
   * Constructs a new EconomicZonesApi. 
   * @alias module:api/EconomicZonesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEconomicZone operation.
     * @callback module:api/EconomicZonesApi~getEconomicZoneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EconomicZone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the economic zone
     * 
     * @param {String} koronaAccountId the account id
     * @param {String} economicZoneId id of the related object (important: id should match the uuid-format)
     * @param {module:api/EconomicZonesApi~getEconomicZoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EconomicZone}
     */
    this.getEconomicZone = function(koronaAccountId, economicZoneId, callback) {
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getEconomicZone");
      }

      // verify the required parameter 'economicZoneId' is set
      if (economicZoneId === undefined || economicZoneId === null) {
        throw new Error("Missing the required parameter 'economicZoneId' when calling getEconomicZone");
      }


      var pathParams = {
        'koronaAccountId': koronaAccountId,
        'economicZoneId': economicZoneId
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
      var returnType = EconomicZone;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/economicZones/{economicZoneId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEconomicZones operation.
     * @callback module:api/EconomicZonesApi~getEconomicZonesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListEconomicZone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all economic zones
     * 
     * @param {String} koronaAccountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/EconomicZonesApi~getEconomicZonesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListEconomicZone}
     */
    this.getEconomicZones = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getEconomicZones");
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
      var returnType = ResultListEconomicZone;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/economicZones', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
