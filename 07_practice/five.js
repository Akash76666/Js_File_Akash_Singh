function sayName(city){
    const f_name="Akash"
    const l_name="Singh"
    return `$My full name is:${f_name} ${l_name} and ${city}`
}
console.log(sayName("Mumbai"))
sayName.f_name="Akhilesh"
console.log(sayName("Delhi"))

function User(userName){
    if(userName===undefined){
        console.log("Username not entered")
    }
    console.log(`Username is:${userName}`)
}
User("Akash")

function calculateCartItem(...Item){
    console.log(Item[1]+Item[2])
    return `Items in cart is: ${Item}`
    
}
console.log(calculateCartItem(100,200,300,400))

const user={
    name:"Akash",
    City:"Mumbai"
}

function one(item){
   return `Name is:${item.name} and City is:${item.City}`
}
console.log(one(user))

function two(value){
    return `The name is:${value.name}, City is:${value.city} and Roll no is: ${value.Rollno}`
}
const obj=two(obj1={name:"Akash",
city:"Mumbai",
Rollno:101})
console.log(obj)

let arr=[10,20,30,40]
function arrayValue(arr){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(`Element of array is:${element}`)
    }
}
arrayValue(arr)

function ArrayFun(...arr){
    arr.flat()
    for(let i=0;i<arr.length;i++){
 console.log(arr[i])
    }
}
ArrayFun([10,20,30,40],[1,2,4,5,[202,30,40]])
