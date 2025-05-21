// const name={
//     fname:'betty',
//     lname:'hiluf'
//   }
//   console.log(name)

  // const person = {
  //   firstName: 'Asabeneh',
  //   lastName: 'Yetayeh',
  //   age: 250,
  //   country: 'Finland',
  //   city: 'Helsinki',
  //   skills: [
  //     'HTML',
  //     'CSS',
  //     'JavaScript',
  //     'React',
  //     'Node',
  //     'MongoDB',
  //     'Python',
  //     'D3.js'
  //   ],
  //   getFullName: function() {
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }
  // person.nationality = 'Ethiopian'
  // person.country = 'Finland'
  // person.title = 'teacher'
  // person.skills.push('Meteor')
  // person.skills.push('SasS')
  // person.isMarried = true
  
  // person.getPersonInfo = function() {
  //   let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
  //   console.log(skillsWithoutLastSkill)
  
  //   let lastSkill = this.skills.splice(this.skills.length - 1)[0]
  //   console.log(lastSkill)
  
  //   // let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  //   // let fullName = this.getFullName()
  //   // let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  //   // return statement
  // }
  // console.log(person)
  // console.log(person.getPersonInfo())
  const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city:'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
   
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  // console.log(copyPerson)
  // console.log(person.getPersonInfo())
  const keys = Object.keys(copyPerson)
  console.log(keys)
  console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('finland'))