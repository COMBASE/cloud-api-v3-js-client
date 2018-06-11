# KoronacloudApiV3.PaymentMethodsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentMethod**](PaymentMethodsApi.md#getPaymentMethod) | **GET** /accounts/{accountId}/paymentMethods/{paymentMethodIdOrNumber} | lists the payment method
[**getPaymentMethods**](PaymentMethodsApi.md#getPaymentMethods) | **GET** /accounts/{accountId}/paymentMethods | lists all payment methods


<a name="getPaymentMethod"></a>
# **getPaymentMethod**
> PaymentMethod getPaymentMethod(accountId, paymentMethodIdOrNumber)

lists the payment method



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PaymentMethodsApi();

var accountId = "accountId_example"; // String | the account id

var paymentMethodIdOrNumber = "paymentMethodIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentMethod(accountId, paymentMethodIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **paymentMethodIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**PaymentMethod**](PaymentMethod.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentMethods"></a>
# **getPaymentMethods**
> ResultListPaymentMethod getPaymentMethods(accountId, opts)

lists all payment methods



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.PaymentMethodsApi();

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
apiInstance.getPaymentMethods(accountId, opts, callback);
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

[**ResultListPaymentMethod**](ResultListPaymentMethod.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

