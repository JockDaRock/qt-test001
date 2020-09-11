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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AboutMe', 'model/InlineResponse2004', 'model/JoinTeam', 'model/UserTeamList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AboutMe'), require('../model/InlineResponse2004'), require('../model/JoinTeam'), require('../model/UserTeamList'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.UserApi = factory(root.PerchApi.ApiClient, root.PerchApi.AboutMe, root.PerchApi.InlineResponse2004, root.PerchApi.JoinTeam, root.PerchApi.UserTeamList);
  }
}(this, function(ApiClient, AboutMe, InlineResponse2004, JoinTeam, UserTeamList) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version v1
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the userCompanyCreate operation.
     * @callback module:api/UserApi~userCompanyCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JoinTeam} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/JoinTeam} data 
     * @param {module:api/UserApi~userCompanyCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JoinTeam}
     */
    this.userCompanyCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling userCompanyCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = JoinTeam;

      return this.apiClient.callApi(
        '/user/company', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCompanyDelete operation.
     * @callback module:api/UserApi~userCompanyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} team 
     * @param {module:api/UserApi~userCompanyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userCompanyDelete = function(team, callback) {
      var postBody = null;

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling userCompanyDelete");
      }


      var pathParams = {
        'team': team
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/company/{team}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCompanyList operation.
     * @callback module:api/UserApi~userCompanyListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserTeamList>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {module:api/UserApi~userCompanyListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserTeamList>}
     */
    this.userCompanyList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ordering': opts['ordering'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [UserTeamList];

      return this.apiClient.callApi(
        '/user/company', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userCompanyRead operation.
     * @callback module:api/UserApi~userCompanyReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTeamList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} team 
     * @param {module:api/UserApi~userCompanyReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserTeamList}
     */
    this.userCompanyRead = function(team, callback) {
      var postBody = null;

      // verify the required parameter 'team' is set
      if (team === undefined || team === null) {
        throw new Error("Missing the required parameter 'team' when calling userCompanyRead");
      }


      var pathParams = {
        'team': team
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserTeamList;

      return this.apiClient.callApi(
        '/user/company/{team}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userIndicatorsList operation.
     * @callback module:api/UserApi~userIndicatorsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userIndicatorsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userIndicatorsList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/indicators', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userLoginsList operation.
     * @callback module:api/UserApi~userLoginsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {String} opts.search A search term.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/UserApi~userLoginsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.userLoginsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ordering': opts['ordering'],
        'search': opts['search'],
        'page_number': opts['pageNumber'],
        'page_size': opts['pageSize'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/user/logins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userMePartialUpdate operation.
     * @callback module:api/UserApi~userMePartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AboutMe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/AboutMe} data 
     * @param {module:api/UserApi~userMePartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AboutMe}
     */
    this.userMePartialUpdate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling userMePartialUpdate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AboutMe;

      return this.apiClient.callApi(
        '/user/me', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userMeRead operation.
     * @callback module:api/UserApi~userMeReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AboutMe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userMeReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AboutMe}
     */
    this.userMeRead = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AboutMe;

      return this.apiClient.callApi(
        '/user/me', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userMeSensorList operation.
     * @callback module:api/UserApi~userMeSensorListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userMeSensorListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userMeSensorList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/me/sensor', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPartialUpdate operation.
     * @callback module:api/UserApi~userPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AboutMe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The AboutMeViewSet already handles this same behavior, but is hardwired to only handle the current user. This view extends that, adds a permission, and slightly adjusts it to work with a passed user id.
     * @param {String} userId 
     * @param {module:model/AboutMe} data 
     * @param {module:api/UserApi~userPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AboutMe}
     */
    this.userPartialUpdate = function(userId, data, callback) {
      var postBody = data;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling userPartialUpdate");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AboutMe;

      return this.apiClient.callApi(
        '/user/{user_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPasswordChangeUpdate operation.
     * @callback module:api/UserApi~userPasswordChangeUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userPasswordChangeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userPasswordChangeUpdate = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/password/change', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPasswordForgotCreate operation.
     * @callback module:api/UserApi~userPasswordForgotCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userPasswordForgotCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userPasswordForgotCreate = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/password/forgot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userPasswordResetUpdate operation.
     * @callback module:api/UserApi~userPasswordResetUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userPasswordResetUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userPasswordResetUpdate = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/password/reset', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userRead operation.
     * @callback module:api/UserApi~userReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AboutMe} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * The AboutMeViewSet already handles this same behavior, but is hardwired to only handle the current user. This view extends that, adds a permission, and slightly adjusts it to work with a passed user id.
     * @param {String} userId 
     * @param {module:api/UserApi~userReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AboutMe}
     */
    this.userRead = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userRead");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AboutMe;

      return this.apiClient.callApi(
        '/user/{user_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userSensorsList operation.
     * @callback module:api/UserApi~userSensorsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userSensorsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userSensorsList = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/sensors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the userTourUpdate operation.
     * @callback module:api/UserApi~userTourUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/UserApi~userTourUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.userTourUpdate = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/user/tour', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));