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
    instance = new KoronacloudApiV3.PointsOfSaleApi();
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

  describe('PointsOfSaleApi', function() {
    describe('addPointOfSaleEndOfDayStatements', function() {
      it('should call addPointOfSaleEndOfDayStatements successfully', function(done) {
        //uncomment below and update the code to test addPointOfSaleEndOfDayStatements
        //instance.addPointOfSaleEndOfDayStatements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addPointOfSaleReceipts', function() {
      it('should call addPointOfSaleReceipts successfully', function(done) {
        //uncomment below and update the code to test addPointOfSaleReceipts
        //instance.addPointOfSaleReceipts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPointOfSale', function() {
      it('should call getPointOfSale successfully', function(done) {
        //uncomment below and update the code to test getPointOfSale
        //instance.getPointOfSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPointOfSaleEndOfDayStatements', function() {
      it('should call getPointOfSaleEndOfDayStatements successfully', function(done) {
        //uncomment below and update the code to test getPointOfSaleEndOfDayStatements
        //instance.getPointOfSaleEndOfDayStatements(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPointOfSaleReceipt', function() {
      it('should call getPointOfSaleReceipt successfully', function(done) {
        //uncomment below and update the code to test getPointOfSaleReceipt
        //instance.getPointOfSaleReceipt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPointOfSaleReceipts', function() {
      it('should call getPointOfSaleReceipts successfully', function(done) {
        //uncomment below and update the code to test getPointOfSaleReceipts
        //instance.getPointOfSaleReceipts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPointsOfSale', function() {
      it('should call getPointsOfSale successfully', function(done) {
        //uncomment below and update the code to test getPointsOfSale
        //instance.getPointsOfSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePointOfSale', function() {
      it('should call updatePointOfSale successfully', function(done) {
        //uncomment below and update the code to test updatePointOfSale
        //instance.updatePointOfSale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
