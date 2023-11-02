// this keyword refers to current context 
// this keyword only works like this  inside the object but not work like that in function

const user={
    name:"Akash",
    Roll_no:1,
    welComeUser:function(){
        console.log(`UserName is: ${this.name}  and  Roll no is: ${this.Roll_no}`)
        console.log(this) /* this keyword gives current context like: { name: 'Hitesh', Roll_no: 1,
         welComeUser: [Function: welComeUser] } 
         { name: 'Hitesh', Roll_no: 1, welComeUser: [Function: welComeUser] }*/
    }
    
}
console.log(user.welComeUser())
user.name="Hitesh"
console.log(user.welComeUser())
console.log(this) // {}

function myfunction(){
    console.log("Akash")
    const username="akash123"
    console.log(this.username)/* undefined //this do not work same in the object and 
    function */
    console.log(this) //Here this give all Web API names
}
myfunction()

const disp=function (){
    console.log()
    console.log(this) // Here also this gives or show the API's 
}
disp()

const arr=()=>{
    console.log()
    console.log(this) // But in arrow function this give empty value Like {}
}
arr()
const add=(num1,num2)=>{
  return (num1+num2)
}
console.log(add(10,20)) // 30

/* ++ Also you can write using (Implicit return) means you do not have to write 
return keyword ++ */
const sum=(num1,num2)=> (num1+num2) // Implicit return
console.log(sum(5,20)) // 25 

// +++++ For implicit return you have to write under () ++++++
//   For Example

const mul=(n1,n2)=>({name:"Akash",Roll_no:1,Username:"ak123"}) // Implicit return
//console.log(mul(2,3)) // undefined

console.log(mul()) // { name: 'Akash', Roll_no: 1, Username: 'ak123' }

console.log(Object.keys(mul())) // [ 'name', 'Roll_no', 'Username' ]

const sumOfnumber=(n1,n2)=>((`Additionb of two number is: ${n1+n2}, Substraction of two number ${n2-n1}`))
console.log(sumOfnumber(10,20)) /* Addition of two number is: 30, Substraction of two number 10 */

const prod=(n1,n2)=>((n1*n2))
console.log(prod(2,3)) // 6

