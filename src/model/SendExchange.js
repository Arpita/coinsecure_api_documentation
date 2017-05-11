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
    root.CoinsecureApiDocumentation.SendExchange = factory(root.CoinsecureApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendExchange model module.
   * @module model/SendExchange
   * @version beta
   */

  /**
   * Constructs a new <code>SendExchange</code>.
   * @alias module:model/SendExchange
   * @class
   * @param amt {Number} 
   * @param walletID {String} 
   */
  var exports = function(amt, walletID) {
    var _this = this;

    _this['amt'] = amt;
    _this['walletID'] = walletID;

  };

  /**
   * Constructs a <code>SendExchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendExchange} obj Optional instance to populate.
   * @return {module:model/SendExchange} The populated <code>SendExchange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amt')) {
        obj['amt'] = ApiClient.convertToType(data['amt'], 'Number');
      }
      if (data.hasOwnProperty('walletID')) {
        obj['walletID'] = ApiClient.convertToType(data['walletID'], 'String');
      }
      if (data.hasOwnProperty('msg')) {
        obj['msg'] = ApiClient.convertToType(data['msg'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} amt
   */
  exports.prototype['amt'] = undefined;
  /**
   * @member {String} walletID
   */
  exports.prototype['walletID'] = undefined;
  /**
   * @member {String} msg
   */
  exports.prototype['msg'] = undefined;



  return exports;
}));

