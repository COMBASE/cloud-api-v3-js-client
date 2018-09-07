# KoronacloudApiV3.CustomerOrdersApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerOrders**](CustomerOrdersApi.md#addCustomerOrders) | **POST** /accounts/{koronaAccountId}/customerOrders | adds a batch of new customer orders
[**deleteCustomerOrder**](CustomerOrdersApi.md#deleteCustomerOrder) | **DELETE** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | deletes the single customer order
[**getCustomerOrder**](CustomerOrdersApi.md#getCustomerOrder) | **GET** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | returns the single customer order
[**getCustomerOrders**](CustomerOrdersApi.md#getCustomerOrders) | **GET** /accounts/{koronaAccountId}/customerOrders | lists all customer orders
[**updateCustomerOrder**](CustomerOrdersApi.md#updateCustomerOrder) | **PATCH** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | updates the single customer order
[**updateCustomerOrders**](CustomerOrdersApi.md#updateCustomerOrders) | **PATCH** /accounts/{koronaAccountId}/customerOrders | updates a batch of customer orders


<a name="addCustomerOrders"></a>
# **addCustomerOrders**
> [AddOrUpdateResult] addCustomerOrders(body, koronaAccountId)

adds a batch of new customer orders



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var body = [new KoronacloudApiV3.CustomerOrder()]; // [CustomerOrder] | a array of new customer orders

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomerOrders(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CustomerOrder]**](CustomerOrder.md)| a array of new customer orders | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerOrder"></a>
# **deleteCustomerOrder**
> deleteCustomerOrder(customerOrderId, koronaAccountId, opts)

deletes the single customer order



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var customerOrderId = "customerOrderId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  '_number': "_number_example" // String | number of the related object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerOrder(customerOrderId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerOrderId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **_number** | **String**| number of the related object | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerOrder"></a>
# **getCustomerOrder**
> CustomerOrder getCustomerOrder(customerOrderId, koronaAccountId)

returns the single customer order



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var customerOrderId = "customerOrderId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerOrder(customerOrderId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerOrderId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**CustomerOrder**](CustomerOrder.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerOrders"></a>
# **getCustomerOrders**
> ResultListCustomerOrder getCustomerOrders(koronaAccountId, opts)

lists all customer orders



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'minPickUpTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone)
  'maxPickUpTime': new Date("2013-10-20T19:20:30+01:00") // Date | max (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerOrders(koronaAccountId, opts, callback);
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
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **minPickUpTime** | **Date**| min (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxPickUpTime** | **Date**| max (inclusive) pick up time of the receipt (ISO 8601; date, time and timezone) | [optional] 

### Return type

[**ResultListCustomerOrder**](ResultListCustomerOrder.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomerOrder"></a>
# **updateCustomerOrder**
> updateCustomerOrder(customerOrderId, body, koronaAccountId)

updates the single customer order



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var customerOrderId = "customerOrderId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.CustomerOrder(); // CustomerOrder | the properties to update of the customer order

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomerOrder(customerOrderId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerOrderId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**CustomerOrder**](CustomerOrder.md)| the properties to update of the customer order | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomerOrders"></a>
# **updateCustomerOrders**
> [AddOrUpdateResult] updateCustomerOrders(body, koronaAccountId)

updates a batch of customer orders

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var body = [new KoronacloudApiV3.CustomerOrder()]; // [CustomerOrder] | a array of existing customer orders

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomerOrders(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[CustomerOrder]**](CustomerOrder.md)| a array of existing customer orders | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

