/**
 * Created by diegosipin on 10/07/2018.
 */
    angular.module('main.directive', [])
        .directive('tableContent', function(){
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                templateUrl: 'resources/app/main/templates/tableContentResult.html'
            }
        })
;