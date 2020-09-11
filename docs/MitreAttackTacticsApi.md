# PerchApi.MitreAttackTacticsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mitreAttackTacticsList**](MitreAttackTacticsApi.md#mitreAttackTacticsList) | **GET** /mitre-attack-tactics | 
[**mitreAttackTacticsRead**](MitreAttackTacticsApi.md#mitreAttackTacticsRead) | **GET** /mitre-attack-tactics/{id} | 


<a name="mitreAttackTacticsList"></a>
# **mitreAttackTacticsList**
> [MitreAttackTactic] mitreAttackTacticsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MitreAttackTacticsApi();

var opts = { 
  'attackDomain': "attackDomain_example", // String | 
  'isMappingEnabled': "isMappingEnabled_example", // String | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mitreAttackTacticsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attackDomain** | **String**|  | [optional] 
 **isMappingEnabled** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[MitreAttackTactic]**](MitreAttackTactic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="mitreAttackTacticsRead"></a>
# **mitreAttackTacticsRead**
> MitreAttackTactic mitreAttackTacticsRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MitreAttackTacticsApi();

var id = "id_example"; // String | MITRE ATT&CK Tactic ID, denoted as TAxxxx


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mitreAttackTacticsRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| MITRE ATT&CK Tactic ID, denoted as TAxxxx | 

### Return type

[**MitreAttackTactic**](MitreAttackTactic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

