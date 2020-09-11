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
    describe('TeamIntegrationLogEventWithTeam', function() {
      beforeEach(function() {
        instance = new PerchApi.TeamIntegrationLogEventWithTeam();
      });

      it('should create an instance of TeamIntegrationLogEventWithTeam', function() {
        // TODO: update the code to test TeamIntegrationLogEventWithTeam
        expect(instance).to.be.a(PerchApi.TeamIntegrationLogEventWithTeam);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property timestamp (base name: "timestamp")', function() {
        // TODO: update the code to test the property timestamp
        expect(instance).to.have.property('timestamp');
        // expect(instance.timestamp).to.be(expectedValueLiteral);
      });

      it('should have the property event (base name: "event")', function() {
        // TODO: update the code to test the property event
        expect(instance).to.have.property('event');
        // expect(instance.event).to.be(expectedValueLiteral);
      });

      it('should have the property wasSuccessful (base name: "was_successful")', function() {
        // TODO: update the code to test the property wasSuccessful
        expect(instance).to.have.property('wasSuccessful');
        // expect(instance.wasSuccessful).to.be(expectedValueLiteral);
      });

      it('should have the property payload (base name: "payload")', function() {
        // TODO: update the code to test the property payload
        expect(instance).to.have.property('payload');
        // expect(instance.payload).to.be(expectedValueLiteral);
      });

      it('should have the property teamId (base name: "team_id")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property teamName (base name: "team_name")', function() {
        // TODO: update the code to test the property teamName
        expect(instance).to.have.property('teamName');
        // expect(instance.teamName).to.be(expectedValueLiteral);
      });

      it('should have the property integrationId (base name: "integration_id")', function() {
        // TODO: update the code to test the property integrationId
        expect(instance).to.have.property('integrationId');
        // expect(instance.integrationId).to.be(expectedValueLiteral);
      });

      it('should have the property service (base name: "service")', function() {
        // TODO: update the code to test the property service
        expect(instance).to.have.property('service');
        // expect(instance.service).to.be(expectedValueLiteral);
      });

    });
  });

}));
