# KoronacloudApiV3.CustomersApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCustomers**](CustomersApi.md#addCustomers) | **POST** /accounts/{koronaAccountId}/customers | adds a batch of new customers
[**deleteCustomer**](CustomersApi.md#deleteCustomer) | **DELETE** /accounts/{koronaAccountId}/customers/{customerId} | deletes the single customer
[**getCustomer**](CustomersApi.md#getCustomer) | **GET** /accounts/{koronaAccountId}/customers/{customerId} | returns the single customer
[**getCustomers**](CustomersApi.md#getCustomers) | **GET** /accounts/{koronaAccountId}/customers | lists all customers
[**updateCustomer**](CustomersApi.md#updateCustomer) | **PATCH** /accounts/{koronaAccountId}/customers/{customerId} | updates the single customer
[**updateCustomers**](CustomersApi.md#updateCustomers) | **PATCH** /accounts/{koronaAccountId}/customers | updates a batch of customers


<a name="addCustomers"></a>
# **addCustomers**
> [AddOrUpdateResult] addCustomers(body, koronaAccountId)

adds a batch of new customers



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var body = [new KoronacloudApiV3.Customer()]; // [Customer] | an array of new customers

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCustomers(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Customer]**](Customer.md)| an array of new customers | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(customerId, koronaAccountId)

deletes the single customer



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomer(customerId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomer"></a>
# **getCustomer**
> Customer getCustomer(customerId, koronaAccountId)

returns the single customer



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomer(customerId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

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
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

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
apiInstance.getCustomers(koronaAccountId, opts, callback);
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

[**ResultListCustomer**](ResultListCustomer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomer"></a>
# **updateCustomer**
> updateCustomer(customerId, body, koronaAccountId)

updates the single customer



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var customerId = "customerId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.Customer(); // Customer | the properties to update of the customer

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCustomer(customerId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Customer**](Customer.md)| the properties to update of the customer | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCustomers"></a>
# **updateCustomers**
> [AddOrUpdateResult] updateCustomers(body, koronaAccountId)

updates a batch of customers

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomersApi();

var body = [new KoronacloudApiV3.Customer()]; // [Customer] | an array of existing customers

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCustomers(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Customer]**](Customer.md)| an array of existing customers | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

