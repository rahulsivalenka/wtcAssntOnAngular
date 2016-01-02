app.controller('MainController', [
  // dependencies
  '$scope',
  '$routeParams',
  // controller logic
  function($scope, $routeParams) {
    /*local variables*/

    /*models for the view*/
    $scope.params = $routeParams;
  }
]);