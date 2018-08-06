/**
 * Created by diegosipin on 05/07/2018.
 */
'use strict';

angular.module('login.controllers', ['ngRoute'])

    // .config(function ($routeProvider) {
    //     // EXPERIMENTAL CODE START
    //     $routeProvider.
    //     when('/main', {
    //         templateUrl: 'resources/app/main/templates/tableContentResult.html',
    //         // templateUrl: 'main.html',
    //         // controller: 'resources/app/main/mainController',
    //         controller: 'mainController',
    //         alias: '$scope.alias.data'
    //     });
    //     // EXPERIMENTAL CODE END
    // })

    .config(function ($routeProvider) {
        // EXPERIMENTAL CODE START
        $routeProvider.
        when('/main/:alias', {
            templateUrl: 'resources/app/main/templates/tableContentResult.html',
            // templateUrl: 'main.html',
            // controller: 'resources/app/main/mainController',
            controller: 'mainController'
            // alias: 'AAA'
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