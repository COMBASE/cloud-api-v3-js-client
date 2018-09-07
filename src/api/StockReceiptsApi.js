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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/ForbiddenError', 'model/MethodNotAllowedError', 'model/NotFoundError', 'model/ResultListStockReceipt', 'model/ResultListStockReceiptItem', 'model/StockReceipt', 'model/StockReceiptItem', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/MethodNotAllowedError'), require('../model/NotFoundError'), require('../model/ResultListStockReceipt'), require('../model/ResultListStockReceiptItem'), require('../model/StockReceipt'), require('../model/StockReceiptItem'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.StockReceiptsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.MethodNotAllowedError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListStockReceipt, root.KoronacloudApiV3.ResultListStockReceiptItem, root.KoronacloudApiV3.StockReceipt, root.KoronacloudApiV3.StockReceiptItem, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, ForbiddenError, MethodNotAllowedError, NotFoundError, ResultListStockReceipt, ResultListStockReceiptItem, StockReceipt, StockReceiptItem, TooManyRequestsError) {
  'use strict';

  /**
   * StockReceipts service.
   * @module api/StockReceiptsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new StockReceiptsApi. 
   * @alias module:api/StockReceiptsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addStockReceiptItems operation.
     * @callback module:api/StockReceiptsApi~addStockReceiptItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds stock-receipt items
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {Array.<module:model/StockReceiptItem>} body data to add
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~addStockReceiptItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addStockReceiptItems = function(stockReceiptIdOrNumber, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling addStockReceiptItems");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStockReceiptItems");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addStockReceiptItems");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
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
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addStockReceipts operation.
     * @callback module:api/StockReceiptsApi~addStockReceiptsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds stock-receipts
     * 
     * @param {Array.<module:model/StockReceipt>} body data to add
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~addStockReceiptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addStockReceipts = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addStockReceipts");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addStockReceipts");
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
        '/accounts/{koronaAccountId}/stockReceipts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteStockReceiptItem operation.
     * @callback module:api/StockReceiptsApi~deleteStockReceiptItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single stock-receipt item
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} productIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~deleteStockReceiptItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteStockReceiptItem = function(stockReceiptIdOrNumber, productIdOrNumber, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling deleteStockReceiptItem");
      }

      // verify the required parameter 'productIdOrNumber' is set
      if (productIdOrNumber === undefined || productIdOrNumber === null) {
        throw new Error("Missing the required parameter 'productIdOrNumber' when calling deleteStockReceiptItem");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteStockReceiptItem");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
        'productIdOrNumber': productIdOrNumber,
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
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStockReceipt operation.
     * @callback module:api/StockReceiptsApi~getStockReceiptCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StockReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single stock-receipt
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~getStockReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StockReceipt}
     */
    this.getStockReceipt = function(stockReceiptIdOrNumber, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling getStockReceipt");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getStockReceipt");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
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
      var returnType = StockReceipt;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStockReceiptItem operation.
     * @callback module:api/StockReceiptsApi~getStockReceiptItemCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StockReceiptItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single stock-receipt item
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} productIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~getStockReceiptItemCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StockReceiptItem}
     */
    this.getStockReceiptItem = function(stockReceiptIdOrNumber, productIdOrNumber, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling getStockReceiptItem");
      }

      // verify the required parameter 'productIdOrNumber' is set
      if (productIdOrNumber === undefined || productIdOrNumber === null) {
        throw new Error("Missing the required parameter 'productIdOrNumber' when calling getStockReceiptItem");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getStockReceiptItem");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
        'productIdOrNumber': productIdOrNumber,
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
      var returnType = StockReceiptItem;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStockReceiptItems operation.
     * @callback module:api/StockReceiptsApi~getStockReceiptItemsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListStockReceiptItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all stock-receipt items
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {module:api/StockReceiptsApi~getStockReceiptItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListStockReceiptItem}
     */
    this.getStockReceiptItems = function(stockReceiptIdOrNumber, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling getStockReceiptItems");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getStockReceiptItems");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
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
      var returnType = ResultListStockReceiptItem;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStockReceipts operation.
     * @callback module:api/StockReceiptsApi~getStockReceiptsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListStockReceipt} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all stock-receipts
     * 
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
     * @param {String} opts.organizationalUnit organizational unit
     * @param {String} opts.sourceOrganizationalUnit source organizational unit
     * @param {module:model/String} opts.bookingStatus booking status (possible values: BOOKED, IN_PROGRESS)
     * @param {module:api/StockReceiptsApi~getStockReceiptsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListStockReceipt}
     */
    this.getStockReceipts = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getStockReceipts");
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
        'minCreateTime': opts['minCreateTime'],
        'maxCreateTime': opts['maxCreateTime'],
        'minBookingTime': opts['minBookingTime'],
        'maxBookingTime': opts['maxBookingTime'],
        'organizationalUnit': opts['organizationalUnit'],
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
        '/accounts/{koronaAccountId}/stockReceipts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStockReceipt operation.
     * @callback module:api/StockReceiptsApi~updateStockReceiptCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single stock-receipt
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {module:model/StockReceipt} body data to update
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~updateStockReceiptCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateStockReceipt = function(stockReceiptIdOrNumber, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling updateStockReceipt");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStockReceipt");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateStockReceipt");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
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
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStockReceiptItem operation.
     * @callback module:api/StockReceiptsApi~updateStockReceiptItemCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single stock-receipt item
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {String} productIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {module:model/StockReceiptItem} body data to update
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~updateStockReceiptItemCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateStockReceiptItem = function(stockReceiptIdOrNumber, productIdOrNumber, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling updateStockReceiptItem");
      }

      // verify the required parameter 'productIdOrNumber' is set
      if (productIdOrNumber === undefined || productIdOrNumber === null) {
        throw new Error("Missing the required parameter 'productIdOrNumber' when calling updateStockReceiptItem");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStockReceiptItem");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateStockReceiptItem");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
        'productIdOrNumber': productIdOrNumber,
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
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateStockReceiptItems operation.
     * @callback module:api/StockReceiptsApi~updateStockReceiptItemsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates stock-receipt items
     * 
     * @param {String} stockReceiptIdOrNumber id of the related object (important: id should match the uuid-format)
     * @param {Array.<module:model/StockReceiptItem>} body data to update
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/StockReceiptsApi~updateStockReceiptItemsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateStockReceiptItems = function(stockReceiptIdOrNumber, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'stockReceiptIdOrNumber' is set
      if (stockReceiptIdOrNumber === undefined || stockReceiptIdOrNumber === null) {
        throw new Error("Missing the required parameter 'stockReceiptIdOrNumber' when calling updateStockReceiptItems");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateStockReceiptItems");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateStockReceiptItems");
      }


      var pathParams = {
        'stockReceiptIdOrNumber': stockReceiptIdOrNumber,
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
        '/accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
