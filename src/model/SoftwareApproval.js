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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.SoftwareApproval = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SoftwareApproval model module.
   * @module model/SoftwareApproval
   * @version v1
   */

  /**
   * Constructs a new <code>SoftwareApproval</code>.
   * @alias module:model/SoftwareApproval
   * @class
   * @param software {Number} 
   */
  var exports = function(software) {
    this.software = software;
  };

  /**
   * Constructs a <code>SoftwareApproval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SoftwareApproval} obj Optional instance to populate.
   * @return {module:model/SoftwareApproval} The populated <code>SoftwareApproval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('software'))
        obj.software = ApiClient.convertToType(data['software'], 'Number');
      if (data.hasOwnProperty('team'))
        obj.team = ApiClient.convertToType(data['team'], 'Number');
      if (data.hasOwnProperty('approval_state'))
        obj.approvalState = ApiClient.convertToType(data['approval_state'], 'Number');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('created_by'))
        obj.createdBy = ApiClient.convertToType(data['created_by'], 'Number');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('updated_by'))
        obj.updatedBy = ApiClient.convertToType(data['updated_by'], 'Number');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {Number} software
   */
  exports.prototype.software = undefined;

  /**
   * @member {Number} team
   */
  exports.prototype.team = undefined;

  /**
   * @member {Number} approvalState
   */
  exports.prototype.approvalState = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {Number} createdBy
   */
  exports.prototype.createdBy = undefined;

  /**
   * @member {Date} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * @member {Number} updatedBy
   */
  exports.prototype.updatedBy = undefined;

  return exports;

}));
