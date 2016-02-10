var app = angular.module('exampleApp',[]);
app.controller('monCtrl',function($scope){
  $scope.todos =['a','b','C',"d"];

  $scope.addTodo = function(todo) {
    $scope.todos.push(angular.copy(todo));
  }
});
