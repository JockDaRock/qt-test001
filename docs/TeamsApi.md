# PerchApi.TeamsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamsBlacklistCreate**](TeamsApi.md#teamsBlacklistCreate) | **POST** /{version}/teams/{company_id}/blacklist | 
[**teamsBlacklistDelete**](TeamsApi.md#teamsBlacklistDelete) | **DELETE** /{version}/teams/{company_id}/blacklist/{id} | 
[**teamsBlacklistList**](TeamsApi.md#teamsBlacklistList) | **GET** /{version}/teams/{company_id}/blacklist | 
[**teamsBlacklistPartialUpdate**](TeamsApi.md#teamsBlacklistPartialUpdate) | **PATCH** /{version}/teams/{company_id}/blacklist/{id} | 
[**teamsBlacklistRead**](TeamsApi.md#teamsBlacklistRead) | **GET** /{version}/teams/{company_id}/blacklist/{id} | 
[**teamsBlacklistUpdate**](TeamsApi.md#teamsBlacklistUpdate) | **PUT** /{version}/teams/{company_id}/blacklist/{id} | 
[**teamsCommentsList**](TeamsApi.md#teamsCommentsList) | **GET** /teams/{company_id}/comments | 
[**teamsCommentsRead**](TeamsApi.md#teamsCommentsRead) | **GET** /teams/{company_id}/comments/{id} | 
[**teamsContactsCreate**](TeamsApi.md#teamsContactsCreate) | **POST** /teams/{company_id}/contacts | 
[**teamsContactsDelete**](TeamsApi.md#teamsContactsDelete) | **DELETE** /teams/{company_id}/contacts/{id} | 
[**teamsContactsList**](TeamsApi.md#teamsContactsList) | **GET** /teams/{company_id}/contacts | 
[**teamsContactsPartialUpdate**](TeamsApi.md#teamsContactsPartialUpdate) | **PATCH** /teams/{company_id}/contacts/{id} | 
[**teamsContactsRead**](TeamsApi.md#teamsContactsRead) | **GET** /teams/{company_id}/contacts/{id} | 
[**teamsContactsUpdate**](TeamsApi.md#teamsContactsUpdate) | **PUT** /teams/{company_id}/contacts/{id} | 


<a name="teamsBlacklistCreate"></a>
# **teamsBlacklistCreate**
> PublicFirewallBlacklistSerializer teamsBlacklistCreate(companyId, version, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var version = "version_example"; // String | 

var data = new PerchApi.PublicFirewallBlacklistSerializer(); // PublicFirewallBlacklistSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsBlacklistCreate(companyId, version, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **version** | **String**|  | 
 **data** | [**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)|  | 

### Return type

[**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsBlacklistDelete"></a>
# **teamsBlacklistDelete**
> teamsBlacklistDelete(companyId, id, version, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsBlacklistDelete(companyId, id, version, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsBlacklistList"></a>
# **teamsBlacklistList**
> InlineResponse20023 teamsBlacklistList(companyId, version, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var version = "version_example"; // String | 

var opts = { 
  'createdBy': "createdBy_example", // String | 
  'updatedBy': "updatedBy_example", // String | 
  'brand': "brand_example", // String | 
  'type': "type_example", // String | 
  'value': "value_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtGt': "createdAtGt_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'createdAtLt': "createdAtLt_example", // String | 
  'updatedAt': "updatedAt_example", // String | 
  'updatedAtGte': "updatedAtGte_example", // String | 
  'updatedAtGt': "updatedAtGt_example", // String | 
  'updatedAtLte': "updatedAtLte_example", // String | 
  'updatedAtLt': "updatedAtLt_example", // String | 
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
apiInstance.teamsBlacklistList(companyId, version, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **version** | **String**|  | 
 **createdBy** | **String**|  | [optional] 
 **updatedBy** | **String**|  | [optional] 
 **brand** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **value** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtGt** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **createdAtLt** | **String**|  | [optional] 
 **updatedAt** | **String**|  | [optional] 
 **updatedAtGte** | **String**|  | [optional] 
 **updatedAtGt** | **String**|  | [optional] 
 **updatedAtLte** | **String**|  | [optional] 
 **updatedAtLt** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsBlacklistPartialUpdate"></a>
# **teamsBlacklistPartialUpdate**
> PublicFirewallBlacklistSerializer teamsBlacklistPartialUpdate(companyId, id, version, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var version = "version_example"; // String | 

var data = new PerchApi.PublicFirewallBlacklistSerializer(); // PublicFirewallBlacklistSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsBlacklistPartialUpdate(companyId, id, version, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 
 **data** | [**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)|  | 

### Return type

[**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsBlacklistRead"></a>
# **teamsBlacklistRead**
> PublicFirewallBlacklistSerializer teamsBlacklistRead(companyId, id, version, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsBlacklistRead(companyId, id, version, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 

### Return type

[**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsBlacklistUpdate"></a>
# **teamsBlacklistUpdate**
> PublicFirewallBlacklistSerializer teamsBlacklistUpdate(companyId, id, version, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var version = "version_example"; // String | 

var data = new PerchApi.PublicFirewallBlacklistSerializer(); // PublicFirewallBlacklistSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsBlacklistUpdate(companyId, id, version, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **version** | **String**|  | 
 **data** | [**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)|  | 

### Return type

[**PublicFirewallBlacklistSerializer**](PublicFirewallBlacklistSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsCommentsList"></a>
# **teamsCommentsList**
> InlineResponse20012 teamsCommentsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'group': "group_example", // String | 
  'text': "text_example", // String | 
  'textIexact': "textIexact_example", // String | 
  'textGt': "textGt_example", // String | 
  'textGte': "textGte_example", // String | 
  'textLt': "textLt_example", // String | 
  'textLte': "textLte_example", // String | 
  'textIn': "textIn_example", // String | Multiple values may be separated by commas.
  'textContains': "textContains_example", // String | 
  'textIcontains': "textIcontains_example", // String | 
  'textStartswith': "textStartswith_example", // String | 
  'textIstartswith': "textIstartswith_example", // String | 
  'textEndswith': "textEndswith_example", // String | 
  'textIendswith': "textIendswith_example", // String | 
  'textRange': "textRange_example", // String | Multiple values may be separated by commas.
  'textIsnull': "textIsnull_example", // String | 
  'textRegex': "textRegex_example", // String | 
  'textIregex': "textIregex_example", // String | 
  'textUnaccent': "textUnaccent_example", // String | 
  'textUnaccentIexact': "textUnaccentIexact_example", // String | 
  'textUnaccentGt': "textUnaccentGt_example", // String | 
  'textUnaccentGte': "textUnaccentGte_example", // String | 
  'textUnaccentLt': "textUnaccentLt_example", // String | 
  'textUnaccentLte': "textUnaccentLte_example", // String | 
  'textUnaccentIn': "textUnaccentIn_example", // String | Multiple values may be separated by commas.
  'textUnaccentContains': "textUnaccentContains_example", // String | 
  'textUnaccentIcontains': "textUnaccentIcontains_example", // String | 
  'textUnaccentStartswith': "textUnaccentStartswith_example", // String | 
  'textUnaccentIstartswith': "textUnaccentIstartswith_example", // String | 
  'textUnaccentEndswith': "textUnaccentEndswith_example", // String | 
  'textUnaccentIendswith': "textUnaccentIendswith_example", // String | 
  'textUnaccentRange': "textUnaccentRange_example", // String | Multiple values may be separated by commas.
  'textUnaccentIsnull': "textUnaccentIsnull_example", // String | 
  'textUnaccentRegex': "textUnaccentRegex_example", // String | 
  'textUnaccentIregex': "textUnaccentIregex_example", // String | 
  'textUnaccentSearch': "textUnaccentSearch_example", // String | 
  'textUnaccentTrigramSimilar': "textUnaccentTrigramSimilar_example", // String | 
  'textSearch': "textSearch_example", // String | 
  'textTrigramSimilar': "textTrigramSimilar_example", // String | 
  'privateFor': "privateFor_example", // String | 
  'anonymous': "anonymous_example", // String | 
  'visibility': "visibility_example", // String | 
  'createdBy': "createdBy_example", // String | 
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
  'ordering': "ordering_example", // String | Which field to use when ordering the results.
  'page': 56, // Number | A page number within the paginated result set.
  'pageSize': 56 // Number | Number of results to return per page.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsCommentsList(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **group** | **String**|  | [optional] 
 **text** | **String**|  | [optional] 
 **textIexact** | **String**|  | [optional] 
 **textGt** | **String**|  | [optional] 
 **textGte** | **String**|  | [optional] 
 **textLt** | **String**|  | [optional] 
 **textLte** | **String**|  | [optional] 
 **textIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **textContains** | **String**|  | [optional] 
 **textIcontains** | **String**|  | [optional] 
 **textStartswith** | **String**|  | [optional] 
 **textIstartswith** | **String**|  | [optional] 
 **textEndswith** | **String**|  | [optional] 
 **textIendswith** | **String**|  | [optional] 
 **textRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **textIsnull** | **String**|  | [optional] 
 **textRegex** | **String**|  | [optional] 
 **textIregex** | **String**|  | [optional] 
 **textUnaccent** | **String**|  | [optional] 
 **textUnaccentIexact** | **String**|  | [optional] 
 **textUnaccentGt** | **String**|  | [optional] 
 **textUnaccentGte** | **String**|  | [optional] 
 **textUnaccentLt** | **String**|  | [optional] 
 **textUnaccentLte** | **String**|  | [optional] 
 **textUnaccentIn** | **String**| Multiple values may be separated by commas. | [optional] 
 **textUnaccentContains** | **String**|  | [optional] 
 **textUnaccentIcontains** | **String**|  | [optional] 
 **textUnaccentStartswith** | **String**|  | [optional] 
 **textUnaccentIstartswith** | **String**|  | [optional] 
 **textUnaccentEndswith** | **String**|  | [optional] 
 **textUnaccentIendswith** | **String**|  | [optional] 
 **textUnaccentRange** | **String**| Multiple values may be separated by commas. | [optional] 
 **textUnaccentIsnull** | **String**|  | [optional] 
 **textUnaccentRegex** | **String**|  | [optional] 
 **textUnaccentIregex** | **String**|  | [optional] 
 **textUnaccentSearch** | **String**|  | [optional] 
 **textUnaccentTrigramSimilar** | **String**|  | [optional] 
 **textSearch** | **String**|  | [optional] 
 **textTrigramSimilar** | **String**|  | [optional] 
 **privateFor** | **String**|  | [optional] 
 **anonymous** | **String**|  | [optional] 
 **visibility** | **String**|  | [optional] 
 **createdBy** | **String**|  | [optional] 
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
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsCommentsRead"></a>
# **teamsCommentsRead**
> IndicatorComment teamsCommentsRead(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.teamsCommentsRead(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**IndicatorComment**](IndicatorComment.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamsContactsCreate"></a>
# **teamsContactsCreate**
> teamsContactsCreate(companyId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsContactsCreate(companyId, callback);
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

<a name="teamsContactsDelete"></a>
# **teamsContactsDelete**
> teamsContactsDelete(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsContactsDelete(companyId, id, callback);
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

<a name="teamsContactsList"></a>
# **teamsContactsList**
> teamsContactsList(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

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
apiInstance.teamsContactsList(companyId, opts, callback);
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

<a name="teamsContactsPartialUpdate"></a>
# **teamsContactsPartialUpdate**
> teamsContactsPartialUpdate(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsContactsPartialUpdate(companyId, id, callback);
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

<a name="teamsContactsRead"></a>
# **teamsContactsRead**
> teamsContactsRead(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsContactsRead(companyId, id, callback);
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

<a name="teamsContactsUpdate"></a>
# **teamsContactsUpdate**
> teamsContactsUpdate(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.TeamsApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.teamsContactsUpdate(companyId, id, callback);
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

