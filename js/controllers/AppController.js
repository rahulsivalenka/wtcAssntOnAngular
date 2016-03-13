app.controller('AppController', [
  '$scope',
  'authenticate',
  '$timeout', // an angular wrapper for JS' setTimeout() function
  '$location',
  function($scope, authenticate, $timeout, $location) {
    // models for this view
    $scope.loggedInUser = {};

    // checking if the user is already logged in
    var auth = authenticate();
    if(auth.authenticated) {
      $scope.loggedInUser = auth.user;
    }
    /*var loggedInUser = JSON.parse(localStorage.getItem('auth'));
    if(Boolean(loggedInUser) // if the localStorage has the user auth obj
        && loggedInUser.authenticated) { // and if the user if authenticated      
      $scope.loggedInUser = loggedInUser;
      // redirecting to main page
      $location.path(EmployeeInfoApp.AUTH_URL + loggedInUser.id);
    } else {
      $location.path(EmployeeInfoApp.LOGIN_URL);
    }*/

    //opening toast when the openToast event is fired from any of the children
    $scope.$on('openToast', onOpenToast);
    function onOpenToast(event, toast) {
      console.log("onOpenToast", arguments);
      var msg = $scope.msg = toast.msg || "";
      
      if(msg.length) {
        // open toast
        toast.open = true;
        $scope.toast = toast;

        // close toast after 5 sec
        /*setTimeout(function() { 
          debugger; 
          
           * In normal JS callbacks, whatever updates
           * that are done directly to the scope variables
           * do not update the UI accordingly
           *    e.g.: $scope.toast.open = false; doesn't remove the class
           *    in our ng-class expression
           * for this $scope.$apply() function is to be used
           * Ref: http://jimhoskins.com/2012/12/17/angularjs-and-apply.html
           
          // $scope.toast.open = false; // doesn't work
          $scope.$apply(function() {
            $scope.toast.open = false;
          });
        }, 5000);*/
          
        // instead of the above $timeout can be used.
        // don't forget to inject the dependency!
        $timeout(function() {
          $scope.toast.open = false;
        },5000);
      } // if close
    } // onOpenToast ends

    /* logout */
    $scope.logout = function() {
      $scope.loggedInUser.authenticated = false;
      localStorage.setItem('auth', JSON.stringify($scope.loggedInUser));
      $scope.$emit('authenticate', {op: 'logout'});
    }

    /* event listeners */
    $scope.$on('$routeChangeStart', onRouteChangeStart);
    function onRouteChangeStart (e, nxt, curnt) {
      var auth = authenticate();
    }

    $scope.$on('authenticate', onAuthenticate);
    function onAuthenticate(e, xtra) {
      authenticate();
      if (xtra // any extra info exists
            && xtra.hasOwnProperty('op') // has op property
            && xtra.op === 'logout') { // if op is logout
        // then display logout successfull message
        $scope.$emit('openToast', {msg: 'Successfully logged out!', error: false});
      }
    }
  }
]);