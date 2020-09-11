# PerchApi.CommunityApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**communityFeedsCreate**](CommunityApi.md#communityFeedsCreate) | **POST** /community/{community_id}/feeds | 
[**communityFilesCommentsCreate**](CommunityApi.md#communityFilesCommentsCreate) | **POST** /community/{community_id}/files/{file_id}/comments | 
[**communityFilesCommentsDelete**](CommunityApi.md#communityFilesCommentsDelete) | **DELETE** /community/{community_id}/files/{file_id}/comments/{id} | 
[**communityFilesCommentsPartialUpdate**](CommunityApi.md#communityFilesCommentsPartialUpdate) | **PATCH** /community/{community_id}/files/{file_id}/comments/{id} | 
[**communityFilesCommentsUpdate**](CommunityApi.md#communityFilesCommentsUpdate) | **PUT** /community/{community_id}/files/{file_id}/comments/{id} | 
[**communityFilesCreate**](CommunityApi.md#communityFilesCreate) | **POST** /community/{community_id}/files | 
[**communityFilesDelete**](CommunityApi.md#communityFilesDelete) | **DELETE** /community/{community_id}/files/{id} | 
[**communityFilesDownloadList**](CommunityApi.md#communityFilesDownloadList) | **GET** /community/{community_id}/files/{file_id}/download | 
[**communityFilesList**](CommunityApi.md#communityFilesList) | **GET** /community/{community_id}/files | 
[**communityFilesRead**](CommunityApi.md#communityFilesRead) | **GET** /community/{community_id}/files/{id} | 
[**communityIndicatorsList**](CommunityApi.md#communityIndicatorsList) | **GET** /community/{community_id}/indicators | 
[**communitySuppressionsList**](CommunityApi.md#communitySuppressionsList) | **GET** /community/{community_id}/suppressions | 
[**communitySuppressionsRead**](CommunityApi.md#communitySuppressionsRead) | **GET** /community/{community_id}/suppressions/{id} | 


<a name="communityFeedsCreate"></a>
# **communityFeedsCreate**
> communityFeedsCreate(communityId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.communityFeedsCreate(communityId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

<a name="communityFilesCommentsCreate"></a>
# **communityFilesCommentsCreate**
> CommentSerializer communityFilesCommentsCreate(communityId, fileId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var fileId = "fileId_example"; // String | 

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communityFilesCommentsCreate(communityId, fileId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **fileId** | **String**|  | 
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesCommentsDelete"></a>
# **communityFilesCommentsDelete**
> communityFilesCommentsDelete(communityId, fileId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var fileId = "fileId_example"; // String | 

var id = 56; // Number | A unique integer value identifying this comment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.communityFilesCommentsDelete(communityId, fileId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **fileId** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this comment. | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesCommentsPartialUpdate"></a>
# **communityFilesCommentsPartialUpdate**
> CommentSerializer communityFilesCommentsPartialUpdate(communityId, fileId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var fileId = "fileId_example"; // String | 

var id = 56; // Number | A unique integer value identifying this comment.

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communityFilesCommentsPartialUpdate(communityId, fileId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **fileId** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this comment. | 
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesCommentsUpdate"></a>
# **communityFilesCommentsUpdate**
> CommentSerializer communityFilesCommentsUpdate(communityId, fileId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var fileId = "fileId_example"; // String | 

var id = 56; // Number | A unique integer value identifying this comment.

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communityFilesCommentsUpdate(communityId, fileId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **fileId** | **String**|  | 
 **id** | **Number**| A unique integer value identifying this comment. | 
 **data** | [**CommentSerializer**](CommentSerializer.md)|  | 

### Return type

[**CommentSerializer**](CommentSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesCreate"></a>
# **communityFilesCreate**
> CommunityFile communityFilesCreate(communityId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var data = new PerchApi.CommunityFile(); // CommunityFile | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communityFilesCreate(communityId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **data** | [**CommunityFile**](CommunityFile.md)|  | 

### Return type

[**CommunityFile**](CommunityFile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesDelete"></a>
# **communityFilesDelete**
> communityFilesDelete(communityId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.communityFilesDelete(communityId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesDownloadList"></a>
# **communityFilesDownloadList**
> communityFilesDownloadList(communityId, fileId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var fileId = "fileId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.communityFilesDownloadList(communityId, fileId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **fileId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesList"></a>
# **communityFilesList**
> [CommunityFile] communityFilesList(communityId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

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
apiInstance.communityFilesList(communityId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[CommunityFile]**](CommunityFile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityFilesRead"></a>
# **communityFilesRead**
> CommunityFile communityFilesRead(communityId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communityFilesRead(communityId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**CommunityFile**](CommunityFile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communityIndicatorsList"></a>
# **communityIndicatorsList**
> communityIndicatorsList(communityId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'p': 56, // Number | A page number within the paginated result set.
  'ps': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.communityIndicatorsList(communityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **p** | **Number**| A page number within the paginated result set. | [optional] 
 **ps** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communitySuppressionsList"></a>
# **communitySuppressionsList**
> InlineResponse2001 communitySuppressionsList(communityId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var opts = { 
  'indicatorId': "indicatorId_example", // String | 
  'scope': "scope_example", // String | 
  'reason': "reason_example", // String | 
  'reasonDetail': "reasonDetail_example", // String | 
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
apiInstance.communitySuppressionsList(communityId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **indicatorId** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **reason** | **String**|  | [optional] 
 **reasonDetail** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="communitySuppressionsRead"></a>
# **communitySuppressionsRead**
> CommunityAlertSuppression communitySuppressionsRead(communityId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CommunityApi();

var communityId = "communityId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.communitySuppressionsRead(communityId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **communityId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**CommunityAlertSuppression**](CommunityAlertSuppression.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

