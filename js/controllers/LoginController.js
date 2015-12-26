app.controller('LoginController', [
  // dependencies
  '$scope', // an object that refers to application model
  '$http', // http service to communicate with HTTP servers
  // controller logic
  function($scope, $http) {
    // local variables
    var msg = "";

    // defining models for login view, the scope
    $scope.user = {name: '', password: ''};
    
    // handlers
    $scope.login = function(user) {

      // fetching the users data from the JSON file
      // API ref: https://docs.angularjs.org/api/ng/service/$http
      $http.post('resources/data/users.json').then(successCallBack, failureCallback);

      function successCallBack (response) {
        //'arguments' is an array of arguments that are passed to this function
        console.log("successCallBack", arguments);

        /** 
         * 'response' is an object that contains
         *  - config (Object)
         *  - data (response data)
         *  - headers (Function)
         *  - status (Integer)
         *  - statusText (String)
         */

        // validate the user login
        var isValid = false;
        response.data.forEach(function(userFetched) {
          if(userFetched.name === user.name
              && userFetched.password === user.password) {
            isValid = true;
            return;
          }
        });

        console.log(" isValid", isValid);
        if(isValid) { // login
          // TODO redirect to logged in page
        } else { // error
          msg = "Username or password is incorrect!";
          
          // opening the toast by firing a custom event,
          // up the hierarchy
          $scope.$emit('openToast', {msg: msg});
        }
      } // successCallback

      function failureCallback () {
        console.log("failureCallback", arguments);

        msg = "Couldn't connect to server at the moment!"
        $scope.$emit('openToast', {msg: msg});
      } // failureCallback
    }
  }
]);