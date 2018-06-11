/**
 * KORONA.cloud API v3
 * Our api provides access to our cloud services
 *
 * OpenAPI spec version: 3
 * Contact: support@combase.net
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
    define(['ApiClient', 'model/AddressInformation', 'model/CustomerCard', 'model/CustomerInformation', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressInformation'), require('./CustomerCard'), require('./CustomerInformation'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.Customer = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.AddressInformation, root.KoronacloudApiV3.CustomerCard, root.KoronacloudApiV3.CustomerInformation, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, AddressInformation, CustomerCard, CustomerInformation, ModelReference) {
  'use strict';




  /**
   * The Customer model module.
   * @module model/Customer
   * @version 3
   */

  /**
   * Constructs a new <code>Customer</code>.
   * @alias module:model/Customer
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Customer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customer} obj Optional instance to populate.
   * @return {module:model/Customer} The populated <code>Customer</code> instance.
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
      if (data.hasOwnProperty('birthday')) {
        obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
      }
      if (data.hasOwnProperty('cards')) {
        obj['cards'] = ApiClient.convertToType(data['cards'], [CustomerCard]);
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('customerGroup')) {
        obj['customerGroup'] = ModelReference.constructFromObject(data['customerGroup']);
      }
      if (data.hasOwnProperty('economicZone')) {
        obj['economicZone'] = ModelReference.constructFromObject(data['economicZone']);
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
      if (data.hasOwnProperty('informations')) {
        obj['informations'] = ApiClient.convertToType(data['informations'], [CustomerInformation]);
      }
      if (data.hasOwnProperty('lastname')) {
        obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('taxId')) {
        obj['taxId'] = ApiClient.convertToType(data['taxId'], 'String');
      }
      if (data.hasOwnProperty('privacyPolicyAccepted')) {
        obj['privacyPolicyAccepted'] = ApiClient.convertToType(data['privacyPolicyAccepted'], 'Boolean');
      }
      if (data.hasOwnProperty('marketingContactPermitted')) {
        obj['marketingContactPermitted'] = ApiClient.convertToType(data['marketingContactPermitted'], 'Boolean');
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
   * @member {Date} birthday
   */
  exports.prototype['birthday'] = undefined;
  /**
   * @member {Array.<module:model/CustomerCard>} cards
   */
  exports.prototype['cards'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {module:model/ModelReference} customerGroup
   */
  exports.prototype['customerGroup'] = undefined;
  /**
   * @member {module:model/ModelReference} economicZone
   */
  exports.prototype['economicZone'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstname
   */
  exports.prototype['firstname'] = undefined;
  /**
   * @member {module:model/Customer.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * @member {Array.<module:model/CustomerInformation>} informations
   */
  exports.prototype['informations'] = undefined;
  /**
   * @member {String} lastname
   */
  exports.prototype['lastname'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * @member {String} taxId
   */
  exports.prototype['taxId'] = undefined;
  /**
   * @member {Boolean} privacyPolicyAccepted
   */
  exports.prototype['privacyPolicyAccepted'] = undefined;
  /**
   * @member {Boolean} marketingContactPermitted
   */
  exports.prototype['marketingContactPermitted'] = undefined;


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


  return exports;
}));


