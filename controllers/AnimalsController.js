app.controller('AnimalsCtrl', function AnimalsCtrl($scope) {

  $scope.animals = [];

  $scope.addAnimal = function() {
    $scope.animals.push({
      name: $scope.animalName,
      type: $scope.animalType,
      adopted: false
    });
    $scope.animalName = null;
    $scope.animalType = "";
  };

  $scope.adopted = function(animal) {
    animal.adopted = true;
    alert("Adopted " + animal.name + " the " + animal.type + "! Yay!");
  };

});
