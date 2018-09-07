# CloudApiV3JsClient.Customer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**address** | [**AddressInformation**](AddressInformation.md) |  | [optional] 
**birthday** | **Date** |  | [optional] 
**cards** | [**[CustomerCard]**](CustomerCard.md) |  | [optional] 
**company** | **String** |  | [optional] 
**customerGroup** | [**ModelReference**](ModelReference.md) |  | [optional] 
**economicZone** | [**ModelReference**](ModelReference.md) |  | [optional] 
**email** | **String** |  | [optional] 
**firstname** | **String** |  | [optional] 
**gender** | **String** |  | [optional] 
**informations** | [**[CustomerInformation]**](CustomerInformation.md) |  | [optional] 
**lastname** | **String** |  | [optional] 
**phone** | **String** |  | [optional] 
**taxId** | **String** |  | [optional] 
**privacyPolicyAccepted** | **Boolean** |  | [optional] 
**marketingContactPermitted** | **Boolean** |  | [optional] 


<a name="GenderEnum"></a>
## Enum: GenderEnum


* `MALE` (value: `"MALE"`)

* `FEMALE` (value: `"FEMALE"`)




