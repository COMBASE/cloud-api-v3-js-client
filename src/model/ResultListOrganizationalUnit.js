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
    define(['ApiClient', 'model/OrganizationalUnit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OrganizationalUnit'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.ResultListOrganizationalUnit = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.OrganizationalUnit);
  }
}(this, function(ApiClient, OrganizationalUnit) {
  'use strict';




  /**
   * The ResultListOrganizationalUnit model module.
   * @module model/ResultListOrganizationalUnit
   * @version 3
   */

  /**
   * Constructs a new <code>ResultListOrganizationalUnit</code>.
   * @alias module:model/ResultListOrganizationalUnit
   * @class
   * @param currentPage {Number} number of the current page, starting from 1
   * @param links {Object.<String, String>} navigation links (previous, self, next)
   * @param pagesTotal {Number} pages count total
   * @param results {Array.<module:model/OrganizationalUnit>} result list
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
   * Constructs a <code>ResultListOrganizationalUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultListOrganizationalUnit} obj Optional instance to populate.
   * @return {module:model/ResultListOrganizationalUnit} The populated <code>ResultListOrganizationalUnit</code> instance.
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
        obj['results'] = ApiClient.convertToType(data['results'], [OrganizationalUnit]);
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
   * @member {Array.<module:model/OrganizationalUnit>} results
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


