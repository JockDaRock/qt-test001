# PerchApi.AlertsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**alertsCreate**](AlertsApi.md#alertsCreate) | **POST** /{version}/alerts | 
[**alertsDelete**](AlertsApi.md#alertsDelete) | **DELETE** /{version}/alerts/{id} | 
[**alertsList**](AlertsApi.md#alertsList) | **GET** /{version}/alerts | 
[**alertsPartialUpdate**](AlertsApi.md#alertsPartialUpdate) | **PATCH** /{version}/alerts/{id} | 
[**alertsRead**](AlertsApi.md#alertsRead) | **GET** /{version}/alerts/{id} | 
[**alertsSuppressionsBulkCidrs**](AlertsApi.md#alertsSuppressionsBulkCidrs) | **POST** /alerts/suppressions/bulk-cidrs | 
[**alertsSuppressionsCreate**](AlertsApi.md#alertsSuppressionsCreate) | **POST** /alerts/suppressions | 
[**alertsSuppressionsDelete**](AlertsApi.md#alertsSuppressionsDelete) | **DELETE** /alerts/suppressions/{id} | 
[**alertsSuppressionsList**](AlertsApi.md#alertsSuppressionsList) | **GET** /alerts/suppressions | 
[**alertsUpdate**](AlertsApi.md#alertsUpdate) | **PUT** /{version}/alerts/{id} | 


<a name="alertsCreate"></a>
# **alertsCreate**
> alertsCreate(version)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsCreate(version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsDelete"></a>
# **alertsDelete**
> alertsDelete(id, version)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsDelete(id, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsList"></a>
# **alertsList**
> alertsList(version, opts)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var version = "version_example"; // String | 

var opts = { 
  'closed': "closed_example", // String | 
  'closedAt': "closedAt_example", // String | 
  'communityId': "communityId_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'destIp': "destIp_example", // String | 
  'destPort': "destPort_example", // String | 
  'fullUrl': "fullUrl_example", // String | 
  'id': "id_example", // String | 
  'indicatorId': "indicatorId_example", // String | 
  'indicatorLoaded': "indicatorLoaded_example", // String | 
  'observableId': "observableId_example", // String | 
  'protocol': "protocol_example", // String | 
  'sensorId': "sensorId_example", // String | 
  'sensorName': "sensorName_example", // String | 
  'socStatus': "socStatus_example", // String | 
  'srcIp': "srcIp_example", // String | 
  'srcPort': "srcPort_example", // String | 
  'status': "status_example", // String | 
  'statusUpdatedAt': "statusUpdatedAt_example", // String | 
  'teamId': "teamId_example", // String | 
  'title': "title_example", // String | 
  'ts': "ts_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'statusUpdatedAtGte': "statusUpdatedAtGte_example", // String | 
  'statusUpdatedAtLte': "statusUpdatedAtLte_example", // String | 
  'statusUpdatedAtGt': "statusUpdatedAtGt_example", // String | 
  'statusUpdatedAtLt': "statusUpdatedAtLt_example", // String | 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsList(version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **closed** | **String**|  | [optional] 
 **closedAt** | **String**|  | [optional] 
 **communityId** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **destIp** | **String**|  | [optional] 
 **destPort** | **String**|  | [optional] 
 **fullUrl** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 
 **indicatorId** | **String**|  | [optional] 
 **indicatorLoaded** | **String**|  | [optional] 
 **observableId** | **String**|  | [optional] 
 **protocol** | **String**|  | [optional] 
 **sensorId** | **String**|  | [optional] 
 **sensorName** | **String**|  | [optional] 
 **socStatus** | **String**|  | [optional] 
 **srcIp** | **String**|  | [optional] 
 **srcPort** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **statusUpdatedAt** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **title** | **String**|  | [optional] 
 **ts** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **statusUpdatedAtGte** | **String**|  | [optional] 
 **statusUpdatedAtLte** | **String**|  | [optional] 
 **statusUpdatedAtGt** | **String**|  | [optional] 
 **statusUpdatedAtLt** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsPartialUpdate"></a>
# **alertsPartialUpdate**
> alertsPartialUpdate(id, version)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsPartialUpdate(id, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsRead"></a>
# **alertsRead**
> alertsRead(id, version)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsRead(id, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsSuppressionsBulkCidrs"></a>
# **alertsSuppressionsBulkCidrs**
> AlertSuppression alertsSuppressionsBulkCidrs(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var data = new PerchApi.AlertSuppression(); // AlertSuppression | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertsSuppressionsBulkCidrs(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AlertSuppression**](AlertSuppression.md)|  | 

### Return type

[**AlertSuppression**](AlertSuppression.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsSuppressionsCreate"></a>
# **alertsSuppressionsCreate**
> AlertSuppression alertsSuppressionsCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var data = new PerchApi.AlertSuppression(); // AlertSuppression | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertsSuppressionsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AlertSuppression**](AlertSuppression.md)|  | 

### Return type

[**AlertSuppression**](AlertSuppression.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsSuppressionsDelete"></a>
# **alertsSuppressionsDelete**
> alertsSuppressionsDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsSuppressionsDelete(id, callback);
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

<a name="alertsSuppressionsList"></a>
# **alertsSuppressionsList**
> InlineResponse200 alertsSuppressionsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'p': 56, // Number | A page number within the paginated result set.
  'ps': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.alertsSuppressionsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **p** | **Number**| A page number within the paginated result set. | [optional] 
 **ps** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="alertsUpdate"></a>
# **alertsUpdate**
> alertsUpdate(id, version)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.AlertsApi();

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.alertsUpdate(id, version, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

