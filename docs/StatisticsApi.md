# KoronacloudApiV3.StatisticsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRevenue**](StatisticsApi.md#getRevenue) | **GET** /accounts/{accountId}/statistics/revenueData | lists information about the revenue in the given period
[**getRevenueForCustomerGroups**](StatisticsApi.md#getRevenueForCustomerGroups) | **GET** /accounts/{accountId}/statistics/revenueDataForCustomerGroups | lists the turnover per customer group during the given period
[**getRevenueHourly**](StatisticsApi.md#getRevenueHourly) | **GET** /accounts/{accountId}/statistics/revenueDataHourly | lists the turnover per hour during the given period
[**getTopSeller**](StatisticsApi.md#getTopSeller) | **GET** /accounts/{accountId}/statistics/topSeller | lists the top-seller


<a name="getRevenue"></a>
# **getRevenue**
> StatisticRevenueData getRevenue(accountId, opts)

lists information about the revenue in the given period



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StatisticsApi();

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getRevenue(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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
> StatisticMapStringRevenueData getRevenueForCustomerGroups(accountId, opts)

lists the turnover per customer group during the given period



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StatisticsApi();

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getRevenueForCustomerGroups(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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
> StatisticMapStringRevenueData getRevenueHourly(accountId, opts)

lists the turnover per hour during the given period



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StatisticsApi();

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getRevenueHourly(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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
> StatisticListTopSeller getTopSeller(accountId, opts)

lists the top-seller



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.StatisticsApi();

var accountId = "accountId_example"; // String | the account id

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
apiInstance.getTopSeller(accountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
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

