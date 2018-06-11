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
    define(['ApiClient', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CommodityGroupSummary = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, ModelReference) {
  'use strict';




  /**
   * The CommodityGroupSummary model module.
   * @module model/CommodityGroupSummary
   * @version 3
   */

  /**
   * Constructs a new <code>CommodityGroupSummary</code>.
   * @alias module:model/CommodityGroupSummary
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CommodityGroupSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommodityGroupSummary} obj Optional instance to populate.
   * @return {module:model/CommodityGroupSummary} The populated <code>CommodityGroupSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('commodityGroup')) {
        obj['commodityGroup'] = ModelReference.constructFromObject(data['commodityGroup']);
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], 'Number');
      }
      if (data.hasOwnProperty('revenue')) {
        obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ModelReference} commodityGroup
   */
  exports.prototype['commodityGroup'] = undefined;
  /**
   * @member {Number} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * @member {Number} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Number} revenue
   */
  exports.prototype['revenue'] = undefined;



  return exports;
}));


