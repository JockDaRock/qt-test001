# PerchApi.SensorApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sensorCommandCreate**](SensorApi.md#sensorCommandCreate) | **POST** /sensor/{sensor_id}/command | 
[**sensorCommandResultsPartialUpdate**](SensorApi.md#sensorCommandResultsPartialUpdate) | **PATCH** /sensor/command/results/{id} | 
[**sensorCommandResultsUpdate**](SensorApi.md#sensorCommandResultsUpdate) | **PUT** /sensor/command/results/{id} | 
[**sensorFilesDownloadList**](SensorApi.md#sensorFilesDownloadList) | **GET** /sensor/files/{file_alias}/download | 
[**sensorFilesDownloadList_0**](SensorApi.md#sensorFilesDownloadList_0) | **GET** /sensor/{sensor_id}/files/{file_alias}/download | 
[**sensorFilesHashList**](SensorApi.md#sensorFilesHashList) | **GET** /sensor/files/hash | 
[**sensorFirewallBlacklistCreate**](SensorApi.md#sensorFirewallBlacklistCreate) | **POST** /sensor/{company_id}/firewall/blacklist | 
[**sensorFirewallBlacklistDelete**](SensorApi.md#sensorFirewallBlacklistDelete) | **DELETE** /sensor/{company_id}/firewall/blacklist/{id} | 
[**sensorFirewallBlacklistList**](SensorApi.md#sensorFirewallBlacklistList) | **GET** /sensor/{company_id}/firewall/blacklist | 
[**sensorFirewallBlacklistPartialUpdate**](SensorApi.md#sensorFirewallBlacklistPartialUpdate) | **PATCH** /sensor/{company_id}/firewall/blacklist/{id} | 
[**sensorFirewallBlacklistRead**](SensorApi.md#sensorFirewallBlacklistRead) | **GET** /sensor/{company_id}/firewall/blacklist/{id} | 
[**sensorFirewallBlacklistUpdate**](SensorApi.md#sensorFirewallBlacklistUpdate) | **PUT** /sensor/{company_id}/firewall/blacklist/{id} | 
[**sensorHealthMeCreate**](SensorApi.md#sensorHealthMeCreate) | **POST** /sensor/health/me | 
[**sensorImagesDirectList**](SensorApi.md#sensorImagesDirectList) | **GET** /sensor/images/direct | 
[**sensorImagesHashList**](SensorApi.md#sensorImagesHashList) | **GET** /sensor/images/hash | 
[**sensorMogaList**](SensorApi.md#sensorMogaList) | **GET** /sensor/moga | Search indicators and sensor network trafic.
[**sensorMogaRead**](SensorApi.md#sensorMogaRead) | **GET** /sensor/moga/{widget_name} | Search indicators and sensor network trafic.
[**sensorObservableBacktestCreate**](SensorApi.md#sensorObservableBacktestCreate) | **POST** /sensor/observable/backtest | 


<a name="sensorCommandCreate"></a>
# **sensorCommandCreate**
> SensorCommand sensorCommandCreate(sensorId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var sensorId = "sensorId_example"; // String | 

var data = new PerchApi.SensorCommand(); // SensorCommand | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorCommandCreate(sensorId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensorId** | **String**|  | 
 **data** | [**SensorCommand**](SensorCommand.md)|  | 

### Return type

[**SensorCommand**](SensorCommand.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorCommandResultsPartialUpdate"></a>
# **sensorCommandResultsPartialUpdate**
> SensorCommandResult sensorCommandResultsPartialUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var id = "id_example"; // String | 

var data = new PerchApi.SensorCommandResult(); // SensorCommandResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorCommandResultsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**SensorCommandResult**](SensorCommandResult.md)|  | 

### Return type

[**SensorCommandResult**](SensorCommandResult.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorCommandResultsUpdate"></a>
# **sensorCommandResultsUpdate**
> SensorCommandResult sensorCommandResultsUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var id = "id_example"; // String | 

var data = new PerchApi.SensorCommandResult(); // SensorCommandResult | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorCommandResultsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**SensorCommandResult**](SensorCommandResult.md)|  | 

### Return type

[**SensorCommandResult**](SensorCommandResult.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFilesDownloadList"></a>
# **sensorFilesDownloadList**
> sensorFilesDownloadList(fileAlias)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var fileAlias = "fileAlias_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorFilesDownloadList(fileAlias, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAlias** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFilesDownloadList_0"></a>
# **sensorFilesDownloadList_0**
> sensorFilesDownloadList_0(fileAlias, sensorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var fileAlias = "fileAlias_example"; // String | 

var sensorId = "sensorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorFilesDownloadList_0(fileAlias, sensorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileAlias** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFilesHashList"></a>
# **sensorFilesHashList**
> sensorFilesHashList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorFilesHashList(callback);
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

<a name="sensorFirewallBlacklistCreate"></a>
# **sensorFirewallBlacklistCreate**
> Blacklist sensorFirewallBlacklistCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.Blacklist(); // Blacklist | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorFirewallBlacklistCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**Blacklist**](Blacklist.md)|  | 

### Return type

[**Blacklist**](Blacklist.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFirewallBlacklistDelete"></a>
# **sensorFirewallBlacklistDelete**
> sensorFirewallBlacklistDelete(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorFirewallBlacklistDelete(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFirewallBlacklistList"></a>
# **sensorFirewallBlacklistList**
> InlineResponse20011 sensorFirewallBlacklistList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'search': "search_example", // String | A search term.
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
apiInstance.sensorFirewallBlacklistList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **search** | **String**| A search term. | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFirewallBlacklistPartialUpdate"></a>
# **sensorFirewallBlacklistPartialUpdate**
> Blacklist sensorFirewallBlacklistPartialUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.Blacklist(); // Blacklist | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorFirewallBlacklistPartialUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Blacklist**](Blacklist.md)|  | 

### Return type

[**Blacklist**](Blacklist.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFirewallBlacklistRead"></a>
# **sensorFirewallBlacklistRead**
> Blacklist sensorFirewallBlacklistRead(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorFirewallBlacklistRead(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Blacklist**](Blacklist.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorFirewallBlacklistUpdate"></a>
# **sensorFirewallBlacklistUpdate**
> Blacklist sensorFirewallBlacklistUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.Blacklist(); // Blacklist | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sensorFirewallBlacklistUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Blacklist**](Blacklist.md)|  | 

### Return type

[**Blacklist**](Blacklist.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorHealthMeCreate"></a>
# **sensorHealthMeCreate**
> sensorHealthMeCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorHealthMeCreate(callback);
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

<a name="sensorImagesDirectList"></a>
# **sensorImagesDirectList**
> sensorImagesDirectList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorImagesDirectList(callback);
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

<a name="sensorImagesHashList"></a>
# **sensorImagesHashList**
> sensorImagesHashList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorImagesHashList(callback);
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

<a name="sensorMogaList"></a>
# **sensorMogaList**
> sensorMogaList()

Search indicators and sensor network trafic.

Example response: <pre class=\"highlight javascript\" data-language=\"javascript\"> {     \"indicators\": [         {             \"id\": \"EmergingThreats:Indicator-2807118\",             \"title\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"tlp\": null,             \"description\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"company\": 35,             \"community\": 10,             \"timestamp\": \"2017-08-08T04:27:06.350975\"         },         {             \"id\": \"opensource:indicator-401c6845-92f7-4401-b71e-fc9913ac3ed3\",             \"title\": \"phishTank.com id:4666368 with malicious URL:http://adwcrds-google.com/...\",             \"tlp\": \"WHITE\",             \"description\": \"This URL:[http://adwcrds-google.com/] was identified by phishtank.com as part of a phishing email. This URL appears to still be online as of 2017-01-15T22:44:53+00:00. More detailed infomation can be found at http://www.phishtank.com/phish_detail.php?phish_id=4666368\",             \"company\": null,             \"community\": 1,             \"timestamp\": \"2017-01-15T22:44:53+00:00\"         }     ],     \"community_indicator_counts\": {         \"1\": 17,         \"10\": 1     },     \"tlp_indicator_counts\": {         \"WHITE\": 17,         \"GREEN\": 0,         \"AMBER\": 0,         \"RED\": 0,         \"null\": 1     },     \"activities_per_day\": {         \"10/28\": 0,         \"10/29\": 0,         \"10/30\": 0,         \"10/31\": 0,         \"11/1\": 0,         \"11/2\": 0,         \"11/3\": 0,         \"11/4\": 0,         \"11/5\": 0,         \"11/6\": 0,         \"11/7\": 0,         \"11/8\": 0     },     \"activities_per_community\": {         \"1\": 20,         \"5\": 20,         \"6\": 20,         \"8\": 2163     },     \"activities_per_industry\": {},     \"activities_per_company_size\": {         \"0\": 0,         \"1 to 5\": 0,         \"6 to 10\": 0,         \"11 to 25\": 0,         \"25 to 50\": 0,         \"50 to 75\": 0,         \"75 to 100\": 0,         \"More than 100\": 0,         \"Decline to specify\": 20     } } </pre>

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorMogaList(callback);
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

<a name="sensorMogaRead"></a>
# **sensorMogaRead**
> sensorMogaRead(widgetName)

Search indicators and sensor network trafic.

Example response: <pre class=\"highlight javascript\" data-language=\"javascript\"> {     \"indicators\": [         {             \"id\": \"EmergingThreats:Indicator-2807118\",             \"title\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"tlp\": null,             \"description\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"company\": 35,             \"community\": 10,             \"timestamp\": \"2017-08-08T04:27:06.350975\"         },         {             \"id\": \"opensource:indicator-401c6845-92f7-4401-b71e-fc9913ac3ed3\",             \"title\": \"phishTank.com id:4666368 with malicious URL:http://adwcrds-google.com/...\",             \"tlp\": \"WHITE\",             \"description\": \"This URL:[http://adwcrds-google.com/] was identified by phishtank.com as part of a phishing email. This URL appears to still be online as of 2017-01-15T22:44:53+00:00. More detailed infomation can be found at http://www.phishtank.com/phish_detail.php?phish_id=4666368\",             \"company\": null,             \"community\": 1,             \"timestamp\": \"2017-01-15T22:44:53+00:00\"         }     ],     \"community_indicator_counts\": {         \"1\": 17,         \"10\": 1     },     \"tlp_indicator_counts\": {         \"WHITE\": 17,         \"GREEN\": 0,         \"AMBER\": 0,         \"RED\": 0,         \"null\": 1     },     \"activities_per_day\": {         \"10/28\": 0,         \"10/29\": 0,         \"10/30\": 0,         \"10/31\": 0,         \"11/1\": 0,         \"11/2\": 0,         \"11/3\": 0,         \"11/4\": 0,         \"11/5\": 0,         \"11/6\": 0,         \"11/7\": 0,         \"11/8\": 0     },     \"activities_per_community\": {         \"1\": 20,         \"5\": 20,         \"6\": 20,         \"8\": 2163     },     \"activities_per_industry\": {},     \"activities_per_company_size\": {         \"0\": 0,         \"1 to 5\": 0,         \"6 to 10\": 0,         \"11 to 25\": 0,         \"25 to 50\": 0,         \"50 to 75\": 0,         \"75 to 100\": 0,         \"More than 100\": 0,         \"Decline to specify\": 20     } } </pre>

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var widgetName = "widgetName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorMogaRead(widgetName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **widgetName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sensorObservableBacktestCreate"></a>
# **sensorObservableBacktestCreate**
> sensorObservableBacktestCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SensorApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sensorObservableBacktestCreate(callback);
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

