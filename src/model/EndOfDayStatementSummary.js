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
    define(['ApiClient', 'model/AccountSummary', 'model/CashierSummary', 'model/CommodityGroupSummary', 'model/CustomerGroupSummary', 'model/PaymentSummary', 'model/TaxSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountSummary'), require('./CashierSummary'), require('./CommodityGroupSummary'), require('./CustomerGroupSummary'), require('./PaymentSummary'), require('./TaxSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.EndOfDayStatementSummary = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.AccountSummary, root.CloudApiV3JsClient.CashierSummary, root.CloudApiV3JsClient.CommodityGroupSummary, root.CloudApiV3JsClient.CustomerGroupSummary, root.CloudApiV3JsClient.PaymentSummary, root.CloudApiV3JsClient.TaxSummary);
  }
}(this, function(ApiClient, AccountSummary, CashierSummary, CommodityGroupSummary, CustomerGroupSummary, PaymentSummary, TaxSummary) {
  'use strict';




  /**
   * The EndOfDayStatementSummary model module.
   * @module model/EndOfDayStatementSummary
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EndOfDayStatementSummary</code>.
   * @alias module:model/EndOfDayStatementSummary
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>EndOfDayStatementSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EndOfDayStatementSummary} obj Optional instance to populate.
   * @return {module:model/EndOfDayStatementSummary} The populated <code>EndOfDayStatementSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accounts')) {
        obj['accounts'] = ApiClient.convertToType(data['accounts'], [AccountSummary]);
      }
      if (data.hasOwnProperty('cashiers')) {
        obj['cashiers'] = ApiClient.convertToType(data['cashiers'], [CashierSummary]);
      }
      if (data.hasOwnProperty('commodityGroups')) {
        obj['commodityGroups'] = ApiClient.convertToType(data['commodityGroups'], [CommodityGroupSummary]);
      }
      if (data.hasOwnProperty('customerGroups')) {
        obj['customerGroups'] = ApiClient.convertToType(data['customerGroups'], [CustomerGroupSummary]);
      }
      if (data.hasOwnProperty('payments')) {
        obj['payments'] = ApiClient.convertToType(data['payments'], [PaymentSummary]);
      }
      if (data.hasOwnProperty('taxes')) {
        obj['taxes'] = ApiClient.convertToType(data['taxes'], [TaxSummary]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AccountSummary>} accounts
   */
  exports.prototype['accounts'] = undefined;
  /**
   * @member {Array.<module:model/CashierSummary>} cashiers
   */
  exports.prototype['cashiers'] = undefined;
  /**
   * @member {Array.<module:model/CommodityGroupSummary>} commodityGroups
   */
  exports.prototype['commodityGroups'] = undefined;
  /**
   * @member {Array.<module:model/CustomerGroupSummary>} customerGroups
   */
  exports.prototype['customerGroups'] = undefined;
  /**
   * @member {Array.<module:model/PaymentSummary>} payments
   */
  exports.prototype['payments'] = undefined;
  /**
   * @member {Array.<module:model/TaxSummary>} taxes
   */
  exports.prototype['taxes'] = undefined;



  return exports;
}));


