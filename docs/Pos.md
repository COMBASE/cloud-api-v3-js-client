# CloudApiV3JsClient.Pos

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**coupled** | **Boolean** |  | [optional] 
**couplingId** | **String** |  | [optional] 
**defaultCustomerGroup** | [**ModelReference**](ModelReference.md) |  | [optional] 
**defaultPaymentMethod** | [**ModelReference**](ModelReference.md) |  | [optional] 
**deviceInformation** | [**DeviceInformation**](DeviceInformation.md) |  | [optional] 
**external** | **Boolean** |  | [optional] 
**lastReceiptNumber** | **String** |  | [optional] 
**lastZCount** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**organizationalUnit** | [**ModelReference**](ModelReference.md) |  | [optional] 
**printFooterLines** | **{String: String}** |  | [optional] 
**printHeaderLines** | **{String: String}** |  | [optional] 
**receiptInfoTexts** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**useAlternativeSector** | **Boolean** |  | [optional] 


