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
    root.CoinsecureApiDocumentation.SuccessTickerResponse = factory(root.CoinsecureApiDocumentation.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SuccessTickerResponse model module.
   * @module model/SuccessTickerResponse
   * @version beta
   */

  /**
   * Constructs a new <code>SuccessTickerResponse</code>.
   * @alias module:model/SuccessTickerResponse
   * @class
   * @param lastPrice {Number} 
   * @param timestamp {Number} 
   * @param bid {Number} 
   * @param ask {Number} 
   * @param fiatVolume {Number} 
   * @param coinVolume {Number} 
   * @param open {Number} 
   * @param high {Number} 
   * @param low {Number} 
   */
  var exports = function(lastPrice, timestamp, bid, ask, fiatVolume, coinVolume, open, high, low) {
    var _this = this;

    _this['lastPrice'] = lastPrice;
    _this['timestamp'] = timestamp;
    _this['bid'] = bid;
    _this['ask'] = ask;
    _this['fiatVolume'] = fiatVolume;
    _this['coinVolume'] = coinVolume;
    _this['open'] = open;
    _this['high'] = high;
    _this['low'] = low;
  };

  /**
   * Constructs a <code>SuccessTickerResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuccessTickerResponse} obj Optional instance to populate.
   * @return {module:model/SuccessTickerResponse} The populated <code>SuccessTickerResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lastPrice')) {
        obj['lastPrice'] = ApiClient.convertToType(data['lastPrice'], 'Number');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Number');
      }
      if (data.hasOwnProperty('bid')) {
        obj['bid'] = ApiClient.convertToType(data['bid'], 'Number');
      }
      if (data.hasOwnProperty('ask')) {
        obj['ask'] = ApiClient.convertToType(data['ask'], 'Number');
      }
      if (data.hasOwnProperty('fiatVolume')) {
        obj['fiatVolume'] = ApiClient.convertToType(data['fiatVolume'], 'Number');
      }
      if (data.hasOwnProperty('coinVolume')) {
        obj['coinVolume'] = ApiClient.convertToType(data['coinVolume'], 'Number');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('high')) {
        obj['high'] = ApiClient.convertToType(data['high'], 'Number');
      }
      if (data.hasOwnProperty('low')) {
        obj['low'] = ApiClient.convertToType(data['low'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} lastPrice
   */
  exports.prototype['lastPrice'] = undefined;
  /**
   * @member {Number} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {Number} bid
   */
  exports.prototype['bid'] = undefined;
  /**
   * @member {Number} ask
   */
  exports.prototype['ask'] = undefined;
  /**
   * @member {Number} fiatVolume
   */
  exports.prototype['fiatVolume'] = undefined;
  /**
   * @member {Number} coinVolume
   */
  exports.prototype['coinVolume'] = undefined;
  /**
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * @member {Number} high
   */
  exports.prototype['high'] = undefined;
  /**
   * @member {Number} low
   */
  exports.prototype['low'] = undefined;



  return exports;
}));

