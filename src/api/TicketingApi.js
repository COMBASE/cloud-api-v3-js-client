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
    define(['ApiClient', 'model/BadRequestError', 'model/EntryGate', 'model/Event', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListEntryGate', 'model/ResultListEvent', 'model/ResultListTicketDefinition', 'model/TicketDefinition', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequestError'), require('../model/EntryGate'), require('../model/Event'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListEntryGate'), require('../model/ResultListEvent'), require('../model/ResultListTicketDefinition'), require('../model/TicketDefinition'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.TicketingApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.EntryGate, root.KoronacloudApiV3.Event, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListEntryGate, root.KoronacloudApiV3.ResultListEvent, root.KoronacloudApiV3.ResultListTicketDefinition, root.KoronacloudApiV3.TicketDefinition, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, BadRequestError, EntryGate, Event, ForbiddenError, NotFoundError, ResultListEntryGate, ResultListEvent, ResultListTicketDefinition, TicketDefinition, TooManyRequestsError) {
  'use strict';

  /**
   * Ticketing service.
   * @module api/TicketingApi
   * @version 3
   */

  /**
   * Constructs a new TicketingApi. 
   * @alias module:api/TicketingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEntryGate operation.
     * @callback module:api/TicketingApi~getEntryGateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntryGate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the entry gate
     * 
     * @param {String} accountId the account id
     * @param {String} entryGateIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/TicketingApi~getEntryGateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntryGate}
     */
    this.getEntryGate = function(accountId, entryGateIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEntryGate");
      }

      // verify the required parameter 'entryGateIdOrNumber' is set
      if (entryGateIdOrNumber === undefined || entryGateIdOrNumber === null) {
        throw new Error("Missing the required parameter 'entryGateIdOrNumber' when calling getEntryGate");
      }


      var pathParams = {
        'accountId': accountId,
        'entryGateIdOrNumber': entryGateIdOrNumber
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
      var returnType = EntryGate;

      return this.apiClient.callApi(
        '/accounts/{accountId}/entryGates/{entryGateIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEntryGates operation.
     * @callback module:api/TicketingApi~getEntryGatesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListEntryGate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all entry gates
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/TicketingApi~getEntryGatesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListEntryGate}
     */
    this.getEntryGates = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEntryGates");
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
      var returnType = ResultListEntryGate;

      return this.apiClient.callApi(
        '/accounts/{accountId}/entryGates', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvent operation.
     * @callback module:api/TicketingApi~getEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the event
     * 
     * @param {String} accountId the account id
     * @param {String} eventIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/TicketingApi~getEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Event}
     */
    this.getEvent = function(accountId, eventIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEvent");
      }

      // verify the required parameter 'eventIdOrNumber' is set
      if (eventIdOrNumber === undefined || eventIdOrNumber === null) {
        throw new Error("Missing the required parameter 'eventIdOrNumber' when calling getEvent");
      }


      var pathParams = {
        'accountId': accountId,
        'eventIdOrNumber': eventIdOrNumber
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
      var returnType = Event;

      return this.apiClient.callApi(
        '/accounts/{accountId}/events/{eventIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/TicketingApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListEvent} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all events
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/TicketingApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListEvent}
     */
    this.getEvents = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getEvents");
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
      var returnType = ResultListEvent;

      return this.apiClient.callApi(
        '/accounts/{accountId}/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTicketDefinition operation.
     * @callback module:api/TicketingApi~getTicketDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TicketDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the ticket definition
     * 
     * @param {String} accountId the account id
     * @param {String} ticketDefinitionIdOrNumber id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)
     * @param {module:api/TicketingApi~getTicketDefinitionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TicketDefinition}
     */
    this.getTicketDefinition = function(accountId, ticketDefinitionIdOrNumber, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTicketDefinition");
      }

      // verify the required parameter 'ticketDefinitionIdOrNumber' is set
      if (ticketDefinitionIdOrNumber === undefined || ticketDefinitionIdOrNumber === null) {
        throw new Error("Missing the required parameter 'ticketDefinitionIdOrNumber' when calling getTicketDefinition");
      }


      var pathParams = {
        'accountId': accountId,
        'ticketDefinitionIdOrNumber': ticketDefinitionIdOrNumber
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
      var returnType = TicketDefinition;

      return this.apiClient.callApi(
        '/accounts/{accountId}/ticketDefinitions/{ticketDefinitionIdOrNumber}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTicketDefinitions operation.
     * @callback module:api/TicketingApi~getTicketDefinitionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListTicketDefinition} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all ticket definitions
     * 
     * @param {String} accountId the account id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:api/TicketingApi~getTicketDefinitionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListTicketDefinition}
     */
    this.getTicketDefinitions = function(accountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getTicketDefinitions");
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
      var returnType = ResultListTicketDefinition;

      return this.apiClient.callApi(
        '/accounts/{accountId}/ticketDefinitions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
