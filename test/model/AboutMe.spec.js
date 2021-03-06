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
    describe('AboutMe', function() {
      beforeEach(function() {
        instance = new PerchApi.AboutMe();
      });

      it('should create an instance of AboutMe', function() {
        // TODO: update the code to test AboutMe
        expect(instance).to.be.a(PerchApi.AboutMe);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property prefs (base name: "prefs")', function() {
        // TODO: update the code to test the property prefs
        expect(instance).to.have.property('prefs');
        // expect(instance.prefs).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "firstName")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "lastName")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property address1 (base name: "address1")', function() {
        // TODO: update the code to test the property address1
        expect(instance).to.have.property('address1');
        // expect(instance.address1).to.be(expectedValueLiteral);
      });

      it('should have the property address2 (base name: "address2")', function() {
        // TODO: update the code to test the property address2
        expect(instance).to.have.property('address2');
        // expect(instance.address2).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property postalCode (base name: "postalCode")', function() {
        // TODO: update the code to test the property postalCode
        expect(instance).to.have.property('postalCode');
        // expect(instance.postalCode).to.be(expectedValueLiteral);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property staff (base name: "staff")', function() {
        // TODO: update the code to test the property staff
        expect(instance).to.have.property('staff');
        // expect(instance.staff).to.be(expectedValueLiteral);
      });

      it('should have the property isMsspMember (base name: "is_mssp_member")', function() {
        // TODO: update the code to test the property isMsspMember
        expect(instance).to.have.property('isMsspMember');
        // expect(instance.isMsspMember).to.be(expectedValueLiteral);
      });

      it('should have the property company (base name: "company")', function() {
        // TODO: update the code to test the property company
        expect(instance).to.have.property('company');
        // expect(instance.company).to.be(expectedValueLiteral);
      });

      it('should have the property community (base name: "community")', function() {
        // TODO: update the code to test the property community
        expect(instance).to.have.property('community');
        // expect(instance.community).to.be(expectedValueLiteral);
      });

      it('should have the property tours (base name: "tours")', function() {
        // TODO: update the code to test the property tours
        expect(instance).to.have.property('tours');
        // expect(instance.tours).to.be(expectedValueLiteral);
      });

    });
  });

}));
