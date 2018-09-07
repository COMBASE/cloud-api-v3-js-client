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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/Customer', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListCustomer', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/Customer'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListCustomer'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CustomersApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.Customer, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListCustomer, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, Customer, ForbiddenError, NotFoundError, ResultListCustomer, TooManyRequestsError) {
  'use strict';

  /**
   * Customers service.
   * @module api/CustomersApi
   * @version 3.0.0
   */

  /**
   * Constructs a new CustomersApi. 
   * @alias module:api/CustomersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addCustomers operation.
     * @callback module:api/CustomersApi~addCustomersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new customers
     * 
     * @param {Array.<module:model/Customer>} body an array of new customers
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomersApi~addCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addCustomers = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addCustomers");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addCustomers");
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
        '/accounts/{koronaAccountId}/customers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:api/CustomersApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single customer
     * 
     * @param {String} customerId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomersApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteCustomer = function(customerId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling deleteCustomer");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteCustomer");
      }


      var pathParams = {
        'customerId': customerId,
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
        '/accounts/{koronaAccountId}/customers/{customerId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:api/CustomersApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Customer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single customer
     * 
     * @param {String} customerId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomersApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Customer}
     */
    this.getCustomer = function(customerId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling getCustomer");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCustomer");
      }


      var pathParams = {
        'customerId': customerId,
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
      var returnType = Customer;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/customers/{customerId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomers operation.
     * @callback module:api/CustomersApi~getCustomersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCustomer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all customers
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/CustomersApi~getCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCustomer}
     */
    this.getCustomers = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getCustomers");
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
      var returnType = ResultListCustomer;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/customers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomer operation.
     * @callback module:api/CustomersApi~updateCustomerCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single customer
     * 
     * @param {String} customerId id of the related object (important: id should match the uuid-format)
     * @param {module:model/Customer} body the properties to update of the customer
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomersApi~updateCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateCustomer = function(customerId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'customerId' is set
      if (customerId === undefined || customerId === null) {
        throw new Error("Missing the required parameter 'customerId' when calling updateCustomer");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomer");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCustomer");
      }


      var pathParams = {
        'customerId': customerId,
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
        '/accounts/{koronaAccountId}/customers/{customerId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCustomers operation.
     * @callback module:api/CustomersApi~updateCustomersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of customers
     * [number] must be set in the objects, otherwise the object cannot be updated
     * @param {Array.<module:model/Customer>} body an array of existing customers
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/CustomersApi~updateCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateCustomers = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCustomers");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateCustomers");
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
        '/accounts/{koronaAccountId}/customers', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
