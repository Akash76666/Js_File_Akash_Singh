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

function firstFunction(){
    const Name="Akash"
    function secondFunction(){
        const website="Youtube"
        console.log(`The name is: ${Name} and Website is: ${website}`)
        // The name is: Akash and Website is: Youtube
    }
    // console.log(website)
    secondFunction()
}
// console.log(Name)
firstFunction()

function one(){
    const UserName="Akash"
    if(UserName==="Akash"){
        console.log(`Welcome ${UserName}`) // Welcome Akash
    }
    function two(){
        const website="Facebook"
        console.log(`User Log in to ${website}`) // User Log in to Facebook
    }
    // console.log(website)
    console.log(UserName) // Akash
    two() // Calling Function
}
one() // Calling Main Function

// ++++++++++++++++ Hoisting Facts ++++++++++++++++++++++++

const equal=add(10) //You can call function Before declaration
console.log(equal) // 11
function add(num){
    return num+1
}

/* const eqProp=addVar(10)  You cannot call function name or variable function before
Initialization this is because of Hoisting 
console.log(eqProp) */
const addVar=function(num){
    return num+2
}
const eqProp=addVar(10)  
console.log(eqProp)
