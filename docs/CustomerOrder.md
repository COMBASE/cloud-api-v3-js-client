# KoronacloudApiV3.CustomerOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**bookingTime** | **Date** |  | [optional] 
**cashier** | [**ModelReference**](ModelReference.md) |  | [optional] 
**comment** | **String** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**customer** | [**ModelReference**](ModelReference.md) |  | [optional] 
**customerData** | [**CustomerData**](CustomerData.md) |  | [optional] 
**deposit** | **Number** |  | [optional] 
**depositAccount** | [**ModelReference**](ModelReference.md) |  | [optional] 
**finishTime** | **Date** |  | [optional] 
**items** | [**[ReceiptItem]**](ReceiptItem.md) |  | [optional] 
**organizationalUnit** | [**ModelReference**](ModelReference.md) |  | [optional] 
**pickUpTime** | **Date** |  | [optional] 
**pointOfSale** | [**ModelReference**](ModelReference.md) |  | [optional] 
**readyForPickUp** | **Boolean** |  | [optional] 
**warehouse** | [**ModelReference**](ModelReference.md) |  | [optional] 


