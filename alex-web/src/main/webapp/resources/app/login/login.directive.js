/**
 * Created by diegosipin on 05/07/2018.
 */
    angular.module('login.directive', [])
    .directive('loginFormContent', function(){
        return {
            scope: true,
            restrict: 'E',
            transclude: true,
            replace: true,
            templateUrl: 'resources/app/login/templates/loginForm.html'
        }
    })

;