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
    root.KoronacloudApiV3.Cashier = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Cashier model module.
   * @module model/Cashier
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Cashier</code>.
   * @alias module:model/Cashier
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>Cashier</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cashier} obj Optional instance to populate.
   * @return {module:model/Cashier} The populated <code>Cashier</code> instance.
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
      if (data.hasOwnProperty('alias')) {
        obj['alias'] = ApiClient.convertToType(data['alias'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('loginCode')) {
        obj['loginCode'] = ApiClient.convertToType(data['loginCode'], 'String');
      }
      if (data.hasOwnProperty('loginPassword')) {
        obj['loginPassword'] = ApiClient.convertToType(data['loginPassword'], 'String');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
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
   * @member {String} alias
   */
  exports.prototype['alias'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {module:model/Cashier.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * contains the md5 hash of the cashiers login code
   * @member {String} loginCode
   */
  exports.prototype['loginCode'] = undefined;
  /**
   * contains the md5 hash of the cashiers login password
   * @member {String} loginPassword
   */
  exports.prototype['loginPassword'] = undefined;
  /**
   * @member {Array.<module:model/Cashier.PermissionsEnum>} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "MALE"
     * @const
     */
    "MALE": "MALE",
    /**
     * value: "FEMALE"
     * @const
     */
    "FEMALE": "FEMALE"  };

  /**
   * Allowed values for the <code>permissions</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionsEnum = {
    /**
     * value: "BLANK_RECEIPT"
     * @const
     */
    "BLANK_RECEIPT": "BLANK_RECEIPT",
    /**
     * value: "CANCEL_ITEM"
     * @const
     */
    "CANCEL_ITEM": "CANCEL_ITEM",
    /**
     * value: "CANCEL_LAST_RECEIPT_ITEM"
     * @const
     */
    "CANCEL_LAST_RECEIPT_ITEM": "CANCEL_LAST_RECEIPT_ITEM",
    /**
     * value: "CANCEL_RECEIPT"
     * @const
     */
    "CANCEL_RECEIPT": "CANCEL_RECEIPT",
    /**
     * value: "DELETE_RECEIPT"
     * @const
     */
    "DELETE_RECEIPT": "DELETE_RECEIPT",
    /**
     * value: "EXTERNAL_POINT_OF_SALE"
     * @const
     */
    "EXTERNAL_POINT_OF_SALE": "EXTERNAL_POINT_OF_SALE",
    /**
     * value: "FOREIGN_RECEIPT"
     * @const
     */
    "FOREIGN_RECEIPT": "FOREIGN_RECEIPT",
    /**
     * value: "PRICE"
     * @const
     */
    "PRICE": "PRICE",
    /**
     * value: "REPORTS"
     * @const
     */
    "REPORTS": "REPORTS",
    /**
     * value: "RETURN"
     * @const
     */
    "RETURN": "RETURN",
    /**
     * value: "REVISION"
     * @const
     */
    "REVISION": "REVISION",
    /**
     * value: "TERMINATE_BREAK_LOCK"
     * @const
     */
    "TERMINATE_BREAK_LOCK": "TERMINATE_BREAK_LOCK"  };


  return exports;
}));


