# CloudApiV3JsClient.Currency

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**centName** | **String** |  | [optional] 
**decimalPlaces** | **Number** |  | [optional] 
**denominations** | [**[CurrencyDenomination]**](CurrencyDenomination.md) |  | [optional] 
**exchangeRates** | [**[CurrencyExchangeRate]**](CurrencyExchangeRate.md) |  | [optional] 
**key** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**systemCurrency** | **Boolean** |  | [optional] 
**symbol** | **String** |  | [optional] 


