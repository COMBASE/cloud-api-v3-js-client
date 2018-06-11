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
    define(['ApiClient', 'model/Amount', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.ProductStock = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.Amount, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, Amount, ModelReference) {
  'use strict';




  /**
   * The ProductStock model module.
   * @module model/ProductStock
   * @version 3
   */

  /**
   * Constructs a new <code>ProductStock</code>.
   * @alias module:model/ProductStock
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ProductStock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductStock} obj Optional instance to populate.
   * @return {module:model/ProductStock} The populated <code>ProductStock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = Amount.constructFromObject(data['amount']);
      }
      if (data.hasOwnProperty('averagePurchasePrice')) {
        obj['averagePurchasePrice'] = ApiClient.convertToType(data['averagePurchasePrice'], 'Number');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ModelReference.constructFromObject(data['product']);
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
      }
      if (data.hasOwnProperty('warehouse')) {
        obj['warehouse'] = ModelReference.constructFromObject(data['warehouse']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Amount} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {Number} averagePurchasePrice
   */
  exports.prototype['averagePurchasePrice'] = undefined;
  /**
   * @member {module:model/ModelReference} product
   */
  exports.prototype['product'] = undefined;
  /**
   * @member {Number} revision
   */
  exports.prototype['revision'] = undefined;
  /**
   * @member {module:model/ModelReference} warehouse
   */
  exports.prototype['warehouse'] = undefined;



  return exports;
}));


