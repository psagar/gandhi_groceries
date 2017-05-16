/**
 * Copyright(c) 2014 ZeOmega, Inc.
 * See ZeOmega_EULA.txt file included with this module distribution.
 *
 */
'use strict';

angular.module('gandhiGrocery')
    .factory('dataFactory', ['$http', function($http) {

    var urlBase = 'https://apibaas-trial.apigee.net/sdinoo/sandbox/mp_orders';
    var dataFactory = {};

    dataFactory.getGroceries = function () {
        return $http.get(urlBase);
    };

    return dataFactory;
}]);
