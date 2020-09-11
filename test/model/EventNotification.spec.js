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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PerchApi);
  }
}(this, function(expect, PerchApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('EventNotification', function() {
      beforeEach(function() {
        instance = new PerchApi.EventNotification();
      });

      it('should create an instance of EventNotification', function() {
        // TODO: update the code to test EventNotification
        expect(instance).to.be.a(PerchApi.EventNotification);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationField (base name: "aggregation_field")', function() {
        // TODO: update the code to test the property aggregationField
        expect(instance).to.have.property('aggregationField');
        // expect(instance.aggregationField).to.be(expectedValueLiteral);
      });

      it('should have the property aggregationType (base name: "aggregation_type")', function() {
        // TODO: update the code to test the property aggregationType
        expect(instance).to.have.property('aggregationType');
        // expect(instance.aggregationType).to.be(expectedValueLiteral);
      });

      it('should have the property comparisonField (base name: "comparison_field")', function() {
        // TODO: update the code to test the property comparisonField
        expect(instance).to.have.property('comparisonField');
        // expect(instance.comparisonField).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "created_by")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property createdByTeam (base name: "created_by_team")', function() {
        // TODO: update the code to test the property createdByTeam
        expect(instance).to.have.property('createdByTeam');
        // expect(instance.createdByTeam).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property emailActionCustomRecipients (base name: "email_action_custom_recipients")', function() {
        // TODO: update the code to test the property emailActionCustomRecipients
        expect(instance).to.have.property('emailActionCustomRecipients');
        // expect(instance.emailActionCustomRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property enableCwManageActionDefault (base name: "enable_cw_manage_action_default")', function() {
        // TODO: update the code to test the property enableCwManageActionDefault
        expect(instance).to.have.property('enableCwManageActionDefault');
        // expect(instance.enableCwManageActionDefault).to.be(expectedValueLiteral);
      });

      it('should have the property enableEmailActionDefaultRecipients (base name: "enable_email_action_default_recipients")', function() {
        // TODO: update the code to test the property enableEmailActionDefaultRecipients
        expect(instance).to.have.property('enableEmailActionDefaultRecipients');
        // expect(instance.enableEmailActionDefaultRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property enableEmailActionCustomRecipients (base name: "enable_email_action_custom_recipients")', function() {
        // TODO: update the code to test the property enableEmailActionCustomRecipients
        expect(instance).to.have.property('enableEmailActionCustomRecipients');
        // expect(instance.enableEmailActionCustomRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property enableFreshdeskActionDefaultTicketType (base name: "enable_freshdesk_action_default_ticket_type")', function() {
        // TODO: update the code to test the property enableFreshdeskActionDefaultTicketType
        expect(instance).to.have.property('enableFreshdeskActionDefaultTicketType');
        // expect(instance.enableFreshdeskActionDefaultTicketType).to.be(expectedValueLiteral);
      });

      it('should have the property enableFreshdeskActionCustomTicketType (base name: "enable_freshdesk_action_custom_ticket_type")', function() {
        // TODO: update the code to test the property enableFreshdeskActionCustomTicketType
        expect(instance).to.have.property('enableFreshdeskActionCustomTicketType');
        // expect(instance.enableFreshdeskActionCustomTicketType).to.be(expectedValueLiteral);
      });

      it('should have the property enableMsftTeamsActionDefaultWebhookUrl (base name: "enable_msft_teams_action_default_webhook_url")', function() {
        // TODO: update the code to test the property enableMsftTeamsActionDefaultWebhookUrl
        expect(instance).to.have.property('enableMsftTeamsActionDefaultWebhookUrl');
        // expect(instance.enableMsftTeamsActionDefaultWebhookUrl).to.be(expectedValueLiteral);
      });

      it('should have the property enableMsftTeamsActionCustomWebhookUrl (base name: "enable_msft_teams_action_custom_webhook_url")', function() {
        // TODO: update the code to test the property enableMsftTeamsActionCustomWebhookUrl
        expect(instance).to.have.property('enableMsftTeamsActionCustomWebhookUrl');
        // expect(instance.enableMsftTeamsActionCustomWebhookUrl).to.be(expectedValueLiteral);
      });

      it('should have the property enableSlackActionDefaultChannel (base name: "enable_slack_action_default_channel")', function() {
        // TODO: update the code to test the property enableSlackActionDefaultChannel
        expect(instance).to.have.property('enableSlackActionDefaultChannel');
        // expect(instance.enableSlackActionDefaultChannel).to.be(expectedValueLiteral);
      });

      it('should have the property enableSlackActionCustomChannel (base name: "enable_slack_action_custom_channel")', function() {
        // TODO: update the code to test the property enableSlackActionCustomChannel
        expect(instance).to.have.property('enableSlackActionCustomChannel');
        // expect(instance.enableSlackActionCustomChannel).to.be(expectedValueLiteral);
      });

      it('should have the property enableSmsActionDefaultRecipients (base name: "enable_sms_action_default_recipients")', function() {
        // TODO: update the code to test the property enableSmsActionDefaultRecipients
        expect(instance).to.have.property('enableSmsActionDefaultRecipients');
        // expect(instance.enableSmsActionDefaultRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property enableSmsActionCustomRecipients (base name: "enable_sms_action_custom_recipients")', function() {
        // TODO: update the code to test the property enableSmsActionCustomRecipients
        expect(instance).to.have.property('enableSmsActionCustomRecipients');
        // expect(instance.enableSmsActionCustomRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property freshdeskActionCustomTicketType (base name: "freshdesk_action_custom_ticket_type")', function() {
        // TODO: update the code to test the property freshdeskActionCustomTicketType
        expect(instance).to.have.property('freshdeskActionCustomTicketType');
        // expect(instance.freshdeskActionCustomTicketType).to.be(expectedValueLiteral);
      });

      it('should have the property indexMapping (base name: "index_mapping")', function() {
        // TODO: update the code to test the property indexMapping
        expect(instance).to.have.property('indexMapping');
        // expect(instance.indexMapping).to.be(expectedValueLiteral);
      });

      it('should have the property isEnabled (base name: "is_enabled")', function() {
        // TODO: update the code to test the property isEnabled
        expect(instance).to.have.property('isEnabled');
        // expect(instance.isEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property isLocked (base name: "is_locked")', function() {
        // TODO: update the code to test the property isLocked
        expect(instance).to.have.property('isLocked');
        // expect(instance.isLocked).to.be(expectedValueLiteral);
      });

      it('should have the property fieldsForDisplay (base name: "fields_for_display")', function() {
        // TODO: update the code to test the property fieldsForDisplay
        expect(instance).to.have.property('fieldsForDisplay');
        // expect(instance.fieldsForDisplay).to.be(expectedValueLiteral);
      });

      it('should have the property keywordFilter (base name: "keyword_filter")', function() {
        // TODO: update the code to test the property keywordFilter
        expect(instance).to.have.property('keywordFilter');
        // expect(instance.keywordFilter).to.be(expectedValueLiteral);
      });

      it('should have the property kibanaQuery (base name: "kibana_query")', function() {
        // TODO: update the code to test the property kibanaQuery
        expect(instance).to.have.property('kibanaQuery');
        // expect(instance.kibanaQuery).to.be(expectedValueLiteral);
      });

      it('should have the property lastTriggeredAt (base name: "last_triggered_at")', function() {
        // TODO: update the code to test the property lastTriggeredAt
        expect(instance).to.have.property('lastTriggeredAt');
        // expect(instance.lastTriggeredAt).to.be(expectedValueLiteral);
      });

      it('should have the property marketplaceSourceCollection (base name: "marketplace_source_collection")', function() {
        // TODO: update the code to test the property marketplaceSourceCollection
        expect(instance).to.have.property('marketplaceSourceCollection');
        // expect(instance.marketplaceSourceCollection).to.be(expectedValueLiteral);
      });

      it('should have the property mitreAttackTactic (base name: "mitre_attack_tactic")', function() {
        // TODO: update the code to test the property mitreAttackTactic
        expect(instance).to.have.property('mitreAttackTactic');
        // expect(instance.mitreAttackTactic).to.be(expectedValueLiteral);
      });

      it('should have the property msearchQuery (base name: "msearch_query")', function() {
        // TODO: update the code to test the property msearchQuery
        expect(instance).to.have.property('msearchQuery');
        // expect(instance.msearchQuery).to.be(expectedValueLiteral);
      });

      it('should have the property msftTeamsActionCustomWebhookUrl (base name: "msft_teams_action_custom_webhook_url")', function() {
        // TODO: update the code to test the property msftTeamsActionCustomWebhookUrl
        expect(instance).to.have.property('msftTeamsActionCustomWebhookUrl');
        // expect(instance.msftTeamsActionCustomWebhookUrl).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property perchAlertEnabled (base name: "perch_alert_enabled")', function() {
        // TODO: update the code to test the property perchAlertEnabled
        expect(instance).to.have.property('perchAlertEnabled');
        // expect(instance.perchAlertEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property prevTimeWindow (base name: "prev_time_window")', function() {
        // TODO: update the code to test the property prevTimeWindow
        expect(instance).to.have.property('prevTimeWindow');
        // expect(instance.prevTimeWindow).to.be(expectedValueLiteral);
      });

      it('should have the property queryFilter (base name: "query_filter")', function() {
        // TODO: update the code to test the property queryFilter
        expect(instance).to.have.property('queryFilter');
        // expect(instance.queryFilter).to.be(expectedValueLiteral);
      });

      it('should have the property representationField (base name: "representation_field")', function() {
        // TODO: update the code to test the property representationField
        expect(instance).to.have.property('representationField');
        // expect(instance.representationField).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

      it('should have the property severity (base name: "severity")', function() {
        // TODO: update the code to test the property severity
        expect(instance).to.have.property('severity');
        // expect(instance.severity).to.be(expectedValueLiteral);
      });

      it('should have the property slackActionCustomChannel (base name: "slack_action_custom_channel")', function() {
        // TODO: update the code to test the property slackActionCustomChannel
        expect(instance).to.have.property('slackActionCustomChannel');
        // expect(instance.slackActionCustomChannel).to.be(expectedValueLiteral);
      });

      it('should have the property smsActionCustomRecipients (base name: "sms_action_custom_recipients")', function() {
        // TODO: update the code to test the property smsActionCustomRecipients
        expect(instance).to.have.property('smsActionCustomRecipients');
        // expect(instance.smsActionCustomRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property spikePercentage (base name: "spike_percentage")', function() {
        // TODO: update the code to test the property spikePercentage
        expect(instance).to.have.property('spikePercentage');
        // expect(instance.spikePercentage).to.be(expectedValueLiteral);
      });

      it('should have the property thresholdCount (base name: "threshold_count")', function() {
        // TODO: update the code to test the property thresholdCount
        expect(instance).to.have.property('thresholdCount');
        // expect(instance.thresholdCount).to.be(expectedValueLiteral);
      });

      it('should have the property throttlePeriod (base name: "throttle_period")', function() {
        // TODO: update the code to test the property throttlePeriod
        expect(instance).to.have.property('throttlePeriod');
        // expect(instance.throttlePeriod).to.be(expectedValueLiteral);
      });

      it('should have the property timeField (base name: "time_field")', function() {
        // TODO: update the code to test the property timeField
        expect(instance).to.have.property('timeField');
        // expect(instance.timeField).to.be(expectedValueLiteral);
      });

      it('should have the property timeWindow (base name: "time_window")', function() {
        // TODO: update the code to test the property timeWindow
        expect(instance).to.have.property('timeWindow');
        // expect(instance.timeWindow).to.be(expectedValueLiteral);
      });

      it('should have the property triggerCondition (base name: "trigger_condition")', function() {
        // TODO: update the code to test the property triggerCondition
        expect(instance).to.have.property('triggerCondition');
        // expect(instance.triggerCondition).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updated_at")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property updatedBy (base name: "updated_by")', function() {
        // TODO: update the code to test the property updatedBy
        expect(instance).to.have.property('updatedBy');
        // expect(instance.updatedBy).to.be(expectedValueLiteral);
      });

      it('should have the property watchError (base name: "watch_error")', function() {
        // TODO: update the code to test the property watchError
        expect(instance).to.have.property('watchError');
        // expect(instance.watchError).to.be(expectedValueLiteral);
      });

    });
  });

}));