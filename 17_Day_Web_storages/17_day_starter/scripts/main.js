const student={
    'fname':'betty',
    'lname':'hiluf',
    'age':20,
    'skills':['draw','code','edit']
}
const jstudent=JSON.stringify(student,undefined,2)
localStorage.setItem('student',jstudent)
// localStorage.setItem('age', 200)
console.log(student)
