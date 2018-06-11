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
    instance = new KoronacloudApiV3.Cashier();
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

  describe('Cashier', function() {
    it('should create an instance of Cashier', function() {
      // uncomment below and update the code to test Cashier
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be.a(KoronacloudApiV3.Cashier);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property alias (base name: "alias")', function() {
      // uncomment below and update the code to test the property alias
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property gender (base name: "gender")', function() {
      // uncomment below and update the code to test the property gender
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property loginCode (base name: "loginCode")', function() {
      // uncomment below and update the code to test the property loginCode
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property loginPassword (base name: "loginPassword")', function() {
      // uncomment below and update the code to test the property loginPassword
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

    it('should have the property surname (base name: "surname")', function() {
      // uncomment below and update the code to test the property surname
      //var instane = new KoronacloudApiV3.Cashier();
      //expect(instance).to.be();
    });

  });

}));
