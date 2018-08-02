/**
 * Created by diegosipin on 05/07/2018.
 */
'use strict';

angular.module('login.controllers', ['ngRoute'])
    .config(function ($routeProvider) {
        // EXPERIMENTAL CODE START
        $routeProvider.
            when('/main', {
                templateUrl: 'main.html',
                alias: '$scope.alias.data'
            });

        // EXPERIMENTAL CODE END
    })

    .controller('LoginValidationController' , ['$scope', '$window', 'loginService',
        function ($scope, $window, loginService) {
        $scope.alias = {
            data: ""
        };

        $scope.validateForm = function(){
                if ($scope.username === "Diego" && $scope.password === "12345"){
                    loginService.saveAlias($scope.alias.data);
                    $window.location.href = 'main.html';
                } else {
                    alert("Invalid username or password!");
                }
        };

        }
    ])

;