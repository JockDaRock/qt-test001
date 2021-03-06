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
    define(['ApiClient', 'model/Blacklist', 'model/InlineResponse20011', 'model/SensorCommand', 'model/SensorCommandResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Blacklist'), require('../model/InlineResponse20011'), require('../model/SensorCommand'), require('../model/SensorCommandResult'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.SensorApi = factory(root.PerchApi.ApiClient, root.PerchApi.Blacklist, root.PerchApi.InlineResponse20011, root.PerchApi.SensorCommand, root.PerchApi.SensorCommandResult);
  }
}(this, function(ApiClient, Blacklist, InlineResponse20011, SensorCommand, SensorCommandResult) {
  'use strict';

  /**
   * Sensor service.
   * @module api/SensorApi
   * @version v1
   */

  /**
   * Constructs a new SensorApi. 
   * @alias module:api/SensorApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the sensorCommandCreate operation.
     * @callback module:api/SensorApi~sensorCommandCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensorCommand} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} sensorId 
     * @param {module:model/SensorCommand} data 
     * @param {module:api/SensorApi~sensorCommandCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SensorCommand}
     */
    this.sensorCommandCreate = function(sensorId, data, callback) {
      var postBody = data;

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling sensorCommandCreate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorCommandCreate");
      }


      var pathParams = {
        'sensor_id': sensorId
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
      var returnType = SensorCommand;

      return this.apiClient.callApi(
        '/sensor/{sensor_id}/command', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorCommandResultsPartialUpdate operation.
     * @callback module:api/SensorApi~sensorCommandResultsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensorCommandResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:model/SensorCommandResult} data 
     * @param {module:api/SensorApi~sensorCommandResultsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SensorCommandResult}
     */
    this.sensorCommandResultsPartialUpdate = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorCommandResultsPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorCommandResultsPartialUpdate");
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
      var returnType = SensorCommandResult;

      return this.apiClient.callApi(
        '/sensor/command/results/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorCommandResultsUpdate operation.
     * @callback module:api/SensorApi~sensorCommandResultsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SensorCommandResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} id 
     * @param {module:model/SensorCommandResult} data 
     * @param {module:api/SensorApi~sensorCommandResultsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SensorCommandResult}
     */
    this.sensorCommandResultsUpdate = function(id, data, callback) {
      var postBody = data;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorCommandResultsUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorCommandResultsUpdate");
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
      var returnType = SensorCommandResult;

      return this.apiClient.callApi(
        '/sensor/command/results/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFilesDownloadList operation.
     * @callback module:api/SensorApi~sensorFilesDownloadListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} fileAlias 
     * @param {module:api/SensorApi~sensorFilesDownloadListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorFilesDownloadList = function(fileAlias, callback) {
      var postBody = null;

      // verify the required parameter 'fileAlias' is set
      if (fileAlias === undefined || fileAlias === null) {
        throw new Error("Missing the required parameter 'fileAlias' when calling sensorFilesDownloadList");
      }


      var pathParams = {
        'file_alias': fileAlias
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
        '/sensor/files/{file_alias}/download', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFilesDownloadList_0 operation.
     * @callback module:api/SensorApi~sensorFilesDownloadList_0Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} fileAlias 
     * @param {String} sensorId 
     * @param {module:api/SensorApi~sensorFilesDownloadList_0Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorFilesDownloadList_0 = function(fileAlias, sensorId, callback) {
      var postBody = null;

      // verify the required parameter 'fileAlias' is set
      if (fileAlias === undefined || fileAlias === null) {
        throw new Error("Missing the required parameter 'fileAlias' when calling sensorFilesDownloadList_0");
      }

      // verify the required parameter 'sensorId' is set
      if (sensorId === undefined || sensorId === null) {
        throw new Error("Missing the required parameter 'sensorId' when calling sensorFilesDownloadList_0");
      }


      var pathParams = {
        'file_alias': fileAlias,
        'sensor_id': sensorId
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
        '/sensor/{sensor_id}/files/{file_alias}/download', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFilesHashList operation.
     * @callback module:api/SensorApi~sensorFilesHashListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/SensorApi~sensorFilesHashListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorFilesHashList = function(callback) {
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
        '/sensor/files/hash', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistCreate operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Blacklist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {module:model/Blacklist} data 
     * @param {module:api/SensorApi~sensorFirewallBlacklistCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Blacklist}
     */
    this.sensorFirewallBlacklistCreate = function(companyId, data, callback) {
      var postBody = data;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistCreate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorFirewallBlacklistCreate");
      }


      var pathParams = {
        'company_id': companyId
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
      var returnType = Blacklist;

      return this.apiClient.callApi(
        '/sensor/{company_id}/firewall/blacklist', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistDelete operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {String} id 
     * @param {module:api/SensorApi~sensorFirewallBlacklistDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorFirewallBlacklistDelete = function(companyId, id, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistDelete");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorFirewallBlacklistDelete");
      }


      var pathParams = {
        'company_id': companyId,
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
        '/sensor/{company_id}/firewall/blacklist/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistList operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20011} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.search A search term.
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {Number} opts.pageNumber A page number within the paginated result set.
     * @param {Number} opts.pageSize Number of results to return per page.
     * @param {module:api/SensorApi~sensorFirewallBlacklistListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20011}
     */
    this.sensorFirewallBlacklistList = function(companyId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistList");
      }


      var pathParams = {
        'company_id': companyId
      };
      var queryParams = {
        'search': opts['search'],
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
      var returnType = InlineResponse20011;

      return this.apiClient.callApi(
        '/sensor/{company_id}/firewall/blacklist', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistPartialUpdate operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Blacklist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {String} id 
     * @param {module:model/Blacklist} data 
     * @param {module:api/SensorApi~sensorFirewallBlacklistPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Blacklist}
     */
    this.sensorFirewallBlacklistPartialUpdate = function(companyId, id, data, callback) {
      var postBody = data;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistPartialUpdate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorFirewallBlacklistPartialUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorFirewallBlacklistPartialUpdate");
      }


      var pathParams = {
        'company_id': companyId,
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
      var returnType = Blacklist;

      return this.apiClient.callApi(
        '/sensor/{company_id}/firewall/blacklist/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistRead operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Blacklist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {String} id 
     * @param {module:api/SensorApi~sensorFirewallBlacklistReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Blacklist}
     */
    this.sensorFirewallBlacklistRead = function(companyId, id, callback) {
      var postBody = null;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistRead");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorFirewallBlacklistRead");
      }


      var pathParams = {
        'company_id': companyId,
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
      var returnType = Blacklist;

      return this.apiClient.callApi(
        '/sensor/{company_id}/firewall/blacklist/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorFirewallBlacklistUpdate operation.
     * @callback module:api/SensorApi~sensorFirewallBlacklistUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Blacklist} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {String} companyId 
     * @param {String} id 
     * @param {module:model/Blacklist} data 
     * @param {module:api/SensorApi~sensorFirewallBlacklistUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Blacklist}
     */
    this.sensorFirewallBlacklistUpdate = function(companyId, id, data, callback) {
      var postBody = data;

      // verify the required parameter 'companyId' is set
      if (companyId === undefined || companyId === null) {
        throw new Error("Missing the required parameter 'companyId' when calling sensorFirewallBlacklistUpdate");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling sensorFirewallBlacklistUpdate");
      }

      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling sensorFirewallBlacklistUpdate");
      }


      var pathParams = {
        'company_id': companyId,
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
      var returnType = Blacklist;

      return this.apiClient.callApi(
        '/sensor/{company_id}/firewall/blacklist/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorHealthMeCreate operation.
     * @callback module:api/SensorApi~sensorHealthMeCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/SensorApi~sensorHealthMeCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorHealthMeCreate = function(callback) {
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
        '/sensor/health/me', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorImagesDirectList operation.
     * @callback module:api/SensorApi~sensorImagesDirectListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/SensorApi~sensorImagesDirectListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorImagesDirectList = function(callback) {
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
        '/sensor/images/direct', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorImagesHashList operation.
     * @callback module:api/SensorApi~sensorImagesHashListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/SensorApi~sensorImagesHashListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorImagesHashList = function(callback) {
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
        '/sensor/images/hash', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorMogaList operation.
     * @callback module:api/SensorApi~sensorMogaListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search indicators and sensor network trafic.
     * Example response: <pre class=\"highlight javascript\" data-language=\"javascript\"> {     \"indicators\": [         {             \"id\": \"EmergingThreats:Indicator-2807118\",             \"title\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"tlp\": null,             \"description\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"company\": 35,             \"community\": 10,             \"timestamp\": \"2017-08-08T04:27:06.350975\"         },         {             \"id\": \"opensource:indicator-401c6845-92f7-4401-b71e-fc9913ac3ed3\",             \"title\": \"phishTank.com id:4666368 with malicious URL:http://adwcrds-google.com/...\",             \"tlp\": \"WHITE\",             \"description\": \"This URL:[http://adwcrds-google.com/] was identified by phishtank.com as part of a phishing email. This URL appears to still be online as of 2017-01-15T22:44:53+00:00. More detailed infomation can be found at http://www.phishtank.com/phish_detail.php?phish_id=4666368\",             \"company\": null,             \"community\": 1,             \"timestamp\": \"2017-01-15T22:44:53+00:00\"         }     ],     \"community_indicator_counts\": {         \"1\": 17,         \"10\": 1     },     \"tlp_indicator_counts\": {         \"WHITE\": 17,         \"GREEN\": 0,         \"AMBER\": 0,         \"RED\": 0,         \"null\": 1     },     \"activities_per_day\": {         \"10/28\": 0,         \"10/29\": 0,         \"10/30\": 0,         \"10/31\": 0,         \"11/1\": 0,         \"11/2\": 0,         \"11/3\": 0,         \"11/4\": 0,         \"11/5\": 0,         \"11/6\": 0,         \"11/7\": 0,         \"11/8\": 0     },     \"activities_per_community\": {         \"1\": 20,         \"5\": 20,         \"6\": 20,         \"8\": 2163     },     \"activities_per_industry\": {},     \"activities_per_company_size\": {         \"0\": 0,         \"1 to 5\": 0,         \"6 to 10\": 0,         \"11 to 25\": 0,         \"25 to 50\": 0,         \"50 to 75\": 0,         \"75 to 100\": 0,         \"More than 100\": 0,         \"Decline to specify\": 20     } } </pre>
     * @param {module:api/SensorApi~sensorMogaListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorMogaList = function(callback) {
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
        '/sensor/moga', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorMogaRead operation.
     * @callback module:api/SensorApi~sensorMogaReadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search indicators and sensor network trafic.
     * Example response: <pre class=\"highlight javascript\" data-language=\"javascript\"> {     \"indicators\": [         {             \"id\": \"EmergingThreats:Indicator-2807118\",             \"title\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"tlp\": null,             \"description\": \"ETPRO POLICY SSL server Hello certificate Default Company Ltd CN=google.com\",             \"company\": 35,             \"community\": 10,             \"timestamp\": \"2017-08-08T04:27:06.350975\"         },         {             \"id\": \"opensource:indicator-401c6845-92f7-4401-b71e-fc9913ac3ed3\",             \"title\": \"phishTank.com id:4666368 with malicious URL:http://adwcrds-google.com/...\",             \"tlp\": \"WHITE\",             \"description\": \"This URL:[http://adwcrds-google.com/] was identified by phishtank.com as part of a phishing email. This URL appears to still be online as of 2017-01-15T22:44:53+00:00. More detailed infomation can be found at http://www.phishtank.com/phish_detail.php?phish_id=4666368\",             \"company\": null,             \"community\": 1,             \"timestamp\": \"2017-01-15T22:44:53+00:00\"         }     ],     \"community_indicator_counts\": {         \"1\": 17,         \"10\": 1     },     \"tlp_indicator_counts\": {         \"WHITE\": 17,         \"GREEN\": 0,         \"AMBER\": 0,         \"RED\": 0,         \"null\": 1     },     \"activities_per_day\": {         \"10/28\": 0,         \"10/29\": 0,         \"10/30\": 0,         \"10/31\": 0,         \"11/1\": 0,         \"11/2\": 0,         \"11/3\": 0,         \"11/4\": 0,         \"11/5\": 0,         \"11/6\": 0,         \"11/7\": 0,         \"11/8\": 0     },     \"activities_per_community\": {         \"1\": 20,         \"5\": 20,         \"6\": 20,         \"8\": 2163     },     \"activities_per_industry\": {},     \"activities_per_company_size\": {         \"0\": 0,         \"1 to 5\": 0,         \"6 to 10\": 0,         \"11 to 25\": 0,         \"25 to 50\": 0,         \"50 to 75\": 0,         \"75 to 100\": 0,         \"More than 100\": 0,         \"Decline to specify\": 20     } } </pre>
     * @param {String} widgetName 
     * @param {module:api/SensorApi~sensorMogaReadCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorMogaRead = function(widgetName, callback) {
      var postBody = null;

      // verify the required parameter 'widgetName' is set
      if (widgetName === undefined || widgetName === null) {
        throw new Error("Missing the required parameter 'widgetName' when calling sensorMogaRead");
      }


      var pathParams = {
        'widget_name': widgetName
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
        '/sensor/moga/{widget_name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sensorObservableBacktestCreate operation.
     * @callback module:api/SensorApi~sensorObservableBacktestCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {module:api/SensorApi~sensorObservableBacktestCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sensorObservableBacktestCreate = function(callback) {
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
        '/sensor/observable/backtest', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
