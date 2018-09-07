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
    define(['ApiClient', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.Payment = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, ModelReference) {
  'use strict';




  /**
   * The Payment model module.
   * @module model/Payment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Payment</code>.
   * @alias module:model/Payment
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment} obj Optional instance to populate.
   * @return {module:model/Payment} The populated <code>Payment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ModelReference.constructFromObject(data['currency']);
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ModelReference.constructFromObject(data['paymentMethod']);
      }
      if (data.hasOwnProperty('transactionTime')) {
        obj['transactionTime'] = ApiClient.convertToType(data['transactionTime'], 'Date');
      }
      if (data.hasOwnProperty('transactionToken')) {
        obj['transactionToken'] = ApiClient.convertToType(data['transactionToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {module:model/ModelReference} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/ModelReference} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * @member {Date} transactionTime
   */
  exports.prototype['transactionTime'] = undefined;
  /**
   * @member {String} transactionToken
   */
  exports.prototype['transactionToken'] = undefined;



  return exports;
}));


