# PerchApi.SquawkboxApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**squawkboxInviteCreate**](SquawkboxApi.md#squawkboxInviteCreate) | **POST** /squawkbox/invite | Automatically invites qualified users to the Slack #squawkbox channel


<a name="squawkboxInviteCreate"></a>
# **squawkboxInviteCreate**
> squawkboxInviteCreate()

Automatically invites qualified users to the Slack #squawkbox channel

A qualified user is one that is a member of at least one team that has the squawkbox_approved flag set.

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.SquawkboxApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.squawkboxInviteCreate(callback);
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

