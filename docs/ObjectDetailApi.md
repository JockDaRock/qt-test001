# PerchApi.ObjectDetailApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**objectDetailCommentsList**](ObjectDetailApi.md#objectDetailCommentsList) | **GET** /objectDetail/{indicator_id}/comments | 
[**objectDetailHistoryList**](ObjectDetailApi.md#objectDetailHistoryList) | **GET** /objectDetail/{indicator_id}/history | 
[**objectDetailRead**](ObjectDetailApi.md#objectDetailRead) | **GET** /objectDetail/{indicator_id} | 
[**objectDetailSightingsList**](ObjectDetailApi.md#objectDetailSightingsList) | **GET** /objectDetail/{indicator_id}/sightings | 
[**objectDetailSuppressionsList**](ObjectDetailApi.md#objectDetailSuppressionsList) | **GET** /objectDetail/{indicator_id}/suppressions | 


<a name="objectDetailCommentsList"></a>
# **objectDetailCommentsList**
> InlineResponse2006 objectDetailCommentsList(indicatorId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ObjectDetailApi();

var indicatorId = "indicatorId_example"; // String | 

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
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
apiInstance.objectDetailCommentsList(indicatorId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectDetailHistoryList"></a>
# **objectDetailHistoryList**
> objectDetailHistoryList(indicatorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ObjectDetailApi();

var indicatorId = "indicatorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.objectDetailHistoryList(indicatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectDetailRead"></a>
# **objectDetailRead**
> objectDetailRead(indicatorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ObjectDetailApi();

var indicatorId = "indicatorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.objectDetailRead(indicatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectDetailSightingsList"></a>
# **objectDetailSightingsList**
> objectDetailSightingsList(indicatorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ObjectDetailApi();

var indicatorId = "indicatorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.objectDetailSightingsList(indicatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="objectDetailSuppressionsList"></a>
# **objectDetailSuppressionsList**
> objectDetailSuppressionsList(indicatorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ObjectDetailApi();

var indicatorId = "indicatorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.objectDetailSuppressionsList(indicatorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

