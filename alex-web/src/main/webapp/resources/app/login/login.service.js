/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.services', [])

    .factory('loginService', function ($window) {
        return{

            saveAlias: function(data) {
                $window.localStorage.setItem("Alias", data)
                // $routeParams.alias = data;
            },

            getAlias: function () {
               return $window.localStorage.getItem("Alias")
                // return $routeParams.alias;
            }
        }
    });