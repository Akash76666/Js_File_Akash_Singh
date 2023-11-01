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

// +++++ We can take multiple value in one argument using Rest Operator++++++++

function calculateCartItem(item1){
     return `items in cart: ${item1}`
}
const items=calculateCartItem(100,200,300) // By these method you can only add 1 item 
console.log(items) // items in cart: 100

//   But using rest Operator you can add or access many values or items

function calculateItemsPrice(...item){
     return `Items in the cart are: ${item}`
}
const calItem=calculateItemsPrice(100,200,300,400,1000)
console.log(calItem) // Items in the cart are: 100,200,300,400,1000

function calculateItems(val1,val2,...p_Items){
   return `Value of first(val1): ${val1},Value of Second(val2):${val2},Rest are in 
   p_Items(p_Items): ${p_Items}` 
}
const allValue=calculateItems(100,200,1300,300,400,500)

console.log(allValue)/*Value of first(val1): 100,Value of Second(val2):200,
Rest are in p_Items(p_Items): 1300,300,400,500 */

// ++++++++++++++++ passing object under Function +++++++++++++
const User={
    name:"Akash",
    city:"Mumbai"
}

function handleObject(obj){
  return `User Object Name: ${obj.name},    User Object city: ${obj.city}`
}
const value=handleObject(User)
console.log(value)// User Object Name: Akash,    User Object city: Mumbai

function hanadlingObject(obj1){
    return `Username is:${obj1.Username},   Roll_no is:${obj1.Roll_no}`
}
const handleValue=hanadlingObject({
    Username:"Akash123",
    Roll_no:123
})
console.log(handleValue)// Username is:Akash123,   Roll_no is:123

//   +++++++++++++ Passing Array in Function ++++++++++
const array=[2000,3000,4000,5000]
function handleArray(arr){
    return `First Array is: ${arr[1]},   Second Array is: ${arr[3]}`
}
const arrValue=handleArray(array)
console.log(arrValue) // First Array is: 3000,   Second Array is: 5000

function handlingArray(arr1){
  return `Second element is: ${arr1[1]},   Third element is: ${arr1[2]}`
}
const arrayValue=handlingArray(
    [200,30,40,100]
)
console.log(arrayValue)// Second element is: 30,   Third element is: 40