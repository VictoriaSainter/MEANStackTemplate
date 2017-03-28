/**
 * Created by victoriasainter on 23/05/16.
 */
var app = angular.module('meanTemplate');

app.controller('ListOfUsersController',['$scope', 'UserService', function($scope, UserService) {

    //gets all the users from the mongodb using the UserService
    $scope.getUsers = function() {
        UserService.getAll().then(function (response) {
            $scope.users = response.data;
        }, function (error){
            console.log("Error " + error);
        });
    };



    init = function(){
        $scope.users = [];
        $scope.getUsers();
    };

    init();




}]);
