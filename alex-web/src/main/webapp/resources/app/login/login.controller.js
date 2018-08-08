/**
 * Created by diegosipin on 05/07/2018.
 */
'use strict';

angular.module('login.controllers', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // $routeProvider.
        //     when('/main/:alias', {
        //         templateUrl: 'resources/app/main/templates/tableContentResult.html',
        //         controller: 'mainController'
        //     });

        // $urlRouterProvider.otherwise('/login');

        $urlRouterProvider.otherwise(function($injector){
            $injector.invoke(['$state', function($state) {
                $state.go('login');
            }]);
        });

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'resources/app/login/templates/loginForm.html'
            })
            .state('main', {
                url: '/main/:alias',
                templateUrl: 'resources/app/main/templates/tableContentResult.html',
                controller: 'mainController'
            });

        $locationProvider.html5Mode(true);

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