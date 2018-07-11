/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.controllers', [])

    .controller('LoginValidationController' , ['$scope', '$window',
        function ($scope, $window) {
           $scope.validateForm = function(){
                if ($scope.username === "Diego" && $scope.password === "12345"){
                    $window.location.href = 'main.html';
                } else {
                    alert("Invalid username or password!");
                }
            };
        }
    ]);