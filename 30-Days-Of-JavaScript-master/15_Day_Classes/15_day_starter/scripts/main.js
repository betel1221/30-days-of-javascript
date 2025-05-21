

// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
//   get getScore() {
//     return this.score
//   }
//   get getSkills() {
//     return this.skills
//   }
//   set setScore(score) {
//     this.score += score
//   }
//   set setSkill(skill) {
//     this.skills.push(skill)
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''

//     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }
//   static favoriteSkill() {
//     const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
//     const index = Math.floor(Math.random() * skills.length)
//     console.log('hi')
//     return skills[index]
//   }
// }

// console.log(Person.favoriteSkill())

// class Student extends Person {
//   constructor(firstName, lastName, age, country, city, gender) {
//     super(firstName, lastName, age, country, city)
//     this.gender = gender
//   }

//   saySomething() {
//     console.log('I am a child of the person class')
//   }
//   getPersonInfo() {
//     let fullName = this.getFullName()
//     let skills =
//       this.skills.length > 0 &&
//       this.skills.slice(0, this.skills.length - 1).join(', ') +
//         ` and ${this.skills[this.skills.length - 1]}`

//     let formattedSkills = skills ? `He knows ${skills}` : ''
//     let pronoun = this.gender == 'Male' ? 'He' : 'She'

//     let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
//     console.log(this)
//     return info
//   }
// }

// const s1 = new Student(
//   'Asabeneh',
//   'Yetayeh',
//   250,
//   'Finland',
//   'Helsinki',
//   'Male'
// )
// const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
// s1.setScore = 1
// s1.setSkill = 'HTML'
// s1.setSkill = 'CSS'
// s1.setSkill = 'JavaScript'

// s2.setScore = 1
// s2.setSkill = 'Planning'
// s2.setSkill = 'Managing'
// s2.setSkill = 'Organizing'

// console.log(s1)
// console.log(s2)

// console.log(s1.saySomething())
// console.log(s1.getFullName())
// console.log(s1.getPersonInfo())

// console.log(s2.saySomething())
// console.log(s2.getFullName())
// console.log(s2.getPersonInfo())

// class Person {
//   constructor(firstName, lastName) {
//     console.log(this) // Check the output from here
//     this.firstName = firstName
//     this.lastName = lastName
//   }
// }

// const person = new Person()

// console.log(person)
// class Person {
//   constructor(firstName, lastName, age, country, city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.country = country
//     this.city = city
//     this.score = 0
//     this.skills = []
//   }
//   getFullName() {
//     const fullName = this.firstName + ' ' + this.lastName
//     return fullName
//   }
//   get getScore() {
//     return this.score
//   }
//   get getSkills() {
//     return this.skills
//   }
//   set setScore(score) {
//     this.score += score
//   }
//   set setSkill(skill) {
//     this.skills.push(skill)
//   }
// }

// const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
// const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

// person1.setScore = 1
// person1.setSkill = 'HTML'
// person1.setSkill = 'CSS'
// person1.setSkill = 'JavaScript'

// person2.setScore = 1
// person2.setSkill = 'Planning'
// person2.setSkill = 'Managing'
// person2.setSkill = 'Organizing'

// console.log(person1.score)
// console.log(person2.score)

// console.log(person1.skills)
// console.log(person2.skills)

// class me{
// constructor(nm,sx,dep){
//     this.nm=nm
//     this.sx=sx
//     this.dep=dep
//     this.score=0
//     this.jh='bb'
//   }
//   get myname(){
//     return  this.nm
//   }
//   set myname(nm){
//     return  this.nm='jj'
//   }
// }
// const betty= new me('betty','f','soft')
// const biruk= new me('biruk','m')
// console.log(betty)
// console.log(biruk)
// console.log(betty.myname) 
// biruk.myname='hy'
// console.log(biruk.myname) 

// //Create an Animal class. The class will have name, age, color, legs properties and create different methods

// class Animal{
// constructor(name,age,color,legs){
//   this.name=name
//   this.age=age
//   this.color=color
//   this.legs=legs
// }
// describe(){
//   return `my dog name is ${this.name}  , ${this.age} years old, has ${this.color} color and is ${this.legs}`
// }
// static compare(comp1,comp2){
//   if (comp1.age>comp2.age){
//     return `${comp1.name} is older than ${comp2.name}`
// }
// else{
//   return `${comp2.name} is older than ${comp1.name}`
// }
// }

// }
// const dog1 = new Animal('max','2','black',4)
// const dog2 = new Animal('jack','3','white',4)
// console.log(dog1.describe())
// console.log(dog2.describe())  // my dog name is jack  , 3 years old
// console.log(Animal.compare(dog1,dog2))

class Animal{
  constructor(name,age,color,legs){
    this.name=name
    this.age=age
    this.color=color
    this.legs=legs
}
describe(){
    return `my dog name is ${this.name}  , ${this.age} years old, has ${this.color} color and is ${this.legs}`
  }
  static compare(comp1,comp2){
    if (comp1.age>comp2.age){
      return `${comp1.name} is older than ${comp2.name}`
  }
  else{
    return `${comp2.name} is older than ${comp1.name}`
  }
  }

}
class Dog extends Animal{
  constructor(name,age,color,legs,allergy){
    super(name,age,color,legs)
    this.allergy=allergy
  }
  speak() {
    return `${this.name} makes a sound!`;
  }
}
class Cat extends Animal{
  constructor(name,age,color,legs,breed){
    super(name,age,color,legs)
    this.breed=breed
  }
  speak() {
    return `${this.name} meows: Meow meow! 🐱`;
  }
}

const dog1 = new Dog('max','2','black',4,'peanut')
const cat1 =new Cat('jack','3','white',4,'persian')

console.log(dog1.speak())
console.log(cat1.speak())