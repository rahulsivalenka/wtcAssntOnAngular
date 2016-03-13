app.controller('MainController', [
  // dependencies
  '$scope',
  '$routeParams',
  // controller logic
  function($scope, $routeParams) {
    /*local variables*/

    /*models for the view*/
    $scope.params = $routeParams;
    
    $scope.employees = [];
    $scope.employees = [{
      name: {
        firstName: 'Rahul',
        lastName: 'SP'
      },
      id: null,
      designation: '',
      dob: new Date('3 July 1988'),
      address: '',
      mobile: '',
      email: '',
      addedBy: ''
    }, {
      name: {
        firstName: 'Rahul',
        lastName: 'SP2'
      },
      id: null,
      designation: '',
      dob: new Date('3 July 1988'),
      address: 'Road No 8 Alkapuri, Hyderabad',
      mobile: '',
      email: '',
      addedBy: ''
    }, {
      name: {
        firstName: 'Rahul',
        lastName: 'SP3'
      },
      id: null,
      designation: '',
      dob: new Date('3 July 1988'),
      address: '',
      mobile: '',
      email: '',
      addedBy: ''
    }]
  }
]);