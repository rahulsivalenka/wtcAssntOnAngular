app.controller('LoginController', [
  // dependencies
  '$scope', // an object that refers to application model
  '$http', // http service to communicate with HTTP servers
  '$location', // parses window.location
  // controller logic
  function($scope, $http, $location) {
    /*local variables*/
    var toast = {};

    /*defining models for login view, the scope*/
    $scope.user = {name: '', password: ''};
    
    /*handlers*/
    /*login handler*/
    $scope.login = function(user) {
      var userObj = {};

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

            // setting the app user info
            userObj = {
              name: userFetched.name,
              id: userFetched.id
            };

            return;
          }
        });

        console.log("isValid", isValid);
        if(isValid) { // login
          // adding authentication to the user obj
          userObj.authenticated = true;
          console.log('logging in...', userObj);

          //setting the user object for the app
          $scope.$parent.loggedInUser = userObj;
          // $scope.$parent.$digest();
          localStorage.setItem('auth', JSON.stringify(userObj));
          $scope.$emit('authenticate');
          
          // redirect to logged in page
          $scope._redirectPage(App.AUTH_URL + userObj.id);

          toast.msg = "Login successfull."
          toast.error = false;
        } else { // error
          toast.msg = "Username or password is incorrect!";
          toast.error = true;
        }

        $scope.$emit('openToast', toast);
      } // successCallback

      function failureCallback () {
        console.log("failureCallback", arguments);

        toast.msg = "Couldn't connect to server at the moment!"
        toast.error = true;
        $scope.$emit('openToast', toast);
      } // failureCallback
    }; //login ends

    $scope._redirectPage = function($location, route) {
      $location.path(route);
    }.bind(this, $location); //_redirectPage ends
  }
]);