# PerchApi.PostalcodeGeohashApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postalcodeGeohashRead**](PostalcodeGeohashApi.md#postalcodeGeohashRead) | **GET** /postalcode_geohash/{country_code}/{postal_code} | 


<a name="postalcodeGeohashRead"></a>
# **postalcodeGeohashRead**
> postalcodeGeohashRead(countryCode, postalCode)





### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.PostalcodeGeohashApi();

var countryCode = "countryCode_example"; // String | 

var postalCode = "postalCode_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postalcodeGeohashRead(countryCode, postalCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **countryCode** | **String**|  | 
 **postalCode** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

