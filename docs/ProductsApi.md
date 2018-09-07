# CloudApiV3JsClient.ProductsApi

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProducts**](ProductsApi.md#addProducts) | **POST** /accounts/{koronaAccountId}/products | adds a batch of new products
[**deleteProduct**](ProductsApi.md#deleteProduct) | **DELETE** /accounts/{koronaAccountId}/products/{productId} | deletes the single product
[**getProduct**](ProductsApi.md#getProduct) | **GET** /accounts/{koronaAccountId}/products/{productId} | returns the single product
[**getProductStocks**](ProductsApi.md#getProductStocks) | **GET** /accounts/{koronaAccountId}/products/{productId}/stocks | lists the product stocks in different warehouses (KORONA.retail required)
[**getProducts**](ProductsApi.md#getProducts) | **GET** /accounts/{koronaAccountId}/products | lists all products
[**updateProduct**](ProductsApi.md#updateProduct) | **PATCH** /accounts/{koronaAccountId}/products/{productId} | updates the single product
[**updateProducts**](ProductsApi.md#updateProducts) | **PATCH** /accounts/{koronaAccountId}/products | updates a batch of products


<a name="addProducts"></a>
# **addProducts**
> [AddOrUpdateResult] addProducts(body, koronaAccountId)

adds a batch of new products



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var body = [new CloudApiV3JsClient.Product()]; // [Product] | array of new products

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProducts(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Product]**](Product.md)| array of new products | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(productId, koronaAccountId)

deletes the single product



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(productId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(productId, koronaAccountId)

returns the single product



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProduct(productId, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**Product**](Product.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductStocks"></a>
# **getProductStocks**
> ResultListProductStock getProductStocks(productId, koronaAccountId, opts)

lists the product stocks in different warehouses (KORONA.retail required)



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

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
apiInstance.getProductStocks(productId, koronaAccountId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
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

<a name="getProducts"></a>
# **getProducts**
> ResultListProduct getProducts(koronaAccountId, opts)

lists all products



### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account

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
 **koronaAccountId** | **String**| account id of the korona.cloud account | 
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
> updateProduct(productId, body, koronaAccountId)

updates the single product

if [number] is set, the number of the object will change and the resource location as well

### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var productId = "productId_example"; // String | id of the related object (important: id should match the uuid-format)

var body = new CloudApiV3JsClient.Product(); // Product | the properties to update of the product

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateProduct(productId, body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| id of the related object (important: id should match the uuid-format) | 
 **body** | [**Product**](Product.md)| the properties to update of the product | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProducts"></a>
# **updateProducts**
> [AddOrUpdateResult] updateProducts(body, koronaAccountId)

updates a batch of products

[number] must be set in the objects, otherwise the object cannot be updated

### Example
```javascript
var CloudApiV3JsClient = require('cloud-api-v3-js-client');
var defaultClient = CloudApiV3JsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new CloudApiV3JsClient.ProductsApi();

var body = [new CloudApiV3JsClient.Product()]; // [Product] | a array of existing products

var koronaAccountId = "koronaAccountId_example"; // String | account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProducts(body, koronaAccountId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[Product]**](Product.md)| a array of existing products | 
 **koronaAccountId** | **String**| account id of the korona.cloud account | 

### Return type

[**[AddOrUpdateResult]**](AddOrUpdateResult.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

