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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/CustomerOrder', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListCustomerOrder', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/CustomerOrder'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListCustomerOrder'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CustomerOrdersApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.CustomerOrder, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListCustomerOrder, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, CustomerOrder, ForbiddenError, NotFoundError, ResultListCustomerOrder, TooManyRequestsError) {
  'use strict';

  /**
   * CustomerOrders service.
   * @module api/CustomerOrdersApi
   * @version 3.0.0
   */

  /**
   * Constructs a new CustomerOrdersApi. 
   * @alias module:api/CustomerOrdersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomerOrders operation.
     * @callback module:api/CustomerOrdersApi~addCustomerOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new customer orders
     * 
     * @param {Array.<module:model/CustomerOrder>} body a array of new customer orders
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomerOrdersApi~addCustomerOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addCustomerOrders = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomerOrders");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addCustomerOrders");
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
        '/accounts/{koronaAccountId}/customerOrders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomerOrder operation.
     * @callback module:api/CustomerOrdersApi~deleteCustomerOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single customer order
     * 
     * @param {String} customerOrderId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {String} opts._number number of the related object
     * @param {module:api/CustomerOrdersApi~deleteCustomerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomerOrder = function(customerOrderId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'customerOrderId' is set
      if (customerOrderId === undefined || customerOrderId === null) {
        throw new Error("Missing the required parameter 'customerOrderId' when calling deleteCustomerOrder");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteCustomerOrder");
      }


      var pathParams = {
        'customerOrderId': customerOrderId,
        'koronaAccountId': koronaAccountId
      };
      var queryParams = {
        'number': opts['_number'],
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
        '/accounts/{koronaAccountId}/customerOrders/{customerOrderId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerOrder operation.
     * @callback module:api/CustomerOrdersApi~getCustomerOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomerOrder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single customer order
     * 
     * @param {String} customerOrderId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomerOrdersApi~getCustomerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomerOrder}
     */
    this.getCustomerOrder = function(customerOrderId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'customerOrderId' is set
      if (customerOrderId === undefined || customerOrderId === null) {
        throw new Error("Missing the required parameter 'customerOrderId' when calling getCustomerOrder");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCustomerOrder");
      }


      var pathParams = {
        'customerOrderId': customerOrderId,
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
      var returnType = CustomerOrder;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/customerOrders/{customerOrderId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomerOrders operation.
     * @callback module:api/CustomerOrdersApi~getCustomerOrdersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCustomerOrder} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all customer orders
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
     * @param {Date} opts.minPickUpTime min (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone)
     * @param {Date} opts.maxPickUpTime max (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone)
     * @param {module:api/CustomerOrdersApi~getCustomerOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCustomerOrder}
     */
    this.getCustomerOrders = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCustomerOrders");
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
        'minPickUpTime': opts['minPickUpTime'],
        'maxPickUpTime': opts['maxPickUpTime'],
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
      var returnType = ResultListCustomerOrder;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/customerOrders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerOrder operation.
     * @callback module:api/CustomerOrdersApi~updateCustomerOrderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single customer order
     * 
     * @param {String} customerOrderId id of the related object (important: id should match the uuid-format)
     * @param {module:model/CustomerOrder} body the properties to update of the customer order
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomerOrdersApi~updateCustomerOrderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomerOrder = function(customerOrderId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'customerOrderId' is set
      if (customerOrderId === undefined || customerOrderId === null) {
        throw new Error("Missing the required parameter 'customerOrderId' when calling updateCustomerOrder");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerOrder");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCustomerOrder");
      }


      var pathParams = {
        'customerOrderId': customerOrderId,
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
        '/accounts/{koronaAccountId}/customerOrders/{customerOrderId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomerOrders operation.
     * @callback module:api/CustomerOrdersApi~updateCustomerOrdersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of customer orders
     * [number] must be set in the objects, otherwise the object cannot be updated
     * @param {Array.<module:model/CustomerOrder>} body a array of existing customer orders
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomerOrdersApi~updateCustomerOrdersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateCustomerOrders = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomerOrders");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCustomerOrders");
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
        '/accounts/{koronaAccountId}/customerOrders', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
