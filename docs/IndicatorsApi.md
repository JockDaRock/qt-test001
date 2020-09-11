# PerchApi.IndicatorsApi

All URIs are relative to *http://api.perchsecurity.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**indicatorsCreate**](IndicatorsApi.md#indicatorsCreate) | **POST** /{version}/indicators | 


<a name="indicatorsCreate"></a>
# **indicatorsCreate**
> PublicIndicatorSerializer indicatorsCreate(version, data)



Create a bunch of indicators at once.<br><br> <b>TLP Options:</b><br> 0: WHITE<br> 1: GREEN<br> 2: AMBER<br> 3: RED<br><br>  <b>Confidence Options:</b><br> 0: LOW<br> 1: MEDIUM<br> 2: HIGH<br><br>  <b>Observable Type Options:</b><br> 0: IP<br> 1: Domain<br> 2: URL<br> 3: REGEX<br> 4: File Hash<br><br>  Example<br>  <pre class=\"highlight json\" data-language=\"json\">     [         {             \"title\": \"An indicator title\",             \"description\": \"and indicator description\",             \"tlp\": 3,             \"confidence\": 0,             \"observables\": [                 {                     \"type\": 0,                     \"details\": {                         \"value\": \"127.0.0.1\"                     }                 }             ],             \"communities\": [{\"id\": community.id}]         },         {             \"title\": \"Title 2\",             \"description\": \"description 2\",             \"tlp\": 2,             \"confidence\": 1,             \"observables\": [                 {                     \"type\": 4,                     \"details\": {                         \"value\": \"fjelakjf0ndklanw00n\",                         \"hash\": 2                     }                 }             ],             \"communities\": [{\"id\": community.id}]         }     ] </pre>

### Example
```javascript
var PerchApi = require('perch_api');
var defaultClient = PerchApi.ApiClient.instance;

// Configure HTTP basic authorization: Basic
var Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

var apiInstance = new PerchApi.IndicatorsApi();

var version = "version_example"; // String | 

var data = new PerchApi.PublicIndicatorSerializer(); // PublicIndicatorSerializer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.indicatorsCreate(version, data, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **String**|  | 
 **data** | [**PublicIndicatorSerializer**](PublicIndicatorSerializer.md)|  | 

### Return type

[**PublicIndicatorSerializer**](PublicIndicatorSerializer.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

