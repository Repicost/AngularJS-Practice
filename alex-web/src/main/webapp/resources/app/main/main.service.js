/**
 * Created by diegosipin on 11/07/2018.
 */
angular.module('main.services', [])

    .factory('addAccountService', function () {
        var keyValue = {};

        keyValue.setter = function (key) {
            keyValue.value = key;
        };

        keyValue.setter = function () {
          return keyValue.value;
        };

        return keyValue;
    });