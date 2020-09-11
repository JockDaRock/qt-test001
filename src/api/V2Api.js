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
    define(['ApiClient', 'model/RegisterDevice', 'model/RegisterUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RegisterDevice'), require('../model/RegisterUser'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.V2Api = factory(root.PerchApi.ApiClient, root.PerchApi.RegisterDevice, root.PerchApi.RegisterUser);
  }
}(this, function(ApiClient, RegisterDevice, RegisterUser) {
  'use strict';

  /**
   * V2 service.
   * @module api/V2Api
   * @version v1
   */

  /**
   * Constructs a new V2Api. 
   * @alias module:api/V2Api
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValueCreate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValueCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValueCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValueCreate = function(callback) {
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
        '/v2/alert-groupings-by-custom-value', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValueDelete operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValueDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValueDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValueDelete = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByCustomValueDelete");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-custom-value/{grouping_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValueList operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValueListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValueListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValueList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alert-groupings-by-custom-value', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValuePartialUpdate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValuePartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValuePartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValuePartialUpdate = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByCustomValuePartialUpdate");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-custom-value/{grouping_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValueRead operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValueReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValueReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValueRead = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByCustomValueRead");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-custom-value/{grouping_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByCustomValueUpdate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByCustomValueUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByCustomValueUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByCustomValueUpdate = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByCustomValueUpdate");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-custom-value/{grouping_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsCreate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/V2Api~v2AlertGroupingsByIpsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsCreate = function(callback) {
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
        '/v2/alert-groupings-by-ips', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsDelete operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByIpsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsDelete = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByIpsDelete");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-ips/{grouping_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsList operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/V2Api~v2AlertGroupingsByIpsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alert-groupings-by-ips', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsPartialUpdate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByIpsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsPartialUpdate = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByIpsPartialUpdate");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-ips/{grouping_id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsRead operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByIpsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsRead = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByIpsRead");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-ips/{grouping_id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertGroupingsByIpsUpdate operation.
     * @callback module:api/V2Api~v2AlertGroupingsByIpsUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} groupingId 
     * @param {module:api/V2Api~v2AlertGroupingsByIpsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertGroupingsByIpsUpdate = function(groupingId, callback) {
      var postBody = null;

      // verify the required parameter 'groupingId' is set
      if (groupingId === undefined || groupingId === null) {
        throw new Error("Missing the required parameter 'groupingId' when calling v2AlertGroupingsByIpsUpdate");
      }


      var pathParams = {
        'grouping_id': groupingId
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
        '/v2/alert-groupings-by-ips/{grouping_id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertsSuppressionsBulkSuppressions operation.
     * @callback module:api/V2Api~v2AlertsSuppressionsBulkSuppressionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/V2Api~v2AlertsSuppressionsBulkSuppressionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertsSuppressionsBulkSuppressions = function(callback) {
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
      var accepts = ['application/json', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alerts/suppressions/bulk-suppressions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertsSuppressionsCreate operation.
     * @callback module:api/V2Api~v2AlertsSuppressionsCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/V2Api~v2AlertsSuppressionsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertsSuppressionsCreate = function(callback) {
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
      var accepts = ['application/json', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alerts/suppressions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertsSuppressionsDelete operation.
     * @callback module:api/V2Api~v2AlertsSuppressionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/V2Api~v2AlertsSuppressionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertsSuppressionsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2AlertsSuppressionsDelete");
      }


      var pathParams = {
        'id': id
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
      var accepts = ['application/json', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alerts/suppressions/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertsSuppressionsList operation.
     * @callback module:api/V2Api~v2AlertsSuppressionsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.indicatorId 
     * @param {String} opts.scope 
     * @param {String} opts.reason 
     * @param {String} opts.reasonDetail 
     * @param {String} opts.teamId 
     * @param {String} opts.suppressedAtGte 
     * @param {String} opts.suppressedAtLte 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {String} opts.search A search term.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/V2Api~v2AlertsSuppressionsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertsSuppressionsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'indicator_id': opts['indicatorId'],
        'scope': opts['scope'],
        'reason': opts['reason'],
        'reason_detail': opts['reasonDetail'],
        'team_id': opts['teamId'],
        'suppressed_at__gte': opts['suppressedAtGte'],
        'suppressed_at__lte': opts['suppressedAtLte'],
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
      var accepts = ['application/json', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alerts/suppressions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2AlertsSuppressionsRead operation.
     * @callback module:api/V2Api~v2AlertsSuppressionsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/V2Api~v2AlertsSuppressionsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.v2AlertsSuppressionsRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2AlertsSuppressionsRead");
      }


      var pathParams = {
        'id': id
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
      var accepts = ['application/json', 'text/csv'];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/alerts/suppressions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2RegisterDeviceCreate operation.
     * @callback module:api/V2Api~v2RegisterDeviceCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterDevice} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/RegisterDevice} data 
     * @param {module:api/V2Api~v2RegisterDeviceCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegisterDevice}
     */
    this.v2RegisterDeviceCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling v2RegisterDeviceCreate");
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
      var returnType = RegisterDevice;

      return this.apiClient.callApi(
        '/v2/register-device', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v2RegisterUserCreate operation.
     * @callback module:api/V2Api~v2RegisterUserCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RegisterUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/RegisterUser} data 
     * @param {module:api/V2Api~v2RegisterUserCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RegisterUser}
     */
    this.v2RegisterUserCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling v2RegisterUserCreate");
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
      var returnType = RegisterUser;

      return this.apiClient.callApi(
        '/v2/register_user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));