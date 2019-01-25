/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday
function Gameobject(createdAt) {
  this.createdAt = createdAt;
  this.dimensions = {
    length: 0,
    width: 0,
    height: 0
  };
}

Gameobject.prototype.destroy = function() {
  return "Object was removed from game";
};

Characterstats.prototype = Object.create(Gameobject.prototype);
function Characterstats(healthPoints, name) {
  Gameobject.call(this);
  this.name = name;
  this.healthPoints = healthPoints;
}

Characterstats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

Humanoid.prototype = Object.create(Characterstats.prototype);

function Humanoid(team, weapons, language) {
  Characterstats.call(this);
  this.team = team;
  this.weapons = weapons;
  this.language = language;
}

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
};
2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class Gameobject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.dimensions = {
      length: 0,
      height: 0,
      weight: 0
    };
  }
  destroy() {
    return "Object was removed from game";
  }
}

class Characterstats extends Gameobject {
  constructor(attributes) {
    super(attributes);
    this.name = attributes.name;
    this.healthpoints = attributes.healthpoints;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends Characterstats {
  constructor(attributes) {
    super(attributes);
    this.team = attributes.team;
    this.weapons = attributes.weapons;
    this.language = attributes.language;
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
