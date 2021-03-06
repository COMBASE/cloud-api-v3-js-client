# KoronacloudApiV3.Supplier

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**additionalInformation** | **String** |  | [optional] 
**address** | [**ProductTransferInvolvedPartyInformationData**](ProductTransferInvolvedPartyInformationData.md) |  | [optional] 
**contact** | [**SupplierContact**](SupplierContact.md) |  | [optional] 
**contactPerson** | [**SupplierContactPerson**](SupplierContactPerson.md) |  | [optional] 
**customerNumber** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**payment** | [**SupplierPaymentInformation**](SupplierPaymentInformation.md) |  | [optional] 
**returnAddress** | [**ProductTransferInvolvedPartyInformationData**](ProductTransferInvolvedPartyInformationData.md) |  | [optional] 


