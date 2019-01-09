function Ninja(name) {
    this.name = name;
    this.health = 100;
    var strength = 3;
    var speed = 3;
    this.sayName = function() {
      console.log("Secret ninja name(do not print in console) = " + this.name);
    }
    this.showStats = function() {
      console.log("Ninja name: " + this.name + " ninja health: " + this.health + ", Speed: " + speed + ", Strength: " + strength);
    }
    this.drinkSake = function() {
      this.health += 10;
      console.log('hmmm goood +10 to ' + this.health);
    }
    this.punch = function(victum) {
      console.log(this.name + " secret ninja punches " + victum.name + " for 5 health");
      victum.health -= 5;
    }
    this.kick = function(victum) {
      console.log(this.name + " no shadow ninja kicks " + victum.name + " for 15 health");
      victum.health =- 15;
    }