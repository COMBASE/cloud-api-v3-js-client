# KoronacloudApiV3.ImagesApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getImage**](ImagesApi.md#getImage) | **GET** /accounts/{koronaAccountId}/images/{imageId} | displays the image


<a name="getImage"></a>
# **getImage**
> getImage(koronaAccountId, imageId)

displays the image



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ImagesApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var imageId = "imageId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getImage(koronaAccountId, imageId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **imageId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, image/jpg

