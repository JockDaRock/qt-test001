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
    describe('ScheduledReport', function() {
      beforeEach(function() {
        instance = new PerchApi.ScheduledReport();
      });

      it('should create an instance of ScheduledReport', function() {
        // TODO: update the code to test ScheduledReport
        expect(instance).to.be.a(PerchApi.ScheduledReport);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property isEnabled (base name: "is_enabled")', function() {
        // TODO: update the code to test the property isEnabled
        expect(instance).to.have.property('isEnabled');
        // expect(instance.isEnabled).to.be(expectedValueLiteral);
      });

      it('should have the property savedObjectType (base name: "saved_object_type")', function() {
        // TODO: update the code to test the property savedObjectType
        expect(instance).to.have.property('savedObjectType');
        // expect(instance.savedObjectType).to.be(expectedValueLiteral);
      });

      it('should have the property savedObjectId (base name: "saved_object_id")', function() {
        // TODO: update the code to test the property savedObjectId
        expect(instance).to.have.property('savedObjectId');
        // expect(instance.savedObjectId).to.be(expectedValueLiteral);
      });

      it('should have the property lastRunAt (base name: "last_run_at")', function() {
        // TODO: update the code to test the property lastRunAt
        expect(instance).to.have.property('lastRunAt');
        // expect(instance.lastRunAt).to.be(expectedValueLiteral);
      });

      it('should have the property nextRunAt (base name: "next_run_at")', function() {
        // TODO: update the code to test the property nextRunAt
        expect(instance).to.have.property('nextRunAt');
        // expect(instance.nextRunAt).to.be(expectedValueLiteral);
      });

      it('should have the property schedule (base name: "schedule")', function() {
        // TODO: update the code to test the property schedule
        expect(instance).to.have.property('schedule');
        // expect(instance.schedule).to.be(expectedValueLiteral);
      });

      it('should have the property enableDefaultRecipients (base name: "enable_default_recipients")', function() {
        // TODO: update the code to test the property enableDefaultRecipients
        expect(instance).to.have.property('enableDefaultRecipients');
        // expect(instance.enableDefaultRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property enableCustomRecipients (base name: "enable_custom_recipients")', function() {
        // TODO: update the code to test the property enableCustomRecipients
        expect(instance).to.have.property('enableCustomRecipients');
        // expect(instance.enableCustomRecipients).to.be(expectedValueLiteral);
      });

      it('should have the property customRecipients (base name: "custom_recipients")', function() {
        // TODO: update the code to test the property customRecipients
        expect(instance).to.have.property('customRecipients');
        // expect(instance.customRecipients).to.be(expectedValueLiteral);
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

    });
  });

}));
