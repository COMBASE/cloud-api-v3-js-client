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
    define(['ApiClient', 'model/ModelReference', 'model/SalesTaxRate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'), require('./SalesTaxRate'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.SalesTax = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference, root.KoronacloudApiV3.SalesTaxRate);
  }
}(this, function(ApiClient, ModelReference, SalesTaxRate) {
  'use strict';




  /**
   * The SalesTax model module.
   * @module model/SalesTax
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SalesTax</code>.
   * @alias module:model/SalesTax
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>SalesTax</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SalesTax} obj Optional instance to populate.
   * @return {module:model/SalesTax} The populated <code>SalesTax</code> instance.
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
      if (data.hasOwnProperty('economicZone')) {
        obj['economicZone'] = ModelReference.constructFromObject(data['economicZone']);
      }
      if (data.hasOwnProperty('included')) {
        obj['included'] = ApiClient.convertToType(data['included'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('rates')) {
        obj['rates'] = ApiClient.convertToType(data['rates'], [SalesTaxRate]);
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
   * @member {module:model/ModelReference} economicZone
   */
  exports.prototype['economicZone'] = undefined;
  /**
   * @member {Boolean} included
   */
  exports.prototype['included'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/SalesTaxRate>} rates
   */
  exports.prototype['rates'] = undefined;



  return exports;
}));


