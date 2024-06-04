myAngularJSApp.controller('AppController', ['$scope', '$http', function($scope, $http){
    $scope.removeUser = function(user){
        const removeUser = $scope.users.indexOf(user);
        $scope.users.splice(removeUser, $scope.users.length);
    };
    
    $scope.addUser = function(){
        $scope.users.push({
            name: $scope.newUser.name,
            belt: $scope.newUser.belt,
            rate: parseInt($scope.newUser.rate),
            available: true,
        });

        // Clear the form fields
        $scope.newUser.name = "";
        $scope.newUser.belt = "";
        $scope.newUser.rate = "";

        // Reset form validation state
        $scope.userForm.$setPristine();
        $scope.userForm.$setUntouched();
    };

    $scope.removeAll = function(){
        $scope.users = [];
    };

    $http.get('src/data/users.json')
        .then(function(response){
            $scope.users = response.data;
        }, function(response) {
            console.log('Error: ' + response.status + ' - ' + response.statusText);
        });
}]);
