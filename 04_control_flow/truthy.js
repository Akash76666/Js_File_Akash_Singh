const userName="akash"

if(userName){
    console.log("Got username")
}
else{
    console.log("Do not get username yet")
}

// falsy Values
// 0 ,  -0,  "",  null,  undefined,  BigInt 0n,  NaN

// Truthy Values
// [],  "0",  'false',  " ",  {},  function (){}

// How to check empty array in Condition Statement
const arr=[]
if(arr.length===0){
    console.log(true)
}

// How to check Empty Object in Condition Statement
const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("Empty Object")
}

// Nullish Coalescing Operator (??) null undefined
/* In this if null value comes from the database or null value from any other server
so its takes the second value because sometimes null not good for code */

let var1;
var1=5 ?? 10
console.log(var1) // 5

let var2
var2=null ?? 10
console.log(var2) // 10

let var3
var3=undefined ?? 20
console.log(var3) //20

let var4= undefined ?? 10 ?? 20
console.log(var4) // 10

// Terniary Operator
// condition ? true : false
let snacksPrice=100
snacksPrice >= 80 ? console.log("Greater than 80") :console.log("less than 80")

let waterBottleprice=50
waterBottleprice<=40 ? console.log("less than 40") :console.log("greater than 40")


