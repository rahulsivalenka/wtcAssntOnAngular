// registering a service with the app
/**
 * this service is to be used for authentication and redirection
 * on every page
 */
app.factory('authenticate', [
  '$location',
  function($location) {
    return function () {
      var loggedInUser = JSON.parse(localStorage.getItem('auth'));
      if(Boolean(loggedInUser) // the auth info exists
          && loggedInUser.authenticated) { // and the user is authenticated
        // redirecting to the main page
        $location.path(App.AUTH_URL + loggedInUser.id);
        return {
          authenticated: true,
          user: loggedInUser
        }
      } else {
        // user not authenticated
        // redirect to login page
        $location.path(App.LOGIN_URL);
        return {
          authenticated: false
        };
      }
    }
  },
]);