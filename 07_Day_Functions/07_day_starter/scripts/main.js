// function sumArrayValues(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum = sum + arr[i];
//     }
//     return sum;
//   }
//   const numbers = [1, 2, 3, 4, 5];
//       //calling a function
//   console.log(sumArrayValues(numbers));


// function sum(x){
//     let add=0
//     for(let i=0; i<num.length;i++){
//         add=add+num[i]
//     }
//     return add
// }
// const num=[1,2,3,4,5,6,7,8,9,10]
// console.log(sum(num))

// const areaOfCircle = (radius) => {
//     let area = Math.PI * radius * radius;
//     return area;
//   }
// console.log(areaOfCircle(2))

// function sumAllNums() {
//     console.log(arguments)
//   }
  
//   sumAllNums(1, 2, 3, 4)

// const sumAllNums = (...args) => {
//     // console.log(arguments), arguments object not found in arrow function
//     // instead we use a parameter followed by spread operator (...)
//     console.log(args)
//   }
  
//   sumAllNums(1, 2, 3, 4)



// const square =(n)=> {
//   return n * n
// }

// console.log(square(2))

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// function greetings(name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh'))

// function weightOfObject(mass, gravity = 9.81) {
//   let weight = mass * gravity + ' N' // the value has to be changed to string first
//   return weight
// }

// console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
// console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon





function fullname(){
fname=prompt('enter your first name')
lname=prompt('enter your last name')
age=prompt('enter your age')
department=prompt('enter your department')
console.log(`my name is ${fname} ${lname}, i am ${age} years old, i am in ${department} department.`)
}
fullname()

