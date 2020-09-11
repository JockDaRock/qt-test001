# PerchApi.MspApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mspIntegrationHealthLogsList**](MspApi.md#mspIntegrationHealthLogsList) | **GET** /msp/{company_id}/integration-health-logs | 
[**mspIntegrationHealthLogsRead**](MspApi.md#mspIntegrationHealthLogsRead) | **GET** /msp/{company_id}/integration-health-logs/{id} | 
[**mspIntegrationsCreate**](MspApi.md#mspIntegrationsCreate) | **POST** /msp/{company_id}/integrations/{integration_type} | 
[**mspIntegrationsDelete**](MspApi.md#mspIntegrationsDelete) | **DELETE** /msp/{company_id}/integrations/{integration_type}/{id} | 
[**mspIntegrationsList**](MspApi.md#mspIntegrationsList) | **GET** /msp/{company_id}/integrations/{integration_type} | 
[**mspIntegrationsPartialUpdate**](MspApi.md#mspIntegrationsPartialUpdate) | **PATCH** /msp/{company_id}/integrations/{integration_type}/{id} | 
[**mspIntegrationsRead**](MspApi.md#mspIntegrationsRead) | **GET** /msp/{company_id}/integrations/{integration_type}/{id} | 
[**mspIntegrationsUpdate**](MspApi.md#mspIntegrationsUpdate) | **PUT** /msp/{company_id}/integrations/{integration_type}/{id} | 


<a name="mspIntegrationHealthLogsList"></a>
# **mspIntegrationHealthLogsList**
> InlineResponse2002 mspIntegrationHealthLogsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'search': "search_example", // String | A search term.
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'id': 8.14, // Number | 
  'teamId': "teamId_example", // String | 
  'service': "service_example", // String | 
  'pageNumber': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mspIntegrationHealthLogsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **search** | **String**| A search term. | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **id** | **Number**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **service** | **String**|  | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationHealthLogsRead"></a>
# **mspIntegrationHealthLogsRead**
> TeamIntegrationLogEventWithTeam mspIntegrationHealthLogsRead(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mspIntegrationHealthLogsRead(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**TeamIntegrationLogEventWithTeam**](TeamIntegrationLogEventWithTeam.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsCreate"></a>
# **mspIntegrationsCreate**
> mspIntegrationsCreate(companyId, integrationType)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var integrationType = "integrationType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsCreate(companyId, integrationType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **integrationType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsDelete"></a>
# **mspIntegrationsDelete**
> mspIntegrationsDelete(companyId, id, integrationType)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var integrationType = "integrationType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsDelete(companyId, id, integrationType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **integrationType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsList"></a>
# **mspIntegrationsList**
> mspIntegrationsList(companyId, integrationType, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var integrationType = "integrationType_example"; // String | 

var opts = { 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsList(companyId, integrationType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **integrationType** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsPartialUpdate"></a>
# **mspIntegrationsPartialUpdate**
> mspIntegrationsPartialUpdate(companyId, id, integrationType)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var integrationType = "integrationType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsPartialUpdate(companyId, id, integrationType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **integrationType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsRead"></a>
# **mspIntegrationsRead**
> mspIntegrationsRead(companyId, id, integrationType)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var integrationType = "integrationType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsRead(companyId, id, integrationType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **integrationType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mspIntegrationsUpdate"></a>
# **mspIntegrationsUpdate**
> mspIntegrationsUpdate(companyId, id, integrationType)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MspApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var integrationType = "integrationType_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.mspIntegrationsUpdate(companyId, id, integrationType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **integrationType** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

