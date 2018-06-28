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
    instance = new KoronacloudApiV3.TaxPayment();
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

  describe('TaxPayment', function() {
    it('should create an instance of TaxPayment', function() {
      // uncomment below and update the code to test TaxPayment
      //var instane = new KoronacloudApiV3.TaxPayment();
      //expect(instance).to.be.a(KoronacloudApiV3.TaxPayment);
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new KoronacloudApiV3.TaxPayment();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "taxRate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instane = new KoronacloudApiV3.TaxPayment();
      //expect(instance).to.be();
    });

    it('should have the property included (base name: "included")', function() {
      // uncomment below and update the code to test the property included
      //var instane = new KoronacloudApiV3.TaxPayment();
      //expect(instance).to.be();
    });

    it('should have the property salesTax (base name: "salesTax")', function() {
      // uncomment below and update the code to test the property salesTax
      //var instane = new KoronacloudApiV3.TaxPayment();
      //expect(instance).to.be();
    });

  });

}));
