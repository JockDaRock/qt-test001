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
    root.PerchApi.Preference = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Preference model module.
   * @module model/Preference
   * @version v1
   */

  /**
   * Constructs a new <code>Preference</code>.
   * @alias module:model/Preference
   * @class
   * @param emailIndicatorUpdates {Boolean} 
   * @param inactivityTimeout {Number} 
   * @param openLinksInNewTab {Boolean} 
   * @param showTimesAsUtc {Boolean} 
   * @param showTimesAsMilitary {Boolean} 
   * @param showSinceYouveBeenGone {Boolean} 
   */
  var exports = function(emailIndicatorUpdates, inactivityTimeout, openLinksInNewTab, showTimesAsUtc, showTimesAsMilitary, showSinceYouveBeenGone) {
    this.emailIndicatorUpdates = emailIndicatorUpdates;
    this.inactivityTimeout = inactivityTimeout;
    this.openLinksInNewTab = openLinksInNewTab;
    this.showTimesAsUtc = showTimesAsUtc;
    this.showTimesAsMilitary = showTimesAsMilitary;
    this.showSinceYouveBeenGone = showSinceYouveBeenGone;
  };

  /**
   * Constructs a <code>Preference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Preference} obj Optional instance to populate.
   * @return {module:model/Preference} The populated <code>Preference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('emailIndicatorUpdates'))
        obj.emailIndicatorUpdates = ApiClient.convertToType(data['emailIndicatorUpdates'], 'Boolean');
      if (data.hasOwnProperty('inactivityTimeout'))
        obj.inactivityTimeout = ApiClient.convertToType(data['inactivityTimeout'], 'Number');
      if (data.hasOwnProperty('openLinksInNewTab'))
        obj.openLinksInNewTab = ApiClient.convertToType(data['openLinksInNewTab'], 'Boolean');
      if (data.hasOwnProperty('showTimesAsUtc'))
        obj.showTimesAsUtc = ApiClient.convertToType(data['showTimesAsUtc'], 'Boolean');
      if (data.hasOwnProperty('showTimesAsMilitary'))
        obj.showTimesAsMilitary = ApiClient.convertToType(data['showTimesAsMilitary'], 'Boolean');
      if (data.hasOwnProperty('showSinceYouveBeenGone'))
        obj.showSinceYouveBeenGone = ApiClient.convertToType(data['showSinceYouveBeenGone'], 'Boolean');
      if (data.hasOwnProperty('show_alert_payload_on_hover'))
        obj.showAlertPayloadOnHover = ApiClient.convertToType(data['show_alert_payload_on_hover'], 'Boolean');
      if (data.hasOwnProperty('allow_perchybana_link_meta_keys'))
        obj.allowPerchybanaLinkMetaKeys = ApiClient.convertToType(data['allow_perchybana_link_meta_keys'], 'Boolean');
      if (data.hasOwnProperty('perchybana_link_meta_keys'))
        obj.perchybanaLinkMetaKeys = ApiClient.convertToType(data['perchybana_link_meta_keys'], Object);
    }
    return obj;
  }

  /**
   * @member {Boolean} emailIndicatorUpdates
   */
  exports.prototype.emailIndicatorUpdates = undefined;

  /**
   * @member {Number} inactivityTimeout
   */
  exports.prototype.inactivityTimeout = undefined;

  /**
   * @member {Boolean} openLinksInNewTab
   */
  exports.prototype.openLinksInNewTab = undefined;

  /**
   * @member {Boolean} showTimesAsUtc
   */
  exports.prototype.showTimesAsUtc = undefined;

  /**
   * @member {Boolean} showTimesAsMilitary
   */
  exports.prototype.showTimesAsMilitary = undefined;

  /**
   * @member {Boolean} showSinceYouveBeenGone
   */
  exports.prototype.showSinceYouveBeenGone = undefined;

  /**
   * @member {Boolean} showAlertPayloadOnHover
   */
  exports.prototype.showAlertPayloadOnHover = undefined;

  /**
   * @member {Boolean} allowPerchybanaLinkMetaKeys
   */
  exports.prototype.allowPerchybanaLinkMetaKeys = undefined;

  /**
   * @member {Object} perchybanaLinkMetaKeys
   */
  exports.prototype.perchybanaLinkMetaKeys = undefined;

  return exports;

}));
