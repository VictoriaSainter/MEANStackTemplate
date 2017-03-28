/**
 * Created by victoriasainter on 23/05/16.
 */
var app = angular.module('meanTemplate');

//this allows the app to decide which controller should be used and which view inserted when you go to a certain hyperlink. E.g. when you go to /AddNewUser, it knows to insert the AddNewUser.html file into the body of the Index.html, and use the AddNewUserController to control it.

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            redirectTo: '/AddNewUser'
        })

        .when('/AddNewUser', {
            templateUrl: "./views/AddNewUser.html",
            controller: "AddNewUserController"
        })

        .when('/ListOfUsers', {
            templateUrl: "./views/ListOfUsers.html",
            controller: "ListOfUsersController"
        });

    $locationProvider.html5Mode(true);


});
