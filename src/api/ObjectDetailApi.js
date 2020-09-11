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
    define(['ApiClient', 'model/InlineResponse2006'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2006'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.ObjectDetailApi = factory(root.PerchApi.ApiClient, root.PerchApi.InlineResponse2006);
  }
}(this, function(ApiClient, InlineResponse2006) {
  'use strict';

  /**
   * ObjectDetail service.
   * @module api/ObjectDetailApi
   * @version v1
   */

  /**
   * Constructs a new ObjectDetailApi. 
   * @alias module:api/ObjectDetailApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the objectDetailCommentsList operation.
     * @callback module:api/ObjectDetailApi~objectDetailCommentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2006} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} indicatorId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/ObjectDetailApi~objectDetailCommentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2006}
     */
    this.objectDetailCommentsList = function(indicatorId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'indicatorId' is set
      if (indicatorId === undefined || indicatorId === null) {
        throw new Error("Missing the required parameter 'indicatorId' when calling objectDetailCommentsList");
      }


      var pathParams = {
        'indicator_id': indicatorId
      };
      var queryParams = {
        'ordering': opts['ordering'],
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
      var returnType = InlineResponse2006;

      return this.apiClient.callApi(
        '/objectDetail/{indicator_id}/comments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the objectDetailHistoryList operation.
     * @callback module:api/ObjectDetailApi~objectDetailHistoryListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} indicatorId 
     * @param {module:api/ObjectDetailApi~objectDetailHistoryListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.objectDetailHistoryList = function(indicatorId, callback) {
      var postBody = null;

      // verify the required parameter 'indicatorId' is set
      if (indicatorId === undefined || indicatorId === null) {
        throw new Error("Missing the required parameter 'indicatorId' when calling objectDetailHistoryList");
      }


      var pathParams = {
        'indicator_id': indicatorId
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
        '/objectDetail/{indicator_id}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the objectDetailRead operation.
     * @callback module:api/ObjectDetailApi~objectDetailReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} indicatorId 
     * @param {module:api/ObjectDetailApi~objectDetailReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.objectDetailRead = function(indicatorId, callback) {
      var postBody = null;

      // verify the required parameter 'indicatorId' is set
      if (indicatorId === undefined || indicatorId === null) {
        throw new Error("Missing the required parameter 'indicatorId' when calling objectDetailRead");
      }


      var pathParams = {
        'indicator_id': indicatorId
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
        '/objectDetail/{indicator_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the objectDetailSightingsList operation.
     * @callback module:api/ObjectDetailApi~objectDetailSightingsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} indicatorId 
     * @param {module:api/ObjectDetailApi~objectDetailSightingsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.objectDetailSightingsList = function(indicatorId, callback) {
      var postBody = null;

      // verify the required parameter 'indicatorId' is set
      if (indicatorId === undefined || indicatorId === null) {
        throw new Error("Missing the required parameter 'indicatorId' when calling objectDetailSightingsList");
      }


      var pathParams = {
        'indicator_id': indicatorId
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
        '/objectDetail/{indicator_id}/sightings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the objectDetailSuppressionsList operation.
     * @callback module:api/ObjectDetailApi~objectDetailSuppressionsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} indicatorId 
     * @param {module:api/ObjectDetailApi~objectDetailSuppressionsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.objectDetailSuppressionsList = function(indicatorId, callback) {
      var postBody = null;

      // verify the required parameter 'indicatorId' is set
      if (indicatorId === undefined || indicatorId === null) {
        throw new Error("Missing the required parameter 'indicatorId' when calling objectDetailSuppressionsList");
      }


      var pathParams = {
        'indicator_id': indicatorId
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
        '/objectDetail/{indicator_id}/suppressions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
