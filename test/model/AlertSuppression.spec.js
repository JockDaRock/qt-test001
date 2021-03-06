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
    describe('AlertSuppression', function() {
      beforeEach(function() {
        instance = new PerchApi.AlertSuppression();
      });

      it('should create an instance of AlertSuppression', function() {
        // TODO: update the code to test AlertSuppression
        expect(instance).to.be.a(PerchApi.AlertSuppression);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property teamId (base name: "teamId")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property userFullName (base name: "userFullName")', function() {
        // TODO: update the code to test the property userFullName
        expect(instance).to.have.property('userFullName');
        // expect(instance.userFullName).to.be(expectedValueLiteral);
      });

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property reasonDetail (base name: "reasonDetail")', function() {
        // TODO: update the code to test the property reasonDetail
        expect(instance).to.have.property('reasonDetail');
        // expect(instance.reasonDetail).to.be(expectedValueLiteral);
      });

      it('should have the property observableTitle (base name: "observableTitle")', function() {
        // TODO: update the code to test the property observableTitle
        expect(instance).to.have.property('observableTitle');
        // expect(instance.observableTitle).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorId (base name: "indicatorId")', function() {
        // TODO: update the code to test the property indicatorId
        expect(instance).to.have.property('indicatorId');
        // expect(instance.indicatorId).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorTitle (base name: "indicatorTitle")', function() {
        // TODO: update the code to test the property indicatorTitle
        expect(instance).to.have.property('indicatorTitle');
        // expect(instance.indicatorTitle).to.be(expectedValueLiteral);
      });

      it('should have the property observableId (base name: "observableId")', function() {
        // TODO: update the code to test the property observableId
        expect(instance).to.have.property('observableId');
        // expect(instance.observableId).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property suppressUntil (base name: "suppressUntil")', function() {
        // TODO: update the code to test the property suppressUntil
        expect(instance).to.have.property('suppressUntil');
        // expect(instance.suppressUntil).to.be(expectedValueLiteral);
      });

      it('should have the property duration (base name: "duration")', function() {
        // TODO: update the code to test the property duration
        expect(instance).to.have.property('duration');
        // expect(instance.duration).to.be(expectedValueLiteral);
      });

      it('should have the property reason (base name: "reason")', function() {
        // TODO: update the code to test the property reason
        expect(instance).to.have.property('reason');
        // expect(instance.reason).to.be(expectedValueLiteral);
      });

      it('should have the property notes (base name: "notes")', function() {
        // TODO: update the code to test the property notes
        expect(instance).to.have.property('notes');
        // expect(instance.notes).to.be(expectedValueLiteral);
      });

      it('should have the property sendEmail (base name: "sendEmail")', function() {
        // TODO: update the code to test the property sendEmail
        expect(instance).to.have.property('sendEmail');
        // expect(instance.sendEmail).to.be(expectedValueLiteral);
      });

      it('should have the property hits (base name: "hits")', function() {
        // TODO: update the code to test the property hits
        expect(instance).to.have.property('hits');
        // expect(instance.hits).to.be(expectedValueLiteral);
      });

      it('should have the property latestHit (base name: "latestHit")', function() {
        // TODO: update the code to test the property latestHit
        expect(instance).to.have.property('latestHit');
        // expect(instance.latestHit).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

      it('should have the property community (base name: "community")', function() {
        // TODO: update the code to test the property community
        expect(instance).to.have.property('community');
        // expect(instance.community).to.be(expectedValueLiteral);
      });

      it('should have the property cidr (base name: "cidr")', function() {
        // TODO: update the code to test the property cidr
        expect(instance).to.have.property('cidr');
        // expect(instance.cidr).to.be(expectedValueLiteral);
      });

      it('should have the property suppressedAlertIds (base name: "suppressedAlertIds")', function() {
        // TODO: update the code to test the property suppressedAlertIds
        expect(instance).to.have.property('suppressedAlertIds');
        // expect(instance.suppressedAlertIds).to.be(expectedValueLiteral);
      });

      it('should have the property latestAlert (base name: "latestAlert")', function() {
        // TODO: update the code to test the property latestAlert
        expect(instance).to.have.property('latestAlert');
        // expect(instance.latestAlert).to.be(expectedValueLiteral);
      });

      it('should have the property cwAutomateScripts (base name: "cwAutomateScripts")', function() {
        // TODO: update the code to test the property cwAutomateScripts
        expect(instance).to.have.property('cwAutomateScripts');
        // expect(instance.cwAutomateScripts).to.be(expectedValueLiteral);
      });

    });
  });

}));
