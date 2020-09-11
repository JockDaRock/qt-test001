# PerchApi.CommentsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentsIndicatorCreate**](CommentsApi.md#commentsIndicatorCreate) | **POST** /comments/indicator | 
[**commentsIndicatorDelete**](CommentsApi.md#commentsIndicatorDelete) | **DELETE** /comments/indicator/{id} | 
[**commentsIndicatorPartialUpdate**](CommentsApi.md#commentsIndicatorPartialUpdate) | **PATCH** /comments/indicator/{id} | 
[**commentsIndicatorUpdate**](CommentsApi.md#commentsIndicatorUpdate) | **PUT** /comments/indicator/{id} | 


<a name="commentsIndicatorCreate"></a>
# **commentsIndicatorCreate**
> CommentSerializer commentsIndicatorCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommentsApi();

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commentsIndicatorCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commentsIndicatorDelete"></a>
# **commentsIndicatorDelete**
> commentsIndicatorDelete(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommentsApi();

var id = 56; // Number | A unique integer value identifying this comment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.commentsIndicatorDelete(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this comment. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commentsIndicatorPartialUpdate"></a>
# **commentsIndicatorPartialUpdate**
> CommentSerializer commentsIndicatorPartialUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommentsApi();

var id = 56; // Number | A unique integer value identifying this comment.

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commentsIndicatorPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this comment. | 
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="commentsIndicatorUpdate"></a>
# **commentsIndicatorUpdate**
> CommentSerializer commentsIndicatorUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommentsApi();

var id = 56; // Number | A unique integer value identifying this comment.

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.commentsIndicatorUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| A unique integer value identifying this comment. | 
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

