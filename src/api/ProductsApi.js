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
    define(['ApiClient', 'model/AddOrUpdateResult', 'model/BadRequestError', 'model/ForbiddenError', 'model/NotFoundError', 'model/Product', 'model/ResultListProduct', 'model/ResultListProductStock', 'model/TooManyRequestsError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddOrUpdateResult'), require('../model/BadRequestError'), require('../model/ForbiddenError'), require('../model/NotFoundError'), require('../model/Product'), require('../model/ResultListProduct'), require('../model/ResultListProductStock'), require('../model/TooManyRequestsError'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.ProductsApi = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.AddOrUpdateResult, root.CloudApiV3JsClient.BadRequestError, root.CloudApiV3JsClient.ForbiddenError, root.CloudApiV3JsClient.NotFoundError, root.CloudApiV3JsClient.Product, root.CloudApiV3JsClient.ResultListProduct, root.CloudApiV3JsClient.ResultListProductStock, root.CloudApiV3JsClient.TooManyRequestsError);
  }
}(this, function(ApiClient, AddOrUpdateResult, BadRequestError, ForbiddenError, NotFoundError, Product, ResultListProduct, ResultListProductStock, TooManyRequestsError) {
  'use strict';

  /**
   * Products service.
   * @module api/ProductsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ProductsApi. 
   * @alias module:api/ProductsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProducts operation.
     * @callback module:api/ProductsApi~addProductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * adds a batch of new products
     * 
     * @param {Array.<module:model/Product>} body array of new products
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/ProductsApi~addProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.addProducts = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addProducts");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling addProducts");
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
        '/accounts/{koronaAccountId}/products', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:api/ProductsApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deletes the single product
     * 
     * @param {String} productId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/ProductsApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProduct = function(productId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling deleteProduct");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling deleteProduct");
      }


      var pathParams = {
        'productId': productId,
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
        '/accounts/{koronaAccountId}/products/{productId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:api/ProductsApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * returns the single product
     * 
     * @param {String} productId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/ProductsApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Product}
     */
    this.getProduct = function(productId, koronaAccountId, callback) {
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProduct");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getProduct");
      }


      var pathParams = {
        'productId': productId,
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
      var returnType = Product;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/products/{productId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProductStocks operation.
     * @callback module:api/ProductsApi~getProductStocksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListProductStock} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists the product stocks in different warehouses (KORONA.retail required)
     * 
     * @param {String} productId id of the related object (important: id should match the uuid-format)
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {module:api/ProductsApi~getProductStocksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListProductStock}
     */
    this.getProductStocks = function(productId, koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling getProductStocks");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getProductStocks");
      }


      var pathParams = {
        'productId': productId,
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
        '/accounts/{koronaAccountId}/products/{productId}/stocks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProducts operation.
     * @callback module:api/ProductsApi~getProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListProduct} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * lists all products
     * 
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page number of the page to fetch
     * @param {Number} opts.size amount of objects to return per page
     * @param {String} opts.sort attribute to sort by (multiple separated by comma; max. 5)
     * @param {Number} opts.revision last revision number, objects with a greater revision than this will be returned
     * @param {Boolean} opts.includeDeleted indicates deleted objects should be loaded or not (default: false)
     * @param {String} opts.productCodes at least one product code to filter by (multiple separated by comma; max. 10)
     * @param {String} opts.commodityGroup commodity group id  to filter by
     * @param {String} opts.assortment assortment id to filter by
     * @param {String} opts.tag tag id to filter by
     * @param {module:api/ProductsApi~getProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultListProduct}
     */
    this.getProducts = function(koronaAccountId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling getProducts");
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
        'productCodes': opts['productCodes'],
        'commodityGroup': opts['commodityGroup'],
        'assortment': opts['assortment'],
        'tag': opts['tag'],
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
      var returnType = ResultListProduct;

      return this.apiClient.callApi(
        '/accounts/{koronaAccountId}/products', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:api/ProductsApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates the single product
     * if [number] is set, the number of the object will change and the resource location as well
     * @param {String} productId id of the related object (important: id should match the uuid-format)
     * @param {module:model/Product} body the properties to update of the product
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/ProductsApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateProduct = function(productId, body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'productId' is set
      if (productId === undefined || productId === null) {
        throw new Error("Missing the required parameter 'productId' when calling updateProduct");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProduct");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateProduct");
      }


      var pathParams = {
        'productId': productId,
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
        '/accounts/{koronaAccountId}/products/{productId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProducts operation.
     * @callback module:api/ProductsApi~updateProductsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AddOrUpdateResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updates a batch of products
     * [number] must be set in the objects, otherwise the object cannot be updated
     * @param {Array.<module:model/Product>} body a array of existing products
     * @param {String} koronaAccountId account id of the korona.cloud account
     * @param {module:api/ProductsApi~updateProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AddOrUpdateResult>}
     */
    this.updateProducts = function(body, koronaAccountId, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateProducts");
      }

      // verify the required parameter 'koronaAccountId' is set
      if (koronaAccountId === undefined || koronaAccountId === null) {
        throw new Error("Missing the required parameter 'koronaAccountId' when calling updateProducts");
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
        '/accounts/{koronaAccountId}/products', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
