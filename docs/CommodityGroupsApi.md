# KoronacloudApiV3.CommodityGroupsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCommodityGroups**](CommodityGroupsApi.md#addCommodityGroups) | **POST** /accounts/{koronaAccountId}/commodityGroups | adds a batch of new commodity groups
[**deleteCommodityGroup**](CommodityGroupsApi.md#deleteCommodityGroup) | **DELETE** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupIdOrNumber} | deletes the commodity group
[**getCommodityGroup**](CommodityGroupsApi.md#getCommodityGroup) | **GET** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupIdOrNumber} | lists the commodity group
[**getCommodityGroups**](CommodityGroupsApi.md#getCommodityGroups) | **GET** /accounts/{koronaAccountId}/commodityGroups | lists all commodity groups
[**updateCommodityGroup**](CommodityGroupsApi.md#updateCommodityGroup) | **PATCH** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupIdOrNumber} | updates the commodity group
[**updateCommodityGroups**](CommodityGroupsApi.md#updateCommodityGroups) | **PATCH** /accounts/{koronaAccountId}/commodityGroups | changes a batch of commodity groups


<a name="addCommodityGroups"></a>
# **addCommodityGroups**
> [AddOrUpdateResult] addCommodityGroups(koronaAccountId, body)

adds a batch of new commodity groups



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.CommodityGroup()]; // [CommodityGroup] | a array of new commodity groups


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCommodityGroups(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[CommodityGroup]**](CommodityGroup.md)| a array of new commodity groups | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCommodityGroup"></a>
# **deleteCommodityGroup**
> deleteCommodityGroup(koronaAccountId, commodityGroupIdOrNumber)

deletes the commodity group



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var commodityGroupIdOrNumber = "commodityGroupIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCommodityGroup(koronaAccountId, commodityGroupIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **commodityGroupIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommodityGroup"></a>
# **getCommodityGroup**
> CommodityGroup getCommodityGroup(koronaAccountId, commodityGroupIdOrNumber)

lists the commodity group



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var commodityGroupIdOrNumber = "commodityGroupIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCommodityGroup(koronaAccountId, commodityGroupIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **commodityGroupIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**CommodityGroup**](CommodityGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCommodityGroups"></a>
# **getCommodityGroups**
> ResultListCommodityGroup getCommodityGroups(koronaAccountId, opts)

lists all commodity groups



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

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
apiInstance.getCommodityGroups(koronaAccountId, opts, callback);
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

[**ResultListCommodityGroup**](ResultListCommodityGroup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCommodityGroup"></a>
# **updateCommodityGroup**
> updateCommodityGroup(koronaAccountId, commodityGroupIdOrNumber, body)

updates the commodity group



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var commodityGroupIdOrNumber = "commodityGroupIdOrNumber_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.CommodityGroup(); // CommodityGroup | the properties to update of the commodity group


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateCommodityGroup(koronaAccountId, commodityGroupIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **commodityGroupIdOrNumber** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**CommodityGroup**](CommodityGroup.md)| the properties to update of the commodity group | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCommodityGroups"></a>
# **updateCommodityGroups**
> [AddOrUpdateResult] updateCommodityGroups(koronaAccountId, body)

changes a batch of commodity groups

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.CommodityGroupsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.CommodityGroup()]; // [CommodityGroup] | a array of existing commodity groups


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCommodityGroups(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[CommodityGroup]**](CommodityGroup.md)| a array of existing commodity groups | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

