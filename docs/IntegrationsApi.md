# PerchApi.IntegrationsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integrationsLatest**](IntegrationsApi.md#integrationsLatest) | **GET** /integrations/integration-health-logs | 


<a name="integrationsLatest"></a>
# **integrationsLatest**
> InlineResponse2002 integrationsLatest(opts)



Returns the most recent TeamIntegrationLogEvent for every integration.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.IntegrationsApi();

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
apiInstance.integrationsLatest(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

