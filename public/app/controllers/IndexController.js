/**
 * Created by victoriasainter on 26/05/16.
 */

var app = angular.module('meanTemplate');

app.controller('IndexController',['$scope', '$location', function($scope, $location) {

    //returns the location of the page, e.g if you're on the list of users tab, it will return this. Therefore when refreshing the page you don't lose which tab should be highlighted.
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

}]);