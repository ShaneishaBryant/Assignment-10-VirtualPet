class Pet{
    constructor(name, type){
        this.name = name;
        this.type = type;
        this.hunger = 50;
    }
    describe() {
        return `I am a ${this.type} named ${this.name}.`
    }
    //method to decrease hunger value 
    feed(){
        this.hunger -= 10;
    }
}

//instantiate two different pets 
const myPet1 = new Pet("Burnie", "dog");
const myPet2 = new Pet("Poe", "dog");
//print results
console.log(myPet1.describe());
console.log(myPet2.describe());

//eventlistener for button click - update feed() method
const feedBtn = document.getElementById("feed-btn");
const hungerLevel = document.getElementById("hunger-level");

feedBtn.addEventListener('click', () => {
    myPet1.feed();
    hungerLevel.textContent = myPet1.hunger;
});