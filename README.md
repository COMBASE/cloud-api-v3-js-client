# cloud-api-v3-js-client

KoronacloudApiV3 - JavaScript client for cloud-api-v3-js-client
Our api provides access to our cloud services
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0
- Package version: 3.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloud-api-v3-js-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloud-api-v3-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloud-api-v3-js-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KoronacloudApiV3 = require('cloud-api-v3-js-client');

var defaultClient = KoronacloudApiV3.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var api = new KoronacloudApiV3.AccountsApi()

var accountIdOrNumber = "accountIdOrNumber_example"; // {String} id of the related object (important: id should match the uuid-format)

var koronaAccountId = "koronaAccountId_example"; // {String} account id of the korona.cloud account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAccount(accountIdOrNumber, koronaAccountId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://www.koronacloud.com/web/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KoronacloudApiV3.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /accounts/{koronaAccountId}/accounts/{accountIdOrNumber} | returns the single account
*KoronacloudApiV3.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /accounts/{koronaAccountId}/accounts | lists all accounts
*KoronacloudApiV3.AdditionalReceiptInfoTypesApi* | [**getAdditionalReceiptInfoType**](docs/AdditionalReceiptInfoTypesApi.md#getAdditionalReceiptInfoType) | **GET** /accounts/{koronaAccountId}/additionalReceiptInfoTypes/{additionalReceiptInfoTypeId} | returns the single additional receipt info type
*KoronacloudApiV3.AdditionalReceiptInfoTypesApi* | [**getAdditionalReceiptInfoTypes**](docs/AdditionalReceiptInfoTypesApi.md#getAdditionalReceiptInfoTypes) | **GET** /accounts/{koronaAccountId}/additionalReceiptInfoTypes | lists all additional receipt info types
*KoronacloudApiV3.AssortmentsApi* | [**getAssortment**](docs/AssortmentsApi.md#getAssortment) | **GET** /accounts/{koronaAccountId}/assortments/{assortmentId} | returns the single assortment
*KoronacloudApiV3.AssortmentsApi* | [**getAssortments**](docs/AssortmentsApi.md#getAssortments) | **GET** /accounts/{koronaAccountId}/assortments | lists all assortments
*KoronacloudApiV3.CashiersApi* | [**getCashier**](docs/CashiersApi.md#getCashier) | **GET** /accounts/{koronaAccountId}/cashiers/{cashierIdOrNumber} | returns the single cashier
*KoronacloudApiV3.CashiersApi* | [**getCashiers**](docs/CashiersApi.md#getCashiers) | **GET** /accounts/{koronaAccountId}/cashiers | lists all cashiers
*KoronacloudApiV3.CommodityGroupsApi* | [**addCommodityGroups**](docs/CommodityGroupsApi.md#addCommodityGroups) | **POST** /accounts/{koronaAccountId}/commodityGroups | adds a batch of new commodity groups
*KoronacloudApiV3.CommodityGroupsApi* | [**deleteCommodityGroup**](docs/CommodityGroupsApi.md#deleteCommodityGroup) | **DELETE** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupId} | deletes the single commodity group
*KoronacloudApiV3.CommodityGroupsApi* | [**getCommodityGroup**](docs/CommodityGroupsApi.md#getCommodityGroup) | **GET** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupId} | returns the single commodity group
*KoronacloudApiV3.CommodityGroupsApi* | [**getCommodityGroups**](docs/CommodityGroupsApi.md#getCommodityGroups) | **GET** /accounts/{koronaAccountId}/commodityGroups | lists all commodity groups
*KoronacloudApiV3.CommodityGroupsApi* | [**updateCommodityGroup**](docs/CommodityGroupsApi.md#updateCommodityGroup) | **PATCH** /accounts/{koronaAccountId}/commodityGroups/{commodityGroupId} | updates the single commodity group
*KoronacloudApiV3.CommodityGroupsApi* | [**updateCommodityGroups**](docs/CommodityGroupsApi.md#updateCommodityGroups) | **PATCH** /accounts/{koronaAccountId}/commodityGroups | updates a batch of commodity groups
*KoronacloudApiV3.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /accounts/{koronaAccountId}/currencies | lists all currencies
*KoronacloudApiV3.CurrenciesApi* | [**getCurrency**](docs/CurrenciesApi.md#getCurrency) | **GET** /accounts/{koronaAccountId}/currencies/{currencyId} | returns the single currency
*KoronacloudApiV3.CustomerGroupsApi* | [**getCustomerGroup**](docs/CustomerGroupsApi.md#getCustomerGroup) | **GET** /accounts/{koronaAccountId}/customerGroups/{customerGroupId} | returns the single customer group
*KoronacloudApiV3.CustomerGroupsApi* | [**getCustomerGroups**](docs/CustomerGroupsApi.md#getCustomerGroups) | **GET** /accounts/{koronaAccountId}/customerGroups | lists all customer groups
*KoronacloudApiV3.CustomerOrdersApi* | [**addCustomerOrders**](docs/CustomerOrdersApi.md#addCustomerOrders) | **POST** /accounts/{koronaAccountId}/customerOrders | adds a batch of new customer orders
*KoronacloudApiV3.CustomerOrdersApi* | [**deleteCustomerOrder**](docs/CustomerOrdersApi.md#deleteCustomerOrder) | **DELETE** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | deletes the single customer order
*KoronacloudApiV3.CustomerOrdersApi* | [**getCustomerOrder**](docs/CustomerOrdersApi.md#getCustomerOrder) | **GET** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | returns the single customer order
*KoronacloudApiV3.CustomerOrdersApi* | [**getCustomerOrders**](docs/CustomerOrdersApi.md#getCustomerOrders) | **GET** /accounts/{koronaAccountId}/customerOrders | lists all customer orders
*KoronacloudApiV3.CustomerOrdersApi* | [**updateCustomerOrder**](docs/CustomerOrdersApi.md#updateCustomerOrder) | **PATCH** /accounts/{koronaAccountId}/customerOrders/{customerOrderId} | updates the single customer order
*KoronacloudApiV3.CustomerOrdersApi* | [**updateCustomerOrders**](docs/CustomerOrdersApi.md#updateCustomerOrders) | **PATCH** /accounts/{koronaAccountId}/customerOrders | updates a batch of customer orders
*KoronacloudApiV3.CustomersApi* | [**addCustomers**](docs/CustomersApi.md#addCustomers) | **POST** /accounts/{koronaAccountId}/customers | adds a batch of new customers
*KoronacloudApiV3.CustomersApi* | [**deleteCustomer**](docs/CustomersApi.md#deleteCustomer) | **DELETE** /accounts/{koronaAccountId}/customers/{customerId} | deletes the single customer
*KoronacloudApiV3.CustomersApi* | [**getCustomer**](docs/CustomersApi.md#getCustomer) | **GET** /accounts/{koronaAccountId}/customers/{customerId} | returns the single customer
*KoronacloudApiV3.CustomersApi* | [**getCustomers**](docs/CustomersApi.md#getCustomers) | **GET** /accounts/{koronaAccountId}/customers | lists all customers
*KoronacloudApiV3.CustomersApi* | [**updateCustomer**](docs/CustomersApi.md#updateCustomer) | **PATCH** /accounts/{koronaAccountId}/customers/{customerId} | updates the single customer
*KoronacloudApiV3.CustomersApi* | [**updateCustomers**](docs/CustomersApi.md#updateCustomers) | **PATCH** /accounts/{koronaAccountId}/customers | updates a batch of customers
*KoronacloudApiV3.EconomicZonesApi* | [**getEconomicZone**](docs/EconomicZonesApi.md#getEconomicZone) | **GET** /accounts/{koronaAccountId}/economicZones/{economicZoneId} | returns the single economic zone
*KoronacloudApiV3.EconomicZonesApi* | [**getEconomicZones**](docs/EconomicZonesApi.md#getEconomicZones) | **GET** /accounts/{koronaAccountId}/economicZones | lists all economic zones
*KoronacloudApiV3.ImagesApi* | [**getImage**](docs/ImagesApi.md#getImage) | **GET** /accounts/{koronaAccountId}/images/{imageId} | displays the image
*KoronacloudApiV3.InfoTextsApi* | [**getInfoText**](docs/InfoTextsApi.md#getInfoText) | **GET** /accounts/{koronaAccountId}/infoTexts/{infoTextId} | returns the single info text
*KoronacloudApiV3.InfoTextsApi* | [**getInfoTexts**](docs/InfoTextsApi.md#getInfoTexts) | **GET** /accounts/{koronaAccountId}/infoTexts | lists all info texts
*KoronacloudApiV3.InventoriesApi* | [**addInventories**](docs/InventoriesApi.md#addInventories) | **POST** /accounts/{koronaAccountId}/inventories | adds a batch of new inventories
*KoronacloudApiV3.InventoriesApi* | [**addInventoryInventoryListItems**](docs/InventoriesApi.md#addInventoryInventoryListItems) | **POST** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | adds inventory list items
*KoronacloudApiV3.InventoriesApi* | [**deleteInventory**](docs/InventoriesApi.md#deleteInventory) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId} | deletes the single inventory (only allowed if hasBookedReceipts&#x3D;false)
*KoronacloudApiV3.InventoriesApi* | [**deleteInventoryInventoryListItem**](docs/InventoriesApi.md#deleteInventoryInventoryListItem) | **DELETE** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | deletes the single inventory list item
*KoronacloudApiV3.InventoriesApi* | [**getInventories**](docs/InventoriesApi.md#getInventories) | **GET** /accounts/{koronaAccountId}/inventories | lists all inventories
*KoronacloudApiV3.InventoriesApi* | [**getInventory**](docs/InventoriesApi.md#getInventory) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId} | returns the single inventory
*KoronacloudApiV3.InventoriesApi* | [**getInventoryInventoryList**](docs/InventoriesApi.md#getInventoryInventoryList) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | returns the single inventory list
*KoronacloudApiV3.InventoriesApi* | [**getInventoryInventoryListItem**](docs/InventoriesApi.md#getInventoryInventoryListItem) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | returns the single inventory list item
*KoronacloudApiV3.InventoriesApi* | [**getInventoryInventoryListItems**](docs/InventoriesApi.md#getInventoryInventoryListItems) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | lists all inventory list items
*KoronacloudApiV3.InventoriesApi* | [**getInventoryInventoryLists**](docs/InventoriesApi.md#getInventoryInventoryLists) | **GET** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists | lists all inventory lists
*KoronacloudApiV3.InventoriesApi* | [**updateInventory**](docs/InventoriesApi.md#updateInventory) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId} | updates the single inventory
*KoronacloudApiV3.InventoriesApi* | [**updateInventoryInventoryList**](docs/InventoriesApi.md#updateInventoryInventoryList) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId} | updates the single inventory list
*KoronacloudApiV3.InventoriesApi* | [**updateInventoryInventoryListItem**](docs/InventoriesApi.md#updateInventoryInventoryListItem) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items/{productId} | updates the single inventory list item
*KoronacloudApiV3.InventoriesApi* | [**updateInventoryInventoryListItems**](docs/InventoriesApi.md#updateInventoryInventoryListItems) | **PATCH** /accounts/{koronaAccountId}/inventories/{inventoryId}/inventoryLists/{inventoryListId}/items | updates inventory list items (property [product] required))
*KoronacloudApiV3.KoronaAccountApi* | [**getKoronaAccount**](docs/KoronaAccountApi.md#getKoronaAccount) | **GET** /accounts/{koronaAccountId} | returns the single korona account
*KoronacloudApiV3.OrganizationalUnitsApi* | [**addOrganizationalUnitDayRatings**](docs/OrganizationalUnitsApi.md#addOrganizationalUnitDayRatings) | **POST** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | adds a batch of new day ratings
*KoronacloudApiV3.OrganizationalUnitsApi* | [**deleteOrganizationalUnitDayRating**](docs/OrganizationalUnitsApi.md#deleteOrganizationalUnitDayRating) | **DELETE** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | deletes the single day rating by its id or date
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnit**](docs/OrganizationalUnitsApi.md#getOrganizationalUnit) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId} | returns the single organizational unit
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnitDayRating**](docs/OrganizationalUnitsApi.md#getOrganizationalUnitDayRating) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | returns the single day rating by its id or date
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnitDayRatings**](docs/OrganizationalUnitsApi.md#getOrganizationalUnitDayRatings) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | lists all organizational unit related day ratings
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnitInventoryLists**](docs/OrganizationalUnitsApi.md#getOrganizationalUnitInventoryLists) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/inventoryLists | lists the inventory lists belonging to the organizational unit (KORONA.retail required)
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnitProductStocks**](docs/OrganizationalUnitsApi.md#getOrganizationalUnitProductStocks) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/productStocks | lists the product stocks of the organizational unit, in case it contains a warehouse (KORONA.retail required)
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnitStockReceipts**](docs/OrganizationalUnitsApi.md#getOrganizationalUnitStockReceipts) | **GET** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/stockReceipts | lists the stock receipts belonging to the organizational unit (KORONA.retail required)
*KoronacloudApiV3.OrganizationalUnitsApi* | [**getOrganizationalUnits**](docs/OrganizationalUnitsApi.md#getOrganizationalUnits) | **GET** /accounts/{koronaAccountId}/organizationalUnits | lists all organizational units
*KoronacloudApiV3.OrganizationalUnitsApi* | [**updateOrganizationalUnitDayRating**](docs/OrganizationalUnitsApi.md#updateOrganizationalUnitDayRating) | **PATCH** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings/{dayRatingIdOrDate} | updates the day rating by its id or date
*KoronacloudApiV3.OrganizationalUnitsApi* | [**updateOrganizationalUnitDayRatings**](docs/OrganizationalUnitsApi.md#updateOrganizationalUnitDayRatings) | **PATCH** /accounts/{koronaAccountId}/organizationalUnits/{organizationalUnitId}/dayRatings | updates a batch of day ratings
*KoronacloudApiV3.PaymentMethodsApi* | [**getPaymentMethod**](docs/PaymentMethodsApi.md#getPaymentMethod) | **GET** /accounts/{koronaAccountId}/paymentMethods/{paymentMethodId} | returns the single payment method
*KoronacloudApiV3.PaymentMethodsApi* | [**getPaymentMethods**](docs/PaymentMethodsApi.md#getPaymentMethods) | **GET** /accounts/{koronaAccountId}/paymentMethods | lists all payment methods
*KoronacloudApiV3.PointsOfSaleApi* | [**addPointOfSaleEndOfDayStatements**](docs/PointsOfSaleApi.md#addPointOfSaleEndOfDayStatements) | **POST** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/endOfDayStatements | adds a batch of point of sale-related end-of-day-statements
*KoronacloudApiV3.PointsOfSaleApi* | [**addPointOfSaleReceipts**](docs/PointsOfSaleApi.md#addPointOfSaleReceipts) | **POST** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts | adds a batch of point of sale-related receipts
*KoronacloudApiV3.PointsOfSaleApi* | [**getPointOfSale**](docs/PointsOfSaleApi.md#getPointOfSale) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId} | returns the single point of sale
*KoronacloudApiV3.PointsOfSaleApi* | [**getPointOfSaleEndOfDayStatements**](docs/PointsOfSaleApi.md#getPointOfSaleEndOfDayStatements) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/endOfDayStatements | lists all point of sale-related end-of-day-statements
*KoronacloudApiV3.PointsOfSaleApi* | [**getPointOfSaleReceipt**](docs/PointsOfSaleApi.md#getPointOfSaleReceipt) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts/{receiptId} | returns the single point of sale-related receipt
*KoronacloudApiV3.PointsOfSaleApi* | [**getPointOfSaleReceipts**](docs/PointsOfSaleApi.md#getPointOfSaleReceipts) | **GET** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId}/receipts | lists all point of sale-related receipts
*KoronacloudApiV3.PointsOfSaleApi* | [**getPointsOfSale**](docs/PointsOfSaleApi.md#getPointsOfSale) | **GET** /accounts/{koronaAccountId}/pointsOfSale | lists all points of sale
*KoronacloudApiV3.PointsOfSaleApi* | [**updatePointOfSale**](docs/PointsOfSaleApi.md#updatePointOfSale) | **PATCH** /accounts/{koronaAccountId}/pointsOfSale/{pointOfSaleId} | updates a point of sale (works only for coupling (attribute &#39;couplingId&#39;) or updating device information (attribute &#39;deviceInformation&#39;))
*KoronacloudApiV3.PriceGroupsApi* | [**getPriceGroup**](docs/PriceGroupsApi.md#getPriceGroup) | **GET** /accounts/{koronaAccountId}/priceGroups/{priceGroupId} | returns the single price group
*KoronacloudApiV3.PriceGroupsApi* | [**getPriceGroups**](docs/PriceGroupsApi.md#getPriceGroups) | **GET** /accounts/{koronaAccountId}/priceGroups | lists all price groups
*KoronacloudApiV3.ProductsApi* | [**addProducts**](docs/ProductsApi.md#addProducts) | **POST** /accounts/{koronaAccountId}/products | adds a batch of new products
*KoronacloudApiV3.ProductsApi* | [**deleteProduct**](docs/ProductsApi.md#deleteProduct) | **DELETE** /accounts/{koronaAccountId}/products/{productId} | deletes the single product
*KoronacloudApiV3.ProductsApi* | [**getProduct**](docs/ProductsApi.md#getProduct) | **GET** /accounts/{koronaAccountId}/products/{productId} | returns the single product
*KoronacloudApiV3.ProductsApi* | [**getProductStocks**](docs/ProductsApi.md#getProductStocks) | **GET** /accounts/{koronaAccountId}/products/{productId}/stocks | lists the product stocks in different warehouses (KORONA.retail required)
*KoronacloudApiV3.ProductsApi* | [**getProducts**](docs/ProductsApi.md#getProducts) | **GET** /accounts/{koronaAccountId}/products | lists all products
*KoronacloudApiV3.ProductsApi* | [**updateProduct**](docs/ProductsApi.md#updateProduct) | **PATCH** /accounts/{koronaAccountId}/products/{productId} | updates the single product
*KoronacloudApiV3.ProductsApi* | [**updateProducts**](docs/ProductsApi.md#updateProducts) | **PATCH** /accounts/{koronaAccountId}/products | updates a batch of products
*KoronacloudApiV3.ReceiptsApi* | [**getReceipt**](docs/ReceiptsApi.md#getReceipt) | **GET** /accounts/{koronaAccountId}/receipts/{receiptId} | returns the single receipt
*KoronacloudApiV3.ReceiptsApi* | [**getReceipts**](docs/ReceiptsApi.md#getReceipts) | **GET** /accounts/{koronaAccountId}/receipts | lists all receipts
*KoronacloudApiV3.SalesTaxesApi* | [**getSalesTax**](docs/SalesTaxesApi.md#getSalesTax) | **GET** /accounts/{koronaAccountId}/salesTaxes/{salesTaxId} | returns the single sales tax
*KoronacloudApiV3.SalesTaxesApi* | [**getSalesTaxes**](docs/SalesTaxesApi.md#getSalesTaxes) | **GET** /accounts/{koronaAccountId}/salesTaxes | lists all sales taxes
*KoronacloudApiV3.SectorsApi* | [**getSector**](docs/SectorsApi.md#getSector) | **GET** /accounts/{koronaAccountId}/sectors/{sectorId} | returns the single sector
*KoronacloudApiV3.SectorsApi* | [**getSectors**](docs/SectorsApi.md#getSectors) | **GET** /accounts/{koronaAccountId}/sectors | lists all sectors
*KoronacloudApiV3.StatisticsApi* | [**getRevenue**](docs/StatisticsApi.md#getRevenue) | **GET** /accounts/{koronaAccountId}/statistics/revenueData | returns information about the revenue in the given period
*KoronacloudApiV3.StatisticsApi* | [**getRevenueForCustomerGroups**](docs/StatisticsApi.md#getRevenueForCustomerGroups) | **GET** /accounts/{koronaAccountId}/statistics/revenueDataForCustomerGroups | returns the turnover per customer group during the given period
*KoronacloudApiV3.StatisticsApi* | [**getRevenueHourly**](docs/StatisticsApi.md#getRevenueHourly) | **GET** /accounts/{koronaAccountId}/statistics/revenueDataHourly | returns the turnover per hour during the given period
*KoronacloudApiV3.StatisticsApi* | [**getTopSeller**](docs/StatisticsApi.md#getTopSeller) | **GET** /accounts/{koronaAccountId}/statistics/topSeller | returns the top-seller
*KoronacloudApiV3.StockReceiptsApi* | [**addStockReceiptItems**](docs/StockReceiptsApi.md#addStockReceiptItems) | **POST** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | adds stock-receipt items
*KoronacloudApiV3.StockReceiptsApi* | [**addStockReceipts**](docs/StockReceiptsApi.md#addStockReceipts) | **POST** /accounts/{koronaAccountId}/stockReceipts | adds stock-receipts
*KoronacloudApiV3.StockReceiptsApi* | [**deleteStockReceiptItem**](docs/StockReceiptsApi.md#deleteStockReceiptItem) | **DELETE** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | deletes the single stock-receipt item
*KoronacloudApiV3.StockReceiptsApi* | [**getStockReceipt**](docs/StockReceiptsApi.md#getStockReceipt) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber} | returns the single stock-receipt
*KoronacloudApiV3.StockReceiptsApi* | [**getStockReceiptItem**](docs/StockReceiptsApi.md#getStockReceiptItem) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | returns the single stock-receipt item
*KoronacloudApiV3.StockReceiptsApi* | [**getStockReceiptItems**](docs/StockReceiptsApi.md#getStockReceiptItems) | **GET** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | lists all stock-receipt items
*KoronacloudApiV3.StockReceiptsApi* | [**getStockReceipts**](docs/StockReceiptsApi.md#getStockReceipts) | **GET** /accounts/{koronaAccountId}/stockReceipts | lists all stock-receipts
*KoronacloudApiV3.StockReceiptsApi* | [**updateStockReceipt**](docs/StockReceiptsApi.md#updateStockReceipt) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber} | updates the single stock-receipt
*KoronacloudApiV3.StockReceiptsApi* | [**updateStockReceiptItem**](docs/StockReceiptsApi.md#updateStockReceiptItem) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items/{productIdOrNumber} | updates the single stock-receipt item
*KoronacloudApiV3.StockReceiptsApi* | [**updateStockReceiptItems**](docs/StockReceiptsApi.md#updateStockReceiptItems) | **PATCH** /accounts/{koronaAccountId}/stockReceipts/{stockReceiptIdOrNumber}/items | updates stock-receipt items
*KoronacloudApiV3.SuppliersApi* | [**getSupplier**](docs/SuppliersApi.md#getSupplier) | **GET** /accounts/{koronaAccountId}/suppliers/{supplierIdOrNumber} | returns the single supplier
*KoronacloudApiV3.SuppliersApi* | [**getSuppliers**](docs/SuppliersApi.md#getSuppliers) | **GET** /accounts/{koronaAccountId}/suppliers | lists all suppliers
*KoronacloudApiV3.TagsApi* | [**addTags**](docs/TagsApi.md#addTags) | **POST** /accounts/{koronaAccountId}/tags | adds a batch of new tags
*KoronacloudApiV3.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /accounts/{koronaAccountId}/tags/{tagId} | deletes the single tag
*KoronacloudApiV3.TagsApi* | [**getTag**](docs/TagsApi.md#getTag) | **GET** /accounts/{koronaAccountId}/tags/{tagId} | returns the single tag
*KoronacloudApiV3.TagsApi* | [**getTags**](docs/TagsApi.md#getTags) | **GET** /accounts/{koronaAccountId}/tags | lists all tags
*KoronacloudApiV3.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PATCH** /accounts/{koronaAccountId}/tags/{tagId} | updates the single tag
*KoronacloudApiV3.TagsApi* | [**updateTags**](docs/TagsApi.md#updateTags) | **PATCH** /accounts/{koronaAccountId}/tags | updates a batch of tags
*KoronacloudApiV3.TicketingApi* | [**getEntryGate**](docs/TicketingApi.md#getEntryGate) | **GET** /accounts/{koronaAccountId}/entryGates/{entryGateId} | returns the single entry gate
*KoronacloudApiV3.TicketingApi* | [**getEntryGates**](docs/TicketingApi.md#getEntryGates) | **GET** /accounts/{koronaAccountId}/entryGates | lists all entry gates
*KoronacloudApiV3.TicketingApi* | [**getEvent**](docs/TicketingApi.md#getEvent) | **GET** /accounts/{koronaAccountId}/events/{eventId} | return the single event
*KoronacloudApiV3.TicketingApi* | [**getEvents**](docs/TicketingApi.md#getEvents) | **GET** /accounts/{koronaAccountId}/events | lists all events
*KoronacloudApiV3.TicketingApi* | [**getTicketDefinition**](docs/TicketingApi.md#getTicketDefinition) | **GET** /accounts/{koronaAccountId}/ticketDefinitions/{ticketDefinitionId} | returns the single ticket definition
*KoronacloudApiV3.TicketingApi* | [**getTicketDefinitions**](docs/TicketingApi.md#getTicketDefinitions) | **GET** /accounts/{koronaAccountId}/ticketDefinitions | lists all ticket definitions


## Documentation for Models

 - [KoronacloudApiV3.Account](docs/Account.md)
 - [KoronacloudApiV3.AccountSummary](docs/AccountSummary.md)
 - [KoronacloudApiV3.AccountTransaction](docs/AccountTransaction.md)
 - [KoronacloudApiV3.AddOrUpdateResult](docs/AddOrUpdateResult.md)
 - [KoronacloudApiV3.AdditionalInfo](docs/AdditionalInfo.md)
 - [KoronacloudApiV3.AdditionalReceiptInfoType](docs/AdditionalReceiptInfoType.md)
 - [KoronacloudApiV3.AddressInformation](docs/AddressInformation.md)
 - [KoronacloudApiV3.Admission](docs/Admission.md)
 - [KoronacloudApiV3.Amount](docs/Amount.md)
 - [KoronacloudApiV3.AmountCountData](docs/AmountCountData.md)
 - [KoronacloudApiV3.Assortment](docs/Assortment.md)
 - [KoronacloudApiV3.BadRequestError](docs/BadRequestError.md)
 - [KoronacloudApiV3.Capacity](docs/Capacity.md)
 - [KoronacloudApiV3.Cashier](docs/Cashier.md)
 - [KoronacloudApiV3.CashierSummary](docs/CashierSummary.md)
 - [KoronacloudApiV3.Category](docs/Category.md)
 - [KoronacloudApiV3.CloudSubscription](docs/CloudSubscription.md)
 - [KoronacloudApiV3.CommodityGroup](docs/CommodityGroup.md)
 - [KoronacloudApiV3.CommodityGroupSummary](docs/CommodityGroupSummary.md)
 - [KoronacloudApiV3.CompanyIdentification](docs/CompanyIdentification.md)
 - [KoronacloudApiV3.Currency](docs/Currency.md)
 - [KoronacloudApiV3.CurrencyDenomination](docs/CurrencyDenomination.md)
 - [KoronacloudApiV3.CurrencyExchangeRate](docs/CurrencyExchangeRate.md)
 - [KoronacloudApiV3.Customer](docs/Customer.md)
 - [KoronacloudApiV3.CustomerCard](docs/CustomerCard.md)
 - [KoronacloudApiV3.CustomerData](docs/CustomerData.md)
 - [KoronacloudApiV3.CustomerGroup](docs/CustomerGroup.md)
 - [KoronacloudApiV3.CustomerGroupSummary](docs/CustomerGroupSummary.md)
 - [KoronacloudApiV3.CustomerInformation](docs/CustomerInformation.md)
 - [KoronacloudApiV3.CustomerOrder](docs/CustomerOrder.md)
 - [KoronacloudApiV3.DayRating](docs/DayRating.md)
 - [KoronacloudApiV3.DayTimePeriod](docs/DayTimePeriod.md)
 - [KoronacloudApiV3.DeviceInformation](docs/DeviceInformation.md)
 - [KoronacloudApiV3.EconomicZone](docs/EconomicZone.md)
 - [KoronacloudApiV3.EndOfDayStatement](docs/EndOfDayStatement.md)
 - [KoronacloudApiV3.EndOfDayStatementSummary](docs/EndOfDayStatementSummary.md)
 - [KoronacloudApiV3.EntryGate](docs/EntryGate.md)
 - [KoronacloudApiV3.Event](docs/Event.md)
 - [KoronacloudApiV3.ForbiddenError](docs/ForbiddenError.md)
 - [KoronacloudApiV3.GeoLocation](docs/GeoLocation.md)
 - [KoronacloudApiV3.InfoText](docs/InfoText.md)
 - [KoronacloudApiV3.Interval](docs/Interval.md)
 - [KoronacloudApiV3.Inventory](docs/Inventory.md)
 - [KoronacloudApiV3.InventoryList](docs/InventoryList.md)
 - [KoronacloudApiV3.InventoryListItem](docs/InventoryListItem.md)
 - [KoronacloudApiV3.InventoryListItemStock](docs/InventoryListItemStock.md)
 - [KoronacloudApiV3.KoronaAccount](docs/KoronaAccount.md)
 - [KoronacloudApiV3.MethodNotAllowedError](docs/MethodNotAllowedError.md)
 - [KoronacloudApiV3.ModelReference](docs/ModelReference.md)
 - [KoronacloudApiV3.NotFoundError](docs/NotFoundError.md)
 - [KoronacloudApiV3.OrganizationalUnit](docs/OrganizationalUnit.md)
 - [KoronacloudApiV3.Payment](docs/Payment.md)
 - [KoronacloudApiV3.PaymentMethod](docs/PaymentMethod.md)
 - [KoronacloudApiV3.PaymentSummary](docs/PaymentSummary.md)
 - [KoronacloudApiV3.Period](docs/Period.md)
 - [KoronacloudApiV3.PeriodListTopSeller](docs/PeriodListTopSeller.md)
 - [KoronacloudApiV3.PeriodMapStringRevenueData](docs/PeriodMapStringRevenueData.md)
 - [KoronacloudApiV3.PeriodObject](docs/PeriodObject.md)
 - [KoronacloudApiV3.PeriodRevenueData](docs/PeriodRevenueData.md)
 - [KoronacloudApiV3.Pos](docs/Pos.md)
 - [KoronacloudApiV3.PriceGroup](docs/PriceGroup.md)
 - [KoronacloudApiV3.Product](docs/Product.md)
 - [KoronacloudApiV3.ProductCode](docs/ProductCode.md)
 - [KoronacloudApiV3.ProductDescription](docs/ProductDescription.md)
 - [KoronacloudApiV3.ProductPrice](docs/ProductPrice.md)
 - [KoronacloudApiV3.ProductStock](docs/ProductStock.md)
 - [KoronacloudApiV3.ProductSubproduct](docs/ProductSubproduct.md)
 - [KoronacloudApiV3.ProductSupplierPrice](docs/ProductSupplierPrice.md)
 - [KoronacloudApiV3.ProductTransferInvolvedPartyInformation](docs/ProductTransferInvolvedPartyInformation.md)
 - [KoronacloudApiV3.ProductTransferInvolvedPartyInformationData](docs/ProductTransferInvolvedPartyInformationData.md)
 - [KoronacloudApiV3.Rating](docs/Rating.md)
 - [KoronacloudApiV3.Receipt](docs/Receipt.md)
 - [KoronacloudApiV3.ReceiptItem](docs/ReceiptItem.md)
 - [KoronacloudApiV3.ResultList](docs/ResultList.md)
 - [KoronacloudApiV3.ResultListAccount](docs/ResultListAccount.md)
 - [KoronacloudApiV3.ResultListAdditionalReceiptInfoType](docs/ResultListAdditionalReceiptInfoType.md)
 - [KoronacloudApiV3.ResultListAssortment](docs/ResultListAssortment.md)
 - [KoronacloudApiV3.ResultListCashier](docs/ResultListCashier.md)
 - [KoronacloudApiV3.ResultListCommodityGroup](docs/ResultListCommodityGroup.md)
 - [KoronacloudApiV3.ResultListCurrency](docs/ResultListCurrency.md)
 - [KoronacloudApiV3.ResultListCustomer](docs/ResultListCustomer.md)
 - [KoronacloudApiV3.ResultListCustomerGroup](docs/ResultListCustomerGroup.md)
 - [KoronacloudApiV3.ResultListCustomerOrder](docs/ResultListCustomerOrder.md)
 - [KoronacloudApiV3.ResultListDayRating](docs/ResultListDayRating.md)
 - [KoronacloudApiV3.ResultListEconomicZone](docs/ResultListEconomicZone.md)
 - [KoronacloudApiV3.ResultListEndOfDayStatement](docs/ResultListEndOfDayStatement.md)
 - [KoronacloudApiV3.ResultListEntryGate](docs/ResultListEntryGate.md)
 - [KoronacloudApiV3.ResultListEvent](docs/ResultListEvent.md)
 - [KoronacloudApiV3.ResultListInfoText](docs/ResultListInfoText.md)
 - [KoronacloudApiV3.ResultListInventory](docs/ResultListInventory.md)
 - [KoronacloudApiV3.ResultListInventoryList](docs/ResultListInventoryList.md)
 - [KoronacloudApiV3.ResultListInventoryListItem](docs/ResultListInventoryListItem.md)
 - [KoronacloudApiV3.ResultListOrganizationalUnit](docs/ResultListOrganizationalUnit.md)
 - [KoronacloudApiV3.ResultListPaymentMethod](docs/ResultListPaymentMethod.md)
 - [KoronacloudApiV3.ResultListPos](docs/ResultListPos.md)
 - [KoronacloudApiV3.ResultListPriceGroup](docs/ResultListPriceGroup.md)
 - [KoronacloudApiV3.ResultListProduct](docs/ResultListProduct.md)
 - [KoronacloudApiV3.ResultListProductStock](docs/ResultListProductStock.md)
 - [KoronacloudApiV3.ResultListReceipt](docs/ResultListReceipt.md)
 - [KoronacloudApiV3.ResultListSalesTax](docs/ResultListSalesTax.md)
 - [KoronacloudApiV3.ResultListSector](docs/ResultListSector.md)
 - [KoronacloudApiV3.ResultListStockReceipt](docs/ResultListStockReceipt.md)
 - [KoronacloudApiV3.ResultListStockReceiptItem](docs/ResultListStockReceiptItem.md)
 - [KoronacloudApiV3.ResultListSupplier](docs/ResultListSupplier.md)
 - [KoronacloudApiV3.ResultListTag](docs/ResultListTag.md)
 - [KoronacloudApiV3.ResultListTicketDefinition](docs/ResultListTicketDefinition.md)
 - [KoronacloudApiV3.RevenueData](docs/RevenueData.md)
 - [KoronacloudApiV3.SalesTax](docs/SalesTax.md)
 - [KoronacloudApiV3.SalesTaxRate](docs/SalesTaxRate.md)
 - [KoronacloudApiV3.Sector](docs/Sector.md)
 - [KoronacloudApiV3.SectorSalesTaxItem](docs/SectorSalesTaxItem.md)
 - [KoronacloudApiV3.Statistic](docs/Statistic.md)
 - [KoronacloudApiV3.StatisticListTopSeller](docs/StatisticListTopSeller.md)
 - [KoronacloudApiV3.StatisticMapStringRevenueData](docs/StatisticMapStringRevenueData.md)
 - [KoronacloudApiV3.StatisticRevenueData](docs/StatisticRevenueData.md)
 - [KoronacloudApiV3.StockReceipt](docs/StockReceipt.md)
 - [KoronacloudApiV3.StockReceiptItem](docs/StockReceiptItem.md)
 - [KoronacloudApiV3.StockReceiptItemAmount](docs/StockReceiptItemAmount.md)
 - [KoronacloudApiV3.StockReceiptItemIdentification](docs/StockReceiptItemIdentification.md)
 - [KoronacloudApiV3.StockReceiptItemPurchasePrice](docs/StockReceiptItemPurchasePrice.md)
 - [KoronacloudApiV3.Supplier](docs/Supplier.md)
 - [KoronacloudApiV3.SupplierContact](docs/SupplierContact.md)
 - [KoronacloudApiV3.SupplierContactPerson](docs/SupplierContactPerson.md)
 - [KoronacloudApiV3.SupplierPaymentInformation](docs/SupplierPaymentInformation.md)
 - [KoronacloudApiV3.Tag](docs/Tag.md)
 - [KoronacloudApiV3.TaxPayment](docs/TaxPayment.md)
 - [KoronacloudApiV3.TaxSummary](docs/TaxSummary.md)
 - [KoronacloudApiV3.TicketDefinition](docs/TicketDefinition.md)
 - [KoronacloudApiV3.TimePeriod](docs/TimePeriod.md)
 - [KoronacloudApiV3.TooManyRequestsError](docs/TooManyRequestsError.md)
 - [KoronacloudApiV3.TopSeller](docs/TopSeller.md)
 - [KoronacloudApiV3.TotalPeriod](docs/TotalPeriod.md)
 - [KoronacloudApiV3.TotalPrice](docs/TotalPrice.md)
 - [KoronacloudApiV3.Validity](docs/Validity.md)
 - [KoronacloudApiV3.Weather](docs/Weather.md)


## Documentation for Authorization


### basicAuth

- **Type**: HTTP basic authentication

