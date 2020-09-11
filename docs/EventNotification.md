# PerchApi.EventNotification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**aggregationField** | **Number** | The field ES query results will be aggregated on. | [optional] 
**aggregationType** | **String** |  | [optional] 
**comparisonField** | **Number** | The field historical results will be compared by to determine if there are matching results. (Only Trigger Conditions New Value and Repeated Value) | [optional] 
**createdAt** | **Date** |  | [optional] 
**createdBy** | **String** |  | [optional] 
**createdByTeam** | **Number** | The Team that this Event Notification is visible to as well as the Team whose data will be searched. | [optional] 
**description** | **String** | User defined description that will be used in external messaging. | [optional] 
**emailActionCustomRecipients** | **[String]** | One-off recipients to send notifications to, if enable_email_action_custom_recipients is True. | [optional] 
**enableCwManageActionDefault** | **Boolean** | Whether to create a ConnectWise Manage ticket in the service board configured in the organization's CW Manage settings. | [optional] 
**enableEmailActionDefaultRecipients** | **Boolean** | Whether to send notifications to the recipients configured in the organization's email settings. | [optional] 
**enableEmailActionCustomRecipients** | **Boolean** | Whether to send notifications to the recipients configured in this Event Notification. | [optional] 
**enableFreshdeskActionDefaultTicketType** | **Boolean** | Whether to create a FreshDesk ticket with the default ticket type configured in the orgaization's FreshDesk settings. | [optional] 
**enableFreshdeskActionCustomTicketType** | **Boolean** | Whether to create a FreshDesk ticket with the custom ticket type configured in this Event Notification. | [optional] 
**enableMsftTeamsActionDefaultWebhookUrl** | **Boolean** | Whether to send notifications to the webhook URL configured in the organization's MSFT Teams settings. | [optional] 
**enableMsftTeamsActionCustomWebhookUrl** | **Boolean** | Whether to send notifications to the webhook URL configured in this Event Notification. | [optional] 
**enableSlackActionDefaultChannel** | **Boolean** | Whether to send notifications to the channel configured in the organization's Slack settings. | [optional] 
**enableSlackActionCustomChannel** | **Boolean** | Whether to send notifications to the Slack channel configured in this Event Notification. | [optional] 
**enableSmsActionDefaultRecipients** | **Boolean** | Whether to send SMS notifications to the recipients configured in the organization's SMS settings. | [optional] 
**enableSmsActionCustomRecipients** | **Boolean** | Whether to send SMS notifications to the recipients configured in this Event Notification. | [optional] 
**freshdeskActionCustomTicketType** | **String** | One-off ticket type to use for tickets created by this notification, if enable_freshdesk_action_custom_ticket_type is True. | [optional] 
**indexMapping** | **Number** | The EventNotificationAlertableMapping used to define ES query index patterns. | [optional] 
**isEnabled** | **Boolean** | Whether the Watch associated with this Event Notification is actively scheduled to run. | [optional] 
**isLocked** | **String** |  | [optional] 
**fieldsForDisplay** | **[Number]** | Controls what fields are displayed in Kibana discover queries and metadata about triggered_values. | [optional] 
**keywordFilter** | **String** | Used to enable searching by a raw query_string in constructed ES queries. | [optional] 
**kibanaQuery** | **String** |  | [optional] 
**lastTriggeredAt** | **Date** | When this notification was last triggered | [optional] 
**marketplaceSourceCollection** | [**MarketplaceSourceCollection**](MarketplaceSourceCollection.md) |  | [optional] 
**mitreAttackTactic** | **String** | The MITRE ATT&CK Tactic that is mapped to this Event Notification | [optional] 
**msearchQuery** | **String** |  | [optional] 
**msftTeamsActionCustomWebhookUrl** | **String** | One-off webhook URL to send notifications to, if enable_msft_teams_action_custom_webhook_url is True. | [optional] 
**name** | **String** | User defined name of this Event Notification. | 
**perchAlertEnabled** | **Boolean** | Whether to create a SecurityEventAlert within Perch for each distinct trigger value. | [optional] 
**prevTimeWindow** | **Object** | When used with a historical trigger this will define the previous date range to also run queries against. | [optional] 
**queryFilter** | **Object** | Used to enable searching by multiple conditions in constructed ES queries. | [optional] 
**representationField** | **Number** | When neither aggregation_field or comparison_field is set this controls the field used to represent triggered_values found by an Event Notification. | [optional] 
**schedule** | **Object** | The Watcher interval used to schedule watches. | 
**severity** | **Number** |  | 
**slackActionCustomChannel** | **String** | One-off channel to send notifications to, if enable_slack_action_custom_channel is True. | [optional] 
**smsActionCustomRecipients** | **[String]** | One-off recipients to send SMS notifications to, if enable_sms_action_custom_recipients is True. | [optional] 
**spikePercentage** | **Number** | When positive, indicates the percentage that must be exceeded to trigger an Event Notification using trigger_condition Spike. When negative, indicates the percentage under which a Spike notification will trigger. | [optional] 
**thresholdCount** | **Number** | When positive, indicates the number of matches that must be exceeded to trigger an Event Notification using trigger_condition Threshold. When negative, indicates the value under which a Threshold notification will trigger. | [optional] 
**throttlePeriod** | **Number** |  | [optional] 
**timeField** | **Number** | The field on which date filters will be applied in constructed ES queries. When null timestamp is used by default. | [optional] 
**timeWindow** | **Object** | The date range used to filter ES query results. | 
**triggerCondition** | **Number** |  | 
**updatedAt** | **Date** |  | [optional] 
**updatedBy** | **String** |  | [optional] 
**watchError** | **String** | Any errors currently affecting the Watch | [optional] 


<a name="AggregationTypeEnum"></a>
## Enum: AggregationTypeEnum


* `average` (value: `"Average"`)

* `uniqueCount` (value: `"Unique Count"`)

* `count` (value: `"Count"`)

* `max` (value: `"Max"`)

* `min` (value: `"Min"`)

* `sum` (value: `"Sum"`)




