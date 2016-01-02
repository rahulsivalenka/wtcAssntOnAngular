var app = angular.module(
  'EmployeeInfoApp', //module name
  [
    'ngRoute' //add route dependency to the module
  ]
); //module

//routing
app.config(function($routeProvider) {
  $routeProvider
    .when(App.LOGIN_URL, {
      controller: 'LoginController',
      templateUrl: 'views/login.html'
    })
    .when(App.AUTH_URL + ':uid', {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    })
    .otherwise({redirectTo: App.LOGIN_URL});
})