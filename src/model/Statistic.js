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
    define(['ApiClient', 'model/ModelReference', 'model/PeriodObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'), require('./PeriodObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.Statistic = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.ModelReference, root.CloudApiV3JsClient.PeriodObject);
  }
}(this, function(ApiClient, ModelReference, PeriodObject) {
  'use strict';




  /**
   * The Statistic model module.
   * @module model/Statistic
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Statistic</code>.
   * @alias module:model/Statistic
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Statistic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistic} obj Optional instance to populate.
   * @return {module:model/Statistic} The populated <code>Statistic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationalUnit')) {
        obj['organizationalUnit'] = ModelReference.constructFromObject(data['organizationalUnit']);
      }
      if (data.hasOwnProperty('currentPeriod')) {
        obj['currentPeriod'] = PeriodObject.constructFromObject(data['currentPeriod']);
      }
      if (data.hasOwnProperty('previousPeriod')) {
        obj['previousPeriod'] = PeriodObject.constructFromObject(data['previousPeriod']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ModelReference} organizationalUnit
   */
  exports.prototype['organizationalUnit'] = undefined;
  /**
   * @member {module:model/PeriodObject} currentPeriod
   */
  exports.prototype['currentPeriod'] = undefined;
  /**
   * @member {module:model/PeriodObject} previousPeriod
   */
  exports.prototype['previousPeriod'] = undefined;



  return exports;
}));


