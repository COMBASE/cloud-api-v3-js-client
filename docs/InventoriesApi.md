# KoronacloudApiV3.InventoriesApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventories**](InventoriesApi.md#addInventories) | **POST** /accounts/{koronaAccountId}/inventories | adds a batch of new inventories
[**addInventoryInventoryListItems**](InventoriesApi.md#addInventoryInventoryListItems) | **POST** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | adds inventory list items
[**deleteInventory**](InventoriesApi.md#deleteInventory) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId} | deletes the single inventory (only allowed if hasBookedReceipts&#x3D;false)
[**deleteInventoryInventoryListItem**](InventoriesApi.md#deleteInventoryInventoryListItem) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | deletes the single inventory list item
[**getInventories**](InventoriesApi.md#getInventories) | **GET** /accounts/{koronaAccountId}/inventories | lists all inventories
[**getInventory**](InventoriesApi.md#getInventory) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId} | returns the single inventory
[**getInventoryInventoryList**](InventoriesApi.md#getInventoryInventoryList) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | returns the single inventory list
[**getInventoryInventoryListItem**](InventoriesApi.md#getInventoryInventoryListItem) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | returns the single inventory list item
[**getInventoryInventoryListItems**](InventoriesApi.md#getInventoryInventoryListItems) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | lists all inventory list items
[**getInventoryInventoryLists**](InventoriesApi.md#getInventoryInventoryLists) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists | lists all inventory lists
[**updateInventory**](InventoriesApi.md#updateInventory) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId} | updates the single inventory
[**updateInventoryInventoryList**](InventoriesApi.md#updateInventoryInventoryList) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | updates the single inventory list
[**updateInventoryInventoryListItem**](InventoriesApi.md#updateInventoryInventoryListItem) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | updates the single inventory list item
[**updateInventoryInventoryListItems**](InventoriesApi.md#updateInventoryInventoryListItems) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | updates inventory list items (property [product] required))


<a name="addInventories"></a>
# **addInventories**
> [AddOrUpdateResult] addInventories(body, koronaAccountId)

adds a batch of new inventories



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var body = [new KoronacloudApiV3.Inventory()]; // [Inventory] | a array of new inventories

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventories(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Inventory]**](Inventory.md)| a array of new inventories | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addInventoryInventoryListItems"></a>
# **addInventoryInventoryListItems**
> [AddOrUpdateResult] addInventoryInventoryListItems(inventoryId, inventoryListId, body, koronaAccountId)

adds inventory list items



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | data to update

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventoryInventoryListItems(inventoryId, inventoryListId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[InventoryListItem]**](InventoryListItem.md)| data to update | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventory"></a>
# **deleteInventory**
> deleteInventory(inventoryId, koronaAccountId)

deletes the single inventory (only allowed if hasBookedReceipts&#x3D;false)



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventory(inventoryId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryInventoryListItem"></a>
# **deleteInventoryInventoryListItem**
> deleteInventoryInventoryListItem(inventoryId, inventoryListId, productId, koronaAccountId)

deletes the single inventory list item



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryInventoryListItem(inventoryId, inventoryListId, productId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

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
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> Inventory getInventory(inventoryId, koronaAccountId)

returns the single inventory



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventory(inventoryId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**Inventory**](Inventory.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryList"></a>
# **getInventoryInventoryList**
> InventoryList getInventoryInventoryList(inventoryId, inventoryListId, koronaAccountId)

returns the single inventory list



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryList(inventoryId, inventoryListId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItem"></a>
# **getInventoryInventoryListItem**
> InventoryListItem getInventoryInventoryListItem(inventoryId, inventoryListId, productId, koronaAccountId)

returns the single inventory list item



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryListItem(inventoryId, inventoryListId, productId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**InventoryListItem**](InventoryListItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItems"></a>
# **getInventoryInventoryListItems**
> ResultListInventoryListItem getInventoryInventoryListItems(inventoryId, inventoryListId, koronaAccountId, opts)

lists all inventory list items



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getInventoryInventoryListItems(inventoryId, inventoryListId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListInventoryList getInventoryInventoryLists(inventoryId, koronaAccountId, opts)

lists all inventory lists



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getInventoryInventoryLists(inventoryId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> updateInventory(inventoryId, body, koronaAccountId)

updates the single inventory



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.Inventory(); // Inventory | the properties to update of the inventory

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventory(inventoryId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Inventory**](Inventory.md)| the properties to update of the inventory | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryList"></a>
# **updateInventoryInventoryList**
> updateInventoryInventoryList(inventoryId, inventoryListId, body, koronaAccountId)

updates the single inventory list



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.InventoryList(); // InventoryList | data to update

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryList(inventoryId, inventoryListId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**InventoryList**](InventoryList.md)| data to update | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryListItem"></a>
# **updateInventoryInventoryListItem**
> updateInventoryInventoryListItem(inventoryId, inventoryListId, productId, body, koronaAccountId)

updates the single inventory list item



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.InventoryListItem(); // InventoryListItem | data to update

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryListItem(inventoryId, inventoryListId, productId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**InventoryListItem**](InventoryListItem.md)| data to update | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateInventoryInventoryListItems"></a>
# **updateInventoryInventoryListItems**
> [AddOrUpdateResult] updateInventoryInventoryListItems(inventoryId, inventoryListId, body, koronaAccountId)

updates inventory list items (property [product] required))



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.InventoriesApi();

var inventoryId = "inventoryId_example"; // String | id of the related object (important: id should match the uuid-format)

var inventoryListId = "inventoryListId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | a array of inventory list items to update

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInventoryInventoryListItems(inventoryId, inventoryListId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inventoryId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **inventoryListId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[InventoryListItem]**](InventoryListItem.md)| a array of inventory list items to update | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

