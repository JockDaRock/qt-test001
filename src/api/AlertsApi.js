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
    define(['ApiClient', 'model/AlertSuppression', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AlertSuppression'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.AlertsApi = factory(root.PerchApi.ApiClient, root.PerchApi.AlertSuppression, root.PerchApi.InlineResponse200);
  }
}(this, function(ApiClient, AlertSuppression, InlineResponse200) {
  'use strict';

  /**
   * Alerts service.
   * @module api/AlertsApi
   * @version v1
   */

  /**
   * Constructs a new AlertsApi. 
   * @alias module:api/AlertsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the alertsCreate operation.
     * @callback module:api/AlertsApi~alertsCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} version 
     * @param {module:api/AlertsApi~alertsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsCreate = function(version, callback) {
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsCreate");
      }


      var pathParams = {
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsDelete operation.
     * @callback module:api/AlertsApi~alertsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} id 
     * @param {String} version 
     * @param {module:api/AlertsApi~alertsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsDelete = function(id, version, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling alertsDelete");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsDelete");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsList operation.
     * @callback module:api/AlertsApi~alertsListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} version 
     * @param {Object} opts Optional parameters
     * @param {String} opts.closed 
     * @param {String} opts.closedAt 
     * @param {String} opts.communityId 
     * @param {String} opts.createdAt 
     * @param {String} opts.destIp 
     * @param {String} opts.destPort 
     * @param {String} opts.fullUrl 
     * @param {String} opts.id 
     * @param {String} opts.indicatorId 
     * @param {String} opts.indicatorLoaded 
     * @param {String} opts.observableId 
     * @param {String} opts.protocol 
     * @param {String} opts.sensorId 
     * @param {String} opts.sensorName 
     * @param {String} opts.socStatus 
     * @param {String} opts.srcIp 
     * @param {String} opts.srcPort 
     * @param {String} opts.status 
     * @param {String} opts.statusUpdatedAt 
     * @param {String} opts.teamId 
     * @param {String} opts.title 
     * @param {String} opts.ts 
     * @param {String} opts.closedAtGte 
     * @param {String} opts.closedAtLte 
     * @param {String} opts.createdAtGte 
     * @param {String} opts.createdAtLte 
     * @param {String} opts.statusUpdatedAtGte 
     * @param {String} opts.statusUpdatedAtLte 
     * @param {String} opts.statusUpdatedAtGt 
     * @param {String} opts.statusUpdatedAtLt 
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/AlertsApi~alertsListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsList = function(version, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsList");
      }


      var pathParams = {
        'version': version
      };
      var queryParams = {
        'closed': opts['closed'],
        'closed_at': opts['closedAt'],
        'community_id': opts['communityId'],
        'created_at': opts['createdAt'],
        'dest_ip': opts['destIp'],
        'dest_port': opts['destPort'],
        'full_url': opts['fullUrl'],
        'id': opts['id'],
        'indicator_id': opts['indicatorId'],
        'indicator_loaded': opts['indicatorLoaded'],
        'observable_id': opts['observableId'],
        'protocol': opts['protocol'],
        'sensor_id': opts['sensorId'],
        'sensor_name': opts['sensorName'],
        'soc_status': opts['socStatus'],
        'src_ip': opts['srcIp'],
        'src_port': opts['srcPort'],
        'status': opts['status'],
        'status_updated_at': opts['statusUpdatedAt'],
        'team_id': opts['teamId'],
        'title': opts['title'],
        'ts': opts['ts'],
        'closed_at__gte': opts['closedAtGte'],
        'closed_at__lte': opts['closedAtLte'],
        'created_at__gte': opts['createdAtGte'],
        'created_at__lte': opts['createdAtLte'],
        'status_updated_at__gte': opts['statusUpdatedAtGte'],
        'status_updated_at__lte': opts['statusUpdatedAtLte'],
        'status_updated_at__gt': opts['statusUpdatedAtGt'],
        'status_updated_at__lt': opts['statusUpdatedAtLt'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsPartialUpdate operation.
     * @callback module:api/AlertsApi~alertsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} id 
     * @param {String} version 
     * @param {module:api/AlertsApi~alertsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsPartialUpdate = function(id, version, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling alertsPartialUpdate");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsPartialUpdate");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsRead operation.
     * @callback module:api/AlertsApi~alertsReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} id 
     * @param {String} version 
     * @param {module:api/AlertsApi~alertsReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsRead = function(id, version, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling alertsRead");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsRead");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsSuppressionsBulkCidrs operation.
     * @callback module:api/AlertsApi~alertsSuppressionsBulkCidrsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlertSuppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/AlertSuppression} data 
     * @param {module:api/AlertsApi~alertsSuppressionsBulkCidrsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlertSuppression}
     */
    this.alertsSuppressionsBulkCidrs = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsSuppressionsBulkCidrs");
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
      var returnType = AlertSuppression;

      return this.apiClient.callApi(
        '/alerts/suppressions/bulk-cidrs', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsSuppressionsCreate operation.
     * @callback module:api/AlertsApi~alertsSuppressionsCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AlertSuppression} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:model/AlertSuppression} data 
     * @param {module:api/AlertsApi~alertsSuppressionsCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AlertSuppression}
     */
    this.alertsSuppressionsCreate = function(data, callback) {
      var postBody = data;

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling alertsSuppressionsCreate");
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
      var returnType = AlertSuppression;

      return this.apiClient.callApi(
        '/alerts/suppressions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsSuppressionsDelete operation.
     * @callback module:api/AlertsApi~alertsSuppressionsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:api/AlertsApi~alertsSuppressionsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsSuppressionsDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling alertsSuppressionsDelete");
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
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/alerts/suppressions/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsSuppressionsList operation.
     * @callback module:api/AlertsApi~alertsSuppressionsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.p A page number within the paginated result set.
     * @param {Number} opts.ps Number of results to return per page.
     * @param {module:api/AlertsApi~alertsSuppressionsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    this.alertsSuppressionsList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ordering': opts['ordering'],
        'p': opts['p'],
        'ps': opts['ps'],
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/alerts/suppressions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the alertsUpdate operation.
     * @callback module:api/AlertsApi~alertsUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of alerts viewable by the user.
     * @param {String} id 
     * @param {String} version 
     * @param {module:api/AlertsApi~alertsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.alertsUpdate = function(id, version, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling alertsUpdate");
      }

      // verify the required parameter 'version' is set
      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling alertsUpdate");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/{version}/alerts/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
