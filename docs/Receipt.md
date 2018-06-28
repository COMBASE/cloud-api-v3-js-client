# KoronacloudApiV3.Receipt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**accountTransactions** | [**[AccountTransaction]**](AccountTransaction.md) |  | [optional] 
**bookingTime** | **Date** |  | [optional] 
**cashier** | [**ModelReference**](ModelReference.md) |  | [optional] 
**creationTime** | **Date** |  | [optional] 
**currency** | [**ModelReference**](ModelReference.md) |  | [optional] 
**customer** | [**ModelReference**](ModelReference.md) |  | [optional] 
**customerGroup** | [**ModelReference**](ModelReference.md) |  | [optional] 
**customerOrder** | [**ModelReference**](ModelReference.md) |  | [optional] 
**depositAmount** | **Number** |  | [optional] 
**geoLocation** | [**GeoLocation**](GeoLocation.md) |  | [optional] 
**items** | [**[ReceiptItem]**](ReceiptItem.md) |  | [optional] 
**organizationalUnit** | [**ModelReference**](ModelReference.md) |  | [optional] 
**payments** | [**[Payment]**](Payment.md) |  | [optional] 
**pointOfSale** | [**ModelReference**](ModelReference.md) |  | [optional] 
**priceGroup** | [**ModelReference**](ModelReference.md) |  | [optional] 
**voided** | **Boolean** |  | [optional] 
**zcounter** | **Number** |  | [optional] 


