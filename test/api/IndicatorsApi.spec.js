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
    instance = new PerchApi.IndicatorsApi();
  });

  describe('(package)', function() {
    describe('IndicatorsApi', function() {
      describe('indicatorsCreate', function() {
        it('should call indicatorsCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for indicatorsCreate call and complete the assertions
          /*
          var version = "version_example";
          var data = new PerchApi.PublicIndicatorSerializer();
          data.communities = [new PerchApi.PublicCommunitySerializer()];
          data.communities[0].id = 0;
          data.observables = [new PerchApi.PublicObservableSerializer()];
          data.observables[0].type = 0;
          data.observables[0].details = ;
          data.title = "";
          data.description = "";
          data.tlp = 0;
          data.confidence = 0;
          data.operator = 0;
          data.firstSighting = new Date();
          data.emailSummary = false;

          instance.indicatorsCreate(version, data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.PublicIndicatorSerializer);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            {
              let dataCtr = data.communities;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PerchApi.PublicCommunitySerializer);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");

                      }
            }
            expect(data.createdBy).to.be.a('number');
            expect(data.createdBy).to.be(0);
            {
              let dataCtr = data.observables;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(PerchApi.PublicObservableSerializer);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.observableId).to.be.a('string');
                expect(data.observableId).to.be("");
                expect(data.type).to.be.a('number');
                expect(data.type).to.be(0);
                expect(data.details).to.be.a(Object);
                expect(data.details).to.be();

                      }
            }
            expect(data.perchId).to.be.a('string');
            expect(data.perchId).to.be("""00000000-0000-0000-0000-000000000000");
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.tlp).to.be.a('number');
            expect(data.tlp).to.be(0);
            expect(data.confidence).to.be.a('number');
            expect(data.confidence).to.be(0);
            expect(data.operator).to.be.a('number');
            expect(data.operator).to.be(0);
            expect(data.firstSighting).to.be.a(Date);
            expect(data.firstSighting).to.be(new Date());
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.updatedAt).to.be.a(Date);
            expect(data.updatedAt).to.be(new Date());
            expect(data.emailSummary).to.be.a('boolean');
            expect(data.emailSummary).to.be(false);
            expect(data.team).to.be.a('number');
            expect(data.team).to.be(0);

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