# CloudApiV3JsClient.KoronaAccountApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getKoronaAccount**](KoronaAccountApi.md#getKoronaAccount) | **GET** /accounts/{koronaAccountId} | returns the single korona account


<a name="getKoronaAccount"></a>
# **getKoronaAccount**
> KoronaAccount getKoronaAccount(koronaAccountId)

returns the single korona account



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.KoronaAccountApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKoronaAccount(koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**KoronaAccount**](KoronaAccount.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

