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
    describe('TeamHealth', function() {
      beforeEach(function() {
        instance = new PerchApi.TeamHealth();
      });

      it('should create an instance of TeamHealth', function() {
        // TODO: update the code to test TeamHealth
        expect(instance).to.be.a(PerchApi.TeamHealth);
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

      it('should have the property alerts (base name: "alerts")', function() {
        // TODO: update the code to test the property alerts
        expect(instance).to.have.property('alerts');
        // expect(instance.alerts).to.be(expectedValueLiteral);
      });

      it('should have the property alertsDelta (base name: "alerts_delta")', function() {
        // TODO: update the code to test the property alertsDelta
        expect(instance).to.have.property('alertsDelta');
        // expect(instance.alertsDelta).to.be(expectedValueLiteral);
      });

      it('should have the property escalations (base name: "escalations")', function() {
        // TODO: update the code to test the property escalations
        expect(instance).to.have.property('escalations');
        // expect(instance.escalations).to.be(expectedValueLiteral);
      });

      it('should have the property escalationsDelta (base name: "escalations_delta")', function() {
        // TODO: update the code to test the property escalationsDelta
        expect(instance).to.have.property('escalationsDelta');
        // expect(instance.escalationsDelta).to.be(expectedValueLiteral);
      });

      it('should have the property lastLogin (base name: "last_login")', function() {
        // TODO: update the code to test the property lastLogin
        expect(instance).to.have.property('lastLogin');
        // expect(instance.lastLogin).to.be(expectedValueLiteral);
      });

      it('should have the property lastEscalation (base name: "last_escalation")', function() {
        // TODO: update the code to test the property lastEscalation
        expect(instance).to.have.property('lastEscalation');
        // expect(instance.lastEscalation).to.be(expectedValueLiteral);
      });

      it('should have the property warnings (base name: "warnings")', function() {
        // TODO: update the code to test the property warnings
        expect(instance).to.have.property('warnings');
        // expect(instance.warnings).to.be(expectedValueLiteral);
      });

    });
  });

}));