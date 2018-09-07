# KoronacloudApiV3.Cashier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**alias** | **String** |  | [optional] 
**deactivated** | **Boolean** |  | [optional] 
**email** | **String** |  | [optional] 
**firstname** | **String** |  | [optional] 
**gender** | **String** |  | [optional] 
**loginCode** | **String** | contains the md5 hash of the cashiers login code | [optional] 
**loginPassword** | **String** | contains the md5 hash of the cashiers login password | [optional] 
**permissions** | **[String]** |  | [optional] 
**role** | **String** |  | [optional] 
**surname** | **String** |  | [optional] 


<a name="GenderEnum"></a>
## Enum: GenderEnum


* `MALE` (value: `"MALE"`)

* `FEMALE` (value: `"FEMALE"`)




<a name="[PermissionsEnum]"></a>
## Enum: [PermissionsEnum]


* `BLANK_RECEIPT` (value: `"BLANK_RECEIPT"`)

* `CANCEL_ITEM` (value: `"CANCEL_ITEM"`)

* `CANCEL_LAST_RECEIPT_ITEM` (value: `"CANCEL_LAST_RECEIPT_ITEM"`)

* `CANCEL_RECEIPT` (value: `"CANCEL_RECEIPT"`)

* `DELETE_RECEIPT` (value: `"DELETE_RECEIPT"`)

* `EXTERNAL_POINT_OF_SALE` (value: `"EXTERNAL_POINT_OF_SALE"`)

* `FOREIGN_RECEIPT` (value: `"FOREIGN_RECEIPT"`)

* `MDE_ADMIN` (value: `"MDE_ADMIN"`)

* `PRICE` (value: `"PRICE"`)

* `REPORTS` (value: `"REPORTS"`)

* `RETURN` (value: `"RETURN"`)

* `REVISION` (value: `"REVISION"`)

* `TERMINATE_BREAK_LOCK` (value: `"TERMINATE_BREAK_LOCK"`)




