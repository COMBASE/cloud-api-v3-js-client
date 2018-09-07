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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/ResultListTag', 'model/Tag', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/ResultListTag'), require('../model/Tag'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.TagsApi = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddOrUpdateResult, root.KoronacloudApiV3.BadRequestError, root.KoronacloudApiV3.ForbiddenError, root.KoronacloudApiV3.NotFoundError, root.KoronacloudApiV3.ResultListTag, root.KoronacloudApiV3.Tag, root.KoronacloudApiV3.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, ForbiddenError, NotFoundError, ResultListTag, Tag, TooManyRequestsError) {
  'use strict';

  /**
   * Tags service.
   * @module cloud-api-v3-js-client/TagsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:cloud-api-v3-js-client/TagsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addTags operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~addTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new tags
     * 
     * @param {Array.<module:model/Tag>} body array of new tags
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/TagsApi~addTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addTags = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addTags");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addTags");
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
        '/accounts/{koronaAccountId}/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTag operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~deleteTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single tag
     * 
     * @param {String} tagId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/TagsApi~deleteTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTag = function(tagId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling deleteTag");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteTag");
      }


      var pathParams = {
        'tagId': tagId,
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
        '/accounts/{koronaAccountId}/tags/{tagId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTag operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~getTagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single tag
     * 
     * @param {String} tagId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/TagsApi~getTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.getTag = function(tagId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling getTag");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getTag");
      }


      var pathParams = {
        'tagId': tagId,
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
      var returnType = Tag;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/tags/{tagId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTags operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~getTagsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all tags
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {module:cloud-api-v3-js-client/TagsApi~getTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListTag}
     */
    this.getTags = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getTags");
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
      var returnType = ResultListTag;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTag operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~updateTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single tag
     * 
     * @param {String} tagId id of the related object (important: id should match the uuid-format)
     * @param {module:model/Tag} body the properties to update of the tag
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/TagsApi~updateTagCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateTag = function(tagId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'tagId' is set
      if (tagId === undefined || tagId === null) {
        throw new Error("Missing the required parameter 'tagId' when calling updateTag");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTag");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateTag");
      }


      var pathParams = {
        'tagId': tagId,
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
        '/accounts/{koronaAccountId}/tags/{tagId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTags operation.
     * @callback module:cloud-api-v3-js-client/TagsApi~updateTagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of tags
     * [number] must be set in the objects, otherwise the object cannot be updated
     * @param {Array.<module:model/Tag>} body array of existing tags
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:cloud-api-v3-js-client/TagsApi~updateTagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateTags = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTags");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateTags");
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
        '/accounts/{koronaAccountId}/tags', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
