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
    define(['ApiClient', 'model/CustomerData', 'model/ModelReference', 'model/ReceiptItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CustomerData'), require('./ModelReference'), require('./ReceiptItem'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.CustomerOrder = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.CustomerData, root.KoronacloudApiV3.ModelReference, root.KoronacloudApiV3.ReceiptItem);
  }
}(this, function(ApiClient, CustomerData, ModelReference, ReceiptItem) {
  'use strict';




  /**
   * The CustomerOrder model module.
   * @module model/CustomerOrder
   * @version 3
   */

  /**
   * Constructs a new <code>CustomerOrder</code>.
   * @alias module:model/CustomerOrder
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>CustomerOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerOrder} obj Optional instance to populate.
   * @return {module:model/CustomerOrder} The populated <code>CustomerOrder</code> instance.
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
      if (data.hasOwnProperty('bookingTime')) {
        obj['bookingTime'] = ApiClient.convertToType(data['bookingTime'], 'Date');
      }
      if (data.hasOwnProperty('cashier')) {
        obj['cashier'] = ModelReference.constructFromObject(data['cashier']);
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = ModelReference.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('customerData')) {
        obj['customerData'] = CustomerData.constructFromObject(data['customerData']);
      }
      if (data.hasOwnProperty('deposit')) {
        obj['deposit'] = ApiClient.convertToType(data['deposit'], 'Number');
      }
      if (data.hasOwnProperty('depositAccount')) {
        obj['depositAccount'] = ModelReference.constructFromObject(data['depositAccount']);
      }
      if (data.hasOwnProperty('finishTime')) {
        obj['finishTime'] = ApiClient.convertToType(data['finishTime'], 'Date');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [ReceiptItem]);
      }
      if (data.hasOwnProperty('organizationalUnit')) {
        obj['organizationalUnit'] = ModelReference.constructFromObject(data['organizationalUnit']);
      }
      if (data.hasOwnProperty('pickUpTime')) {
        obj['pickUpTime'] = ApiClient.convertToType(data['pickUpTime'], 'Date');
      }
      if (data.hasOwnProperty('pointOfSale')) {
        obj['pointOfSale'] = ModelReference.constructFromObject(data['pointOfSale']);
      }
      if (data.hasOwnProperty('readyForPickUp')) {
        obj['readyForPickUp'] = ApiClient.convertToType(data['readyForPickUp'], 'Boolean');
      }
      if (data.hasOwnProperty('warehouse')) {
        obj['warehouse'] = ModelReference.constructFromObject(data['warehouse']);
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
   * @member {Date} bookingTime
   */
  exports.prototype['bookingTime'] = undefined;
  /**
   * @member {module:model/ModelReference} cashier
   */
  exports.prototype['cashier'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {module:model/ModelReference} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/CustomerData} customerData
   */
  exports.prototype['customerData'] = undefined;
  /**
   * @member {Number} deposit
   */
  exports.prototype['deposit'] = undefined;
  /**
   * @member {module:model/ModelReference} depositAccount
   */
  exports.prototype['depositAccount'] = undefined;
  /**
   * @member {Date} finishTime
   */
  exports.prototype['finishTime'] = undefined;
  /**
   * @member {Array.<module:model/ReceiptItem>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/ModelReference} organizationalUnit
   */
  exports.prototype['organizationalUnit'] = undefined;
  /**
   * @member {Date} pickUpTime
   */
  exports.prototype['pickUpTime'] = undefined;
  /**
   * @member {module:model/ModelReference} pointOfSale
   */
  exports.prototype['pointOfSale'] = undefined;
  /**
   * @member {Boolean} readyForPickUp
   */
  exports.prototype['readyForPickUp'] = undefined;
  /**
   * @member {module:model/ModelReference} warehouse
   */
  exports.prototype['warehouse'] = undefined;



  return exports;
}));


