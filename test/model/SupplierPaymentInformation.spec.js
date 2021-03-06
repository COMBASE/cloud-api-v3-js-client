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
    instance = new KoronacloudApiV3.SupplierPaymentInformation();
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

  describe('SupplierPaymentInformation', function() {
    it('should create an instance of SupplierPaymentInformation', function() {
      // uncomment below and update the code to test SupplierPaymentInformation
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be.a(KoronacloudApiV3.SupplierPaymentInformation);
    });

    it('should have the property accountNumber (base name: "accountNumber")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property bank (base name: "bank")', function() {
      // uncomment below and update the code to test the property bank
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property bankNumber (base name: "bankNumber")', function() {
      // uncomment below and update the code to test the property bankNumber
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property bic (base name: "bic")', function() {
      // uncomment below and update the code to test the property bic
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property creditorIdentifier (base name: "creditorIdentifier")', function() {
      // uncomment below and update the code to test the property creditorIdentifier
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property iban (base name: "iban")', function() {
      // uncomment below and update the code to test the property iban
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentMethod (base name: "paymentMethod")', function() {
      // uncomment below and update the code to test the property paymentMethod
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

    it('should have the property minimumOrderValue (base name: "minimumOrderValue")', function() {
      // uncomment below and update the code to test the property minimumOrderValue
      //var instane = new KoronacloudApiV3.SupplierPaymentInformation();
      //expect(instance).to.be();
    });

  });

}));
