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
    define(['ApiClient', 'model/ModelReference', 'model/ProductTransferInvolvedPartyInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'), require('./ProductTransferInvolvedPartyInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.StockReceipt = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference, root.KoronacloudApiV3.ProductTransferInvolvedPartyInformation);
  }
}(this, function(ApiClient, ModelReference, ProductTransferInvolvedPartyInformation) {
  'use strict';




  /**
   * The StockReceipt model module.
   * @module model/StockReceipt
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>StockReceipt</code>.
   * @alias module:model/StockReceipt
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>StockReceipt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StockReceipt} obj Optional instance to populate.
   * @return {module:model/StockReceipt} The populated <code>StockReceipt</code> instance.
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
      if (data.hasOwnProperty('arrivalDate')) {
        obj['arrivalDate'] = ApiClient.convertToType(data['arrivalDate'], 'Date');
      }
      if (data.hasOwnProperty('bookingTime')) {
        obj['bookingTime'] = ApiClient.convertToType(data['bookingTime'], 'Date');
      }
      if (data.hasOwnProperty('bookingUser')) {
        obj['bookingUser'] = ModelReference.constructFromObject(data['bookingUser']);
      }
      if (data.hasOwnProperty('cashier')) {
        obj['cashier'] = ModelReference.constructFromObject(data['cashier']);
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('createUser')) {
        obj['createUser'] = ModelReference.constructFromObject(data['createUser']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = ModelReference.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dispatchNotification')) {
        obj['dispatchNotification'] = ModelReference.constructFromObject(data['dispatchNotification']);
      }
      if (data.hasOwnProperty('itemsCount')) {
        obj['itemsCount'] = ApiClient.convertToType(data['itemsCount'], 'Number');
      }
      if (data.hasOwnProperty('organizationalUnit')) {
        obj['organizationalUnit'] = ModelReference.constructFromObject(data['organizationalUnit']);
      }
      if (data.hasOwnProperty('partyInformation')) {
        obj['partyInformation'] = ProductTransferInvolvedPartyInformation.constructFromObject(data['partyInformation']);
      }
      if (data.hasOwnProperty('pointOfSale')) {
        obj['pointOfSale'] = ModelReference.constructFromObject(data['pointOfSale']);
      }
      if (data.hasOwnProperty('productStockOrder')) {
        obj['productStockOrder'] = ModelReference.constructFromObject(data['productStockOrder']);
      }
      if (data.hasOwnProperty('sourceOrganizationalUnit')) {
        obj['sourceOrganizationalUnit'] = ModelReference.constructFromObject(data['sourceOrganizationalUnit']);
      }
      if (data.hasOwnProperty('supplier')) {
        obj['supplier'] = ModelReference.constructFromObject(data['supplier']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
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
   * @member {Date} arrivalDate
   */
  exports.prototype['arrivalDate'] = undefined;
  /**
   * @member {Date} bookingTime
   */
  exports.prototype['bookingTime'] = undefined;
  /**
   * @member {module:model/ModelReference} bookingUser
   */
  exports.prototype['bookingUser'] = undefined;
  /**
   * @member {module:model/ModelReference} cashier
   */
  exports.prototype['cashier'] = undefined;
  /**
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {module:model/ModelReference} createUser
   */
  exports.prototype['createUser'] = undefined;
  /**
   * @member {module:model/ModelReference} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/ModelReference} dispatchNotification
   */
  exports.prototype['dispatchNotification'] = undefined;
  /**
   * @member {Number} itemsCount
   */
  exports.prototype['itemsCount'] = undefined;
  /**
   * @member {module:model/ModelReference} organizationalUnit
   */
  exports.prototype['organizationalUnit'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformation} partyInformation
   */
  exports.prototype['partyInformation'] = undefined;
  /**
   * @member {module:model/ModelReference} pointOfSale
   */
  exports.prototype['pointOfSale'] = undefined;
  /**
   * @member {module:model/ModelReference} productStockOrder
   */
  exports.prototype['productStockOrder'] = undefined;
  /**
   * @member {module:model/ModelReference} sourceOrganizationalUnit
   */
  exports.prototype['sourceOrganizationalUnit'] = undefined;
  /**
   * @member {module:model/ModelReference} supplier
   */
  exports.prototype['supplier'] = undefined;
  /**
   * @member {module:model/StockReceipt.StatusEnum} status
   */
  exports.prototype['status'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "BOOKED"
     * @const
     */
    "BOOKED": "BOOKED",
    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS"  };


  return exports;
}));


