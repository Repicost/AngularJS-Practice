/**
 * Created by diegosipin on 05/07/2018.
 */
'use strict';

angular.module('login.controllers', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise(function($injector){
            $injector.invoke(['$state', function($state) {
                $state.go('login');
            }]);
        });

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'resources/app/login/templates/loginForm.html',
                controller: 'LoginValidationController'
            })

            .state('main', {
                url: '/main/',
                templateUrl: 'resources/app/main/templates/tableContentResult.html',
                controller: 'mainController',
                params: {
                    alias: {
                        value: 'default',
                        squash: false
                    }
                }
            });

        $locationProvider.html5Mode(true);

    })

    .controller('LoginValidationController' , ['$scope', '$window', '$state',
        function ($scope, $window, $state) {

        $scope.validateForm = function(data){
                if ($scope.username === "Diego" && $scope.password === "12345"){
                    $state.go('main', {alias: data});
                } else {
                    alert("Invalid username or password!");
                }
        };

        }
    ])

;