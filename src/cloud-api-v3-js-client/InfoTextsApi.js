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
    define(['ApiClient', 'model/BadRequestError', 'model/ForbiddenError', 'model/InfoText', 'model/NotFoundError', 'model/ResultListInfoText', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/InfoText'), require('../model/NotFoundError'), require('../model/ResultListInfoText'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.InfoTextsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.InfoText, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListInfoText, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, ForbiddenError, InfoText, NotFoundError, ResultListInfoText, TooManyRequestsError) {
  'use strict';

  /**
   * InfoTexts service.
   * @module cloud-api-v3-js-client/InfoTextsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new InfoTextsApi. 
   * @alias module:cloud-api-v3-js-client/InfoTextsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getInfoText operation.
     * @callback module:cloud-api-v3-js-client/InfoTextsApi~getInfoTextCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InfoText} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single info text
     * 
     * @param {String} infoTextId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/InfoTextsApi~getInfoTextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InfoText}
     */
    this.getInfoText = function(infoTextId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'infoTextId' is set
      if (infoTextId === undefined || infoTextId === null) {
        throw new Error("Missing the required parameter 'infoTextId' when calling getInfoText");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getInfoText");
      }


      var pathParams = {
        'infoTextId': infoTextId,
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
      var returnType = InfoText;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/infoTexts/{infoTextId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getInfoTexts operation.
     * @callback module:cloud-api-v3-js-client/InfoTextsApi~getInfoTextsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListInfoText} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all info texts
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:cloud-api-v3-js-client/InfoTextsApi~getInfoTextsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListInfoText}
     */
    this.getInfoTexts = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getInfoTexts");
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
      var returnType = ResultListInfoText;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/infoTexts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));