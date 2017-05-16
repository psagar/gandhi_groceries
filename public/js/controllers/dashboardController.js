/**
 * Master Controller
 */

angular.module('gandhiGrocery')
    .controller('DashboardCtrl', [
        '$scope', '$rootScope', '$cookieStore', 'dataFactory',
        function ($scope, $rootScope, $cookieStore, dataFactory) {
            var mobileView = 992;

            $scope.getWidth = function () {
                return window.innerWidth;
            };

            $scope.$watch($scope.getWidth, function(newValue, oldValue) {
                if (newValue >= mobileView) {
                    if (angular.isDefined($cookieStore.get('toggle'))) {
                        $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
                    } else {
                        $scope.toggle = true;
                    }
                } else {
                    $scope.toggle = false;
                }
            });

            window.onresize = function() {
                $scope.$apply();
            };


            $scope.toggleSidebar = function () {
                $scope.toggle = !$scope.toggle;
                $cookieStore.put('toggle', $scope.toggle);
            };

            function getGroceries () {
                dataFactory.getGroceries()
                .then(function (response) {
                    $scope.groceries = response.data.entities;
                }, function (error) {
                    $scope.status = 'Unable to load api grocery data: ' + error.message;
                })
            };
            getGroceries();
        }
]);