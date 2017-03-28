/**
 * Created by victoriasainter on 23/05/16.
 */
var app = angular.module('meanTemplate');

app.controller('AddNewUserController',['$scope', 'UserService', function($scope, UserService) {



    //submits the user data as a post to the API, adds to the database in Mongo.
    $scope.submit = function() {
        var newUser = {
            name: $scope.userName,
            age: $scope.userAge,
            comments: $scope.userComments
        };

        //uses the user service
        UserService.postNewUser(newUser).then(function(addedUser) {
            console.log(addedUser);
            if(addedUser){
                $scope.response = "Thanks, " + addedUser.data.name + " has been added to the database";
                $scope.reset();
                $scope.isHidden = false;
            } else {
                $scope.response = "Uh oh, something went wrong - please try again";
                $scope.isHidden = false;
            }

        });
    };


    //clears down the add user form once submit button has been clicked
    $scope.reset = function() {
        $scope.userName = '';
        $scope.userAge = '';
        $scope.userComments = '';
        $scope.addNewUser.$setPristine();

    };

    init = function (){
        $scope.isHidden = true;
    };

    init();



}]);