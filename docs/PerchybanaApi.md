# PerchApi.PerchybanaApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**perchybanaCheckUserList**](PerchybanaApi.md#perchybanaCheckUserList) | **GET** /perchybana/check-user | 
[**perchybanaEventNotificationsActivate**](PerchybanaApi.md#perchybanaEventNotificationsActivate) | **POST** /perchybana/{company_id}/event-notifications/{id}/activate | 
[**perchybanaEventNotificationsAlertableFieldsList**](PerchybanaApi.md#perchybanaEventNotificationsAlertableFieldsList) | **GET** /perchybana/event-notifications/alertable-fields | 
[**perchybanaEventNotificationsAlertableMappingsList**](PerchybanaApi.md#perchybanaEventNotificationsAlertableMappingsList) | **GET** /perchybana/event-notifications/alertable-mappings | 
[**perchybanaEventNotificationsClone**](PerchybanaApi.md#perchybanaEventNotificationsClone) | **POST** /perchybana/{company_id}/event-notifications/{id}/clone | 
[**perchybanaEventNotificationsCreate**](PerchybanaApi.md#perchybanaEventNotificationsCreate) | **POST** /perchybana/{company_id}/event-notifications | 
[**perchybanaEventNotificationsDeactivate**](PerchybanaApi.md#perchybanaEventNotificationsDeactivate) | **POST** /perchybana/{company_id}/event-notifications/{id}/deactivate | 
[**perchybanaEventNotificationsDelete**](PerchybanaApi.md#perchybanaEventNotificationsDelete) | **DELETE** /perchybana/{company_id}/event-notifications/{id} | 
[**perchybanaEventNotificationsExecuteNow**](PerchybanaApi.md#perchybanaEventNotificationsExecuteNow) | **POST** /perchybana/{company_id}/event-notifications/{id}/execute-now | 
[**perchybanaEventNotificationsGetDefaultActions**](PerchybanaApi.md#perchybanaEventNotificationsGetDefaultActions) | **GET** /perchybana/{company_id}/event-notifications/default-actions | 
[**perchybanaEventNotificationsList**](PerchybanaApi.md#perchybanaEventNotificationsList) | **GET** /perchybana/{company_id}/event-notifications | 
[**perchybanaEventNotificationsNewTriggerEventCreate**](PerchybanaApi.md#perchybanaEventNotificationsNewTriggerEventCreate) | **POST** /perchybana/event-notifications/new-trigger-event | 
[**perchybanaEventNotificationsPartialUpdate**](PerchybanaApi.md#perchybanaEventNotificationsPartialUpdate) | **PATCH** /perchybana/{company_id}/event-notifications/{id} | 
[**perchybanaEventNotificationsRead**](PerchybanaApi.md#perchybanaEventNotificationsRead) | **GET** /perchybana/{company_id}/event-notifications/{id} | 
[**perchybanaEventNotificationsTestQuery**](PerchybanaApi.md#perchybanaEventNotificationsTestQuery) | **GET** /perchybana/{company_id}/event-notifications/{id}/test-query | 
[**perchybanaEventNotificationsTriggeredNotificationsList**](PerchybanaApi.md#perchybanaEventNotificationsTriggeredNotificationsList) | **GET** /perchybana/{company_id}/event-notifications/{event_notification_id}/triggered-notifications | 
[**perchybanaEventNotificationsTriggeredNotificationsRead**](PerchybanaApi.md#perchybanaEventNotificationsTriggeredNotificationsRead) | **GET** /perchybana/{company_id}/event-notifications/{event_notification_id}/triggered-notifications/{id} | 
[**perchybanaEventNotificationsUpdate**](PerchybanaApi.md#perchybanaEventNotificationsUpdate) | **PUT** /perchybana/{company_id}/event-notifications/{id} | 
[**perchybanaEventNotificationsUpdateDefaultActions**](PerchybanaApi.md#perchybanaEventNotificationsUpdateDefaultActions) | **PUT** /perchybana/{company_id}/event-notifications/update-default-actions | 
[**perchybanaMeltgardRolesList**](PerchybanaApi.md#perchybanaMeltgardRolesList) | **GET** /perchybana/meltgard/roles | 
[**perchybanaMeltgardRolesRead**](PerchybanaApi.md#perchybanaMeltgardRolesRead) | **GET** /perchybana/meltgard/roles/{role_names} | 
[**perchybanaMeltgardUsersMeList**](PerchybanaApi.md#perchybanaMeltgardUsersMeList) | **GET** /perchybana/meltgard/users/me | 
[**perchybanaMeltgardUsersRead**](PerchybanaApi.md#perchybanaMeltgardUsersRead) | **GET** /perchybana/meltgard/users/{username} | 
[**perchybanaScheduledReportsCreate**](PerchybanaApi.md#perchybanaScheduledReportsCreate) | **POST** /perchybana/{company_id}/scheduled-reports | 
[**perchybanaScheduledReportsDelete**](PerchybanaApi.md#perchybanaScheduledReportsDelete) | **DELETE** /perchybana/{company_id}/scheduled-reports/{id} | 
[**perchybanaScheduledReportsList**](PerchybanaApi.md#perchybanaScheduledReportsList) | **GET** /perchybana/{company_id}/scheduled-reports | 
[**perchybanaScheduledReportsPartialUpdate**](PerchybanaApi.md#perchybanaScheduledReportsPartialUpdate) | **PATCH** /perchybana/{company_id}/scheduled-reports/{id} | 
[**perchybanaScheduledReportsRead**](PerchybanaApi.md#perchybanaScheduledReportsRead) | **GET** /perchybana/{company_id}/scheduled-reports/{id} | 
[**perchybanaScheduledReportsReportsDownload**](PerchybanaApi.md#perchybanaScheduledReportsReportsDownload) | **GET** /perchybana/{company_id}/scheduled-reports/{scheduled_report_id}/reports/{id}/download | 
[**perchybanaScheduledReportsReportsList**](PerchybanaApi.md#perchybanaScheduledReportsReportsList) | **GET** /perchybana/{company_id}/scheduled-reports/{scheduled_report_id}/reports | 
[**perchybanaScheduledReportsReportsRead**](PerchybanaApi.md#perchybanaScheduledReportsReportsRead) | **GET** /perchybana/{company_id}/scheduled-reports/{scheduled_report_id}/reports/{id} | 
[**perchybanaScheduledReportsSavedObjectsList**](PerchybanaApi.md#perchybanaScheduledReportsSavedObjectsList) | **GET** /perchybana/scheduled-reports/saved-objects | 
[**perchybanaScheduledReportsTrigger**](PerchybanaApi.md#perchybanaScheduledReportsTrigger) | **POST** /perchybana/{company_id}/scheduled-reports/{id}/trigger | 
[**perchybanaScheduledReportsUpdate**](PerchybanaApi.md#perchybanaScheduledReportsUpdate) | **PUT** /perchybana/{company_id}/scheduled-reports/{id} | 


<a name="perchybanaCheckUserList"></a>
# **perchybanaCheckUserList**
> perchybanaCheckUserList()



Check if user is provisioned for Perchybana or is actively being provisioned

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaCheckUserList(callback);
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

<a name="perchybanaEventNotificationsActivate"></a>
# **perchybanaEventNotificationsActivate**
> EventNotification perchybanaEventNotificationsActivate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsActivate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsAlertableFieldsList"></a>
# **perchybanaEventNotificationsAlertableFieldsList**
> perchybanaEventNotificationsAlertableFieldsList()



Returns the available Elasticsearch fields to be utilized in Event Notifications. Accepts query param `?type=[str]` to return only fields of the given data type.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaEventNotificationsAlertableFieldsList(callback);
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

<a name="perchybanaEventNotificationsAlertableMappingsList"></a>
# **perchybanaEventNotificationsAlertableMappingsList**
> perchybanaEventNotificationsAlertableMappingsList()



Returns the available Elasticsearch event_type mappings supported for use in Event Notifications. Accepts query param `?id=[int]` to return a single mapping by ID.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaEventNotificationsAlertableMappingsList(callback);
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

<a name="perchybanaEventNotificationsClone"></a>
# **perchybanaEventNotificationsClone**
> EventNotification perchybanaEventNotificationsClone(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsClone(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsCreate"></a>
# **perchybanaEventNotificationsCreate**
> EventNotification perchybanaEventNotificationsCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsDeactivate"></a>
# **perchybanaEventNotificationsDeactivate**
> EventNotification perchybanaEventNotificationsDeactivate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsDeactivate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsDelete"></a>
# **perchybanaEventNotificationsDelete**
> perchybanaEventNotificationsDelete(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaEventNotificationsDelete(companyId, id, , callback);
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

<a name="perchybanaEventNotificationsExecuteNow"></a>
# **perchybanaEventNotificationsExecuteNow**
> EventNotification perchybanaEventNotificationsExecuteNow(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsExecuteNow(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsGetDefaultActions"></a>
# **perchybanaEventNotificationsGetDefaultActions**
> InlineResponse2007 perchybanaEventNotificationsGetDefaultActions(companyId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'aggregationType': "aggregationType_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'createdBy': "createdBy_example", // String | 
  'enableCwManageActionDefault': "enableCwManageActionDefault_example", // String | 
  'enableEmailActionDefaultRecipients': "enableEmailActionDefaultRecipients_example", // String | 
  'enableEmailActionCustomRecipients': "enableEmailActionCustomRecipients_example", // String | 
  'enableFreshdeskActionDefaultTicketType': "enableFreshdeskActionDefaultTicketType_example", // String | 
  'enableFreshdeskActionCustomTicketType': "enableFreshdeskActionCustomTicketType_example", // String | 
  'enableMsftTeamsActionDefaultWebhookUrl': "enableMsftTeamsActionDefaultWebhookUrl_example", // String | 
  'enableMsftTeamsActionCustomWebhookUrl': "enableMsftTeamsActionCustomWebhookUrl_example", // String | 
  'enableSlackActionDefaultChannel': "enableSlackActionDefaultChannel_example", // String | 
  'enableSlackActionCustomChannel': "enableSlackActionCustomChannel_example", // String | 
  'enableSmsActionDefaultRecipients': "enableSmsActionDefaultRecipients_example", // String | 
  'enableSmsActionCustomRecipients': "enableSmsActionCustomRecipients_example", // String | 
  'indexMapping': "indexMapping_example", // String | 
  'isEnabled': "isEnabled_example", // String | 
  'name': "name_example", // String | 
  'perchAlertEnabled': "perchAlertEnabled_example", // String | 
  'severity': "severity_example", // String | 
  'triggerCondition': "triggerCondition_example", // String | 
  'updatedAt': "updatedAt_example", // String | 
  'updatedAtGte': "updatedAtGte_example", // String | 
  'updatedAtLte': "updatedAtLte_example", // String | 
  'updatedBy': "updatedBy_example", // String | 
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
apiInstance.perchybanaEventNotificationsGetDefaultActions(companyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **aggregationType** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **createdBy** | **String**|  | [optional] 
 **enableCwManageActionDefault** | **String**|  | [optional] 
 **enableEmailActionDefaultRecipients** | **String**|  | [optional] 
 **enableEmailActionCustomRecipients** | **String**|  | [optional] 
 **enableFreshdeskActionDefaultTicketType** | **String**|  | [optional] 
 **enableFreshdeskActionCustomTicketType** | **String**|  | [optional] 
 **enableMsftTeamsActionDefaultWebhookUrl** | **String**|  | [optional] 
 **enableMsftTeamsActionCustomWebhookUrl** | **String**|  | [optional] 
 **enableSlackActionDefaultChannel** | **String**|  | [optional] 
 **enableSlackActionCustomChannel** | **String**|  | [optional] 
 **enableSmsActionDefaultRecipients** | **String**|  | [optional] 
 **enableSmsActionCustomRecipients** | **String**|  | [optional] 
 **indexMapping** | **String**|  | [optional] 
 **isEnabled** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **perchAlertEnabled** | **String**|  | [optional] 
 **severity** | **String**|  | [optional] 
 **triggerCondition** | **String**|  | [optional] 
 **updatedAt** | **String**|  | [optional] 
 **updatedAtGte** | **String**|  | [optional] 
 **updatedAtLte** | **String**|  | [optional] 
 **updatedBy** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **search** | **String**| A search term. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsList"></a>
# **perchybanaEventNotificationsList**
> InlineResponse2007 perchybanaEventNotificationsList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var opts = { 
  'aggregationType': "aggregationType_example", // String | 
  'createdAt': "createdAt_example", // String | 
  'createdAtGte': "createdAtGte_example", // String | 
  'createdAtLte': "createdAtLte_example", // String | 
  'createdBy': "createdBy_example", // String | 
  'enableCwManageActionDefault': "enableCwManageActionDefault_example", // String | 
  'enableEmailActionDefaultRecipients': "enableEmailActionDefaultRecipients_example", // String | 
  'enableEmailActionCustomRecipients': "enableEmailActionCustomRecipients_example", // String | 
  'enableFreshdeskActionDefaultTicketType': "enableFreshdeskActionDefaultTicketType_example", // String | 
  'enableFreshdeskActionCustomTicketType': "enableFreshdeskActionCustomTicketType_example", // String | 
  'enableMsftTeamsActionDefaultWebhookUrl': "enableMsftTeamsActionDefaultWebhookUrl_example", // String | 
  'enableMsftTeamsActionCustomWebhookUrl': "enableMsftTeamsActionCustomWebhookUrl_example", // String | 
  'enableSlackActionDefaultChannel': "enableSlackActionDefaultChannel_example", // String | 
  'enableSlackActionCustomChannel': "enableSlackActionCustomChannel_example", // String | 
  'enableSmsActionDefaultRecipients': "enableSmsActionDefaultRecipients_example", // String | 
  'enableSmsActionCustomRecipients': "enableSmsActionCustomRecipients_example", // String | 
  'indexMapping': "indexMapping_example", // String | 
  'isEnabled': "isEnabled_example", // String | 
  'name': "name_example", // String | 
  'perchAlertEnabled': "perchAlertEnabled_example", // String | 
  'severity': "severity_example", // String | 
  'triggerCondition': "triggerCondition_example", // String | 
  'updatedAt': "updatedAt_example", // String | 
  'updatedAtGte': "updatedAtGte_example", // String | 
  'updatedAtLte': "updatedAtLte_example", // String | 
  'updatedBy': "updatedBy_example", // String | 
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
apiInstance.perchybanaEventNotificationsList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **aggregationType** | **String**|  | [optional] 
 **createdAt** | **String**|  | [optional] 
 **createdAtGte** | **String**|  | [optional] 
 **createdAtLte** | **String**|  | [optional] 
 **createdBy** | **String**|  | [optional] 
 **enableCwManageActionDefault** | **String**|  | [optional] 
 **enableEmailActionDefaultRecipients** | **String**|  | [optional] 
 **enableEmailActionCustomRecipients** | **String**|  | [optional] 
 **enableFreshdeskActionDefaultTicketType** | **String**|  | [optional] 
 **enableFreshdeskActionCustomTicketType** | **String**|  | [optional] 
 **enableMsftTeamsActionDefaultWebhookUrl** | **String**|  | [optional] 
 **enableMsftTeamsActionCustomWebhookUrl** | **String**|  | [optional] 
 **enableSlackActionDefaultChannel** | **String**|  | [optional] 
 **enableSlackActionCustomChannel** | **String**|  | [optional] 
 **enableSmsActionDefaultRecipients** | **String**|  | [optional] 
 **enableSmsActionCustomRecipients** | **String**|  | [optional] 
 **indexMapping** | **String**|  | [optional] 
 **isEnabled** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **perchAlertEnabled** | **String**|  | [optional] 
 **severity** | **String**|  | [optional] 
 **triggerCondition** | **String**|  | [optional] 
 **updatedAt** | **String**|  | [optional] 
 **updatedAtGte** | **String**|  | [optional] 
 **updatedAtLte** | **String**|  | [optional] 
 **updatedBy** | **String**|  | [optional] 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **search** | **String**| A search term. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsNewTriggerEventCreate"></a>
# **perchybanaEventNotificationsNewTriggerEventCreate**
> perchybanaEventNotificationsNewTriggerEventCreate()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaEventNotificationsNewTriggerEventCreate(callback);
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

<a name="perchybanaEventNotificationsPartialUpdate"></a>
# **perchybanaEventNotificationsPartialUpdate**
> EventNotification perchybanaEventNotificationsPartialUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsPartialUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsRead"></a>
# **perchybanaEventNotificationsRead**
> EventNotification perchybanaEventNotificationsRead(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsRead(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsTestQuery"></a>
# **perchybanaEventNotificationsTestQuery**
> EventNotification perchybanaEventNotificationsTestQuery(companyId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsTestQuery(companyId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsTriggeredNotificationsList"></a>
# **perchybanaEventNotificationsTriggeredNotificationsList**
> InlineResponse2008 perchybanaEventNotificationsTriggeredNotificationsList(companyId, eventNotificationId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var eventNotificationId = "eventNotificationId_example"; // String | 

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
apiInstance.perchybanaEventNotificationsTriggeredNotificationsList(companyId, eventNotificationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **eventNotificationId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsTriggeredNotificationsRead"></a>
# **perchybanaEventNotificationsTriggeredNotificationsRead**
> TriggeredEventNotification perchybanaEventNotificationsTriggeredNotificationsRead(companyId, eventNotificationId, id)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var eventNotificationId = "eventNotificationId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsTriggeredNotificationsRead(companyId, eventNotificationId, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **eventNotificationId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**TriggeredEventNotification**](TriggeredEventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsUpdate"></a>
# **perchybanaEventNotificationsUpdate**
> EventNotification perchybanaEventNotificationsUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaEventNotificationsUpdateDefaultActions"></a>
# **perchybanaEventNotificationsUpdateDefaultActions**
> EventNotification perchybanaEventNotificationsUpdateDefaultActions(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.EventNotification(); // EventNotification | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaEventNotificationsUpdateDefaultActions(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**EventNotification**](EventNotification.md)|  | 

### Return type

[**EventNotification**](EventNotification.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaMeltgardRolesList"></a>
# **perchybanaMeltgardRolesList**
> perchybanaMeltgardRolesList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaMeltgardRolesList(callback);
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

<a name="perchybanaMeltgardRolesRead"></a>
# **perchybanaMeltgardRolesRead**
> perchybanaMeltgardRolesRead(roleNames)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var roleNames = "roleNames_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaMeltgardRolesRead(roleNames, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **roleNames** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaMeltgardUsersMeList"></a>
# **perchybanaMeltgardUsersMeList**
> perchybanaMeltgardUsersMeList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaMeltgardUsersMeList(callback);
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

<a name="perchybanaMeltgardUsersRead"></a>
# **perchybanaMeltgardUsersRead**
> perchybanaMeltgardUsersRead(username)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var username = "username_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaMeltgardUsersRead(username, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsCreate"></a>
# **perchybanaScheduledReportsCreate**
> ScheduledReport perchybanaScheduledReportsCreate(companyId, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var data = new PerchApi.ScheduledReport(); // ScheduledReport | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsCreate(companyId, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **data** | [**ScheduledReport**](ScheduledReport.md)|  | 

### Return type

[**ScheduledReport**](ScheduledReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsDelete"></a>
# **perchybanaScheduledReportsDelete**
> perchybanaScheduledReportsDelete(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.perchybanaScheduledReportsDelete(companyId, id, , callback);
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

<a name="perchybanaScheduledReportsList"></a>
# **perchybanaScheduledReportsList**
> InlineResponse2009 perchybanaScheduledReportsList(companyId, , opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

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
apiInstance.perchybanaScheduledReportsList(companyId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsPartialUpdate"></a>
# **perchybanaScheduledReportsPartialUpdate**
> ScheduledReport perchybanaScheduledReportsPartialUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.ScheduledReport(); // ScheduledReport | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsPartialUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**ScheduledReport**](ScheduledReport.md)|  | 

### Return type

[**ScheduledReport**](ScheduledReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsRead"></a>
# **perchybanaScheduledReportsRead**
> ScheduledReport perchybanaScheduledReportsRead(companyId, id, )





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsRead(companyId, id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 

### Return type

[**ScheduledReport**](ScheduledReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsReportsDownload"></a>
# **perchybanaScheduledReportsReportsDownload**
> Report perchybanaScheduledReportsReportsDownload(companyId, id, scheduledReportId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var scheduledReportId = "scheduledReportId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsReportsDownload(companyId, id, scheduledReportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **scheduledReportId** | **String**|  | 

### Return type

[**Report**](Report.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsReportsList"></a>
# **perchybanaScheduledReportsReportsList**
> InlineResponse20010 perchybanaScheduledReportsReportsList(companyId, scheduledReportId, opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var scheduledReportId = "scheduledReportId_example"; // String | 

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
apiInstance.perchybanaScheduledReportsReportsList(companyId, scheduledReportId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **scheduledReportId** | **String**|  | 
 **ordering** | **String**| Which field to use when ordering the results. | [optional] 
 **pageNumber** | **Number**| A page number within the paginated result set. | [optional] 
 **pageSize** | **Number**| Number of results to return per page. | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsReportsRead"></a>
# **perchybanaScheduledReportsReportsRead**
> Report perchybanaScheduledReportsReportsRead(companyId, id, scheduledReportId)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var scheduledReportId = "scheduledReportId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsReportsRead(companyId, id, scheduledReportId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **scheduledReportId** | **String**|  | 

### Return type

[**Report**](Report.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsSavedObjectsList"></a>
# **perchybanaScheduledReportsSavedObjectsList**
> [SavedObject] perchybanaScheduledReportsSavedObjectsList(opts)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var opts = { 
  'type': "type_example" // String | Multiple values may be separated by commas.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsSavedObjectsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Multiple values may be separated by commas. | [optional] 

### Return type

[**[SavedObject]**](SavedObject.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsTrigger"></a>
# **perchybanaScheduledReportsTrigger**
> ScheduledReport perchybanaScheduledReportsTrigger(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.ScheduledReport(); // ScheduledReport | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsTrigger(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**ScheduledReport**](ScheduledReport.md)|  | 

### Return type

[**ScheduledReport**](ScheduledReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="perchybanaScheduledReportsUpdate"></a>
# **perchybanaScheduledReportsUpdate**
> ScheduledReport perchybanaScheduledReportsUpdate(companyId, id, data)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PerchybanaApi();

var companyId = "companyId_example"; // String | 

var id = "id_example"; // String | 

var data = new PerchApi.ScheduledReport(); // ScheduledReport | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.perchybanaScheduledReportsUpdate(companyId, id, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **companyId** | **String**|  | 
 **id** | **String**|  | 
 **data** | [**ScheduledReport**](ScheduledReport.md)|  | 

### Return type

[**ScheduledReport**](ScheduledReport.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

