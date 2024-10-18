//complete this code
class Animal {constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound the animal makes
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }}

class Dog extends Animal {
	constructor(species) {
        super(species); // Call the parent class constructor
    }

    // Method to log "woof" to the console
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}

const myDog = new Dog("Golden Retriever")
const myCat = new Cat("Siamese")

myDog.makeSound();
myCat.makeSound();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
