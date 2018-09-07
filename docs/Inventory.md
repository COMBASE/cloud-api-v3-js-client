# KoronacloudApiV3.Inventory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**automaticBooking** | **Boolean** |  | [optional] 
**automaticBookingAfterDays** | **Number** | only if isAutomaticBooking&#x3D;true | [optional] 
**checkProductAssortmentValidity** | **Boolean** |  | [optional] 
**checkProductListing** | **Boolean** |  | [optional] 
**createTime** | **Date** |  | [optional] 
**description** | **String** |  | [optional] 
**executionDays** | **[String]** | only if type&#x3D;PERPETUAL_INVENTORY | [optional] 
**executionTime** | **Date** |  | [optional] 
**hasBookedReceipts** | **Boolean** |  | [optional] 
**maxProductsPerList** | **Number** | only if type&#x3D;ANNUAL_INVENTORY | INVENTORY_IRREGULARITY | [optional] 
**oneCommodityGroupPerInventoryList** | **Boolean** | only if type&#x3D;ANNUAL_INVENTORY | INVENTORY_IRREGULARITY | [optional] 
**onlyNegativeProductStocks** | **Boolean** | only if type&#x3D;INVENTORY_IRREGULARITY | [optional] 
**organizationalUnits** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**productFilter** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="[ExecutionDaysEnum]"></a>
## Enum: [ExecutionDaysEnum]


* `MONDAY` (value: `"MONDAY"`)

* `TUESDAY` (value: `"TUESDAY"`)

* `WEDNESDAY` (value: `"WEDNESDAY"`)

* `THURSDAY` (value: `"THURSDAY"`)

* `FRIDAY` (value: `"FRIDAY"`)

* `SATURDAY` (value: `"SATURDAY"`)

* `SUNDAY` (value: `"SUNDAY"`)




<a name="ProductFilterEnum"></a>
## Enum: ProductFilterEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `ALL` (value: `"ALL"`)

* `DEACTIVATED` (value: `"DEACTIVATED"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `ANNUAL_INVENTORY` (value: `"ANNUAL_INVENTORY"`)

* `INVENTORY_IRREGULARITY` (value: `"INVENTORY_IRREGULARITY"`)

* `INVENTORY_SAMPLING` (value: `"INVENTORY_SAMPLING"`)

* `PERPETUAL_INVENTORY` (value: `"PERPETUAL_INVENTORY"`)




