function sayName(){
    console.log("A")
    console.log("k")
    console.log("a")
    console.log("s")
    console.log("h")
    
}
sayName()

function addTwoNumber(number1,number2){
     console.log(`Additon of two number: ${number1+number2}`)
}
let result=addTwoNumber(10,20) // 30
console.log(`The result is: ${result}`)// Undefined

function ProductofTwono(num1,num2){
    const resultpro=num1+num2
    return resultpro
}
const resultpro=ProductofTwono(10,20)
console.log("Result is: ",resultpro)

function sumOftwoNumber(n1,n2){
    return n1+n2
}
let result_of_sum=sumOftwoNumber(10,20)
console.log(result_of_sum)

function userLogIn(username){
    return `${username} just log in.`
}
// const user=userLogIn("")//  just log in.

// const user=userLogIn()// undefined just log in.

console.log(userLogIn("Vivek"))// Vivek just log in.

const user=userLogIn("Akash")
console.log(user)// Akash just log in.

function loginUser(username){
   if(username===undefined){
    console.log("please enter username")
    return
   }
    return `${username} Logged in`
}
// const logUser=loginUser()// please enter username
const logUser=loginUser("akash")
console.log(logUser)// akash Logged in

// Another method to to write this method
function userLogin(user){
    if(!user){
        console.log("Please enter username")
        return
    }
    return `${user} looged in`
}

const log=userLogin() 
console.log(log) // Please enter username
const loged=userLogin("Akash")
console.log(loged) // Akash looged in

// if you want it never goes to if block you can give the default value

function loginUser(user_name="sam"){
  if(!user_name){
    console.log("please enter username")
  }
  return `Username is ${user_name}`
}
console.log(loginUser()) /* Username is sam This is by default value it never goes 
in If block */
console.log(loginUser("Akash"))// Username is Akash