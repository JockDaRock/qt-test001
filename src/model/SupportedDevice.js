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
    root.PerchApi.SupportedDevice = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SupportedDevice model module.
   * @module model/SupportedDevice
   * @version v1
   */

  /**
   * Constructs a new <code>SupportedDevice</code>.
   * @alias module:model/SupportedDevice
   * @class
   * @param model {String} Model # of the device (ex: T-800)
   */
  var exports = function(model) {
    this.model = model;
  };

  /**
   * Constructs a <code>SupportedDevice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SupportedDevice} obj Optional instance to populate.
   * @return {module:model/SupportedDevice} The populated <code>SupportedDevice</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('display_name'))
        obj.displayName = ApiClient.convertToType(data['display_name'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('manufacturer'))
        obj.manufacturer = ApiClient.convertToType(data['manufacturer'], 'String');
      if (data.hasOwnProperty('manufacturer_slug'))
        obj.manufacturerSlug = ApiClient.convertToType(data['manufacturer_slug'], 'String');
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
    }
    return obj;
  }

  /**
   * @member {String} displayName
   */
  exports.prototype.displayName = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} manufacturer
   */
  exports.prototype.manufacturer = undefined;

  /**
   * @member {String} manufacturerSlug
   */
  exports.prototype.manufacturerSlug = undefined;

  /**
   * Model # of the device (ex: T-800)
   * @member {String} model
   */
  exports.prototype.model = undefined;

  /**
   * @member {String} type
   */
  exports.prototype.type = undefined;

  /**
   * Optional description of the device
   * @member {String} description
   */
  exports.prototype.description = undefined;

  return exports;

}));
