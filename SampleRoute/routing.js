var myApp = angular.module('myApp', []);

function configRoute($routeProvider)
{
    $routeProvider
        .when('/',
        {
            controller : Page1Controller,
            templateUrl : 'page1.html'
        })
        .when('/page1',
        {
            controller : Page1Controller,
            templateUrl : 'page1.html'
        })
        .when('/page2',
        {
            controller : Page2Controller,
            templateUrl : 'page2.html'
        })
        .when('/page3',
        {
            controller : Page3Controller,
            templateUrl : 'page3.html'
        })
        .otherwise(
        {
            redirectTo : '/'
        }
    );
}
myApp.config(configRoute);


function Page1Controller($scope)
{
    $scope.someText = "This is page 1";
}

function Page2Controller($scope)
{
    $scope.someText = "This is page 2";
}

function Page3Controller($scope)
{
    $scope.someText = "This is page 3";
}