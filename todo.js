angular.module('todoApp',[])


function TodoCtrl($scope){

  $scope.todos = [
    {text:'Learn AngualrJS', done:false},
    {text:'Build an app', done:false}
    ];

  $scope.getTotalTodos = function(){
    return $scope.todos.length;
  }

  $scope.getCompletedTodos = function(){
    counter = 0;
    for (var i=0; i<$scope.todos.length; i++){
      if ($scope.todos[i].done)
        counter++;
    }
    return counter;
  }

  // $scope.clearCompleted = function(){
  //   for (var i=0; i<$scope.todos.length; i++){
  //     if ($scope.todos[i].done)
  //       $scope.todos.splice(i,1);
  //   }
  // }

  $scope.clearCompleted = function(){
    $scope.todos = _.filter($scope.todos, function(todo){
      return !todo.done;
    })

  }

  $scope.addTodo = function(){
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  }
}
