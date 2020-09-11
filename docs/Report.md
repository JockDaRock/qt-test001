# PerchApi.Report

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**scheduledReport** | **Number** |  | [optional] 
**runForTeam** | **Number** |  | 
**state** | **String** |  | [optional] 
**contentType** | **String** | The content type of the report output, if successfully completed | [optional] 
**outputSize** | **Number** | The size in bytes of the report output, if successfully completed | [optional] 
**outputSizeHuman** | **String** |  | [optional] 
**errorMsg** | **String** | An error message as reported by Perchybana | [optional] 
**name** | **String** |  | 
**savedObjectType** | **String** |  | 
**savedObjectId** | **String** |  | 
**fromTime** | **Date** | Earliest time to query results from | 
**toTime** | **Date** | Latest time to query results till | 


<a name="StateEnum"></a>
## Enum: StateEnum


* `uninitiated` (value: `"uninitiated"`)

* `initiated` (value: `"initiated"`)

* `pending` (value: `"pending"`)

* `processing` (value: `"processing"`)

* `completed` (value: `"completed"`)

* `failed` (value: `"failed"`)

* `notified` (value: `"notified"`)

* `notifySkipped` (value: `"notify-skipped"`)




