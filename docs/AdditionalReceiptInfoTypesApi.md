# KoronacloudApiV3.AdditionalReceiptInfoTypesApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAdditionalReceiptInfoType**](AdditionalReceiptInfoTypesApi.md#getAdditionalReceiptInfoType) | **GET** /accounts/{koronaAccountId}/additionalReceiptInfoTypes/{additionalReceiptInfoTypeId} | returns the single additional receipt info type
[**getAdditionalReceiptInfoTypes**](AdditionalReceiptInfoTypesApi.md#getAdditionalReceiptInfoTypes) | **GET** /accounts/{koronaAccountId}/additionalReceiptInfoTypes | lists all additional receipt info types


<a name="getAdditionalReceiptInfoType"></a>
# **getAdditionalReceiptInfoType**
> AdditionalReceiptInfoType getAdditionalReceiptInfoType(additionalReceiptInfoTypeId, koronaAccountId)

returns the single additional receipt info type



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.AdditionalReceiptInfoTypesApi();

var additionalReceiptInfoTypeId = "additionalReceiptInfoTypeId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAdditionalReceiptInfoType(additionalReceiptInfoTypeId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **additionalReceiptInfoTypeId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**AdditionalReceiptInfoType**](AdditionalReceiptInfoType.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAdditionalReceiptInfoTypes"></a>
# **getAdditionalReceiptInfoTypes**
> ResultListAdditionalReceiptInfoType getAdditionalReceiptInfoTypes(koronaAccountId, opts)

lists all additional receipt info types



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.AdditionalReceiptInfoTypesApi();

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
apiInstance.getAdditionalReceiptInfoTypes(koronaAccountId, opts, callback);
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

[**ResultListAdditionalReceiptInfoType**](ResultListAdditionalReceiptInfoType.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

