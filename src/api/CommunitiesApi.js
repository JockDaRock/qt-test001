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
    define(['ApiClient', 'model/CommunityList', 'model/InlineResponse20022'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommunityList'), require('../model/InlineResponse20022'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.CommunitiesApi = factory(root.PerchApi.ApiClient, root.PerchApi.CommunityList, root.PerchApi.InlineResponse20022);
  }
}(this, function(ApiClient, CommunityList, InlineResponse20022) {
  'use strict';

  /**
   * Communities service.
   * @module api/CommunitiesApi
   * @version v1
   */

  /**
   * Constructs a new CommunitiesApi. 
   * @alias module:api/CommunitiesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the communitiesList operation.
     * @callback module:api/CommunitiesApi~communitiesListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/CommunitiesApi~communitiesListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.communitiesList = function(callback) {
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
        '/communities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the communitiesList_0 operation.
     * @callback module:api/CommunitiesApi~communitiesList_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20022} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} version 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/CommunitiesApi~communitiesList_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20022}
     */
    this.communitiesList_0 = function(version, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling communitiesList_0");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'ordering': opts['ordering'],
        'page': opts['page'],
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
      var returnType = InlineResponse20022;

      return this.apiClient.callApi(
        '/{version}/communities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the communitiesRead operation.
     * @callback module:api/CommunitiesApi~communitiesReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommunityList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {String} version 
     * @param {module:api/CommunitiesApi~communitiesReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommunityList}
     */
    this.communitiesRead = function(id, version, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling communitiesRead");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling communitiesRead");
      }


      var pathParams = {
        'id': id,
        'version': version
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
      var returnType = CommunityList;

      return this.apiClient.callApi(
        '/{version}/communities/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));