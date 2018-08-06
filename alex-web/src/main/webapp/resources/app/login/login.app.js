/**
 * Created by diegosipin on 05/07/2018.
 */
angular.module('login', [
    //Others
    'ngRoute',

    //From main
    'main.controllers',

    //login specific
    'login.services',
    'login.controllers',
    'login.directive'
])
;