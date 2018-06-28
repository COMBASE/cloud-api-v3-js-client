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
    instance = new KoronacloudApiV3.InventoriesKORONARetailApi();
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

  describe('InventoriesKORONARetailApi', function() {
    describe('addInventories', function() {
      it('should call addInventories successfully', function(done) {
        //uncomment below and update the code to test addInventories
        //instance.addInventories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('addInventoryInventoryListItems', function() {
      it('should call addInventoryInventoryListItems successfully', function(done) {
        //uncomment below and update the code to test addInventoryInventoryListItems
        //instance.addInventoryInventoryListItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInventory', function() {
      it('should call deleteInventory successfully', function(done) {
        //uncomment below and update the code to test deleteInventory
        //instance.deleteInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteInventoryInventoryListItem', function() {
      it('should call deleteInventoryInventoryListItem successfully', function(done) {
        //uncomment below and update the code to test deleteInventoryInventoryListItem
        //instance.deleteInventoryInventoryListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventories', function() {
      it('should call getInventories successfully', function(done) {
        //uncomment below and update the code to test getInventories
        //instance.getInventories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventory', function() {
      it('should call getInventory successfully', function(done) {
        //uncomment below and update the code to test getInventory
        //instance.getInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryInventoryList', function() {
      it('should call getInventoryInventoryList successfully', function(done) {
        //uncomment below and update the code to test getInventoryInventoryList
        //instance.getInventoryInventoryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryInventoryListItem', function() {
      it('should call getInventoryInventoryListItem successfully', function(done) {
        //uncomment below and update the code to test getInventoryInventoryListItem
        //instance.getInventoryInventoryListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryInventoryListItems', function() {
      it('should call getInventoryInventoryListItems successfully', function(done) {
        //uncomment below and update the code to test getInventoryInventoryListItems
        //instance.getInventoryInventoryListItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getInventoryInventoryLists', function() {
      it('should call getInventoryInventoryLists successfully', function(done) {
        //uncomment below and update the code to test getInventoryInventoryLists
        //instance.getInventoryInventoryLists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInventory', function() {
      it('should call updateInventory successfully', function(done) {
        //uncomment below and update the code to test updateInventory
        //instance.updateInventory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInventoryInventoryList', function() {
      it('should call updateInventoryInventoryList successfully', function(done) {
        //uncomment below and update the code to test updateInventoryInventoryList
        //instance.updateInventoryInventoryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInventoryInventoryListItem', function() {
      it('should call updateInventoryInventoryListItem successfully', function(done) {
        //uncomment below and update the code to test updateInventoryInventoryListItem
        //instance.updateInventoryInventoryListItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateInventoryInventoryListItems', function() {
      it('should call updateInventoryInventoryListItems successfully', function(done) {
        //uncomment below and update the code to test updateInventoryInventoryListItems
        //instance.updateInventoryInventoryListItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
