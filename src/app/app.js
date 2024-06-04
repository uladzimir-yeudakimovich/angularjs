const myAngularJSApp = angular.module('myAngularJSApp', ['ngRoute', 'ngAnimate']);

myAngularJSApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'src/app/views/home.html',
            controller: 'AppController',
        })
        .when('/contact', {
            templateUrl: 'src/app/views/contact.html',
            controller: 'ContactController',
        })
        .when('/contact-success', {
            templateUrl: 'src/app/views/contact-success.html',
        })
        .when('/directory', {
            templateUrl: 'src/app/views/directory.html',
            controller: 'AppController',
        })
        .otherwise({
            redirectTo: '/home',
        });
}]);
