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
    root.PerchApi.LoginAttempt = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoginAttempt model module.
   * @module model/LoginAttempt
   * @version v1
   */

  /**
   * Constructs a new <code>LoginAttempt</code>.
   * @alias module:model/LoginAttempt
   * @class
   * @param time {Date} 
   * @param username {String} 
   * @param successful {Boolean} 
   */
  var exports = function(time, username, successful) {
    this.time = time;
    this.username = username;
    this.successful = successful;
  };

  /**
   * Constructs a <code>LoginAttempt</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginAttempt} obj Optional instance to populate.
   * @return {module:model/LoginAttempt} The populated <code>LoginAttempt</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('successful'))
        obj.successful = ApiClient.convertToType(data['successful'], 'Boolean');
      if (data.hasOwnProperty('ip_address'))
        obj.ipAddress = ApiClient.convertToType(data['ip_address'], 'String');
      if (data.hasOwnProperty('headers'))
        obj.headers = ApiClient.convertToType(data['headers'], Object);
      if (data.hasOwnProperty('geoip'))
        obj.geoip = ApiClient.convertToType(data['geoip'], 'String');
    }
    return obj;
  }

  /**
   * @member {Date} time
   */
  exports.prototype.time = undefined;

  /**
   * @member {String} username
   */
  exports.prototype.username = undefined;

  /**
   * @member {Boolean} successful
   */
  exports.prototype.successful = undefined;

  /**
   * @member {String} ipAddress
   */
  exports.prototype.ipAddress = undefined;

  /**
   * @member {Object} headers
   */
  exports.prototype.headers = undefined;

  /**
   * @member {String} geoip
   */
  exports.prototype.geoip = undefined;

  return exports;

}));