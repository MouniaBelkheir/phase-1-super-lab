// Write your classes here
// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class that extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Deciduous trees shed their leaves annually.";
    }
  }
  
  // Define the Evergreen class that extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species); // Call the parent class constructor
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Evergreens keep their leaves all year round.";
    }
  }
  
  // Testing the classes
  const oak = new Deciduous("Oak", "Common Oak");
  const pine = new Evergreen("Pine", "Scots Pine");
  
  console.log(oak.species); // Output: Oak
  console.log(oak.name); // Output: Common Oak
  console.log(oak.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  console.log(pine.species); // Output: Pine
  console.log(pine.name); // Output: Scots Pine
  console.log(pine.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  