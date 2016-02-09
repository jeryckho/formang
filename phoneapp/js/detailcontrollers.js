var phonecatControllers = angular.module('phonecatApp');

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    // $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
    //   $scope.phone = data;
    //   $scope.mainImgURL = data.images[0];
    // });

    $scope.phone = Phone.get( { phoneId: $routeParams.phoneId }, function(phone){ $scope.mainImgURL = phone.images[0] } );

    $scope.setImg = function( img ) {
      $scope.mainImgURL = img;
    };
  }]);
