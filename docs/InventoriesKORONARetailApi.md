# KoronacloudApiV3.InventoriesKORONARetailApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addInventories**](InventoriesKORONARetailApi.md#addInventories) | **POST** /accounts/{accountId}/inventories | adds a batch of new inventories
[**addInventoryInventoryListItems**](InventoriesKORONARetailApi.md#addInventoryInventoryListItems) | **POST** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items | adds inventory list items
[**deleteInventory**](InventoriesKORONARetailApi.md#deleteInventory) | **DELETE** /accounts/{accountId}/inventories/{inventoryIdOrNumber} | deletes the inventory; only possible if hasBookedReceipts&#x3D;false
[**deleteInventoryInventoryListItem**](InventoriesKORONARetailApi.md#deleteInventoryInventoryListItem) | **DELETE** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items/{productIdOrNumber} | deletes the inventory list item
[**getInventories**](InventoriesKORONARetailApi.md#getInventories) | **GET** /accounts/{accountId}/inventories | lists all inventories
[**getInventory**](InventoriesKORONARetailApi.md#getInventory) | **GET** /accounts/{accountId}/inventories/{inventoryIdOrNumber} | lists the inventory
[**getInventoryInventoryList**](InventoriesKORONARetailApi.md#getInventoryInventoryList) | **GET** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber} | lists the inventory list
[**getInventoryInventoryListItem**](InventoriesKORONARetailApi.md#getInventoryInventoryListItem) | **GET** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items/{productIdOrNumber} | lists the inventory list item with the specified product
[**getInventoryInventoryListItems**](InventoriesKORONARetailApi.md#getInventoryInventoryListItems) | **GET** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items | lists all inventory list items
[**getInventoryInventoryLists**](InventoriesKORONARetailApi.md#getInventoryInventoryLists) | **GET** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists | lists all inventory lists
[**updateInventory**](InventoriesKORONARetailApi.md#updateInventory) | **PATCH** /accounts/{accountId}/inventories/{inventoryIdOrNumber} | changes the inventory
[**updateInventoryInventoryList**](InventoriesKORONARetailApi.md#updateInventoryInventoryList) | **PATCH** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber} | updates the inventory list
[**updateInventoryInventoryListItem**](InventoriesKORONARetailApi.md#updateInventoryInventoryListItem) | **PATCH** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items/{productIdOrNumber} | updates the inventory list item
[**updateInventoryInventoryListItems**](InventoriesKORONARetailApi.md#updateInventoryInventoryListItems) | **PATCH** /accounts/{accountId}/inventories/{inventoryIdOrNumber}/inventoryLists/{inventoryListIdOrNumber}/items | updates inventory list items (property [product] required))


<a name="addInventories"></a>
# **addInventories**
> [AddOrUpdateResult] addInventories(accountId, body)

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

var accountId = "accountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Inventory()]; // [Inventory] | a array of new inventories


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventories(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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
> [AddOrUpdateResult] addInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
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
> deleteInventory(accountId, inventoryIdOrNumber)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventory(accountId, inventoryIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteInventoryInventoryListItem"></a>
# **deleteInventoryInventoryListItem**
> deleteInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var productIdOrNumber = "productIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **productIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventories"></a>
# **getInventories**
> ResultListInventory getInventories(accountId, opts)

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

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getInventories(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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
> Inventory getInventory(accountId, inventoryIdOrNumber)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventory(accountId, inventoryIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**Inventory**](Inventory.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryList"></a>
# **getInventoryInventoryList**
> InventoryList getInventoryInventoryList(accountId, inventoryIdOrNumber, inventoryListIdOrNumber)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryList(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**InventoryList**](InventoryList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItem"></a>
# **getInventoryInventoryListItem**
> InventoryListItem getInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var productIdOrNumber = "productIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **productIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**InventoryListItem**](InventoryListItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInventoryInventoryListItems"></a>
# **getInventoryInventoryListItems**
> ResultListInventoryListItem getInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, opts)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

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
apiInstance.getInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
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
> ResultListInventoryList getInventoryInventoryLists(accountId, inventoryIdOrNumber, opts)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInventoryInventoryLists(accountId, inventoryIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
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
> updateInventory(accountId, inventoryIdOrNumber, body)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = new KoronacloudApiV3.Inventory(); // Inventory | the properties to update of the inventory


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventory(accountId, inventoryIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
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
> updateInventoryInventoryList(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = new KoronacloudApiV3.InventoryList(); // InventoryList | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryList(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
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
> updateInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber, body)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var productIdOrNumber = "productIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = new KoronacloudApiV3.InventoryListItem(); // InventoryListItem | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateInventoryInventoryListItem(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, productIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **productIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
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
> [AddOrUpdateResult] updateInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body)

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

var accountId = "accountId_example"; // String | the account id

var inventoryIdOrNumber = "inventoryIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var inventoryListIdOrNumber = "inventoryListIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = [new KoronacloudApiV3.InventoryListItem()]; // [InventoryListItem] | a array of inventory list items to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInventoryInventoryListItems(accountId, inventoryIdOrNumber, inventoryListIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **inventoryIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **inventoryListIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **body** | [**[InventoryListItem]**](InventoryListItem.md)| a array of inventory list items to update | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

