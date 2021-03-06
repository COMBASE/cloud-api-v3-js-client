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
    instance = new KoronacloudApiV3.Account();
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

  describe('Account', function() {
    it('should create an instance of Account', function() {
      // uncomment below and update the code to test Account
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be.a(KoronacloudApiV3.Account);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property cashJournalRelevant (base name: "cashJournalRelevant")', function() {
      // uncomment below and update the code to test the property cashJournalRelevant
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property denominationInput (base name: "denominationInput")', function() {
      // uncomment below and update the code to test the property denominationInput
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property exclusive (base name: "exclusive")', function() {
      // uncomment below and update the code to test the property exclusive
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property producer (base name: "producer")', function() {
      // uncomment below and update the code to test the property producer
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property requiresSerialNumber (base name: "requiresSerialNumber")', function() {
      // uncomment below and update the code to test the property requiresSerialNumber
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property revenueAccount (base name: "revenueAccount")', function() {
      // uncomment below and update the code to test the property revenueAccount
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new KoronacloudApiV3.Account();
      //expect(instance).to.be();
    });

  });

}));
