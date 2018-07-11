/**
 * Created by diegosipin on 11/07/2018.
 */
angular.module('main.services', [])

    .factory('addAccountService', function () {
        var _addAccountService = {};
        var account = "";

        _addAccountService.setAccountType = function (accountType) {
             account = accountType;
        };

        _addAccountService.getAccount = function () {
            return account;
        };

        return _addAccountService;
    });