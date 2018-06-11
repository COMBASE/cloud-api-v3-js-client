# KoronacloudApiV3.CustomerOrdersApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomerOrders**](CustomerOrdersApi.md#addCustomerOrders) | **POST** /accounts/{accountId}/customerOrders | adds a batch of new customer orders
[**deleteCustomerOrder**](CustomerOrdersApi.md#deleteCustomerOrder) | **DELETE** /accounts/{accountId}/customerOrders/{customerOrderIdOrNumber} | deletes the customer order
[**getCustomerOrder**](CustomerOrdersApi.md#getCustomerOrder) | **GET** /accounts/{accountId}/customerOrders/{customerOrderIdOrNumber} | lists the customer order
[**getCustomerOrders**](CustomerOrdersApi.md#getCustomerOrders) | **GET** /accounts/{accountId}/customerOrders | lists all customer orders
[**updateCustomerOrder**](CustomerOrdersApi.md#updateCustomerOrder) | **PATCH** /accounts/{accountId}/customerOrders/{customerOrderIdOrNumber} | changes the customer order
[**updateCustomerOrders**](CustomerOrdersApi.md#updateCustomerOrders) | **PATCH** /accounts/{accountId}/customerOrders | changes a batch of customer orders


<a name="addCustomerOrders"></a>
# **addCustomerOrders**
> [AddOrUpdateResult] addCustomerOrders(accountId, body)

adds a batch of new customer orders



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

var body = [new KoronacloudApiV3.CustomerOrder()]; // [CustomerOrder] | a array of new customer orders


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomerOrders(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **body** | [**[CustomerOrder]**](CustomerOrder.md)| a array of new customer orders | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomerOrder"></a>
# **deleteCustomerOrder**
> deleteCustomerOrder(accountId, customerOrderIdOrNumber)

deletes the customer order



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

var customerOrderIdOrNumber = "customerOrderIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomerOrder(accountId, customerOrderIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **customerOrderIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerOrder"></a>
# **getCustomerOrder**
> CustomerOrder getCustomerOrder(accountId, customerOrderIdOrNumber)

lists the customer order



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

var customerOrderIdOrNumber = "customerOrderIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerOrder(accountId, customerOrderIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **customerOrderIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**CustomerOrder**](CustomerOrder.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerOrders"></a>
# **getCustomerOrders**
> ResultListCustomerOrder getCustomerOrders(accountId, opts)

lists all customer orders



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getCustomerOrders(accountId, opts, callback);
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
> updateCustomerOrder(accountId, customerOrderIdOrNumber, body)

changes the customer order

if [number] is set, the number of the object will change and the resource location as well

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

var customerOrderIdOrNumber = "customerOrderIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = new KoronacloudApiV3.CustomerOrder(); // CustomerOrder | the properties to update of the customer order


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomerOrder(accountId, customerOrderIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **customerOrderIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **body** | [**CustomerOrder**](CustomerOrder.md)| the properties to update of the customer order | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomerOrders"></a>
# **updateCustomerOrders**
> [AddOrUpdateResult] updateCustomerOrders(accountId, body)

changes a batch of customer orders

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerOrdersApi();

var accountId = "accountId_example"; // String | the account id

var body = [new KoronacloudApiV3.CustomerOrder()]; // [CustomerOrder] | a array of existing customer orders


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomerOrders(accountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **body** | [**[CustomerOrder]**](CustomerOrder.md)| a array of existing customer orders | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

