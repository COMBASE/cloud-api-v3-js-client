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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KoronacloudApiV3);
  }
}(this, function(expect, KoronacloudApiV3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KoronacloudApiV3.ResultListStockReceiptItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResultListStockReceiptItem', function() {
    it('should create an instance of ResultListStockReceiptItem', function() {
      // uncomment below and update the code to test ResultListStockReceiptItem
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be.a(KoronacloudApiV3.ResultListStockReceiptItem);
    });

    it('should have the property currentPage (base name: "currentPage")', function() {
      // uncomment below and update the code to test the property currentPage
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

    it('should have the property pagesTotal (base name: "pagesTotal")', function() {
      // uncomment below and update the code to test the property pagesTotal
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

    it('should have the property results (base name: "results")', function() {
      // uncomment below and update the code to test the property results
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

    it('should have the property resultsOfPage (base name: "resultsOfPage")', function() {
      // uncomment below and update the code to test the property resultsOfPage
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

    it('should have the property resultsTotal (base name: "resultsTotal")', function() {
      // uncomment below and update the code to test the property resultsTotal
      //var instane = new KoronacloudApiV3.ResultListStockReceiptItem();
      //expect(instance).to.be();
    });

  });

}));
