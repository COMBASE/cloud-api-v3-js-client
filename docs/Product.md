# CloudApiV3JsClient.Product

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **Boolean** | indicates whether the object is active for use or not | [optional] 
**id** | **String** | global object uuid (xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx) | [optional] 
**_number** | **String** | number of the object, like it is set in backoffice; will be removed when active&#x3D;false | [optional] 
**revision** | **Number** | the revision number of the object. revision numbers are unique per object-type. there is is no object of the same type with identical revision numbers. | [optional] 
**alternativeSector** | [**ModelReference**](ModelReference.md) |  | [optional] 
**assortment** | [**ModelReference**](ModelReference.md) |  | [optional] 
**codes** | [**[ProductCode]**](ProductCode.md) |  | [optional] 
**commodityGroup** | [**ModelReference**](ModelReference.md) |  | [optional] 
**conversion** | **Boolean** |  | [optional] 
**costs** | **Number** |  | [optional] 
**deactivated** | **Boolean** |  | [optional] 
**deposit** | **Boolean** |  | [optional] 
**descriptions** | [**[ProductDescription]**](ProductDescription.md) |  | [optional] 
**discountable** | **Boolean** |  | [optional] 
**image** | [**ModelReference**](ModelReference.md) |  | [optional] 
**infoTexts** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**itemSequence** | [**ModelReference**](ModelReference.md) |  | [optional] 
**lastPurchasePrice** | **Number** |  | [optional] 
**listed** | **Boolean** |  | [optional] 
**listedSince** | **Date** |  | [optional] 
**maxPrice** | **Number** |  | [optional] 
**minPrice** | **Number** |  | [optional] 
**name** | **String** |  | [optional] 
**packagingQuantity** | **Number** |  | [optional] 
**packagingRequired** | **Boolean** |  | [optional] 
**packagingUnit** | **String** |  | [optional] 
**personalizationRequired** | **Boolean** |  | [optional] 
**priceChangable** | **Boolean** |  | [optional] 
**prices** | [**[ProductPrice]**](ProductPrice.md) |  | [optional] 
**printTicketsSeparately** | **Boolean** |  | [optional] 
**productionType** | [**ModelReference**](ModelReference.md) |  | [optional] 
**recommendedRetailPrice** | **Number** |  | [optional] 
**relatedProducts** | [**ModelReference**](ModelReference.md) |  | [optional] 
**sector** | [**ModelReference**](ModelReference.md) |  | [optional] 
**serialNumberRequired** | **Boolean** |  | [optional] 
**subproductPresentation** | **String** |  | [optional] 
**subproducts** | [**[ProductSubproduct]**](ProductSubproduct.md) |  | [optional] 
**supplierPrices** | [**[ProductSupplierPrice]**](ProductSupplierPrice.md) |  | [optional] 
**tags** | [**[ModelReference]**](ModelReference.md) |  | [optional] 
**ticketDefinition** | [**ModelReference**](ModelReference.md) |  | [optional] 
**trackInventory** | **Boolean** |  | [optional] 
**stockReturnUnsellable** | **Boolean** |  | [optional] 


<a name="PackagingUnitEnum"></a>
## Enum: PackagingUnitEnum


* `CUBIC_INCH` (value: `"CUBIC_INCH"`)

* `CUBIC_METER` (value: `"CUBIC_METER"`)

* `FLUID_OUNCE` (value: `"FLUID_OUNCE"`)

* `GALLON_FL` (value: `"GALLON_FL"`)

* `GRAM` (value: `"GRAM"`)

* `INCH` (value: `"INCH"`)

* `KILOGRAM` (value: `"KILOGRAM"`)

* `LITER` (value: `"LITER"`)

* `METER` (value: `"METER"`)

* `MILLILITER` (value: `"MILLILITER"`)

* `OUNCE` (value: `"OUNCE"`)

* `POUND` (value: `"POUND"`)

* `SQUARE_INCH` (value: `"SQUARE_INCH"`)

* `SQUARE_METER` (value: `"SQUARE_METER"`)




<a name="SubproductPresentationEnum"></a>
## Enum: SubproductPresentationEnum


* `DEFAULT` (value: `"DEFAULT"`)

* `HIDE_ALL` (value: `"HIDE_ALL"`)

* `HIDE_PRICES` (value: `"HIDE_PRICES"`)

* `HIDE_QUANTITIES` (value: `"HIDE_QUANTITIES"`)




