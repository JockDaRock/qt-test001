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
    describe('Attribution', function() {
      beforeEach(function() {
        instance = new PerchApi.Attribution();
      });

      it('should create an instance of Attribution', function() {
        // TODO: update the code to test Attribution
        expect(instance).to.be.a(PerchApi.Attribution);
      });

      it('should have the property anonPrivateIp (base name: "anonPrivateIp")', function() {
        // TODO: update the code to test the property anonPrivateIp
        expect(instance).to.have.property('anonPrivateIp');
        // expect(instance.anonPrivateIp).to.be(expectedValueLiteral);
      });

      it('should have the property anonIndustry (base name: "anonIndustry")', function() {
        // TODO: update the code to test the property anonIndustry
        expect(instance).to.have.property('anonIndustry');
        // expect(instance.anonIndustry).to.be(expectedValueLiteral);
      });

      it('should have the property anonGeolocation (base name: "anonGeolocation")', function() {
        // TODO: update the code to test the property anonGeolocation
        expect(instance).to.have.property('anonGeolocation');
        // expect(instance.anonGeolocation).to.be(expectedValueLiteral);
      });

      it('should have the property anonName (base name: "anonName")', function() {
        // TODO: update the code to test the property anonName
        expect(instance).to.have.property('anonName');
        // expect(instance.anonName).to.be(expectedValueLiteral);
      });

      it('should have the property shareSightings (base name: "shareSightings")', function() {
        // TODO: update the code to test the property shareSightings
        expect(instance).to.have.property('shareSightings');
        // expect(instance.shareSightings).to.be(expectedValueLiteral);
      });

    });
  });

}));