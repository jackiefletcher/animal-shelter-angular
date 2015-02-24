app.factory('AnimalsFactory', function AnimalsFactory() {

  var factory = {};
  factory.animals = [
    { name: "Layla",
      type: "Dog",
      dogBreed: "Husky",
      adopted: false,
      filename: "img/layla.jpg"
    },
    { name: "Margaret",
      type: "Dog",
      dogBreed: "Labrador - Pit Bull",
      adopted: false,
      filename: "img/margaret.jpg"
    },
    { name: "Big Ben",
      type: "Dog",
      dogBreed: "Terrier - Beagle",
      adopted: false,
      filename: "img/bigben.jpg"
    },
    { name: "Cynthia",
      type: "Dog",
      dogBreed: "Terrier - Beagle",
      adopted: false,
      filename: "img/cynthia.jpg"
    },
    { name: "Diva",
      type: "Dog",
      dogBreed: "Poodle Miniature",
      adopted: false,
      filename: "img/diva.jpg"
    },
    { name: "Squeak",
      type: "Dog",
      dogBreed: "Staffordshire",
      adopted: false,
      filename: "img/squeak.jpg"
    },
    { name: "Darling Quintessa",
      type: "Horse",
      adopted: false,
      filename: "img/quintessa.jpg"
    },
    { name: "Teeny Tembo",
      type: "Elephant",
      adopted: false,
      filename: "img/elephant.jpg"
    },
    { name: "Clementine",
      type: "Bunny",
      adopted: false,
      filename: "img/clementine.jpg"
    },
    { name: "Casper",
      type: "Bunny",
      adopted: false,
      filename: "img/casper.jpg"
    },
    { name: "Bitsy",
      type: "Bunny",
      adopted: false,
      filename: "img/bitsy.jpg"
    },
    { name: "Carl",
      type: "Cat",
      adopted: false,
      filename: "img/carl.jpg"
    },
    { name: "Boots",
      type: "Cat",
      adopted: false,
      filename: "img/boots.jpg"
    },
    { name: "Apache",
      type: "Cat",
      adopted: false,
      filename: "img/apache.jpg"
    },
    { name: "Freya",
      type: "Goat",
      adopted: false,
      filename: "img/freya.jpg"
    },
    { name: "Greta",
      type: "Pig",
      adopted: false,
      filename: "img/pig.jpg"
    }
  ];

  factory.addAnimal = function() {
    factory.animals.push({
      name: factory.animalName,
      type: factory.animalType,
      dogBreed: factory.dogBreed,
      adopted: false
    });
    factory.animalName = null;
    factory.dogBreed = null;
    factory.animalType = "";

    debugger;
  };

  factory.adopted = function(animal) {
    animal.adopted = true;
    alert("Adopted " + animal.name + " the " + animal.type + "! Yay!");
  };

  return factory;
});
