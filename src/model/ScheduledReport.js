/*
 * Perch API
 * Interactive documentation functionality is incomplete and may not work as expected. We recommend you connect with a REST client such as Postman, Httpie, or even plan old CURL.   Obtain your API username, password, and key from your <a href=\"https://app.perchsecurity.com/user/groups\" target=\"blank\">group settings</a>   <br><h4>Root URL</h4><table class=\"parameters table table-bordered table-striped\"><tr><td>Base URL</td><td>https://api.perch.rocks</td></tr><tr><td>Version</td><td>v1</td></tr></table>   <br><h4>Headers</h4><table class=\"parameters table table-bordered table-striped\"><tr><td>x-api-key</td><td>(your api key from the group settings page)</td></tr><tr><td>Authorization</td><td>Bearer (your access token returned from /auth/access_token)</td></tr></table>
 *
 * OpenAPI spec version: v1
 * Contact: help@perchsecurity.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Schedule'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Schedule'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.ScheduledReport = factory(root.PerchApi.ApiClient, root.PerchApi.Schedule);
  }
}(this, function(ApiClient, Schedule) {
  'use strict';

  /**
   * The ScheduledReport model module.
   * @module model/ScheduledReport
   * @version v1
   */

  /**
   * Constructs a new <code>ScheduledReport</code>.
   * @alias module:model/ScheduledReport
   * @class
   * @param name {String} 
   * @param savedObjectType {String} Type of the Kibana saved object the report is sourced from.
   * @param savedObjectId {String} 
   * @param schedule {module:model/Schedule} 
   */
  var exports = function(name, savedObjectType, savedObjectId, schedule) {
    this.name = name;
    this.savedObjectType = savedObjectType;
    this.savedObjectId = savedObjectId;
    this.schedule = schedule;
  };

  /**
   * Constructs a <code>ScheduledReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ScheduledReport} obj Optional instance to populate.
   * @return {module:model/ScheduledReport} The populated <code>ScheduledReport</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('is_enabled'))
        obj.isEnabled = ApiClient.convertToType(data['is_enabled'], 'Boolean');
      if (data.hasOwnProperty('saved_object_type'))
        obj.savedObjectType = ApiClient.convertToType(data['saved_object_type'], 'String');
      if (data.hasOwnProperty('saved_object_id'))
        obj.savedObjectId = ApiClient.convertToType(data['saved_object_id'], 'String');
      if (data.hasOwnProperty('last_run_at'))
        obj.lastRunAt = ApiClient.convertToType(data['last_run_at'], 'Date');
      if (data.hasOwnProperty('next_run_at'))
        obj.nextRunAt = ApiClient.convertToType(data['next_run_at'], 'Date');
      if (data.hasOwnProperty('schedule'))
        obj.schedule = Schedule.constructFromObject(data['schedule']);
      if (data.hasOwnProperty('enable_default_recipients'))
        obj.enableDefaultRecipients = ApiClient.convertToType(data['enable_default_recipients'], 'Boolean');
      if (data.hasOwnProperty('enable_custom_recipients'))
        obj.enableCustomRecipients = ApiClient.convertToType(data['enable_custom_recipients'], 'Boolean');
      if (data.hasOwnProperty('custom_recipients'))
        obj.customRecipients = ApiClient.convertToType(data['custom_recipients'], ['String']);
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ApiClient.convertToType(data['created_by'], 'Number');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('updated_by'))
        obj.updatedBy = ApiClient.convertToType(data['updated_by'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Whether to schedule the report to be triggered.
   * @member {Boolean} isEnabled
   */
  exports.prototype.isEnabled = undefined;

  /**
   * Type of the Kibana saved object the report is sourced from.
   * @member {String} savedObjectType
   */
  exports.prototype.savedObjectType = undefined;

  /**
   * @member {String} savedObjectId
   */
  exports.prototype.savedObjectId = undefined;

  /**
   * The last time the report was triggered.
   * @member {Date} lastRunAt
   */
  exports.prototype.lastRunAt = undefined;

  /**
   * The next time the report should trigger.
   * @member {Date} nextRunAt
   */
  exports.prototype.nextRunAt = undefined;

  /**
   * @member {module:model/Schedule} schedule
   */
  exports.prototype.schedule = undefined;

  /**
   * Whether to send notifications to the recipients configured in the organization's email settings
   * @member {Boolean} enableDefaultRecipients
   */
  exports.prototype.enableDefaultRecipients = undefined;

  /**
   * Whether to send notifications to the recipients configured in this Scheduled Report
   * @member {Boolean} enableCustomRecipients
   */
  exports.prototype.enableCustomRecipients = undefined;

  /**
   * One-off recipients to send notifications to, if enable_custom_recipients is True
   * @member {Array.<String>} customRecipients
   */
  exports.prototype.customRecipients = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {Number} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {Number} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  return exports;

}));
