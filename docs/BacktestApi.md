# PerchApi.BacktestApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backtestCreate**](BacktestApi.md#backtestCreate) | **POST** /{version}/backtest | 


<a name="backtestCreate"></a>
# **backtestCreate**
> backtestCreate(version)



Backtest an observable against Perch data.<br><br>Example:<br> <pre class=\"highlight javascript\" data-language=\"javascript\"> {\"value\": \"yahoo.com\"} </pre>

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.BacktestApi();

var version = "version_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.backtestCreate(version, callback);
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

