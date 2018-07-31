/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.services', [])

    .factory('loginService', function ($window) {
        // var aliasValue = {
        //     value: ''
        // };
        //
        // aliasValue.saveAlias = function (data) {
        //     aliasValue.value = data;
        // };
        //
        // aliasValue.getAlias = function () {
        //     return aliasValue.value;
        // };
        //
        // return aliasValue;

        // var aliasValue = {
        //     data: ""
        // };

        return{
            saveAlias: function(data) {
                $window.localStorage.setItem("Alias", data)
            },
            getAlias: function () {
               return $window.localStorage.getItem("Alias")
            }
        }
    });