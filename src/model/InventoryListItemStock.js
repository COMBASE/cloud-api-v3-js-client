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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.InventoryListItemStock = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InventoryListItemStock model module.
   * @module model/InventoryListItemStock
   * @version 3
   */

  /**
   * Constructs a new <code>InventoryListItemStock</code>.
   * @alias module:model/InventoryListItemStock
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InventoryListItemStock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InventoryListItemStock} obj Optional instance to populate.
   * @return {module:model/InventoryListItemStock} The populated <code>InventoryListItemStock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actual')) {
        obj['actual'] = ApiClient.convertToType(data['actual'], 'Number');
      }
      if (data.hasOwnProperty('nominal')) {
        obj['nominal'] = ApiClient.convertToType(data['nominal'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} actual
   */
  exports.prototype['actual'] = undefined;
  /**
   * @member {Number} nominal
   */
  exports.prototype['nominal'] = undefined;



  return exports;
}));


