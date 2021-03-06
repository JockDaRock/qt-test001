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

  beforeEach(function() {
    instance = new PerchApi.SecurityEventsApi();
  });

  describe('(package)', function() {
    describe('SecurityEventsApi', function() {
      describe('securityEventsList', function() {
        it('should call securityEventsList successfully', function(done) {
          // TODO: uncomment, update parameter values for securityEventsList call and complete the assertions
          /*
          var opts = {};
          opts.ordering = "ordering_example";

          instance.securityEventsList(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(PerchApi.ApiSecurityEventStatusSerializer);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.indicatorId).to.be.a('string');
              expect(data.indicatorId).to.be("");
              expect(data.createdAt).to.be.a(Date);
              expect(data.createdAt).to.be(new Date());
              expect(data.status).to.be.a('number');
              expect(data.status).to.be(0);
              expect(data.closedAt).to.be.a(Date);
              expect(data.closedAt).to.be(new Date());
              expect(data.slaExpiresAt).to.be.a(Date);
              expect(data.slaExpiresAt).to.be(new Date());
              expect(data.slaRespondedAt).to.be.a(Date);
              expect(data.slaRespondedAt).to.be(new Date());
              expect(data.closedReason).to.be.a('number');
              expect(data.closedReason).to.be(0);
              expect(data.closedReasonDetail).to.be.a('number');
              expect(data.closedReasonDetail).to.be(0);
              expect(data.closedNotes).to.be.a('string');
              expect(data.closedNotes).to.be("");
              expect(data.team).to.be.a('number');
              expect(data.team).to.be(0);
              expect(data.suppressedBy).to.be.a('number');
              expect(data.suppressedBy).to.be(0);
              expect(data.slaResponder).to.be.a('number');
              expect(data.slaResponder).to.be(0);
              expect(data.sla).to.be.a('number');
              expect(data.sla).to.be(0);
              expect(data.closedBy).to.be.a('number');
              expect(data.closedBy).to.be(0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('securityEventsRead', function() {
        it('should call securityEventsRead successfully', function(done) {
          // TODO: uncomment, update parameter values for securityEventsRead call and complete the assertions
          /*
          var id = "id_example";

          instance.securityEventsRead(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.ApiSecurityEventStatusSerializer);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.indicatorId).to.be.a('string');
            expect(data.indicatorId).to.be("");
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.status).to.be.a('number');
            expect(data.status).to.be(0);
            expect(data.closedAt).to.be.a(Date);
            expect(data.closedAt).to.be(new Date());
            expect(data.slaExpiresAt).to.be.a(Date);
            expect(data.slaExpiresAt).to.be(new Date());
            expect(data.slaRespondedAt).to.be.a(Date);
            expect(data.slaRespondedAt).to.be(new Date());
            expect(data.closedReason).to.be.a('number');
            expect(data.closedReason).to.be(0);
            expect(data.closedReasonDetail).to.be.a('number');
            expect(data.closedReasonDetail).to.be(0);
            expect(data.closedNotes).to.be.a('string');
            expect(data.closedNotes).to.be("");
            expect(data.team).to.be.a('number');
            expect(data.team).to.be(0);
            expect(data.suppressedBy).to.be.a('number');
            expect(data.suppressedBy).to.be(0);
            expect(data.slaResponder).to.be.a('number');
            expect(data.slaResponder).to.be(0);
            expect(data.sla).to.be.a('number');
            expect(data.sla).to.be(0);
            expect(data.closedBy).to.be.a('number');
            expect(data.closedBy).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
