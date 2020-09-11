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
    root.PerchApi.CommunityFile = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CommunityFile model module.
   * @module model/CommunityFile
   * @version v1
   */

  /**
   * Constructs a new <code>CommunityFile</code>.
   * @alias module:model/CommunityFile
   * @class
   * @param title {String} 
   * @param name {String} 
   */
  var exports = function(title, name) {
    this.title = title;
    this.name = name;
  };

  /**
   * Constructs a <code>CommunityFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommunityFile} obj Optional instance to populate.
   * @return {module:model/CommunityFile} The populated <code>CommunityFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('community'))
        obj.community = ApiClient.convertToType(data['community'], 'Number');
      if (data.hasOwnProperty('tlp'))
        obj.tlp = ApiClient.convertToType(data['tlp'], 'Number');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'Number');
      if (data.hasOwnProperty('downloadCount'))
        obj.downloadCount = ApiClient.convertToType(data['downloadCount'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('contents'))
        obj.contents = ApiClient.convertToType(data['contents'], 'String');
      if (data.hasOwnProperty('isOwned'))
        obj.isOwned = ApiClient.convertToType(data['isOwned'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('link'))
        obj.link = ApiClient.convertToType(data['link'], 'String');
      if (data.hasOwnProperty('comments'))
        obj.comments = ApiClient.convertToType(data['comments'], 'String');
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

  /**
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * @member {Number} community
   */
  exports.prototype.community = undefined;

  /**
   * @member {Number} tlp
   */
  exports.prototype.tlp = undefined;

  /**
   * @member {Number} size
   */
  exports.prototype.size = undefined;

  /**
   * @member {Number} downloadCount
   */
  exports.prototype.downloadCount = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} contents
   */
  exports.prototype.contents = undefined;

  /**
   * @member {String} isOwned
   */
  exports.prototype.isOwned = undefined;

  /**
   * @member {Date} created
   */
  exports.prototype.created = undefined;

  /**
   * @member {String} link
   */
  exports.prototype.link = undefined;

  /**
   * @member {String} comments
   */
  exports.prototype.comments = undefined;

  return exports;

}));
