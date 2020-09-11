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
    describe('IndicatorComment', function() {
      beforeEach(function() {
        instance = new PerchApi.IndicatorComment();
      });

      it('should create an instance of IndicatorComment', function() {
        // TODO: update the code to test IndicatorComment
        expect(instance).to.be.a(PerchApi.IndicatorComment);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property groupId (base name: "groupId")', function() {
        // TODO: update the code to test the property groupId
        expect(instance).to.have.property('groupId');
        // expect(instance.groupId).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property privateFor (base name: "privateFor")', function() {
        // TODO: update the code to test the property privateFor
        expect(instance).to.have.property('privateFor');
        // expect(instance.privateFor).to.be(expectedValueLiteral);
      });

      it('should have the property anonymous (base name: "anonymous")', function() {
        // TODO: update the code to test the property anonymous
        expect(instance).to.have.property('anonymous');
        // expect(instance.anonymous).to.be(expectedValueLiteral);
      });

      it('should have the property visibility (base name: "visibility")', function() {
        // TODO: update the code to test the property visibility
        expect(instance).to.have.property('visibility');
        // expect(instance.visibility).to.be(expectedValueLiteral);
      });

      it('should have the property createdBy (base name: "createdBy")', function() {
        // TODO: update the code to test the property createdBy
        expect(instance).to.have.property('createdBy');
        // expect(instance.createdBy).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property canDelete (base name: "canDelete")', function() {
        // TODO: update the code to test the property canDelete
        expect(instance).to.have.property('canDelete');
        // expect(instance.canDelete).to.be(expectedValueLiteral);
      });

      it('should have the property indicatorId (base name: "indicatorId")', function() {
        // TODO: update the code to test the property indicatorId
        expect(instance).to.have.property('indicatorId');
        // expect(instance.indicatorId).to.be(expectedValueLiteral);
      });

    });
  });

}));
