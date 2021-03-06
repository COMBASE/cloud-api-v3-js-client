# KoronacloudApiV3.InventoryList

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**bookingTime** | **Date** |  | [optional] 
**bookingUser** | [**ModelReference**](ModelReference.md) |  | [optional] 
**cashier** | [**ModelReference**](ModelReference.md) |  | [optional] 
**createTime** | **Date** |  | [optional] 
**description** | **String** |  | [optional] 
**finishTime** | **Date** |  | [optional] 
**inventory** | [**ModelReference**](ModelReference.md) |  | [optional] 
**modifiedTime** | **Date** |  | [optional] 
**organizationalUnit** | [**ModelReference**](ModelReference.md) |  | [optional] 
**pointOfSale** | [**ModelReference**](ModelReference.md) |  | [optional] 
**status** | **String** |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `BOOKED` (value: `"BOOKED"`)

* `IN_PROGRESS` (value: `"IN_PROGRESS"`)




