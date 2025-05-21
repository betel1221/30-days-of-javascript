// const rect={
//     width:20,
//     height:10
//   }
//   const perimeter=rectt=>{
//     return 2*(rect.width+rect.height)
//   }

//   console.log(perimeter(rect))

// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }
// const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.slice(0, -1).join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.slice(0, -1).join(', ')
  
//     let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
//     return personInfo
//   }
  
//   console.log(getPersonInfo(person))

// const sumAllNums = (...args) => {
//     console.log(args)
//   }
  
//   sumAllNums(1, 2, 3, 4, 5)
//   sumAllNums(1, 2, 3, 4, 5,6)


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5))