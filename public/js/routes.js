'use strict';

/**
 * Route configuration for the api dashboard module.
 */
angular.module('gandhiGrocery').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'templates/dashboard.html'
            })
            .state('users', {
                url: '/users',
                templateUrl: 'templates/users.html'
            });
    }
]);
