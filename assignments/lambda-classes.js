// CODE here for your Lambda Classes
//base class
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}
class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning ${subject}`);
  }

  grade(student, subject) {
    console.log(`${this.name} recieves a perfect score on ${subject}`);
  }
}
class Student extends Instructor {
  constructor(attr) {
    super(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }

  listSubjects(cb) {
    setTimeout(function() {
      cb(this.favSubjects);
    }, 500);
  }
  prAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(str) {
    console.log(`${this.name} has begun sprint challenge on ${str}`);
  }
}
