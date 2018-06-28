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
    define(['ApiClient', 'model/Supplier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Supplier'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.ResultListSupplier = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.Supplier);
  }
}(this, function(ApiClient, Supplier) {
  'use strict';




  /**
   * The ResultListSupplier model module.
   * @module model/ResultListSupplier
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ResultListSupplier</code>.
   * @alias module:model/ResultListSupplier
   * @class
   * @param currentPage {Number} number of the current page, starting from 1
   * @param links {Object.<String, String>} navigation links (previous, self, next)
   * @param pagesTotal {Number} pages count total
   * @param results {Array.<module:model/Supplier>} result list
   * @param resultsOfPage {Number} result count of the current page
   * @param resultsTotal {Number} result count total
   */
  var exports = function(currentPage, links, pagesTotal, results, resultsOfPage, resultsTotal) {
    var _this = this;

    _this['currentPage'] = currentPage;
    _this['links'] = links;
    _this['pagesTotal'] = pagesTotal;
    _this['results'] = results;
    _this['resultsOfPage'] = resultsOfPage;
    _this['resultsTotal'] = resultsTotal;
  };

  /**
   * Constructs a <code>ResultListSupplier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultListSupplier} obj Optional instance to populate.
   * @return {module:model/ResultListSupplier} The populated <code>ResultListSupplier</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currentPage')) {
        obj['currentPage'] = ApiClient.convertToType(data['currentPage'], 'Number');
      }
      if (data.hasOwnProperty('links')) {
        obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
      }
      if (data.hasOwnProperty('pagesTotal')) {
        obj['pagesTotal'] = ApiClient.convertToType(data['pagesTotal'], 'Number');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Supplier]);
      }
      if (data.hasOwnProperty('resultsOfPage')) {
        obj['resultsOfPage'] = ApiClient.convertToType(data['resultsOfPage'], 'Number');
      }
      if (data.hasOwnProperty('resultsTotal')) {
        obj['resultsTotal'] = ApiClient.convertToType(data['resultsTotal'], 'Number');
      }
    }
    return obj;
  }

  /**
   * number of the current page, starting from 1
   * @member {Number} currentPage
   */
  exports.prototype['currentPage'] = undefined;
  /**
   * navigation links (previous, self, next)
   * @member {Object.<String, String>} links
   */
  exports.prototype['links'] = undefined;
  /**
   * pages count total
   * @member {Number} pagesTotal
   */
  exports.prototype['pagesTotal'] = undefined;
  /**
   * result list
   * @member {Array.<module:model/Supplier>} results
   */
  exports.prototype['results'] = undefined;
  /**
   * result count of the current page
   * @member {Number} resultsOfPage
   */
  exports.prototype['resultsOfPage'] = undefined;
  /**
   * result count total
   * @member {Number} resultsTotal
   */
  exports.prototype['resultsTotal'] = undefined;



  return exports;
}));


