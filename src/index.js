/**
 * KORONA.cloud API v3
 * Our api provides access to our cloud services
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Account', 'model/AccountSummary', 'model/AccountTransaction', 'model/AddOrUpdateResult', 'model/AdditionalInfo', 'model/AdditionalReceiptInfoType', 'model/AddressInformation', 'model/Admission', 'model/Amount', 'model/AmountCountData', 'model/Assortment', 'model/BadRequestError', 'model/Capacity', 'model/Cashier', 'model/CashierSummary', 'model/Category', 'model/CloudSubscription', 'model/CommodityGroup', 'model/CommodityGroupSummary', 'model/CompanyIdentification', 'model/Currency', 'model/CurrencyDenomination', 'model/CurrencyExchangeRate', 'model/Customer', 'model/CustomerCard', 'model/CustomerData', 'model/CustomerGroup', 'model/CustomerGroupSummary', 'model/CustomerInformation', 'model/CustomerOrder', 'model/DayRating', 'model/DayTimePeriod', 'model/DeviceInformation', 'model/EconomicZone', 'model/EndOfDayStatement', 'model/EndOfDayStatementSummary', 'model/EntryGate', 'model/Event', 'model/ForbiddenError', 'model/GeoLocation', 'model/InfoText', 'model/Interval', 'model/Inventory', 'model/InventoryList', 'model/InventoryListItem', 'model/InventoryListItemStock', 'model/KoronaAccount', 'model/MethodNotAllowedError', 'model/ModelReference', 'model/NotFoundError', 'model/OrganizationalUnit', 'model/Payment', 'model/PaymentMethod', 'model/PaymentSummary', 'model/Period', 'model/PeriodListTopSeller', 'model/PeriodMapStringRevenueData', 'model/PeriodObject', 'model/PeriodRevenueData', 'model/Pos', 'model/PriceGroup', 'model/Product', 'model/ProductCode', 'model/ProductDescription', 'model/ProductPrice', 'model/ProductStock', 'model/ProductSubproduct', 'model/ProductSupplierPrice', 'model/ProductTransferInvolvedPartyInformation', 'model/ProductTransferInvolvedPartyInformationData', 'model/Rating', 'model/Receipt', 'model/ReceiptItem', 'model/ResultList', 'model/ResultListAccount', 'model/ResultListAdditionalReceiptInfoType', 'model/ResultListAssortment', 'model/ResultListCashier', 'model/ResultListCommodityGroup', 'model/ResultListCurrency', 'model/ResultListCustomer', 'model/ResultListCustomerGroup', 'model/ResultListCustomerOrder', 'model/ResultListDayRating', 'model/ResultListEconomicZone', 'model/ResultListEndOfDayStatement', 'model/ResultListEntryGate', 'model/ResultListEvent', 'model/ResultListInfoText', 'model/ResultListInventory', 'model/ResultListInventoryList', 'model/ResultListInventoryListItem', 'model/ResultListOrganizationalUnit', 'model/ResultListPaymentMethod', 'model/ResultListPos', 'model/ResultListPriceGroup', 'model/ResultListProduct', 'model/ResultListProductStock', 'model/ResultListReceipt', 'model/ResultListSalesTax', 'model/ResultListSector', 'model/ResultListStockReceipt', 'model/ResultListStockReceiptItem', 'model/ResultListSupplier', 'model/ResultListTag', 'model/ResultListTicketDefinition', 'model/RevenueData', 'model/SalesTax', 'model/SalesTaxRate', 'model/Sector', 'model/SectorSalesTaxItem', 'model/Statistic', 'model/StatisticListTopSeller', 'model/StatisticMapStringRevenueData', 'model/StatisticRevenueData', 'model/StockReceipt', 'model/StockReceiptItem', 'model/StockReceiptItemAmount', 'model/StockReceiptItemIdentification', 'model/StockReceiptItemPurchasePrice', 'model/Supplier', 'model/SupplierContact', 'model/SupplierContactPerson', 'model/SupplierPaymentInformation', 'model/Tag', 'model/TaxPayment', 'model/TaxSummary', 'model/TicketDefinition', 'model/TimePeriod', 'model/TooManyRequestsError', 'model/TopSeller', 'model/TotalPeriod', 'model/TotalPrice', 'model/Validity', 'model/Weather', 'api/AccountsApi', 'api/AdditionalReceiptInfoTypesApi', 'api/AssortmentsApi', 'api/CashiersApi', 'api/CommodityGroupsApi', 'api/CurrenciesApi', 'api/CustomerGroupsApi', 'api/CustomerOrdersApi', 'api/CustomersApi', 'api/EconomicZonesApi', 'api/ImagesApi', 'api/InfoTextsApi', 'api/InventoriesApi', 'api/KoronaAccountApi', 'api/OrganizationalUnitsApi', 'api/PaymentMethodsApi', 'api/PointsOfSaleApi', 'api/PriceGroupsApi', 'api/ProductsApi', 'api/ReceiptsApi', 'api/SalesTaxesApi', 'api/SectorsApi', 'api/StatisticsApi', 'api/StockReceiptsApi', 'api/SuppliersApi', 'api/TagsApi', 'api/TicketingApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Account'), require('./model/AccountSummary'), require('./model/AccountTransaction'), require('./model/AddOrUpdateResult'), require('./model/AdditionalInfo'), require('./model/AdditionalReceiptInfoType'), require('./model/AddressInformation'), require('./model/Admission'), require('./model/Amount'), require('./model/AmountCountData'), require('./model/Assortment'), require('./model/BadRequestError'), require('./model/Capacity'), require('./model/Cashier'), require('./model/CashierSummary'), require('./model/Category'), require('./model/CloudSubscription'), require('./model/CommodityGroup'), require('./model/CommodityGroupSummary'), require('./model/CompanyIdentification'), require('./model/Currency'), require('./model/CurrencyDenomination'), require('./model/CurrencyExchangeRate'), require('./model/Customer'), require('./model/CustomerCard'), require('./model/CustomerData'), require('./model/CustomerGroup'), require('./model/CustomerGroupSummary'), require('./model/CustomerInformation'), require('./model/CustomerOrder'), require('./model/DayRating'), require('./model/DayTimePeriod'), require('./model/DeviceInformation'), require('./model/EconomicZone'), require('./model/EndOfDayStatement'), require('./model/EndOfDayStatementSummary'), require('./model/EntryGate'), require('./model/Event'), require('./model/ForbiddenError'), require('./model/GeoLocation'), require('./model/InfoText'), require('./model/Interval'), require('./model/Inventory'), require('./model/InventoryList'), require('./model/InventoryListItem'), require('./model/InventoryListItemStock'), require('./model/KoronaAccount'), require('./model/MethodNotAllowedError'), require('./model/ModelReference'), require('./model/NotFoundError'), require('./model/OrganizationalUnit'), require('./model/Payment'), require('./model/PaymentMethod'), require('./model/PaymentSummary'), require('./model/Period'), require('./model/PeriodListTopSeller'), require('./model/PeriodMapStringRevenueData'), require('./model/PeriodObject'), require('./model/PeriodRevenueData'), require('./model/Pos'), require('./model/PriceGroup'), require('./model/Product'), require('./model/ProductCode'), require('./model/ProductDescription'), require('./model/ProductPrice'), require('./model/ProductStock'), require('./model/ProductSubproduct'), require('./model/ProductSupplierPrice'), require('./model/ProductTransferInvolvedPartyInformation'), require('./model/ProductTransferInvolvedPartyInformationData'), require('./model/Rating'), require('./model/Receipt'), require('./model/ReceiptItem'), require('./model/ResultList'), require('./model/ResultListAccount'), require('./model/ResultListAdditionalReceiptInfoType'), require('./model/ResultListAssortment'), require('./model/ResultListCashier'), require('./model/ResultListCommodityGroup'), require('./model/ResultListCurrency'), require('./model/ResultListCustomer'), require('./model/ResultListCustomerGroup'), require('./model/ResultListCustomerOrder'), require('./model/ResultListDayRating'), require('./model/ResultListEconomicZone'), require('./model/ResultListEndOfDayStatement'), require('./model/ResultListEntryGate'), require('./model/ResultListEvent'), require('./model/ResultListInfoText'), require('./model/ResultListInventory'), require('./model/ResultListInventoryList'), require('./model/ResultListInventoryListItem'), require('./model/ResultListOrganizationalUnit'), require('./model/ResultListPaymentMethod'), require('./model/ResultListPos'), require('./model/ResultListPriceGroup'), require('./model/ResultListProduct'), require('./model/ResultListProductStock'), require('./model/ResultListReceipt'), require('./model/ResultListSalesTax'), require('./model/ResultListSector'), require('./model/ResultListStockReceipt'), require('./model/ResultListStockReceiptItem'), require('./model/ResultListSupplier'), require('./model/ResultListTag'), require('./model/ResultListTicketDefinition'), require('./model/RevenueData'), require('./model/SalesTax'), require('./model/SalesTaxRate'), require('./model/Sector'), require('./model/SectorSalesTaxItem'), require('./model/Statistic'), require('./model/StatisticListTopSeller'), require('./model/StatisticMapStringRevenueData'), require('./model/StatisticRevenueData'), require('./model/StockReceipt'), require('./model/StockReceiptItem'), require('./model/StockReceiptItemAmount'), require('./model/StockReceiptItemIdentification'), require('./model/StockReceiptItemPurchasePrice'), require('./model/Supplier'), require('./model/SupplierContact'), require('./model/SupplierContactPerson'), require('./model/SupplierPaymentInformation'), require('./model/Tag'), require('./model/TaxPayment'), require('./model/TaxSummary'), require('./model/TicketDefinition'), require('./model/TimePeriod'), require('./model/TooManyRequestsError'), require('./model/TopSeller'), require('./model/TotalPeriod'), require('./model/TotalPrice'), require('./model/Validity'), require('./model/Weather'), require('./api/AccountsApi'), require('./api/AdditionalReceiptInfoTypesApi'), require('./api/AssortmentsApi'), require('./api/CashiersApi'), require('./api/CommodityGroupsApi'), require('./api/CurrenciesApi'), require('./api/CustomerGroupsApi'), require('./api/CustomerOrdersApi'), require('./api/CustomersApi'), require('./api/EconomicZonesApi'), require('./api/ImagesApi'), require('./api/InfoTextsApi'), require('./api/InventoriesApi'), require('./api/KoronaAccountApi'), require('./api/OrganizationalUnitsApi'), require('./api/PaymentMethodsApi'), require('./api/PointsOfSaleApi'), require('./api/PriceGroupsApi'), require('./api/ProductsApi'), require('./api/ReceiptsApi'), require('./api/SalesTaxesApi'), require('./api/SectorsApi'), require('./api/StatisticsApi'), require('./api/StockReceiptsApi'), require('./api/SuppliersApi'), require('./api/TagsApi'), require('./api/TicketingApi'));
  }
}(function(ApiClient, Account, AccountSummary, AccountTransaction, AddOrUpdateResult, AdditionalInfo, AdditionalReceiptInfoType, AddressInformation, Admission, Amount, AmountCountData, Assortment, BadRequestError, Capacity, Cashier, CashierSummary, Category, CloudSubscription, CommodityGroup, CommodityGroupSummary, CompanyIdentification, Currency, CurrencyDenomination, CurrencyExchangeRate, Customer, CustomerCard, CustomerData, CustomerGroup, CustomerGroupSummary, CustomerInformation, CustomerOrder, DayRating, DayTimePeriod, DeviceInformation, EconomicZone, EndOfDayStatement, EndOfDayStatementSummary, EntryGate, Event, ForbiddenError, GeoLocation, InfoText, Interval, Inventory, InventoryList, InventoryListItem, InventoryListItemStock, KoronaAccount, MethodNotAllowedError, ModelReference, NotFoundError, OrganizationalUnit, Payment, PaymentMethod, PaymentSummary, Period, PeriodListTopSeller, PeriodMapStringRevenueData, PeriodObject, PeriodRevenueData, Pos, PriceGroup, Product, ProductCode, ProductDescription, ProductPrice, ProductStock, ProductSubproduct, ProductSupplierPrice, ProductTransferInvolvedPartyInformation, ProductTransferInvolvedPartyInformationData, Rating, Receipt, ReceiptItem, ResultList, ResultListAccount, ResultListAdditionalReceiptInfoType, ResultListAssortment, ResultListCashier, ResultListCommodityGroup, ResultListCurrency, ResultListCustomer, ResultListCustomerGroup, ResultListCustomerOrder, ResultListDayRating, ResultListEconomicZone, ResultListEndOfDayStatement, ResultListEntryGate, ResultListEvent, ResultListInfoText, ResultListInventory, ResultListInventoryList, ResultListInventoryListItem, ResultListOrganizationalUnit, ResultListPaymentMethod, ResultListPos, ResultListPriceGroup, ResultListProduct, ResultListProductStock, ResultListReceipt, ResultListSalesTax, ResultListSector, ResultListStockReceipt, ResultListStockReceiptItem, ResultListSupplier, ResultListTag, ResultListTicketDefinition, RevenueData, SalesTax, SalesTaxRate, Sector, SectorSalesTaxItem, Statistic, StatisticListTopSeller, StatisticMapStringRevenueData, StatisticRevenueData, StockReceipt, StockReceiptItem, StockReceiptItemAmount, StockReceiptItemIdentification, StockReceiptItemPurchasePrice, Supplier, SupplierContact, SupplierContactPerson, SupplierPaymentInformation, Tag, TaxPayment, TaxSummary, TicketDefinition, TimePeriod, TooManyRequestsError, TopSeller, TotalPeriod, TotalPrice, Validity, Weather, AccountsApi, AdditionalReceiptInfoTypesApi, AssortmentsApi, CashiersApi, CommodityGroupsApi, CurrenciesApi, CustomerGroupsApi, CustomerOrdersApi, CustomersApi, EconomicZonesApi, ImagesApi, InfoTextsApi, InventoriesApi, KoronaAccountApi, OrganizationalUnitsApi, PaymentMethodsApi, PointsOfSaleApi, PriceGroupsApi, ProductsApi, ReceiptsApi, SalesTaxesApi, SectorsApi, StatisticsApi, StockReceiptsApi, SuppliersApi, TagsApi, TicketingApi) {
  'use strict';

  /**
   * Our_api_provides_access_to_our_cloud_services.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var KoronacloudApiV3 = require('index'); // See note below*.
   * var xxxSvc = new KoronacloudApiV3.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new KoronacloudApiV3.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new KoronacloudApiV3.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new KoronacloudApiV3.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 3.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Account model constructor.
     * @property {module:model/Account}
     */
    Account: Account,
    /**
     * The AccountSummary model constructor.
     * @property {module:model/AccountSummary}
     */
    AccountSummary: AccountSummary,
    /**
     * The AccountTransaction model constructor.
     * @property {module:model/AccountTransaction}
     */
    AccountTransaction: AccountTransaction,
    /**
     * The AddOrUpdateResult model constructor.
     * @property {module:model/AddOrUpdateResult}
     */
    AddOrUpdateResult: AddOrUpdateResult,
    /**
     * The AdditionalInfo model constructor.
     * @property {module:model/AdditionalInfo}
     */
    AdditionalInfo: AdditionalInfo,
    /**
     * The AdditionalReceiptInfoType model constructor.
     * @property {module:model/AdditionalReceiptInfoType}
     */
    AdditionalReceiptInfoType: AdditionalReceiptInfoType,
    /**
     * The AddressInformation model constructor.
     * @property {module:model/AddressInformation}
     */
    AddressInformation: AddressInformation,
    /**
     * The Admission model constructor.
     * @property {module:model/Admission}
     */
    Admission: Admission,
    /**
     * The Amount model constructor.
     * @property {module:model/Amount}
     */
    Amount: Amount,
    /**
     * The AmountCountData model constructor.
     * @property {module:model/AmountCountData}
     */
    AmountCountData: AmountCountData,
    /**
     * The Assortment model constructor.
     * @property {module:model/Assortment}
     */
    Assortment: Assortment,
    /**
     * The BadRequestError model constructor.
     * @property {module:model/BadRequestError}
     */
    BadRequestError: BadRequestError,
    /**
     * The Capacity model constructor.
     * @property {module:model/Capacity}
     */
    Capacity: Capacity,
    /**
     * The Cashier model constructor.
     * @property {module:model/Cashier}
     */
    Cashier: Cashier,
    /**
     * The CashierSummary model constructor.
     * @property {module:model/CashierSummary}
     */
    CashierSummary: CashierSummary,
    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category: Category,
    /**
     * The CloudSubscription model constructor.
     * @property {module:model/CloudSubscription}
     */
    CloudSubscription: CloudSubscription,
    /**
     * The CommodityGroup model constructor.
     * @property {module:model/CommodityGroup}
     */
    CommodityGroup: CommodityGroup,
    /**
     * The CommodityGroupSummary model constructor.
     * @property {module:model/CommodityGroupSummary}
     */
    CommodityGroupSummary: CommodityGroupSummary,
    /**
     * The CompanyIdentification model constructor.
     * @property {module:model/CompanyIdentification}
     */
    CompanyIdentification: CompanyIdentification,
    /**
     * The Currency model constructor.
     * @property {module:model/Currency}
     */
    Currency: Currency,
    /**
     * The CurrencyDenomination model constructor.
     * @property {module:model/CurrencyDenomination}
     */
    CurrencyDenomination: CurrencyDenomination,
    /**
     * The CurrencyExchangeRate model constructor.
     * @property {module:model/CurrencyExchangeRate}
     */
    CurrencyExchangeRate: CurrencyExchangeRate,
    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer: Customer,
    /**
     * The CustomerCard model constructor.
     * @property {module:model/CustomerCard}
     */
    CustomerCard: CustomerCard,
    /**
     * The CustomerData model constructor.
     * @property {module:model/CustomerData}
     */
    CustomerData: CustomerData,
    /**
     * The CustomerGroup model constructor.
     * @property {module:model/CustomerGroup}
     */
    CustomerGroup: CustomerGroup,
    /**
     * The CustomerGroupSummary model constructor.
     * @property {module:model/CustomerGroupSummary}
     */
    CustomerGroupSummary: CustomerGroupSummary,
    /**
     * The CustomerInformation model constructor.
     * @property {module:model/CustomerInformation}
     */
    CustomerInformation: CustomerInformation,
    /**
     * The CustomerOrder model constructor.
     * @property {module:model/CustomerOrder}
     */
    CustomerOrder: CustomerOrder,
    /**
     * The DayRating model constructor.
     * @property {module:model/DayRating}
     */
    DayRating: DayRating,
    /**
     * The DayTimePeriod model constructor.
     * @property {module:model/DayTimePeriod}
     */
    DayTimePeriod: DayTimePeriod,
    /**
     * The DeviceInformation model constructor.
     * @property {module:model/DeviceInformation}
     */
    DeviceInformation: DeviceInformation,
    /**
     * The EconomicZone model constructor.
     * @property {module:model/EconomicZone}
     */
    EconomicZone: EconomicZone,
    /**
     * The EndOfDayStatement model constructor.
     * @property {module:model/EndOfDayStatement}
     */
    EndOfDayStatement: EndOfDayStatement,
    /**
     * The EndOfDayStatementSummary model constructor.
     * @property {module:model/EndOfDayStatementSummary}
     */
    EndOfDayStatementSummary: EndOfDayStatementSummary,
    /**
     * The EntryGate model constructor.
     * @property {module:model/EntryGate}
     */
    EntryGate: EntryGate,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The ForbiddenError model constructor.
     * @property {module:model/ForbiddenError}
     */
    ForbiddenError: ForbiddenError,
    /**
     * The GeoLocation model constructor.
     * @property {module:model/GeoLocation}
     */
    GeoLocation: GeoLocation,
    /**
     * The InfoText model constructor.
     * @property {module:model/InfoText}
     */
    InfoText: InfoText,
    /**
     * The Interval model constructor.
     * @property {module:model/Interval}
     */
    Interval: Interval,
    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory: Inventory,
    /**
     * The InventoryList model constructor.
     * @property {module:model/InventoryList}
     */
    InventoryList: InventoryList,
    /**
     * The InventoryListItem model constructor.
     * @property {module:model/InventoryListItem}
     */
    InventoryListItem: InventoryListItem,
    /**
     * The InventoryListItemStock model constructor.
     * @property {module:model/InventoryListItemStock}
     */
    InventoryListItemStock: InventoryListItemStock,
    /**
     * The KoronaAccount model constructor.
     * @property {module:model/KoronaAccount}
     */
    KoronaAccount: KoronaAccount,
    /**
     * The MethodNotAllowedError model constructor.
     * @property {module:model/MethodNotAllowedError}
     */
    MethodNotAllowedError: MethodNotAllowedError,
    /**
     * The ModelReference model constructor.
     * @property {module:model/ModelReference}
     */
    ModelReference: ModelReference,
    /**
     * The NotFoundError model constructor.
     * @property {module:model/NotFoundError}
     */
    NotFoundError: NotFoundError,
    /**
     * The OrganizationalUnit model constructor.
     * @property {module:model/OrganizationalUnit}
     */
    OrganizationalUnit: OrganizationalUnit,
    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment: Payment,
    /**
     * The PaymentMethod model constructor.
     * @property {module:model/PaymentMethod}
     */
    PaymentMethod: PaymentMethod,
    /**
     * The PaymentSummary model constructor.
     * @property {module:model/PaymentSummary}
     */
    PaymentSummary: PaymentSummary,
    /**
     * The Period model constructor.
     * @property {module:model/Period}
     */
    Period: Period,
    /**
     * The PeriodListTopSeller model constructor.
     * @property {module:model/PeriodListTopSeller}
     */
    PeriodListTopSeller: PeriodListTopSeller,
    /**
     * The PeriodMapStringRevenueData model constructor.
     * @property {module:model/PeriodMapStringRevenueData}
     */
    PeriodMapStringRevenueData: PeriodMapStringRevenueData,
    /**
     * The PeriodObject model constructor.
     * @property {module:model/PeriodObject}
     */
    PeriodObject: PeriodObject,
    /**
     * The PeriodRevenueData model constructor.
     * @property {module:model/PeriodRevenueData}
     */
    PeriodRevenueData: PeriodRevenueData,
    /**
     * The Pos model constructor.
     * @property {module:model/Pos}
     */
    Pos: Pos,
    /**
     * The PriceGroup model constructor.
     * @property {module:model/PriceGroup}
     */
    PriceGroup: PriceGroup,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The ProductCode model constructor.
     * @property {module:model/ProductCode}
     */
    ProductCode: ProductCode,
    /**
     * The ProductDescription model constructor.
     * @property {module:model/ProductDescription}
     */
    ProductDescription: ProductDescription,
    /**
     * The ProductPrice model constructor.
     * @property {module:model/ProductPrice}
     */
    ProductPrice: ProductPrice,
    /**
     * The ProductStock model constructor.
     * @property {module:model/ProductStock}
     */
    ProductStock: ProductStock,
    /**
     * The ProductSubproduct model constructor.
     * @property {module:model/ProductSubproduct}
     */
    ProductSubproduct: ProductSubproduct,
    /**
     * The ProductSupplierPrice model constructor.
     * @property {module:model/ProductSupplierPrice}
     */
    ProductSupplierPrice: ProductSupplierPrice,
    /**
     * The ProductTransferInvolvedPartyInformation model constructor.
     * @property {module:model/ProductTransferInvolvedPartyInformation}
     */
    ProductTransferInvolvedPartyInformation: ProductTransferInvolvedPartyInformation,
    /**
     * The ProductTransferInvolvedPartyInformationData model constructor.
     * @property {module:model/ProductTransferInvolvedPartyInformationData}
     */
    ProductTransferInvolvedPartyInformationData: ProductTransferInvolvedPartyInformationData,
    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating: Rating,
    /**
     * The Receipt model constructor.
     * @property {module:model/Receipt}
     */
    Receipt: Receipt,
    /**
     * The ReceiptItem model constructor.
     * @property {module:model/ReceiptItem}
     */
    ReceiptItem: ReceiptItem,
    /**
     * The ResultList model constructor.
     * @property {module:model/ResultList}
     */
    ResultList: ResultList,
    /**
     * The ResultListAccount model constructor.
     * @property {module:model/ResultListAccount}
     */
    ResultListAccount: ResultListAccount,
    /**
     * The ResultListAdditionalReceiptInfoType model constructor.
     * @property {module:model/ResultListAdditionalReceiptInfoType}
     */
    ResultListAdditionalReceiptInfoType: ResultListAdditionalReceiptInfoType,
    /**
     * The ResultListAssortment model constructor.
     * @property {module:model/ResultListAssortment}
     */
    ResultListAssortment: ResultListAssortment,
    /**
     * The ResultListCashier model constructor.
     * @property {module:model/ResultListCashier}
     */
    ResultListCashier: ResultListCashier,
    /**
     * The ResultListCommodityGroup model constructor.
     * @property {module:model/ResultListCommodityGroup}
     */
    ResultListCommodityGroup: ResultListCommodityGroup,
    /**
     * The ResultListCurrency model constructor.
     * @property {module:model/ResultListCurrency}
     */
    ResultListCurrency: ResultListCurrency,
    /**
     * The ResultListCustomer model constructor.
     * @property {module:model/ResultListCustomer}
     */
    ResultListCustomer: ResultListCustomer,
    /**
     * The ResultListCustomerGroup model constructor.
     * @property {module:model/ResultListCustomerGroup}
     */
    ResultListCustomerGroup: ResultListCustomerGroup,
    /**
     * The ResultListCustomerOrder model constructor.
     * @property {module:model/ResultListCustomerOrder}
     */
    ResultListCustomerOrder: ResultListCustomerOrder,
    /**
     * The ResultListDayRating model constructor.
     * @property {module:model/ResultListDayRating}
     */
    ResultListDayRating: ResultListDayRating,
    /**
     * The ResultListEconomicZone model constructor.
     * @property {module:model/ResultListEconomicZone}
     */
    ResultListEconomicZone: ResultListEconomicZone,
    /**
     * The ResultListEndOfDayStatement model constructor.
     * @property {module:model/ResultListEndOfDayStatement}
     */
    ResultListEndOfDayStatement: ResultListEndOfDayStatement,
    /**
     * The ResultListEntryGate model constructor.
     * @property {module:model/ResultListEntryGate}
     */
    ResultListEntryGate: ResultListEntryGate,
    /**
     * The ResultListEvent model constructor.
     * @property {module:model/ResultListEvent}
     */
    ResultListEvent: ResultListEvent,
    /**
     * The ResultListInfoText model constructor.
     * @property {module:model/ResultListInfoText}
     */
    ResultListInfoText: ResultListInfoText,
    /**
     * The ResultListInventory model constructor.
     * @property {module:model/ResultListInventory}
     */
    ResultListInventory: ResultListInventory,
    /**
     * The ResultListInventoryList model constructor.
     * @property {module:model/ResultListInventoryList}
     */
    ResultListInventoryList: ResultListInventoryList,
    /**
     * The ResultListInventoryListItem model constructor.
     * @property {module:model/ResultListInventoryListItem}
     */
    ResultListInventoryListItem: ResultListInventoryListItem,
    /**
     * The ResultListOrganizationalUnit model constructor.
     * @property {module:model/ResultListOrganizationalUnit}
     */
    ResultListOrganizationalUnit: ResultListOrganizationalUnit,
    /**
     * The ResultListPaymentMethod model constructor.
     * @property {module:model/ResultListPaymentMethod}
     */
    ResultListPaymentMethod: ResultListPaymentMethod,
    /**
     * The ResultListPos model constructor.
     * @property {module:model/ResultListPos}
     */
    ResultListPos: ResultListPos,
    /**
     * The ResultListPriceGroup model constructor.
     * @property {module:model/ResultListPriceGroup}
     */
    ResultListPriceGroup: ResultListPriceGroup,
    /**
     * The ResultListProduct model constructor.
     * @property {module:model/ResultListProduct}
     */
    ResultListProduct: ResultListProduct,
    /**
     * The ResultListProductStock model constructor.
     * @property {module:model/ResultListProductStock}
     */
    ResultListProductStock: ResultListProductStock,
    /**
     * The ResultListReceipt model constructor.
     * @property {module:model/ResultListReceipt}
     */
    ResultListReceipt: ResultListReceipt,
    /**
     * The ResultListSalesTax model constructor.
     * @property {module:model/ResultListSalesTax}
     */
    ResultListSalesTax: ResultListSalesTax,
    /**
     * The ResultListSector model constructor.
     * @property {module:model/ResultListSector}
     */
    ResultListSector: ResultListSector,
    /**
     * The ResultListStockReceipt model constructor.
     * @property {module:model/ResultListStockReceipt}
     */
    ResultListStockReceipt: ResultListStockReceipt,
    /**
     * The ResultListStockReceiptItem model constructor.
     * @property {module:model/ResultListStockReceiptItem}
     */
    ResultListStockReceiptItem: ResultListStockReceiptItem,
    /**
     * The ResultListSupplier model constructor.
     * @property {module:model/ResultListSupplier}
     */
    ResultListSupplier: ResultListSupplier,
    /**
     * The ResultListTag model constructor.
     * @property {module:model/ResultListTag}
     */
    ResultListTag: ResultListTag,
    /**
     * The ResultListTicketDefinition model constructor.
     * @property {module:model/ResultListTicketDefinition}
     */
    ResultListTicketDefinition: ResultListTicketDefinition,
    /**
     * The RevenueData model constructor.
     * @property {module:model/RevenueData}
     */
    RevenueData: RevenueData,
    /**
     * The SalesTax model constructor.
     * @property {module:model/SalesTax}
     */
    SalesTax: SalesTax,
    /**
     * The SalesTaxRate model constructor.
     * @property {module:model/SalesTaxRate}
     */
    SalesTaxRate: SalesTaxRate,
    /**
     * The Sector model constructor.
     * @property {module:model/Sector}
     */
    Sector: Sector,
    /**
     * The SectorSalesTaxItem model constructor.
     * @property {module:model/SectorSalesTaxItem}
     */
    SectorSalesTaxItem: SectorSalesTaxItem,
    /**
     * The Statistic model constructor.
     * @property {module:model/Statistic}
     */
    Statistic: Statistic,
    /**
     * The StatisticListTopSeller model constructor.
     * @property {module:model/StatisticListTopSeller}
     */
    StatisticListTopSeller: StatisticListTopSeller,
    /**
     * The StatisticMapStringRevenueData model constructor.
     * @property {module:model/StatisticMapStringRevenueData}
     */
    StatisticMapStringRevenueData: StatisticMapStringRevenueData,
    /**
     * The StatisticRevenueData model constructor.
     * @property {module:model/StatisticRevenueData}
     */
    StatisticRevenueData: StatisticRevenueData,
    /**
     * The StockReceipt model constructor.
     * @property {module:model/StockReceipt}
     */
    StockReceipt: StockReceipt,
    /**
     * The StockReceiptItem model constructor.
     * @property {module:model/StockReceiptItem}
     */
    StockReceiptItem: StockReceiptItem,
    /**
     * The StockReceiptItemAmount model constructor.
     * @property {module:model/StockReceiptItemAmount}
     */
    StockReceiptItemAmount: StockReceiptItemAmount,
    /**
     * The StockReceiptItemIdentification model constructor.
     * @property {module:model/StockReceiptItemIdentification}
     */
    StockReceiptItemIdentification: StockReceiptItemIdentification,
    /**
     * The StockReceiptItemPurchasePrice model constructor.
     * @property {module:model/StockReceiptItemPurchasePrice}
     */
    StockReceiptItemPurchasePrice: StockReceiptItemPurchasePrice,
    /**
     * The Supplier model constructor.
     * @property {module:model/Supplier}
     */
    Supplier: Supplier,
    /**
     * The SupplierContact model constructor.
     * @property {module:model/SupplierContact}
     */
    SupplierContact: SupplierContact,
    /**
     * The SupplierContactPerson model constructor.
     * @property {module:model/SupplierContactPerson}
     */
    SupplierContactPerson: SupplierContactPerson,
    /**
     * The SupplierPaymentInformation model constructor.
     * @property {module:model/SupplierPaymentInformation}
     */
    SupplierPaymentInformation: SupplierPaymentInformation,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TaxPayment model constructor.
     * @property {module:model/TaxPayment}
     */
    TaxPayment: TaxPayment,
    /**
     * The TaxSummary model constructor.
     * @property {module:model/TaxSummary}
     */
    TaxSummary: TaxSummary,
    /**
     * The TicketDefinition model constructor.
     * @property {module:model/TicketDefinition}
     */
    TicketDefinition: TicketDefinition,
    /**
     * The TimePeriod model constructor.
     * @property {module:model/TimePeriod}
     */
    TimePeriod: TimePeriod,
    /**
     * The TooManyRequestsError model constructor.
     * @property {module:model/TooManyRequestsError}
     */
    TooManyRequestsError: TooManyRequestsError,
    /**
     * The TopSeller model constructor.
     * @property {module:model/TopSeller}
     */
    TopSeller: TopSeller,
    /**
     * The TotalPeriod model constructor.
     * @property {module:model/TotalPeriod}
     */
    TotalPeriod: TotalPeriod,
    /**
     * The TotalPrice model constructor.
     * @property {module:model/TotalPrice}
     */
    TotalPrice: TotalPrice,
    /**
     * The Validity model constructor.
     * @property {module:model/Validity}
     */
    Validity: Validity,
    /**
     * The Weather model constructor.
     * @property {module:model/Weather}
     */
    Weather: Weather,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AdditionalReceiptInfoTypesApi service constructor.
     * @property {module:api/AdditionalReceiptInfoTypesApi}
     */
    AdditionalReceiptInfoTypesApi: AdditionalReceiptInfoTypesApi,
    /**
     * The AssortmentsApi service constructor.
     * @property {module:api/AssortmentsApi}
     */
    AssortmentsApi: AssortmentsApi,
    /**
     * The CashiersApi service constructor.
     * @property {module:api/CashiersApi}
     */
    CashiersApi: CashiersApi,
    /**
     * The CommodityGroupsApi service constructor.
     * @property {module:api/CommodityGroupsApi}
     */
    CommodityGroupsApi: CommodityGroupsApi,
    /**
     * The CurrenciesApi service constructor.
     * @property {module:api/CurrenciesApi}
     */
    CurrenciesApi: CurrenciesApi,
    /**
     * The CustomerGroupsApi service constructor.
     * @property {module:api/CustomerGroupsApi}
     */
    CustomerGroupsApi: CustomerGroupsApi,
    /**
     * The CustomerOrdersApi service constructor.
     * @property {module:api/CustomerOrdersApi}
     */
    CustomerOrdersApi: CustomerOrdersApi,
    /**
     * The CustomersApi service constructor.
     * @property {module:api/CustomersApi}
     */
    CustomersApi: CustomersApi,
    /**
     * The EconomicZonesApi service constructor.
     * @property {module:api/EconomicZonesApi}
     */
    EconomicZonesApi: EconomicZonesApi,
    /**
     * The ImagesApi service constructor.
     * @property {module:api/ImagesApi}
     */
    ImagesApi: ImagesApi,
    /**
     * The InfoTextsApi service constructor.
     * @property {module:api/InfoTextsApi}
     */
    InfoTextsApi: InfoTextsApi,
    /**
     * The InventoriesApi service constructor.
     * @property {module:api/InventoriesApi}
     */
    InventoriesApi: InventoriesApi,
    /**
     * The KoronaAccountApi service constructor.
     * @property {module:api/KoronaAccountApi}
     */
    KoronaAccountApi: KoronaAccountApi,
    /**
     * The OrganizationalUnitsApi service constructor.
     * @property {module:api/OrganizationalUnitsApi}
     */
    OrganizationalUnitsApi: OrganizationalUnitsApi,
    /**
     * The PaymentMethodsApi service constructor.
     * @property {module:api/PaymentMethodsApi}
     */
    PaymentMethodsApi: PaymentMethodsApi,
    /**
     * The PointsOfSaleApi service constructor.
     * @property {module:api/PointsOfSaleApi}
     */
    PointsOfSaleApi: PointsOfSaleApi,
    /**
     * The PriceGroupsApi service constructor.
     * @property {module:api/PriceGroupsApi}
     */
    PriceGroupsApi: PriceGroupsApi,
    /**
     * The ProductsApi service constructor.
     * @property {module:api/ProductsApi}
     */
    ProductsApi: ProductsApi,
    /**
     * The ReceiptsApi service constructor.
     * @property {module:api/ReceiptsApi}
     */
    ReceiptsApi: ReceiptsApi,
    /**
     * The SalesTaxesApi service constructor.
     * @property {module:api/SalesTaxesApi}
     */
    SalesTaxesApi: SalesTaxesApi,
    /**
     * The SectorsApi service constructor.
     * @property {module:api/SectorsApi}
     */
    SectorsApi: SectorsApi,
    /**
     * The StatisticsApi service constructor.
     * @property {module:api/StatisticsApi}
     */
    StatisticsApi: StatisticsApi,
    /**
     * The StockReceiptsApi service constructor.
     * @property {module:api/StockReceiptsApi}
     */
    StockReceiptsApi: StockReceiptsApi,
    /**
     * The SuppliersApi service constructor.
     * @property {module:api/SuppliersApi}
     */
    SuppliersApi: SuppliersApi,
    /**
     * The TagsApi service constructor.
     * @property {module:api/TagsApi}
     */
    TagsApi: TagsApi,
    /**
     * The TicketingApi service constructor.
     * @property {module:api/TicketingApi}
     */
    TicketingApi: TicketingApi
  };

  return exports;
}));
