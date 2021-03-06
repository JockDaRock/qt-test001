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
    instance = new PerchApi.IntegrationsApi();
  });

  describe('(package)', function() {
    describe('IntegrationsApi', function() {
      describe('integrationsLatest', function() {
        it('should call integrationsLatest successfully', function(done) {
          // TODO: uncomment, update parameter values for integrationsLatest call and complete the assertions
          /*
          var opts = {};
          opts.search = "search_example";
          opts.ordering = "ordering_example";
          opts.id = 8.14;
          opts.teamId = "teamId_example";
          opts.service = "service_example";
          opts.pageNumber = 56;
          opts.pageSize = 56;

          instance.integrationsLatest(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.InlineResponse2002);
            expect(data.count).to.be.a('number');
            expect(data.count).to.be(0);
            expect(data.next).to.be.a('string');
            expect(data.next).to.be("");
            expect(data.previous).to.be.a('string');
            expect(data.previous).to.be("");
            {
              let dataCtr = data.results;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PerchApi.TeamIntegrationLogEventWithTeam);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.timestamp).to.be.a(Date);
                expect(data.timestamp).to.be(new Date());
                expect(data.event).to.be.a('string');
                expect(data.event).to.be("");
                expect(data.wasSuccessful).to.be.a('boolean');
                expect(data.wasSuccessful).to.be(false);
                expect(data.payload).to.be.a('string');
                expect(data.payload).to.be("");
                expect(data.teamId).to.be.a('string');
                expect(data.teamId).to.be("");
                expect(data.teamName).to.be.a('string');
                expect(data.teamName).to.be("");
                expect(data.integrationId).to.be.a('string');
                expect(data.integrationId).to.be("");
                expect(data.service).to.be.a('string');
                expect(data.service).to.be("");

                      }
            }

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
