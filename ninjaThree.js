class Ninja {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  sayName() {
    console.log(`Ninja super secret name-dont tell anyone!: ${this.name}`);
  }
  showStats() {
    console.log(`Ninja: ${this.name} - Health: ${this.health} : Strength: ${this.strength} : Speed: ${this.speed}`);
  }
  drinkSake() {
    console.log("Chug chug");
    this.health += 10;
  }
}

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.strength = 10;
    this.speed = 10;
    this.wisdom = 10;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("What is the sound of three hands clapping?");
  }
}