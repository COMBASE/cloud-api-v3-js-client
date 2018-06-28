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
    instance = new KoronacloudApiV3.RevenueData();
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

  describe('RevenueData', function() {
    it('should create an instance of RevenueData', function() {
      // uncomment below and update the code to test RevenueData
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be.a(KoronacloudApiV3.RevenueData);
    });

    it('should have the property netValue (base name: "netValue")', function() {
      // uncomment below and update the code to test the property netValue
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be();
    });

    it('should have the property grossValue (base name: "grossValue")', function() {
      // uncomment below and update the code to test the property grossValue
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be();
    });

    it('should have the property averageNetValue (base name: "averageNetValue")', function() {
      // uncomment below and update the code to test the property averageNetValue
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be();
    });

    it('should have the property averageGrossValue (base name: "averageGrossValue")', function() {
      // uncomment below and update the code to test the property averageGrossValue
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be();
    });

    it('should have the property customersTotal (base name: "customersTotal")', function() {
      // uncomment below and update the code to test the property customersTotal
      //var instane = new KoronacloudApiV3.RevenueData();
      //expect(instance).to.be();
    });

  });

}));
