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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/DayRating', 'model/ForbiddenError', 'model/NotFoundError', 'model/OrganizationalUnit', 'model/ResultListDayRating', 'model/ResultListInventoryList', 'model/ResultListOrganizationalUnit', 'model/ResultListProductStock', 'model/ResultListStockReceipt', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/DayRating'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/OrganizationalUnit'), require('../model/ResultListDayRating'), require('../model/ResultListInventoryList'), require('../model/ResultListOrganizationalUnit'), require('../model/ResultListProductStock'), require('../model/ResultListStockReceipt'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.OrganizationalUnitsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.DayRating, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.OrganizationalUnit, root.KoronacloudApiV3.ResultListDayRating, root.KoronacloudApiV3.ResultListInventoryList, root.KoronacloudApiV3.ResultListOrganizationalUnit, root.KoronacloudApiV3.ResultListProductStock, root.KoronacloudApiV3.ResultListStockReceipt, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, DayRating, ForbiddenError, NotFoundError, OrganizationalUnit, ResultListDayRating, ResultListInventoryList, ResultListOrganizationalUnit, ResultListProductStock, ResultListStockReceipt, TooManyRequestsError) {
  'use strict';

  /**
   * OrganizationalUnits service.
   * @module api/OrganizationalUnitsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new OrganizationalUnitsApi. 
   * @alias module:api/OrganizationalUnitsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addOrganizationalUnitDayRatings operation.
     * @callback module:api/OrganizationalUnitsApi~addOrganizationalUnitDayRatingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new day ratings
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {Array.<module:model/DayRating>} body a array of new day ratings
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~addOrganizationalUnitDayRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addOrganizationalUnitDayRatings = function(organizationalUnitId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling addOrganizationalUnitDayRatings");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addOrganizationalUnitDayRatings");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addOrganizationalUnitDayRatings");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
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
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteOrganizationalUnitDayRating operation.
     * @callback module:api/OrganizationalUnitsApi~deleteOrganizationalUnitDayRatingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single day rating by its id or date
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} dayRatingIdOrDate the id or date (YYYY-MM-DD) of the day rating
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~deleteOrganizationalUnitDayRatingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteOrganizationalUnitDayRating = function(organizationalUnitId, dayRatingIdOrDate, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling deleteOrganizationalUnitDayRating");
      }

      // verify the required parameter 'dayRatingIdOrDate' is set
      if (dayRatingIdOrDate === undefined || dayRatingIdOrDate === null) {
        throw new Error("Missing the required parameter 'dayRatingIdOrDate' when calling deleteOrganizationalUnitDayRating");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteOrganizationalUnitDayRating");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'dayRatingIdOrDate': dayRatingIdOrDate,
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
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnit operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OrganizationalUnit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single organizational unit
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OrganizationalUnit}
     */
    this.getOrganizationalUnit = function(organizationalUnitId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnit");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnit");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
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
      var returnType = OrganizationalUnit;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnitDayRating operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitDayRatingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DayRating} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single day rating by its id or date
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} dayRatingIdOrDate the id or date (YYYY-MM-DD) of the day rating
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitDayRatingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DayRating}
     */
    this.getOrganizationalUnitDayRating = function(organizationalUnitId, dayRatingIdOrDate, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnitDayRating");
      }

      // verify the required parameter 'dayRatingIdOrDate' is set
      if (dayRatingIdOrDate === undefined || dayRatingIdOrDate === null) {
        throw new Error("Missing the required parameter 'dayRatingIdOrDate' when calling getOrganizationalUnitDayRating");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnitDayRating");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'dayRatingIdOrDate': dayRatingIdOrDate,
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
      var returnType = DayRating;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnitDayRatings operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitDayRatingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDayRating} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all organizational unit related day ratings
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitDayRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListDayRating}
     */
    this.getOrganizationalUnitDayRatings = function(organizationalUnitId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnitDayRatings");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnitDayRatings");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
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
      var returnType = ResultListDayRating;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnitInventoryLists operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitInventoryListsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListInventoryList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the inventory lists belonging to the organizational unit (KORONA.retail required)
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {Date} opts.minCreateTime min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.maxCreateTime max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.minBookingTime min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.maxBookingTime max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
     * @param {module:model/String} opts.bookingStatus booking status (possible values: BOOKED, IN_PROGRESS)
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitInventoryListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListInventoryList}
     */
    this.getOrganizationalUnitInventoryLists = function(organizationalUnitId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnitInventoryLists");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnitInventoryLists");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'revision': opts['revision'],
        'includeDeleted': opts['includeDeleted'],
        'minCreateTime': opts['minCreateTime'],
        'maxCreateTime': opts['maxCreateTime'],
        'minBookingTime': opts['minBookingTime'],
        'maxBookingTime': opts['maxBookingTime'],
        'bookingStatus': opts['bookingStatus'],
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
      var returnType = ResultListInventoryList;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/inventoryLists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnitProductStocks operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitProductStocksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListProductStock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitProductStocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListProductStock}
     */
    this.getOrganizationalUnitProductStocks = function(organizationalUnitId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnitProductStocks");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnitProductStocks");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'revision': opts['revision'],
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
      var returnType = ResultListProductStock;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/productStocks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnitStockReceipts operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitStockReceiptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListStockReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the stock receipts belonging to the organizational unit (KORONA.retail required)
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {Date} opts.minCreateTime min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.maxCreateTime max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.minBookingTime min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.maxBookingTime max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
     * @param {String} opts.sourceOrganizationalUnit source organizational unit
     * @param {module:model/String} opts.bookingStatus booking status (possible values: BOOKED, IN_PROGRESS)
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitStockReceiptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListStockReceipt}
     */
    this.getOrganizationalUnitStockReceipts = function(organizationalUnitId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling getOrganizationalUnitStockReceipts");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnitStockReceipts");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'page': opts['page'],
        'size': opts['size'],
        'sort': opts['sort'],
        'revision': opts['revision'],
        'includeDeleted': opts['includeDeleted'],
        'minCreateTime': opts['minCreateTime'],
        'maxCreateTime': opts['maxCreateTime'],
        'minBookingTime': opts['minBookingTime'],
        'maxBookingTime': opts['maxBookingTime'],
        'sourceOrganizationalUnit': opts['sourceOrganizationalUnit'],
        'bookingStatus': opts['bookingStatus'],
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
      var returnType = ResultListStockReceipt;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/stockReceipts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOrganizationalUnits operation.
     * @callback module:api/OrganizationalUnitsApi~getOrganizationalUnitsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListOrganizationalUnit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all organizational units
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/OrganizationalUnitsApi~getOrganizationalUnitsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListOrganizationalUnit}
     */
    this.getOrganizationalUnits = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getOrganizationalUnits");
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
      var returnType = ResultListOrganizationalUnit;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/organizationalUnits', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrganizationalUnitDayRating operation.
     * @callback module:api/OrganizationalUnitsApi~updateOrganizationalUnitDayRatingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the day rating by its id or date
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {String} dayRatingIdOrDate the id or date (YYYY-MM-DD) of the day rating
     * @param {module:model/DayRating} body the properties to update of the day rating
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~updateOrganizationalUnitDayRatingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateOrganizationalUnitDayRating = function(organizationalUnitId, dayRatingIdOrDate, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling updateOrganizationalUnitDayRating");
      }

      // verify the required parameter 'dayRatingIdOrDate' is set
      if (dayRatingIdOrDate === undefined || dayRatingIdOrDate === null) {
        throw new Error("Missing the required parameter 'dayRatingIdOrDate' when calling updateOrganizationalUnitDayRating");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrganizationalUnitDayRating");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateOrganizationalUnitDayRating");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
        'dayRatingIdOrDate': dayRatingIdOrDate,
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
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateOrganizationalUnitDayRatings operation.
     * @callback module:api/OrganizationalUnitsApi~updateOrganizationalUnitDayRatingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of day ratings
     * 
     * @param {String} organizationalUnitId id of the related object (important: id should match the uuid-format)
     * @param {Array.<module:model/DayRating>} body a array of new day ratings
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/OrganizationalUnitsApi~updateOrganizationalUnitDayRatingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateOrganizationalUnitDayRatings = function(organizationalUnitId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'organizationalUnitId' is set
      if (organizationalUnitId === undefined || organizationalUnitId === null) {
        throw new Error("Missing the required parameter 'organizationalUnitId' when calling updateOrganizationalUnitDayRatings");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateOrganizationalUnitDayRatings");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateOrganizationalUnitDayRatings");
      }


      var pathParams = {
        'organizationalUnitId': organizationalUnitId,
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
        '/accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
