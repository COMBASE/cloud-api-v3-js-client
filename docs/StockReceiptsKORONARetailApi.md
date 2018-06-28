# KoronacloudApiV3.StockReceiptsKORONARetailApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addStockReceiptItems**](StockReceiptsKORONARetailApi.md#addStockReceiptItems) | **POST** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | adds stock-receipt items
[**addStockReceipts**](StockReceiptsKORONARetailApi.md#addStockReceipts) | **POST** /accounts/{koronaAccountId}/stockReceipts | adds stock-receipts
[**deleteStockReceiptItem**](StockReceiptsKORONARetailApi.md#deleteStockReceiptItem) | **DELETE** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | deletes the stock-receipt item
[**getStockReceipt**](StockReceiptsKORONARetailApi.md#getStockReceipt) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber} | lists the stock-receipt
[**getStockReceiptItem**](StockReceiptsKORONARetailApi.md#getStockReceiptItem) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | lists the stock-receipt item
[**getStockReceiptItems**](StockReceiptsKORONARetailApi.md#getStockReceiptItems) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | lists all stock-receipt items
[**getStockReceipts**](StockReceiptsKORONARetailApi.md#getStockReceipts) | **GET** /accounts/{koronaAccountId}/stockReceipts | lists all stock-receipts
[**updateStockReceipt**](StockReceiptsKORONARetailApi.md#updateStockReceipt) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber} | updates the stock-receipt
[**updateStockReceiptItem**](StockReceiptsKORONARetailApi.md#updateStockReceiptItem) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | updates the stock-receipt item
[**updateStockReceiptItems**](StockReceiptsKORONARetailApi.md#updateStockReceiptItems) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | updates stock-receipt items


<a name="addStockReceiptItems"></a>
# **addStockReceiptItems**
> [AddOrUpdateResult] addStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, body)

adds stock-receipt items



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.StockReceiptItem()]; // [StockReceiptItem] | data to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[StockReceiptItem]**](StockReceiptItem.md)| data to add | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addStockReceipts"></a>
# **addStockReceipts**
> [AddOrUpdateResult] addStockReceipts(koronaAccountId, body)

adds stock-receipts



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.StockReceipt()]; // [StockReceipt] | data to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addStockReceipts(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[StockReceipt]**](StockReceipt.md)| data to add | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteStockReceiptItem"></a>
# **deleteStockReceiptItem**
> deleteStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber)

deletes the stock-receipt item



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var productIdOrNumber = "productIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStockReceipt"></a>
# **getStockReceipt**
> StockReceipt getStockReceipt(koronaAccountId, stockReceiptIdOrNumber)

lists the stock-receipt



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStockReceipt(koronaAccountId, stockReceiptIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**StockReceipt**](StockReceipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStockReceiptItem"></a>
# **getStockReceiptItem**
> StockReceiptItem getStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber)

lists the stock-receipt item



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var productIdOrNumber = "productIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**StockReceiptItem**](StockReceiptItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStockReceiptItems"></a>
# **getStockReceiptItems**
> ResultListStockReceiptItem getStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, opts)

lists all stock-receipt items



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

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
apiInstance.getStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 

### Return type

[**ResultListStockReceiptItem**](ResultListStockReceiptItem.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getStockReceipts"></a>
# **getStockReceipts**
> ResultListStockReceipt getStockReceipts(koronaAccountId, opts)

lists all stock-receipts



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

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
  'organizationalUnit': "organizationalUnit_example", // String | organizational unit
  'sourceOrganizationalUnit': "sourceOrganizationalUnit_example", // String | source organizational unit
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStockReceipts(koronaAccountId, opts, callback);
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
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **minBookingTime** | **Date**| min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxBookingTime** | **Date**| max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **organizationalUnit** | **String**| organizational unit | [optional] 
 **sourceOrganizationalUnit** | **String**| source organizational unit | [optional] 
 **bookingStatus** | **String**| booking status (possible values: BOOKED, IN_PROGRESS) | [optional] 

### Return type

[**ResultListStockReceipt**](ResultListStockReceipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStockReceipt"></a>
# **updateStockReceipt**
> updateStockReceipt(koronaAccountId, stockReceiptIdOrNumber, body)

updates the stock-receipt



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.StockReceipt(); // StockReceipt | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStockReceipt(koronaAccountId, stockReceiptIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**StockReceipt**](StockReceipt.md)| data to update | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStockReceiptItem"></a>
# **updateStockReceiptItem**
> updateStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber, body)

updates the stock-receipt item



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var productIdOrNumber = "productIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.StockReceiptItem(); // StockReceiptItem | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateStockReceiptItem(koronaAccountId, stockReceiptIdOrNumber, productIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **productIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**StockReceiptItem**](StockReceiptItem.md)| data to update | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateStockReceiptItems"></a>
# **updateStockReceiptItems**
> [AddOrUpdateResult] updateStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, body)

updates stock-receipt items



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StockReceiptsKORONARetailApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var stockReceiptIdOrNumber = "stockReceiptIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.StockReceiptItem()]; // [StockReceiptItem] | data to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateStockReceiptItems(koronaAccountId, stockReceiptIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **stockReceiptIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[StockReceiptItem]**](StockReceiptItem.md)| data to update | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

