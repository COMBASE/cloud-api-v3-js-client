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
    instance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();
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

  describe('StockReceiptsKORONARetailApi', function() {
    describe('addStockReceiptItems', function() {
      it('should call addStockReceiptItems successfully', function(done) {
        //uncomment below and update the code to test addStockReceiptItems
        //instance.addStockReceiptItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addStockReceipts', function() {
      it('should call addStockReceipts successfully', function(done) {
        //uncomment below and update the code to test addStockReceipts
        //instance.addStockReceipts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStockReceiptItem', function() {
      it('should call deleteStockReceiptItem successfully', function(done) {
        //uncomment below and update the code to test deleteStockReceiptItem
        //instance.deleteStockReceiptItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockReceipt', function() {
      it('should call getStockReceipt successfully', function(done) {
        //uncomment below and update the code to test getStockReceipt
        //instance.getStockReceipt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockReceiptItem', function() {
      it('should call getStockReceiptItem successfully', function(done) {
        //uncomment below and update the code to test getStockReceiptItem
        //instance.getStockReceiptItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockReceiptItems', function() {
      it('should call getStockReceiptItems successfully', function(done) {
        //uncomment below and update the code to test getStockReceiptItems
        //instance.getStockReceiptItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStockReceipts', function() {
      it('should call getStockReceipts successfully', function(done) {
        //uncomment below and update the code to test getStockReceipts
        //instance.getStockReceipts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStockReceipt', function() {
      it('should call updateStockReceipt successfully', function(done) {
        //uncomment below and update the code to test updateStockReceipt
        //instance.updateStockReceipt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStockReceiptItem', function() {
      it('should call updateStockReceiptItem successfully', function(done) {
        //uncomment below and update the code to test updateStockReceiptItem
        //instance.updateStockReceiptItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStockReceiptItems', function() {
      it('should call updateStockReceiptItems successfully', function(done) {
        //uncomment below and update the code to test updateStockReceiptItems
        //instance.updateStockReceiptItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
