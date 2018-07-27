/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.controllers', [])

    .controller('LoginValidationController' , ['$scope', '$window', 'loginService',
        function ($scope, $window, loginService) {
        $scope.alias = {
            value: ''
        };

        $scope.validateForm = function(){
                if ($scope.username === "Diego" && $scope.password === "12345"){
                    $window.location.href = 'main.html';
                } else {
                    alert("Invalid username or password!");
                }
            };

            $scope.setAliasValue = function () {
                loginService.setter($scope.alias.value);
                $window.location.href = 'main.html';
            }
        }
    ]);