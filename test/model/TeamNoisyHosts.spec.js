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
    describe('TeamNoisyHosts', function() {
      beforeEach(function() {
        instance = new PerchApi.TeamNoisyHosts();
      });

      it('should create an instance of TeamNoisyHosts', function() {
        // TODO: update the code to test TeamNoisyHosts
        expect(instance).to.be.a(PerchApi.TeamNoisyHosts);
      });

      it('should have the property host (base name: "host")', function() {
        // TODO: update the code to test the property host
        expect(instance).to.have.property('host');
        // expect(instance.host).to.be(expectedValueLiteral);
      });

      it('should have the property numOpenAlerts (base name: "num_open_alerts")', function() {
        // TODO: update the code to test the property numOpenAlerts
        expect(instance).to.have.property('numOpenAlerts');
        // expect(instance.numOpenAlerts).to.be(expectedValueLiteral);
      });

    });
  });

}));
