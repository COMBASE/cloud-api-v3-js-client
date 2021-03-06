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
    define(['ApiClient', 'model/ModelReference', 'model/Validity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'), require('./Validity'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.AdditionalReceiptInfoType = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference, root.KoronacloudApiV3.Validity);
  }
}(this, function(ApiClient, ModelReference, Validity) {
  'use strict';




  /**
   * The AdditionalReceiptInfoType model module.
   * @module model/AdditionalReceiptInfoType
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>AdditionalReceiptInfoType</code>.
   * @alias module:model/AdditionalReceiptInfoType
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>AdditionalReceiptInfoType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdditionalReceiptInfoType} obj Optional instance to populate.
   * @return {module:model/AdditionalReceiptInfoType} The populated <code>AdditionalReceiptInfoType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = ApiClient.convertToType(data['revision'], 'Number');
      }
      if (data.hasOwnProperty('cashierInputRequired')) {
        obj['cashierInputRequired'] = ApiClient.convertToType(data['cashierInputRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('customerGroups')) {
        obj['customerGroups'] = ApiClient.convertToType(data['customerGroups'], [ModelReference]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('minItemQuantity')) {
        obj['minItemQuantity'] = ApiClient.convertToType(data['minItemQuantity'], 'Number');
      }
      if (data.hasOwnProperty('minTotal')) {
        obj['minTotal'] = ApiClient.convertToType(data['minTotal'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], ['String']);
      }
      if (data.hasOwnProperty('organizationalUnits')) {
        obj['organizationalUnits'] = ApiClient.convertToType(data['organizationalUnits'], [ModelReference]);
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ModelReference.constructFromObject(data['tag']);
      }
      if (data.hasOwnProperty('validity')) {
        obj['validity'] = Validity.constructFromObject(data['validity']);
      }
    }
    return obj;
  }

  /**
   * indicates whether the object is active for use or not
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * number of the object, like it is set in backoffice; will be removed when active=false
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers.
   * @member {Number} revision
   */
  exports.prototype['revision'] = undefined;
  /**
   * @member {Boolean} cashierInputRequired
   */
  exports.prototype['cashierInputRequired'] = undefined;
  /**
   * @member {Array.<module:model/ModelReference>} customerGroups
   */
  exports.prototype['customerGroups'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Number} minItemQuantity
   */
  exports.prototype['minItemQuantity'] = undefined;
  /**
   * @member {Number} minTotal
   */
  exports.prototype['minTotal'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<String>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Array.<module:model/ModelReference>} organizationalUnits
   */
  exports.prototype['organizationalUnits'] = undefined;
  /**
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {module:model/ModelReference} tag
   */
  exports.prototype['tag'] = undefined;
  /**
   * @member {module:model/Validity} validity
   */
  exports.prototype['validity'] = undefined;



  return exports;
}));


