myAngularJSApp.directive('randomUser', [function(){
    return {
        restrict: 'E',
        scope: {
            users: '=',
            title: '=',
        },
        templateUrl: 'src/app/views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.$watch('users', function(newVal) {
                if (newVal) {
                    $scope.random = Math.floor(Math.random() * newVal.length);
                }
            });
        }
    };
}]);
