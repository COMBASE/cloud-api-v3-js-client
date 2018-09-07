# KoronacloudApiV3.OrganizationalUnitsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#addOrganizationalUnitDayRatings) | **POST** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | adds a batch of new day ratings
[**deleteOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#deleteOrganizationalUnitDayRating) | **DELETE** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | deletes the single day rating by its id or date
[**getOrganizationalUnit**](OrganizationalUnitsApi.md#getOrganizationalUnit) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId} | returns the single organizational unit
[**getOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#getOrganizationalUnitDayRating) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | returns the single day rating by its id or date
[**getOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#getOrganizationalUnitDayRatings) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | lists all organizational unit related day ratings
[**getOrganizationalUnitInventoryLists**](OrganizationalUnitsApi.md#getOrganizationalUnitInventoryLists) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/inventoryLists | lists the inventory lists belonging to the organizational unit (KORONA.retail required)
[**getOrganizationalUnitProductStocks**](OrganizationalUnitsApi.md#getOrganizationalUnitProductStocks) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/productStocks | lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)
[**getOrganizationalUnitStockReceipts**](OrganizationalUnitsApi.md#getOrganizationalUnitStockReceipts) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/stockReceipts | lists the stock receipts belonging to the organizational unit (KORONA.retail required)
[**getOrganizationalUnits**](OrganizationalUnitsApi.md#getOrganizationalUnits) | **GET** /accounts/{koronaAccountId}/organizationalUnits | lists all organizational units
[**updateOrganizationalUnitDayRating**](OrganizationalUnitsApi.md#updateOrganizationalUnitDayRating) | **PATCH** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | updates the day rating by its id or date
[**updateOrganizationalUnitDayRatings**](OrganizationalUnitsApi.md#updateOrganizationalUnitDayRatings) | **PATCH** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | updates a batch of day ratings


<a name="addOrganizationalUnitDayRatings"></a>
# **addOrganizationalUnitDayRatings**
> [AddOrUpdateResult] addOrganizationalUnitDayRatings(organizationalUnitId, body, koronaAccountId)

adds a batch of new day ratings



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.DayRating()]; // [DayRating] | a array of new day ratings

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOrganizationalUnitDayRatings(organizationalUnitId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[DayRating]**](DayRating.md)| a array of new day ratings | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOrganizationalUnitDayRating"></a>
# **deleteOrganizationalUnitDayRating**
> deleteOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, koronaAccountId)

deletes the single day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnit"></a>
# **getOrganizationalUnit**
> OrganizationalUnit getOrganizationalUnit(organizationalUnitId, koronaAccountId)

returns the single organizational unit



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnit(organizationalUnitId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**OrganizationalUnit**](OrganizationalUnit.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitDayRating"></a>
# **getOrganizationalUnitDayRating**
> DayRating getOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, koronaAccountId)

returns the single day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**DayRating**](DayRating.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrganizationalUnitDayRatings"></a>
# **getOrganizationalUnitDayRatings**
> ResultListDayRating getOrganizationalUnitDayRatings(organizationalUnitId, koronaAccountId, opts)

lists all organizational unit related day ratings



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getOrganizationalUnitDayRatings(organizationalUnitId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListInventoryList getOrganizationalUnitInventoryLists(organizationalUnitId, koronaAccountId, opts)

lists the inventory lists belonging to the organizational unit (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'minBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
  'maxBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
  'bookingStatus': "bookingStatus_example" // String | booking status (possible values: BOOKED, IN_PROGRESS)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOrganizationalUnitInventoryLists(organizationalUnitId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **minBookingTime** | **Date**| min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxBookingTime** | **Date**| max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
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
> ResultListProductStock getOrganizationalUnitProductStocks(organizationalUnitId, koronaAccountId, opts)

lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
apiInstance.getOrganizationalUnitProductStocks(organizationalUnitId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> ResultListStockReceipt getOrganizationalUnitStockReceipts(organizationalUnitId, koronaAccountId, opts)

lists the stock receipts belonging to the organizational unit (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'minCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'maxCreateTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) create time of the receipt (ISO 8601; date, time and timezone)
  'minBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
  'maxBookingTime': new Date("2013-10-20T19:20:30+01:00"), // Date | max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone)
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
apiInstance.getOrganizationalUnitStockReceipts(organizationalUnitId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
 **page** | **Number**| number of the page to fetch | [optional] 
 **size** | **Number**| amount of objects to return per page | [optional] 
 **sort** | **String**| attribute to sort by (multiple separated by comma; max. 5) | [optional] 
 **revision** | **Number**| last revision number, objects with a greater revision than this will be returned | [optional] 
 **includeDeleted** | **Boolean**| indicates deleted objects should be loaded or not (default: false) | [optional] 
 **minCreateTime** | **Date**| min (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxCreateTime** | **Date**| max (inclusive) create time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **minBookingTime** | **Date**| min (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
 **maxBookingTime** | **Date**| max (inclusive) booking time of the receipt (ISO 8601; date, time and timezone) | [optional] 
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
> ResultListOrganizationalUnit getOrganizationalUnits(koronaAccountId, opts)

lists all organizational units



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

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
apiInstance.getOrganizationalUnits(koronaAccountId, opts, callback);
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

[**ResultListOrganizationalUnit**](ResultListOrganizationalUnit.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationalUnitDayRating"></a>
# **updateOrganizationalUnitDayRating**
> updateOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, body, koronaAccountId)

updates the day rating by its id or date



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var dayRatingIdOrDate = "dayRatingIdOrDate_example"; // String | the id or date (YYYY-MM-DD) of the day rating

var body = new KoronacloudApiV3.DayRating(); // DayRating | the properties to update of the day rating

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateOrganizationalUnitDayRating(organizationalUnitId, dayRatingIdOrDate, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **dayRatingIdOrDate** | **String**| the id or date (YYYY-MM-DD) of the day rating | 
 **body** | [**DayRating**](DayRating.md)| the properties to update of the day rating | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateOrganizationalUnitDayRatings"></a>
# **updateOrganizationalUnitDayRatings**
> [AddOrUpdateResult] updateOrganizationalUnitDayRatings(organizationalUnitId, body, koronaAccountId)

updates a batch of day ratings



### Example
```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.OrganizationalUnitsApi();

var organizationalUnitId = "organizationalUnitId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = [new KoronacloudApiV3.DayRating()]; // [DayRating] | a array of new day ratings

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOrganizationalUnitDayRatings(organizationalUnitId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationalUnitId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**[DayRating]**](DayRating.md)| a array of new day ratings | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

