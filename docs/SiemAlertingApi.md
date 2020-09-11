# PerchApi.SiemAlertingApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**siemAlertingAlertableMappingsFields**](SiemAlertingApi.md#siemAlertingAlertableMappingsFields) | **GET** /siem-alerting/alertable-mappings/{id}/fields | 
[**siemAlertingAlertableMappingsList**](SiemAlertingApi.md#siemAlertingAlertableMappingsList) | **GET** /siem-alerting/alertable-mappings | 
[**siemAlertingAlertableMappingsRead**](SiemAlertingApi.md#siemAlertingAlertableMappingsRead) | **GET** /siem-alerting/alertable-mappings/{id} | 


<a name="siemAlertingAlertableMappingsFields"></a>
# **siemAlertingAlertableMappingsFields**
> SiemAlertableMapping siemAlertingAlertableMappingsFields(id)



Retrieves the SiemAlertableField records available for use on the mapping with the specified PK.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SiemAlertingApi();

var id = 56; // Number | A unique integer value identifying this siem alertable mapping.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.siemAlertingAlertableMappingsFields(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this siem alertable mapping. | 

### Return type

[**SiemAlertableMapping**](SiemAlertableMapping.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="siemAlertingAlertableMappingsList"></a>
# **siemAlertingAlertableMappingsList**
> [SiemAlertableMapping] siemAlertingAlertableMappingsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SiemAlertingApi();

var opts = { 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.siemAlertingAlertableMappingsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[SiemAlertableMapping]**](SiemAlertableMapping.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="siemAlertingAlertableMappingsRead"></a>
# **siemAlertingAlertableMappingsRead**
> SiemAlertableMapping siemAlertingAlertableMappingsRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SiemAlertingApi();

var id = 56; // Number | A unique integer value identifying this siem alertable mapping.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.siemAlertingAlertableMappingsRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this siem alertable mapping. | 

### Return type

[**SiemAlertableMapping**](SiemAlertableMapping.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

