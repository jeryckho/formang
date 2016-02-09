var phonecatControllers = angular.module('phonecatApp');

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
      $scope.mainImgURL = data.images[0];
    });
    $scope.setImg = function( img ) {
      $scope.mainImgURL = img;
    };
  }]);
