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
    define(['ApiClient', 'model/ProductTransferInvolvedPartyInformationData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProductTransferInvolvedPartyInformationData'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.ProductTransferInvolvedPartyInformation = factory(root.KoronacloudApiV3.ApiClient, root.KoronacloudApiV3.ProductTransferInvolvedPartyInformationData);
  }
}(this, function(ApiClient, ProductTransferInvolvedPartyInformationData) {
  'use strict';




  /**
   * The ProductTransferInvolvedPartyInformation model module.
   * @module model/ProductTransferInvolvedPartyInformation
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ProductTransferInvolvedPartyInformation</code>.
   * @alias module:model/ProductTransferInvolvedPartyInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProductTransferInvolvedPartyInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductTransferInvolvedPartyInformation} obj Optional instance to populate.
   * @return {module:model/ProductTransferInvolvedPartyInformation} The populated <code>ProductTransferInvolvedPartyInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('buyer')) {
        obj['buyer'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['buyer']);
      }
      if (data.hasOwnProperty('deliveryAddress')) {
        obj['deliveryAddress'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['deliveryAddress']);
      }
      if (data.hasOwnProperty('finalRecipient')) {
        obj['finalRecipient'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['finalRecipient']);
      }
      if (data.hasOwnProperty('invoiceRecipient')) {
        obj['invoiceRecipient'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['invoiceRecipient']);
      }
      if (data.hasOwnProperty('supplier')) {
        obj['supplier'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['supplier']);
      }
      if (data.hasOwnProperty('transportServiceProvider')) {
        obj['transportServiceProvider'] = ProductTransferInvolvedPartyInformationData.constructFromObject(data['transportServiceProvider']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} buyer
   */
  exports.prototype['buyer'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} deliveryAddress
   */
  exports.prototype['deliveryAddress'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} finalRecipient
   */
  exports.prototype['finalRecipient'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} invoiceRecipient
   */
  exports.prototype['invoiceRecipient'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} supplier
   */
  exports.prototype['supplier'] = undefined;
  /**
   * @member {module:model/ProductTransferInvolvedPartyInformationData} transportServiceProvider
   */
  exports.prototype['transportServiceProvider'] = undefined;



  return exports;
}));


