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
    define(['ApiClient', 'model/Warnings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Warnings'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.TeamHealth = factory(root.PerchApi.ApiClient, root.PerchApi.Warnings);
  }
}(this, function(ApiClient, Warnings) {
  'use strict';

  /**
   * The TeamHealth model module.
   * @module model/TeamHealth
   * @version v1
   */

  /**
   * Constructs a new <code>TeamHealth</code>.
   * @alias module:model/TeamHealth
   * @class
   * @param teamId {Number} 
   * @param teamName {String} 
   * @param alerts {Number} 
   * @param escalations {Number} 
   * @param lastLogin {Date} 
   * @param lastEscalation {Date} 
   * @param warnings {module:model/Warnings} 
   */
  var exports = function(teamId, teamName, alerts, escalations, lastLogin, lastEscalation, warnings) {
    this.teamId = teamId;
    this.teamName = teamName;
    this.alerts = alerts;
    this.escalations = escalations;
    this.lastLogin = lastLogin;
    this.lastEscalation = lastEscalation;
    this.warnings = warnings;
  };

  /**
   * Constructs a <code>TeamHealth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamHealth} obj Optional instance to populate.
   * @return {module:model/TeamHealth} The populated <code>TeamHealth</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'Number');
      if (data.hasOwnProperty('team_name'))
        obj.teamName = ApiClient.convertToType(data['team_name'], 'String');
      if (data.hasOwnProperty('alerts'))
        obj.alerts = ApiClient.convertToType(data['alerts'], 'Number');
      if (data.hasOwnProperty('alerts_delta'))
        obj.alertsDelta = ApiClient.convertToType(data['alerts_delta'], 'String');
      if (data.hasOwnProperty('escalations'))
        obj.escalations = ApiClient.convertToType(data['escalations'], 'Number');
      if (data.hasOwnProperty('escalations_delta'))
        obj.escalationsDelta = ApiClient.convertToType(data['escalations_delta'], 'String');
      if (data.hasOwnProperty('last_login'))
        obj.lastLogin = ApiClient.convertToType(data['last_login'], 'Date');
      if (data.hasOwnProperty('last_escalation'))
        obj.lastEscalation = ApiClient.convertToType(data['last_escalation'], 'Date');
      if (data.hasOwnProperty('warnings'))
        obj.warnings = Warnings.constructFromObject(data['warnings']);
    }
    return obj;
  }

  /**
   * @member {Number} teamId
   */
  exports.prototype.teamId = undefined;

  /**
   * @member {String} teamName
   */
  exports.prototype.teamName = undefined;

  /**
   * @member {Number} alerts
   */
  exports.prototype.alerts = undefined;

  /**
   * @member {String} alertsDelta
   */
  exports.prototype.alertsDelta = undefined;

  /**
   * @member {Number} escalations
   */
  exports.prototype.escalations = undefined;

  /**
   * @member {String} escalationsDelta
   */
  exports.prototype.escalationsDelta = undefined;

  /**
   * @member {Date} lastLogin
   */
  exports.prototype.lastLogin = undefined;

  /**
   * @member {Date} lastEscalation
   */
  exports.prototype.lastEscalation = undefined;

  /**
   * @member {module:model/Warnings} warnings
   */
  exports.prototype.warnings = undefined;

  return exports;

}));
