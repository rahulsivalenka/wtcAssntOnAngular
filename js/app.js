var app = angular.module(
  'EmployeeInfoApp', //module name
  [
    'ngRoute', //add route dependency to the module
    'employeeForm'
  ]
); //module

//routing
app.config(function($routeProvider) {
  $routeProvider
    .when(EmployeeInfoApp.LOGIN_URL, {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .when(EmployeeInfoApp.AUTH_URL + ':uid', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .otherwise({redirectTo: EmployeeInfoApp.LOGIN_URL});
})