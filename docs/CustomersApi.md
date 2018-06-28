# KoronacloudApiV3.CustomersApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomers**](CustomersApi.md#addCustomers) | **POST** /accounts/{koronaAccountId}/customers | adds a batch of new customers
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /accounts/{koronaAccountId}/customers/{customerId} | deletes the customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /accounts/{koronaAccountId}/customers/{customerId} | lists the customer
[**getCustomers**](CustomersApi.md#getCustomers) | **GET** /accounts/{koronaAccountId}/customers | lists all customers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PATCH** /accounts/{koronaAccountId}/customers/{customerId} | updates the customer
[**updateCustomers**](CustomersApi.md#updateCustomers) | **PATCH** /accounts/{koronaAccountId}/customers | changes a batch of customers


<a name="addCustomers"></a>
# **addCustomers**
> [AddOrUpdateResult] addCustomers(koronaAccountId, body)

adds a batch of new customers



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Customer()]; // [Customer] | a array of new customers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomers(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[Customer]**](Customer.md)| a array of new customers | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(koronaAccountId, customerId)

deletes the customer



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomer(koronaAccountId, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomer"></a>
# **getCustomer**
> Customer getCustomer(koronaAccountId, customerId)

lists the customer



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomer(koronaAccountId, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**Customer**](Customer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomers"></a>
# **getCustomers**
> ResultListCustomer getCustomers(koronaAccountId, opts)

lists all customers



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

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
apiInstance.getCustomers(koronaAccountId, opts, callback);
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

[**ResultListCustomer**](ResultListCustomer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> updateCustomer(koronaAccountId, customerId, body)

updates the customer



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.Customer(); // Customer | the properties to update of the customer


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomer(koronaAccountId, customerId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Customer**](Customer.md)| the properties to update of the customer | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomers"></a>
# **updateCustomers**
> [AddOrUpdateResult] updateCustomers(koronaAccountId, body)

changes a batch of customers

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Customer()]; // [Customer] | a array of existing customers


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomers(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[Customer]**](Customer.md)| a array of existing customers | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

