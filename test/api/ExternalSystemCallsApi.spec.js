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
    instance = new KoronacloudApiV3.ExternalSystemCallsApi();
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

  describe('ExternalSystemCallsApi', function() {
    describe('addExternalSystemCalls', function() {
      it('should call addExternalSystemCalls successfully', function(done) {
        //uncomment below and update the code to test addExternalSystemCalls
        //instance.addExternalSystemCalls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteExternalSystemCall', function() {
      it('should call deleteExternalSystemCall successfully', function(done) {
        //uncomment below and update the code to test deleteExternalSystemCall
        //instance.deleteExternalSystemCall(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalSystemCall', function() {
      it('should call getExternalSystemCall successfully', function(done) {
        //uncomment below and update the code to test getExternalSystemCall
        //instance.getExternalSystemCall(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getExternalSystemCalls', function() {
      it('should call getExternalSystemCalls successfully', function(done) {
        //uncomment below and update the code to test getExternalSystemCalls
        //instance.getExternalSystemCalls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExternalSystemCall', function() {
      it('should call updateExternalSystemCall successfully', function(done) {
        //uncomment below and update the code to test updateExternalSystemCall
        //instance.updateExternalSystemCall(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateExternalSystemCalls', function() {
      it('should call updateExternalSystemCalls successfully', function(done) {
        //uncomment below and update the code to test updateExternalSystemCalls
        //instance.updateExternalSystemCalls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));