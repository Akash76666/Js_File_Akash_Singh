if(true){
    const user="Akash"
    console.log(`User-name is: ${user}`)
}
// <,>,<=,>=,==,!= // comparison oprerator
// === It is also check data type This is strick checking
//!== It is also a strict checking
if(2=="2"){
    console.log("executed") // It(==) does not check type of value
}

if(2==="2"){
    console.log("execute") /* Here it(===) do not execute beacuse it also checking type of
     both variable*/
}

if(2!="3"){
    console.log("Not equal to operator")
}

if(5!=="4"){
    console.log("Strick Not equal to operator")
}

const temperature=42

if(temperature<50){
    console.log(`The temperature is ${temperature}`)
}
console.log("Today is very hot")

if(temperature===42){
    console.log(`The temperature is ${temperature}`)
}
console.log("Today is very hot")

if(temperature===43){
    console.log("Yes it is")
}
else{
    console.log("No its not") //here it execute else block
}

const score=200
if(score>100){
    const power="fly"
    console.log(`User can: ${power}`) //User can: fly
}
//console.log(power) // It will give error beacause let and const are Block scope

/* Also a short hand method to execute Which is called ++ Impicit Scope ++  But it 
only written in same line */
const balance=1000
if(balance>500) console.log("balance is less")

if(balance < 500){
    console.log("Balance is less than 500")
}else if(balance < 750){
    console.log("Balance is less than 750")
}else if(balance < 900){
    console.log("Balance is less than 900")
}else{
    console.log("Balance is less than 1200")
}

const userLoggedIn=true
const debitcard=true
const userLogedinfromgoogle=true
const userLogedInfromEmail=false
/* Where we use && means all the value will be true then it goes under the 
condition and execute the statement if the any value will be false it do not execute 
the statement */

if(userLoggedIn && debitcard){
    console.log("Allow user to Buy product")
}

// Here if any one condition is true the code inside the if block will be executed
if(userLogedInfromEmail || userLogedinfromgoogle){
    console.log("User Logged")
}