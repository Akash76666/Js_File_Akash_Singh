// Primitive Data type
// 7 types: String,Number,Symbol,Boolean,null,undefined,BigInt

let a=10
const b="Akash";

let i=Symbol(10)
let j=Symbol(10)
// console.table(a,b)
console.log(i===j)

// Referernce Data type(non-primitive)

// Array Type
let str1=["Akash","Akhilesh","Vivek"]
console.log(str1[1])

// Object Type

let obj={
    x:10,
    y:"Akash",
    func:function a(){
        console.log("Hello")
    }
}

// Function

const myFunction=function a(para1){
    console.log("Declaring function in variable")
    console.log(para1)
}
myFunction("Argument in function");

let v=null
console.log(typeof a); //number
console.log(typeof obj); //object
console.log(typeof myFunction); //function
console.log(str1); //[ 'Akash', 'Akhilesh', 'Vivek' ]
console.log(i); //Symbol(10)
console.log(typeof v); // object