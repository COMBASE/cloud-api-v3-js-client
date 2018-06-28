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
    root.KoronacloudApiV3.SupplierContactPerson = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SupplierContactPerson model module.
   * @module model/SupplierContactPerson
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SupplierContactPerson</code>.
   * @alias module:model/SupplierContactPerson
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>SupplierContactPerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SupplierContactPerson} obj Optional instance to populate.
   * @return {module:model/SupplierContactPerson} The populated <code>SupplierContactPerson</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('firstname')) {
        obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('salutation')) {
        obj['salutation'] = ApiClient.convertToType(data['salutation'], 'String');
      }
      if (data.hasOwnProperty('surname')) {
        obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} salutation
   */
  exports.prototype['salutation'] = undefined;
  /**
   * @member {String} surname
   */
  exports.prototype['surname'] = undefined;



  return exports;
}));


