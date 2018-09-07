# CloudApiV3JsClient.StatisticsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRevenue**](StatisticsApi.md#getRevenue) | **GET** /accounts/{koronaAccountId}/statistics/revenueData | returns information about the revenue in the given period
[**getRevenueForCustomerGroups**](StatisticsApi.md#getRevenueForCustomerGroups) | **GET** /accounts/{koronaAccountId}/statistics/revenueDataForCustomerGroups | returns the turnover per customer group during the given period
[**getRevenueHourly**](StatisticsApi.md#getRevenueHourly) | **GET** /accounts/{koronaAccountId}/statistics/revenueDataHourly | returns the turnover per hour during the given period
[**getTopSeller**](StatisticsApi.md#getTopSeller) | **GET** /accounts/{koronaAccountId}/statistics/topSeller | returns the top-seller


<a name="getRevenue"></a>
# **getRevenue**
> StatisticRevenueData getRevenue(koronaAccountId, opts)

returns information about the revenue in the given period



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.StatisticsApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'organizationalUnit': "organizationalUnit_example", // String | number of the organizational unit
  'period': "period_example" // String | time period for comparison
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRevenue(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **organizationalUnit** | **String**| number of the organizational unit | [optional] 
 **period** | **String**| time period for comparison | [optional] 

### Return type

[**StatisticRevenueData**](StatisticRevenueData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRevenueForCustomerGroups"></a>
# **getRevenueForCustomerGroups**
> StatisticMapStringRevenueData getRevenueForCustomerGroups(koronaAccountId, opts)

returns the turnover per customer group during the given period



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.StatisticsApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'organizationalUnit': "organizationalUnit_example", // String | number of the organizational unit
  'period': "period_example" // String | time period for comparison
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRevenueForCustomerGroups(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **organizationalUnit** | **String**| number of the organizational unit | [optional] 
 **period** | **String**| time period for comparison | [optional] 

### Return type

[**StatisticMapStringRevenueData**](StatisticMapStringRevenueData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRevenueHourly"></a>
# **getRevenueHourly**
> StatisticMapStringRevenueData getRevenueHourly(koronaAccountId, opts)

returns the turnover per hour during the given period



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.StatisticsApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'organizationalUnit': "organizationalUnit_example", // String | number of the organizational unit
  'period': "period_example" // String | time period for comparison
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRevenueHourly(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **organizationalUnit** | **String**| number of the organizational unit | [optional] 
 **period** | **String**| time period for comparison | [optional] 

### Return type

[**StatisticMapStringRevenueData**](StatisticMapStringRevenueData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTopSeller"></a>
# **getTopSeller**
> StatisticListTopSeller getTopSeller(koronaAccountId, opts)

returns the top-seller



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.StatisticsApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'organizationalUnit': "organizationalUnit_example", // String | number of the organizational unit
  'period': "period_example", // String | time period for comparison
  'limit': 56 // Number | maximum number of products to show
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTopSeller(koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **organizationalUnit** | **String**| number of the organizational unit | [optional] 
 **period** | **String**| time period for comparison | [optional] 
 **limit** | **Number**| maximum number of products to show | [optional] 

### Return type

[**StatisticListTopSeller**](StatisticListTopSeller.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

