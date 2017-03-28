var app = angular.module('meanTemplate');
//creates a service (or factory) that can be used across the whole app so you don't need to duplicate the functions anywhere else.

app.factory('UserService', ['$http', function ($http) {

    var apiUrl = '/api/users/';

    return {

        getAll: function () {

            return $http.get(apiUrl);
        },

        postNewUser: function (newUser) {

            var postRequest = {
                method: 'POST',
                url: apiUrl,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: newUser
            };
            return $http(postRequest);
        }
    }
}]);


