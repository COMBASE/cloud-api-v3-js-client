# CloudApiV3JsClient.PointsOfSaleApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPointOfSaleEndOfDayStatements**](PointsOfSaleApi.md#addPointOfSaleEndOfDayStatements) | **POST** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/endOfDayStatements | adds a batch of point of sale-related end-of-day-statements
[**addPointOfSaleReceipts**](PointsOfSaleApi.md#addPointOfSaleReceipts) | **POST** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts | adds a batch of point of sale-related receipts
[**getPointOfSale**](PointsOfSaleApi.md#getPointOfSale) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId} | returns the single point of sale
[**getPointOfSaleEndOfDayStatements**](PointsOfSaleApi.md#getPointOfSaleEndOfDayStatements) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/endOfDayStatements | lists all point of sale-related end-of-day-statements
[**getPointOfSaleReceipt**](PointsOfSaleApi.md#getPointOfSaleReceipt) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts/{receiptId} | returns the single point of sale-related receipt
[**getPointOfSaleReceipts**](PointsOfSaleApi.md#getPointOfSaleReceipts) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts | lists all point of sale-related receipts
[**getPointsOfSale**](PointsOfSaleApi.md#getPointsOfSale) | **GET** /accounts/{koronaAccountId}/pointsOfSale | lists all points of sale
[**updatePointOfSale**](PointsOfSaleApi.md#updatePointOfSale) | **PATCH** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId} | updates a point of sale (works only for coupling (attribute &#39;couplingId&#39;) or updating device information (attribute &#39;deviceInformation&#39;))


<a name="addPointOfSaleEndOfDayStatements"></a>
# **addPointOfSaleEndOfDayStatements**
> [AddOrUpdateResult] addPointOfSaleEndOfDayStatements(pointOfSaleId, couplingId, koronaAccountId, opts)

adds a batch of point of sale-related end-of-day-statements



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'body': [new CloudApiV3JsClient.EndOfDayStatement()] // [EndOfDayStatement] | the end-of-day-statements to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPointOfSaleEndOfDayStatements(pointOfSaleId, couplingId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> [AddOrUpdateResult] addPointOfSaleReceipts(pointOfSaleId, couplingId, koronaAccountId, opts)

adds a batch of point of sale-related receipts



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'body': [new CloudApiV3JsClient.Receipt()] // [Receipt] | the receipts to add
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addPointOfSaleReceipts(pointOfSaleId, couplingId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> Pos getPointOfSale(pointOfSaleId, koronaAccountId, opts)

returns the single point of sale



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | the number of the point of sale

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getPointOfSale(pointOfSaleId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| the number of the point of sale | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListEndOfDayStatement getPointOfSaleEndOfDayStatements(pointOfSaleId, couplingId, koronaAccountId, opts)

lists all point of sale-related end-of-day-statements



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var couplingId = "couplingId_example"; // String | the coupling-id of the device

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
apiInstance.getPointOfSaleEndOfDayStatements(pointOfSaleId, couplingId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **couplingId** | **String**| the coupling-id of the device | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> Receipt getPointOfSaleReceipt(pointOfSaleId, receiptId, koronaAccountId, opts)

returns the single point of sale-related receipt



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var receiptId = "receiptId_example"; // String | the id of the receipt

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getPointOfSaleReceipt(pointOfSaleId, receiptId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **receiptId** | **String**| the id of the receipt | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListReceipt getPointOfSaleReceipts(pointOfSaleId, koronaAccountId, opts)

lists all point of sale-related receipts



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getPointOfSaleReceipts(pointOfSaleId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListPos getPointsOfSale(koronaAccountId, opts)

lists all points of sale



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

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
apiInstance.getPointsOfSale(koronaAccountId, opts, callback);
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

[**ResultListPos**](ResultListPos.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePointOfSale"></a>
# **updatePointOfSale**
> updatePointOfSale(pointOfSaleId, body, koronaAccountId, opts)

updates a point of sale (works only for coupling (attribute &#39;couplingId&#39;) or updating device information (attribute &#39;deviceInformation&#39;))



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.PointsOfSaleApi();

var pointOfSaleId = "pointOfSaleId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new CloudApiV3JsClient.Pos(); // Pos | the properties to update of the point of sale ('couplingId' only)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.updatePointOfSale(pointOfSaleId, body, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pointOfSaleId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Pos**](Pos.md)| the properties to update of the point of sale (&#39;couplingId&#39; only) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **couplingId** | **String**| the coupling-id of the device (required if already coupled) | [optional] 
 **decouple** | **Boolean**| executes uncoupling, if set to true, device will be uncoupled if point of sale is already coupled | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

