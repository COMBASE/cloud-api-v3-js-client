# KoronacloudApiV3.ReceiptsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReceipt**](ReceiptsApi.md#getReceipt) | **GET** /accounts/{koronaAccountId}/receipts/{receiptId} | lists a single receipt
[**getReceipts**](ReceiptsApi.md#getReceipts) | **GET** /accounts/{koronaAccountId}/receipts | lists all receipts


<a name="getReceipt"></a>
# **getReceipt**
> Receipt getReceipt(koronaAccountId, receiptId)

lists a single receipt



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ReceiptsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var receiptId = "receiptId_example"; // String | the id of the receipt


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceipt(koronaAccountId, receiptId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **receiptId** | **String**| the id of the receipt | 

### Return type

[**Receipt**](Receipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReceipts"></a>
# **getReceipts**
> ResultListReceipt getReceipts(koronaAccountId, opts)

lists all receipts



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ReceiptsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'pointOfSale': "pointOfSale_example", // String | point of sale
  'organizationalUnit': "organizationalUnit_example", // String | organizational unit
  'zCount': 789, // Number | z-count of the receipt
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00") // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReceipts(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **pointOfSale** | **String**| point of sale | [optional] 
 **organizationalUnit** | **String**| organizational unit | [optional] 
 **zCount** | **Number**| z-count of the receipt | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 

### Return type

[**ResultListReceipt**](ResultListReceipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

