# PerchApi.CompanyDetailValuesApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companyDetailValuesList**](CompanyDetailValuesApi.md#companyDetailValuesList) | **GET** /companyDetailValues | 


<a name="companyDetailValuesList"></a>
# **companyDetailValuesList**
> companyDetailValuesList()





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.CompanyDetailValuesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.companyDetailValuesList(callback);
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

