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
    instance = new KoronacloudApiV3.EndOfDayStatementSummary();
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

  describe('EndOfDayStatementSummary', function() {
    it('should create an instance of EndOfDayStatementSummary', function() {
      // uncomment below and update the code to test EndOfDayStatementSummary
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be.a(KoronacloudApiV3.EndOfDayStatementSummary);
    });

    it('should have the property accounts (base name: "accounts")', function() {
      // uncomment below and update the code to test the property accounts
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

    it('should have the property cashiers (base name: "cashiers")', function() {
      // uncomment below and update the code to test the property cashiers
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

    it('should have the property commodityGroups (base name: "commodityGroups")', function() {
      // uncomment below and update the code to test the property commodityGroups
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

    it('should have the property customerGroups (base name: "customerGroups")', function() {
      // uncomment below and update the code to test the property customerGroups
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

    it('should have the property payments (base name: "payments")', function() {
      // uncomment below and update the code to test the property payments
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      //var instane = new KoronacloudApiV3.EndOfDayStatementSummary();
      //expect(instance).to.be();
    });

  });

}));
