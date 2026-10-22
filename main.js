class Pet{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    describe() {
        return `I am a ${this.type} named ${this.name}.`
    }
}

//instantiate two different pets 
const myPet1 = new Pet("Burnie", "dog");
const myPet2 = new Pet("Poe", "dog");
//print results
console.log(myPet1.describe());
console.log(myPet2.describe());