# KoronacloudApiV3.ProductsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProducts**](ProductsApi.md#addProducts) | **POST** /accounts/{koronaAccountId}/products | adds a batch of new products
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /accounts/{koronaAccountId}/products/{productId} | deletes the product
[**getProduct**](ProductsApi.md#getProduct) | **GET** /accounts/{koronaAccountId}/products/{productId} | lists the product
[**getProductStocks**](ProductsApi.md#getProductStocks) | **GET** /accounts/{koronaAccountId}/products/{productId}/stocks | lists the product stocks in different warehouses (KORONA.retail required)
[**getProducts**](ProductsApi.md#getProducts) | **GET** /accounts/{koronaAccountId}/products | lists all products
[**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /accounts/{koronaAccountId}/products/{productId} | changes the product
[**updateProducts**](ProductsApi.md#updateProducts) | **PATCH** /accounts/{koronaAccountId}/products | changes a batch of products


<a name="addProducts"></a>
# **addProducts**
> [AddOrUpdateResult] addProducts(koronaAccountId, body)

adds a batch of new products



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Product()]; // [Product] | a array of new products


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProducts(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[Product]**](Product.md)| a array of new products | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(koronaAccountId, productId)

deletes the product



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(koronaAccountId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(koronaAccountId, productId)

lists the product



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProduct(koronaAccountId, productId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 

### Return type

[**Product**](Product.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductStocks"></a>
# **getProductStocks**
> ResultListProductStock getProductStocks(koronaAccountId, productId, opts)

lists the product stocks in different warehouses (KORONA.retail required)



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

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
apiInstance.getProductStocks(koronaAccountId, productId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
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

<a name="getProducts"></a>
# **getProducts**
> ResultListProduct getProducts(koronaAccountId, opts)

lists all products



### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var opts = { 
  'page': 56, // Number | number of the page to fetch
  'size': 56, // Number | amount of objects to return per page
  'sort': "sort_example", // String | attribute to sort by (multiple separated by comma; max. 5)
  'revision': 789, // Number | last revision number, objects with a greater revision than this will be returned
  'includeDeleted': true, // Boolean | indicates deleted objects should be loaded or not (default: false)
  'productCodes': "productCodes_example", // String | at least one product code to filter by (multiple separated by comma; max. 10)
  'commodityGroup': "commodityGroup_example", // String | commodity group id  to filter by
  'assortment': "assortment_example", // String | assortment id to filter by
  'tag': "tag_example" // String | tag id to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProducts(koronaAccountId, opts, callback);
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
 **productCodes** | **String**| at least one product code to filter by (multiple separated by comma; max. 10) | [optional] 
 **commodityGroup** | **String**| commodity group id  to filter by | [optional] 
 **assortment** | **String**| assortment id to filter by | [optional] 
 **tag** | **String**| tag id to filter by | [optional] 

### Return type

[**ResultListProduct**](ResultListProduct.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> updateProduct(koronaAccountId, productId, body)

changes the product

if [number] is set, the number of the object will change and the resource location as well

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new KoronacloudApiV3.Product(); // Product | the properties to update of the product


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(koronaAccountId, productId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Product**](Product.md)| the properties to update of the product | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProducts"></a>
# **updateProducts**
> [AddOrUpdateResult] updateProducts(koronaAccountId, body)

changes a batch of products

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var KoronacloudApiV3 = require('koronacloud_api_v3');
var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new KoronacloudApiV3.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | the account id

var body = [new KoronacloudApiV3.Product()]; // [Product] | a array of existing products


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProducts(koronaAccountId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **koronaAccountId** | **String**| the account id | 
 **body** | [**[Product]**](Product.md)| a array of existing products | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

