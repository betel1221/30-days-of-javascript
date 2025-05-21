// const callback = (n) => {
//     return n ** 2
//   }
//   // function that takes other function as a callback
//   function cube(callback, n) {
//     return callback(n) * n
//   }
//   console.log(cube(callback, 3))

//   const higherOrder = n => {
//     const doSomething = m => {
//       const doWhatEver = t => {
//         return 2 * n + 3 * m + t
//       }
//       return doWhatEver
//     }
//     return doSomething
//   }
//   console.log(higherOrder(2)(3)(10))
//   console.log(doSomething(3)(10))
//   console.log(doSomething(10))


// function sayHello() {
//   console.log('Hello')
// }
// setInterval(sayHello, 1000) 

// function sayHello() {
//   console.log('Hello')
// }
// setTimeout(sayHello, 2000)


// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// console.log(sum)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) =>{
//   return name.toUpperCase()})
// console.log(namesToUpperCase)

// const countriesToUpperCase = countries.map((country) => {
//     return country.toUpperCase();
//   })

// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)

// console.log(numbersSquare)
// console.log(numbers)

// const names = ['Asabene', 'bMathias', 'Elias', 'Brook']
// const result = names.find((name) => name.length > 7)
// console.log(result)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]

 

// console.log(bools.some((b) =>  b === true))
// const areAllStr = names.some((name) => typeof name === 'string') // Are all strings ?
// console.log(areAllStr)

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]
  users.sort((a, b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
  })
  console.log(users)