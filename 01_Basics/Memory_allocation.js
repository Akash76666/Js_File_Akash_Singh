// Primitive value is stored in Stack
// Reference type is stored in heap

/* It generate the copy of value.If you change the another value it is not change 
in the original value */
let myName="Akash"
let Name=myName
myName="Akhil"

console.log(Name)
console.log(myName)

/* Reference type gives the refrence og value it does not give the copy 
if you change the one object value ita also chnage in original value */

let obj1={
    a:10,
    b:"Akash"
}

let obj2=obj1
obj2.a=20
obj2.b="Bheem"
console.log("Reference type value: ",obj1.a) // Reference type value:  20
console.log("Reference type value: ",obj1.b) // Reference type value:  Bheem
console.log(obj2.a) //20
console.log(obj2.b) //Bheem