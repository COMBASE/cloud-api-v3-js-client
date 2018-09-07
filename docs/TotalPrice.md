# CloudApiV3JsClient.TotalPrice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base** | **Number** | base price: price of the receipt or itemrow, excluded not included taxes, included discount. example: 19% tax included, 2€ discount included | 
**discount** | **Number** | discount: discount amount of the receipt or item row. base + discount &#x3D; undiscounted base price. | [optional] 
**gross** | **Number** | gross price: base + not includes taxes. example: 19% tax included, 7% tax excluded | [optional] 
**net** | **Number** | base price: price of the receipt or itemrow, excluded all taxes. example: every taxes excluded | [optional] 
**taxPayments** | [**[TaxPayment]**](TaxPayment.md) | taxPayments: detailed tax information. could also be used to calculate the gross and net price depending on the base price | 


