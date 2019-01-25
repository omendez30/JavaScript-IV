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
