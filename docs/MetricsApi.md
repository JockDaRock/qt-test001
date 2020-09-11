# PerchApi.MetricsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metricsAlertProcessingList**](MetricsApi.md#metricsAlertProcessingList) | **GET** /metrics/alert-processing | 
[**metricsAlertProcessingNoisyTeamsList**](MetricsApi.md#metricsAlertProcessingNoisyTeamsList) | **GET** /metrics/alert-processing/noisy-teams | 
[**metricsAnalystActivityRead**](MetricsApi.md#metricsAnalystActivityRead) | **GET** /metrics/analyst-activity/{user_id}/ | 
[**metricsAnalystSummaryList**](MetricsApi.md#metricsAnalystSummaryList) | **GET** /metrics/analyst-summary | 
[**metricsCommunityDailyEventsList**](MetricsApi.md#metricsCommunityDailyEventsList) | **GET** /metrics/community/{community_id}/daily-events | 
[**metricsCommunitySuppressionsList**](MetricsApi.md#metricsCommunitySuppressionsList) | **GET** /metrics/community/{community_id}/suppressions | 
[**metricsCommunityTrendingIndicatorsList**](MetricsApi.md#metricsCommunityTrendingIndicatorsList) | **GET** /metrics/community/{community_id}/trending-indicators | 
[**metricsCustomerSuccessActivityList**](MetricsApi.md#metricsCustomerSuccessActivityList) | **GET** /metrics/customer-success/activity | 
[**metricsEventsClosedCountList**](MetricsApi.md#metricsEventsClosedCountList) | **GET** /metrics/events/closed_count | 
[**metricsStatsIpCountsListAggregationsForAllTeams**](MetricsApi.md#metricsStatsIpCountsListAggregationsForAllTeams) | **GET** /metrics/stats/ip-counts/staff | 
[**metricsTeamsIndicatorsByCommunityList**](MetricsApi.md#metricsTeamsIndicatorsByCommunityList) | **GET** /metrics/teams/{company_id}/indicators/by-community | 
[**metricsTeamsSightingsByCommunityList**](MetricsApi.md#metricsTeamsSightingsByCommunityList) | **GET** /metrics/teams/{company_id}/sightings/by-community | 
[**metricsTeamsStatsIpCountsList**](MetricsApi.md#metricsTeamsStatsIpCountsList) | **GET** /metrics/teams/{company_id}/stats/ip-counts | 
[**metricsTeamsStatsIpCountsListAggregationsForManagedTeams**](MetricsApi.md#metricsTeamsStatsIpCountsListAggregationsForManagedTeams) | **GET** /metrics/teams/{company_id}/stats/ip-counts/managed-teams | 
[**metricsTeamsStatsList**](MetricsApi.md#metricsTeamsStatsList) | **GET** /metrics/teams/{company_id}/stats | 
[**metricsTeamsStatsNoisyHostsList**](MetricsApi.md#metricsTeamsStatsNoisyHostsList) | **GET** /metrics/teams/{company_id}/stats/noisy-hosts | 
[**metricsTeamsStatsSummary**](MetricsApi.md#metricsTeamsStatsSummary) | **GET** /metrics/teams/{company_id}/stats/suppressions | 
[**metricsTeamsStatsSuppressionsByDay**](MetricsApi.md#metricsTeamsStatsSuppressionsByDay) | **GET** /metrics/teams/{company_id}/stats/suppressions/by-day | 
[**metricsTeamsSuppressionsByCommunityList**](MetricsApi.md#metricsTeamsSuppressionsByCommunityList) | **GET** /metrics/teams/{company_id}/suppressions/by-community | 
[**metricsTeamsSuppressionsList**](MetricsApi.md#metricsTeamsSuppressionsList) | **GET** /metrics/teams/{company_id}/suppressions | 


<a name="metricsAlertProcessingList"></a>
# **metricsAlertProcessingList**
> metricsAlertProcessingList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsAlertProcessingList(callback);
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

<a name="metricsAlertProcessingNoisyTeamsList"></a>
# **metricsAlertProcessingNoisyTeamsList**
> metricsAlertProcessingNoisyTeamsList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsAlertProcessingNoisyTeamsList(callback);
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

<a name="metricsAnalystActivityRead"></a>
# **metricsAnalystActivityRead**
> metricsAnalystActivityRead(userId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var userId = "userId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsAnalystActivityRead(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsAnalystSummaryList"></a>
# **metricsAnalystSummaryList**
> metricsAnalystSummaryList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsAnalystSummaryList(callback);
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

<a name="metricsCommunityDailyEventsList"></a>
# **metricsCommunityDailyEventsList**
> metricsCommunityDailyEventsList(communityId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var communityId = "communityId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsCommunityDailyEventsList(communityId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsCommunitySuppressionsList"></a>
# **metricsCommunitySuppressionsList**
> metricsCommunitySuppressionsList(communityId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var communityId = "communityId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsCommunitySuppressionsList(communityId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsCommunityTrendingIndicatorsList"></a>
# **metricsCommunityTrendingIndicatorsList**
> metricsCommunityTrendingIndicatorsList(communityId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var communityId = "communityId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsCommunityTrendingIndicatorsList(communityId, callback);
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

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsCustomerSuccessActivityList"></a>
# **metricsCustomerSuccessActivityList**
> metricsCustomerSuccessActivityList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsCustomerSuccessActivityList(callback);
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

<a name="metricsEventsClosedCountList"></a>
# **metricsEventsClosedCountList**
> metricsEventsClosedCountList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsEventsClosedCountList(callback);
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

<a name="metricsStatsIpCountsListAggregationsForAllTeams"></a>
# **metricsStatsIpCountsListAggregationsForAllTeams**
> InlineResponse2005 metricsStatsIpCountsListAggregationsForAllTeams(opts)



Return a special summarized view of counts by day so Perch staff can review counts for all teams

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var opts = { 
  'dateCountedForLt': "dateCountedForLt_example", // String | 
  'dateCountedForLte': "dateCountedForLte_example", // String | 
  'dateCountedForGt': "dateCountedForGt_example", // String | 
  'dateCountedForGte': "dateCountedForGte_example", // String | 
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
apiInstance.metricsStatsIpCountsListAggregationsForAllTeams(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateCountedForLt** | **String**|  | [optional] 
 **dateCountedForLte** | **String**|  | [optional] 
 **dateCountedForGt** | **String**|  | [optional] 
 **dateCountedForGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="metricsTeamsIndicatorsByCommunityList"></a>
# **metricsTeamsIndicatorsByCommunityList**
> metricsTeamsIndicatorsByCommunityList(companyId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.metricsTeamsIndicatorsByCommunityList(companyId, callback);
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

<a name="metricsTeamsSightingsByCommunityList"></a>
# **metricsTeamsSightingsByCommunityList**
> [NameChartSerializer] metricsTeamsSightingsByCommunityList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

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
apiInstance.metricsTeamsSightingsByCommunityList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[NameChartSerializer]**](NameChartSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsStatsIpCountsList"></a>
# **metricsTeamsStatsIpCountsList**
> InlineResponse2005 metricsTeamsStatsIpCountsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'dateCountedForLt': "dateCountedForLt_example", // String | 
  'dateCountedForLte': "dateCountedForLte_example", // String | 
  'dateCountedForGt': "dateCountedForGt_example", // String | 
  'dateCountedForGte': "dateCountedForGte_example", // String | 
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
apiInstance.metricsTeamsStatsIpCountsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **dateCountedForLt** | **String**|  | [optional] 
 **dateCountedForLte** | **String**|  | [optional] 
 **dateCountedForGt** | **String**|  | [optional] 
 **dateCountedForGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="metricsTeamsStatsIpCountsListAggregationsForManagedTeams"></a>
# **metricsTeamsStatsIpCountsListAggregationsForManagedTeams**
> InlineResponse2005 metricsTeamsStatsIpCountsListAggregationsForManagedTeams(companyId, opts)



Return a special summarized view of counts by day so MSSPs can review counts for all teams they manage

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'dateCountedForLt': "dateCountedForLt_example", // String | 
  'dateCountedForLte': "dateCountedForLte_example", // String | 
  'dateCountedForGt': "dateCountedForGt_example", // String | 
  'dateCountedForGte': "dateCountedForGte_example", // String | 
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
apiInstance.metricsTeamsStatsIpCountsListAggregationsForManagedTeams(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **dateCountedForLt** | **String**|  | [optional] 
 **dateCountedForLte** | **String**|  | [optional] 
 **dateCountedForGt** | **String**|  | [optional] 
 **dateCountedForGte** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/csv

<a name="metricsTeamsStatsList"></a>
# **metricsTeamsStatsList**
> metricsTeamsStatsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

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
apiInstance.metricsTeamsStatsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsStatsNoisyHostsList"></a>
# **metricsTeamsStatsNoisyHostsList**
> [TeamNoisyHosts] metricsTeamsStatsNoisyHostsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

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
apiInstance.metricsTeamsStatsNoisyHostsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[TeamNoisyHosts]**](TeamNoisyHosts.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsStatsSummary"></a>
# **metricsTeamsStatsSummary**
> metricsTeamsStatsSummary(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

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
apiInstance.metricsTeamsStatsSummary(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsStatsSuppressionsByDay"></a>
# **metricsTeamsStatsSuppressionsByDay**
> metricsTeamsStatsSuppressionsByDay(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

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
apiInstance.metricsTeamsStatsSuppressionsByDay(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsSuppressionsByCommunityList"></a>
# **metricsTeamsSuppressionsByCommunityList**
> [CommunityNameChartSerializer] metricsTeamsSuppressionsByCommunityList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'reason': "reason_example", // String | 
  'closedAt': "closedAt_example", // String | 
  'closedAtIexact': "closedAtIexact_example", // String | 
  'closedAtGt': "closedAtGt_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLt': "closedAtLt_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'closedAtIn': "closedAtIn_example", // String | Multiple values may be separated by commas.
  'closedAtContains': "closedAtContains_example", // String | 
  'closedAtIcontains': "closedAtIcontains_example", // String | 
  'closedAtStartswith': "closedAtStartswith_example", // String | 
  'closedAtIstartswith': "closedAtIstartswith_example", // String | 
  'closedAtEndswith': "closedAtEndswith_example", // String | 
  'closedAtIendswith': "closedAtIendswith_example", // String | 
  'closedAtRange': "closedAtRange_example", // String | Multiple values may be separated by commas.
  'closedAtIsnull': "closedAtIsnull_example", // String | 
  'closedAtRegex': "closedAtRegex_example", // String | 
  'closedAtIregex': "closedAtIregex_example", // String | 
  'closedAtYear': 8.14, // Number | 
  'closedAtYearIexact': 8.14, // Number | 
  'closedAtYearGt': 8.14, // Number | 
  'closedAtYearGte': 8.14, // Number | 
  'closedAtYearLt': 8.14, // Number | 
  'closedAtYearLte': 8.14, // Number | 
  'closedAtYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtYearContains': 8.14, // Number | 
  'closedAtYearIcontains': 8.14, // Number | 
  'closedAtYearStartswith': 8.14, // Number | 
  'closedAtYearIstartswith': 8.14, // Number | 
  'closedAtYearEndswith': 8.14, // Number | 
  'closedAtYearIendswith': 8.14, // Number | 
  'closedAtYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtYearIsnull': "closedAtYearIsnull_example", // String | 
  'closedAtYearRegex': 8.14, // Number | 
  'closedAtYearIregex': 8.14, // Number | 
  'closedAtYearContainedBy': 8.14, // Number | 
  'closedAtMonth': 8.14, // Number | 
  'closedAtMonthIexact': 8.14, // Number | 
  'closedAtMonthGt': 8.14, // Number | 
  'closedAtMonthGte': 8.14, // Number | 
  'closedAtMonthLt': 8.14, // Number | 
  'closedAtMonthLte': 8.14, // Number | 
  'closedAtMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMonthContains': 8.14, // Number | 
  'closedAtMonthIcontains': 8.14, // Number | 
  'closedAtMonthStartswith': 8.14, // Number | 
  'closedAtMonthIstartswith': 8.14, // Number | 
  'closedAtMonthEndswith': 8.14, // Number | 
  'closedAtMonthIendswith': 8.14, // Number | 
  'closedAtMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMonthIsnull': "closedAtMonthIsnull_example", // String | 
  'closedAtMonthRegex': 8.14, // Number | 
  'closedAtMonthIregex': 8.14, // Number | 
  'closedAtMonthContainedBy': 8.14, // Number | 
  'closedAtDay': 8.14, // Number | 
  'closedAtDayIexact': 8.14, // Number | 
  'closedAtDayGt': 8.14, // Number | 
  'closedAtDayGte': 8.14, // Number | 
  'closedAtDayLt': 8.14, // Number | 
  'closedAtDayLte': 8.14, // Number | 
  'closedAtDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDayContains': 8.14, // Number | 
  'closedAtDayIcontains': 8.14, // Number | 
  'closedAtDayStartswith': 8.14, // Number | 
  'closedAtDayIstartswith': 8.14, // Number | 
  'closedAtDayEndswith': 8.14, // Number | 
  'closedAtDayIendswith': 8.14, // Number | 
  'closedAtDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDayIsnull': "closedAtDayIsnull_example", // String | 
  'closedAtDayRegex': 8.14, // Number | 
  'closedAtDayIregex': 8.14, // Number | 
  'closedAtDayContainedBy': 8.14, // Number | 
  'closedAtWeekDay': 8.14, // Number | 
  'closedAtWeekDayIexact': 8.14, // Number | 
  'closedAtWeekDayGt': 8.14, // Number | 
  'closedAtWeekDayGte': 8.14, // Number | 
  'closedAtWeekDayLt': 8.14, // Number | 
  'closedAtWeekDayLte': 8.14, // Number | 
  'closedAtWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekDayContains': 8.14, // Number | 
  'closedAtWeekDayIcontains': 8.14, // Number | 
  'closedAtWeekDayStartswith': 8.14, // Number | 
  'closedAtWeekDayIstartswith': 8.14, // Number | 
  'closedAtWeekDayEndswith': 8.14, // Number | 
  'closedAtWeekDayIendswith': 8.14, // Number | 
  'closedAtWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekDayIsnull': "closedAtWeekDayIsnull_example", // String | 
  'closedAtWeekDayRegex': 8.14, // Number | 
  'closedAtWeekDayIregex': 8.14, // Number | 
  'closedAtWeekDayContainedBy': 8.14, // Number | 
  'closedAtWeek': 8.14, // Number | 
  'closedAtWeekIexact': 8.14, // Number | 
  'closedAtWeekGt': 8.14, // Number | 
  'closedAtWeekGte': 8.14, // Number | 
  'closedAtWeekLt': 8.14, // Number | 
  'closedAtWeekLte': 8.14, // Number | 
  'closedAtWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekContains': 8.14, // Number | 
  'closedAtWeekIcontains': 8.14, // Number | 
  'closedAtWeekStartswith': 8.14, // Number | 
  'closedAtWeekIstartswith': 8.14, // Number | 
  'closedAtWeekEndswith': 8.14, // Number | 
  'closedAtWeekIendswith': 8.14, // Number | 
  'closedAtWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekIsnull': "closedAtWeekIsnull_example", // String | 
  'closedAtWeekRegex': 8.14, // Number | 
  'closedAtWeekIregex': 8.14, // Number | 
  'closedAtWeekContainedBy': 8.14, // Number | 
  'closedAtIsoYear': 8.14, // Number | 
  'closedAtIsoYearIexact': 8.14, // Number | 
  'closedAtIsoYearGt': 8.14, // Number | 
  'closedAtIsoYearGte': 8.14, // Number | 
  'closedAtIsoYearLt': 8.14, // Number | 
  'closedAtIsoYearLte': 8.14, // Number | 
  'closedAtIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtIsoYearContains': 8.14, // Number | 
  'closedAtIsoYearIcontains': 8.14, // Number | 
  'closedAtIsoYearStartswith': 8.14, // Number | 
  'closedAtIsoYearIstartswith': 8.14, // Number | 
  'closedAtIsoYearEndswith': 8.14, // Number | 
  'closedAtIsoYearIendswith': 8.14, // Number | 
  'closedAtIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtIsoYearIsnull': "closedAtIsoYearIsnull_example", // String | 
  'closedAtIsoYearRegex': 8.14, // Number | 
  'closedAtIsoYearIregex': 8.14, // Number | 
  'closedAtIsoYearContainedBy': 8.14, // Number | 
  'closedAtQuarter': 8.14, // Number | 
  'closedAtQuarterIexact': 8.14, // Number | 
  'closedAtQuarterGt': 8.14, // Number | 
  'closedAtQuarterGte': 8.14, // Number | 
  'closedAtQuarterLt': 8.14, // Number | 
  'closedAtQuarterLte': 8.14, // Number | 
  'closedAtQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtQuarterContains': 8.14, // Number | 
  'closedAtQuarterIcontains': 8.14, // Number | 
  'closedAtQuarterStartswith': 8.14, // Number | 
  'closedAtQuarterIstartswith': 8.14, // Number | 
  'closedAtQuarterEndswith': 8.14, // Number | 
  'closedAtQuarterIendswith': 8.14, // Number | 
  'closedAtQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtQuarterIsnull': "closedAtQuarterIsnull_example", // String | 
  'closedAtQuarterRegex': 8.14, // Number | 
  'closedAtQuarterIregex': 8.14, // Number | 
  'closedAtQuarterContainedBy': 8.14, // Number | 
  'closedAtContainedBy': "closedAtContainedBy_example", // String | 
  'closedAtHour': 8.14, // Number | 
  'closedAtHourIexact': 8.14, // Number | 
  'closedAtHourGt': 8.14, // Number | 
  'closedAtHourGte': 8.14, // Number | 
  'closedAtHourLt': 8.14, // Number | 
  'closedAtHourLte': 8.14, // Number | 
  'closedAtHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtHourContains': 8.14, // Number | 
  'closedAtHourIcontains': 8.14, // Number | 
  'closedAtHourStartswith': 8.14, // Number | 
  'closedAtHourIstartswith': 8.14, // Number | 
  'closedAtHourEndswith': 8.14, // Number | 
  'closedAtHourIendswith': 8.14, // Number | 
  'closedAtHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtHourIsnull': "closedAtHourIsnull_example", // String | 
  'closedAtHourRegex': 8.14, // Number | 
  'closedAtHourIregex': 8.14, // Number | 
  'closedAtHourContainedBy': 8.14, // Number | 
  'closedAtMinute': 8.14, // Number | 
  'closedAtMinuteIexact': 8.14, // Number | 
  'closedAtMinuteGt': 8.14, // Number | 
  'closedAtMinuteGte': 8.14, // Number | 
  'closedAtMinuteLt': 8.14, // Number | 
  'closedAtMinuteLte': 8.14, // Number | 
  'closedAtMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMinuteContains': 8.14, // Number | 
  'closedAtMinuteIcontains': 8.14, // Number | 
  'closedAtMinuteStartswith': 8.14, // Number | 
  'closedAtMinuteIstartswith': 8.14, // Number | 
  'closedAtMinuteEndswith': 8.14, // Number | 
  'closedAtMinuteIendswith': 8.14, // Number | 
  'closedAtMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMinuteIsnull': "closedAtMinuteIsnull_example", // String | 
  'closedAtMinuteRegex': 8.14, // Number | 
  'closedAtMinuteIregex': 8.14, // Number | 
  'closedAtMinuteContainedBy': 8.14, // Number | 
  'closedAtSecond': 8.14, // Number | 
  'closedAtSecondIexact': 8.14, // Number | 
  'closedAtSecondGt': 8.14, // Number | 
  'closedAtSecondGte': 8.14, // Number | 
  'closedAtSecondLt': 8.14, // Number | 
  'closedAtSecondLte': 8.14, // Number | 
  'closedAtSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtSecondContains': 8.14, // Number | 
  'closedAtSecondIcontains': 8.14, // Number | 
  'closedAtSecondStartswith': 8.14, // Number | 
  'closedAtSecondIstartswith': 8.14, // Number | 
  'closedAtSecondEndswith': 8.14, // Number | 
  'closedAtSecondIendswith': 8.14, // Number | 
  'closedAtSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtSecondIsnull': "closedAtSecondIsnull_example", // String | 
  'closedAtSecondRegex': 8.14, // Number | 
  'closedAtSecondIregex': 8.14, // Number | 
  'closedAtSecondContainedBy': 8.14, // Number | 
  'closedAtDate': "closedAtDate_example", // String | 
  'closedAtDateIexact': "closedAtDateIexact_example", // String | 
  'closedAtDateGt': "closedAtDateGt_example", // String | 
  'closedAtDateGte': "closedAtDateGte_example", // String | 
  'closedAtDateLt': "closedAtDateLt_example", // String | 
  'closedAtDateLte': "closedAtDateLte_example", // String | 
  'closedAtDateIn': "closedAtDateIn_example", // String | Multiple values may be separated by commas.
  'closedAtDateContains': "closedAtDateContains_example", // String | 
  'closedAtDateIcontains': "closedAtDateIcontains_example", // String | 
  'closedAtDateStartswith': "closedAtDateStartswith_example", // String | 
  'closedAtDateIstartswith': "closedAtDateIstartswith_example", // String | 
  'closedAtDateEndswith': "closedAtDateEndswith_example", // String | 
  'closedAtDateIendswith': "closedAtDateIendswith_example", // String | 
  'closedAtDateRange': "closedAtDateRange_example", // String | Multiple values may be separated by commas.
  'closedAtDateIsnull': "closedAtDateIsnull_example", // String | 
  'closedAtDateRegex': "closedAtDateRegex_example", // String | 
  'closedAtDateIregex': "closedAtDateIregex_example", // String | 
  'closedAtDateYear': 8.14, // Number | 
  'closedAtDateYearIexact': 8.14, // Number | 
  'closedAtDateYearGt': 8.14, // Number | 
  'closedAtDateYearGte': 8.14, // Number | 
  'closedAtDateYearLt': 8.14, // Number | 
  'closedAtDateYearLte': 8.14, // Number | 
  'closedAtDateYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateYearContains': 8.14, // Number | 
  'closedAtDateYearIcontains': 8.14, // Number | 
  'closedAtDateYearStartswith': 8.14, // Number | 
  'closedAtDateYearIstartswith': 8.14, // Number | 
  'closedAtDateYearEndswith': 8.14, // Number | 
  'closedAtDateYearIendswith': 8.14, // Number | 
  'closedAtDateYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateYearIsnull': "closedAtDateYearIsnull_example", // String | 
  'closedAtDateYearRegex': 8.14, // Number | 
  'closedAtDateYearIregex': 8.14, // Number | 
  'closedAtDateYearContainedBy': 8.14, // Number | 
  'closedAtDateMonth': 8.14, // Number | 
  'closedAtDateMonthIexact': 8.14, // Number | 
  'closedAtDateMonthGt': 8.14, // Number | 
  'closedAtDateMonthGte': 8.14, // Number | 
  'closedAtDateMonthLt': 8.14, // Number | 
  'closedAtDateMonthLte': 8.14, // Number | 
  'closedAtDateMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateMonthContains': 8.14, // Number | 
  'closedAtDateMonthIcontains': 8.14, // Number | 
  'closedAtDateMonthStartswith': 8.14, // Number | 
  'closedAtDateMonthIstartswith': 8.14, // Number | 
  'closedAtDateMonthEndswith': 8.14, // Number | 
  'closedAtDateMonthIendswith': 8.14, // Number | 
  'closedAtDateMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateMonthIsnull': "closedAtDateMonthIsnull_example", // String | 
  'closedAtDateMonthRegex': 8.14, // Number | 
  'closedAtDateMonthIregex': 8.14, // Number | 
  'closedAtDateMonthContainedBy': 8.14, // Number | 
  'closedAtDateDay': 8.14, // Number | 
  'closedAtDateDayIexact': 8.14, // Number | 
  'closedAtDateDayGt': 8.14, // Number | 
  'closedAtDateDayGte': 8.14, // Number | 
  'closedAtDateDayLt': 8.14, // Number | 
  'closedAtDateDayLte': 8.14, // Number | 
  'closedAtDateDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateDayContains': 8.14, // Number | 
  'closedAtDateDayIcontains': 8.14, // Number | 
  'closedAtDateDayStartswith': 8.14, // Number | 
  'closedAtDateDayIstartswith': 8.14, // Number | 
  'closedAtDateDayEndswith': 8.14, // Number | 
  'closedAtDateDayIendswith': 8.14, // Number | 
  'closedAtDateDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateDayIsnull': "closedAtDateDayIsnull_example", // String | 
  'closedAtDateDayRegex': 8.14, // Number | 
  'closedAtDateDayIregex': 8.14, // Number | 
  'closedAtDateDayContainedBy': 8.14, // Number | 
  'closedAtDateWeekDay': 8.14, // Number | 
  'closedAtDateWeekDayIexact': 8.14, // Number | 
  'closedAtDateWeekDayGt': 8.14, // Number | 
  'closedAtDateWeekDayGte': 8.14, // Number | 
  'closedAtDateWeekDayLt': 8.14, // Number | 
  'closedAtDateWeekDayLte': 8.14, // Number | 
  'closedAtDateWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekDayContains': 8.14, // Number | 
  'closedAtDateWeekDayIcontains': 8.14, // Number | 
  'closedAtDateWeekDayStartswith': 8.14, // Number | 
  'closedAtDateWeekDayIstartswith': 8.14, // Number | 
  'closedAtDateWeekDayEndswith': 8.14, // Number | 
  'closedAtDateWeekDayIendswith': 8.14, // Number | 
  'closedAtDateWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekDayIsnull': "closedAtDateWeekDayIsnull_example", // String | 
  'closedAtDateWeekDayRegex': 8.14, // Number | 
  'closedAtDateWeekDayIregex': 8.14, // Number | 
  'closedAtDateWeekDayContainedBy': 8.14, // Number | 
  'closedAtDateWeek': 8.14, // Number | 
  'closedAtDateWeekIexact': 8.14, // Number | 
  'closedAtDateWeekGt': 8.14, // Number | 
  'closedAtDateWeekGte': 8.14, // Number | 
  'closedAtDateWeekLt': 8.14, // Number | 
  'closedAtDateWeekLte': 8.14, // Number | 
  'closedAtDateWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekContains': 8.14, // Number | 
  'closedAtDateWeekIcontains': 8.14, // Number | 
  'closedAtDateWeekStartswith': 8.14, // Number | 
  'closedAtDateWeekIstartswith': 8.14, // Number | 
  'closedAtDateWeekEndswith': 8.14, // Number | 
  'closedAtDateWeekIendswith': 8.14, // Number | 
  'closedAtDateWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekIsnull': "closedAtDateWeekIsnull_example", // String | 
  'closedAtDateWeekRegex': 8.14, // Number | 
  'closedAtDateWeekIregex': 8.14, // Number | 
  'closedAtDateWeekContainedBy': 8.14, // Number | 
  'closedAtDateIsoYear': 8.14, // Number | 
  'closedAtDateIsoYearIexact': 8.14, // Number | 
  'closedAtDateIsoYearGt': 8.14, // Number | 
  'closedAtDateIsoYearGte': 8.14, // Number | 
  'closedAtDateIsoYearLt': 8.14, // Number | 
  'closedAtDateIsoYearLte': 8.14, // Number | 
  'closedAtDateIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateIsoYearContains': 8.14, // Number | 
  'closedAtDateIsoYearIcontains': 8.14, // Number | 
  'closedAtDateIsoYearStartswith': 8.14, // Number | 
  'closedAtDateIsoYearIstartswith': 8.14, // Number | 
  'closedAtDateIsoYearEndswith': 8.14, // Number | 
  'closedAtDateIsoYearIendswith': 8.14, // Number | 
  'closedAtDateIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateIsoYearIsnull': "closedAtDateIsoYearIsnull_example", // String | 
  'closedAtDateIsoYearRegex': 8.14, // Number | 
  'closedAtDateIsoYearIregex': 8.14, // Number | 
  'closedAtDateIsoYearContainedBy': 8.14, // Number | 
  'closedAtDateQuarter': 8.14, // Number | 
  'closedAtDateQuarterIexact': 8.14, // Number | 
  'closedAtDateQuarterGt': 8.14, // Number | 
  'closedAtDateQuarterGte': 8.14, // Number | 
  'closedAtDateQuarterLt': 8.14, // Number | 
  'closedAtDateQuarterLte': 8.14, // Number | 
  'closedAtDateQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateQuarterContains': 8.14, // Number | 
  'closedAtDateQuarterIcontains': 8.14, // Number | 
  'closedAtDateQuarterStartswith': 8.14, // Number | 
  'closedAtDateQuarterIstartswith': 8.14, // Number | 
  'closedAtDateQuarterEndswith': 8.14, // Number | 
  'closedAtDateQuarterIendswith': 8.14, // Number | 
  'closedAtDateQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateQuarterIsnull': "closedAtDateQuarterIsnull_example", // String | 
  'closedAtDateQuarterRegex': 8.14, // Number | 
  'closedAtDateQuarterIregex': 8.14, // Number | 
  'closedAtDateQuarterContainedBy': 8.14, // Number | 
  'closedAtDateContainedBy': "closedAtDateContainedBy_example", // String | 
  'closedAtTime': "closedAtTime_example", // String | 
  'closedAtTimeIexact': "closedAtTimeIexact_example", // String | 
  'closedAtTimeGt': "closedAtTimeGt_example", // String | 
  'closedAtTimeGte': "closedAtTimeGte_example", // String | 
  'closedAtTimeLt': "closedAtTimeLt_example", // String | 
  'closedAtTimeLte': "closedAtTimeLte_example", // String | 
  'closedAtTimeIn': "closedAtTimeIn_example", // String | Multiple values may be separated by commas.
  'closedAtTimeContains': "closedAtTimeContains_example", // String | 
  'closedAtTimeIcontains': "closedAtTimeIcontains_example", // String | 
  'closedAtTimeStartswith': "closedAtTimeStartswith_example", // String | 
  'closedAtTimeIstartswith': "closedAtTimeIstartswith_example", // String | 
  'closedAtTimeEndswith': "closedAtTimeEndswith_example", // String | 
  'closedAtTimeIendswith': "closedAtTimeIendswith_example", // String | 
  'closedAtTimeRange': "closedAtTimeRange_example", // String | Multiple values may be separated by commas.
  'closedAtTimeIsnull': "closedAtTimeIsnull_example", // String | 
  'closedAtTimeRegex': "closedAtTimeRegex_example", // String | 
  'closedAtTimeIregex': "closedAtTimeIregex_example", // String | 
  'closedAtTimeHour': 8.14, // Number | 
  'closedAtTimeHourIexact': 8.14, // Number | 
  'closedAtTimeHourGt': 8.14, // Number | 
  'closedAtTimeHourGte': 8.14, // Number | 
  'closedAtTimeHourLt': 8.14, // Number | 
  'closedAtTimeHourLte': 8.14, // Number | 
  'closedAtTimeHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeHourContains': 8.14, // Number | 
  'closedAtTimeHourIcontains': 8.14, // Number | 
  'closedAtTimeHourStartswith': 8.14, // Number | 
  'closedAtTimeHourIstartswith': 8.14, // Number | 
  'closedAtTimeHourEndswith': 8.14, // Number | 
  'closedAtTimeHourIendswith': 8.14, // Number | 
  'closedAtTimeHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeHourIsnull': "closedAtTimeHourIsnull_example", // String | 
  'closedAtTimeHourRegex': 8.14, // Number | 
  'closedAtTimeHourIregex': 8.14, // Number | 
  'closedAtTimeHourContainedBy': 8.14, // Number | 
  'closedAtTimeMinute': 8.14, // Number | 
  'closedAtTimeMinuteIexact': 8.14, // Number | 
  'closedAtTimeMinuteGt': 8.14, // Number | 
  'closedAtTimeMinuteGte': 8.14, // Number | 
  'closedAtTimeMinuteLt': 8.14, // Number | 
  'closedAtTimeMinuteLte': 8.14, // Number | 
  'closedAtTimeMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeMinuteContains': 8.14, // Number | 
  'closedAtTimeMinuteIcontains': 8.14, // Number | 
  'closedAtTimeMinuteStartswith': 8.14, // Number | 
  'closedAtTimeMinuteIstartswith': 8.14, // Number | 
  'closedAtTimeMinuteEndswith': 8.14, // Number | 
  'closedAtTimeMinuteIendswith': 8.14, // Number | 
  'closedAtTimeMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeMinuteIsnull': "closedAtTimeMinuteIsnull_example", // String | 
  'closedAtTimeMinuteRegex': 8.14, // Number | 
  'closedAtTimeMinuteIregex': 8.14, // Number | 
  'closedAtTimeMinuteContainedBy': 8.14, // Number | 
  'closedAtTimeSecond': 8.14, // Number | 
  'closedAtTimeSecondIexact': 8.14, // Number | 
  'closedAtTimeSecondGt': 8.14, // Number | 
  'closedAtTimeSecondGte': 8.14, // Number | 
  'closedAtTimeSecondLt': 8.14, // Number | 
  'closedAtTimeSecondLte': 8.14, // Number | 
  'closedAtTimeSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeSecondContains': 8.14, // Number | 
  'closedAtTimeSecondIcontains': 8.14, // Number | 
  'closedAtTimeSecondStartswith': 8.14, // Number | 
  'closedAtTimeSecondIstartswith': 8.14, // Number | 
  'closedAtTimeSecondEndswith': 8.14, // Number | 
  'closedAtTimeSecondIendswith': 8.14, // Number | 
  'closedAtTimeSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeSecondIsnull': "closedAtTimeSecondIsnull_example", // String | 
  'closedAtTimeSecondRegex': 8.14, // Number | 
  'closedAtTimeSecondIregex': 8.14, // Number | 
  'closedAtTimeSecondContainedBy': 8.14, // Number | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.metricsTeamsSuppressionsByCommunityList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **reason** | **String**|  | [optional] 
 **closedAt** | **String**|  | [optional] 
 **closedAtIexact** | **String**|  | [optional] 
 **closedAtGt** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLt** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **closedAtIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtContains** | **String**|  | [optional] 
 **closedAtIcontains** | **String**|  | [optional] 
 **closedAtStartswith** | **String**|  | [optional] 
 **closedAtIstartswith** | **String**|  | [optional] 
 **closedAtEndswith** | **String**|  | [optional] 
 **closedAtIendswith** | **String**|  | [optional] 
 **closedAtRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsnull** | **String**|  | [optional] 
 **closedAtRegex** | **String**|  | [optional] 
 **closedAtIregex** | **String**|  | [optional] 
 **closedAtYear** | **Number**|  | [optional] 
 **closedAtYearIexact** | **Number**|  | [optional] 
 **closedAtYearGt** | **Number**|  | [optional] 
 **closedAtYearGte** | **Number**|  | [optional] 
 **closedAtYearLt** | **Number**|  | [optional] 
 **closedAtYearLte** | **Number**|  | [optional] 
 **closedAtYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtYearContains** | **Number**|  | [optional] 
 **closedAtYearIcontains** | **Number**|  | [optional] 
 **closedAtYearStartswith** | **Number**|  | [optional] 
 **closedAtYearIstartswith** | **Number**|  | [optional] 
 **closedAtYearEndswith** | **Number**|  | [optional] 
 **closedAtYearIendswith** | **Number**|  | [optional] 
 **closedAtYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtYearIsnull** | **String**|  | [optional] 
 **closedAtYearRegex** | **Number**|  | [optional] 
 **closedAtYearIregex** | **Number**|  | [optional] 
 **closedAtYearContainedBy** | **Number**|  | [optional] 
 **closedAtMonth** | **Number**|  | [optional] 
 **closedAtMonthIexact** | **Number**|  | [optional] 
 **closedAtMonthGt** | **Number**|  | [optional] 
 **closedAtMonthGte** | **Number**|  | [optional] 
 **closedAtMonthLt** | **Number**|  | [optional] 
 **closedAtMonthLte** | **Number**|  | [optional] 
 **closedAtMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMonthContains** | **Number**|  | [optional] 
 **closedAtMonthIcontains** | **Number**|  | [optional] 
 **closedAtMonthStartswith** | **Number**|  | [optional] 
 **closedAtMonthIstartswith** | **Number**|  | [optional] 
 **closedAtMonthEndswith** | **Number**|  | [optional] 
 **closedAtMonthIendswith** | **Number**|  | [optional] 
 **closedAtMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMonthIsnull** | **String**|  | [optional] 
 **closedAtMonthRegex** | **Number**|  | [optional] 
 **closedAtMonthIregex** | **Number**|  | [optional] 
 **closedAtMonthContainedBy** | **Number**|  | [optional] 
 **closedAtDay** | **Number**|  | [optional] 
 **closedAtDayIexact** | **Number**|  | [optional] 
 **closedAtDayGt** | **Number**|  | [optional] 
 **closedAtDayGte** | **Number**|  | [optional] 
 **closedAtDayLt** | **Number**|  | [optional] 
 **closedAtDayLte** | **Number**|  | [optional] 
 **closedAtDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDayContains** | **Number**|  | [optional] 
 **closedAtDayIcontains** | **Number**|  | [optional] 
 **closedAtDayStartswith** | **Number**|  | [optional] 
 **closedAtDayIstartswith** | **Number**|  | [optional] 
 **closedAtDayEndswith** | **Number**|  | [optional] 
 **closedAtDayIendswith** | **Number**|  | [optional] 
 **closedAtDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDayIsnull** | **String**|  | [optional] 
 **closedAtDayRegex** | **Number**|  | [optional] 
 **closedAtDayIregex** | **Number**|  | [optional] 
 **closedAtDayContainedBy** | **Number**|  | [optional] 
 **closedAtWeekDay** | **Number**|  | [optional] 
 **closedAtWeekDayIexact** | **Number**|  | [optional] 
 **closedAtWeekDayGt** | **Number**|  | [optional] 
 **closedAtWeekDayGte** | **Number**|  | [optional] 
 **closedAtWeekDayLt** | **Number**|  | [optional] 
 **closedAtWeekDayLte** | **Number**|  | [optional] 
 **closedAtWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekDayContains** | **Number**|  | [optional] 
 **closedAtWeekDayIcontains** | **Number**|  | [optional] 
 **closedAtWeekDayStartswith** | **Number**|  | [optional] 
 **closedAtWeekDayIstartswith** | **Number**|  | [optional] 
 **closedAtWeekDayEndswith** | **Number**|  | [optional] 
 **closedAtWeekDayIendswith** | **Number**|  | [optional] 
 **closedAtWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekDayIsnull** | **String**|  | [optional] 
 **closedAtWeekDayRegex** | **Number**|  | [optional] 
 **closedAtWeekDayIregex** | **Number**|  | [optional] 
 **closedAtWeekDayContainedBy** | **Number**|  | [optional] 
 **closedAtWeek** | **Number**|  | [optional] 
 **closedAtWeekIexact** | **Number**|  | [optional] 
 **closedAtWeekGt** | **Number**|  | [optional] 
 **closedAtWeekGte** | **Number**|  | [optional] 
 **closedAtWeekLt** | **Number**|  | [optional] 
 **closedAtWeekLte** | **Number**|  | [optional] 
 **closedAtWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekContains** | **Number**|  | [optional] 
 **closedAtWeekIcontains** | **Number**|  | [optional] 
 **closedAtWeekStartswith** | **Number**|  | [optional] 
 **closedAtWeekIstartswith** | **Number**|  | [optional] 
 **closedAtWeekEndswith** | **Number**|  | [optional] 
 **closedAtWeekIendswith** | **Number**|  | [optional] 
 **closedAtWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekIsnull** | **String**|  | [optional] 
 **closedAtWeekRegex** | **Number**|  | [optional] 
 **closedAtWeekIregex** | **Number**|  | [optional] 
 **closedAtWeekContainedBy** | **Number**|  | [optional] 
 **closedAtIsoYear** | **Number**|  | [optional] 
 **closedAtIsoYearIexact** | **Number**|  | [optional] 
 **closedAtIsoYearGt** | **Number**|  | [optional] 
 **closedAtIsoYearGte** | **Number**|  | [optional] 
 **closedAtIsoYearLt** | **Number**|  | [optional] 
 **closedAtIsoYearLte** | **Number**|  | [optional] 
 **closedAtIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsoYearContains** | **Number**|  | [optional] 
 **closedAtIsoYearIcontains** | **Number**|  | [optional] 
 **closedAtIsoYearStartswith** | **Number**|  | [optional] 
 **closedAtIsoYearIstartswith** | **Number**|  | [optional] 
 **closedAtIsoYearEndswith** | **Number**|  | [optional] 
 **closedAtIsoYearIendswith** | **Number**|  | [optional] 
 **closedAtIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsoYearIsnull** | **String**|  | [optional] 
 **closedAtIsoYearRegex** | **Number**|  | [optional] 
 **closedAtIsoYearIregex** | **Number**|  | [optional] 
 **closedAtIsoYearContainedBy** | **Number**|  | [optional] 
 **closedAtQuarter** | **Number**|  | [optional] 
 **closedAtQuarterIexact** | **Number**|  | [optional] 
 **closedAtQuarterGt** | **Number**|  | [optional] 
 **closedAtQuarterGte** | **Number**|  | [optional] 
 **closedAtQuarterLt** | **Number**|  | [optional] 
 **closedAtQuarterLte** | **Number**|  | [optional] 
 **closedAtQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtQuarterContains** | **Number**|  | [optional] 
 **closedAtQuarterIcontains** | **Number**|  | [optional] 
 **closedAtQuarterStartswith** | **Number**|  | [optional] 
 **closedAtQuarterIstartswith** | **Number**|  | [optional] 
 **closedAtQuarterEndswith** | **Number**|  | [optional] 
 **closedAtQuarterIendswith** | **Number**|  | [optional] 
 **closedAtQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtQuarterIsnull** | **String**|  | [optional] 
 **closedAtQuarterRegex** | **Number**|  | [optional] 
 **closedAtQuarterIregex** | **Number**|  | [optional] 
 **closedAtQuarterContainedBy** | **Number**|  | [optional] 
 **closedAtContainedBy** | **String**|  | [optional] 
 **closedAtHour** | **Number**|  | [optional] 
 **closedAtHourIexact** | **Number**|  | [optional] 
 **closedAtHourGt** | **Number**|  | [optional] 
 **closedAtHourGte** | **Number**|  | [optional] 
 **closedAtHourLt** | **Number**|  | [optional] 
 **closedAtHourLte** | **Number**|  | [optional] 
 **closedAtHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtHourContains** | **Number**|  | [optional] 
 **closedAtHourIcontains** | **Number**|  | [optional] 
 **closedAtHourStartswith** | **Number**|  | [optional] 
 **closedAtHourIstartswith** | **Number**|  | [optional] 
 **closedAtHourEndswith** | **Number**|  | [optional] 
 **closedAtHourIendswith** | **Number**|  | [optional] 
 **closedAtHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtHourIsnull** | **String**|  | [optional] 
 **closedAtHourRegex** | **Number**|  | [optional] 
 **closedAtHourIregex** | **Number**|  | [optional] 
 **closedAtHourContainedBy** | **Number**|  | [optional] 
 **closedAtMinute** | **Number**|  | [optional] 
 **closedAtMinuteIexact** | **Number**|  | [optional] 
 **closedAtMinuteGt** | **Number**|  | [optional] 
 **closedAtMinuteGte** | **Number**|  | [optional] 
 **closedAtMinuteLt** | **Number**|  | [optional] 
 **closedAtMinuteLte** | **Number**|  | [optional] 
 **closedAtMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMinuteContains** | **Number**|  | [optional] 
 **closedAtMinuteIcontains** | **Number**|  | [optional] 
 **closedAtMinuteStartswith** | **Number**|  | [optional] 
 **closedAtMinuteIstartswith** | **Number**|  | [optional] 
 **closedAtMinuteEndswith** | **Number**|  | [optional] 
 **closedAtMinuteIendswith** | **Number**|  | [optional] 
 **closedAtMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMinuteIsnull** | **String**|  | [optional] 
 **closedAtMinuteRegex** | **Number**|  | [optional] 
 **closedAtMinuteIregex** | **Number**|  | [optional] 
 **closedAtMinuteContainedBy** | **Number**|  | [optional] 
 **closedAtSecond** | **Number**|  | [optional] 
 **closedAtSecondIexact** | **Number**|  | [optional] 
 **closedAtSecondGt** | **Number**|  | [optional] 
 **closedAtSecondGte** | **Number**|  | [optional] 
 **closedAtSecondLt** | **Number**|  | [optional] 
 **closedAtSecondLte** | **Number**|  | [optional] 
 **closedAtSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtSecondContains** | **Number**|  | [optional] 
 **closedAtSecondIcontains** | **Number**|  | [optional] 
 **closedAtSecondStartswith** | **Number**|  | [optional] 
 **closedAtSecondIstartswith** | **Number**|  | [optional] 
 **closedAtSecondEndswith** | **Number**|  | [optional] 
 **closedAtSecondIendswith** | **Number**|  | [optional] 
 **closedAtSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtSecondIsnull** | **String**|  | [optional] 
 **closedAtSecondRegex** | **Number**|  | [optional] 
 **closedAtSecondIregex** | **Number**|  | [optional] 
 **closedAtSecondContainedBy** | **Number**|  | [optional] 
 **closedAtDate** | **String**|  | [optional] 
 **closedAtDateIexact** | **String**|  | [optional] 
 **closedAtDateGt** | **String**|  | [optional] 
 **closedAtDateGte** | **String**|  | [optional] 
 **closedAtDateLt** | **String**|  | [optional] 
 **closedAtDateLte** | **String**|  | [optional] 
 **closedAtDateIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateContains** | **String**|  | [optional] 
 **closedAtDateIcontains** | **String**|  | [optional] 
 **closedAtDateStartswith** | **String**|  | [optional] 
 **closedAtDateIstartswith** | **String**|  | [optional] 
 **closedAtDateEndswith** | **String**|  | [optional] 
 **closedAtDateIendswith** | **String**|  | [optional] 
 **closedAtDateRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsnull** | **String**|  | [optional] 
 **closedAtDateRegex** | **String**|  | [optional] 
 **closedAtDateIregex** | **String**|  | [optional] 
 **closedAtDateYear** | **Number**|  | [optional] 
 **closedAtDateYearIexact** | **Number**|  | [optional] 
 **closedAtDateYearGt** | **Number**|  | [optional] 
 **closedAtDateYearGte** | **Number**|  | [optional] 
 **closedAtDateYearLt** | **Number**|  | [optional] 
 **closedAtDateYearLte** | **Number**|  | [optional] 
 **closedAtDateYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateYearContains** | **Number**|  | [optional] 
 **closedAtDateYearIcontains** | **Number**|  | [optional] 
 **closedAtDateYearStartswith** | **Number**|  | [optional] 
 **closedAtDateYearIstartswith** | **Number**|  | [optional] 
 **closedAtDateYearEndswith** | **Number**|  | [optional] 
 **closedAtDateYearIendswith** | **Number**|  | [optional] 
 **closedAtDateYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateYearIsnull** | **String**|  | [optional] 
 **closedAtDateYearRegex** | **Number**|  | [optional] 
 **closedAtDateYearIregex** | **Number**|  | [optional] 
 **closedAtDateYearContainedBy** | **Number**|  | [optional] 
 **closedAtDateMonth** | **Number**|  | [optional] 
 **closedAtDateMonthIexact** | **Number**|  | [optional] 
 **closedAtDateMonthGt** | **Number**|  | [optional] 
 **closedAtDateMonthGte** | **Number**|  | [optional] 
 **closedAtDateMonthLt** | **Number**|  | [optional] 
 **closedAtDateMonthLte** | **Number**|  | [optional] 
 **closedAtDateMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateMonthContains** | **Number**|  | [optional] 
 **closedAtDateMonthIcontains** | **Number**|  | [optional] 
 **closedAtDateMonthStartswith** | **Number**|  | [optional] 
 **closedAtDateMonthIstartswith** | **Number**|  | [optional] 
 **closedAtDateMonthEndswith** | **Number**|  | [optional] 
 **closedAtDateMonthIendswith** | **Number**|  | [optional] 
 **closedAtDateMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateMonthIsnull** | **String**|  | [optional] 
 **closedAtDateMonthRegex** | **Number**|  | [optional] 
 **closedAtDateMonthIregex** | **Number**|  | [optional] 
 **closedAtDateMonthContainedBy** | **Number**|  | [optional] 
 **closedAtDateDay** | **Number**|  | [optional] 
 **closedAtDateDayIexact** | **Number**|  | [optional] 
 **closedAtDateDayGt** | **Number**|  | [optional] 
 **closedAtDateDayGte** | **Number**|  | [optional] 
 **closedAtDateDayLt** | **Number**|  | [optional] 
 **closedAtDateDayLte** | **Number**|  | [optional] 
 **closedAtDateDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateDayContains** | **Number**|  | [optional] 
 **closedAtDateDayIcontains** | **Number**|  | [optional] 
 **closedAtDateDayStartswith** | **Number**|  | [optional] 
 **closedAtDateDayIstartswith** | **Number**|  | [optional] 
 **closedAtDateDayEndswith** | **Number**|  | [optional] 
 **closedAtDateDayIendswith** | **Number**|  | [optional] 
 **closedAtDateDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateDayIsnull** | **String**|  | [optional] 
 **closedAtDateDayRegex** | **Number**|  | [optional] 
 **closedAtDateDayIregex** | **Number**|  | [optional] 
 **closedAtDateDayContainedBy** | **Number**|  | [optional] 
 **closedAtDateWeekDay** | **Number**|  | [optional] 
 **closedAtDateWeekDayIexact** | **Number**|  | [optional] 
 **closedAtDateWeekDayGt** | **Number**|  | [optional] 
 **closedAtDateWeekDayGte** | **Number**|  | [optional] 
 **closedAtDateWeekDayLt** | **Number**|  | [optional] 
 **closedAtDateWeekDayLte** | **Number**|  | [optional] 
 **closedAtDateWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekDayContains** | **Number**|  | [optional] 
 **closedAtDateWeekDayIcontains** | **Number**|  | [optional] 
 **closedAtDateWeekDayStartswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayIstartswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayEndswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayIendswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekDayIsnull** | **String**|  | [optional] 
 **closedAtDateWeekDayRegex** | **Number**|  | [optional] 
 **closedAtDateWeekDayIregex** | **Number**|  | [optional] 
 **closedAtDateWeekDayContainedBy** | **Number**|  | [optional] 
 **closedAtDateWeek** | **Number**|  | [optional] 
 **closedAtDateWeekIexact** | **Number**|  | [optional] 
 **closedAtDateWeekGt** | **Number**|  | [optional] 
 **closedAtDateWeekGte** | **Number**|  | [optional] 
 **closedAtDateWeekLt** | **Number**|  | [optional] 
 **closedAtDateWeekLte** | **Number**|  | [optional] 
 **closedAtDateWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekContains** | **Number**|  | [optional] 
 **closedAtDateWeekIcontains** | **Number**|  | [optional] 
 **closedAtDateWeekStartswith** | **Number**|  | [optional] 
 **closedAtDateWeekIstartswith** | **Number**|  | [optional] 
 **closedAtDateWeekEndswith** | **Number**|  | [optional] 
 **closedAtDateWeekIendswith** | **Number**|  | [optional] 
 **closedAtDateWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekIsnull** | **String**|  | [optional] 
 **closedAtDateWeekRegex** | **Number**|  | [optional] 
 **closedAtDateWeekIregex** | **Number**|  | [optional] 
 **closedAtDateWeekContainedBy** | **Number**|  | [optional] 
 **closedAtDateIsoYear** | **Number**|  | [optional] 
 **closedAtDateIsoYearIexact** | **Number**|  | [optional] 
 **closedAtDateIsoYearGt** | **Number**|  | [optional] 
 **closedAtDateIsoYearGte** | **Number**|  | [optional] 
 **closedAtDateIsoYearLt** | **Number**|  | [optional] 
 **closedAtDateIsoYearLte** | **Number**|  | [optional] 
 **closedAtDateIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsoYearContains** | **Number**|  | [optional] 
 **closedAtDateIsoYearIcontains** | **Number**|  | [optional] 
 **closedAtDateIsoYearStartswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearIstartswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearEndswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearIendswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsoYearIsnull** | **String**|  | [optional] 
 **closedAtDateIsoYearRegex** | **Number**|  | [optional] 
 **closedAtDateIsoYearIregex** | **Number**|  | [optional] 
 **closedAtDateIsoYearContainedBy** | **Number**|  | [optional] 
 **closedAtDateQuarter** | **Number**|  | [optional] 
 **closedAtDateQuarterIexact** | **Number**|  | [optional] 
 **closedAtDateQuarterGt** | **Number**|  | [optional] 
 **closedAtDateQuarterGte** | **Number**|  | [optional] 
 **closedAtDateQuarterLt** | **Number**|  | [optional] 
 **closedAtDateQuarterLte** | **Number**|  | [optional] 
 **closedAtDateQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateQuarterContains** | **Number**|  | [optional] 
 **closedAtDateQuarterIcontains** | **Number**|  | [optional] 
 **closedAtDateQuarterStartswith** | **Number**|  | [optional] 
 **closedAtDateQuarterIstartswith** | **Number**|  | [optional] 
 **closedAtDateQuarterEndswith** | **Number**|  | [optional] 
 **closedAtDateQuarterIendswith** | **Number**|  | [optional] 
 **closedAtDateQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateQuarterIsnull** | **String**|  | [optional] 
 **closedAtDateQuarterRegex** | **Number**|  | [optional] 
 **closedAtDateQuarterIregex** | **Number**|  | [optional] 
 **closedAtDateQuarterContainedBy** | **Number**|  | [optional] 
 **closedAtDateContainedBy** | **String**|  | [optional] 
 **closedAtTime** | **String**|  | [optional] 
 **closedAtTimeIexact** | **String**|  | [optional] 
 **closedAtTimeGt** | **String**|  | [optional] 
 **closedAtTimeGte** | **String**|  | [optional] 
 **closedAtTimeLt** | **String**|  | [optional] 
 **closedAtTimeLte** | **String**|  | [optional] 
 **closedAtTimeIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeContains** | **String**|  | [optional] 
 **closedAtTimeIcontains** | **String**|  | [optional] 
 **closedAtTimeStartswith** | **String**|  | [optional] 
 **closedAtTimeIstartswith** | **String**|  | [optional] 
 **closedAtTimeEndswith** | **String**|  | [optional] 
 **closedAtTimeIendswith** | **String**|  | [optional] 
 **closedAtTimeRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeIsnull** | **String**|  | [optional] 
 **closedAtTimeRegex** | **String**|  | [optional] 
 **closedAtTimeIregex** | **String**|  | [optional] 
 **closedAtTimeHour** | **Number**|  | [optional] 
 **closedAtTimeHourIexact** | **Number**|  | [optional] 
 **closedAtTimeHourGt** | **Number**|  | [optional] 
 **closedAtTimeHourGte** | **Number**|  | [optional] 
 **closedAtTimeHourLt** | **Number**|  | [optional] 
 **closedAtTimeHourLte** | **Number**|  | [optional] 
 **closedAtTimeHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeHourContains** | **Number**|  | [optional] 
 **closedAtTimeHourIcontains** | **Number**|  | [optional] 
 **closedAtTimeHourStartswith** | **Number**|  | [optional] 
 **closedAtTimeHourIstartswith** | **Number**|  | [optional] 
 **closedAtTimeHourEndswith** | **Number**|  | [optional] 
 **closedAtTimeHourIendswith** | **Number**|  | [optional] 
 **closedAtTimeHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeHourIsnull** | **String**|  | [optional] 
 **closedAtTimeHourRegex** | **Number**|  | [optional] 
 **closedAtTimeHourIregex** | **Number**|  | [optional] 
 **closedAtTimeHourContainedBy** | **Number**|  | [optional] 
 **closedAtTimeMinute** | **Number**|  | [optional] 
 **closedAtTimeMinuteIexact** | **Number**|  | [optional] 
 **closedAtTimeMinuteGt** | **Number**|  | [optional] 
 **closedAtTimeMinuteGte** | **Number**|  | [optional] 
 **closedAtTimeMinuteLt** | **Number**|  | [optional] 
 **closedAtTimeMinuteLte** | **Number**|  | [optional] 
 **closedAtTimeMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeMinuteContains** | **Number**|  | [optional] 
 **closedAtTimeMinuteIcontains** | **Number**|  | [optional] 
 **closedAtTimeMinuteStartswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteIstartswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteEndswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteIendswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeMinuteIsnull** | **String**|  | [optional] 
 **closedAtTimeMinuteRegex** | **Number**|  | [optional] 
 **closedAtTimeMinuteIregex** | **Number**|  | [optional] 
 **closedAtTimeMinuteContainedBy** | **Number**|  | [optional] 
 **closedAtTimeSecond** | **Number**|  | [optional] 
 **closedAtTimeSecondIexact** | **Number**|  | [optional] 
 **closedAtTimeSecondGt** | **Number**|  | [optional] 
 **closedAtTimeSecondGte** | **Number**|  | [optional] 
 **closedAtTimeSecondLt** | **Number**|  | [optional] 
 **closedAtTimeSecondLte** | **Number**|  | [optional] 
 **closedAtTimeSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeSecondContains** | **Number**|  | [optional] 
 **closedAtTimeSecondIcontains** | **Number**|  | [optional] 
 **closedAtTimeSecondStartswith** | **Number**|  | [optional] 
 **closedAtTimeSecondIstartswith** | **Number**|  | [optional] 
 **closedAtTimeSecondEndswith** | **Number**|  | [optional] 
 **closedAtTimeSecondIendswith** | **Number**|  | [optional] 
 **closedAtTimeSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeSecondIsnull** | **String**|  | [optional] 
 **closedAtTimeSecondRegex** | **Number**|  | [optional] 
 **closedAtTimeSecondIregex** | **Number**|  | [optional] 
 **closedAtTimeSecondContainedBy** | **Number**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[CommunityNameChartSerializer]**](CommunityNameChartSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="metricsTeamsSuppressionsList"></a>
# **metricsTeamsSuppressionsList**
> [TeamSuppressionReasons] metricsTeamsSuppressionsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.MetricsApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'closedAt': "closedAt_example", // String | 
  'closedAtIexact': "closedAtIexact_example", // String | 
  'closedAtGt': "closedAtGt_example", // String | 
  'closedAtGte': "closedAtGte_example", // String | 
  'closedAtLt': "closedAtLt_example", // String | 
  'closedAtLte': "closedAtLte_example", // String | 
  'closedAtIn': "closedAtIn_example", // String | Multiple values may be separated by commas.
  'closedAtContains': "closedAtContains_example", // String | 
  'closedAtIcontains': "closedAtIcontains_example", // String | 
  'closedAtStartswith': "closedAtStartswith_example", // String | 
  'closedAtIstartswith': "closedAtIstartswith_example", // String | 
  'closedAtEndswith': "closedAtEndswith_example", // String | 
  'closedAtIendswith': "closedAtIendswith_example", // String | 
  'closedAtRange': "closedAtRange_example", // String | Multiple values may be separated by commas.
  'closedAtIsnull': "closedAtIsnull_example", // String | 
  'closedAtRegex': "closedAtRegex_example", // String | 
  'closedAtIregex': "closedAtIregex_example", // String | 
  'closedAtYear': 8.14, // Number | 
  'closedAtYearIexact': 8.14, // Number | 
  'closedAtYearGt': 8.14, // Number | 
  'closedAtYearGte': 8.14, // Number | 
  'closedAtYearLt': 8.14, // Number | 
  'closedAtYearLte': 8.14, // Number | 
  'closedAtYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtYearContains': 8.14, // Number | 
  'closedAtYearIcontains': 8.14, // Number | 
  'closedAtYearStartswith': 8.14, // Number | 
  'closedAtYearIstartswith': 8.14, // Number | 
  'closedAtYearEndswith': 8.14, // Number | 
  'closedAtYearIendswith': 8.14, // Number | 
  'closedAtYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtYearIsnull': "closedAtYearIsnull_example", // String | 
  'closedAtYearRegex': 8.14, // Number | 
  'closedAtYearIregex': 8.14, // Number | 
  'closedAtYearContainedBy': 8.14, // Number | 
  'closedAtMonth': 8.14, // Number | 
  'closedAtMonthIexact': 8.14, // Number | 
  'closedAtMonthGt': 8.14, // Number | 
  'closedAtMonthGte': 8.14, // Number | 
  'closedAtMonthLt': 8.14, // Number | 
  'closedAtMonthLte': 8.14, // Number | 
  'closedAtMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMonthContains': 8.14, // Number | 
  'closedAtMonthIcontains': 8.14, // Number | 
  'closedAtMonthStartswith': 8.14, // Number | 
  'closedAtMonthIstartswith': 8.14, // Number | 
  'closedAtMonthEndswith': 8.14, // Number | 
  'closedAtMonthIendswith': 8.14, // Number | 
  'closedAtMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMonthIsnull': "closedAtMonthIsnull_example", // String | 
  'closedAtMonthRegex': 8.14, // Number | 
  'closedAtMonthIregex': 8.14, // Number | 
  'closedAtMonthContainedBy': 8.14, // Number | 
  'closedAtDay': 8.14, // Number | 
  'closedAtDayIexact': 8.14, // Number | 
  'closedAtDayGt': 8.14, // Number | 
  'closedAtDayGte': 8.14, // Number | 
  'closedAtDayLt': 8.14, // Number | 
  'closedAtDayLte': 8.14, // Number | 
  'closedAtDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDayContains': 8.14, // Number | 
  'closedAtDayIcontains': 8.14, // Number | 
  'closedAtDayStartswith': 8.14, // Number | 
  'closedAtDayIstartswith': 8.14, // Number | 
  'closedAtDayEndswith': 8.14, // Number | 
  'closedAtDayIendswith': 8.14, // Number | 
  'closedAtDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDayIsnull': "closedAtDayIsnull_example", // String | 
  'closedAtDayRegex': 8.14, // Number | 
  'closedAtDayIregex': 8.14, // Number | 
  'closedAtDayContainedBy': 8.14, // Number | 
  'closedAtWeekDay': 8.14, // Number | 
  'closedAtWeekDayIexact': 8.14, // Number | 
  'closedAtWeekDayGt': 8.14, // Number | 
  'closedAtWeekDayGte': 8.14, // Number | 
  'closedAtWeekDayLt': 8.14, // Number | 
  'closedAtWeekDayLte': 8.14, // Number | 
  'closedAtWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekDayContains': 8.14, // Number | 
  'closedAtWeekDayIcontains': 8.14, // Number | 
  'closedAtWeekDayStartswith': 8.14, // Number | 
  'closedAtWeekDayIstartswith': 8.14, // Number | 
  'closedAtWeekDayEndswith': 8.14, // Number | 
  'closedAtWeekDayIendswith': 8.14, // Number | 
  'closedAtWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekDayIsnull': "closedAtWeekDayIsnull_example", // String | 
  'closedAtWeekDayRegex': 8.14, // Number | 
  'closedAtWeekDayIregex': 8.14, // Number | 
  'closedAtWeekDayContainedBy': 8.14, // Number | 
  'closedAtWeek': 8.14, // Number | 
  'closedAtWeekIexact': 8.14, // Number | 
  'closedAtWeekGt': 8.14, // Number | 
  'closedAtWeekGte': 8.14, // Number | 
  'closedAtWeekLt': 8.14, // Number | 
  'closedAtWeekLte': 8.14, // Number | 
  'closedAtWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekContains': 8.14, // Number | 
  'closedAtWeekIcontains': 8.14, // Number | 
  'closedAtWeekStartswith': 8.14, // Number | 
  'closedAtWeekIstartswith': 8.14, // Number | 
  'closedAtWeekEndswith': 8.14, // Number | 
  'closedAtWeekIendswith': 8.14, // Number | 
  'closedAtWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtWeekIsnull': "closedAtWeekIsnull_example", // String | 
  'closedAtWeekRegex': 8.14, // Number | 
  'closedAtWeekIregex': 8.14, // Number | 
  'closedAtWeekContainedBy': 8.14, // Number | 
  'closedAtIsoYear': 8.14, // Number | 
  'closedAtIsoYearIexact': 8.14, // Number | 
  'closedAtIsoYearGt': 8.14, // Number | 
  'closedAtIsoYearGte': 8.14, // Number | 
  'closedAtIsoYearLt': 8.14, // Number | 
  'closedAtIsoYearLte': 8.14, // Number | 
  'closedAtIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtIsoYearContains': 8.14, // Number | 
  'closedAtIsoYearIcontains': 8.14, // Number | 
  'closedAtIsoYearStartswith': 8.14, // Number | 
  'closedAtIsoYearIstartswith': 8.14, // Number | 
  'closedAtIsoYearEndswith': 8.14, // Number | 
  'closedAtIsoYearIendswith': 8.14, // Number | 
  'closedAtIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtIsoYearIsnull': "closedAtIsoYearIsnull_example", // String | 
  'closedAtIsoYearRegex': 8.14, // Number | 
  'closedAtIsoYearIregex': 8.14, // Number | 
  'closedAtIsoYearContainedBy': 8.14, // Number | 
  'closedAtQuarter': 8.14, // Number | 
  'closedAtQuarterIexact': 8.14, // Number | 
  'closedAtQuarterGt': 8.14, // Number | 
  'closedAtQuarterGte': 8.14, // Number | 
  'closedAtQuarterLt': 8.14, // Number | 
  'closedAtQuarterLte': 8.14, // Number | 
  'closedAtQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtQuarterContains': 8.14, // Number | 
  'closedAtQuarterIcontains': 8.14, // Number | 
  'closedAtQuarterStartswith': 8.14, // Number | 
  'closedAtQuarterIstartswith': 8.14, // Number | 
  'closedAtQuarterEndswith': 8.14, // Number | 
  'closedAtQuarterIendswith': 8.14, // Number | 
  'closedAtQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtQuarterIsnull': "closedAtQuarterIsnull_example", // String | 
  'closedAtQuarterRegex': 8.14, // Number | 
  'closedAtQuarterIregex': 8.14, // Number | 
  'closedAtQuarterContainedBy': 8.14, // Number | 
  'closedAtContainedBy': "closedAtContainedBy_example", // String | 
  'closedAtHour': 8.14, // Number | 
  'closedAtHourIexact': 8.14, // Number | 
  'closedAtHourGt': 8.14, // Number | 
  'closedAtHourGte': 8.14, // Number | 
  'closedAtHourLt': 8.14, // Number | 
  'closedAtHourLte': 8.14, // Number | 
  'closedAtHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtHourContains': 8.14, // Number | 
  'closedAtHourIcontains': 8.14, // Number | 
  'closedAtHourStartswith': 8.14, // Number | 
  'closedAtHourIstartswith': 8.14, // Number | 
  'closedAtHourEndswith': 8.14, // Number | 
  'closedAtHourIendswith': 8.14, // Number | 
  'closedAtHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtHourIsnull': "closedAtHourIsnull_example", // String | 
  'closedAtHourRegex': 8.14, // Number | 
  'closedAtHourIregex': 8.14, // Number | 
  'closedAtHourContainedBy': 8.14, // Number | 
  'closedAtMinute': 8.14, // Number | 
  'closedAtMinuteIexact': 8.14, // Number | 
  'closedAtMinuteGt': 8.14, // Number | 
  'closedAtMinuteGte': 8.14, // Number | 
  'closedAtMinuteLt': 8.14, // Number | 
  'closedAtMinuteLte': 8.14, // Number | 
  'closedAtMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMinuteContains': 8.14, // Number | 
  'closedAtMinuteIcontains': 8.14, // Number | 
  'closedAtMinuteStartswith': 8.14, // Number | 
  'closedAtMinuteIstartswith': 8.14, // Number | 
  'closedAtMinuteEndswith': 8.14, // Number | 
  'closedAtMinuteIendswith': 8.14, // Number | 
  'closedAtMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtMinuteIsnull': "closedAtMinuteIsnull_example", // String | 
  'closedAtMinuteRegex': 8.14, // Number | 
  'closedAtMinuteIregex': 8.14, // Number | 
  'closedAtMinuteContainedBy': 8.14, // Number | 
  'closedAtSecond': 8.14, // Number | 
  'closedAtSecondIexact': 8.14, // Number | 
  'closedAtSecondGt': 8.14, // Number | 
  'closedAtSecondGte': 8.14, // Number | 
  'closedAtSecondLt': 8.14, // Number | 
  'closedAtSecondLte': 8.14, // Number | 
  'closedAtSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtSecondContains': 8.14, // Number | 
  'closedAtSecondIcontains': 8.14, // Number | 
  'closedAtSecondStartswith': 8.14, // Number | 
  'closedAtSecondIstartswith': 8.14, // Number | 
  'closedAtSecondEndswith': 8.14, // Number | 
  'closedAtSecondIendswith': 8.14, // Number | 
  'closedAtSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtSecondIsnull': "closedAtSecondIsnull_example", // String | 
  'closedAtSecondRegex': 8.14, // Number | 
  'closedAtSecondIregex': 8.14, // Number | 
  'closedAtSecondContainedBy': 8.14, // Number | 
  'closedAtDate': "closedAtDate_example", // String | 
  'closedAtDateIexact': "closedAtDateIexact_example", // String | 
  'closedAtDateGt': "closedAtDateGt_example", // String | 
  'closedAtDateGte': "closedAtDateGte_example", // String | 
  'closedAtDateLt': "closedAtDateLt_example", // String | 
  'closedAtDateLte': "closedAtDateLte_example", // String | 
  'closedAtDateIn': "closedAtDateIn_example", // String | Multiple values may be separated by commas.
  'closedAtDateContains': "closedAtDateContains_example", // String | 
  'closedAtDateIcontains': "closedAtDateIcontains_example", // String | 
  'closedAtDateStartswith': "closedAtDateStartswith_example", // String | 
  'closedAtDateIstartswith': "closedAtDateIstartswith_example", // String | 
  'closedAtDateEndswith': "closedAtDateEndswith_example", // String | 
  'closedAtDateIendswith': "closedAtDateIendswith_example", // String | 
  'closedAtDateRange': "closedAtDateRange_example", // String | Multiple values may be separated by commas.
  'closedAtDateIsnull': "closedAtDateIsnull_example", // String | 
  'closedAtDateRegex': "closedAtDateRegex_example", // String | 
  'closedAtDateIregex': "closedAtDateIregex_example", // String | 
  'closedAtDateYear': 8.14, // Number | 
  'closedAtDateYearIexact': 8.14, // Number | 
  'closedAtDateYearGt': 8.14, // Number | 
  'closedAtDateYearGte': 8.14, // Number | 
  'closedAtDateYearLt': 8.14, // Number | 
  'closedAtDateYearLte': 8.14, // Number | 
  'closedAtDateYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateYearContains': 8.14, // Number | 
  'closedAtDateYearIcontains': 8.14, // Number | 
  'closedAtDateYearStartswith': 8.14, // Number | 
  'closedAtDateYearIstartswith': 8.14, // Number | 
  'closedAtDateYearEndswith': 8.14, // Number | 
  'closedAtDateYearIendswith': 8.14, // Number | 
  'closedAtDateYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateYearIsnull': "closedAtDateYearIsnull_example", // String | 
  'closedAtDateYearRegex': 8.14, // Number | 
  'closedAtDateYearIregex': 8.14, // Number | 
  'closedAtDateYearContainedBy': 8.14, // Number | 
  'closedAtDateMonth': 8.14, // Number | 
  'closedAtDateMonthIexact': 8.14, // Number | 
  'closedAtDateMonthGt': 8.14, // Number | 
  'closedAtDateMonthGte': 8.14, // Number | 
  'closedAtDateMonthLt': 8.14, // Number | 
  'closedAtDateMonthLte': 8.14, // Number | 
  'closedAtDateMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateMonthContains': 8.14, // Number | 
  'closedAtDateMonthIcontains': 8.14, // Number | 
  'closedAtDateMonthStartswith': 8.14, // Number | 
  'closedAtDateMonthIstartswith': 8.14, // Number | 
  'closedAtDateMonthEndswith': 8.14, // Number | 
  'closedAtDateMonthIendswith': 8.14, // Number | 
  'closedAtDateMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateMonthIsnull': "closedAtDateMonthIsnull_example", // String | 
  'closedAtDateMonthRegex': 8.14, // Number | 
  'closedAtDateMonthIregex': 8.14, // Number | 
  'closedAtDateMonthContainedBy': 8.14, // Number | 
  'closedAtDateDay': 8.14, // Number | 
  'closedAtDateDayIexact': 8.14, // Number | 
  'closedAtDateDayGt': 8.14, // Number | 
  'closedAtDateDayGte': 8.14, // Number | 
  'closedAtDateDayLt': 8.14, // Number | 
  'closedAtDateDayLte': 8.14, // Number | 
  'closedAtDateDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateDayContains': 8.14, // Number | 
  'closedAtDateDayIcontains': 8.14, // Number | 
  'closedAtDateDayStartswith': 8.14, // Number | 
  'closedAtDateDayIstartswith': 8.14, // Number | 
  'closedAtDateDayEndswith': 8.14, // Number | 
  'closedAtDateDayIendswith': 8.14, // Number | 
  'closedAtDateDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateDayIsnull': "closedAtDateDayIsnull_example", // String | 
  'closedAtDateDayRegex': 8.14, // Number | 
  'closedAtDateDayIregex': 8.14, // Number | 
  'closedAtDateDayContainedBy': 8.14, // Number | 
  'closedAtDateWeekDay': 8.14, // Number | 
  'closedAtDateWeekDayIexact': 8.14, // Number | 
  'closedAtDateWeekDayGt': 8.14, // Number | 
  'closedAtDateWeekDayGte': 8.14, // Number | 
  'closedAtDateWeekDayLt': 8.14, // Number | 
  'closedAtDateWeekDayLte': 8.14, // Number | 
  'closedAtDateWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekDayContains': 8.14, // Number | 
  'closedAtDateWeekDayIcontains': 8.14, // Number | 
  'closedAtDateWeekDayStartswith': 8.14, // Number | 
  'closedAtDateWeekDayIstartswith': 8.14, // Number | 
  'closedAtDateWeekDayEndswith': 8.14, // Number | 
  'closedAtDateWeekDayIendswith': 8.14, // Number | 
  'closedAtDateWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekDayIsnull': "closedAtDateWeekDayIsnull_example", // String | 
  'closedAtDateWeekDayRegex': 8.14, // Number | 
  'closedAtDateWeekDayIregex': 8.14, // Number | 
  'closedAtDateWeekDayContainedBy': 8.14, // Number | 
  'closedAtDateWeek': 8.14, // Number | 
  'closedAtDateWeekIexact': 8.14, // Number | 
  'closedAtDateWeekGt': 8.14, // Number | 
  'closedAtDateWeekGte': 8.14, // Number | 
  'closedAtDateWeekLt': 8.14, // Number | 
  'closedAtDateWeekLte': 8.14, // Number | 
  'closedAtDateWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekContains': 8.14, // Number | 
  'closedAtDateWeekIcontains': 8.14, // Number | 
  'closedAtDateWeekStartswith': 8.14, // Number | 
  'closedAtDateWeekIstartswith': 8.14, // Number | 
  'closedAtDateWeekEndswith': 8.14, // Number | 
  'closedAtDateWeekIendswith': 8.14, // Number | 
  'closedAtDateWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateWeekIsnull': "closedAtDateWeekIsnull_example", // String | 
  'closedAtDateWeekRegex': 8.14, // Number | 
  'closedAtDateWeekIregex': 8.14, // Number | 
  'closedAtDateWeekContainedBy': 8.14, // Number | 
  'closedAtDateIsoYear': 8.14, // Number | 
  'closedAtDateIsoYearIexact': 8.14, // Number | 
  'closedAtDateIsoYearGt': 8.14, // Number | 
  'closedAtDateIsoYearGte': 8.14, // Number | 
  'closedAtDateIsoYearLt': 8.14, // Number | 
  'closedAtDateIsoYearLte': 8.14, // Number | 
  'closedAtDateIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateIsoYearContains': 8.14, // Number | 
  'closedAtDateIsoYearIcontains': 8.14, // Number | 
  'closedAtDateIsoYearStartswith': 8.14, // Number | 
  'closedAtDateIsoYearIstartswith': 8.14, // Number | 
  'closedAtDateIsoYearEndswith': 8.14, // Number | 
  'closedAtDateIsoYearIendswith': 8.14, // Number | 
  'closedAtDateIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateIsoYearIsnull': "closedAtDateIsoYearIsnull_example", // String | 
  'closedAtDateIsoYearRegex': 8.14, // Number | 
  'closedAtDateIsoYearIregex': 8.14, // Number | 
  'closedAtDateIsoYearContainedBy': 8.14, // Number | 
  'closedAtDateQuarter': 8.14, // Number | 
  'closedAtDateQuarterIexact': 8.14, // Number | 
  'closedAtDateQuarterGt': 8.14, // Number | 
  'closedAtDateQuarterGte': 8.14, // Number | 
  'closedAtDateQuarterLt': 8.14, // Number | 
  'closedAtDateQuarterLte': 8.14, // Number | 
  'closedAtDateQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateQuarterContains': 8.14, // Number | 
  'closedAtDateQuarterIcontains': 8.14, // Number | 
  'closedAtDateQuarterStartswith': 8.14, // Number | 
  'closedAtDateQuarterIstartswith': 8.14, // Number | 
  'closedAtDateQuarterEndswith': 8.14, // Number | 
  'closedAtDateQuarterIendswith': 8.14, // Number | 
  'closedAtDateQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtDateQuarterIsnull': "closedAtDateQuarterIsnull_example", // String | 
  'closedAtDateQuarterRegex': 8.14, // Number | 
  'closedAtDateQuarterIregex': 8.14, // Number | 
  'closedAtDateQuarterContainedBy': 8.14, // Number | 
  'closedAtDateContainedBy': "closedAtDateContainedBy_example", // String | 
  'closedAtTime': "closedAtTime_example", // String | 
  'closedAtTimeIexact': "closedAtTimeIexact_example", // String | 
  'closedAtTimeGt': "closedAtTimeGt_example", // String | 
  'closedAtTimeGte': "closedAtTimeGte_example", // String | 
  'closedAtTimeLt': "closedAtTimeLt_example", // String | 
  'closedAtTimeLte': "closedAtTimeLte_example", // String | 
  'closedAtTimeIn': "closedAtTimeIn_example", // String | Multiple values may be separated by commas.
  'closedAtTimeContains': "closedAtTimeContains_example", // String | 
  'closedAtTimeIcontains': "closedAtTimeIcontains_example", // String | 
  'closedAtTimeStartswith': "closedAtTimeStartswith_example", // String | 
  'closedAtTimeIstartswith': "closedAtTimeIstartswith_example", // String | 
  'closedAtTimeEndswith': "closedAtTimeEndswith_example", // String | 
  'closedAtTimeIendswith': "closedAtTimeIendswith_example", // String | 
  'closedAtTimeRange': "closedAtTimeRange_example", // String | Multiple values may be separated by commas.
  'closedAtTimeIsnull': "closedAtTimeIsnull_example", // String | 
  'closedAtTimeRegex': "closedAtTimeRegex_example", // String | 
  'closedAtTimeIregex': "closedAtTimeIregex_example", // String | 
  'closedAtTimeHour': 8.14, // Number | 
  'closedAtTimeHourIexact': 8.14, // Number | 
  'closedAtTimeHourGt': 8.14, // Number | 
  'closedAtTimeHourGte': 8.14, // Number | 
  'closedAtTimeHourLt': 8.14, // Number | 
  'closedAtTimeHourLte': 8.14, // Number | 
  'closedAtTimeHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeHourContains': 8.14, // Number | 
  'closedAtTimeHourIcontains': 8.14, // Number | 
  'closedAtTimeHourStartswith': 8.14, // Number | 
  'closedAtTimeHourIstartswith': 8.14, // Number | 
  'closedAtTimeHourEndswith': 8.14, // Number | 
  'closedAtTimeHourIendswith': 8.14, // Number | 
  'closedAtTimeHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeHourIsnull': "closedAtTimeHourIsnull_example", // String | 
  'closedAtTimeHourRegex': 8.14, // Number | 
  'closedAtTimeHourIregex': 8.14, // Number | 
  'closedAtTimeHourContainedBy': 8.14, // Number | 
  'closedAtTimeMinute': 8.14, // Number | 
  'closedAtTimeMinuteIexact': 8.14, // Number | 
  'closedAtTimeMinuteGt': 8.14, // Number | 
  'closedAtTimeMinuteGte': 8.14, // Number | 
  'closedAtTimeMinuteLt': 8.14, // Number | 
  'closedAtTimeMinuteLte': 8.14, // Number | 
  'closedAtTimeMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeMinuteContains': 8.14, // Number | 
  'closedAtTimeMinuteIcontains': 8.14, // Number | 
  'closedAtTimeMinuteStartswith': 8.14, // Number | 
  'closedAtTimeMinuteIstartswith': 8.14, // Number | 
  'closedAtTimeMinuteEndswith': 8.14, // Number | 
  'closedAtTimeMinuteIendswith': 8.14, // Number | 
  'closedAtTimeMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeMinuteIsnull': "closedAtTimeMinuteIsnull_example", // String | 
  'closedAtTimeMinuteRegex': 8.14, // Number | 
  'closedAtTimeMinuteIregex': 8.14, // Number | 
  'closedAtTimeMinuteContainedBy': 8.14, // Number | 
  'closedAtTimeSecond': 8.14, // Number | 
  'closedAtTimeSecondIexact': 8.14, // Number | 
  'closedAtTimeSecondGt': 8.14, // Number | 
  'closedAtTimeSecondGte': 8.14, // Number | 
  'closedAtTimeSecondLt': 8.14, // Number | 
  'closedAtTimeSecondLte': 8.14, // Number | 
  'closedAtTimeSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeSecondContains': 8.14, // Number | 
  'closedAtTimeSecondIcontains': 8.14, // Number | 
  'closedAtTimeSecondStartswith': 8.14, // Number | 
  'closedAtTimeSecondIstartswith': 8.14, // Number | 
  'closedAtTimeSecondEndswith': 8.14, // Number | 
  'closedAtTimeSecondIendswith': 8.14, // Number | 
  'closedAtTimeSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'closedAtTimeSecondIsnull': "closedAtTimeSecondIsnull_example", // String | 
  'closedAtTimeSecondRegex': 8.14, // Number | 
  'closedAtTimeSecondIregex': 8.14, // Number | 
  'closedAtTimeSecondContainedBy': 8.14, // Number | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.metricsTeamsSuppressionsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **closedAt** | **String**|  | [optional] 
 **closedAtIexact** | **String**|  | [optional] 
 **closedAtGt** | **String**|  | [optional] 
 **closedAtGte** | **String**|  | [optional] 
 **closedAtLt** | **String**|  | [optional] 
 **closedAtLte** | **String**|  | [optional] 
 **closedAtIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtContains** | **String**|  | [optional] 
 **closedAtIcontains** | **String**|  | [optional] 
 **closedAtStartswith** | **String**|  | [optional] 
 **closedAtIstartswith** | **String**|  | [optional] 
 **closedAtEndswith** | **String**|  | [optional] 
 **closedAtIendswith** | **String**|  | [optional] 
 **closedAtRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsnull** | **String**|  | [optional] 
 **closedAtRegex** | **String**|  | [optional] 
 **closedAtIregex** | **String**|  | [optional] 
 **closedAtYear** | **Number**|  | [optional] 
 **closedAtYearIexact** | **Number**|  | [optional] 
 **closedAtYearGt** | **Number**|  | [optional] 
 **closedAtYearGte** | **Number**|  | [optional] 
 **closedAtYearLt** | **Number**|  | [optional] 
 **closedAtYearLte** | **Number**|  | [optional] 
 **closedAtYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtYearContains** | **Number**|  | [optional] 
 **closedAtYearIcontains** | **Number**|  | [optional] 
 **closedAtYearStartswith** | **Number**|  | [optional] 
 **closedAtYearIstartswith** | **Number**|  | [optional] 
 **closedAtYearEndswith** | **Number**|  | [optional] 
 **closedAtYearIendswith** | **Number**|  | [optional] 
 **closedAtYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtYearIsnull** | **String**|  | [optional] 
 **closedAtYearRegex** | **Number**|  | [optional] 
 **closedAtYearIregex** | **Number**|  | [optional] 
 **closedAtYearContainedBy** | **Number**|  | [optional] 
 **closedAtMonth** | **Number**|  | [optional] 
 **closedAtMonthIexact** | **Number**|  | [optional] 
 **closedAtMonthGt** | **Number**|  | [optional] 
 **closedAtMonthGte** | **Number**|  | [optional] 
 **closedAtMonthLt** | **Number**|  | [optional] 
 **closedAtMonthLte** | **Number**|  | [optional] 
 **closedAtMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMonthContains** | **Number**|  | [optional] 
 **closedAtMonthIcontains** | **Number**|  | [optional] 
 **closedAtMonthStartswith** | **Number**|  | [optional] 
 **closedAtMonthIstartswith** | **Number**|  | [optional] 
 **closedAtMonthEndswith** | **Number**|  | [optional] 
 **closedAtMonthIendswith** | **Number**|  | [optional] 
 **closedAtMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMonthIsnull** | **String**|  | [optional] 
 **closedAtMonthRegex** | **Number**|  | [optional] 
 **closedAtMonthIregex** | **Number**|  | [optional] 
 **closedAtMonthContainedBy** | **Number**|  | [optional] 
 **closedAtDay** | **Number**|  | [optional] 
 **closedAtDayIexact** | **Number**|  | [optional] 
 **closedAtDayGt** | **Number**|  | [optional] 
 **closedAtDayGte** | **Number**|  | [optional] 
 **closedAtDayLt** | **Number**|  | [optional] 
 **closedAtDayLte** | **Number**|  | [optional] 
 **closedAtDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDayContains** | **Number**|  | [optional] 
 **closedAtDayIcontains** | **Number**|  | [optional] 
 **closedAtDayStartswith** | **Number**|  | [optional] 
 **closedAtDayIstartswith** | **Number**|  | [optional] 
 **closedAtDayEndswith** | **Number**|  | [optional] 
 **closedAtDayIendswith** | **Number**|  | [optional] 
 **closedAtDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDayIsnull** | **String**|  | [optional] 
 **closedAtDayRegex** | **Number**|  | [optional] 
 **closedAtDayIregex** | **Number**|  | [optional] 
 **closedAtDayContainedBy** | **Number**|  | [optional] 
 **closedAtWeekDay** | **Number**|  | [optional] 
 **closedAtWeekDayIexact** | **Number**|  | [optional] 
 **closedAtWeekDayGt** | **Number**|  | [optional] 
 **closedAtWeekDayGte** | **Number**|  | [optional] 
 **closedAtWeekDayLt** | **Number**|  | [optional] 
 **closedAtWeekDayLte** | **Number**|  | [optional] 
 **closedAtWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekDayContains** | **Number**|  | [optional] 
 **closedAtWeekDayIcontains** | **Number**|  | [optional] 
 **closedAtWeekDayStartswith** | **Number**|  | [optional] 
 **closedAtWeekDayIstartswith** | **Number**|  | [optional] 
 **closedAtWeekDayEndswith** | **Number**|  | [optional] 
 **closedAtWeekDayIendswith** | **Number**|  | [optional] 
 **closedAtWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekDayIsnull** | **String**|  | [optional] 
 **closedAtWeekDayRegex** | **Number**|  | [optional] 
 **closedAtWeekDayIregex** | **Number**|  | [optional] 
 **closedAtWeekDayContainedBy** | **Number**|  | [optional] 
 **closedAtWeek** | **Number**|  | [optional] 
 **closedAtWeekIexact** | **Number**|  | [optional] 
 **closedAtWeekGt** | **Number**|  | [optional] 
 **closedAtWeekGte** | **Number**|  | [optional] 
 **closedAtWeekLt** | **Number**|  | [optional] 
 **closedAtWeekLte** | **Number**|  | [optional] 
 **closedAtWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekContains** | **Number**|  | [optional] 
 **closedAtWeekIcontains** | **Number**|  | [optional] 
 **closedAtWeekStartswith** | **Number**|  | [optional] 
 **closedAtWeekIstartswith** | **Number**|  | [optional] 
 **closedAtWeekEndswith** | **Number**|  | [optional] 
 **closedAtWeekIendswith** | **Number**|  | [optional] 
 **closedAtWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtWeekIsnull** | **String**|  | [optional] 
 **closedAtWeekRegex** | **Number**|  | [optional] 
 **closedAtWeekIregex** | **Number**|  | [optional] 
 **closedAtWeekContainedBy** | **Number**|  | [optional] 
 **closedAtIsoYear** | **Number**|  | [optional] 
 **closedAtIsoYearIexact** | **Number**|  | [optional] 
 **closedAtIsoYearGt** | **Number**|  | [optional] 
 **closedAtIsoYearGte** | **Number**|  | [optional] 
 **closedAtIsoYearLt** | **Number**|  | [optional] 
 **closedAtIsoYearLte** | **Number**|  | [optional] 
 **closedAtIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsoYearContains** | **Number**|  | [optional] 
 **closedAtIsoYearIcontains** | **Number**|  | [optional] 
 **closedAtIsoYearStartswith** | **Number**|  | [optional] 
 **closedAtIsoYearIstartswith** | **Number**|  | [optional] 
 **closedAtIsoYearEndswith** | **Number**|  | [optional] 
 **closedAtIsoYearIendswith** | **Number**|  | [optional] 
 **closedAtIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtIsoYearIsnull** | **String**|  | [optional] 
 **closedAtIsoYearRegex** | **Number**|  | [optional] 
 **closedAtIsoYearIregex** | **Number**|  | [optional] 
 **closedAtIsoYearContainedBy** | **Number**|  | [optional] 
 **closedAtQuarter** | **Number**|  | [optional] 
 **closedAtQuarterIexact** | **Number**|  | [optional] 
 **closedAtQuarterGt** | **Number**|  | [optional] 
 **closedAtQuarterGte** | **Number**|  | [optional] 
 **closedAtQuarterLt** | **Number**|  | [optional] 
 **closedAtQuarterLte** | **Number**|  | [optional] 
 **closedAtQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtQuarterContains** | **Number**|  | [optional] 
 **closedAtQuarterIcontains** | **Number**|  | [optional] 
 **closedAtQuarterStartswith** | **Number**|  | [optional] 
 **closedAtQuarterIstartswith** | **Number**|  | [optional] 
 **closedAtQuarterEndswith** | **Number**|  | [optional] 
 **closedAtQuarterIendswith** | **Number**|  | [optional] 
 **closedAtQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtQuarterIsnull** | **String**|  | [optional] 
 **closedAtQuarterRegex** | **Number**|  | [optional] 
 **closedAtQuarterIregex** | **Number**|  | [optional] 
 **closedAtQuarterContainedBy** | **Number**|  | [optional] 
 **closedAtContainedBy** | **String**|  | [optional] 
 **closedAtHour** | **Number**|  | [optional] 
 **closedAtHourIexact** | **Number**|  | [optional] 
 **closedAtHourGt** | **Number**|  | [optional] 
 **closedAtHourGte** | **Number**|  | [optional] 
 **closedAtHourLt** | **Number**|  | [optional] 
 **closedAtHourLte** | **Number**|  | [optional] 
 **closedAtHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtHourContains** | **Number**|  | [optional] 
 **closedAtHourIcontains** | **Number**|  | [optional] 
 **closedAtHourStartswith** | **Number**|  | [optional] 
 **closedAtHourIstartswith** | **Number**|  | [optional] 
 **closedAtHourEndswith** | **Number**|  | [optional] 
 **closedAtHourIendswith** | **Number**|  | [optional] 
 **closedAtHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtHourIsnull** | **String**|  | [optional] 
 **closedAtHourRegex** | **Number**|  | [optional] 
 **closedAtHourIregex** | **Number**|  | [optional] 
 **closedAtHourContainedBy** | **Number**|  | [optional] 
 **closedAtMinute** | **Number**|  | [optional] 
 **closedAtMinuteIexact** | **Number**|  | [optional] 
 **closedAtMinuteGt** | **Number**|  | [optional] 
 **closedAtMinuteGte** | **Number**|  | [optional] 
 **closedAtMinuteLt** | **Number**|  | [optional] 
 **closedAtMinuteLte** | **Number**|  | [optional] 
 **closedAtMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMinuteContains** | **Number**|  | [optional] 
 **closedAtMinuteIcontains** | **Number**|  | [optional] 
 **closedAtMinuteStartswith** | **Number**|  | [optional] 
 **closedAtMinuteIstartswith** | **Number**|  | [optional] 
 **closedAtMinuteEndswith** | **Number**|  | [optional] 
 **closedAtMinuteIendswith** | **Number**|  | [optional] 
 **closedAtMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtMinuteIsnull** | **String**|  | [optional] 
 **closedAtMinuteRegex** | **Number**|  | [optional] 
 **closedAtMinuteIregex** | **Number**|  | [optional] 
 **closedAtMinuteContainedBy** | **Number**|  | [optional] 
 **closedAtSecond** | **Number**|  | [optional] 
 **closedAtSecondIexact** | **Number**|  | [optional] 
 **closedAtSecondGt** | **Number**|  | [optional] 
 **closedAtSecondGte** | **Number**|  | [optional] 
 **closedAtSecondLt** | **Number**|  | [optional] 
 **closedAtSecondLte** | **Number**|  | [optional] 
 **closedAtSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtSecondContains** | **Number**|  | [optional] 
 **closedAtSecondIcontains** | **Number**|  | [optional] 
 **closedAtSecondStartswith** | **Number**|  | [optional] 
 **closedAtSecondIstartswith** | **Number**|  | [optional] 
 **closedAtSecondEndswith** | **Number**|  | [optional] 
 **closedAtSecondIendswith** | **Number**|  | [optional] 
 **closedAtSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtSecondIsnull** | **String**|  | [optional] 
 **closedAtSecondRegex** | **Number**|  | [optional] 
 **closedAtSecondIregex** | **Number**|  | [optional] 
 **closedAtSecondContainedBy** | **Number**|  | [optional] 
 **closedAtDate** | **String**|  | [optional] 
 **closedAtDateIexact** | **String**|  | [optional] 
 **closedAtDateGt** | **String**|  | [optional] 
 **closedAtDateGte** | **String**|  | [optional] 
 **closedAtDateLt** | **String**|  | [optional] 
 **closedAtDateLte** | **String**|  | [optional] 
 **closedAtDateIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateContains** | **String**|  | [optional] 
 **closedAtDateIcontains** | **String**|  | [optional] 
 **closedAtDateStartswith** | **String**|  | [optional] 
 **closedAtDateIstartswith** | **String**|  | [optional] 
 **closedAtDateEndswith** | **String**|  | [optional] 
 **closedAtDateIendswith** | **String**|  | [optional] 
 **closedAtDateRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsnull** | **String**|  | [optional] 
 **closedAtDateRegex** | **String**|  | [optional] 
 **closedAtDateIregex** | **String**|  | [optional] 
 **closedAtDateYear** | **Number**|  | [optional] 
 **closedAtDateYearIexact** | **Number**|  | [optional] 
 **closedAtDateYearGt** | **Number**|  | [optional] 
 **closedAtDateYearGte** | **Number**|  | [optional] 
 **closedAtDateYearLt** | **Number**|  | [optional] 
 **closedAtDateYearLte** | **Number**|  | [optional] 
 **closedAtDateYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateYearContains** | **Number**|  | [optional] 
 **closedAtDateYearIcontains** | **Number**|  | [optional] 
 **closedAtDateYearStartswith** | **Number**|  | [optional] 
 **closedAtDateYearIstartswith** | **Number**|  | [optional] 
 **closedAtDateYearEndswith** | **Number**|  | [optional] 
 **closedAtDateYearIendswith** | **Number**|  | [optional] 
 **closedAtDateYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateYearIsnull** | **String**|  | [optional] 
 **closedAtDateYearRegex** | **Number**|  | [optional] 
 **closedAtDateYearIregex** | **Number**|  | [optional] 
 **closedAtDateYearContainedBy** | **Number**|  | [optional] 
 **closedAtDateMonth** | **Number**|  | [optional] 
 **closedAtDateMonthIexact** | **Number**|  | [optional] 
 **closedAtDateMonthGt** | **Number**|  | [optional] 
 **closedAtDateMonthGte** | **Number**|  | [optional] 
 **closedAtDateMonthLt** | **Number**|  | [optional] 
 **closedAtDateMonthLte** | **Number**|  | [optional] 
 **closedAtDateMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateMonthContains** | **Number**|  | [optional] 
 **closedAtDateMonthIcontains** | **Number**|  | [optional] 
 **closedAtDateMonthStartswith** | **Number**|  | [optional] 
 **closedAtDateMonthIstartswith** | **Number**|  | [optional] 
 **closedAtDateMonthEndswith** | **Number**|  | [optional] 
 **closedAtDateMonthIendswith** | **Number**|  | [optional] 
 **closedAtDateMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateMonthIsnull** | **String**|  | [optional] 
 **closedAtDateMonthRegex** | **Number**|  | [optional] 
 **closedAtDateMonthIregex** | **Number**|  | [optional] 
 **closedAtDateMonthContainedBy** | **Number**|  | [optional] 
 **closedAtDateDay** | **Number**|  | [optional] 
 **closedAtDateDayIexact** | **Number**|  | [optional] 
 **closedAtDateDayGt** | **Number**|  | [optional] 
 **closedAtDateDayGte** | **Number**|  | [optional] 
 **closedAtDateDayLt** | **Number**|  | [optional] 
 **closedAtDateDayLte** | **Number**|  | [optional] 
 **closedAtDateDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateDayContains** | **Number**|  | [optional] 
 **closedAtDateDayIcontains** | **Number**|  | [optional] 
 **closedAtDateDayStartswith** | **Number**|  | [optional] 
 **closedAtDateDayIstartswith** | **Number**|  | [optional] 
 **closedAtDateDayEndswith** | **Number**|  | [optional] 
 **closedAtDateDayIendswith** | **Number**|  | [optional] 
 **closedAtDateDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateDayIsnull** | **String**|  | [optional] 
 **closedAtDateDayRegex** | **Number**|  | [optional] 
 **closedAtDateDayIregex** | **Number**|  | [optional] 
 **closedAtDateDayContainedBy** | **Number**|  | [optional] 
 **closedAtDateWeekDay** | **Number**|  | [optional] 
 **closedAtDateWeekDayIexact** | **Number**|  | [optional] 
 **closedAtDateWeekDayGt** | **Number**|  | [optional] 
 **closedAtDateWeekDayGte** | **Number**|  | [optional] 
 **closedAtDateWeekDayLt** | **Number**|  | [optional] 
 **closedAtDateWeekDayLte** | **Number**|  | [optional] 
 **closedAtDateWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekDayContains** | **Number**|  | [optional] 
 **closedAtDateWeekDayIcontains** | **Number**|  | [optional] 
 **closedAtDateWeekDayStartswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayIstartswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayEndswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayIendswith** | **Number**|  | [optional] 
 **closedAtDateWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekDayIsnull** | **String**|  | [optional] 
 **closedAtDateWeekDayRegex** | **Number**|  | [optional] 
 **closedAtDateWeekDayIregex** | **Number**|  | [optional] 
 **closedAtDateWeekDayContainedBy** | **Number**|  | [optional] 
 **closedAtDateWeek** | **Number**|  | [optional] 
 **closedAtDateWeekIexact** | **Number**|  | [optional] 
 **closedAtDateWeekGt** | **Number**|  | [optional] 
 **closedAtDateWeekGte** | **Number**|  | [optional] 
 **closedAtDateWeekLt** | **Number**|  | [optional] 
 **closedAtDateWeekLte** | **Number**|  | [optional] 
 **closedAtDateWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekContains** | **Number**|  | [optional] 
 **closedAtDateWeekIcontains** | **Number**|  | [optional] 
 **closedAtDateWeekStartswith** | **Number**|  | [optional] 
 **closedAtDateWeekIstartswith** | **Number**|  | [optional] 
 **closedAtDateWeekEndswith** | **Number**|  | [optional] 
 **closedAtDateWeekIendswith** | **Number**|  | [optional] 
 **closedAtDateWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateWeekIsnull** | **String**|  | [optional] 
 **closedAtDateWeekRegex** | **Number**|  | [optional] 
 **closedAtDateWeekIregex** | **Number**|  | [optional] 
 **closedAtDateWeekContainedBy** | **Number**|  | [optional] 
 **closedAtDateIsoYear** | **Number**|  | [optional] 
 **closedAtDateIsoYearIexact** | **Number**|  | [optional] 
 **closedAtDateIsoYearGt** | **Number**|  | [optional] 
 **closedAtDateIsoYearGte** | **Number**|  | [optional] 
 **closedAtDateIsoYearLt** | **Number**|  | [optional] 
 **closedAtDateIsoYearLte** | **Number**|  | [optional] 
 **closedAtDateIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsoYearContains** | **Number**|  | [optional] 
 **closedAtDateIsoYearIcontains** | **Number**|  | [optional] 
 **closedAtDateIsoYearStartswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearIstartswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearEndswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearIendswith** | **Number**|  | [optional] 
 **closedAtDateIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateIsoYearIsnull** | **String**|  | [optional] 
 **closedAtDateIsoYearRegex** | **Number**|  | [optional] 
 **closedAtDateIsoYearIregex** | **Number**|  | [optional] 
 **closedAtDateIsoYearContainedBy** | **Number**|  | [optional] 
 **closedAtDateQuarter** | **Number**|  | [optional] 
 **closedAtDateQuarterIexact** | **Number**|  | [optional] 
 **closedAtDateQuarterGt** | **Number**|  | [optional] 
 **closedAtDateQuarterGte** | **Number**|  | [optional] 
 **closedAtDateQuarterLt** | **Number**|  | [optional] 
 **closedAtDateQuarterLte** | **Number**|  | [optional] 
 **closedAtDateQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateQuarterContains** | **Number**|  | [optional] 
 **closedAtDateQuarterIcontains** | **Number**|  | [optional] 
 **closedAtDateQuarterStartswith** | **Number**|  | [optional] 
 **closedAtDateQuarterIstartswith** | **Number**|  | [optional] 
 **closedAtDateQuarterEndswith** | **Number**|  | [optional] 
 **closedAtDateQuarterIendswith** | **Number**|  | [optional] 
 **closedAtDateQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtDateQuarterIsnull** | **String**|  | [optional] 
 **closedAtDateQuarterRegex** | **Number**|  | [optional] 
 **closedAtDateQuarterIregex** | **Number**|  | [optional] 
 **closedAtDateQuarterContainedBy** | **Number**|  | [optional] 
 **closedAtDateContainedBy** | **String**|  | [optional] 
 **closedAtTime** | **String**|  | [optional] 
 **closedAtTimeIexact** | **String**|  | [optional] 
 **closedAtTimeGt** | **String**|  | [optional] 
 **closedAtTimeGte** | **String**|  | [optional] 
 **closedAtTimeLt** | **String**|  | [optional] 
 **closedAtTimeLte** | **String**|  | [optional] 
 **closedAtTimeIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeContains** | **String**|  | [optional] 
 **closedAtTimeIcontains** | **String**|  | [optional] 
 **closedAtTimeStartswith** | **String**|  | [optional] 
 **closedAtTimeIstartswith** | **String**|  | [optional] 
 **closedAtTimeEndswith** | **String**|  | [optional] 
 **closedAtTimeIendswith** | **String**|  | [optional] 
 **closedAtTimeRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeIsnull** | **String**|  | [optional] 
 **closedAtTimeRegex** | **String**|  | [optional] 
 **closedAtTimeIregex** | **String**|  | [optional] 
 **closedAtTimeHour** | **Number**|  | [optional] 
 **closedAtTimeHourIexact** | **Number**|  | [optional] 
 **closedAtTimeHourGt** | **Number**|  | [optional] 
 **closedAtTimeHourGte** | **Number**|  | [optional] 
 **closedAtTimeHourLt** | **Number**|  | [optional] 
 **closedAtTimeHourLte** | **Number**|  | [optional] 
 **closedAtTimeHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeHourContains** | **Number**|  | [optional] 
 **closedAtTimeHourIcontains** | **Number**|  | [optional] 
 **closedAtTimeHourStartswith** | **Number**|  | [optional] 
 **closedAtTimeHourIstartswith** | **Number**|  | [optional] 
 **closedAtTimeHourEndswith** | **Number**|  | [optional] 
 **closedAtTimeHourIendswith** | **Number**|  | [optional] 
 **closedAtTimeHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeHourIsnull** | **String**|  | [optional] 
 **closedAtTimeHourRegex** | **Number**|  | [optional] 
 **closedAtTimeHourIregex** | **Number**|  | [optional] 
 **closedAtTimeHourContainedBy** | **Number**|  | [optional] 
 **closedAtTimeMinute** | **Number**|  | [optional] 
 **closedAtTimeMinuteIexact** | **Number**|  | [optional] 
 **closedAtTimeMinuteGt** | **Number**|  | [optional] 
 **closedAtTimeMinuteGte** | **Number**|  | [optional] 
 **closedAtTimeMinuteLt** | **Number**|  | [optional] 
 **closedAtTimeMinuteLte** | **Number**|  | [optional] 
 **closedAtTimeMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeMinuteContains** | **Number**|  | [optional] 
 **closedAtTimeMinuteIcontains** | **Number**|  | [optional] 
 **closedAtTimeMinuteStartswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteIstartswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteEndswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteIendswith** | **Number**|  | [optional] 
 **closedAtTimeMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeMinuteIsnull** | **String**|  | [optional] 
 **closedAtTimeMinuteRegex** | **Number**|  | [optional] 
 **closedAtTimeMinuteIregex** | **Number**|  | [optional] 
 **closedAtTimeMinuteContainedBy** | **Number**|  | [optional] 
 **closedAtTimeSecond** | **Number**|  | [optional] 
 **closedAtTimeSecondIexact** | **Number**|  | [optional] 
 **closedAtTimeSecondGt** | **Number**|  | [optional] 
 **closedAtTimeSecondGte** | **Number**|  | [optional] 
 **closedAtTimeSecondLt** | **Number**|  | [optional] 
 **closedAtTimeSecondLte** | **Number**|  | [optional] 
 **closedAtTimeSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeSecondContains** | **Number**|  | [optional] 
 **closedAtTimeSecondIcontains** | **Number**|  | [optional] 
 **closedAtTimeSecondStartswith** | **Number**|  | [optional] 
 **closedAtTimeSecondIstartswith** | **Number**|  | [optional] 
 **closedAtTimeSecondEndswith** | **Number**|  | [optional] 
 **closedAtTimeSecondIendswith** | **Number**|  | [optional] 
 **closedAtTimeSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **closedAtTimeSecondIsnull** | **String**|  | [optional] 
 **closedAtTimeSecondRegex** | **Number**|  | [optional] 
 **closedAtTimeSecondIregex** | **Number**|  | [optional] 
 **closedAtTimeSecondContainedBy** | **Number**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

[**[TeamSuppressionReasons]**](TeamSuppressionReasons.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

