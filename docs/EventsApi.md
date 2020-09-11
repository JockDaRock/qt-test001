# PerchApi.EventsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsByHostList**](EventsApi.md#eventsByHostList) | **GET** /events/by_host | 
[**eventsBySensorList**](EventsApi.md#eventsBySensorList) | **GET** /events/by_sensor | 
[**eventsHostsList**](EventsApi.md#eventsHostsList) | **GET** /events/{event_id}/hosts | 
[**eventsInstancesList**](EventsApi.md#eventsInstancesList) | **GET** /events/{event_id}/instances | 
[**eventsLatestList**](EventsApi.md#eventsLatestList) | **GET** /events/latest | 
[**eventsPagedList**](EventsApi.md#eventsPagedList) | **GET** /events/paged | 
[**eventsRead**](EventsApi.md#eventsRead) | **GET** /events/{event_id} | 
[**eventsStatusCountsList**](EventsApi.md#eventsStatusCountsList) | **GET** /events/status/counts | 
[**eventsStatusCreate**](EventsApi.md#eventsStatusCreate) | **POST** /events/{event_id}/status | 


<a name="eventsByHostList"></a>
# **eventsByHostList**
> eventsByHostList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsByHostList(callback);
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

<a name="eventsBySensorList"></a>
# **eventsBySensorList**
> eventsBySensorList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsBySensorList(callback);
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

<a name="eventsHostsList"></a>
# **eventsHostsList**
> eventsHostsList(eventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var eventId = "eventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsHostsList(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsInstancesList"></a>
# **eventsInstancesList**
> eventsInstancesList(eventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var eventId = "eventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsInstancesList(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsLatestList"></a>
# **eventsLatestList**
> eventsLatestList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsLatestList(callback);
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

<a name="eventsPagedList"></a>
# **eventsPagedList**
> eventsPagedList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsPagedList(callback);
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

<a name="eventsRead"></a>
# **eventsRead**
> eventsRead(eventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var eventId = "eventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsRead(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsStatusCountsList"></a>
# **eventsStatusCountsList**
> eventsStatusCountsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var opts = { 
  'teamId': "teamId_example", // String | 
  'indicatorId': "indicatorId_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'createdAtIexact': "createdAtIexact_example", // String | 
  'createdAtGt': "createdAtGt_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLt': "createdAtLt_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'createdAtIn': "createdAtIn_example", // String | Multiple values may be separated by commas.
  'createdAtContains': "createdAtContains_example", // String | 
  'createdAtIcontains': "createdAtIcontains_example", // String | 
  'createdAtStartswith': "createdAtStartswith_example", // String | 
  'createdAtIstartswith': "createdAtIstartswith_example", // String | 
  'createdAtEndswith': "createdAtEndswith_example", // String | 
  'createdAtIendswith': "createdAtIendswith_example", // String | 
  'createdAtRange': "createdAtRange_example", // String | Multiple values may be separated by commas.
  'createdAtIsnull': "createdAtIsnull_example", // String | 
  'createdAtRegex': "createdAtRegex_example", // String | 
  'createdAtIregex': "createdAtIregex_example", // String | 
  'createdAtYear': 8.14, // Number | 
  'createdAtYearIexact': 8.14, // Number | 
  'createdAtYearGt': 8.14, // Number | 
  'createdAtYearGte': 8.14, // Number | 
  'createdAtYearLt': 8.14, // Number | 
  'createdAtYearLte': 8.14, // Number | 
  'createdAtYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtYearContains': 8.14, // Number | 
  'createdAtYearIcontains': 8.14, // Number | 
  'createdAtYearStartswith': 8.14, // Number | 
  'createdAtYearIstartswith': 8.14, // Number | 
  'createdAtYearEndswith': 8.14, // Number | 
  'createdAtYearIendswith': 8.14, // Number | 
  'createdAtYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtYearIsnull': "createdAtYearIsnull_example", // String | 
  'createdAtYearRegex': 8.14, // Number | 
  'createdAtYearIregex': 8.14, // Number | 
  'createdAtYearContainedBy': 8.14, // Number | 
  'createdAtMonth': 8.14, // Number | 
  'createdAtMonthIexact': 8.14, // Number | 
  'createdAtMonthGt': 8.14, // Number | 
  'createdAtMonthGte': 8.14, // Number | 
  'createdAtMonthLt': 8.14, // Number | 
  'createdAtMonthLte': 8.14, // Number | 
  'createdAtMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtMonthContains': 8.14, // Number | 
  'createdAtMonthIcontains': 8.14, // Number | 
  'createdAtMonthStartswith': 8.14, // Number | 
  'createdAtMonthIstartswith': 8.14, // Number | 
  'createdAtMonthEndswith': 8.14, // Number | 
  'createdAtMonthIendswith': 8.14, // Number | 
  'createdAtMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtMonthIsnull': "createdAtMonthIsnull_example", // String | 
  'createdAtMonthRegex': 8.14, // Number | 
  'createdAtMonthIregex': 8.14, // Number | 
  'createdAtMonthContainedBy': 8.14, // Number | 
  'createdAtDay': 8.14, // Number | 
  'createdAtDayIexact': 8.14, // Number | 
  'createdAtDayGt': 8.14, // Number | 
  'createdAtDayGte': 8.14, // Number | 
  'createdAtDayLt': 8.14, // Number | 
  'createdAtDayLte': 8.14, // Number | 
  'createdAtDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDayContains': 8.14, // Number | 
  'createdAtDayIcontains': 8.14, // Number | 
  'createdAtDayStartswith': 8.14, // Number | 
  'createdAtDayIstartswith': 8.14, // Number | 
  'createdAtDayEndswith': 8.14, // Number | 
  'createdAtDayIendswith': 8.14, // Number | 
  'createdAtDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDayIsnull': "createdAtDayIsnull_example", // String | 
  'createdAtDayRegex': 8.14, // Number | 
  'createdAtDayIregex': 8.14, // Number | 
  'createdAtDayContainedBy': 8.14, // Number | 
  'createdAtWeekDay': 8.14, // Number | 
  'createdAtWeekDayIexact': 8.14, // Number | 
  'createdAtWeekDayGt': 8.14, // Number | 
  'createdAtWeekDayGte': 8.14, // Number | 
  'createdAtWeekDayLt': 8.14, // Number | 
  'createdAtWeekDayLte': 8.14, // Number | 
  'createdAtWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtWeekDayContains': 8.14, // Number | 
  'createdAtWeekDayIcontains': 8.14, // Number | 
  'createdAtWeekDayStartswith': 8.14, // Number | 
  'createdAtWeekDayIstartswith': 8.14, // Number | 
  'createdAtWeekDayEndswith': 8.14, // Number | 
  'createdAtWeekDayIendswith': 8.14, // Number | 
  'createdAtWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtWeekDayIsnull': "createdAtWeekDayIsnull_example", // String | 
  'createdAtWeekDayRegex': 8.14, // Number | 
  'createdAtWeekDayIregex': 8.14, // Number | 
  'createdAtWeekDayContainedBy': 8.14, // Number | 
  'createdAtWeek': 8.14, // Number | 
  'createdAtWeekIexact': 8.14, // Number | 
  'createdAtWeekGt': 8.14, // Number | 
  'createdAtWeekGte': 8.14, // Number | 
  'createdAtWeekLt': 8.14, // Number | 
  'createdAtWeekLte': 8.14, // Number | 
  'createdAtWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtWeekContains': 8.14, // Number | 
  'createdAtWeekIcontains': 8.14, // Number | 
  'createdAtWeekStartswith': 8.14, // Number | 
  'createdAtWeekIstartswith': 8.14, // Number | 
  'createdAtWeekEndswith': 8.14, // Number | 
  'createdAtWeekIendswith': 8.14, // Number | 
  'createdAtWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtWeekIsnull': "createdAtWeekIsnull_example", // String | 
  'createdAtWeekRegex': 8.14, // Number | 
  'createdAtWeekIregex': 8.14, // Number | 
  'createdAtWeekContainedBy': 8.14, // Number | 
  'createdAtIsoYear': 8.14, // Number | 
  'createdAtIsoYearIexact': 8.14, // Number | 
  'createdAtIsoYearGt': 8.14, // Number | 
  'createdAtIsoYearGte': 8.14, // Number | 
  'createdAtIsoYearLt': 8.14, // Number | 
  'createdAtIsoYearLte': 8.14, // Number | 
  'createdAtIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtIsoYearContains': 8.14, // Number | 
  'createdAtIsoYearIcontains': 8.14, // Number | 
  'createdAtIsoYearStartswith': 8.14, // Number | 
  'createdAtIsoYearIstartswith': 8.14, // Number | 
  'createdAtIsoYearEndswith': 8.14, // Number | 
  'createdAtIsoYearIendswith': 8.14, // Number | 
  'createdAtIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtIsoYearIsnull': "createdAtIsoYearIsnull_example", // String | 
  'createdAtIsoYearRegex': 8.14, // Number | 
  'createdAtIsoYearIregex': 8.14, // Number | 
  'createdAtIsoYearContainedBy': 8.14, // Number | 
  'createdAtQuarter': 8.14, // Number | 
  'createdAtQuarterIexact': 8.14, // Number | 
  'createdAtQuarterGt': 8.14, // Number | 
  'createdAtQuarterGte': 8.14, // Number | 
  'createdAtQuarterLt': 8.14, // Number | 
  'createdAtQuarterLte': 8.14, // Number | 
  'createdAtQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtQuarterContains': 8.14, // Number | 
  'createdAtQuarterIcontains': 8.14, // Number | 
  'createdAtQuarterStartswith': 8.14, // Number | 
  'createdAtQuarterIstartswith': 8.14, // Number | 
  'createdAtQuarterEndswith': 8.14, // Number | 
  'createdAtQuarterIendswith': 8.14, // Number | 
  'createdAtQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtQuarterIsnull': "createdAtQuarterIsnull_example", // String | 
  'createdAtQuarterRegex': 8.14, // Number | 
  'createdAtQuarterIregex': 8.14, // Number | 
  'createdAtQuarterContainedBy': 8.14, // Number | 
  'createdAtContainedBy': "createdAtContainedBy_example", // String | 
  'createdAtHour': 8.14, // Number | 
  'createdAtHourIexact': 8.14, // Number | 
  'createdAtHourGt': 8.14, // Number | 
  'createdAtHourGte': 8.14, // Number | 
  'createdAtHourLt': 8.14, // Number | 
  'createdAtHourLte': 8.14, // Number | 
  'createdAtHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtHourContains': 8.14, // Number | 
  'createdAtHourIcontains': 8.14, // Number | 
  'createdAtHourStartswith': 8.14, // Number | 
  'createdAtHourIstartswith': 8.14, // Number | 
  'createdAtHourEndswith': 8.14, // Number | 
  'createdAtHourIendswith': 8.14, // Number | 
  'createdAtHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtHourIsnull': "createdAtHourIsnull_example", // String | 
  'createdAtHourRegex': 8.14, // Number | 
  'createdAtHourIregex': 8.14, // Number | 
  'createdAtHourContainedBy': 8.14, // Number | 
  'createdAtMinute': 8.14, // Number | 
  'createdAtMinuteIexact': 8.14, // Number | 
  'createdAtMinuteGt': 8.14, // Number | 
  'createdAtMinuteGte': 8.14, // Number | 
  'createdAtMinuteLt': 8.14, // Number | 
  'createdAtMinuteLte': 8.14, // Number | 
  'createdAtMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtMinuteContains': 8.14, // Number | 
  'createdAtMinuteIcontains': 8.14, // Number | 
  'createdAtMinuteStartswith': 8.14, // Number | 
  'createdAtMinuteIstartswith': 8.14, // Number | 
  'createdAtMinuteEndswith': 8.14, // Number | 
  'createdAtMinuteIendswith': 8.14, // Number | 
  'createdAtMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtMinuteIsnull': "createdAtMinuteIsnull_example", // String | 
  'createdAtMinuteRegex': 8.14, // Number | 
  'createdAtMinuteIregex': 8.14, // Number | 
  'createdAtMinuteContainedBy': 8.14, // Number | 
  'createdAtSecond': 8.14, // Number | 
  'createdAtSecondIexact': 8.14, // Number | 
  'createdAtSecondGt': 8.14, // Number | 
  'createdAtSecondGte': 8.14, // Number | 
  'createdAtSecondLt': 8.14, // Number | 
  'createdAtSecondLte': 8.14, // Number | 
  'createdAtSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtSecondContains': 8.14, // Number | 
  'createdAtSecondIcontains': 8.14, // Number | 
  'createdAtSecondStartswith': 8.14, // Number | 
  'createdAtSecondIstartswith': 8.14, // Number | 
  'createdAtSecondEndswith': 8.14, // Number | 
  'createdAtSecondIendswith': 8.14, // Number | 
  'createdAtSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtSecondIsnull': "createdAtSecondIsnull_example", // String | 
  'createdAtSecondRegex': 8.14, // Number | 
  'createdAtSecondIregex': 8.14, // Number | 
  'createdAtSecondContainedBy': 8.14, // Number | 
  'createdAtDate': "createdAtDate_example", // String | 
  'createdAtDateIexact': "createdAtDateIexact_example", // String | 
  'createdAtDateGt': "createdAtDateGt_example", // String | 
  'createdAtDateGte': "createdAtDateGte_example", // String | 
  'createdAtDateLt': "createdAtDateLt_example", // String | 
  'createdAtDateLte': "createdAtDateLte_example", // String | 
  'createdAtDateIn': "createdAtDateIn_example", // String | Multiple values may be separated by commas.
  'createdAtDateContains': "createdAtDateContains_example", // String | 
  'createdAtDateIcontains': "createdAtDateIcontains_example", // String | 
  'createdAtDateStartswith': "createdAtDateStartswith_example", // String | 
  'createdAtDateIstartswith': "createdAtDateIstartswith_example", // String | 
  'createdAtDateEndswith': "createdAtDateEndswith_example", // String | 
  'createdAtDateIendswith': "createdAtDateIendswith_example", // String | 
  'createdAtDateRange': "createdAtDateRange_example", // String | Multiple values may be separated by commas.
  'createdAtDateIsnull': "createdAtDateIsnull_example", // String | 
  'createdAtDateRegex': "createdAtDateRegex_example", // String | 
  'createdAtDateIregex': "createdAtDateIregex_example", // String | 
  'createdAtDateYear': 8.14, // Number | 
  'createdAtDateYearIexact': 8.14, // Number | 
  'createdAtDateYearGt': 8.14, // Number | 
  'createdAtDateYearGte': 8.14, // Number | 
  'createdAtDateYearLt': 8.14, // Number | 
  'createdAtDateYearLte': 8.14, // Number | 
  'createdAtDateYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateYearContains': 8.14, // Number | 
  'createdAtDateYearIcontains': 8.14, // Number | 
  'createdAtDateYearStartswith': 8.14, // Number | 
  'createdAtDateYearIstartswith': 8.14, // Number | 
  'createdAtDateYearEndswith': 8.14, // Number | 
  'createdAtDateYearIendswith': 8.14, // Number | 
  'createdAtDateYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateYearIsnull': "createdAtDateYearIsnull_example", // String | 
  'createdAtDateYearRegex': 8.14, // Number | 
  'createdAtDateYearIregex': 8.14, // Number | 
  'createdAtDateYearContainedBy': 8.14, // Number | 
  'createdAtDateMonth': 8.14, // Number | 
  'createdAtDateMonthIexact': 8.14, // Number | 
  'createdAtDateMonthGt': 8.14, // Number | 
  'createdAtDateMonthGte': 8.14, // Number | 
  'createdAtDateMonthLt': 8.14, // Number | 
  'createdAtDateMonthLte': 8.14, // Number | 
  'createdAtDateMonthIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateMonthContains': 8.14, // Number | 
  'createdAtDateMonthIcontains': 8.14, // Number | 
  'createdAtDateMonthStartswith': 8.14, // Number | 
  'createdAtDateMonthIstartswith': 8.14, // Number | 
  'createdAtDateMonthEndswith': 8.14, // Number | 
  'createdAtDateMonthIendswith': 8.14, // Number | 
  'createdAtDateMonthRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateMonthIsnull': "createdAtDateMonthIsnull_example", // String | 
  'createdAtDateMonthRegex': 8.14, // Number | 
  'createdAtDateMonthIregex': 8.14, // Number | 
  'createdAtDateMonthContainedBy': 8.14, // Number | 
  'createdAtDateDay': 8.14, // Number | 
  'createdAtDateDayIexact': 8.14, // Number | 
  'createdAtDateDayGt': 8.14, // Number | 
  'createdAtDateDayGte': 8.14, // Number | 
  'createdAtDateDayLt': 8.14, // Number | 
  'createdAtDateDayLte': 8.14, // Number | 
  'createdAtDateDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateDayContains': 8.14, // Number | 
  'createdAtDateDayIcontains': 8.14, // Number | 
  'createdAtDateDayStartswith': 8.14, // Number | 
  'createdAtDateDayIstartswith': 8.14, // Number | 
  'createdAtDateDayEndswith': 8.14, // Number | 
  'createdAtDateDayIendswith': 8.14, // Number | 
  'createdAtDateDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateDayIsnull': "createdAtDateDayIsnull_example", // String | 
  'createdAtDateDayRegex': 8.14, // Number | 
  'createdAtDateDayIregex': 8.14, // Number | 
  'createdAtDateDayContainedBy': 8.14, // Number | 
  'createdAtDateWeekDay': 8.14, // Number | 
  'createdAtDateWeekDayIexact': 8.14, // Number | 
  'createdAtDateWeekDayGt': 8.14, // Number | 
  'createdAtDateWeekDayGte': 8.14, // Number | 
  'createdAtDateWeekDayLt': 8.14, // Number | 
  'createdAtDateWeekDayLte': 8.14, // Number | 
  'createdAtDateWeekDayIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateWeekDayContains': 8.14, // Number | 
  'createdAtDateWeekDayIcontains': 8.14, // Number | 
  'createdAtDateWeekDayStartswith': 8.14, // Number | 
  'createdAtDateWeekDayIstartswith': 8.14, // Number | 
  'createdAtDateWeekDayEndswith': 8.14, // Number | 
  'createdAtDateWeekDayIendswith': 8.14, // Number | 
  'createdAtDateWeekDayRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateWeekDayIsnull': "createdAtDateWeekDayIsnull_example", // String | 
  'createdAtDateWeekDayRegex': 8.14, // Number | 
  'createdAtDateWeekDayIregex': 8.14, // Number | 
  'createdAtDateWeekDayContainedBy': 8.14, // Number | 
  'createdAtDateWeek': 8.14, // Number | 
  'createdAtDateWeekIexact': 8.14, // Number | 
  'createdAtDateWeekGt': 8.14, // Number | 
  'createdAtDateWeekGte': 8.14, // Number | 
  'createdAtDateWeekLt': 8.14, // Number | 
  'createdAtDateWeekLte': 8.14, // Number | 
  'createdAtDateWeekIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateWeekContains': 8.14, // Number | 
  'createdAtDateWeekIcontains': 8.14, // Number | 
  'createdAtDateWeekStartswith': 8.14, // Number | 
  'createdAtDateWeekIstartswith': 8.14, // Number | 
  'createdAtDateWeekEndswith': 8.14, // Number | 
  'createdAtDateWeekIendswith': 8.14, // Number | 
  'createdAtDateWeekRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateWeekIsnull': "createdAtDateWeekIsnull_example", // String | 
  'createdAtDateWeekRegex': 8.14, // Number | 
  'createdAtDateWeekIregex': 8.14, // Number | 
  'createdAtDateWeekContainedBy': 8.14, // Number | 
  'createdAtDateIsoYear': 8.14, // Number | 
  'createdAtDateIsoYearIexact': 8.14, // Number | 
  'createdAtDateIsoYearGt': 8.14, // Number | 
  'createdAtDateIsoYearGte': 8.14, // Number | 
  'createdAtDateIsoYearLt': 8.14, // Number | 
  'createdAtDateIsoYearLte': 8.14, // Number | 
  'createdAtDateIsoYearIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateIsoYearContains': 8.14, // Number | 
  'createdAtDateIsoYearIcontains': 8.14, // Number | 
  'createdAtDateIsoYearStartswith': 8.14, // Number | 
  'createdAtDateIsoYearIstartswith': 8.14, // Number | 
  'createdAtDateIsoYearEndswith': 8.14, // Number | 
  'createdAtDateIsoYearIendswith': 8.14, // Number | 
  'createdAtDateIsoYearRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateIsoYearIsnull': "createdAtDateIsoYearIsnull_example", // String | 
  'createdAtDateIsoYearRegex': 8.14, // Number | 
  'createdAtDateIsoYearIregex': 8.14, // Number | 
  'createdAtDateIsoYearContainedBy': 8.14, // Number | 
  'createdAtDateQuarter': 8.14, // Number | 
  'createdAtDateQuarterIexact': 8.14, // Number | 
  'createdAtDateQuarterGt': 8.14, // Number | 
  'createdAtDateQuarterGte': 8.14, // Number | 
  'createdAtDateQuarterLt': 8.14, // Number | 
  'createdAtDateQuarterLte': 8.14, // Number | 
  'createdAtDateQuarterIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateQuarterContains': 8.14, // Number | 
  'createdAtDateQuarterIcontains': 8.14, // Number | 
  'createdAtDateQuarterStartswith': 8.14, // Number | 
  'createdAtDateQuarterIstartswith': 8.14, // Number | 
  'createdAtDateQuarterEndswith': 8.14, // Number | 
  'createdAtDateQuarterIendswith': 8.14, // Number | 
  'createdAtDateQuarterRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtDateQuarterIsnull': "createdAtDateQuarterIsnull_example", // String | 
  'createdAtDateQuarterRegex': 8.14, // Number | 
  'createdAtDateQuarterIregex': 8.14, // Number | 
  'createdAtDateQuarterContainedBy': 8.14, // Number | 
  'createdAtDateContainedBy': "createdAtDateContainedBy_example", // String | 
  'createdAtTime': "createdAtTime_example", // String | 
  'createdAtTimeIexact': "createdAtTimeIexact_example", // String | 
  'createdAtTimeGt': "createdAtTimeGt_example", // String | 
  'createdAtTimeGte': "createdAtTimeGte_example", // String | 
  'createdAtTimeLt': "createdAtTimeLt_example", // String | 
  'createdAtTimeLte': "createdAtTimeLte_example", // String | 
  'createdAtTimeIn': "createdAtTimeIn_example", // String | Multiple values may be separated by commas.
  'createdAtTimeContains': "createdAtTimeContains_example", // String | 
  'createdAtTimeIcontains': "createdAtTimeIcontains_example", // String | 
  'createdAtTimeStartswith': "createdAtTimeStartswith_example", // String | 
  'createdAtTimeIstartswith': "createdAtTimeIstartswith_example", // String | 
  'createdAtTimeEndswith': "createdAtTimeEndswith_example", // String | 
  'createdAtTimeIendswith': "createdAtTimeIendswith_example", // String | 
  'createdAtTimeRange': "createdAtTimeRange_example", // String | Multiple values may be separated by commas.
  'createdAtTimeIsnull': "createdAtTimeIsnull_example", // String | 
  'createdAtTimeRegex': "createdAtTimeRegex_example", // String | 
  'createdAtTimeIregex': "createdAtTimeIregex_example", // String | 
  'createdAtTimeHour': 8.14, // Number | 
  'createdAtTimeHourIexact': 8.14, // Number | 
  'createdAtTimeHourGt': 8.14, // Number | 
  'createdAtTimeHourGte': 8.14, // Number | 
  'createdAtTimeHourLt': 8.14, // Number | 
  'createdAtTimeHourLte': 8.14, // Number | 
  'createdAtTimeHourIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeHourContains': 8.14, // Number | 
  'createdAtTimeHourIcontains': 8.14, // Number | 
  'createdAtTimeHourStartswith': 8.14, // Number | 
  'createdAtTimeHourIstartswith': 8.14, // Number | 
  'createdAtTimeHourEndswith': 8.14, // Number | 
  'createdAtTimeHourIendswith': 8.14, // Number | 
  'createdAtTimeHourRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeHourIsnull': "createdAtTimeHourIsnull_example", // String | 
  'createdAtTimeHourRegex': 8.14, // Number | 
  'createdAtTimeHourIregex': 8.14, // Number | 
  'createdAtTimeHourContainedBy': 8.14, // Number | 
  'createdAtTimeMinute': 8.14, // Number | 
  'createdAtTimeMinuteIexact': 8.14, // Number | 
  'createdAtTimeMinuteGt': 8.14, // Number | 
  'createdAtTimeMinuteGte': 8.14, // Number | 
  'createdAtTimeMinuteLt': 8.14, // Number | 
  'createdAtTimeMinuteLte': 8.14, // Number | 
  'createdAtTimeMinuteIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeMinuteContains': 8.14, // Number | 
  'createdAtTimeMinuteIcontains': 8.14, // Number | 
  'createdAtTimeMinuteStartswith': 8.14, // Number | 
  'createdAtTimeMinuteIstartswith': 8.14, // Number | 
  'createdAtTimeMinuteEndswith': 8.14, // Number | 
  'createdAtTimeMinuteIendswith': 8.14, // Number | 
  'createdAtTimeMinuteRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeMinuteIsnull': "createdAtTimeMinuteIsnull_example", // String | 
  'createdAtTimeMinuteRegex': 8.14, // Number | 
  'createdAtTimeMinuteIregex': 8.14, // Number | 
  'createdAtTimeMinuteContainedBy': 8.14, // Number | 
  'createdAtTimeSecond': 8.14, // Number | 
  'createdAtTimeSecondIexact': 8.14, // Number | 
  'createdAtTimeSecondGt': 8.14, // Number | 
  'createdAtTimeSecondGte': 8.14, // Number | 
  'createdAtTimeSecondLt': 8.14, // Number | 
  'createdAtTimeSecondLte': 8.14, // Number | 
  'createdAtTimeSecondIn': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeSecondContains': 8.14, // Number | 
  'createdAtTimeSecondIcontains': 8.14, // Number | 
  'createdAtTimeSecondStartswith': 8.14, // Number | 
  'createdAtTimeSecondIstartswith': 8.14, // Number | 
  'createdAtTimeSecondEndswith': 8.14, // Number | 
  'createdAtTimeSecondIendswith': 8.14, // Number | 
  'createdAtTimeSecondRange': 8.14, // Number | Multiple values may be separated by commas.
  'createdAtTimeSecondIsnull': "createdAtTimeSecondIsnull_example", // String | 
  'createdAtTimeSecondRegex': 8.14, // Number | 
  'createdAtTimeSecondIregex': 8.14, // Number | 
  'createdAtTimeSecondContainedBy': 8.14, // Number | 
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
  'status': "status_example", // String | 
  'suppressedById': "suppressedById_example", // String | 
  'closedById': "closedById_example", // String | 
  'closedReason': 8.14, // Number | 
  'closedReasonDetail': 8.14, // Number | 
  'ordering': "ordering_example" // String | Which field to use when ordering the results.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsStatusCountsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**|  | [optional] 
 **indicatorId** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **createdAtIexact** | **String**|  | [optional] 
 **createdAtGt** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLt** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **createdAtIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtContains** | **String**|  | [optional] 
 **createdAtIcontains** | **String**|  | [optional] 
 **createdAtStartswith** | **String**|  | [optional] 
 **createdAtIstartswith** | **String**|  | [optional] 
 **createdAtEndswith** | **String**|  | [optional] 
 **createdAtIendswith** | **String**|  | [optional] 
 **createdAtRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtIsnull** | **String**|  | [optional] 
 **createdAtRegex** | **String**|  | [optional] 
 **createdAtIregex** | **String**|  | [optional] 
 **createdAtYear** | **Number**|  | [optional] 
 **createdAtYearIexact** | **Number**|  | [optional] 
 **createdAtYearGt** | **Number**|  | [optional] 
 **createdAtYearGte** | **Number**|  | [optional] 
 **createdAtYearLt** | **Number**|  | [optional] 
 **createdAtYearLte** | **Number**|  | [optional] 
 **createdAtYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtYearContains** | **Number**|  | [optional] 
 **createdAtYearIcontains** | **Number**|  | [optional] 
 **createdAtYearStartswith** | **Number**|  | [optional] 
 **createdAtYearIstartswith** | **Number**|  | [optional] 
 **createdAtYearEndswith** | **Number**|  | [optional] 
 **createdAtYearIendswith** | **Number**|  | [optional] 
 **createdAtYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtYearIsnull** | **String**|  | [optional] 
 **createdAtYearRegex** | **Number**|  | [optional] 
 **createdAtYearIregex** | **Number**|  | [optional] 
 **createdAtYearContainedBy** | **Number**|  | [optional] 
 **createdAtMonth** | **Number**|  | [optional] 
 **createdAtMonthIexact** | **Number**|  | [optional] 
 **createdAtMonthGt** | **Number**|  | [optional] 
 **createdAtMonthGte** | **Number**|  | [optional] 
 **createdAtMonthLt** | **Number**|  | [optional] 
 **createdAtMonthLte** | **Number**|  | [optional] 
 **createdAtMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtMonthContains** | **Number**|  | [optional] 
 **createdAtMonthIcontains** | **Number**|  | [optional] 
 **createdAtMonthStartswith** | **Number**|  | [optional] 
 **createdAtMonthIstartswith** | **Number**|  | [optional] 
 **createdAtMonthEndswith** | **Number**|  | [optional] 
 **createdAtMonthIendswith** | **Number**|  | [optional] 
 **createdAtMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtMonthIsnull** | **String**|  | [optional] 
 **createdAtMonthRegex** | **Number**|  | [optional] 
 **createdAtMonthIregex** | **Number**|  | [optional] 
 **createdAtMonthContainedBy** | **Number**|  | [optional] 
 **createdAtDay** | **Number**|  | [optional] 
 **createdAtDayIexact** | **Number**|  | [optional] 
 **createdAtDayGt** | **Number**|  | [optional] 
 **createdAtDayGte** | **Number**|  | [optional] 
 **createdAtDayLt** | **Number**|  | [optional] 
 **createdAtDayLte** | **Number**|  | [optional] 
 **createdAtDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDayContains** | **Number**|  | [optional] 
 **createdAtDayIcontains** | **Number**|  | [optional] 
 **createdAtDayStartswith** | **Number**|  | [optional] 
 **createdAtDayIstartswith** | **Number**|  | [optional] 
 **createdAtDayEndswith** | **Number**|  | [optional] 
 **createdAtDayIendswith** | **Number**|  | [optional] 
 **createdAtDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDayIsnull** | **String**|  | [optional] 
 **createdAtDayRegex** | **Number**|  | [optional] 
 **createdAtDayIregex** | **Number**|  | [optional] 
 **createdAtDayContainedBy** | **Number**|  | [optional] 
 **createdAtWeekDay** | **Number**|  | [optional] 
 **createdAtWeekDayIexact** | **Number**|  | [optional] 
 **createdAtWeekDayGt** | **Number**|  | [optional] 
 **createdAtWeekDayGte** | **Number**|  | [optional] 
 **createdAtWeekDayLt** | **Number**|  | [optional] 
 **createdAtWeekDayLte** | **Number**|  | [optional] 
 **createdAtWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtWeekDayContains** | **Number**|  | [optional] 
 **createdAtWeekDayIcontains** | **Number**|  | [optional] 
 **createdAtWeekDayStartswith** | **Number**|  | [optional] 
 **createdAtWeekDayIstartswith** | **Number**|  | [optional] 
 **createdAtWeekDayEndswith** | **Number**|  | [optional] 
 **createdAtWeekDayIendswith** | **Number**|  | [optional] 
 **createdAtWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtWeekDayIsnull** | **String**|  | [optional] 
 **createdAtWeekDayRegex** | **Number**|  | [optional] 
 **createdAtWeekDayIregex** | **Number**|  | [optional] 
 **createdAtWeekDayContainedBy** | **Number**|  | [optional] 
 **createdAtWeek** | **Number**|  | [optional] 
 **createdAtWeekIexact** | **Number**|  | [optional] 
 **createdAtWeekGt** | **Number**|  | [optional] 
 **createdAtWeekGte** | **Number**|  | [optional] 
 **createdAtWeekLt** | **Number**|  | [optional] 
 **createdAtWeekLte** | **Number**|  | [optional] 
 **createdAtWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtWeekContains** | **Number**|  | [optional] 
 **createdAtWeekIcontains** | **Number**|  | [optional] 
 **createdAtWeekStartswith** | **Number**|  | [optional] 
 **createdAtWeekIstartswith** | **Number**|  | [optional] 
 **createdAtWeekEndswith** | **Number**|  | [optional] 
 **createdAtWeekIendswith** | **Number**|  | [optional] 
 **createdAtWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtWeekIsnull** | **String**|  | [optional] 
 **createdAtWeekRegex** | **Number**|  | [optional] 
 **createdAtWeekIregex** | **Number**|  | [optional] 
 **createdAtWeekContainedBy** | **Number**|  | [optional] 
 **createdAtIsoYear** | **Number**|  | [optional] 
 **createdAtIsoYearIexact** | **Number**|  | [optional] 
 **createdAtIsoYearGt** | **Number**|  | [optional] 
 **createdAtIsoYearGte** | **Number**|  | [optional] 
 **createdAtIsoYearLt** | **Number**|  | [optional] 
 **createdAtIsoYearLte** | **Number**|  | [optional] 
 **createdAtIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtIsoYearContains** | **Number**|  | [optional] 
 **createdAtIsoYearIcontains** | **Number**|  | [optional] 
 **createdAtIsoYearStartswith** | **Number**|  | [optional] 
 **createdAtIsoYearIstartswith** | **Number**|  | [optional] 
 **createdAtIsoYearEndswith** | **Number**|  | [optional] 
 **createdAtIsoYearIendswith** | **Number**|  | [optional] 
 **createdAtIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtIsoYearIsnull** | **String**|  | [optional] 
 **createdAtIsoYearRegex** | **Number**|  | [optional] 
 **createdAtIsoYearIregex** | **Number**|  | [optional] 
 **createdAtIsoYearContainedBy** | **Number**|  | [optional] 
 **createdAtQuarter** | **Number**|  | [optional] 
 **createdAtQuarterIexact** | **Number**|  | [optional] 
 **createdAtQuarterGt** | **Number**|  | [optional] 
 **createdAtQuarterGte** | **Number**|  | [optional] 
 **createdAtQuarterLt** | **Number**|  | [optional] 
 **createdAtQuarterLte** | **Number**|  | [optional] 
 **createdAtQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtQuarterContains** | **Number**|  | [optional] 
 **createdAtQuarterIcontains** | **Number**|  | [optional] 
 **createdAtQuarterStartswith** | **Number**|  | [optional] 
 **createdAtQuarterIstartswith** | **Number**|  | [optional] 
 **createdAtQuarterEndswith** | **Number**|  | [optional] 
 **createdAtQuarterIendswith** | **Number**|  | [optional] 
 **createdAtQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtQuarterIsnull** | **String**|  | [optional] 
 **createdAtQuarterRegex** | **Number**|  | [optional] 
 **createdAtQuarterIregex** | **Number**|  | [optional] 
 **createdAtQuarterContainedBy** | **Number**|  | [optional] 
 **createdAtContainedBy** | **String**|  | [optional] 
 **createdAtHour** | **Number**|  | [optional] 
 **createdAtHourIexact** | **Number**|  | [optional] 
 **createdAtHourGt** | **Number**|  | [optional] 
 **createdAtHourGte** | **Number**|  | [optional] 
 **createdAtHourLt** | **Number**|  | [optional] 
 **createdAtHourLte** | **Number**|  | [optional] 
 **createdAtHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtHourContains** | **Number**|  | [optional] 
 **createdAtHourIcontains** | **Number**|  | [optional] 
 **createdAtHourStartswith** | **Number**|  | [optional] 
 **createdAtHourIstartswith** | **Number**|  | [optional] 
 **createdAtHourEndswith** | **Number**|  | [optional] 
 **createdAtHourIendswith** | **Number**|  | [optional] 
 **createdAtHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtHourIsnull** | **String**|  | [optional] 
 **createdAtHourRegex** | **Number**|  | [optional] 
 **createdAtHourIregex** | **Number**|  | [optional] 
 **createdAtHourContainedBy** | **Number**|  | [optional] 
 **createdAtMinute** | **Number**|  | [optional] 
 **createdAtMinuteIexact** | **Number**|  | [optional] 
 **createdAtMinuteGt** | **Number**|  | [optional] 
 **createdAtMinuteGte** | **Number**|  | [optional] 
 **createdAtMinuteLt** | **Number**|  | [optional] 
 **createdAtMinuteLte** | **Number**|  | [optional] 
 **createdAtMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtMinuteContains** | **Number**|  | [optional] 
 **createdAtMinuteIcontains** | **Number**|  | [optional] 
 **createdAtMinuteStartswith** | **Number**|  | [optional] 
 **createdAtMinuteIstartswith** | **Number**|  | [optional] 
 **createdAtMinuteEndswith** | **Number**|  | [optional] 
 **createdAtMinuteIendswith** | **Number**|  | [optional] 
 **createdAtMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtMinuteIsnull** | **String**|  | [optional] 
 **createdAtMinuteRegex** | **Number**|  | [optional] 
 **createdAtMinuteIregex** | **Number**|  | [optional] 
 **createdAtMinuteContainedBy** | **Number**|  | [optional] 
 **createdAtSecond** | **Number**|  | [optional] 
 **createdAtSecondIexact** | **Number**|  | [optional] 
 **createdAtSecondGt** | **Number**|  | [optional] 
 **createdAtSecondGte** | **Number**|  | [optional] 
 **createdAtSecondLt** | **Number**|  | [optional] 
 **createdAtSecondLte** | **Number**|  | [optional] 
 **createdAtSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtSecondContains** | **Number**|  | [optional] 
 **createdAtSecondIcontains** | **Number**|  | [optional] 
 **createdAtSecondStartswith** | **Number**|  | [optional] 
 **createdAtSecondIstartswith** | **Number**|  | [optional] 
 **createdAtSecondEndswith** | **Number**|  | [optional] 
 **createdAtSecondIendswith** | **Number**|  | [optional] 
 **createdAtSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtSecondIsnull** | **String**|  | [optional] 
 **createdAtSecondRegex** | **Number**|  | [optional] 
 **createdAtSecondIregex** | **Number**|  | [optional] 
 **createdAtSecondContainedBy** | **Number**|  | [optional] 
 **createdAtDate** | **String**|  | [optional] 
 **createdAtDateIexact** | **String**|  | [optional] 
 **createdAtDateGt** | **String**|  | [optional] 
 **createdAtDateGte** | **String**|  | [optional] 
 **createdAtDateLt** | **String**|  | [optional] 
 **createdAtDateLte** | **String**|  | [optional] 
 **createdAtDateIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateContains** | **String**|  | [optional] 
 **createdAtDateIcontains** | **String**|  | [optional] 
 **createdAtDateStartswith** | **String**|  | [optional] 
 **createdAtDateIstartswith** | **String**|  | [optional] 
 **createdAtDateEndswith** | **String**|  | [optional] 
 **createdAtDateIendswith** | **String**|  | [optional] 
 **createdAtDateRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateIsnull** | **String**|  | [optional] 
 **createdAtDateRegex** | **String**|  | [optional] 
 **createdAtDateIregex** | **String**|  | [optional] 
 **createdAtDateYear** | **Number**|  | [optional] 
 **createdAtDateYearIexact** | **Number**|  | [optional] 
 **createdAtDateYearGt** | **Number**|  | [optional] 
 **createdAtDateYearGte** | **Number**|  | [optional] 
 **createdAtDateYearLt** | **Number**|  | [optional] 
 **createdAtDateYearLte** | **Number**|  | [optional] 
 **createdAtDateYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateYearContains** | **Number**|  | [optional] 
 **createdAtDateYearIcontains** | **Number**|  | [optional] 
 **createdAtDateYearStartswith** | **Number**|  | [optional] 
 **createdAtDateYearIstartswith** | **Number**|  | [optional] 
 **createdAtDateYearEndswith** | **Number**|  | [optional] 
 **createdAtDateYearIendswith** | **Number**|  | [optional] 
 **createdAtDateYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateYearIsnull** | **String**|  | [optional] 
 **createdAtDateYearRegex** | **Number**|  | [optional] 
 **createdAtDateYearIregex** | **Number**|  | [optional] 
 **createdAtDateYearContainedBy** | **Number**|  | [optional] 
 **createdAtDateMonth** | **Number**|  | [optional] 
 **createdAtDateMonthIexact** | **Number**|  | [optional] 
 **createdAtDateMonthGt** | **Number**|  | [optional] 
 **createdAtDateMonthGte** | **Number**|  | [optional] 
 **createdAtDateMonthLt** | **Number**|  | [optional] 
 **createdAtDateMonthLte** | **Number**|  | [optional] 
 **createdAtDateMonthIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateMonthContains** | **Number**|  | [optional] 
 **createdAtDateMonthIcontains** | **Number**|  | [optional] 
 **createdAtDateMonthStartswith** | **Number**|  | [optional] 
 **createdAtDateMonthIstartswith** | **Number**|  | [optional] 
 **createdAtDateMonthEndswith** | **Number**|  | [optional] 
 **createdAtDateMonthIendswith** | **Number**|  | [optional] 
 **createdAtDateMonthRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateMonthIsnull** | **String**|  | [optional] 
 **createdAtDateMonthRegex** | **Number**|  | [optional] 
 **createdAtDateMonthIregex** | **Number**|  | [optional] 
 **createdAtDateMonthContainedBy** | **Number**|  | [optional] 
 **createdAtDateDay** | **Number**|  | [optional] 
 **createdAtDateDayIexact** | **Number**|  | [optional] 
 **createdAtDateDayGt** | **Number**|  | [optional] 
 **createdAtDateDayGte** | **Number**|  | [optional] 
 **createdAtDateDayLt** | **Number**|  | [optional] 
 **createdAtDateDayLte** | **Number**|  | [optional] 
 **createdAtDateDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateDayContains** | **Number**|  | [optional] 
 **createdAtDateDayIcontains** | **Number**|  | [optional] 
 **createdAtDateDayStartswith** | **Number**|  | [optional] 
 **createdAtDateDayIstartswith** | **Number**|  | [optional] 
 **createdAtDateDayEndswith** | **Number**|  | [optional] 
 **createdAtDateDayIendswith** | **Number**|  | [optional] 
 **createdAtDateDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateDayIsnull** | **String**|  | [optional] 
 **createdAtDateDayRegex** | **Number**|  | [optional] 
 **createdAtDateDayIregex** | **Number**|  | [optional] 
 **createdAtDateDayContainedBy** | **Number**|  | [optional] 
 **createdAtDateWeekDay** | **Number**|  | [optional] 
 **createdAtDateWeekDayIexact** | **Number**|  | [optional] 
 **createdAtDateWeekDayGt** | **Number**|  | [optional] 
 **createdAtDateWeekDayGte** | **Number**|  | [optional] 
 **createdAtDateWeekDayLt** | **Number**|  | [optional] 
 **createdAtDateWeekDayLte** | **Number**|  | [optional] 
 **createdAtDateWeekDayIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateWeekDayContains** | **Number**|  | [optional] 
 **createdAtDateWeekDayIcontains** | **Number**|  | [optional] 
 **createdAtDateWeekDayStartswith** | **Number**|  | [optional] 
 **createdAtDateWeekDayIstartswith** | **Number**|  | [optional] 
 **createdAtDateWeekDayEndswith** | **Number**|  | [optional] 
 **createdAtDateWeekDayIendswith** | **Number**|  | [optional] 
 **createdAtDateWeekDayRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateWeekDayIsnull** | **String**|  | [optional] 
 **createdAtDateWeekDayRegex** | **Number**|  | [optional] 
 **createdAtDateWeekDayIregex** | **Number**|  | [optional] 
 **createdAtDateWeekDayContainedBy** | **Number**|  | [optional] 
 **createdAtDateWeek** | **Number**|  | [optional] 
 **createdAtDateWeekIexact** | **Number**|  | [optional] 
 **createdAtDateWeekGt** | **Number**|  | [optional] 
 **createdAtDateWeekGte** | **Number**|  | [optional] 
 **createdAtDateWeekLt** | **Number**|  | [optional] 
 **createdAtDateWeekLte** | **Number**|  | [optional] 
 **createdAtDateWeekIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateWeekContains** | **Number**|  | [optional] 
 **createdAtDateWeekIcontains** | **Number**|  | [optional] 
 **createdAtDateWeekStartswith** | **Number**|  | [optional] 
 **createdAtDateWeekIstartswith** | **Number**|  | [optional] 
 **createdAtDateWeekEndswith** | **Number**|  | [optional] 
 **createdAtDateWeekIendswith** | **Number**|  | [optional] 
 **createdAtDateWeekRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateWeekIsnull** | **String**|  | [optional] 
 **createdAtDateWeekRegex** | **Number**|  | [optional] 
 **createdAtDateWeekIregex** | **Number**|  | [optional] 
 **createdAtDateWeekContainedBy** | **Number**|  | [optional] 
 **createdAtDateIsoYear** | **Number**|  | [optional] 
 **createdAtDateIsoYearIexact** | **Number**|  | [optional] 
 **createdAtDateIsoYearGt** | **Number**|  | [optional] 
 **createdAtDateIsoYearGte** | **Number**|  | [optional] 
 **createdAtDateIsoYearLt** | **Number**|  | [optional] 
 **createdAtDateIsoYearLte** | **Number**|  | [optional] 
 **createdAtDateIsoYearIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateIsoYearContains** | **Number**|  | [optional] 
 **createdAtDateIsoYearIcontains** | **Number**|  | [optional] 
 **createdAtDateIsoYearStartswith** | **Number**|  | [optional] 
 **createdAtDateIsoYearIstartswith** | **Number**|  | [optional] 
 **createdAtDateIsoYearEndswith** | **Number**|  | [optional] 
 **createdAtDateIsoYearIendswith** | **Number**|  | [optional] 
 **createdAtDateIsoYearRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateIsoYearIsnull** | **String**|  | [optional] 
 **createdAtDateIsoYearRegex** | **Number**|  | [optional] 
 **createdAtDateIsoYearIregex** | **Number**|  | [optional] 
 **createdAtDateIsoYearContainedBy** | **Number**|  | [optional] 
 **createdAtDateQuarter** | **Number**|  | [optional] 
 **createdAtDateQuarterIexact** | **Number**|  | [optional] 
 **createdAtDateQuarterGt** | **Number**|  | [optional] 
 **createdAtDateQuarterGte** | **Number**|  | [optional] 
 **createdAtDateQuarterLt** | **Number**|  | [optional] 
 **createdAtDateQuarterLte** | **Number**|  | [optional] 
 **createdAtDateQuarterIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateQuarterContains** | **Number**|  | [optional] 
 **createdAtDateQuarterIcontains** | **Number**|  | [optional] 
 **createdAtDateQuarterStartswith** | **Number**|  | [optional] 
 **createdAtDateQuarterIstartswith** | **Number**|  | [optional] 
 **createdAtDateQuarterEndswith** | **Number**|  | [optional] 
 **createdAtDateQuarterIendswith** | **Number**|  | [optional] 
 **createdAtDateQuarterRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtDateQuarterIsnull** | **String**|  | [optional] 
 **createdAtDateQuarterRegex** | **Number**|  | [optional] 
 **createdAtDateQuarterIregex** | **Number**|  | [optional] 
 **createdAtDateQuarterContainedBy** | **Number**|  | [optional] 
 **createdAtDateContainedBy** | **String**|  | [optional] 
 **createdAtTime** | **String**|  | [optional] 
 **createdAtTimeIexact** | **String**|  | [optional] 
 **createdAtTimeGt** | **String**|  | [optional] 
 **createdAtTimeGte** | **String**|  | [optional] 
 **createdAtTimeLt** | **String**|  | [optional] 
 **createdAtTimeLte** | **String**|  | [optional] 
 **createdAtTimeIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeContains** | **String**|  | [optional] 
 **createdAtTimeIcontains** | **String**|  | [optional] 
 **createdAtTimeStartswith** | **String**|  | [optional] 
 **createdAtTimeIstartswith** | **String**|  | [optional] 
 **createdAtTimeEndswith** | **String**|  | [optional] 
 **createdAtTimeIendswith** | **String**|  | [optional] 
 **createdAtTimeRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeIsnull** | **String**|  | [optional] 
 **createdAtTimeRegex** | **String**|  | [optional] 
 **createdAtTimeIregex** | **String**|  | [optional] 
 **createdAtTimeHour** | **Number**|  | [optional] 
 **createdAtTimeHourIexact** | **Number**|  | [optional] 
 **createdAtTimeHourGt** | **Number**|  | [optional] 
 **createdAtTimeHourGte** | **Number**|  | [optional] 
 **createdAtTimeHourLt** | **Number**|  | [optional] 
 **createdAtTimeHourLte** | **Number**|  | [optional] 
 **createdAtTimeHourIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeHourContains** | **Number**|  | [optional] 
 **createdAtTimeHourIcontains** | **Number**|  | [optional] 
 **createdAtTimeHourStartswith** | **Number**|  | [optional] 
 **createdAtTimeHourIstartswith** | **Number**|  | [optional] 
 **createdAtTimeHourEndswith** | **Number**|  | [optional] 
 **createdAtTimeHourIendswith** | **Number**|  | [optional] 
 **createdAtTimeHourRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeHourIsnull** | **String**|  | [optional] 
 **createdAtTimeHourRegex** | **Number**|  | [optional] 
 **createdAtTimeHourIregex** | **Number**|  | [optional] 
 **createdAtTimeHourContainedBy** | **Number**|  | [optional] 
 **createdAtTimeMinute** | **Number**|  | [optional] 
 **createdAtTimeMinuteIexact** | **Number**|  | [optional] 
 **createdAtTimeMinuteGt** | **Number**|  | [optional] 
 **createdAtTimeMinuteGte** | **Number**|  | [optional] 
 **createdAtTimeMinuteLt** | **Number**|  | [optional] 
 **createdAtTimeMinuteLte** | **Number**|  | [optional] 
 **createdAtTimeMinuteIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeMinuteContains** | **Number**|  | [optional] 
 **createdAtTimeMinuteIcontains** | **Number**|  | [optional] 
 **createdAtTimeMinuteStartswith** | **Number**|  | [optional] 
 **createdAtTimeMinuteIstartswith** | **Number**|  | [optional] 
 **createdAtTimeMinuteEndswith** | **Number**|  | [optional] 
 **createdAtTimeMinuteIendswith** | **Number**|  | [optional] 
 **createdAtTimeMinuteRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeMinuteIsnull** | **String**|  | [optional] 
 **createdAtTimeMinuteRegex** | **Number**|  | [optional] 
 **createdAtTimeMinuteIregex** | **Number**|  | [optional] 
 **createdAtTimeMinuteContainedBy** | **Number**|  | [optional] 
 **createdAtTimeSecond** | **Number**|  | [optional] 
 **createdAtTimeSecondIexact** | **Number**|  | [optional] 
 **createdAtTimeSecondGt** | **Number**|  | [optional] 
 **createdAtTimeSecondGte** | **Number**|  | [optional] 
 **createdAtTimeSecondLt** | **Number**|  | [optional] 
 **createdAtTimeSecondLte** | **Number**|  | [optional] 
 **createdAtTimeSecondIn** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeSecondContains** | **Number**|  | [optional] 
 **createdAtTimeSecondIcontains** | **Number**|  | [optional] 
 **createdAtTimeSecondStartswith** | **Number**|  | [optional] 
 **createdAtTimeSecondIstartswith** | **Number**|  | [optional] 
 **createdAtTimeSecondEndswith** | **Number**|  | [optional] 
 **createdAtTimeSecondIendswith** | **Number**|  | [optional] 
 **createdAtTimeSecondRange** | **Number**| Multiple values may be separated by commas. | [optional] 
 **createdAtTimeSecondIsnull** | **String**|  | [optional] 
 **createdAtTimeSecondRegex** | **Number**|  | [optional] 
 **createdAtTimeSecondIregex** | **Number**|  | [optional] 
 **createdAtTimeSecondContainedBy** | **Number**|  | [optional] 
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
 **status** | **String**|  | [optional] 
 **suppressedById** | **String**|  | [optional] 
 **closedById** | **String**|  | [optional] 
 **closedReason** | **Number**|  | [optional] 
 **closedReasonDetail** | **Number**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="eventsStatusCreate"></a>
# **eventsStatusCreate**
> eventsStatusCreate(eventId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.EventsApi();

var eventId = "eventId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.eventsStatusCreate(eventId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

