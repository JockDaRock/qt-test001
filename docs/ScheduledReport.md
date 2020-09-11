# PerchApi.ScheduledReport

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**name** | **String** |  | 
**description** | **String** |  | [optional] 
**isEnabled** | **Boolean** | Whether to schedule the report to be triggered. | [optional] 
**savedObjectType** | **String** | Type of the Kibana saved object the report is sourced from. | 
**savedObjectId** | **String** |  | 
**lastRunAt** | **Date** | The last time the report was triggered. | [optional] 
**nextRunAt** | **Date** | The next time the report should trigger. | [optional] 
**schedule** | [**Schedule**](Schedule.md) |  | 
**enableDefaultRecipients** | **Boolean** | Whether to send notifications to the recipients configured in the organization's email settings | [optional] 
**enableCustomRecipients** | **Boolean** | Whether to send notifications to the recipients configured in this Scheduled Report | [optional] 
**customRecipients** | **[String]** | One-off recipients to send notifications to, if enable_custom_recipients is True | [optional] 
**createdAt** | **Date** |  | [optional] 
**createdBy** | **Number** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**updatedBy** | **Number** |  | [optional] 


