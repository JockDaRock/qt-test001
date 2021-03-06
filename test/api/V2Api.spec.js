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
    instance = new PerchApi.V2Api();
  });

  describe('(package)', function() {
    describe('V2Api', function() {
      describe('v2AlertGroupingsByCustomValueCreate', function() {
        it('should call v2AlertGroupingsByCustomValueCreate successfully', function(done) {
          // TODO: uncomment v2AlertGroupingsByCustomValueCreate call
          /*

          instance.v2AlertGroupingsByCustomValueCreate(function(error, data, response) {
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
      describe('v2AlertGroupingsByCustomValueDelete', function() {
        it('should call v2AlertGroupingsByCustomValueDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByCustomValueDelete call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByCustomValueDelete(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByCustomValueList', function() {
        it('should call v2AlertGroupingsByCustomValueList successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByCustomValueList call
          /*
          var opts = {};
          opts.ordering = "ordering_example";
          opts.pageNumber = 56;
          opts.pageSize = 56;

          instance.v2AlertGroupingsByCustomValueList(opts, function(error, data, response) {
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
      describe('v2AlertGroupingsByCustomValuePartialUpdate', function() {
        it('should call v2AlertGroupingsByCustomValuePartialUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByCustomValuePartialUpdate call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByCustomValuePartialUpdate(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByCustomValueRead', function() {
        it('should call v2AlertGroupingsByCustomValueRead successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByCustomValueRead call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByCustomValueRead(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByCustomValueUpdate', function() {
        it('should call v2AlertGroupingsByCustomValueUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByCustomValueUpdate call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByCustomValueUpdate(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsCreate', function() {
        it('should call v2AlertGroupingsByIpsCreate successfully', function(done) {
          // TODO: uncomment v2AlertGroupingsByIpsCreate call
          /*

          instance.v2AlertGroupingsByIpsCreate(function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsDelete', function() {
        it('should call v2AlertGroupingsByIpsDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByIpsDelete call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByIpsDelete(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsList', function() {
        it('should call v2AlertGroupingsByIpsList successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByIpsList call
          /*
          var opts = {};
          opts.ordering = "ordering_example";
          opts.pageNumber = 56;
          opts.pageSize = 56;

          instance.v2AlertGroupingsByIpsList(opts, function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsPartialUpdate', function() {
        it('should call v2AlertGroupingsByIpsPartialUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByIpsPartialUpdate call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByIpsPartialUpdate(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsRead', function() {
        it('should call v2AlertGroupingsByIpsRead successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByIpsRead call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByIpsRead(groupingId, function(error, data, response) {
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
      describe('v2AlertGroupingsByIpsUpdate', function() {
        it('should call v2AlertGroupingsByIpsUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertGroupingsByIpsUpdate call
          /*
          var groupingId = "groupingId_example";

          instance.v2AlertGroupingsByIpsUpdate(groupingId, function(error, data, response) {
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
      describe('v2AlertsSuppressionsBulkSuppressions', function() {
        it('should call v2AlertsSuppressionsBulkSuppressions successfully', function(done) {
          // TODO: uncomment v2AlertsSuppressionsBulkSuppressions call
          /*

          instance.v2AlertsSuppressionsBulkSuppressions(function(error, data, response) {
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
      describe('v2AlertsSuppressionsCreate', function() {
        it('should call v2AlertsSuppressionsCreate successfully', function(done) {
          // TODO: uncomment v2AlertsSuppressionsCreate call
          /*

          instance.v2AlertsSuppressionsCreate(function(error, data, response) {
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
      describe('v2AlertsSuppressionsDelete', function() {
        it('should call v2AlertsSuppressionsDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertsSuppressionsDelete call
          /*
          var id = "id_example";

          instance.v2AlertsSuppressionsDelete(id, function(error, data, response) {
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
      describe('v2AlertsSuppressionsList', function() {
        it('should call v2AlertsSuppressionsList successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertsSuppressionsList call
          /*
          var opts = {};
          opts.indicatorId = "indicatorId_example";
          opts.scope = "scope_example";
          opts.reason = "reason_example";
          opts.reasonDetail = "reasonDetail_example";
          opts.teamId = "teamId_example";
          opts.suppressedAtGte = "suppressedAtGte_example";
          opts.suppressedAtLte = "suppressedAtLte_example";
          opts.ordering = "ordering_example";
          opts.search = "search_example";
          opts.pageNumber = 56;
          opts.pageSize = 56;

          instance.v2AlertsSuppressionsList(opts, function(error, data, response) {
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
      describe('v2AlertsSuppressionsRead', function() {
        it('should call v2AlertsSuppressionsRead successfully', function(done) {
          // TODO: uncomment, update parameter values for v2AlertsSuppressionsRead call
          /*
          var id = "id_example";

          instance.v2AlertsSuppressionsRead(id, function(error, data, response) {
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
      describe('v2RegisterDeviceCreate', function() {
        it('should call v2RegisterDeviceCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RegisterDeviceCreate call and complete the assertions
          /*
          var data = new PerchApi.RegisterDevice();
          data.nickname = "";
          data.lastName = "";
          data.deviceCode = "";
          data.address1 = "";
          data.address2 = "";
          data.city = "";
          data.state = "";
          data.postalCode = "";
          data.phone = "";
          data.geohash = "";
          data.autoConfirm = false;

          instance.v2RegisterDeviceCreate(data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.RegisterDevice);
            expect(data.nickname).to.be.a('string');
            expect(data.nickname).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.deviceCode).to.be.a('string');
            expect(data.deviceCode).to.be("");
            expect(data.address1).to.be.a('string');
            expect(data.address1).to.be("");
            expect(data.address2).to.be.a('string');
            expect(data.address2).to.be("");
            expect(data.city).to.be.a('string');
            expect(data.city).to.be("");
            expect(data.state).to.be.a('string');
            expect(data.state).to.be("");
            expect(data.postalCode).to.be.a('string');
            expect(data.postalCode).to.be("");
            expect(data.phone).to.be.a('string');
            expect(data.phone).to.be("");
            expect(data.geohash).to.be.a('string');
            expect(data.geohash).to.be("");
            expect(data.autoConfirm).to.be.a('boolean');
            expect(data.autoConfirm).to.be(false);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2RegisterUserCreate', function() {
        it('should call v2RegisterUserCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RegisterUserCreate call and complete the assertions
          /*
          var data = new PerchApi.RegisterUser();
          data.email = "";
          data.password = "";
          data.firstName = "";
          data.lastName = "";
          data.inviteCode = "";

          instance.v2RegisterUserCreate(data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.RegisterUser);
            expect(data.username).to.be.a('string');
            expect(data.username).to.be("");
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("");
            expect(data.email).to.be.a('string');
            expect(data.email).to.be("");
            expect(data.password).to.be.a('string');
            expect(data.password).to.be("");
            expect(data.firstName).to.be.a('string');
            expect(data.firstName).to.be("");
            expect(data.lastName).to.be.a('string');
            expect(data.lastName).to.be("");
            expect(data.inviteCode).to.be.a('string');
            expect(data.inviteCode).to.be("");

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
