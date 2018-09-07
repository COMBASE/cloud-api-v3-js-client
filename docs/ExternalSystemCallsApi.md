# KoronacloudApiV3.ExternalSystemCallsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addExternalSystemCalls**](ExternalSystemCallsApi.md#addExternalSystemCalls) | **POST** /accounts/{koronaAccountId}/externalSystemCalls | adds a batch of new external system calls
[**deleteExternalSystemCall**](ExternalSystemCallsApi.md#deleteExternalSystemCall) | **DELETE** /accounts/{koronaAccountId}/externalSystemCalls/{externalSystemCallId} | deletes a single external system call
[**getExternalSystemCall**](ExternalSystemCallsApi.md#getExternalSystemCall) | **GET** /accounts/{koronaAccountId}/externalSystemCalls/{externalSystemCallId} | returns a single external system call
[**getExternalSystemCalls**](ExternalSystemCallsApi.md#getExternalSystemCalls) | **GET** /accounts/{koronaAccountId}/externalSystemCalls | lists all external system calls
[**updateExternalSystemCall**](ExternalSystemCallsApi.md#updateExternalSystemCall) | **PATCH** /accounts/{koronaAccountId}/externalSystemCalls/{externalSystemCallId} | updates the single external system call
[**updateExternalSystemCalls**](ExternalSystemCallsApi.md#updateExternalSystemCalls) | **PATCH** /accounts/{koronaAccountId}/externalSystemCalls | updates a batch of external system calls


<a name="addExternalSystemCalls"></a>
# **addExternalSystemCalls**
> [AddOrUpdateResult] addExternalSystemCalls(body, koronaAccountId)

adds a batch of new external system calls



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

var body = [new KoronacloudApiV3.ExternalSystemCall()]; // [ExternalSystemCall] | an array of new external system calls

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addExternalSystemCalls(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ExternalSystemCall]**](ExternalSystemCall.md)| an array of new external system calls | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExternalSystemCall"></a>
# **deleteExternalSystemCall**
> deleteExternalSystemCall(externalSystemCallId, koronaAccountId)

deletes a single external system call



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

var externalSystemCallId = "externalSystemCallId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExternalSystemCall(externalSystemCallId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalSystemCallId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExternalSystemCall"></a>
# **getExternalSystemCall**
> ExternalSystemCall getExternalSystemCall(externalSystemCallId, koronaAccountId)

returns a single external system call



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

var externalSystemCallId = "externalSystemCallId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExternalSystemCall(externalSystemCallId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalSystemCallId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**ExternalSystemCall**](ExternalSystemCall.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExternalSystemCalls"></a>
# **getExternalSystemCalls**
> ResultListExternalSystemCall getExternalSystemCalls(koronaAccountId, opts)

lists all external system calls



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

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
apiInstance.getExternalSystemCalls(koronaAccountId, opts, callback);
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

[**ResultListExternalSystemCall**](ResultListExternalSystemCall.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalSystemCall"></a>
# **updateExternalSystemCall**
> updateExternalSystemCall(externalSystemCallId, body, koronaAccountId)

updates the single external system call



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

var externalSystemCallId = "externalSystemCallId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.ExternalSystemCall(); // ExternalSystemCall | the properties to update of the external system call

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateExternalSystemCall(externalSystemCallId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalSystemCallId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**ExternalSystemCall**](ExternalSystemCall.md)| the properties to update of the external system call | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateExternalSystemCalls"></a>
# **updateExternalSystemCalls**
> [AddOrUpdateResult] updateExternalSystemCalls(body, koronaAccountId)

updates a batch of external system calls

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ExternalSystemCallsApi();

var body = [new KoronacloudApiV3.ExternalSystemCall()]; // [ExternalSystemCall] | an array of existing external system calls

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateExternalSystemCalls(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[ExternalSystemCall]**](ExternalSystemCall.md)| an array of existing external system calls | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

