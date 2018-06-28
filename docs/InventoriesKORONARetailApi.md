# KoronacloudApiV3.InventoriesKORONARetailApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventories**](InventoriesKORONARetailApi.md#addInventories) | **POST** /accounts/{koronaAccountId}/inventories | adds a batch of new inventories
[**addInventoryInventoryListItems**](InventoriesKORONARetailApi.md#addInventoryInventoryListItems) | **POST** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | adds inventory list items
[**deleteInventory**](InventoriesKORONARetailApi.md#deleteInventory) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId} | deletes the inventory; only possible if hasBookedReceipts&#x3D;false
[**deleteInventoryInventoryListItem**](InventoriesKORONARetailApi.md#deleteInventoryInventoryListItem) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | deletes the inventory list item
[**getInventories**](InventoriesKORONARetailApi.md#getInventories) | **GET** /accounts/{koronaAccountId}/inventories | lists all inventories
[**getInventory**](InventoriesKORONARetailApi.md#getInventory) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId} | lists the inventory
[**getInventoryInventoryList**](InventoriesKORONARetailApi.md#getInventoryInventoryList) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | lists the inventory list
[**getInventoryInventoryListItem**](InventoriesKORONARetailApi.md#getInventoryInventoryListItem) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | lists the inventory list item with the specified product
[**getInventoryInventoryListItems**](InventoriesKORONARetailApi.md#getInventoryInventoryListItems) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | lists all inventory list items
[**getInventoryInventoryLists**](InventoriesKORONARetailApi.md#getInventoryInventoryLists) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists | lists all inventory lists
[**updateInventory**](InventoriesKORONARetailApi.md#updateInventory) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId} | changes the inventory
[**updateInventoryInventoryList**](InventoriesKORONARetailApi.md#updateInventoryInventoryList) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | updates the inventory list
[**updateInventoryInventoryListItem**](InventoriesKORONARetailApi.md#updateInventoryInventoryListItem) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | updates the inventory list item
[**updateInventoryInventoryListItems**](InventoriesKORONARetailApi.md#updateInventoryInventoryListItems) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | updates inventory list items (property [product] required))


<a name="addInventories"></a>
# **addInventories**
> [AddOrUpdateResult] addInventories(koronaAccountId, body)

adds a batch of new inventories



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Inventory()]; // [Inventory] | a array of new inventories


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventories(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[Inventory]**](Inventory.md)| a array of new inventories | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryInventoryListItems"></a>
# **addInventoryInventoryListItems**
> [AddOrUpdateResult] addInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, body)

adds inventory list items



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[InventoryListItem]**](InventoryListItem.md)| data to update | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventory"></a>
# **deleteInventory**
> deleteInventory(koronaAccountId, inventoryId)

deletes the inventory; only possible if hasBookedReceipts&#x3D;false



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventory(koronaAccountId, inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryInventoryListItem"></a>
# **deleteInventoryInventoryListItem**
> deleteInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId)

deletes the inventory list item



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventories"></a>
# **getInventories**
> ResultListInventory getInventories(koronaAccountId, opts)

lists all inventories



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true // Boolean | indicates deleted objects should be loaded or not (default: false)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventories(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 

### Return type

[**ResultListInventory**](ResultListInventory.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventory"></a>
# **getInventory**
> Inventory getInventory(koronaAccountId, inventoryId)

lists the inventory



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventory(koronaAccountId, inventoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**Inventory**](Inventory.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryList"></a>
# **getInventoryInventoryList**
> InventoryList getInventoryInventoryList(koronaAccountId, inventoryId, inventoryListId)

lists the inventory list



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryList(koronaAccountId, inventoryId, inventoryListId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItem"></a>
# **getInventoryInventoryListItem**
> InventoryListItem getInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId)

lists the inventory list item with the specified product



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**InventoryListItem**](InventoryListItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItems"></a>
# **getInventoryInventoryListItems**
> ResultListInventoryListItem getInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, opts)

lists all inventory list items



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789 // Number | last revision number, objects with a greater revision than this will be returned
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 

### Return type

[**ResultListInventoryListItem**](ResultListInventoryListItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryLists"></a>
# **getInventoryInventoryLists**
> ResultListInventoryList getInventoryInventoryLists(koronaAccountId, inventoryId, opts)

lists all inventory lists



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'minBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
  'maxBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryLists(koronaAccountId, inventoryId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **minBookingTime** | **Date**| min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxBookingTime** | **Date**| max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **bookingStatus** | **String**| booking status (possible values: BOOKED, IN_PROGRESS) | [optional] 

### Return type

[**ResultListInventoryList**](ResultListInventoryList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventory"></a>
# **updateInventory**
> updateInventory(koronaAccountId, inventoryId, body)

changes the inventory



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.Inventory(); // Inventory | the properties to update of the inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventory(koronaAccountId, inventoryId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Inventory**](Inventory.md)| the properties to update of the inventory | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryList"></a>
# **updateInventoryInventoryList**
> updateInventoryInventoryList(koronaAccountId, inventoryId, inventoryListId, body)

updates the inventory list



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.InventoryList(); // InventoryList | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryList(koronaAccountId, inventoryId, inventoryListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**InventoryList**](InventoryList.md)| data to update | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryListItem"></a>
# **updateInventoryInventoryListItem**
> updateInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId, body)

updates the inventory list item



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.InventoryListItem(); // InventoryListItem | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryListItem(koronaAccountId, inventoryId, inventoryListId, productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**InventoryListItem**](InventoryListItem.md)| data to update | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryListItems"></a>
# **updateInventoryInventoryListItems**
> [AddOrUpdateResult] updateInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, body)

updates inventory list items (property [product] required))



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | a array of inventory list items to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInventoryInventoryListItems(koronaAccountId, inventoryId, inventoryListId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[InventoryListItem]**](InventoryListItem.md)| a array of inventory list items to update | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

