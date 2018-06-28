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
    instance = new KoronacloudApiV3.CustomerGroupSummary();
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

  describe('CustomerGroupSummary', function() {
    it('should create an instance of CustomerGroupSummary', function() {
      // uncomment below and update the code to test CustomerGroupSummary
      //var instane = new KoronacloudApiV3.CustomerGroupSummary();
      //expect(instance).to.be.a(KoronacloudApiV3.CustomerGroupSummary);
    });

    it('should have the property customerGroup (base name: "customerGroup")', function() {
      // uncomment below and update the code to test the property customerGroup
      //var instane = new KoronacloudApiV3.CustomerGroupSummary();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new KoronacloudApiV3.CustomerGroupSummary();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new KoronacloudApiV3.CustomerGroupSummary();
      //expect(instance).to.be();
    });

    it('should have the property revenue (base name: "revenue")', function() {
      // uncomment below and update the code to test the property revenue
      //var instane = new KoronacloudApiV3.CustomerGroupSummary();
      //expect(instance).to.be();
    });

  });

}));
