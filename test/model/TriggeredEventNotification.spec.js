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
    describe('TriggeredEventNotification', function() {
      beforeEach(function() {
        instance = new PerchApi.TriggeredEventNotification();
      });

      it('should create an instance of TriggeredEventNotification', function() {
        // TODO: update the code to test TriggeredEventNotification
        expect(instance).to.be.a(PerchApi.TriggeredEventNotification);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property eventNotification (base name: "event_notification")', function() {
        // TODO: update the code to test the property eventNotification
        expect(instance).to.have.property('eventNotification');
        // expect(instance.eventNotification).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorId (base name: "indicator_id")', function() {
        // TODO: update the code to test the property indicatorId
        expect(instance).to.have.property('indicatorId');
        // expect(instance.indicatorId).to.be(expectedValueLiteral);
      });

      it('should have the property representationField (base name: "representation_field")', function() {
        // TODO: update the code to test the property representationField
        expect(instance).to.have.property('representationField');
        // expect(instance.representationField).to.be(expectedValueLiteral);
      });

      it('should have the property triggeredAt (base name: "triggered_at")', function() {
        // TODO: update the code to test the property triggeredAt
        expect(instance).to.have.property('triggeredAt');
        // expect(instance.triggeredAt).to.be(expectedValueLiteral);
      });

      it('should have the property triggeredValues (base name: "triggered_values")', function() {
        // TODO: update the code to test the property triggeredValues
        expect(instance).to.have.property('triggeredValues');
        // expect(instance.triggeredValues).to.be(expectedValueLiteral);
      });

      it('should have the property wasPerchAlertCreated (base name: "was_perch_alert_created")', function() {
        // TODO: update the code to test the property wasPerchAlertCreated
        expect(instance).to.have.property('wasPerchAlertCreated');
        // expect(instance.wasPerchAlertCreated).to.be(expectedValueLiteral);
      });

      it('should have the property wasCwManageTicketCreated (base name: "was_cw_manage_ticket_created")', function() {
        // TODO: update the code to test the property wasCwManageTicketCreated
        expect(instance).to.have.property('wasCwManageTicketCreated');
        // expect(instance.wasCwManageTicketCreated).to.be(expectedValueLiteral);
      });

      it('should have the property wasEmailSent (base name: "was_email_sent")', function() {
        // TODO: update the code to test the property wasEmailSent
        expect(instance).to.have.property('wasEmailSent');
        // expect(instance.wasEmailSent).to.be(expectedValueLiteral);
      });

      it('should have the property wasFreshdeskTicketCreated (base name: "was_freshdesk_ticket_created")', function() {
        // TODO: update the code to test the property wasFreshdeskTicketCreated
        expect(instance).to.have.property('wasFreshdeskTicketCreated');
        // expect(instance.wasFreshdeskTicketCreated).to.be(expectedValueLiteral);
      });

      it('should have the property wasMsftTeamsWebhookSent (base name: "was_msft_teams_webhook_sent")', function() {
        // TODO: update the code to test the property wasMsftTeamsWebhookSent
        expect(instance).to.have.property('wasMsftTeamsWebhookSent');
        // expect(instance.wasMsftTeamsWebhookSent).to.be(expectedValueLiteral);
      });

      it('should have the property wasSlackMessageSent (base name: "was_slack_message_sent")', function() {
        // TODO: update the code to test the property wasSlackMessageSent
        expect(instance).to.have.property('wasSlackMessageSent');
        // expect(instance.wasSlackMessageSent).to.be(expectedValueLiteral);
      });

      it('should have the property wasSmsMessageSent (base name: "was_sms_message_sent")', function() {
        // TODO: update the code to test the property wasSmsMessageSent
        expect(instance).to.have.property('wasSmsMessageSent');
        // expect(instance.wasSmsMessageSent).to.be(expectedValueLiteral);
      });

    });
  });

}));