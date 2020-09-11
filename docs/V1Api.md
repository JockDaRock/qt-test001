# PerchApi.V1Api

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AlertGroupingsByIpsCreate**](V1Api.md#v1AlertGroupingsByIpsCreate) | **POST** /v1/alert-groupings-by-ips | 
[**v1AlertGroupingsByIpsDelete**](V1Api.md#v1AlertGroupingsByIpsDelete) | **DELETE** /v1/alert-groupings-by-ips/{grouping_id} | 
[**v1AlertGroupingsByIpsList**](V1Api.md#v1AlertGroupingsByIpsList) | **GET** /v1/alert-groupings-by-ips | 
[**v1AlertGroupingsByIpsPartialUpdate**](V1Api.md#v1AlertGroupingsByIpsPartialUpdate) | **PATCH** /v1/alert-groupings-by-ips/{grouping_id} | 
[**v1AlertGroupingsByIpsRead**](V1Api.md#v1AlertGroupingsByIpsRead) | **GET** /v1/alert-groupings-by-ips/{grouping_id} | 
[**v1AlertGroupingsByIpsUpdate**](V1Api.md#v1AlertGroupingsByIpsUpdate) | **PUT** /v1/alert-groupings-by-ips/{grouping_id} | 
[**v1AlertsSuppressionsCreate**](V1Api.md#v1AlertsSuppressionsCreate) | **POST** /v1/alerts/suppressions | 
[**v1AlertsSuppressionsDelete**](V1Api.md#v1AlertsSuppressionsDelete) | **DELETE** /v1/alerts/suppressions/{id} | 
[**v1AlertsSuppressionsList**](V1Api.md#v1AlertsSuppressionsList) | **GET** /v1/alerts/suppressions | 
[**v1AlertsSuppressionsPartialUpdate**](V1Api.md#v1AlertsSuppressionsPartialUpdate) | **PATCH** /v1/alerts/suppressions/{id} | 
[**v1AlertsSuppressionsRead**](V1Api.md#v1AlertsSuppressionsRead) | **GET** /v1/alerts/suppressions/{id} | 
[**v1AlertsSuppressionsUpdate**](V1Api.md#v1AlertsSuppressionsUpdate) | **PUT** /v1/alerts/suppressions/{id} | 
[**v1CompanyDevicesCreate**](V1Api.md#v1CompanyDevicesCreate) | **POST** /v1/company/{company_id}/devices | 
[**v1CompanyDevicesDelete**](V1Api.md#v1CompanyDevicesDelete) | **DELETE** /v1/company/{company_id}/devices/{id} | 
[**v1CompanyDevicesList**](V1Api.md#v1CompanyDevicesList) | **GET** /v1/company/{company_id}/devices | 
[**v1CompanyDevicesPartialUpdate**](V1Api.md#v1CompanyDevicesPartialUpdate) | **PATCH** /v1/company/{company_id}/devices/{id} | 
[**v1CompanyDevicesRead**](V1Api.md#v1CompanyDevicesRead) | **GET** /v1/company/{company_id}/devices/{id} | 
[**v1CompanyDevicesUpdate**](V1Api.md#v1CompanyDevicesUpdate) | **PUT** /v1/company/{company_id}/devices/{id} | 
[**v1CompanyIndicatorsList**](V1Api.md#v1CompanyIndicatorsList) | **GET** /v1/company/{company_id}/indicators | 
[**v1CompanyIndicatorsRead**](V1Api.md#v1CompanyIndicatorsRead) | **GET** /v1/company/{company_id}/indicators/{id} | 
[**v1CompanyIntegrationServiceCreate**](V1Api.md#v1CompanyIntegrationServiceCreate) | **POST** /v1/company/{company_id}/integration-service/{route} | 
[**v1CompanyIntegrationServiceRead**](V1Api.md#v1CompanyIntegrationServiceRead) | **GET** /v1/company/{company_id}/integration-service/{route} | 
[**v1CompanyLoginsList**](V1Api.md#v1CompanyLoginsList) | **GET** /v1/company/{company_id}/logins | 
[**v1CompanyMemberDelete**](V1Api.md#v1CompanyMemberDelete) | **DELETE** /v1/company/{company_id}/member/{user_id} | 
[**v1CompanyMemberList**](V1Api.md#v1CompanyMemberList) | **GET** /v1/company/{company_id}/member | 
[**v1CompanyMemberPartialUpdate**](V1Api.md#v1CompanyMemberPartialUpdate) | **PATCH** /v1/company/{company_id}/member/{user_id} | 
[**v1CompanyMemberRead**](V1Api.md#v1CompanyMemberRead) | **GET** /v1/company/{company_id}/member/{user_id} | 
[**v1CompanyMemberSensorsDelete**](V1Api.md#v1CompanyMemberSensorsDelete) | **DELETE** /v1/company/{company_id}/member/sensors/{user_id} | 
[**v1CompanyMemberSensorsList**](V1Api.md#v1CompanyMemberSensorsList) | **GET** /v1/company/{company_id}/member/sensors | 
[**v1CompanyMemberSensorsPartialUpdate**](V1Api.md#v1CompanyMemberSensorsPartialUpdate) | **PATCH** /v1/company/{company_id}/member/sensors/{user_id} | 
[**v1CompanyMemberSensorsRead**](V1Api.md#v1CompanyMemberSensorsRead) | **GET** /v1/company/{company_id}/member/sensors/{user_id} | 
[**v1CompanyMemberSensorsUpdate**](V1Api.md#v1CompanyMemberSensorsUpdate) | **PUT** /v1/company/{company_id}/member/sensors/{user_id} | 
[**v1CompanyMemberUpdate**](V1Api.md#v1CompanyMemberUpdate) | **PUT** /v1/company/{company_id}/member/{user_id} | 
[**v1CompanyMfaSettingsPartialUpdate**](V1Api.md#v1CompanyMfaSettingsPartialUpdate) | **PATCH** /v1/company/{company_id}/mfa-settings | 
[**v1CompanyMfaSettingsRead**](V1Api.md#v1CompanyMfaSettingsRead) | **GET** /v1/company/{company_id}/mfa-settings | 
[**v1CompanySubnetsCreate**](V1Api.md#v1CompanySubnetsCreate) | **POST** /v1/company/{company_id}/subnets | 
[**v1CompanySubnetsDelete**](V1Api.md#v1CompanySubnetsDelete) | **DELETE** /v1/company/{company_id}/subnets/{id} | 
[**v1CompanySubnetsList**](V1Api.md#v1CompanySubnetsList) | **GET** /v1/company/{company_id}/subnets | 
[**v1CompanySubnetsPartialUpdate**](V1Api.md#v1CompanySubnetsPartialUpdate) | **PATCH** /v1/company/{company_id}/subnets/{id} | 
[**v1CompanySubnetsRead**](V1Api.md#v1CompanySubnetsRead) | **GET** /v1/company/{company_id}/subnets/{id} | 
[**v1CompanySubnetsUpdate**](V1Api.md#v1CompanySubnetsUpdate) | **PUT** /v1/company/{company_id}/subnets/{id} | 
[**v1EscalationsCreate**](V1Api.md#v1EscalationsCreate) | **POST** /v1/escalations | 
[**v1EscalationsDelete**](V1Api.md#v1EscalationsDelete) | **DELETE** /v1/escalations/{security_event_id} | 
[**v1EscalationsList**](V1Api.md#v1EscalationsList) | **GET** /v1/escalations | 
[**v1EscalationsPartialUpdate**](V1Api.md#v1EscalationsPartialUpdate) | **PATCH** /v1/escalations/{security_event_id} | 
[**v1EscalationsRead**](V1Api.md#v1EscalationsRead) | **GET** /v1/escalations/{security_event_id} | 
[**v1EscalationsUpdate**](V1Api.md#v1EscalationsUpdate) | **PUT** /v1/escalations/{security_event_id} | 
[**v1EventsCommonHostsCreate**](V1Api.md#v1EventsCommonHostsCreate) | **POST** /v1/events/common-hosts | 
[**v1EventsCommonValuesCreate**](V1Api.md#v1EventsCommonValuesCreate) | **POST** /v1/events/common-values | 
[**v1MarketplaceCollectionsAdd**](V1Api.md#v1MarketplaceCollectionsAdd) | **POST** /v1/marketplace/collections/{id}/add | 
[**v1MarketplaceCollectionsCreate**](V1Api.md#v1MarketplaceCollectionsCreate) | **POST** /v1/marketplace/collections | 
[**v1MarketplaceCollectionsDelete**](V1Api.md#v1MarketplaceCollectionsDelete) | **DELETE** /v1/marketplace/collections/{id} | 
[**v1MarketplaceCollectionsList**](V1Api.md#v1MarketplaceCollectionsList) | **GET** /v1/marketplace/collections | 
[**v1MarketplaceCollectionsPartialUpdate**](V1Api.md#v1MarketplaceCollectionsPartialUpdate) | **PATCH** /v1/marketplace/collections/{id} | 
[**v1MarketplaceCollectionsRead**](V1Api.md#v1MarketplaceCollectionsRead) | **GET** /v1/marketplace/collections/{id} | 
[**v1MarketplaceCollectionsRemoveCreate**](V1Api.md#v1MarketplaceCollectionsRemoveCreate) | **POST** /v1/marketplace/collections/{id}/remove | 
[**v1MarketplaceCollectionsRemoveDelete**](V1Api.md#v1MarketplaceCollectionsRemoveDelete) | **DELETE** /v1/marketplace/collections/{id}/remove | 
[**v1MarketplaceCollectionsUpdate**](V1Api.md#v1MarketplaceCollectionsUpdate) | **PUT** /v1/marketplace/collections/{id} | 
[**v1MarketplaceItemsAdd**](V1Api.md#v1MarketplaceItemsAdd) | **POST** /v1/marketplace/items/{id}/add | 
[**v1MarketplaceItemsCreate**](V1Api.md#v1MarketplaceItemsCreate) | **POST** /v1/marketplace/items | 
[**v1MarketplaceItemsDelete**](V1Api.md#v1MarketplaceItemsDelete) | **DELETE** /v1/marketplace/items/{id} | 
[**v1MarketplaceItemsList**](V1Api.md#v1MarketplaceItemsList) | **GET** /v1/marketplace/items | 
[**v1MarketplaceItemsPartialUpdate**](V1Api.md#v1MarketplaceItemsPartialUpdate) | **PATCH** /v1/marketplace/items/{id} | 
[**v1MarketplaceItemsRead**](V1Api.md#v1MarketplaceItemsRead) | **GET** /v1/marketplace/items/{id} | 
[**v1MarketplaceItemsRemoveCreate**](V1Api.md#v1MarketplaceItemsRemoveCreate) | **POST** /v1/marketplace/items/{id}/remove | 
[**v1MarketplaceItemsRemoveDelete**](V1Api.md#v1MarketplaceItemsRemoveDelete) | **DELETE** /v1/marketplace/items/{id}/remove | 
[**v1MarketplaceItemsUpdate**](V1Api.md#v1MarketplaceItemsUpdate) | **PUT** /v1/marketplace/items/{id} | 
[**v1MarketplaceStoresCreate**](V1Api.md#v1MarketplaceStoresCreate) | **POST** /v1/marketplace/{company_id}/stores | 
[**v1MarketplaceStoresCreate_0**](V1Api.md#v1MarketplaceStoresCreate_0) | **POST** /v1/marketplace/{company_id}/stores/{store_id}/{item_type} | 
[**v1MarketplaceStoresDelete**](V1Api.md#v1MarketplaceStoresDelete) | **DELETE** /v1/marketplace/{company_id}/stores/{id} | 
[**v1MarketplaceStoresDelete_0**](V1Api.md#v1MarketplaceStoresDelete_0) | **DELETE** /v1/marketplace/{company_id}/stores/{store_id}/{item_type}/{id} | 
[**v1MarketplaceStoresList**](V1Api.md#v1MarketplaceStoresList) | **GET** /v1/marketplace/{company_id}/stores | 
[**v1MarketplaceStoresList_0**](V1Api.md#v1MarketplaceStoresList_0) | **GET** /v1/marketplace/{company_id}/stores/{store_id}/{item_type} | 
[**v1MarketplaceStoresPartialUpdate**](V1Api.md#v1MarketplaceStoresPartialUpdate) | **PATCH** /v1/marketplace/{company_id}/stores/{id} | 
[**v1MarketplaceStoresPartialUpdate_0**](V1Api.md#v1MarketplaceStoresPartialUpdate_0) | **PATCH** /v1/marketplace/{company_id}/stores/{store_id}/{item_type}/{id} | 
[**v1MarketplaceStoresRead**](V1Api.md#v1MarketplaceStoresRead) | **GET** /v1/marketplace/{company_id}/stores/{id} | 
[**v1MarketplaceStoresRead_0**](V1Api.md#v1MarketplaceStoresRead_0) | **GET** /v1/marketplace/{company_id}/stores/{store_id}/{item_type}/{id} | 
[**v1MarketplaceStoresUpdate**](V1Api.md#v1MarketplaceStoresUpdate) | **PUT** /v1/marketplace/{company_id}/stores/{id} | 
[**v1MarketplaceStoresUpdate_0**](V1Api.md#v1MarketplaceStoresUpdate_0) | **PUT** /v1/marketplace/{company_id}/stores/{store_id}/{item_type}/{id} | 
[**v1MetricsOrganizationsList**](V1Api.md#v1MetricsOrganizationsList) | **GET** /v1/metrics/organizations | 
[**v1MetricsOrganizationsRead**](V1Api.md#v1MetricsOrganizationsRead) | **GET** /v1/metrics/organizations/{id} | 
[**v1MetricsSuppressionsAndEscalationsList**](V1Api.md#v1MetricsSuppressionsAndEscalationsList) | **GET** /v1/metrics/suppressions-and-escalations | 
[**v1MetricsSuppressionsAndEscalationsRead**](V1Api.md#v1MetricsSuppressionsAndEscalationsRead) | **GET** /v1/metrics/suppressions-and-escalations/{id} | 
[**v1MetricsTeamsAllStatsList**](V1Api.md#v1MetricsTeamsAllStatsList) | **GET** /v1/metrics/teams/all/stats | 
[**v1MsspsSlasCreate**](V1Api.md#v1MsspsSlasCreate) | **POST** /v1/mssps/{company_id}/slas | 
[**v1MsspsSlasDelete**](V1Api.md#v1MsspsSlasDelete) | **DELETE** /v1/mssps/{company_id}/slas/{id} | 
[**v1MsspsSlasList**](V1Api.md#v1MsspsSlasList) | **GET** /v1/mssps/{company_id}/slas | 
[**v1MsspsTeamsDelete**](V1Api.md#v1MsspsTeamsDelete) | **DELETE** /v1/mssps/{mssp_id}/teams/{company_id} | 
[**v1NewTeamRegistrationCreate**](V1Api.md#v1NewTeamRegistrationCreate) | **POST** /v1/new-team-registration | 
[**v1SecurityEventsCommentsCreate**](V1Api.md#v1SecurityEventsCommentsCreate) | **POST** /v1/security-events/comments | 
[**v1SecurityEventsCommentsDelete**](V1Api.md#v1SecurityEventsCommentsDelete) | **DELETE** /v1/security-events/comments/{id} | 
[**v1SecurityEventsCommentsList**](V1Api.md#v1SecurityEventsCommentsList) | **GET** /v1/security-events/comments | 
[**v1SecurityEventsCommentsPartialUpdate**](V1Api.md#v1SecurityEventsCommentsPartialUpdate) | **PATCH** /v1/security-events/comments/{id} | 
[**v1SecurityEventsCommentsUpdate**](V1Api.md#v1SecurityEventsCommentsUpdate) | **PUT** /v1/security-events/comments/{id} | 
[**v1SecurityEventsCreate**](V1Api.md#v1SecurityEventsCreate) | **POST** /v1/security-events | 
[**v1SecurityEventsDelete**](V1Api.md#v1SecurityEventsDelete) | **DELETE** /v1/security-events/{security_event_id} | 
[**v1SecurityEventsList**](V1Api.md#v1SecurityEventsList) | **GET** /v1/security-events | 
[**v1SecurityEventsPartialUpdate**](V1Api.md#v1SecurityEventsPartialUpdate) | **PATCH** /v1/security-events/{security_event_id} | 
[**v1SecurityEventsRead**](V1Api.md#v1SecurityEventsRead) | **GET** /v1/security-events/{security_event_id} | 
[**v1SecurityEventsStatusStatusCounts**](V1Api.md#v1SecurityEventsStatusStatusCounts) | **GET** /v1/security-events/status/counts | 
[**v1SecurityEventsUpdate**](V1Api.md#v1SecurityEventsUpdate) | **PUT** /v1/security-events/{security_event_id} | 
[**v1SensorFilesDownloadList**](V1Api.md#v1SensorFilesDownloadList) | **GET** /v1/sensor/files/{file_name}/download | 
[**v1SensorFilesDownloadList_0**](V1Api.md#v1SensorFilesDownloadList_0) | **GET** /v1/sensor/{sensor_id}/files/{file_name}/download | 
[**v1SensorFilesHashList**](V1Api.md#v1SensorFilesHashList) | **GET** /v1/sensor/files/hash | 
[**v1SensorHealthRead**](V1Api.md#v1SensorHealthRead) | **GET** /v1/sensor/health/{id} | 
[**v1SingleTeam**](V1Api.md#v1SingleTeam) | **GET** /v1/usage/{company_id} | 
[**v1SupportedDevicesList**](V1Api.md#v1SupportedDevicesList) | **GET** /v1/supported_devices | 
[**v1SupportedDevicesRead**](V1Api.md#v1SupportedDevicesRead) | **GET** /v1/supported_devices/{id} | 
[**v1TeamsHealthList**](V1Api.md#v1TeamsHealthList) | **GET** /v1/teams/health | 
[**v1TeamsHealthRead**](V1Api.md#v1TeamsHealthRead) | **GET** /v1/teams/health/{id} | 
[**v1TeamsSensorsSummaryCreate**](V1Api.md#v1TeamsSensorsSummaryCreate) | **POST** /v1/teams/sensors/summary | 
[**v1TeamsSensorsSummaryDelete**](V1Api.md#v1TeamsSensorsSummaryDelete) | **DELETE** /v1/teams/sensors/summary/{id} | 
[**v1TeamsSensorsSummaryList**](V1Api.md#v1TeamsSensorsSummaryList) | **GET** /v1/teams/sensors/summary | 
[**v1TeamsSensorsSummaryPartialUpdate**](V1Api.md#v1TeamsSensorsSummaryPartialUpdate) | **PATCH** /v1/teams/sensors/summary/{id} | 
[**v1TeamsSensorsSummaryRead**](V1Api.md#v1TeamsSensorsSummaryRead) | **GET** /v1/teams/sensors/summary/{id} | 
[**v1TeamsSensorsSummaryUpdate**](V1Api.md#v1TeamsSensorsSummaryUpdate) | **PUT** /v1/teams/sensors/summary/{id} | 
[**v1UsageAllTeamsForUser**](V1Api.md#v1UsageAllTeamsForUser) | **GET** /v1/usage/all | 
[**v1UsageManagedTeams**](V1Api.md#v1UsageManagedTeams) | **GET** /v1/usage/{company_id}/managed-teams | 
[**v1UserLoginsList**](V1Api.md#v1UserLoginsList) | **GET** /v1/user/logins/{user_id} | 
[**v1UserMePartialUpdate**](V1Api.md#v1UserMePartialUpdate) | **PUT** /v1/user/me | 
[**v1UserMeRead**](V1Api.md#v1UserMeRead) | **GET** /v1/user/me | 
[**v1UserPartialUpdate**](V1Api.md#v1UserPartialUpdate) | **PUT** /v1/user/{user_id} | 
[**v1UserRead**](V1Api.md#v1UserRead) | **GET** /v1/user/{user_id} | 


<a name="v1AlertGroupingsByIpsCreate"></a>
# **v1AlertGroupingsByIpsCreate**
> v1AlertGroupingsByIpsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertGroupingsByIpsCreate(callback);
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

<a name="v1AlertGroupingsByIpsDelete"></a>
# **v1AlertGroupingsByIpsDelete**
> v1AlertGroupingsByIpsDelete(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertGroupingsByIpsDelete(groupingId, callback);
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

<a name="v1AlertGroupingsByIpsList"></a>
# **v1AlertGroupingsByIpsList**
> v1AlertGroupingsByIpsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
apiInstance.v1AlertGroupingsByIpsList(opts, callback);
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

<a name="v1AlertGroupingsByIpsPartialUpdate"></a>
# **v1AlertGroupingsByIpsPartialUpdate**
> v1AlertGroupingsByIpsPartialUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertGroupingsByIpsPartialUpdate(groupingId, callback);
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

<a name="v1AlertGroupingsByIpsRead"></a>
# **v1AlertGroupingsByIpsRead**
> v1AlertGroupingsByIpsRead(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertGroupingsByIpsRead(groupingId, callback);
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

<a name="v1AlertGroupingsByIpsUpdate"></a>
# **v1AlertGroupingsByIpsUpdate**
> v1AlertGroupingsByIpsUpdate(groupingId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var groupingId = "groupingId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertGroupingsByIpsUpdate(groupingId, callback);
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

<a name="v1AlertsSuppressionsCreate"></a>
# **v1AlertsSuppressionsCreate**
> v1AlertsSuppressionsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertsSuppressionsCreate(callback);
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

<a name="v1AlertsSuppressionsDelete"></a>
# **v1AlertsSuppressionsDelete**
> v1AlertsSuppressionsDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertsSuppressionsDelete(id, callback);
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

<a name="v1AlertsSuppressionsList"></a>
# **v1AlertsSuppressionsList**
> v1AlertsSuppressionsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
apiInstance.v1AlertsSuppressionsList(opts, callback);
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

<a name="v1AlertsSuppressionsPartialUpdate"></a>
# **v1AlertsSuppressionsPartialUpdate**
> v1AlertsSuppressionsPartialUpdate(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertsSuppressionsPartialUpdate(id, callback);
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

<a name="v1AlertsSuppressionsRead"></a>
# **v1AlertsSuppressionsRead**
> v1AlertsSuppressionsRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertsSuppressionsRead(id, callback);
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

<a name="v1AlertsSuppressionsUpdate"></a>
# **v1AlertsSuppressionsUpdate**
> v1AlertsSuppressionsUpdate(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1AlertsSuppressionsUpdate(id, callback);
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

<a name="v1CompanyDevicesCreate"></a>
# **v1CompanyDevicesCreate**
> v1CompanyDevicesCreate(companyId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyDevicesCreate(companyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyDevicesDelete"></a>
# **v1CompanyDevicesDelete**
> v1CompanyDevicesDelete(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyDevicesDelete(companyId, id, callback);
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

<a name="v1CompanyDevicesList"></a>
# **v1CompanyDevicesList**
> v1CompanyDevicesList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

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
apiInstance.v1CompanyDevicesList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
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

<a name="v1CompanyDevicesPartialUpdate"></a>
# **v1CompanyDevicesPartialUpdate**
> v1CompanyDevicesPartialUpdate(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyDevicesPartialUpdate(companyId, id, callback);
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

<a name="v1CompanyDevicesRead"></a>
# **v1CompanyDevicesRead**
> v1CompanyDevicesRead(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyDevicesRead(companyId, id, callback);
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

<a name="v1CompanyDevicesUpdate"></a>
# **v1CompanyDevicesUpdate**
> v1CompanyDevicesUpdate(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyDevicesUpdate(companyId, id, callback);
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

<a name="v1CompanyIndicatorsList"></a>
# **v1CompanyIndicatorsList**
> InlineResponse20013 v1CompanyIndicatorsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

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
apiInstance.v1CompanyIndicatorsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyIndicatorsRead"></a>
# **v1CompanyIndicatorsRead**
> ApiIndicatorSerializer v1CompanyIndicatorsRead(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanyIndicatorsRead(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ApiIndicatorSerializer**](ApiIndicatorSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyIntegrationServiceCreate"></a>
# **v1CompanyIntegrationServiceCreate**
> v1CompanyIntegrationServiceCreate(companyId, route)



Pass requests to the integration service

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var route = "route_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyIntegrationServiceCreate(companyId, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **route** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyIntegrationServiceRead"></a>
# **v1CompanyIntegrationServiceRead**
> v1CompanyIntegrationServiceRead(companyId, route)



Pass requests to the integration service

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var route = "route_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyIntegrationServiceRead(companyId, route, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **route** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyLoginsList"></a>
# **v1CompanyLoginsList**
> v1CompanyLoginsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

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
apiInstance.v1CompanyLoginsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/csv, application/json

<a name="v1CompanyMemberDelete"></a>
# **v1CompanyMemberDelete**
> v1CompanyMemberDelete(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberDelete(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberList"></a>
# **v1CompanyMemberList**
> v1CompanyMemberList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberList(companyId, opts, callback);
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

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberPartialUpdate"></a>
# **v1CompanyMemberPartialUpdate**
> v1CompanyMemberPartialUpdate(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberPartialUpdate(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberRead"></a>
# **v1CompanyMemberRead**
> v1CompanyMemberRead(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberRead(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberSensorsDelete"></a>
# **v1CompanyMemberSensorsDelete**
> v1CompanyMemberSensorsDelete(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberSensorsDelete(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberSensorsList"></a>
# **v1CompanyMemberSensorsList**
> v1CompanyMemberSensorsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberSensorsList(companyId, opts, callback);
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

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberSensorsPartialUpdate"></a>
# **v1CompanyMemberSensorsPartialUpdate**
> v1CompanyMemberSensorsPartialUpdate(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberSensorsPartialUpdate(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberSensorsRead"></a>
# **v1CompanyMemberSensorsRead**
> v1CompanyMemberSensorsRead(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberSensorsRead(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberSensorsUpdate"></a>
# **v1CompanyMemberSensorsUpdate**
> v1CompanyMemberSensorsUpdate(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberSensorsUpdate(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMemberUpdate"></a>
# **v1CompanyMemberUpdate**
> v1CompanyMemberUpdate(companyId, userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanyMemberUpdate(companyId, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMfaSettingsPartialUpdate"></a>
# **v1CompanyMfaSettingsPartialUpdate**
> TeamMfaSettings v1CompanyMfaSettingsPartialUpdate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.TeamMfaSettings(); // TeamMfaSettings | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanyMfaSettingsPartialUpdate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**TeamMfaSettings**](TeamMfaSettings.md)|  | 

### Return type

[**TeamMfaSettings**](TeamMfaSettings.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanyMfaSettingsRead"></a>
# **v1CompanyMfaSettingsRead**
> TeamMfaSettings v1CompanyMfaSettingsRead(companyId, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanyMfaSettingsRead(companyId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 

### Return type

[**TeamMfaSettings**](TeamMfaSettings.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanySubnetsCreate"></a>
# **v1CompanySubnetsCreate**
> NetworkSubnet v1CompanySubnetsCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.NetworkSubnet(); // NetworkSubnet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanySubnetsCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**NetworkSubnet**](NetworkSubnet.md)|  | 

### Return type

[**NetworkSubnet**](NetworkSubnet.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanySubnetsDelete"></a>
# **v1CompanySubnetsDelete**
> v1CompanySubnetsDelete(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1CompanySubnetsDelete(companyId, id, , callback);
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

<a name="v1CompanySubnetsList"></a>
# **v1CompanySubnetsList**
> InlineResponse20014 v1CompanySubnetsList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var opts = { 
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'search': "search_example", // String | A search term.
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
apiInstance.v1CompanySubnetsList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **search** | **String**| A search term. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanySubnetsPartialUpdate"></a>
# **v1CompanySubnetsPartialUpdate**
> NetworkSubnet v1CompanySubnetsPartialUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.NetworkSubnet(); // NetworkSubnet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanySubnetsPartialUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**NetworkSubnet**](NetworkSubnet.md)|  | 

### Return type

[**NetworkSubnet**](NetworkSubnet.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanySubnetsRead"></a>
# **v1CompanySubnetsRead**
> NetworkSubnet v1CompanySubnetsRead(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanySubnetsRead(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**NetworkSubnet**](NetworkSubnet.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1CompanySubnetsUpdate"></a>
# **v1CompanySubnetsUpdate**
> NetworkSubnet v1CompanySubnetsUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.NetworkSubnet(); // NetworkSubnet | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1CompanySubnetsUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**NetworkSubnet**](NetworkSubnet.md)|  | 

### Return type

[**NetworkSubnet**](NetworkSubnet.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1EscalationsCreate"></a>
# **v1EscalationsCreate**
> v1EscalationsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EscalationsCreate(callback);
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

<a name="v1EscalationsDelete"></a>
# **v1EscalationsDelete**
> v1EscalationsDelete(securityEventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EscalationsDelete(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1EscalationsList"></a>
# **v1EscalationsList**
> v1EscalationsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'id': "id_example", // String | 
  'teamId': "teamId_example", // String | 
  'indicatorId': "indicatorId_example", // String | 
  'indicatorTitle': "indicatorTitle_example", // String | 
  'communityId': "communityId_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'escalatedAt': "escalatedAt_example", // String | 
  'closedAt': "closedAt_example", // String | 
  'srcIp': "srcIp_example", // String | 
  'srcPort': "srcPort_example", // String | 
  'destIp': "destIp_example", // String | 
  'destPort': "destPort_example", // String | 
  'sensorId': "sensorId_example", // String | 
  'sensorName': "sensorName_example", // String | 
  'suppressionReason': "suppressionReason_example", // String | 
  'observableId': "observableId_example", // String | 
  'closed': "closed_example", // String | 
  'status': "status_example", // String | 
  'lastSeenAt': "lastSeenAt_example", // String | 
  'indicatorLoaded': "indicatorLoaded_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'protocol': "protocol_example", // String | 
  'fullUrl': "fullUrl_example", // String | 
  'flowId': "flowId_example", // String | 
  'hostIp': "hostIp_example", // String | 
  'srcOrDestIp': "srcOrDestIp_example", // String | 
  'srcFqdn': "srcFqdn_example", // String | 
  'destFqdn': "destFqdn_example", // String | 
  'wasSuppressed': "wasSuppressed_example", // String | 
  'hasSla': "hasSla_example", // String | 
  'isCompliant': "isCompliant_example", // String | 
  'totalSecondsRemaining': "totalSecondsRemaining_example", // String | 
  'totalSecondsRemainingLt': "totalSecondsRemainingLt_example", // String | 
  'totalSecondsRemainingLte': "totalSecondsRemainingLte_example", // String | 
  'totalSecondsRemainingGt': "totalSecondsRemainingGt_example", // String | 
  'totalSecondsRemainingGte': "totalSecondsRemainingGte_example", // String | 
  'search': "search_example", // String | 
  'escalatedAtGte': "escalatedAtGte_example", // String | 
  'escalatedAtLte': "escalatedAtLte_example", // String | 
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
apiInstance.v1EscalationsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **indicatorId** | **String**|  | [optional] 
 **indicatorTitle** | **String**|  | [optional] 
 **communityId** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **escalatedAt** | **String**|  | [optional] 
 **closedAt** | **String**|  | [optional] 
 **srcIp** | **String**|  | [optional] 
 **srcPort** | **String**|  | [optional] 
 **destIp** | **String**|  | [optional] 
 **destPort** | **String**|  | [optional] 
 **sensorId** | **String**|  | [optional] 
 **sensorName** | **String**|  | [optional] 
 **suppressionReason** | **String**|  | [optional] 
 **observableId** | **String**|  | [optional] 
 **closed** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **lastSeenAt** | **String**|  | [optional] 
 **indicatorLoaded** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **protocol** | **String**|  | [optional] 
 **fullUrl** | **String**|  | [optional] 
 **flowId** | **String**|  | [optional] 
 **hostIp** | **String**|  | [optional] 
 **srcOrDestIp** | **String**|  | [optional] 
 **srcFqdn** | **String**|  | [optional] 
 **destFqdn** | **String**|  | [optional] 
 **wasSuppressed** | **String**|  | [optional] 
 **hasSla** | **String**|  | [optional] 
 **isCompliant** | **String**|  | [optional] 
 **totalSecondsRemaining** | **String**|  | [optional] 
 **totalSecondsRemainingLt** | **String**|  | [optional] 
 **totalSecondsRemainingLte** | **String**|  | [optional] 
 **totalSecondsRemainingGt** | **String**|  | [optional] 
 **totalSecondsRemainingGte** | **String**|  | [optional] 
 **search** | **String**|  | [optional] 
 **escalatedAtGte** | **String**|  | [optional] 
 **escalatedAtLte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1EscalationsPartialUpdate"></a>
# **v1EscalationsPartialUpdate**
> v1EscalationsPartialUpdate(securityEventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EscalationsPartialUpdate(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1EscalationsRead"></a>
# **v1EscalationsRead**
> v1EscalationsRead(securityEventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EscalationsRead(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1EscalationsUpdate"></a>
# **v1EscalationsUpdate**
> v1EscalationsUpdate(securityEventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EscalationsUpdate(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1EventsCommonHostsCreate"></a>
# **v1EventsCommonHostsCreate**
> v1EventsCommonHostsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EventsCommonHostsCreate(callback);
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

<a name="v1EventsCommonValuesCreate"></a>
# **v1EventsCommonValuesCreate**
> v1EventsCommonValuesCreate()



Finds the custom_values available for suppression across all provided event_ids.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1EventsCommonValuesCreate(callback);
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

<a name="v1MarketplaceCollectionsAdd"></a>
# **v1MarketplaceCollectionsAdd**
> Collection v1MarketplaceCollectionsAdd(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.Collection(); // Collection | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsAdd(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsCreate"></a>
# **v1MarketplaceCollectionsCreate**
> Collection v1MarketplaceCollectionsCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var data = new PerchApi.Collection(); // Collection | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsDelete"></a>
# **v1MarketplaceCollectionsDelete**
> v1MarketplaceCollectionsDelete(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceCollectionsDelete(id, , callback);
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

<a name="v1MarketplaceCollectionsList"></a>
# **v1MarketplaceCollectionsList**
> InlineResponse20015 v1MarketplaceCollectionsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'isInstalled': "isInstalled_example", // String | 
  'itemType': "itemType_example", // String | 
  'visibleFor': "visibleFor_example", // String | 
  'store': "store_example", // String | 
  'collection': 8.14, // Number | 
  'search': "search_example", // String | 
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
apiInstance.v1MarketplaceCollectionsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isInstalled** | **String**|  | [optional] 
 **itemType** | **String**|  | [optional] 
 **visibleFor** | **String**|  | [optional] 
 **store** | **String**|  | [optional] 
 **collection** | **Number**|  | [optional] 
 **search** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsPartialUpdate"></a>
# **v1MarketplaceCollectionsPartialUpdate**
> Collection v1MarketplaceCollectionsPartialUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.Collection(); // Collection | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsRead"></a>
# **v1MarketplaceCollectionsRead**
> Collection v1MarketplaceCollectionsRead(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsRemoveCreate"></a>
# **v1MarketplaceCollectionsRemoveCreate**
> Collection v1MarketplaceCollectionsRemoveCreate(iddata)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.Collection(); // Collection | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsRemoveCreate(iddata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceCollectionsRemoveDelete"></a>
# **v1MarketplaceCollectionsRemoveDelete**
> v1MarketplaceCollectionsRemoveDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceCollectionsRemoveDelete(id, callback);
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

<a name="v1MarketplaceCollectionsUpdate"></a>
# **v1MarketplaceCollectionsUpdate**
> Collection v1MarketplaceCollectionsUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.Collection(); // Collection | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceCollectionsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**Collection**](Collection.md)|  | 

### Return type

[**Collection**](Collection.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsAdd"></a>
# **v1MarketplaceItemsAdd**
> MarketplacePolymorphic v1MarketplaceItemsAdd(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.MarketplacePolymorphic(); // MarketplacePolymorphic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsAdd(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**MarketplacePolymorphic**](MarketplacePolymorphic.md)|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsCreate"></a>
# **v1MarketplaceItemsCreate**
> MarketplacePolymorphic v1MarketplaceItemsCreate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var data = new PerchApi.MarketplacePolymorphic(); // MarketplacePolymorphic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsCreate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**MarketplacePolymorphic**](MarketplacePolymorphic.md)|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsDelete"></a>
# **v1MarketplaceItemsDelete**
> v1MarketplaceItemsDelete(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceItemsDelete(id, , callback);
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

<a name="v1MarketplaceItemsList"></a>
# **v1MarketplaceItemsList**
> InlineResponse20016 v1MarketplaceItemsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'isInstalled': "isInstalled_example", // String | 
  'itemType': "itemType_example", // String | 
  'visibleFor': "visibleFor_example", // String | 
  'store': "store_example", // String | 
  'collection': 8.14, // Number | 
  'search': "search_example", // String | 
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
apiInstance.v1MarketplaceItemsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isInstalled** | **String**|  | [optional] 
 **itemType** | **String**|  | [optional] 
 **visibleFor** | **String**|  | [optional] 
 **store** | **String**|  | [optional] 
 **collection** | **Number**|  | [optional] 
 **search** | **String**|  | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsPartialUpdate"></a>
# **v1MarketplaceItemsPartialUpdate**
> MarketplacePolymorphic v1MarketplaceItemsPartialUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.MarketplacePolymorphic(); // MarketplacePolymorphic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsPartialUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**MarketplacePolymorphic**](MarketplacePolymorphic.md)|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsRead"></a>
# **v1MarketplaceItemsRead**
> MarketplacePolymorphic v1MarketplaceItemsRead(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsRead(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsRemoveCreate"></a>
# **v1MarketplaceItemsRemoveCreate**
> MarketplacePolymorphic v1MarketplaceItemsRemoveCreate(iddata)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.MarketplacePolymorphic(); // MarketplacePolymorphic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsRemoveCreate(iddata, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**MarketplacePolymorphic**](MarketplacePolymorphic.md)|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceItemsRemoveDelete"></a>
# **v1MarketplaceItemsRemoveDelete**
> v1MarketplaceItemsRemoveDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceItemsRemoveDelete(id, callback);
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

<a name="v1MarketplaceItemsUpdate"></a>
# **v1MarketplaceItemsUpdate**
> MarketplacePolymorphic v1MarketplaceItemsUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 

var data = new PerchApi.MarketplacePolymorphic(); // MarketplacePolymorphic | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceItemsUpdate(id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **data** | [**MarketplacePolymorphic**](MarketplacePolymorphic.md)|  | 

### Return type

[**MarketplacePolymorphic**](MarketplacePolymorphic.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresCreate"></a>
# **v1MarketplaceStoresCreate**
> Store v1MarketplaceStoresCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.Store(); // Store | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceStoresCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**Store**](Store.md)|  | 

### Return type

[**Store**](Store.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresCreate_0"></a>
# **v1MarketplaceStoresCreate_0**
> v1MarketplaceStoresCreate_0(companyId, itemType, storeId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresCreate_0(companyId, itemType, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresDelete"></a>
# **v1MarketplaceStoresDelete**
> v1MarketplaceStoresDelete(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresDelete(companyId, id, , callback);
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

<a name="v1MarketplaceStoresDelete_0"></a>
# **v1MarketplaceStoresDelete_0**
> v1MarketplaceStoresDelete_0(companyId, id, itemType, storeId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresDelete_0(companyId, id, itemType, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresList"></a>
# **v1MarketplaceStoresList**
> InlineResponse20017 v1MarketplaceStoresList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

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
apiInstance.v1MarketplaceStoresList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresList_0"></a>
# **v1MarketplaceStoresList_0**
> v1MarketplaceStoresList_0(companyId, itemType, storeId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 

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
apiInstance.v1MarketplaceStoresList_0(companyId, itemType, storeId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 
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

<a name="v1MarketplaceStoresPartialUpdate"></a>
# **v1MarketplaceStoresPartialUpdate**
> Store v1MarketplaceStoresPartialUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.Store(); // Store | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceStoresPartialUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Store**](Store.md)|  | 

### Return type

[**Store**](Store.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresPartialUpdate_0"></a>
# **v1MarketplaceStoresPartialUpdate_0**
> v1MarketplaceStoresPartialUpdate_0(companyId, id, itemType, storeId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresPartialUpdate_0(companyId, id, itemType, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresRead"></a>
# **v1MarketplaceStoresRead**
> Store v1MarketplaceStoresRead(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceStoresRead(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**Store**](Store.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresRead_0"></a>
# **v1MarketplaceStoresRead_0**
> v1MarketplaceStoresRead_0(companyId, id, itemType, storeId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresRead_0(companyId, id, itemType, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresUpdate"></a>
# **v1MarketplaceStoresUpdate**
> Store v1MarketplaceStoresUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.Store(); // Store | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MarketplaceStoresUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**Store**](Store.md)|  | 

### Return type

[**Store**](Store.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MarketplaceStoresUpdate_0"></a>
# **v1MarketplaceStoresUpdate_0**
> v1MarketplaceStoresUpdate_0(companyId, id, itemType, storeId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var itemType = "itemType_example"; // String | 

var storeId = "storeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MarketplaceStoresUpdate_0(companyId, id, itemType, storeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **itemType** | **String**|  | 
 **storeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MetricsOrganizationsList"></a>
# **v1MetricsOrganizationsList**
> [Organizations] v1MetricsOrganizationsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  '_date': "_date_example", // String | 
  'dateLt': "dateLt_example", // String | 
  'dateLte': "dateLte_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateGte': "dateGte_example", // String | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MetricsOrganizationsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**|  | [optional] 
 **dateLt** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[Organizations]**](Organizations.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MetricsOrganizationsRead"></a>
# **v1MetricsOrganizationsRead**
> Organizations v1MetricsOrganizationsRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MetricsOrganizationsRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**Organizations**](Organizations.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MetricsSuppressionsAndEscalationsList"></a>
# **v1MetricsSuppressionsAndEscalationsList**
> [SuppressionsAndEscalations] v1MetricsSuppressionsAndEscalationsList(opts)



This is used to populate the Suppressions & Escalations chart on the organizations page

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'company': 8.14, // Number | 
  'companyIexact': 8.14, // Number | 
  'companyGt': 8.14, // Number | 
  'companyGte': 8.14, // Number | 
  'companyLt': 8.14, // Number | 
  'companyLte': 8.14, // Number | 
  'companyIn': 8.14, // Number | Multiple values may be separated by commas.
  'companyContains': 8.14, // Number | 
  'companyIcontains': 8.14, // Number | 
  'companyStartswith': 8.14, // Number | 
  'companyIstartswith': 8.14, // Number | 
  'companyEndswith': 8.14, // Number | 
  'companyIendswith': 8.14, // Number | 
  'companyRange': 8.14, // Number | Multiple values may be separated by commas.
  'companyIsnull': "companyIsnull_example", // String | 
  'companyRegex': 8.14, // Number | 
  'companyIregex': 8.14, // Number | 
  'companyContainedBy': 8.14, // Number | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MetricsSuppressionsAndEscalationsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company** | **Number**|  | [optional] 
 **companyIexact** | **Number**|  | [optional] 
 **companyGt** | **Number**|  | [optional] 
 **companyGte** | **Number**|  | [optional] 
 **companyLt** | **Number**|  | [optional] 
 **companyLte** | **Number**|  | [optional] 
 **companyIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **companyContains** | **Number**|  | [optional] 
 **companyIcontains** | **Number**|  | [optional] 
 **companyStartswith** | **Number**|  | [optional] 
 **companyIstartswith** | **Number**|  | [optional] 
 **companyEndswith** | **Number**|  | [optional] 
 **companyIendswith** | **Number**|  | [optional] 
 **companyRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **companyIsnull** | **String**|  | [optional] 
 **companyRegex** | **Number**|  | [optional] 
 **companyIregex** | **Number**|  | [optional] 
 **companyContainedBy** | **Number**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[SuppressionsAndEscalations]**](SuppressionsAndEscalations.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MetricsSuppressionsAndEscalationsRead"></a>
# **v1MetricsSuppressionsAndEscalationsRead**
> SuppressionsAndEscalations v1MetricsSuppressionsAndEscalationsRead(id)



This is used to populate the Suppressions & Escalations chart on the organizations page

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MetricsSuppressionsAndEscalationsRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SuppressionsAndEscalations**](SuppressionsAndEscalations.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MetricsTeamsAllStatsList"></a>
# **v1MetricsTeamsAllStatsList**
> v1MetricsTeamsAllStatsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MetricsTeamsAllStatsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MsspsSlasCreate"></a>
# **v1MsspsSlasCreate**
> SLACreation v1MsspsSlasCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.SLACreation(); // SLACreation | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1MsspsSlasCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**SLACreation**](SLACreation.md)|  | 

### Return type

[**SLACreation**](SLACreation.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MsspsSlasDelete"></a>
# **v1MsspsSlasDelete**
> v1MsspsSlasDelete(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MsspsSlasDelete(companyId, id, callback);
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

<a name="v1MsspsSlasList"></a>
# **v1MsspsSlasList**
> InlineResponse20018 v1MsspsSlasList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var opts = { 
  'owner': "owner_example", // String | 
  'timezone': "timezone_example", // String | 
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
apiInstance.v1MsspsSlasList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **owner** | **String**|  | [optional] 
 **timezone** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1MsspsTeamsDelete"></a>
# **v1MsspsTeamsDelete**
> v1MsspsTeamsDelete(companyId, msspId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var msspId = "msspId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1MsspsTeamsDelete(companyId, msspId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **msspId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1NewTeamRegistrationCreate"></a>
# **v1NewTeamRegistrationCreate**
> v1NewTeamRegistrationCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1NewTeamRegistrationCreate(callback);
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

<a name="v1SecurityEventsCommentsCreate"></a>
# **v1SecurityEventsCommentsCreate**
> v1SecurityEventsCommentsCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsCommentsCreate(callback);
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

<a name="v1SecurityEventsCommentsDelete"></a>
# **v1SecurityEventsCommentsDelete**
> v1SecurityEventsCommentsDelete(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = 56; // Number | A unique integer value identifying this comment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsCommentsDelete(id, , callback);
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

<a name="v1SecurityEventsCommentsList"></a>
# **v1SecurityEventsCommentsList**
> [Comment] v1SecurityEventsCommentsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
apiInstance.v1SecurityEventsCommentsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[Comment]**](Comment.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1SecurityEventsCommentsPartialUpdate"></a>
# **v1SecurityEventsCommentsPartialUpdate**
> CommentSerializer v1SecurityEventsCommentsPartialUpdate(id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = 56; // Number | A unique integer value identifying this comment.

var data = new PerchApi.CommentSerializer(); // CommentSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1SecurityEventsCommentsPartialUpdate(id, data, callback);
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

<a name="v1SecurityEventsCommentsUpdate"></a>
# **v1SecurityEventsCommentsUpdate**
> v1SecurityEventsCommentsUpdate(id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = 56; // Number | A unique integer value identifying this comment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsCommentsUpdate(id, , callback);
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

<a name="v1SecurityEventsCreate"></a>
# **v1SecurityEventsCreate**
> v1SecurityEventsCreate()



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsCreate(callback);
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

<a name="v1SecurityEventsDelete"></a>
# **v1SecurityEventsDelete**
> v1SecurityEventsDelete(securityEventId)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsDelete(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SecurityEventsList"></a>
# **v1SecurityEventsList**
> v1SecurityEventsList(opts)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'lastSeenAt': "lastSeenAt_example", // String | 
  'id': "id_example", // String | 
  'indicatorId': "indicatorId_example", // String | 
  'indicatorTitle': "indicatorTitle_example", // String | 
  'sensorId': "sensorId_example", // String | 
  'sensorName': "sensorName_example", // String | 
  'teamId': "teamId_example", // String | 
  'communityId': "communityId_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'srcIp': "srcIp_example", // String | 
  'srcPort': "srcPort_example", // String | 
  'destIp': "destIp_example", // String | 
  'destPort': "destPort_example", // String | 
  'protocol': "protocol_example", // String | 
  'observableId': "observableId_example", // String | 
  'status': "status_example", // String | 
  'fullUrl': "fullUrl_example", // String | 
  'indicatorLoaded': "indicatorLoaded_example", // String | 
  'closedAt': "closedAt_example", // String | 
  'isCompliant': "isCompliant_example", // String | 
  'hasSla': "hasSla_example", // String | 
  'closed': "closed_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'flowId': "flowId_example", // String | 
  'hostIp': "hostIp_example", // String | 
  'srcOrDestIp': "srcOrDestIp_example", // String | 
  'srcFqdn': "srcFqdn_example", // String | 
  'destFqdn': "destFqdn_example", // String | 
  'wasSuppressed': "wasSuppressed_example", // String | 
  'totalSecondsRemaining': "totalSecondsRemaining_example", // String | 
  'totalSecondsRemainingLt': "totalSecondsRemainingLt_example", // String | 
  'totalSecondsRemainingLte': "totalSecondsRemainingLte_example", // String | 
  'totalSecondsRemainingGt': "totalSecondsRemainingGt_example", // String | 
  'totalSecondsRemainingGte': "totalSecondsRemainingGte_example", // String | 
  'search': "search_example", // String | 
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
apiInstance.v1SecurityEventsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastSeenAt** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 
 **indicatorId** | **String**|  | [optional] 
 **indicatorTitle** | **String**|  | [optional] 
 **sensorId** | **String**|  | [optional] 
 **sensorName** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **communityId** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **srcIp** | **String**|  | [optional] 
 **srcPort** | **String**|  | [optional] 
 **destIp** | **String**|  | [optional] 
 **destPort** | **String**|  | [optional] 
 **protocol** | **String**|  | [optional] 
 **observableId** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **fullUrl** | **String**|  | [optional] 
 **indicatorLoaded** | **String**|  | [optional] 
 **closedAt** | **String**|  | [optional] 
 **isCompliant** | **String**|  | [optional] 
 **hasSla** | **String**|  | [optional] 
 **closed** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **flowId** | **String**|  | [optional] 
 **hostIp** | **String**|  | [optional] 
 **srcOrDestIp** | **String**|  | [optional] 
 **srcFqdn** | **String**|  | [optional] 
 **destFqdn** | **String**|  | [optional] 
 **wasSuppressed** | **String**|  | [optional] 
 **totalSecondsRemaining** | **String**|  | [optional] 
 **totalSecondsRemainingLt** | **String**|  | [optional] 
 **totalSecondsRemainingLte** | **String**|  | [optional] 
 **totalSecondsRemainingGt** | **String**|  | [optional] 
 **totalSecondsRemainingGte** | **String**|  | [optional] 
 **search** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SecurityEventsPartialUpdate"></a>
# **v1SecurityEventsPartialUpdate**
> v1SecurityEventsPartialUpdate(securityEventId)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsPartialUpdate(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SecurityEventsRead"></a>
# **v1SecurityEventsRead**
> v1SecurityEventsRead(securityEventId)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsRead(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SecurityEventsStatusStatusCounts"></a>
# **v1SecurityEventsStatusStatusCounts**
> v1SecurityEventsStatusStatusCounts(opts)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'lastSeenAt': "lastSeenAt_example", // String | 
  'id': "id_example", // String | 
  'indicatorId': "indicatorId_example", // String | 
  'indicatorTitle': "indicatorTitle_example", // String | 
  'sensorId': "sensorId_example", // String | 
  'sensorName': "sensorName_example", // String | 
  'teamId': "teamId_example", // String | 
  'communityId': "communityId_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'srcIp': "srcIp_example", // String | 
  'srcPort': "srcPort_example", // String | 
  'destIp': "destIp_example", // String | 
  'destPort': "destPort_example", // String | 
  'protocol': "protocol_example", // String | 
  'observableId': "observableId_example", // String | 
  'status': "status_example", // String | 
  'fullUrl': "fullUrl_example", // String | 
  'indicatorLoaded': "indicatorLoaded_example", // String | 
  'closedAt': "closedAt_example", // String | 
  'isCompliant': "isCompliant_example", // String | 
  'hasSla': "hasSla_example", // String | 
  'closed': "closed_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'flowId': "flowId_example", // String | 
  'hostIp': "hostIp_example", // String | 
  'srcOrDestIp': "srcOrDestIp_example", // String | 
  'srcFqdn': "srcFqdn_example", // String | 
  'destFqdn': "destFqdn_example", // String | 
  'wasSuppressed': "wasSuppressed_example", // String | 
  'totalSecondsRemaining': "totalSecondsRemaining_example", // String | 
  'totalSecondsRemainingLt': "totalSecondsRemainingLt_example", // String | 
  'totalSecondsRemainingLte': "totalSecondsRemainingLte_example", // String | 
  'totalSecondsRemainingGt': "totalSecondsRemainingGt_example", // String | 
  'totalSecondsRemainingGte': "totalSecondsRemainingGte_example", // String | 
  'search': "search_example", // String | 
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
apiInstance.v1SecurityEventsStatusStatusCounts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastSeenAt** | **String**|  | [optional] 
 **id** | **String**|  | [optional] 
 **indicatorId** | **String**|  | [optional] 
 **indicatorTitle** | **String**|  | [optional] 
 **sensorId** | **String**|  | [optional] 
 **sensorName** | **String**|  | [optional] 
 **teamId** | **String**|  | [optional] 
 **communityId** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **srcIp** | **String**|  | [optional] 
 **srcPort** | **String**|  | [optional] 
 **destIp** | **String**|  | [optional] 
 **destPort** | **String**|  | [optional] 
 **protocol** | **String**|  | [optional] 
 **observableId** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **fullUrl** | **String**|  | [optional] 
 **indicatorLoaded** | **String**|  | [optional] 
 **closedAt** | **String**|  | [optional] 
 **isCompliant** | **String**|  | [optional] 
 **hasSla** | **String**|  | [optional] 
 **closed** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **flowId** | **String**|  | [optional] 
 **hostIp** | **String**|  | [optional] 
 **srcOrDestIp** | **String**|  | [optional] 
 **srcFqdn** | **String**|  | [optional] 
 **destFqdn** | **String**|  | [optional] 
 **wasSuppressed** | **String**|  | [optional] 
 **totalSecondsRemaining** | **String**|  | [optional] 
 **totalSecondsRemainingLt** | **String**|  | [optional] 
 **totalSecondsRemainingLte** | **String**|  | [optional] 
 **totalSecondsRemainingGt** | **String**|  | [optional] 
 **totalSecondsRemainingGte** | **String**|  | [optional] 
 **search** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SecurityEventsUpdate"></a>
# **v1SecurityEventsUpdate**
> v1SecurityEventsUpdate(securityEventId)



Returns a list of alerts viewable by the user.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var securityEventId = "securityEventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SecurityEventsUpdate(securityEventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **securityEventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SensorFilesDownloadList"></a>
# **v1SensorFilesDownloadList**
> v1SensorFilesDownloadList(fileName)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var fileName = "fileName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SensorFilesDownloadList(fileName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1SensorFilesDownloadList_0"></a>
# **v1SensorFilesDownloadList_0**
> v1SensorFilesDownloadList_0(fileName, sensorId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var fileName = "fileName_example"; // String | 

var sensorId = "sensorId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SensorFilesDownloadList_0(fileName, sensorId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileName** | **String**|  | 
 **sensorId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1SensorFilesHashList"></a>
# **v1SensorFilesHashList**
> v1SensorFilesHashList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SensorFilesHashList(callback);
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

<a name="v1SensorHealthRead"></a>
# **v1SensorHealthRead**
> v1SensorHealthRead(id)



Basically the same as the unversioned viewset, just doesn't require the team ID to be part of the URL

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1SensorHealthRead(id, callback);
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

<a name="v1SingleTeam"></a>
# **v1SingleTeam**
> InlineResponse20021 v1SingleTeam(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var opts = { 
  'dateLt': "dateLt_example", // String | 
  'dateLte': "dateLte_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateGte': "dateGte_example", // String | 
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
apiInstance.v1SingleTeam(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **dateLt** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1SupportedDevicesList"></a>
# **v1SupportedDevicesList**
> InlineResponse20019 v1SupportedDevicesList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

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
apiInstance.v1SupportedDevicesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1SupportedDevicesRead"></a>
# **v1SupportedDevicesRead**
> SupportedDevice v1SupportedDevicesRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1SupportedDevicesRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**SupportedDevice**](SupportedDevice.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1TeamsHealthList"></a>
# **v1TeamsHealthList**
> InlineResponse20020 v1TeamsHealthList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'teamId': "teamId_example", // String | 
  'alerts': "alerts_example", // String | 
  'alertsGte': "alertsGte_example", // String | 
  'alertsLte': "alertsLte_example", // String | 
  'escalations': "escalations_example", // String | 
  'lastLogin': "lastLogin_example", // String | 
  'lastEscalation': "lastEscalation_example", // String | 
  'onboardingIncomplete': "onboardingIncomplete_example", // String | 
  'escalationsGte': "escalationsGte_example", // String | 
  'escalationsLte': "escalationsLte_example", // String | 
  'lastLoginGte': "lastLoginGte_example", // String | 
  'lastLoginLte': "lastLoginLte_example", // String | 
  'lastEscalationGte': "lastEscalationGte_example", // String | 
  'lastEscalationLte': "lastEscalationLte_example", // String | 
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
apiInstance.v1TeamsHealthList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**|  | [optional] 
 **alerts** | **String**|  | [optional] 
 **alertsGte** | **String**|  | [optional] 
 **alertsLte** | **String**|  | [optional] 
 **escalations** | **String**|  | [optional] 
 **lastLogin** | **String**|  | [optional] 
 **lastEscalation** | **String**|  | [optional] 
 **onboardingIncomplete** | **String**|  | [optional] 
 **escalationsGte** | **String**|  | [optional] 
 **escalationsLte** | **String**|  | [optional] 
 **lastLoginGte** | **String**|  | [optional] 
 **lastLoginLte** | **String**|  | [optional] 
 **lastEscalationGte** | **String**|  | [optional] 
 **lastEscalationLte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1TeamsHealthRead"></a>
# **v1TeamsHealthRead**
> TeamHealth v1TeamsHealthRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1TeamsHealthRead(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**TeamHealth**](TeamHealth.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1TeamsSensorsSummaryCreate"></a>
# **v1TeamsSensorsSummaryCreate**
> v1TeamsSensorsSummaryCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1TeamsSensorsSummaryCreate(callback);
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

<a name="v1TeamsSensorsSummaryDelete"></a>
# **v1TeamsSensorsSummaryDelete**
> v1TeamsSensorsSummaryDelete(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1TeamsSensorsSummaryDelete(id, callback);
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

<a name="v1TeamsSensorsSummaryList"></a>
# **v1TeamsSensorsSummaryList**
> v1TeamsSensorsSummaryList(opts)



We need to override the standard `list` method in order to apply sorting to non-database fields at the end of the request lifecycle

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
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
apiInstance.v1TeamsSensorsSummaryList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="v1TeamsSensorsSummaryPartialUpdate"></a>
# **v1TeamsSensorsSummaryPartialUpdate**
> v1TeamsSensorsSummaryPartialUpdate(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1TeamsSensorsSummaryPartialUpdate(id, callback);
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

<a name="v1TeamsSensorsSummaryRead"></a>
# **v1TeamsSensorsSummaryRead**
> v1TeamsSensorsSummaryRead(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1TeamsSensorsSummaryRead(id, callback);
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

<a name="v1TeamsSensorsSummaryUpdate"></a>
# **v1TeamsSensorsSummaryUpdate**
> v1TeamsSensorsSummaryUpdate(id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.v1TeamsSensorsSummaryUpdate(id, callback);
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

<a name="v1UsageAllTeamsForUser"></a>
# **v1UsageAllTeamsForUser**
> InlineResponse20021 v1UsageAllTeamsForUser(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var opts = { 
  'dateLt': "dateLt_example", // String | 
  'dateLte': "dateLte_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateGte': "dateGte_example", // String | 
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
apiInstance.v1UsageAllTeamsForUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateLt** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1UsageManagedTeams"></a>
# **v1UsageManagedTeams**
> InlineResponse20021 v1UsageManagedTeams(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var companyId = "companyId_example"; // String | 

var opts = { 
  'dateLt': "dateLt_example", // String | 
  'dateLte': "dateLte_example", // String | 
  'dateGt': "dateGt_example", // String | 
  'dateGte': "dateGte_example", // String | 
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
apiInstance.v1UsageManagedTeams(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **dateLt** | **String**|  | [optional] 
 **dateLte** | **String**|  | [optional] 
 **dateGt** | **String**|  | [optional] 
 **dateGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="v1UserLoginsList"></a>
# **v1UserLoginsList**
> v1UserLoginsList(userId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var userId = "userId_example"; // String | 

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
apiInstance.v1UserLoginsList(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
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

<a name="v1UserMePartialUpdate"></a>
# **v1UserMePartialUpdate**
> AboutMeSerializerV1 v1UserMePartialUpdate(data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var data = new PerchApi.AboutMeSerializerV1(); // AboutMeSerializerV1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1UserMePartialUpdate(data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**AboutMeSerializerV1**](AboutMeSerializerV1.md)|  | 

### Return type

[**AboutMeSerializerV1**](AboutMeSerializerV1.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1UserMeRead"></a>
# **v1UserMeRead**
> AboutMeSerializerV1 v1UserMeRead()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1UserMeRead(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AboutMeSerializerV1**](AboutMeSerializerV1.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1UserPartialUpdate"></a>
# **v1UserPartialUpdate**
> AboutMeSerializerV1 v1UserPartialUpdate(userId, data)



The AboutMeViewSetV1 already handles this same behavior, but is hardwired to only handle the current user. This view extends that, adds a permission, and slightly adjusts it to work with a passed user id.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var userId = "userId_example"; // String | 

var data = new PerchApi.AboutMeSerializerV1(); // AboutMeSerializerV1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1UserPartialUpdate(userId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **data** | [**AboutMeSerializerV1**](AboutMeSerializerV1.md)|  | 

### Return type

[**AboutMeSerializerV1**](AboutMeSerializerV1.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v1UserRead"></a>
# **v1UserRead**
> AboutMeSerializerV1 v1UserRead(userId, )



The AboutMeViewSetV1 already handles this same behavior, but is hardwired to only handle the current user. This view extends that, adds a permission, and slightly adjusts it to work with a passed user id.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.V1Api();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.v1UserRead(userId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

[**AboutMeSerializerV1**](AboutMeSerializerV1.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

