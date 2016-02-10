
describe("Test du controller Todo", function() {
  var controller;
  var mScope = {};

  beforeEach(angular.mock.module('exampleApp'));
  beforeEach(angular.mock.inject(function($controller,$rootScope){
    mScope = $rootScope.$new();
    controller = $controller("monCtrl",{$scope:mScope});

  }));

  beforeEach(function(){
    mScope.todos = ['Z','W'];
  });

  it('check init state', function(){
    expect(mScope.todos.length).toBe(2);
  });

  it("adds todo", function() {
    var lgBefore = mScope.todos.length;
    mScope.addTodo('todo');
    var lgAfter = mScope.todos.length;
    expect(lgAfter).toBe(lgBefore+1);
  });
});
