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
    root.CloudApiV3JsClient.ModelReference = factory(root.CloudApiV3JsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelReference model module.
   * @module model/ModelReference
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ModelReference</code>.
   * generic model for representation of id, number and name containing model purposes
   * @alias module:model/ModelReference
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ModelReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelReference} obj Optional instance to populate.
   * @return {module:model/ModelReference} The populated <code>ModelReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
    }
    return obj;
  }

  /**
   * global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx). recommanded to use for linking purposes. will never change.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * name, like it is set in backoffice
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * number, like it is set in backoffice
   * @member {String} number
   */
  exports.prototype['number'] = undefined;



  return exports;
}));


