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
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.AddOrUpdateResult = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddOrUpdateResult model module.
   * @module model/AddOrUpdateResult
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AddOrUpdateResult</code>.
   * @alias module:model/AddOrUpdateResult
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>AddOrUpdateResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddOrUpdateResult} obj Optional instance to populate.
   * @return {module:model/AddOrUpdateResult} The populated <code>AddOrUpdateResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AddOrUpdateResult.ActionEnum} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {module:model/AddOrUpdateResult.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>action</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: "ADDED"
     * @const
     */
    "ADDED": "ADDED",
    /**
     * value: "DELETED"
     * @const
     */
    "DELETED": "DELETED",
    /**
     * value: "QUEUED"
     * @const
     */
    "QUEUED": "QUEUED",
    /**
     * value: "UPDATED"
     * @const
     */
    "UPDATED": "UPDATED"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR",
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK"  };


  return exports;
}));


