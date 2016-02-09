var phonecatControllers = angular.module('phonecatApp');

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function ($scope, Phone) {
    // $http.get('phones/phones.json').success(function(data) {
    //   $scope.phones = data;
    // });
    $scope.phones = Phone.query();

    $scope.orderProp = 'age';
  }]);
