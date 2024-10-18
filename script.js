//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species
	}
	makeSound(){
		console.log(`The ${this._species} make sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log('woof')
	}
}

class Cat extends Animal {
	purr() {
    console.log("purr");}
}

const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();

 const myCat = new Cat("Siamese"); 
myCat.makeSound(); 
myCat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
