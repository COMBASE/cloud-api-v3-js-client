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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.ProductDescription = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProductDescription model module.
   * @module model/ProductDescription
   * @version 3
   */

  /**
   * Constructs a new <code>ProductDescription</code>.
   * @alias module:model/ProductDescription
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProductDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductDescription} obj Optional instance to populate.
   * @return {module:model/ProductDescription} The populated <code>ProductDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ProductDescription.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ALLERGENS"
     * @const
     */
    "ALLERGENS": "ALLERGENS",
    /**
     * value: "MANUAL"
     * @const
     */
    "MANUAL": "MANUAL",
    /**
     * value: "DESCRIPTION"
     * @const
     */
    "DESCRIPTION": "DESCRIPTION",
    /**
     * value: "ORDER_TEXT"
     * @const
     */
    "ORDER_TEXT": "ORDER_TEXT",
    /**
     * value: "RECEIPT_TEXT"
     * @const
     */
    "RECEIPT_TEXT": "RECEIPT_TEXT",
    /**
     * value: "INGREDIENTS"
     * @const
     */
    "INGREDIENTS": "INGREDIENTS",
    /**
     * value: "NUTRITIONAL_VALUE"
     * @const
     */
    "NUTRITIONAL_VALUE": "NUTRITIONAL_VALUE",
    /**
     * value: "CARE_INSTRUCTIONS"
     * @const
     */
    "CARE_INSTRUCTIONS": "CARE_INSTRUCTIONS",
    /**
     * value: "RECIPE"
     * @const
     */
    "RECIPE": "RECIPE",
    /**
     * value: "CERTIFICATE"
     * @const
     */
    "CERTIFICATE": "CERTIFICATE",
    /**
     * value: "WARRANTY_TEXT"
     * @const
     */
    "WARRANTY_TEXT": "WARRANTY_TEXT",
    /**
     * value: "INFO_URL"
     * @const
     */
    "INFO_URL": "INFO_URL",
    /**
     * value: "ADDITIVES"
     * @const
     */
    "ADDITIVES": "ADDITIVES",
    /**
     * value: "LABEL_TEXT"
     * @const
     */
    "LABEL_TEXT": "LABEL_TEXT"  };


  return exports;
}));


