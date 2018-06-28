# KoronacloudApiV3.SalesTaxesApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSalesTax**](SalesTaxesApi.md#getSalesTax) | **GET** /accounts/{koronaAccountId}/salesTaxes/{salesTaxId} | lists the sales tax
[**getSalesTaxes**](SalesTaxesApi.md#getSalesTaxes) | **GET** /accounts/{koronaAccountId}/salesTaxes | lists all sales taxes


<a name="getSalesTax"></a>
# **getSalesTax**
> SalesTax getSalesTax(koronaAccountId, salesTaxId)

lists the sales tax



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.SalesTaxesApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var salesTaxId = "salesTaxId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSalesTax(koronaAccountId, salesTaxId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **salesTaxId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**SalesTax**](SalesTax.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSalesTaxes"></a>
# **getSalesTaxes**
> ResultListSalesTax getSalesTaxes(koronaAccountId, opts)

lists all sales taxes



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.SalesTaxesApi();

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
apiInstance.getSalesTaxes(koronaAccountId, opts, callback);
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

[**ResultListSalesTax**](ResultListSalesTax.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

