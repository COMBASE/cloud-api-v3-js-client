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
    define(['ApiClient', 'model/AddressInformation', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.OrganizationalUnit = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.AddressInformation, root.CloudApiV3JsClient.ModelReference);
  }
}(this, function(ApiClient, AddressInformation, ModelReference) {
  'use strict';




  /**
   * The OrganizationalUnit model module.
   * @module model/OrganizationalUnit
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>OrganizationalUnit</code>.
   * @alias module:model/OrganizationalUnit
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;







    _this['name'] = name;



  };

  /**
   * Constructs a <code>OrganizationalUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrganizationalUnit} obj Optional instance to populate.
   * @return {module:model/OrganizationalUnit} The populated <code>OrganizationalUnit</code> instance.
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
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressInformation.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('economicZone')) {
        obj['economicZone'] = ModelReference.constructFromObject(data['economicZone']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parentOrganizationalUnit')) {
        obj['parentOrganizationalUnit'] = ModelReference.constructFromObject(data['parentOrganizationalUnit']);
      }
      if (data.hasOwnProperty('priceGroup')) {
        obj['priceGroup'] = ModelReference.constructFromObject(data['priceGroup']);
      }
      if (data.hasOwnProperty('warehouse')) {
        obj['warehouse'] = ApiClient.convertToType(data['warehouse'], 'Boolean');
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
   * @member {module:model/AddressInformation} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {module:model/ModelReference} economicZone
   */
  exports.prototype['economicZone'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ModelReference} parentOrganizationalUnit
   */
  exports.prototype['parentOrganizationalUnit'] = undefined;
  /**
   * @member {module:model/ModelReference} priceGroup
   */
  exports.prototype['priceGroup'] = undefined;
  /**
   * @member {Boolean} warehouse
   */
  exports.prototype['warehouse'] = undefined;



  return exports;
}));


