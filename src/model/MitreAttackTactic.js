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
    root.PerchApi.MitreAttackTactic = factory(root.PerchApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MitreAttackTactic model module.
   * @module model/MitreAttackTactic
   * @version v1
   */

  /**
   * Constructs a new <code>MitreAttackTactic</code>.
   * @alias module:model/MitreAttackTactic
   * @class
   * @param id {String} MITRE ATT&CK Tactic ID, denoted as TAxxxx
   * @param name {String} Tactic name as given by MITRE ATT&CK
   * @param attackDomain {module:model/MitreAttackTactic.AttackDomainEnum} The MITRE ATT&CK domain grouping this tactic belongs to
   */
  var exports = function(id, name, attackDomain) {
    this.id = id;
    this.name = name;
    this.attackDomain = attackDomain;
  };

  /**
   * Constructs a <code>MitreAttackTactic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MitreAttackTactic} obj Optional instance to populate.
   * @return {module:model/MitreAttackTactic} The populated <code>MitreAttackTactic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('is_mapping_enabled'))
        obj.isMappingEnabled = ApiClient.convertToType(data['is_mapping_enabled'], 'Boolean');
      if (data.hasOwnProperty('attack_domain'))
        obj.attackDomain = ApiClient.convertToType(data['attack_domain'], 'String');
    }
    return obj;
  }

  /**
   * MITRE ATT&CK Tactic ID, denoted as TAxxxx
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * Tactic name as given by MITRE ATT&CK
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Whether to enable mapping this tactic to an Event Notification and/or alert
   * @member {Boolean} isMappingEnabled
   */
  exports.prototype.isMappingEnabled = undefined;

  /**
   * The MITRE ATT&CK domain grouping this tactic belongs to
   * @member {module:model/MitreAttackTactic.AttackDomainEnum} attackDomain
   */
  exports.prototype.attackDomain = undefined;


  /**
   * Allowed values for the <code>attackDomain</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AttackDomainEnum = {
    /**
     * value: "pre"
     * @const
     */
    pre: "pre",

    /**
     * value: "enterprise"
     * @const
     */
    enterprise: "enterprise",

    /**
     * value: "mobile"
     * @const
     */
    mobile: "mobile"
  };

  return exports;

}));