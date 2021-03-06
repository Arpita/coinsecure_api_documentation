/**
 * Coinsecure Api Documentation
 * To generate an API key, please visit <a href='https://coinsecure.in/api' target='_new' class='homeapi'>https://coinsecure.in/api</a>.<br>Guidelines for use can be accessed at <a href='https://api.coinsecure.in/v1/guidelines'>https://api.coinsecure.in/v1/guidelines</a>.<br>Programming Language Libraries for use can be accessed at <a href='https://api.coinsecure.in/v1/code-libraries'>https://api.coinsecure.in/v1/code-libraries</a>.
 *
 * OpenAPI spec version: beta
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    if (!root.CoinsecureApiDocumentation) {
      root.CoinsecureApiDocumentation = {};
    }
    root.CoinsecureApiDocumentation.SuccRefData = factory(root.CoinsecureApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SuccRefData model module.
   * @module model/SuccRefData
   * @version beta
   */

  /**
   * Constructs a new <code>SuccRefData</code>.
   * @alias module:model/SuccRefData
   * @class
   * @param refPercent {Number} 
   * @param time {Number} 
   * @param refID {String} 
   * @param emailVerified {Boolean} 
   * @param kycComplete {Boolean} 
   * @param btcEarned {Number} 
   * @param fiatEarned {Number} 
   */
  var exports = function(refPercent, time, refID, emailVerified, kycComplete, btcEarned, fiatEarned) {
    var _this = this;

    _this['refPercent'] = refPercent;
    _this['time'] = time;
    _this['refID'] = refID;
    _this['emailVerified'] = emailVerified;
    _this['kycComplete'] = kycComplete;
    _this['btcEarned'] = btcEarned;
    _this['fiatEarned'] = fiatEarned;
  };

  /**
   * Constructs a <code>SuccRefData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuccRefData} obj Optional instance to populate.
   * @return {module:model/SuccRefData} The populated <code>SuccRefData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('refPercent')) {
        obj['refPercent'] = ApiClient.convertToType(data['refPercent'], 'Number');
      }
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
      if (data.hasOwnProperty('refID')) {
        obj['refID'] = ApiClient.convertToType(data['refID'], 'String');
      }
      if (data.hasOwnProperty('emailVerified')) {
        obj['emailVerified'] = ApiClient.convertToType(data['emailVerified'], 'Boolean');
      }
      if (data.hasOwnProperty('kycComplete')) {
        obj['kycComplete'] = ApiClient.convertToType(data['kycComplete'], 'Boolean');
      }
      if (data.hasOwnProperty('btcEarned')) {
        obj['btcEarned'] = ApiClient.convertToType(data['btcEarned'], 'Number');
      }
      if (data.hasOwnProperty('fiatEarned')) {
        obj['fiatEarned'] = ApiClient.convertToType(data['fiatEarned'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} refPercent
   */
  exports.prototype['refPercent'] = undefined;
  /**
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;
  /**
   * @member {String} refID
   */
  exports.prototype['refID'] = undefined;
  /**
   * @member {Boolean} emailVerified
   * @default false
   */
  exports.prototype['emailVerified'] = false;
  /**
   * @member {Boolean} kycComplete
   * @default false
   */
  exports.prototype['kycComplete'] = false;
  /**
   * @member {Number} btcEarned
   */
  exports.prototype['btcEarned'] = undefined;
  /**
   * @member {Number} fiatEarned
   */
  exports.prototype['fiatEarned'] = undefined;



  return exports;
}));


