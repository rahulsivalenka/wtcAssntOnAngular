app.controller('MainController', [
  '$scope',
  '$timeout', // an angular wrapper for JS' setTimeout() function
  function($scope, $timeout) {
    //opening toast when the openToast event is fired from any of the children
    $scope.$on('openToast', onOpenToast);
    function onOpenToast(event, args) {
      console.log("onOpenToast", arguments);
      var msg = $scope.msg = args.msg || "";
      
      if(msg.length) {
        // open toast
        $scope.openToast = true;

        // close toast after 5 sec
        /*setTimeout(function() { 
          debugger; 
          
           * In normal JS callbacks, whatever updates
           * that are done directly to the scope variables
           * do not update the UI accordingly
           *    e.g.: $scope.openToast = false; doesn't remove the class
           *    in our ng-class expression
           * for this $scope.$apply() function is to be used
           * Ref: http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
           
          // $scope.openToast = false; // doesn't work
          $scope.$apply(function() {
            $scope.openToast = false;
          });
        }, 5000);*/
          
        // instead of the above $timeout can be used.
        // don't forget to inject the dependency!
        $timeout(function() {
          $scope.openToast = false;
        },5000);
      } // if close
    }
  }
]);