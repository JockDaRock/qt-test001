# PerchApi.TriggeredEventNotification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**eventNotification** | [**TriggeredEventNotificationSerializer**](TriggeredEventNotificationSerializer.md) |  | 
**indicatorId** | **String** | The Indicator ID used for the SecurityEvent created | [optional] 
**representationField** | **String** |  | [optional] 
**triggeredAt** | **Date** | When this trigger event occurred | [optional] 
**triggeredValues** | **Object** | The distinct values found by this trigger event | [optional] 
**wasPerchAlertCreated** | **Boolean** | Whether or not an alert was created. | [optional] 
**wasCwManageTicketCreated** | **Boolean** | Whether or not a CW Manage ticket was created | [optional] 
**wasEmailSent** | **Boolean** | Whether or not an email was sent | [optional] 
**wasFreshdeskTicketCreated** | **Boolean** | Whether or not a FreshDesk ticket was created | [optional] 
**wasMsftTeamsWebhookSent** | **Boolean** | Whether or not a MSFT Teams webhook was sent | [optional] 
**wasSlackMessageSent** | **Boolean** | Whether or not a message was sent to Slack | [optional] 
**wasSmsMessageSent** | **Boolean** | Whether or not a SMS message was sent | [optional] 


