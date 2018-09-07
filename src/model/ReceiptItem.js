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
    define(['ApiClient', 'model/ModelReference', 'model/TotalPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'), require('./TotalPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.ReceiptItem = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.ModelReference, root.CloudApiV3JsClient.TotalPrice);
  }
}(this, function(ApiClient, ModelReference, TotalPrice) {
  'use strict';




  /**
   * The ReceiptItem model module.
   * @module model/ReceiptItem
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ReceiptItem</code>.
   * @alias module:model/ReceiptItem
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>ReceiptItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReceiptItem} obj Optional instance to populate.
   * @return {module:model/ReceiptItem} The populated <code>ReceiptItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bookingTime')) {
        obj['bookingTime'] = ApiClient.convertToType(data['bookingTime'], 'Date');
      }
      if (data.hasOwnProperty('commodityGroup')) {
        obj['commodityGroup'] = ModelReference.constructFromObject(data['commodityGroup']);
      }
      if (data.hasOwnProperty('indent')) {
        obj['indent'] = ApiClient.convertToType(data['indent'], 'Number');
      }
      if (data.hasOwnProperty('infoTexts')) {
        obj['infoTexts'] = ApiClient.convertToType(data['infoTexts'], ['String']);
      }
      if (data.hasOwnProperty('manualPrice')) {
        obj['manualPrice'] = ApiClient.convertToType(data['manualPrice'], 'Boolean');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ModelReference.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ModelReference.constructFromObject(data['sector']);
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = TotalPrice.constructFromObject(data['total']);
      }
    }
    return obj;
  }

  /**
   * @member {Date} bookingTime
   */
  exports.prototype['bookingTime'] = undefined;
  /**
   * @member {module:model/ModelReference} commodityGroup
   */
  exports.prototype['commodityGroup'] = undefined;
  /**
   * @member {Number} indent
   */
  exports.prototype['indent'] = undefined;
  /**
   * @member {Array.<String>} infoTexts
   */
  exports.prototype['infoTexts'] = undefined;
  /**
   * @member {Boolean} manualPrice
   */
  exports.prototype['manualPrice'] = undefined;
  /**
   * @member {module:model/ModelReference} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * @member {module:model/ModelReference} sector
   */
  exports.prototype['sector'] = undefined;
  /**
   * @member {module:model/TotalPrice} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


