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
    define(['ApiClient', 'model/SiemAlertableMapping'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SiemAlertableMapping'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.SiemAlertingApi = factory(root.PerchApi.ApiClient, root.PerchApi.SiemAlertableMapping);
  }
}(this, function(ApiClient, SiemAlertableMapping) {
  'use strict';

  /**
   * SiemAlerting service.
   * @module api/SiemAlertingApi
   * @version v1
   */

  /**
   * Constructs a new SiemAlertingApi. 
   * @alias module:api/SiemAlertingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the siemAlertingAlertableMappingsFields operation.
     * @callback module:api/SiemAlertingApi~siemAlertingAlertableMappingsFieldsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiemAlertableMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the SiemAlertableField records available for use on the mapping with the specified PK.
     * @param {Number} id A unique integer value identifying this siem alertable mapping.
     * @param {module:api/SiemAlertingApi~siemAlertingAlertableMappingsFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SiemAlertableMapping}
     */
    this.siemAlertingAlertableMappingsFields = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling siemAlertingAlertableMappingsFields");
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
      var returnType = SiemAlertableMapping;

      return this.apiClient.callApi(
        '/siem-alerting/alertable-mappings/{id}/fields', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the siemAlertingAlertableMappingsList operation.
     * @callback module:api/SiemAlertingApi~siemAlertingAlertableMappingsListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SiemAlertableMapping>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Object} opts Optional parameters
     * @param {String} opts.ordering Which field to use when ordering the results.
     * @param {module:api/SiemAlertingApi~siemAlertingAlertableMappingsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SiemAlertableMapping>}
     */
    this.siemAlertingAlertableMappingsList = function(opts, callback) {
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
      var returnType = [SiemAlertableMapping];

      return this.apiClient.callApi(
        '/siem-alerting/alertable-mappings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the siemAlertingAlertableMappingsRead operation.
     * @callback module:api/SiemAlertingApi~siemAlertingAlertableMappingsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiemAlertableMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * @param {Number} id A unique integer value identifying this siem alertable mapping.
     * @param {module:api/SiemAlertingApi~siemAlertingAlertableMappingsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SiemAlertableMapping}
     */
    this.siemAlertingAlertableMappingsRead = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling siemAlertingAlertableMappingsRead");
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
      var returnType = SiemAlertableMapping;

      return this.apiClient.callApi(
        '/siem-alerting/alertable-mappings/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));