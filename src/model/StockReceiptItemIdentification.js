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
    root.KoronacloudApiV3.StockReceiptItemIdentification = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StockReceiptItemIdentification model module.
   * @module model/StockReceiptItemIdentification
   * @version 3
   */

  /**
   * Constructs a new <code>StockReceiptItemIdentification</code>.
   * @alias module:model/StockReceiptItemIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StockReceiptItemIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockReceiptItemIdentification} obj Optional instance to populate.
   * @return {module:model/StockReceiptItemIdentification} The populated <code>StockReceiptItemIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('buyer')) {
        obj['buyer'] = ApiClient.convertToType(data['buyer'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
      if (data.hasOwnProperty('supplier')) {
        obj['supplier'] = ApiClient.convertToType(data['supplier'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} buyer
   */
  exports.prototype['buyer'] = undefined;
  /**
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;
  /**
   * @member {String} supplier
   */
  exports.prototype['supplier'] = undefined;



  return exports;
}));


