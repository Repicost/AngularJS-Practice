/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login.services', [])

    .factory('loginService', function ($window) {
        return{

            saveAlias: function(data) {
                $window.localStorage.setItem("Alias", data)
            },

            getAlias: function () {
               return $window.localStorage.getItem("Alias")
            }
        }
    });

// $scope.alias = {
//     data: ""
// };
//
// $scope.validateForm = function(){
//     if ($scope.username === "Diego" && $scope.password === "12345"){
//         loginService.saveAlias($scope.alias.data);
//         $window.location.href = 'main.html';
//     } else {
//         alert("Invalid username or password!");
//     }
// };

// .service('userService', function() {
//     this.user = {};
// })
//     .run(['$state', '$rootScope', '$injector', ($state, $rootScope, $injector) => {
//             $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
//             if (toState.data && toState.data.redirect) {
//     var redirectTo = $injector.invoke(toState.data.redirect, this, {
//         toStateParams: toParams,
//         toState: toState
//     });
//     console.log(redirectTo);
//
//     if (redirectTo) {
//         event.preventDefault();
//         $state.transitionTo(redirectTo);
//     }
// }
// });
//
// $state.go('app.one');
// }]);