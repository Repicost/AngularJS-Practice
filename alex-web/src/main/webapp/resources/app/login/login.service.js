/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.services', [])

    .factory('loginService', function () {
        var aliasValue = {
            value: ''
        };

        aliasValue.setter = function (newValue) {
            aliasValue.value = newValue.toString();
        };

        aliasValue.getter = function () {
            return aliasValue.value;
        };

        return aliasValue;
    });