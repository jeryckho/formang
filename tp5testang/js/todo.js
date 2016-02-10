var app = angular.module('exampleApp',[]);
app.controller('monCtrl',function($scope,$http){
//  $scope.todos = ['a','b','C',"d"];

  $http.get('todos.json').success(function(data){
    $scope.todos = data;
  });

  $scope.addTodo = function(todo) {
    $scope.todos.push(angular.copy(todo));
  }
});
