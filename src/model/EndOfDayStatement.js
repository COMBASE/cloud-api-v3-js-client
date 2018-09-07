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
    define(['ApiClient', 'model/EndOfDayStatementSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EndOfDayStatementSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudApiV3JsClient) {
      root.CloudApiV3JsClient = {};
    }
    root.CloudApiV3JsClient.EndOfDayStatement = factory(root.CloudApiV3JsClient.ApiClient, root.CloudApiV3JsClient.EndOfDayStatementSummary);
  }
}(this, function(ApiClient, EndOfDayStatementSummary) {
  'use strict';




  /**
   * The EndOfDayStatement model module.
   * @module model/EndOfDayStatement
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EndOfDayStatement</code>.
   * @alias module:model/EndOfDayStatement
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>EndOfDayStatement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EndOfDayStatement} obj Optional instance to populate.
   * @return {module:model/EndOfDayStatement} The populated <code>EndOfDayStatement</code> instance.
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
      if (data.hasOwnProperty('finishTime')) {
        obj['finishTime'] = ApiClient.convertToType(data['finishTime'], 'Date');
      }
      if (data.hasOwnProperty('receiptCount')) {
        obj['receiptCount'] = ApiClient.convertToType(data['receiptCount'], 'Number');
      }
      if (data.hasOwnProperty('successfullyChecked')) {
        obj['successfullyChecked'] = ApiClient.convertToType(data['successfullyChecked'], 'Boolean');
      }
      if (data.hasOwnProperty('summaries')) {
        obj['summaries'] = EndOfDayStatementSummary.constructFromObject(data['summaries']);
      }
      if (data.hasOwnProperty('getzCount')) {
        obj['getzCount'] = ApiClient.convertToType(data['getzCount'], 'Number');
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
   * @member {Date} finishTime
   */
  exports.prototype['finishTime'] = undefined;
  /**
   * @member {Number} receiptCount
   */
  exports.prototype['receiptCount'] = undefined;
  /**
   * @member {Boolean} successfullyChecked
   */
  exports.prototype['successfullyChecked'] = undefined;
  /**
   * @member {module:model/EndOfDayStatementSummary} summaries
   */
  exports.prototype['summaries'] = undefined;
  /**
   * @member {Number} getzCount
   */
  exports.prototype['getzCount'] = undefined;



  return exports;
}));


