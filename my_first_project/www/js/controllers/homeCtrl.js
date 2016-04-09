app.controller('HomeCtrl', function ($scope, $state, $window){
  $scope.counter = 0;
  $scope.items = {
    options: [
      { id: 1, name: "thing 1" },
      { id: 2, name: "thing 2" },
      { id: 3, name: "thing 3" },
      { id: 4, name: "thing 4" }
    ]
  };

  $scope.increment = ()=>{
    $scope.counter += 1;
    console.log($scope.counter);
  };

  $scope.goToState = (state)=>{
    $state.go(state);
  };
});
