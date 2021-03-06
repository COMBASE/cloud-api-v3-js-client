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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KoronacloudApiV3) {
      root.KoronacloudApiV3 = {};
    }
    root.KoronacloudApiV3.BadRequestError = factory(root.KoronacloudApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BadRequestError model module.
   * @module model/BadRequestError
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>BadRequestError</code>.
   * @alias module:model/BadRequestError
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>BadRequestError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BadRequestError} obj Optional instance to populate.
   * @return {module:model/BadRequestError} The populated <code>BadRequestError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
    }
    return obj;
  }

  /**
   * a short description of the error in english
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * the code for client-side evaluation of the error
   * @member {module:model/BadRequestError.CodeEnum} code
   */
  exports.prototype['code'] = undefined;


  /**
   * Allowed values for the <code>code</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CodeEnum = {
    /**
     * value: "BATCH_SIZE_OUT_OF_RANGE"
     * @const
     */
    "BATCH_SIZE_OUT_OF_RANGE": "BATCH_SIZE_OUT_OF_RANGE",
    /**
     * value: "DATE_NOT_EXISTS"
     * @const
     */
    "DATE_NOT_EXISTS": "DATE_NOT_EXISTS",
    /**
     * value: "INVALID_MODEL_PROPERTY"
     * @const
     */
    "INVALID_MODEL_PROPERTY": "INVALID_MODEL_PROPERTY",
    /**
     * value: "INVALID_QUERY_PARAMETER"
     * @const
     */
    "INVALID_QUERY_PARAMETER": "INVALID_QUERY_PARAMETER",
    /**
     * value: "MALFORMED_MODEL_ID_OR_DATE"
     * @const
     */
    "MALFORMED_MODEL_ID_OR_DATE": "MALFORMED_MODEL_ID_OR_DATE",
    /**
     * value: "MALFORMED_MODEL_ID_OR_NUMBER"
     * @const
     */
    "MALFORMED_MODEL_ID_OR_NUMBER": "MALFORMED_MODEL_ID_OR_NUMBER",
    /**
     * value: "MISSING_MODEL"
     * @const
     */
    "MISSING_MODEL": "MISSING_MODEL",
    /**
     * value: "MISSING_QUERY_PARAMETER"
     * @const
     */
    "MISSING_QUERY_PARAMETER": "MISSING_QUERY_PARAMETER",
    /**
     * value: "NUMBER_ALREADY_IN_USE"
     * @const
     */
    "NUMBER_ALREADY_IN_USE": "NUMBER_ALREADY_IN_USE",
    /**
     * value: "NUMBER_NOT_EXISTS"
     * @const
     */
    "NUMBER_NOT_EXISTS": "NUMBER_NOT_EXISTS",
    /**
     * value: "SUBMITTED_DATA_NOT_WELLFORMED"
     * @const
     */
    "SUBMITTED_DATA_NOT_WELLFORMED": "SUBMITTED_DATA_NOT_WELLFORMED"  };


  return exports;
}));


