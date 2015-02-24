app.controller('DogsCtrl', function DogsCtrl($scope, AnimalsFactory) {
  $scope.animals = AnimalsFactory.animals;
  $scope.AnimalsFactory = AnimalsFactory;

  $scope.dogs = []
  $scope.animals.forEach(function(animal) {
    if (animal.type === "Dog") {
      $scope.dogs.push(animal);
    }
  });


});
