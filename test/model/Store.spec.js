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
    describe('Store', function() {
      beforeEach(function() {
        instance = new PerchApi.Store();
      });

      it('should create an instance of Store', function() {
        // TODO: update the code to test Store
        expect(instance).to.be.a(PerchApi.Store);
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

      it('should have the property team (base name: "team")', function() {
        // TODO: update the code to test the property team
        expect(instance).to.have.property('team');
        // expect(instance.team).to.be(expectedValueLiteral);
      });

      it('should have the property teamId (base name: "team_id")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property visibleFor (base name: "visible_for")', function() {
        // TODO: update the code to test the property visibleFor
        expect(instance).to.have.property('visibleFor');
        // expect(instance.visibleFor).to.be(expectedValueLiteral);
      });

      it('should have the property itemCount (base name: "item_count")', function() {
        // TODO: update the code to test the property itemCount
        expect(instance).to.have.property('itemCount');
        // expect(instance.itemCount).to.be(expectedValueLiteral);
      });

      it('should have the property totalInstallCount (base name: "total_install_count")', function() {
        // TODO: update the code to test the property totalInstallCount
        expect(instance).to.have.property('totalInstallCount');
        // expect(instance.totalInstallCount).to.be(expectedValueLiteral);
      });

      it('should have the property collectionId (base name: "collection_id")', function() {
        // TODO: update the code to test the property collectionId
        expect(instance).to.have.property('collectionId');
        // expect(instance.collectionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
