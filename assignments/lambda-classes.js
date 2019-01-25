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
class Projectmanager extends Instructor {
  constructor(attr) {
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }

  standUp(sc) {
    console.log(`${this.name} announces to ${sc}, @channel standy times!`);
  }

  debugsCode(obj, sub) {
    console.log(`${this.name} debugs ${obj.name}'s code on ${sub}`);
  }
}

const student1 = new Student({
  previousBackground: "Python",
  className: "CS10",
  favSubjects: "Constructors and prototypes",
  favLanguage: "Ruby",
  name: "Anthony",
  age: 23,
  location: "Dallas, TX"
});

const projectManager1 = new Projectmanager({
  gradClassName: "CS2",
  favInstructor: "Josh",
  specialty: "React",
  catchPhrase: "To infinity anf beyond!",
  name: "John"
});

console.log(student1.prAssignment("CSS"));
console.log(student1.sprintChallenge("Javascript Fundamentals"));
console.log(projectManager1.standUp("@webpt4"));
console.log(projectManager1.specialty);
