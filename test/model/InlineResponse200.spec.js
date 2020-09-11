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
    describe('InlineResponse200', function() {
      beforeEach(function() {
        instance = new PerchApi.InlineResponse200();
      });

      it('should create an instance of InlineResponse200', function() {
        // TODO: update the code to test InlineResponse200
        expect(instance).to.be.a(PerchApi.InlineResponse200);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property next (base name: "next")', function() {
        // TODO: update the code to test the property next
        expect(instance).to.have.property('next');
        // expect(instance.next).to.be(expectedValueLiteral);
      });

      it('should have the property previous (base name: "previous")', function() {
        // TODO: update the code to test the property previous
        expect(instance).to.have.property('previous');
        // expect(instance.previous).to.be(expectedValueLiteral);
      });

      it('should have the property results (base name: "results")', function() {
        // TODO: update the code to test the property results
        expect(instance).to.have.property('results');
        // expect(instance.results).to.be(expectedValueLiteral);
      });

    });
  });

}));
