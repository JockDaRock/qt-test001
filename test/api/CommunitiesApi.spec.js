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
    instance = new PerchApi.CommunitiesApi();
  });

  describe('(package)', function() {
    describe('CommunitiesApi', function() {
      describe('communitiesList', function() {
        it('should call communitiesList successfully', function(done) {
          // TODO: uncomment communitiesList call
          /*

          instance.communitiesList(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communitiesList_0', function() {
        it('should call communitiesList_0 successfully', function(done) {
          // TODO: uncomment, update parameter values for communitiesList_0 call and complete the assertions
          /*
          var version = "version_example";
          var opts = {};
          opts.ordering = "ordering_example";
          opts.page = 56;
          opts.pageSize = 56;

          instance.communitiesList_0(version, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.InlineResponse20022);
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
                expect(data).to.be.a(PerchApi.CommunityList);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.desc).to.be.a('string');
                expect(data.desc).to.be("");
                expect(data.poweredBy).to.be.a('string');
                expect(data.poweredBy).to.be("");
                expect(data.allSectors).to.be.a('boolean');
                expect(data.allSectors).to.be(false);
                expect(data.sectors).to.be.a('string');
                expect(data.sectors).to.be("");
                expect(data.credentialReq).to.be.a('number');
                expect(data.credentialReq).to.be(0);
                expect(data.selectableFeeds).to.be.a('boolean');
                expect(data.selectableFeeds).to.be(false);

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communitiesRead', function() {
        it('should call communitiesRead successfully', function(done) {
          // TODO: uncomment, update parameter values for communitiesRead call and complete the assertions
          /*
          var id = "id_example";
          var version = "version_example";

          instance.communitiesRead(id, version, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommunityList);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.desc).to.be.a('string');
            expect(data.desc).to.be("");
            expect(data.poweredBy).to.be.a('string');
            expect(data.poweredBy).to.be("");
            expect(data.allSectors).to.be.a('boolean');
            expect(data.allSectors).to.be(false);
            expect(data.sectors).to.be.a('string');
            expect(data.sectors).to.be("");
            expect(data.credentialReq).to.be.a('number');
            expect(data.credentialReq).to.be(0);
            expect(data.selectableFeeds).to.be.a('boolean');
            expect(data.selectableFeeds).to.be(false);

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
