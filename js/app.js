var app = angular.module(
  'EmployeeInfoApp', //module name
  [
    'ngRoute' //add route dependency to the module
  ]
); //module

//routing
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .otherwise({redirectTo: '/'});
})