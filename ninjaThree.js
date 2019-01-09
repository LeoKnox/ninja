class Ninja {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.strength = 3;
      this.speed = 3;
      
      sayName() {
        console.log("Ninja super secret name-dont tell anyone!: ${this.name}");
      }
    }
  }