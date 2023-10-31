// Singleton Object
Object.create

// Object Literal

const mykey=Symbol["Akash"]
const JsUser={
    name:"Akash",
    "Last Name": "Singh",
    [mykey]:"mykey1",
    "Reg_Id":12345,
    age:21,
    email:"akassing7877@gmail.com",
    isLoggedin:false,
    lastLogindays:["Monday","Tuesday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) // Behind the scene it stores in String

// console.log(JsUser.Last Name) You cannot access this type of varibale by these method
console.log(JsUser["Last Name"]) // You can access this variable by this method

console.log(JsUser.Reg_Id) // It can access this type of value

console.log(JsUser[mykey])

JsUser.email="akashsingh7877@yahoo.com" /* By this you can change the value of variable 
inside the object */

console.log(JsUser["email"])
// Object.freeze(JsUser) // Now if you try to change the value under object it does not change

JsUser.Reg_Id=23456
console.log(JsUser)

// const key=Symbol["key1"]
// const User={
//     [key]:"mykey"
// }

// console.log(User)

const key=Symbol("Kay2")
const obj={
    [key]:"mykey2"
}
console.log(obj)

JsUser.greeting=function(){
    console.log("Hello Js user")
}
console.log(JsUser.greeting()) // Hello Js user
console.log(JsUser)

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser: ${this.name} ${this["Last Name"]}`)
}

console.log(JsUser.greetingTwo()) // Hello JsUser: Akash Singh