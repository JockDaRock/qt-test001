# PerchApi.V2Api

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2AlertGroupingsByCustomValueCreate**](V2Api.md#v2AlertGroupingsByCustomValueCreate) | **POST** /v2/alert-groupings-by-custom-value | 
[**v2AlertGroupingsByCustomValueDelete**](V2Api.md#v2AlertGroupingsByCustomValueDelete) | **DELETE** /v2/alert-groupings-by-custom-value/{grouping_id} | 
[**v2AlertGroupingsByCustomValueList**](V2Api.md#v2AlertGroupingsByCustomValueList) | **GET** /v2/alert-groupings-by-custom-value | 
[**v2AlertGroupingsByCustomValuePartialUpdate**](V2Api.md#v2AlertGroupingsByCustomValuePartialUpdate) | **PATCH** /v2/alert-groupings-by-custom-value/{grouping_id} | 
[**v2AlertGroupingsByCustomValueRead**](V2Api.md#v2AlertGroupingsByCustomValueRead) | **GET** /v2/alert-groupings-by-custom-value/{grouping_id} | 
[**v2AlertGroupingsByCustomValueUpdate**](V2Api.md#v2AlertGroupingsByCustomValueUpdate) | **PUT** /v2/alert-groupings-by-custom-value/{grouping_id} | 
[**v2AlertGroupingsByIpsCreate**](V2Api.md#v2AlertGroupingsByIpsCreate) | **POST** /v2/alert-groupings-by-ips | 
[**v2AlertGroupingsByIpsDelete**](V2Api.md#v2AlertGroupingsByIpsDelete) | **DELETE** /v2/alert-groupings-by-ips/{grouping_id} | 
[**v2AlertGroupingsByIpsList**](V2Api.md#v2AlertGroupingsByIpsList) | **GET** /v2/alert-groupings-by-ips | 
[**v2AlertGroupingsByIpsPartialUpdate**](V2Api.md#v2AlertGroupingsByIpsPartialUpdate) | **PATCH** /v2/alert-groupings-by-ips/{grouping_id} | 
[**v2AlertGroupingsByIpsRead**](V2Api.md#v2AlertGroupingsByIpsRead) | **GET** /v2/alert-groupings-by-ips/{grouping_id} | 
[**v2AlertGroupingsByIpsUpdate**](V2Api.md#v2AlertGroupingsByIpsUpdate) | **PUT** /v2/alert-groupings-by-ips/{grouping_id} | 
[**v2AlertsSuppressionsBulkSuppressions**](V2Api.md#v2AlertsSuppressionsBulkSuppressions) | **POST** /v2/alerts/suppressions/bulk-suppressions | 
[**v2AlertsSuppressionsCreate**](V2Api.md#v2AlertsSuppressionsCreate) | **POST** /v2/alerts/suppressions | 
[**v2AlertsSuppressionsDelete**](V2Api.md#v2AlertsSuppressionsDelete) | **DELETE** /v2/alerts/suppressions/{id} | 
[**v2AlertsSuppressionsList**](V2Api.md#v2AlertsSuppressionsList) | **GET** /v2/alerts/suppressions | 
[**v2AlertsSuppressionsRead**](V2Api.md#v2AlertsSuppressionsRead) | **GET** /v2/alerts/suppressions/{id} | 
[**v2RegisterDeviceCreate**](V2Api.md#v2RegisterDeviceCreate) | **POST** /v2/register-device | 
[**v2RegisterUserCreate**](V2Api.md#v2RegisterUserCreate) | **POST** /v2/register_user | 


<a name="v2AlertGroupingsByCustomValueCreate"></a>
# **v2AlertGroupingsByCustomValueCreate**
> v2AlertGroupingsByCustomValueCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValueCreate(callback);
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

<a name="v2AlertGroupingsByCustomValueDelete"></a>
# **v2AlertGroupingsByCustomValueDelete**
> v2AlertGroupingsByCustomValueDelete(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValueDelete(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByCustomValueList"></a>
# **v2AlertGroupingsByCustomValueList**
> v2AlertGroupingsByCustomValueList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'pageNumber': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValueList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByCustomValuePartialUpdate"></a>
# **v2AlertGroupingsByCustomValuePartialUpdate**
> v2AlertGroupingsByCustomValuePartialUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValuePartialUpdate(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByCustomValueRead"></a>
# **v2AlertGroupingsByCustomValueRead**
> v2AlertGroupingsByCustomValueRead(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValueRead(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByCustomValueUpdate"></a>
# **v2AlertGroupingsByCustomValueUpdate**
> v2AlertGroupingsByCustomValueUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByCustomValueUpdate(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByIpsCreate"></a>
# **v2AlertGroupingsByIpsCreate**
> v2AlertGroupingsByIpsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsCreate(callback);
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

<a name="v2AlertGroupingsByIpsDelete"></a>
# **v2AlertGroupingsByIpsDelete**
> v2AlertGroupingsByIpsDelete(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsDelete(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByIpsList"></a>
# **v2AlertGroupingsByIpsList**
> v2AlertGroupingsByIpsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'pageNumber': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByIpsPartialUpdate"></a>
# **v2AlertGroupingsByIpsPartialUpdate**
> v2AlertGroupingsByIpsPartialUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsPartialUpdate(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByIpsRead"></a>
# **v2AlertGroupingsByIpsRead**
> v2AlertGroupingsByIpsRead(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsRead(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertGroupingsByIpsUpdate"></a>
# **v2AlertGroupingsByIpsUpdate**
> v2AlertGroupingsByIpsUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertGroupingsByIpsUpdate(groupingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupingId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2AlertsSuppressionsBulkSuppressions"></a>
# **v2AlertsSuppressionsBulkSuppressions**
> v2AlertsSuppressionsBulkSuppressions()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertsSuppressionsBulkSuppressions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v2AlertsSuppressionsCreate"></a>
# **v2AlertsSuppressionsCreate**
> v2AlertsSuppressionsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertsSuppressionsCreate(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v2AlertsSuppressionsDelete"></a>
# **v2AlertsSuppressionsDelete**
> v2AlertsSuppressionsDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertsSuppressionsDelete(id, callback);
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
 - **Accept**: application/json, text/csv

<a name="v2AlertsSuppressionsList"></a>
# **v2AlertsSuppressionsList**
> v2AlertsSuppressionsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var opts = { 
  'indicatorId': "indicatorId_example", // String | 
  'scope': "scope_example", // String | 
  'reason': "reason_example", // String | 
  'reasonDetail': "reasonDetail_example", // String | 
  'teamId': "teamId_example", // String | 
  'suppressedAtGte': "suppressedAtGte_example", // String | 
  'suppressedAtLte': "suppressedAtLte_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'search': "search_example", // String | A search term.
  'pageNumber': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertsSuppressionsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **indicatorId** | **String**|  | [optional] 
 **scope** | **String**|  | [optional] 
 **reason** | **String**|  | [optional] 
 **reasonDetail** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **suppressedAtGte** | **String**|  | [optional] 
 **suppressedAtLte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **search** | **String**| A search term. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v2AlertsSuppressionsRead"></a>
# **v2AlertsSuppressionsRead**
> v2AlertsSuppressionsRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v2AlertsSuppressionsRead(id, callback);
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
 - **Accept**: application/json, text/csv

<a name="v2RegisterDeviceCreate"></a>
# **v2RegisterDeviceCreate**
> RegisterDevice v2RegisterDeviceCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var data = new PerchApi.RegisterDevice(); // RegisterDevice | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v2RegisterDeviceCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**RegisterDevice**](RegisterDevice.md)|  | 

### Return type

[**RegisterDevice**](RegisterDevice.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2RegisterUserCreate"></a>
# **v2RegisterUserCreate**
> RegisterUser v2RegisterUserCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V2Api();

var data = new PerchApi.RegisterUser(); // RegisterUser | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v2RegisterUserCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**RegisterUser**](RegisterUser.md)|  | 

### Return type

[**RegisterUser**](RegisterUser.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

