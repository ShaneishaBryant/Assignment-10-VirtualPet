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

//instantiate two different static pets 
const myPet1 = new Pet("Burnie", "dog");
const myPet2 = new Pet("Poe", "dog");
console.log(myPet1.describe());
console.log(myPet2.describe());

//eventlistener for button click - update feed() method
const feedBtn = document.getElementById("feed-btn");
const hungerLevel = document.getElementById("hunger-level");

feedBtn.addEventListener('click', () => {
    myPet1.feed();
    hungerLevel.textContent = myPet1.hunger;
});

//function to read input field 
const nameInput = document.getElementById("petname-input");
const addPetBtn = document.getElementById("add-pet");
const petContainer = document.getElementById("pet-container");


addPetBtn.addEventListener('click', () => {
    //read value from input field 
    const petName = nameInput.value.trim();

    //instantiate a new pet 
    const newPet = new Pet(petName, "dog");

    //pet card - new HTML element 
    const petCard = document.createElement('div');
    petCard.className = "pet-card"; //assigning CSS

    const heading = document.createElement('h2');
    heading.textContent = newPet.describe();

    const paragraph = document.createElement('p');
    paragraph.textContent = "Hunger Level: ";

    const hungerDisplay = document.createElement('span');
    hungerDisplay.className = "hunger-display";
    hungerDisplay.textContent = newPet.hunger;

    paragraph.appendChild(hungerDisplay);

    const dynamicfeedBtn = document.createElement('button');
    dynamicfeedBtn.className = "dynamic-feed-btn";
    dynamicfeedBtn.textContent = "Feed Pet";

    petCard.append(heading, paragraph, dynamicfeedBtn);

    //attach click listener for specific pet's button
    dynamicfeedBtn.addEventListener('click', () => {
        newPet.feed();
        hungerDisplay.textContent = newPet.hunger;
    });

    //append card to container
    petContainer.appendChild(petCard);

    nameInput.value = "";
});