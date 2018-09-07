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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.Weather = factory(root.CloudApiV3JsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Weather model module.
   * @module model/Weather
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Weather</code>.
   * @alias module:model/Weather
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Weather</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Weather} obj Optional instance to populate.
   * @return {module:model/Weather} The populated <code>Weather</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('temperature')) {
        obj['temperature'] = ApiClient.convertToType(data['temperature'], 'Number');
      }
      if (data.hasOwnProperty('temperatureUnit')) {
        obj['temperatureUnit'] = ApiClient.convertToType(data['temperatureUnit'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Number} temperature
   */
  exports.prototype['temperature'] = undefined;
  /**
   * @member {module:model/Weather.TemperatureUnitEnum} temperatureUnit
   */
  exports.prototype['temperatureUnit'] = undefined;


  /**
   * Allowed values for the <code>temperatureUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TemperatureUnitEnum = {
    /**
     * value: "CELSIUS"
     * @const
     */
    "CELSIUS": "CELSIUS",
    /**
     * value: "FAHRENHEIT"
     * @const
     */
    "FAHRENHEIT": "FAHRENHEIT",
    /**
     * value: "KELVIN"
     * @const
     */
    "KELVIN": "KELVIN"  };


  return exports;
}));


