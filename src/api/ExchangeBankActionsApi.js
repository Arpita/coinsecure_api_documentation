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
    define(['ApiClient', 'model/SendCoin', 'model/SuccessResult', 'model/FailResult', 'model/WithdrawID', 'model/Code', 'model/NewBankForm', 'model/NewFiatBankDeposit', 'model/WithdrawFiat'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SendCoin'), require('../model/SuccessResult'), require('../model/FailResult'), require('../model/WithdrawID'), require('../model/Code'), require('../model/NewBankForm'), require('../model/NewFiatBankDeposit'), require('../model/WithdrawFiat'));
  } else {
    // Browser globals (root is window)
    if (!root.CoinsecureApiDocumentation) {
      root.CoinsecureApiDocumentation = {};
    }
    root.CoinsecureApiDocumentation.ExchangeBankActionsApi = factory(root.CoinsecureApiDocumentation.ApiClient, root.CoinsecureApiDocumentation.SendCoin, root.CoinsecureApiDocumentation.SuccessResult, root.CoinsecureApiDocumentation.FailResult, root.CoinsecureApiDocumentation.WithdrawID, root.CoinsecureApiDocumentation.Code, root.CoinsecureApiDocumentation.NewBankForm, root.CoinsecureApiDocumentation.NewFiatBankDeposit, root.CoinsecureApiDocumentation.WithdrawFiat);
  }
}(this, function(ApiClient, SendCoin, SuccessResult, FailResult, WithdrawID, Code, NewBankForm, NewFiatBankDeposit, WithdrawFiat) {
  'use strict';

  /**
   * ExchangeBankActions service.
   * @module api/ExchangeBankActionsApi
   * @version beta
   */

  /**
   * Constructs a new ExchangeBankActionsApi. 
   * @alias module:api/ExchangeBankActionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1userexchangebankcoinwithdrawinitiate operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawinitiateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Bitcoin Withdrawal
     * The code for verifying the withdrawal can be called from /v1/exchange/bank/coin/withdrawVerifycode. May require a 2FA code if 2FA is enabled on the account. A mail is sent to the users email requesting confirmation of the withdrawal. This confirmation mail can be disabled on the Coinsecure Profile page.
     * @param {module:model/SendCoin} body Please send the form with valid inputs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawinitiateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankcoinwithdrawinitiate = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankcoinwithdrawinitiate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/coin/withdraw/initiate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankcoinwithdrawnewVerifycode operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawnewVerifycodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a Verification Code.
     * Gets Coin Unverified Withdraws Codes to call and apply on /v1/user/exchange/bank/coin/withdraw/verify.
     * @param {module:model/WithdrawID} body You can get unverified withdraw ID&#39;s from /v1/user/exchange/bank/coin/withdraw/unverified
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization API object to be added
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawnewVerifycodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankcoinwithdrawnewVerifycode = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankcoinwithdrawnewVerifycode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/coin/withdraw/newVerifycode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankcoinwithdrawunverifiedcancelWithdrawID operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawunverifiedcancelWithdrawIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel Bitcoin Withdrawal
     * Cancels an unverified withdrawal. You can get the WithdrawID from /v1/user/exchange/bank/coin/withdraw/unverified.
     * @param {String} withdrawID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawunverifiedcancelWithdrawIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankcoinwithdrawunverifiedcancelWithdrawID = function(withdrawID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'withdrawID' is set
      if (withdrawID == undefined || withdrawID == null) {
        throw new Error("Missing the required parameter 'withdrawID' when calling v1userexchangebankcoinwithdrawunverifiedcancelWithdrawID");
      }


      var pathParams = {
        'withdrawID': withdrawID
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/coin/withdraw/unverified/cancel/{withdrawID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankcoinwithdrawverify operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawverifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Bitcoin Withdrawal
     * Verifies an unverified withdrawal. You can get the code from /v1/user/exchange/bank/coin/withdraw/newVerifycode.
     * @param {module:model/Code} body You can get the code from /v1/user/exchange/bank/coin/withdraw/newVerifycode.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankcoinwithdrawverifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankcoinwithdrawverify = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankcoinwithdrawverify");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/coin/withdraw/verify', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiataccountnew operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiataccountnewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * New Bank Link
     * Submits a New Bank Link on KYC Verified Accounts.
     * @param {module:model/NewBankForm} body Please send the form with valid inputs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiataccountnewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiataccountnew = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankfiataccountnew");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/account/new', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatdepositcancelDepositID operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatdepositcancelDepositIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel Unverified Exchange Fiat Deposit
     * Cancels an unverified Exchange Fiat Deposit.
     * @param {String} depositID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatdepositcancelDepositIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatdepositcancelDepositID = function(depositID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'depositID' is set
      if (depositID == undefined || depositID == null) {
        throw new Error("Missing the required parameter 'depositID' when calling v1userexchangebankfiatdepositcancelDepositID");
      }


      var pathParams = {
        'depositID': depositID
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/deposit/cancel/{depositID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatdepositnew operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatdepositnewCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * New Exchange Fiat Deposit
     * Submits an unverified fiat deposit. No action will occur unless user cancels or bank notifies us of the payment.
     * @param {module:model/NewFiatBankDeposit} body Please send the form with valid inputs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatdepositnewCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatdepositnew = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankfiatdepositnew");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/deposit/new', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatwithdrawinitiate operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawinitiateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initiate Fiat Withdrawal
     * The code for verifying the withdrawal can be called from /v1/user/exchange/bank/fiat/withdraw/newVerifycode. May require a 2FA code if 2FA is enabled on the account. A mail is sent to the users email requesting confirmation of the withdrawal. This confirmation mail can be disabled on the Coinsecure Profile page.
     * @param {module:model/WithdrawFiat} body Please send the form with valid inputs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawinitiateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatwithdrawinitiate = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankfiatwithdrawinitiate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/withdraw/initiate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatwithdrawnewVerifycode operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawnewVerifycodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a Fiat Verification Code.
     * Gets Fiat Unverified Withdraws Codes to call and apply on /v1/user/exchange/bank/fiat/withdraw/verify.
     * @param {module:model/WithdrawID} body You can get unverified withdraw ID&#39;s from /v1/user/exchange/bank/fiat/withdraw/unverified
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization API object to be added
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawnewVerifycodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatwithdrawnewVerifycode = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankfiatwithdrawnewVerifycode");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/withdraw/newVerifycode', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatwithdrawunverifiedcancelWithdrawID operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawunverifiedcancelWithdrawIDCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel Fiat Withdrawal
     * Cancels an unverified withdrawal. You can get the WithdrawID from /v1/user/exchange/bank/fiat/withdraw/unverified.
     * @param {String} withdrawID 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawunverifiedcancelWithdrawIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatwithdrawunverifiedcancelWithdrawID = function(withdrawID, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'withdrawID' is set
      if (withdrawID == undefined || withdrawID == null) {
        throw new Error("Missing the required parameter 'withdrawID' when calling v1userexchangebankfiatwithdrawunverifiedcancelWithdrawID");
      }


      var pathParams = {
        'withdrawID': withdrawID
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/withdraw/unverified/cancel/{withdrawID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1userexchangebankfiatwithdrawverify operation.
     * @callback module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawverifyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify Fiat Withdrawal
     * Verifies an unverified withdrawal. You can get the code from /v1/user/exchange/bank/fiat/withdraw/newVerifycode.
     * @param {module:model/Code} body You can get the code from /v1/user/exchange/bank/fiat/withdraw/newVerifycode
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Enter a valid Api Key.
     * @param {String} opts.accept JSON, XML or CSV can be returned (Optional)
     * @param {module:api/ExchangeBankActionsApi~v1userexchangebankfiatwithdrawverifyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResult}
     */
    this.v1userexchangebankfiatwithdrawverify = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling v1userexchangebankfiatwithdrawverify");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'accept': opts['accept']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'application/xml', 'application/csv'];
      var returnType = SuccessResult;

      return this.apiClient.callApi(
        '/v1/user/exchange/bank/fiat/withdraw/verify', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
