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
    define(['ApiClient', 'model/BadRequestError', 'model/Currency', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListCurrency', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/Currency'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListCurrency'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CurrenciesApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.Currency, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListCurrency, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, Currency, ForbiddenError, NotFoundError, ResultListCurrency, TooManyRequestsError) {
  'use strict';

  /**
   * Currencies service.
   * @module api/CurrenciesApi
   * @version 3
   */

  /**
   * Constructs a new CurrenciesApi. 
   * @alias module:api/CurrenciesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getCurrencies operation.
     * @callback module:api/CurrenciesApi~getCurrenciesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListCurrency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all currencies
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/CurrenciesApi~getCurrenciesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListCurrency}
     */
    this.getCurrencies = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCurrencies");
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
      var returnType = ResultListCurrency;

      return this.apiClient.callApi(
        '/accounts/{accountId}/currencies', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCurrency operation.
     * @callback module:api/CurrenciesApi~getCurrencyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Currency} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the currency
     * 
     * @param {String} accountId the account id
     * @param {String} currencyIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/CurrenciesApi~getCurrencyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Currency}
     */
    this.getCurrency = function(accountId, currencyIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getCurrency");
      }

      // verify the required parameter 'currencyIdOrNumber' is set
      if (currencyIdOrNumber === undefined || currencyIdOrNumber === null) {
        throw new Error("Missing the required parameter 'currencyIdOrNumber' when calling getCurrency");
      }


      var pathParams = {
        'accountId': accountId,
        'currencyIdOrNumber': currencyIdOrNumber
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
      var returnType = Currency;

      return this.apiClient.callApi(
        '/accounts/{accountId}/currencies/{currencyIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
