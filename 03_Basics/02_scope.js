// All the variable available in global scope is accessible to Block scope

// But the variable in block scope does not accessible to global scope

let a=30
const b=40
var c=50
if(true){
    let a=10
    const b=20
    var c=23
  console.log("Value of a inside block scope:",a) // 10
  console.log("Value of b inside block scope:",b) // 20
  console.log("Value of c inside block scope:",c) // 23
}
console.log("Value of a outside block scope:",a) // 30
console.log("Value of b outside block scope:",b) //40
console.log("Value of c outside block scope:",c) //23
/*Here comes problem with var it is not a Block scope variable it do not work defferentlt
Block scope and Global Like let and const */
