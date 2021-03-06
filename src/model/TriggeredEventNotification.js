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
    define(['ApiClient', 'model/TriggeredEventNotificationSerializer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TriggeredEventNotificationSerializer'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.TriggeredEventNotification = factory(root.PerchApi.ApiClient, root.PerchApi.TriggeredEventNotificationSerializer);
  }
}(this, function(ApiClient, TriggeredEventNotificationSerializer) {
  'use strict';

  /**
   * The TriggeredEventNotification model module.
   * @module model/TriggeredEventNotification
   * @version v1
   */

  /**
   * Constructs a new <code>TriggeredEventNotification</code>.
   * @alias module:model/TriggeredEventNotification
   * @class
   * @param eventNotification {module:model/TriggeredEventNotificationSerializer} 
   */
  var exports = function(eventNotification) {
    this.eventNotification = eventNotification;
  };

  /**
   * Constructs a <code>TriggeredEventNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TriggeredEventNotification} obj Optional instance to populate.
   * @return {module:model/TriggeredEventNotification} The populated <code>TriggeredEventNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('event_notification'))
        obj.eventNotification = TriggeredEventNotificationSerializer.constructFromObject(data['event_notification']);
      if (data.hasOwnProperty('indicator_id'))
        obj.indicatorId = ApiClient.convertToType(data['indicator_id'], 'String');
      if (data.hasOwnProperty('representation_field'))
        obj.representationField = ApiClient.convertToType(data['representation_field'], 'String');
      if (data.hasOwnProperty('triggered_at'))
        obj.triggeredAt = ApiClient.convertToType(data['triggered_at'], 'Date');
      if (data.hasOwnProperty('triggered_values'))
        obj.triggeredValues = ApiClient.convertToType(data['triggered_values'], Object);
      if (data.hasOwnProperty('was_perch_alert_created'))
        obj.wasPerchAlertCreated = ApiClient.convertToType(data['was_perch_alert_created'], 'Boolean');
      if (data.hasOwnProperty('was_cw_manage_ticket_created'))
        obj.wasCwManageTicketCreated = ApiClient.convertToType(data['was_cw_manage_ticket_created'], 'Boolean');
      if (data.hasOwnProperty('was_email_sent'))
        obj.wasEmailSent = ApiClient.convertToType(data['was_email_sent'], 'Boolean');
      if (data.hasOwnProperty('was_freshdesk_ticket_created'))
        obj.wasFreshdeskTicketCreated = ApiClient.convertToType(data['was_freshdesk_ticket_created'], 'Boolean');
      if (data.hasOwnProperty('was_msft_teams_webhook_sent'))
        obj.wasMsftTeamsWebhookSent = ApiClient.convertToType(data['was_msft_teams_webhook_sent'], 'Boolean');
      if (data.hasOwnProperty('was_slack_message_sent'))
        obj.wasSlackMessageSent = ApiClient.convertToType(data['was_slack_message_sent'], 'Boolean');
      if (data.hasOwnProperty('was_sms_message_sent'))
        obj.wasSmsMessageSent = ApiClient.convertToType(data['was_sms_message_sent'], 'Boolean');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/TriggeredEventNotificationSerializer} eventNotification
   */
  exports.prototype.eventNotification = undefined;

  /**
   * The Indicator ID used for the SecurityEvent created
   * @member {String} indicatorId
   */
  exports.prototype.indicatorId = undefined;

  /**
   * @member {String} representationField
   */
  exports.prototype.representationField = undefined;

  /**
   * When this trigger event occurred
   * @member {Date} triggeredAt
   */
  exports.prototype.triggeredAt = undefined;

  /**
   * The distinct values found by this trigger event
   * @member {Object} triggeredValues
   */
  exports.prototype.triggeredValues = undefined;

  /**
   * Whether or not an alert was created.
   * @member {Boolean} wasPerchAlertCreated
   */
  exports.prototype.wasPerchAlertCreated = undefined;

  /**
   * Whether or not a CW Manage ticket was created
   * @member {Boolean} wasCwManageTicketCreated
   */
  exports.prototype.wasCwManageTicketCreated = undefined;

  /**
   * Whether or not an email was sent
   * @member {Boolean} wasEmailSent
   */
  exports.prototype.wasEmailSent = undefined;

  /**
   * Whether or not a FreshDesk ticket was created
   * @member {Boolean} wasFreshdeskTicketCreated
   */
  exports.prototype.wasFreshdeskTicketCreated = undefined;

  /**
   * Whether or not a MSFT Teams webhook was sent
   * @member {Boolean} wasMsftTeamsWebhookSent
   */
  exports.prototype.wasMsftTeamsWebhookSent = undefined;

  /**
   * Whether or not a message was sent to Slack
   * @member {Boolean} wasSlackMessageSent
   */
  exports.prototype.wasSlackMessageSent = undefined;

  /**
   * Whether or not a SMS message was sent
   * @member {Boolean} wasSmsMessageSent
   */
  exports.prototype.wasSmsMessageSent = undefined;

  return exports;

}));
