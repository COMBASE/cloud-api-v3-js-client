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
    define(['ApiClient', 'model/RevenueData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RevenueData'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.PeriodMapStringRevenueData = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.RevenueData);
  }
}(this, function(ApiClient, RevenueData) {
  'use strict';




  /**
   * The PeriodMapStringRevenueData model module.
   * @module model/PeriodMapStringRevenueData
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PeriodMapStringRevenueData</code>.
   * @alias module:model/PeriodMapStringRevenueData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PeriodMapStringRevenueData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodMapStringRevenueData} obj Optional instance to populate.
   * @return {module:model/PeriodMapStringRevenueData} The populated <code>PeriodMapStringRevenueData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Date');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], {'String': RevenueData});
      }
    }
    return obj;
  }

  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Date} end
   */
  exports.prototype['end'] = undefined;
  /**
   * @member {Object.<String, module:model/RevenueData>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


