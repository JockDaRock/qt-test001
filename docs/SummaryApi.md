# PerchApi.SummaryApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**summaryCommunityList**](SummaryApi.md#summaryCommunityList) | **GET** /summary/community | 
[**summaryCommunityRead**](SummaryApi.md#summaryCommunityRead) | **GET** /summary/community/{id} | 


<a name="summaryCommunityList"></a>
# **summaryCommunityList**
> summaryCommunityList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SummaryApi();

var opts = { 
  'id': 8.14, // Number | 
  'name': "name_example", // String | 
  'teamId': "teamId_example", // String | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.summaryCommunityList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | [optional] 
 **name** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="summaryCommunityRead"></a>
# **summaryCommunityRead**
> summaryCommunityRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SummaryApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.summaryCommunityRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

