# CloudApiV3JsClient.AdditionalReceiptInfoType

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**cashierInputRequired** | **Boolean** |  | [optional] 
**customerGroups** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**description** | **String** |  | [optional] 
**minItemQuantity** | **Number** |  | [optional] 
**minTotal** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**options** | **[String]** |  | [optional] 
**organizationalUnits** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**required** | **Boolean** |  | [optional] 
**tag** | [**ModelReference**](ModelReference.md) |  | [optional] 
**validity** | [**Validity**](Validity.md) |  | [optional] 


