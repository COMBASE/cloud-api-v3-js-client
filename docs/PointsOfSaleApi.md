# KoronacloudApiV3.PointsOfSaleApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPointOfSaleEndOfDayStatements**](PointsOfSaleApi.md#addPointOfSaleEndOfDayStatements) | **POST** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber}/endOfDayStatements | adds a batch of point of sale-related end-of-day-statements
[**addPointOfSaleReceipts**](PointsOfSaleApi.md#addPointOfSaleReceipts) | **POST** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber}/receipts | adds a batch of point of sale-related receipts
[**getPointOfSale**](PointsOfSaleApi.md#getPointOfSale) | **GET** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber} | lists the point of sale
[**getPointOfSaleEndOfDayStatements**](PointsOfSaleApi.md#getPointOfSaleEndOfDayStatements) | **GET** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber}/endOfDayStatements | lists all point of sale-related end-of-day-statements
[**getPointOfSaleReceipt**](PointsOfSaleApi.md#getPointOfSaleReceipt) | **GET** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber}/receipts/{receiptId} | lists a single point of sale-related receipt
[**getPointOfSaleReceipts**](PointsOfSaleApi.md#getPointOfSaleReceipts) | **GET** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber}/receipts | lists all point of sale-related receipts
[**getPointsOfSale**](PointsOfSaleApi.md#getPointsOfSale) | **GET** /accounts/{accountId}/pointsOfSale | lists all point of sales
[**updatePointOfSale**](PointsOfSaleApi.md#updatePointOfSale) | **PATCH** /accounts/{accountId}/pointsOfSale/{pointOfSaleIdOrNumber} | updates a point of sale (works only for coupling (attribute &#39;couplingId&#39;) or updating device information (attribute &#39;deviceInformation&#39;))


<a name="addPointOfSaleEndOfDayStatements"></a>
# **addPointOfSaleEndOfDayStatements**
> [AddOrUpdateResult] addPointOfSaleEndOfDayStatements(accountId, pointOfSaleIdOrNumber, couplingId, opts)

adds a batch of point of sale-related end-of-day-statements



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

var opts = { 
  'body': [new KoronacloudApiV3.EndOfDayStatement()] // [EndOfDayStatement] | the end-of-day-statements to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPointOfSaleEndOfDayStatements(accountId, pointOfSaleIdOrNumber, couplingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **body** | [**[EndOfDayStatement]**](EndOfDayStatement.md)| the end-of-day-statements to add | [optional] 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addPointOfSaleReceipts"></a>
# **addPointOfSaleReceipts**
> [AddOrUpdateResult] addPointOfSaleReceipts(accountId, pointOfSaleIdOrNumber, couplingId, opts)

adds a batch of point of sale-related receipts



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

var opts = { 
  'body': [new KoronacloudApiV3.Receipt()] // [Receipt] | the receipts to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPointOfSaleReceipts(accountId, pointOfSaleIdOrNumber, couplingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **body** | [**[Receipt]**](Receipt.md)| the receipts to add | [optional] 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointOfSale"></a>
# **getPointOfSale**
> Pos getPointOfSale(accountId, pointOfSaleIdOrNumber, opts)

lists the point of sale



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | the number of the point of sale

var opts = { 
  'couplingId': "couplingId_example" // String | the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPointOfSale(accountId, pointOfSaleIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| the number of the point of sale | 
 **couplingId** | **String**| the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external). | [optional] 

### Return type

[**Pos**](Pos.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointOfSaleEndOfDayStatements"></a>
# **getPointOfSaleEndOfDayStatements**
> ResultListEndOfDayStatement getPointOfSaleEndOfDayStatements(accountId, pointOfSaleIdOrNumber, couplingId, opts)

lists all point of sale-related end-of-day-statements



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

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
apiInstance.getPointOfSaleEndOfDayStatements(accountId, pointOfSaleIdOrNumber, couplingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 

### Return type

[**ResultListEndOfDayStatement**](ResultListEndOfDayStatement.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointOfSaleReceipt"></a>
# **getPointOfSaleReceipt**
> Receipt getPointOfSaleReceipt(accountId, pointOfSaleIdOrNumber, receiptId, opts)

lists a single point of sale-related receipt



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var receiptId = "receiptId_example"; // String | the id of the receipt

var opts = { 
  'couplingId': "couplingId_example" // String | the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPointOfSaleReceipt(accountId, pointOfSaleIdOrNumber, receiptId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **receiptId** | **String**| the id of the receipt | 
 **couplingId** | **String**| the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external). | [optional] 

### Return type

[**Receipt**](Receipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointOfSaleReceipts"></a>
# **getPointOfSaleReceipts**
> ResultListReceipt getPointOfSaleReceipts(accountId, pointOfSaleIdOrNumber, opts)

lists all point of sale-related receipts



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'couplingId': "couplingId_example", // String | the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external).
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'zCount': 789, // Number | z-count of the receipt
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00") // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPointOfSaleReceipts(accountId, pointOfSaleIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **couplingId** | **String**| the coupling-id of the device. It can be set to check whether your coupling-id is correct or not (works only, if point of sale is external). | [optional] 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **zCount** | **Number**| z-count of the receipt | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 

### Return type

[**ResultListReceipt**](ResultListReceipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointsOfSale"></a>
# **getPointsOfSale**
> ResultListPos getPointsOfSale(accountId, opts)

lists all point of sales



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

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
apiInstance.getPointsOfSale(accountId, opts, callback);
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

[**ResultListPos**](ResultListPos.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePointOfSale"></a>
# **updatePointOfSale**
> updatePointOfSale(accountId, pointOfSaleIdOrNumber, body, opts)

updates a point of sale (works only for coupling (attribute &#39;couplingId&#39;) or updating device information (attribute &#39;deviceInformation&#39;))



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PointsOfSaleApi();

var accountId = "accountId_example"; // String | the account id

var pointOfSaleIdOrNumber = "pointOfSaleIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = new KoronacloudApiV3.Pos(); // Pos | the properties to update of the point of sale ('couplingId' only)

var opts = { 
  'couplingId': "couplingId_example", // String | the coupling-id of the device (required if already coupled)
  'decouple': true // Boolean | executes uncoupling, if set to true, device will be uncoupled if point of sale is already coupled
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePointOfSale(accountId, pointOfSaleIdOrNumber, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **pointOfSaleIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **body** | [**Pos**](Pos.md)| the properties to update of the point of sale (&#39;couplingId&#39; only) | 
 **couplingId** | **String**| the coupling-id of the device (required if already coupled) | [optional] 
 **decouple** | **Boolean**| executes uncoupling, if set to true, device will be uncoupled if point of sale is already coupled | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

