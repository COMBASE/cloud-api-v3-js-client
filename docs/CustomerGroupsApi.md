# KoronacloudApiV3.CustomerGroupsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomerGroup**](CustomerGroupsApi.md#getCustomerGroup) | **GET** /accounts/{koronaAccountId}/customerGroups/{customerGroupId} | returns the single customer group
[**getCustomerGroups**](CustomerGroupsApi.md#getCustomerGroups) | **GET** /accounts/{koronaAccountId}/customerGroups | lists all customer groups


<a name="getCustomerGroup"></a>
# **getCustomerGroup**
> CustomerGroup getCustomerGroup(customerGroupId, koronaAccountId)

returns the single customer group



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerGroupsApi();

var customerGroupId = "customerGroupId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerGroup(customerGroupId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerGroupId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**CustomerGroup**](CustomerGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerGroups"></a>
# **getCustomerGroups**
> ResultListCustomerGroup getCustomerGroups(koronaAccountId, opts)

lists all customer groups



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CustomerGroupsApi();

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
apiInstance.getCustomerGroups(koronaAccountId, opts, callback);
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

[**ResultListCustomerGroup**](ResultListCustomerGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

