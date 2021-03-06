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
    instance = new PerchApi.CommunityApi();
  });

  describe('(package)', function() {
    describe('CommunityApi', function() {
      describe('communityFeedsCreate', function() {
        it('should call communityFeedsCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFeedsCreate call
          /*
          var communityId = "communityId_example";

          instance.communityFeedsCreate(communityId, function(error, data, response) {
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
      describe('communityFilesCommentsCreate', function() {
        it('should call communityFilesCommentsCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesCommentsCreate call and complete the assertions
          /*
          var communityId = "communityId_example";
          var fileId = "fileId_example";
          var data = new PerchApi.CommentSerializer();
          data.comment = new PerchApi.Comment();
          data.comment.text = "";
          data.comment.privateFor = 0;
          data.comment.anonymous = false;
          data.comment.visibility = 0;
          data.indicatorId = "";

          instance.communityFilesCommentsCreate(communityId, fileId, data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommentSerializer);
            expect(data.comment).to.be.a(PerchApi.Comment);
                  expect(data.comment.id).to.be.a('number');
              expect(data.comment.id).to.be(0);
              expect(data.comment.groupId).to.be.a('number');
              expect(data.comment.groupId).to.be(0);
              expect(data.comment.text).to.be.a('string');
              expect(data.comment.text).to.be("");
              expect(data.comment.privateFor).to.be.a('number');
              expect(data.comment.privateFor).to.be(0);
              expect(data.comment.anonymous).to.be.a('boolean');
              expect(data.comment.anonymous).to.be(false);
              expect(data.comment.visibility).to.be.a('number');
              expect(data.comment.visibility).to.be(0);
              expect(data.comment.createdBy).to.be.a('string');
              expect(data.comment.createdBy).to.be("");
              expect(data.comment.createdAt).to.be.a(Date);
              expect(data.comment.createdAt).to.be(new Date());
              expect(data.comment.canDelete).to.be.a('string');
              expect(data.comment.canDelete).to.be("");
            expect(data.indicatorId).to.be.a('string');
            expect(data.indicatorId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityFilesCommentsDelete', function() {
        it('should call communityFilesCommentsDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesCommentsDelete call
          /*
          var communityId = "communityId_example";
          var fileId = "fileId_example";
          var id = 56;

          instance.communityFilesCommentsDelete(communityId, fileId, id, function(error, data, response) {
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
      describe('communityFilesCommentsPartialUpdate', function() {
        it('should call communityFilesCommentsPartialUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesCommentsPartialUpdate call and complete the assertions
          /*
          var communityId = "communityId_example";
          var fileId = "fileId_example";
          var id = 56;
          var data = new PerchApi.CommentSerializer();
          data.comment = new PerchApi.Comment();
          data.comment.text = "";
          data.comment.privateFor = 0;
          data.comment.anonymous = false;
          data.comment.visibility = 0;
          data.indicatorId = "";

          instance.communityFilesCommentsPartialUpdate(communityId, fileId, id, data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommentSerializer);
            expect(data.comment).to.be.a(PerchApi.Comment);
                  expect(data.comment.id).to.be.a('number');
              expect(data.comment.id).to.be(0);
              expect(data.comment.groupId).to.be.a('number');
              expect(data.comment.groupId).to.be(0);
              expect(data.comment.text).to.be.a('string');
              expect(data.comment.text).to.be("");
              expect(data.comment.privateFor).to.be.a('number');
              expect(data.comment.privateFor).to.be(0);
              expect(data.comment.anonymous).to.be.a('boolean');
              expect(data.comment.anonymous).to.be(false);
              expect(data.comment.visibility).to.be.a('number');
              expect(data.comment.visibility).to.be(0);
              expect(data.comment.createdBy).to.be.a('string');
              expect(data.comment.createdBy).to.be("");
              expect(data.comment.createdAt).to.be.a(Date);
              expect(data.comment.createdAt).to.be(new Date());
              expect(data.comment.canDelete).to.be.a('string');
              expect(data.comment.canDelete).to.be("");
            expect(data.indicatorId).to.be.a('string');
            expect(data.indicatorId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityFilesCommentsUpdate', function() {
        it('should call communityFilesCommentsUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesCommentsUpdate call and complete the assertions
          /*
          var communityId = "communityId_example";
          var fileId = "fileId_example";
          var id = 56;
          var data = new PerchApi.CommentSerializer();
          data.comment = new PerchApi.Comment();
          data.comment.text = "";
          data.comment.privateFor = 0;
          data.comment.anonymous = false;
          data.comment.visibility = 0;
          data.indicatorId = "";

          instance.communityFilesCommentsUpdate(communityId, fileId, id, data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommentSerializer);
            expect(data.comment).to.be.a(PerchApi.Comment);
                  expect(data.comment.id).to.be.a('number');
              expect(data.comment.id).to.be(0);
              expect(data.comment.groupId).to.be.a('number');
              expect(data.comment.groupId).to.be(0);
              expect(data.comment.text).to.be.a('string');
              expect(data.comment.text).to.be("");
              expect(data.comment.privateFor).to.be.a('number');
              expect(data.comment.privateFor).to.be(0);
              expect(data.comment.anonymous).to.be.a('boolean');
              expect(data.comment.anonymous).to.be(false);
              expect(data.comment.visibility).to.be.a('number');
              expect(data.comment.visibility).to.be(0);
              expect(data.comment.createdBy).to.be.a('string');
              expect(data.comment.createdBy).to.be("");
              expect(data.comment.createdAt).to.be.a(Date);
              expect(data.comment.createdAt).to.be(new Date());
              expect(data.comment.canDelete).to.be.a('string');
              expect(data.comment.canDelete).to.be("");
            expect(data.indicatorId).to.be.a('string');
            expect(data.indicatorId).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityFilesCreate', function() {
        it('should call communityFilesCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesCreate call and complete the assertions
          /*
          var communityId = "communityId_example";
          var data = new PerchApi.CommunityFile();
          data.title = "";
          data.description = "";
          data.tlp = 0;
          data.name = "";

          instance.communityFilesCreate(communityId, data, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommunityFile);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.community).to.be.a('number');
            expect(data.community).to.be(0);
            expect(data.tlp).to.be.a('number');
            expect(data.tlp).to.be(0);
            expect(data.size).to.be.a('number');
            expect(data.size).to.be(0);
            expect(data.downloadCount).to.be.a('number');
            expect(data.downloadCount).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.contents).to.be.a('string');
            expect(data.contents).to.be("");
            expect(data.isOwned).to.be.a('string');
            expect(data.isOwned).to.be("");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.link).to.be.a('string');
            expect(data.link).to.be("");
            expect(data.comments).to.be.a('string');
            expect(data.comments).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityFilesDelete', function() {
        it('should call communityFilesDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesDelete call
          /*
          var communityId = "communityId_example";
          var id = "id_example";

          instance.communityFilesDelete(communityId, id, function(error, data, response) {
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
      describe('communityFilesDownloadList', function() {
        it('should call communityFilesDownloadList successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesDownloadList call
          /*
          var communityId = "communityId_example";
          var fileId = "fileId_example";

          instance.communityFilesDownloadList(communityId, fileId, function(error, data, response) {
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
      describe('communityFilesList', function() {
        it('should call communityFilesList successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesList call and complete the assertions
          /*
          var communityId = "communityId_example";
          var opts = {};
          opts.ordering = "ordering_example";

          instance.communityFilesList(communityId, opts, function(error, data, response) {
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
              expect(data).to.be.a(PerchApi.CommunityFile);
              expect(data.id).to.be.a('number');
              expect(data.id).to.be(0);
              expect(data.title).to.be.a('string');
              expect(data.title).to.be("");
              expect(data.description).to.be.a('string');
              expect(data.description).to.be("");
              expect(data.community).to.be.a('number');
              expect(data.community).to.be(0);
              expect(data.tlp).to.be.a('number');
              expect(data.tlp).to.be(0);
              expect(data.size).to.be.a('number');
              expect(data.size).to.be(0);
              expect(data.downloadCount).to.be.a('number');
              expect(data.downloadCount).to.be(0);
              expect(data.name).to.be.a('string');
              expect(data.name).to.be("");
              expect(data.contents).to.be.a('string');
              expect(data.contents).to.be("");
              expect(data.isOwned).to.be.a('string');
              expect(data.isOwned).to.be("");
              expect(data.created).to.be.a(Date);
              expect(data.created).to.be(new Date());
              expect(data.link).to.be.a('string');
              expect(data.link).to.be("");
              expect(data.comments).to.be.a('string');
              expect(data.comments).to.be("");
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityFilesRead', function() {
        it('should call communityFilesRead successfully', function(done) {
          // TODO: uncomment, update parameter values for communityFilesRead call and complete the assertions
          /*
          var communityId = "communityId_example";
          var id = "id_example";

          instance.communityFilesRead(communityId, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommunityFile);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.title).to.be.a('string');
            expect(data.title).to.be("");
            expect(data.description).to.be.a('string');
            expect(data.description).to.be("");
            expect(data.community).to.be.a('number');
            expect(data.community).to.be(0);
            expect(data.tlp).to.be.a('number');
            expect(data.tlp).to.be(0);
            expect(data.size).to.be.a('number');
            expect(data.size).to.be(0);
            expect(data.downloadCount).to.be.a('number');
            expect(data.downloadCount).to.be(0);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.contents).to.be.a('string');
            expect(data.contents).to.be("");
            expect(data.isOwned).to.be.a('string');
            expect(data.isOwned).to.be("");
            expect(data.created).to.be.a(Date);
            expect(data.created).to.be(new Date());
            expect(data.link).to.be.a('string');
            expect(data.link).to.be("");
            expect(data.comments).to.be.a('string');
            expect(data.comments).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communityIndicatorsList', function() {
        it('should call communityIndicatorsList successfully', function(done) {
          // TODO: uncomment, update parameter values for communityIndicatorsList call
          /*
          var communityId = "communityId_example";
          var opts = {};
          opts.ordering = "ordering_example";
          opts.p = 56;
          opts.ps = 56;

          instance.communityIndicatorsList(communityId, opts, function(error, data, response) {
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
      describe('communitySuppressionsList', function() {
        it('should call communitySuppressionsList successfully', function(done) {
          // TODO: uncomment, update parameter values for communitySuppressionsList call and complete the assertions
          /*
          var communityId = "communityId_example";
          var opts = {};
          opts.indicatorId = "indicatorId_example";
          opts.scope = "scope_example";
          opts.reason = "reason_example";
          opts.reasonDetail = "reasonDetail_example";
          opts.ordering = "ordering_example";
          opts.pageNumber = 56;
          opts.pageSize = 56;

          instance.communitySuppressionsList(communityId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.InlineResponse2001);
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
                expect(data).to.be.a(PerchApi.CommunityAlertSuppression);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.indicatorId).to.be.a('string');
                expect(data.indicatorId).to.be("");
                expect(data.observableId).to.be.a('string');
                expect(data.observableId).to.be("");
                expect(data.createdAt).to.be.a(Date);
                expect(data.createdAt).to.be(new Date());
                expect(data.observableTitle).to.be.a('string');
                expect(data.observableTitle).to.be("");
                expect(data.indicatorTitle).to.be.a('string');
                expect(data.indicatorTitle).to.be("");
                expect(data.scope).to.be.a('number');
                expect(data.scope).to.be(0);
                expect(data.reason).to.be.a('number');
                expect(data.reason).to.be(0);
                expect(data.reasonDetail).to.be.a('number');
                expect(data.reasonDetail).to.be(0);
                expect(data.indicatorCommunityIds).to.be.a('string');
                expect(data.indicatorCommunityIds).to.be("");

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('communitySuppressionsRead', function() {
        it('should call communitySuppressionsRead successfully', function(done) {
          // TODO: uncomment, update parameter values for communitySuppressionsRead call and complete the assertions
          /*
          var communityId = "communityId_example";
          var id = "id_example";

          instance.communitySuppressionsRead(communityId, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(PerchApi.CommunityAlertSuppression);
            expect(data.id).to.be.a('number');
            expect(data.id).to.be(0);
            expect(data.indicatorId).to.be.a('string');
            expect(data.indicatorId).to.be("");
            expect(data.observableId).to.be.a('string');
            expect(data.observableId).to.be("");
            expect(data.createdAt).to.be.a(Date);
            expect(data.createdAt).to.be(new Date());
            expect(data.observableTitle).to.be.a('string');
            expect(data.observableTitle).to.be("");
            expect(data.indicatorTitle).to.be.a('string');
            expect(data.indicatorTitle).to.be("");
            expect(data.scope).to.be.a('number');
            expect(data.scope).to.be(0);
            expect(data.reason).to.be.a('number');
            expect(data.reason).to.be(0);
            expect(data.reasonDetail).to.be.a('number');
            expect(data.reasonDetail).to.be(0);
            expect(data.indicatorCommunityIds).to.be.a('string');
            expect(data.indicatorCommunityIds).to.be("");

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
