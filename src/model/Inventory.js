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
    define(['ApiClient', 'model/ModelReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelReference'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.Inventory = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ModelReference);
  }
}(this, function(ApiClient, ModelReference) {
  'use strict';




  /**
   * The Inventory model module.
   * @module model/Inventory
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>Inventory</code>.
   * @alias module:model/Inventory
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Inventory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Inventory} obj Optional instance to populate.
   * @return {module:model/Inventory} The populated <code>Inventory</code> instance.
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
      if (data.hasOwnProperty('automaticBooking')) {
        obj['automaticBooking'] = ApiClient.convertToType(data['automaticBooking'], 'Boolean');
      }
      if (data.hasOwnProperty('automaticBookingAfterDays')) {
        obj['automaticBookingAfterDays'] = ApiClient.convertToType(data['automaticBookingAfterDays'], 'Number');
      }
      if (data.hasOwnProperty('checkProductAssortmentValidity')) {
        obj['checkProductAssortmentValidity'] = ApiClient.convertToType(data['checkProductAssortmentValidity'], 'Boolean');
      }
      if (data.hasOwnProperty('checkProductListing')) {
        obj['checkProductListing'] = ApiClient.convertToType(data['checkProductListing'], 'Boolean');
      }
      if (data.hasOwnProperty('createTime')) {
        obj['createTime'] = ApiClient.convertToType(data['createTime'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('executionDays')) {
        obj['executionDays'] = ApiClient.convertToType(data['executionDays'], ['String']);
      }
      if (data.hasOwnProperty('executionTime')) {
        obj['executionTime'] = ApiClient.convertToType(data['executionTime'], 'Date');
      }
      if (data.hasOwnProperty('hasBookedReceipts')) {
        obj['hasBookedReceipts'] = ApiClient.convertToType(data['hasBookedReceipts'], 'Boolean');
      }
      if (data.hasOwnProperty('maxProductsPerList')) {
        obj['maxProductsPerList'] = ApiClient.convertToType(data['maxProductsPerList'], 'Number');
      }
      if (data.hasOwnProperty('oneCommodityGroupPerInventoryList')) {
        obj['oneCommodityGroupPerInventoryList'] = ApiClient.convertToType(data['oneCommodityGroupPerInventoryList'], 'Boolean');
      }
      if (data.hasOwnProperty('onlyNegativeProductStocks')) {
        obj['onlyNegativeProductStocks'] = ApiClient.convertToType(data['onlyNegativeProductStocks'], 'Boolean');
      }
      if (data.hasOwnProperty('organizationalUnits')) {
        obj['organizationalUnits'] = ApiClient.convertToType(data['organizationalUnits'], [ModelReference]);
      }
      if (data.hasOwnProperty('productFilter')) {
        obj['productFilter'] = ApiClient.convertToType(data['productFilter'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
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
   * @member {Boolean} automaticBooking
   */
  exports.prototype['automaticBooking'] = undefined;
  /**
   * only if isAutomaticBooking=true
   * @member {Number} automaticBookingAfterDays
   */
  exports.prototype['automaticBookingAfterDays'] = undefined;
  /**
   * @member {Boolean} checkProductAssortmentValidity
   */
  exports.prototype['checkProductAssortmentValidity'] = undefined;
  /**
   * @member {Boolean} checkProductListing
   */
  exports.prototype['checkProductListing'] = undefined;
  /**
   * @member {Date} createTime
   */
  exports.prototype['createTime'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * only if type=PERPETUAL_INVENTORY
   * @member {Array.<module:model/Inventory.ExecutionDaysEnum>} executionDays
   */
  exports.prototype['executionDays'] = undefined;
  /**
   * @member {Date} executionTime
   */
  exports.prototype['executionTime'] = undefined;
  /**
   * @member {Boolean} hasBookedReceipts
   */
  exports.prototype['hasBookedReceipts'] = undefined;
  /**
   * only if type=ANNUAL_INVENTORY | INVENTORY_IRREGULARITY
   * @member {Number} maxProductsPerList
   */
  exports.prototype['maxProductsPerList'] = undefined;
  /**
   * only if type=ANNUAL_INVENTORY | INVENTORY_IRREGULARITY
   * @member {Boolean} oneCommodityGroupPerInventoryList
   */
  exports.prototype['oneCommodityGroupPerInventoryList'] = undefined;
  /**
   * only if type=INVENTORY_IRREGULARITY
   * @member {Boolean} onlyNegativeProductStocks
   */
  exports.prototype['onlyNegativeProductStocks'] = undefined;
  /**
   * @member {Array.<module:model/ModelReference>} organizationalUnits
   */
  exports.prototype['organizationalUnits'] = undefined;
  /**
   * @member {module:model/Inventory.ProductFilterEnum} productFilter
   */
  exports.prototype['productFilter'] = undefined;
  /**
   * @member {module:model/Inventory.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>executionDays</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExecutionDaysEnum = {
    /**
     * value: "MONDAY"
     * @const
     */
    "MONDAY": "MONDAY",
    /**
     * value: "TUESDAY"
     * @const
     */
    "TUESDAY": "TUESDAY",
    /**
     * value: "WEDNESDAY"
     * @const
     */
    "WEDNESDAY": "WEDNESDAY",
    /**
     * value: "THURSDAY"
     * @const
     */
    "THURSDAY": "THURSDAY",
    /**
     * value: "FRIDAY"
     * @const
     */
    "FRIDAY": "FRIDAY",
    /**
     * value: "SATURDAY"
     * @const
     */
    "SATURDAY": "SATURDAY",
    /**
     * value: "SUNDAY"
     * @const
     */
    "SUNDAY": "SUNDAY"  };

  /**
   * Allowed values for the <code>productFilter</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ProductFilterEnum = {
    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",
    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL",
    /**
     * value: "DEACTIVATED"
     * @const
     */
    "DEACTIVATED": "DEACTIVATED"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ANNUAL_INVENTORY"
     * @const
     */
    "ANNUAL_INVENTORY": "ANNUAL_INVENTORY",
    /**
     * value: "INVENTORY_IRREGULARITY"
     * @const
     */
    "INVENTORY_IRREGULARITY": "INVENTORY_IRREGULARITY",
    /**
     * value: "INVENTORY_SAMPLING"
     * @const
     */
    "INVENTORY_SAMPLING": "INVENTORY_SAMPLING",
    /**
     * value: "PERPETUAL_INVENTORY"
     * @const
     */
    "PERPETUAL_INVENTORY": "PERPETUAL_INVENTORY"  };


  return exports;
}));


