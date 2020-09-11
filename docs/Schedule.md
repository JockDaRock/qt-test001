# PerchApi.Schedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**intervalValue** | **Number** |  | [optional] 
**intervalUnit** | **String** |  | 
**daysOfMonth** | **[Number]** | On monthly schedules, which days of month to run report on. | [optional] 
**daysOfWeek** | **[Number]** |  | [optional] 
**hours** | **[Number]** | On monthly, weekly, or daily schedules, which hours of the day to run report on. | [optional] 
**minutes** | **[Number]** | On monthly, weekly, daily, or hourly, or schedules, which minutes of the hour to run report on. | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `interval` (value: `"interval"`)

* `hourly` (value: `"hourly"`)

* `daily` (value: `"daily"`)

* `weekly` (value: `"weekly"`)

* `monthly` (value: `"monthly"`)




<a name="IntervalUnitEnum"></a>
## Enum: IntervalUnitEnum


* `minute` (value: `"minute"`)

* `hour` (value: `"hour"`)

* `day` (value: `"day"`)




