angular.module('employeeForm', [])
.controller('employeeFormCtrl', ['$scope', function($scope) {
  // $scope.employee = {
  //   name: {
  //     firstName: 'Rahul',
  //     lastName: 'SP'
  //   },
  //   id: null,
  //   designation: '',
  //   dob: new Date('3 July 1988'),
  //   address: '',
  //   mobile: '',
  //   email: '',
  //   addedBy: ''
  // };
  $scope.employee = {
    name: {
      firstName: '',
      lastName: ''
    },
    id: null,
    designation: '',
    dob: null,
    address: '',
    mobile: '',
    email: '',
    addedBy: ''
  }
  $scope.employee.addedBy = $scope.loggedInUser.name;
  
  $scope.cuFaCls = 'fa-edit';
  $scope.cuFaCls = 'fa-check';
  $scope.cuFaCls = 'fa-plus';
}]);