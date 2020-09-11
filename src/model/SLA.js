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
    define(['ApiClient', 'model/SLATeam'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SLATeam'));
  } else {
    // Browser globals (root is window)
    if (!root.PerchApi) {
      root.PerchApi = {};
    }
    root.PerchApi.SLA = factory(root.PerchApi.ApiClient, root.PerchApi.SLATeam);
  }
}(this, function(ApiClient, SLATeam) {
  'use strict';

  /**
   * The SLA model module.
   * @module model/SLA
   * @version v1
   */

  /**
   * Constructs a new <code>SLA</code>.
   * @alias module:model/SLA
   * @class
   * @param owner {module:model/SLATeam} 
   * @param name {String} 
   * @param timezone {String} 
   */
  var exports = function(owner, name, timezone) {
    this.owner = owner;
    this.name = name;
    this.timezone = timezone;
  };

  /**
   * Constructs a <code>SLA</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SLA} obj Optional instance to populate.
   * @return {module:model/SLA} The populated <code>SLA</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('owner'))
        obj.owner = SLATeam.constructFromObject(data['owner']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('minutes_to_respond'))
        obj.minutesToRespond = ApiClient.convertToType(data['minutes_to_respond'], 'String');
      if (data.hasOwnProperty('timezone'))
        obj.timezone = ApiClient.convertToType(data['timezone'], 'String');
      if (data.hasOwnProperty('windows'))
        obj.windows = ApiClient.convertToType(data['windows'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {module:model/SLATeam} owner
   */
  exports.prototype.owner = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} minutesToRespond
   */
  exports.prototype.minutesToRespond = undefined;

  /**
   * @member {String} timezone
   */
  exports.prototype.timezone = undefined;

  /**
   * @member {String} windows
   */
  exports.prototype.windows = undefined;

  return exports;

}));
