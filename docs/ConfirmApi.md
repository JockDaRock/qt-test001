# PerchApi.ConfirmApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmCreate**](ConfirmApi.md#confirmCreate) | **POST** /confirm | 
[**confirmSendCreate**](ConfirmApi.md#confirmSendCreate) | **POST** /confirm/send | 


<a name="confirmCreate"></a>
# **confirmCreate**
> confirmCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ConfirmApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmSendCreate"></a>
# **confirmSendCreate**
> confirmSendCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.ConfirmApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmSendCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

