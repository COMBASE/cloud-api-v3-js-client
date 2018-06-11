# KoronacloudApiV3.OrganizationalUnitsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#addOrganizationalUnitDayRatings) | **POST** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings | adds a batch of new day ratings
[**deleteOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#deleteOrganizationalUnitDayRating) | **DELETE** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings/{dayRatingIdOrDate} | deletes the day rating by its id or date
[**getOrganizationalUnit**](OrganizationalUnitsApi.md#getOrganizationalUnit) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber} | lists the organizational unit
[**getOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#getOrganizationalUnitDayRating) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings/{dayRatingIdOrDate} | lists the day rating by its id or date
[**getOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#getOrganizationalUnitDayRatings) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings | lists all organizational unit related day ratings
[**getOrganizationalUnitInventoryLists**](OrganizationalUnitsApi.md#getOrganizationalUnitInventoryLists) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/inventoryLists | lists the inventory lists belonging to the organizational unit (KORONA.retail required)
[**getOrganizationalUnitProductStocks**](OrganizationalUnitsApi.md#getOrganizationalUnitProductStocks) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/productStocks | lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)
[**getOrganizationalUnitStockReceipts**](OrganizationalUnitsApi.md#getOrganizationalUnitStockReceipts) | **GET** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/stockReceipts | lists the stock receipts belonging to the organizational unit (KORONA.retail required)
[**getOrganizationalUnits**](OrganizationalUnitsApi.md#getOrganizationalUnits) | **GET** /accounts/{accountId}/organizationalUnits | lists all organizational units
[**updateOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#updateOrganizationalUnitDayRating) | **PATCH** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings/{dayRatingIdOrDate} | updates the day rating by its id or date
[**updateOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#updateOrganizationalUnitDayRatings) | **PATCH** /accounts/{accountId}/organizationalUnits/{organizationalUnitIdOrNumber}/dayRatings | updated a batch of new day ratings


<a name="addOrganizationalUnitDayRatings"></a>
# **addOrganizationalUnitDayRatings**
> [AddOrUpdateResult] addOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, body)

adds a batch of new day ratings



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = [new KoronacloudApiV3.DayRating()]; // [DayRating] | a array of new day ratings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **body** | [**[DayRating]**](DayRating.md)| a array of new day ratings | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationalUnitDayRating"></a>
# **deleteOrganizationalUnitDayRating**
> deleteOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate)

deletes the day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnit"></a>
# **getOrganizationalUnit**
> OrganizationalUnit getOrganizationalUnit(accountId, organizationalUnitIdOrNumber)

lists the organizational unit



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnit(accountId, organizationalUnitIdOrNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 

### Return type

[**OrganizationalUnit**](OrganizationalUnit.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitDayRating"></a>
# **getOrganizationalUnitDayRating**
> DayRating getOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate)

lists the day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 

### Return type

[**DayRating**](DayRating.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitDayRatings"></a>
# **getOrganizationalUnitDayRatings**
> ResultListDayRating getOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, opts)

lists all organizational unit related day ratings



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example" // String | attribute to sort by (multiple separated by comma; max. 5)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 

### Return type

[**ResultListDayRating**](ResultListDayRating.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitInventoryLists"></a>
# **getOrganizationalUnitInventoryLists**
> ResultListInventoryList getOrganizationalUnitInventoryLists(accountId, organizationalUnitIdOrNumber, opts)

lists the inventory lists belonging to the organizational unit (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitInventoryLists(accountId, organizationalUnitIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
 **bookingStatus** | **String**| booking status (possible values: BOOKED, IN_PROGRESS) | [optional] 

### Return type

[**ResultListInventoryList**](ResultListInventoryList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitProductStocks"></a>
# **getOrganizationalUnitProductStocks**
> ResultListProductStock getOrganizationalUnitProductStocks(accountId, organizationalUnitIdOrNumber, opts)

lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789 // Number | last revision number, objects with a greater revision than this will be returned
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitProductStocks(accountId, organizationalUnitIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 

### Return type

[**ResultListProductStock**](ResultListProductStock.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitStockReceipts"></a>
# **getOrganizationalUnitStockReceipts**
> ResultListStockReceipt getOrganizationalUnitStockReceipts(accountId, organizationalUnitIdOrNumber, opts)

lists the stock receipts belonging to the organizational unit (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'sourceOrganizationalUnit': "sourceOrganizationalUnit_example", // String | source organizational unit
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitStockReceipts(accountId, organizationalUnitIdOrNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **sourceOrganizationalUnit** | **String**| source organizational unit | [optional] 
 **bookingStatus** | **String**| booking status (possible values: BOOKED, IN_PROGRESS) | [optional] 

### Return type

[**ResultListStockReceipt**](ResultListStockReceipt.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnits"></a>
# **getOrganizationalUnits**
> ResultListOrganizationalUnit getOrganizationalUnits(accountId, opts)

lists all organizational units



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

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
apiInstance.getOrganizationalUnits(accountId, opts, callback);
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

[**ResultListOrganizationalUnit**](ResultListOrganizationalUnit.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationalUnitDayRating"></a>
# **updateOrganizationalUnitDayRating**
> updateOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate, body)

updates the day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating

var body = new KoronacloudApiV3.DayRating(); // DayRating | the properties to update of the day rating


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrganizationalUnitDayRating(accountId, organizationalUnitIdOrNumber, dayRatingIdOrDate, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 
 **body** | [**DayRating**](DayRating.md)| the properties to update of the day rating | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationalUnitDayRatings"></a>
# **updateOrganizationalUnitDayRatings**
> [AddOrUpdateResult] updateOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, body)

updated a batch of new day ratings



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var accountId = "accountId_example"; // String | the account id

var organizationalUnitIdOrNumber = "organizationalUnitIdOrNumber_example"; // String | id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number)

var body = [new KoronacloudApiV3.DayRating()]; // [DayRating] | a array of new day ratings


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationalUnitDayRatings(accountId, organizationalUnitIdOrNumber, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | **String**| the account id | 
 **organizationalUnitIdOrNumber** | **String**| id or number of the related object (important: if a number should match the uuid-format, the system will lookup for an id instead of a number) | 
 **body** | [**[DayRating]**](DayRating.md)| a array of new day ratings | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

