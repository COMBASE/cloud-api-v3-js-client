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
    define(['ApiClient', 'model/DeviceInformation', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceInformation'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.Pos = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.DeviceInformation, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, DeviceInformation, ModelReference) {
  'use strict';




  /**
   * The Pos model module.
   * @module model/Pos
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Pos</code>.
   * @alias module:model/Pos
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Pos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pos} obj Optional instance to populate.
   * @return {module:model/Pos} The populated <code>Pos</code> instance.
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
      if (data.hasOwnProperty('coupled')) {
        obj['coupled'] = ApiClient.convertToType(data['coupled'], 'Boolean');
      }
      if (data.hasOwnProperty('couplingId')) {
        obj['couplingId'] = ApiClient.convertToType(data['couplingId'], 'String');
      }
      if (data.hasOwnProperty('defaultCustomerGroup')) {
        obj['defaultCustomerGroup'] = ModelReference.constructFromObject(data['defaultCustomerGroup']);
      }
      if (data.hasOwnProperty('defaultPaymentMethod')) {
        obj['defaultPaymentMethod'] = ModelReference.constructFromObject(data['defaultPaymentMethod']);
      }
      if (data.hasOwnProperty('deviceInformation')) {
        obj['deviceInformation'] = DeviceInformation.constructFromObject(data['deviceInformation']);
      }
      if (data.hasOwnProperty('external')) {
        obj['external'] = ApiClient.convertToType(data['external'], 'Boolean');
      }
      if (data.hasOwnProperty('lastReceiptNumber')) {
        obj['lastReceiptNumber'] = ApiClient.convertToType(data['lastReceiptNumber'], 'String');
      }
      if (data.hasOwnProperty('lastZCount')) {
        obj['lastZCount'] = ApiClient.convertToType(data['lastZCount'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('organizationalUnit')) {
        obj['organizationalUnit'] = ModelReference.constructFromObject(data['organizationalUnit']);
      }
      if (data.hasOwnProperty('printFooterLines')) {
        obj['printFooterLines'] = ApiClient.convertToType(data['printFooterLines'], {'String': 'String'});
      }
      if (data.hasOwnProperty('printHeaderLines')) {
        obj['printHeaderLines'] = ApiClient.convertToType(data['printHeaderLines'], {'String': 'String'});
      }
      if (data.hasOwnProperty('receiptInfoTexts')) {
        obj['receiptInfoTexts'] = ApiClient.convertToType(data['receiptInfoTexts'], [ModelReference]);
      }
      if (data.hasOwnProperty('useAlternativeSector')) {
        obj['useAlternativeSector'] = ApiClient.convertToType(data['useAlternativeSector'], 'Boolean');
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
   * @member {Boolean} coupled
   */
  exports.prototype['coupled'] = undefined;
  /**
   * @member {String} couplingId
   */
  exports.prototype['couplingId'] = undefined;
  /**
   * @member {module:model/ModelReference} defaultCustomerGroup
   */
  exports.prototype['defaultCustomerGroup'] = undefined;
  /**
   * @member {module:model/ModelReference} defaultPaymentMethod
   */
  exports.prototype['defaultPaymentMethod'] = undefined;
  /**
   * @member {module:model/DeviceInformation} deviceInformation
   */
  exports.prototype['deviceInformation'] = undefined;
  /**
   * @member {Boolean} external
   */
  exports.prototype['external'] = undefined;
  /**
   * @member {String} lastReceiptNumber
   */
  exports.prototype['lastReceiptNumber'] = undefined;
  /**
   * @member {Number} lastZCount
   */
  exports.prototype['lastZCount'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ModelReference} organizationalUnit
   */
  exports.prototype['organizationalUnit'] = undefined;
  /**
   * @member {Object.<String, String>} printFooterLines
   */
  exports.prototype['printFooterLines'] = undefined;
  /**
   * @member {Object.<String, String>} printHeaderLines
   */
  exports.prototype['printHeaderLines'] = undefined;
  /**
   * @member {Array.<module:model/ModelReference>} receiptInfoTexts
   */
  exports.prototype['receiptInfoTexts'] = undefined;
  /**
   * @member {Boolean} useAlternativeSector
   */
  exports.prototype['useAlternativeSector'] = undefined;



  return exports;
}));


