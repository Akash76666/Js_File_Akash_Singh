// Two ways to declare number
const num=2000

const num1=new Number(200)

console.log(num)
console.log(num1)
const str=num1.toString()
console.log(str)
console.log(typeof str)
console.log(num.toLocaleString())

const num2=-2345.678
console.log(num2.toFixed(2)) // -2345.68 it gives the value acoording to after point value
console.log(num2.toExponential(1)) // -2.3e+3
console.log(num2.toPrecision(6)) // -2345.68

console.log(num2.valueOf(2))

// ++++++++++++ Math+++++++++++++++++

const number=-16
const pos=Math.abs(number)
console.log(pos)
console.log(Math.sqrt(pos))

const number1=234.567
console.log(Math.round(number1))
console.log(Math.floor(number1))
console.log(Math.ceil(number1))
console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
const min=10
const max=20
console.log(Math.round(Math.random()*(max-min+1)+min))

//      ++++++++++++ Array +++++++++++++++++++
const arr=[10,20,30,40,"Akash"]
const arr1=["Vishal","vivek","Mayur"]
for(let i=0;i<arr.length;i++){
    console.log(typeof(arr[i]),":",arr[i])/* number : 10 number : 20 number : 30 number : 40
string : Akash */
} 

const arr2=[...arr1,...arr]
console.log(arr2)/* ['Vishal', 'vivek','Mayur', 10, 20, 30, 40, 'Akash'] */

const arr3=arr.concat(arr1)
console.log(arr3)

arr.push("Vaibhav")
arr.push(300)
console.log(arr)
arr.pop(4)
console.log(arr)
arr.reverse(arr)
console.log(arr)

arr.unshift("O position")
console.log(arr) // [ 'O position', 'Vaibhav', 'Akash', 40, 30, 20, 10 ]

arr.shift()
console.log(arr) // [ 'Vaibhav', 'Akash', 40, 30, 20, 10 ]

const arr4=(arr1,arr2)
console.log(arr4)

const array=[10,20,30,40,["Singh",23,56]]
console.log(array[4][1])
console.log(array.includes(10))
console.log(array.includes([4],"Singh"))

const str1=Array.from("Akash")
console.log(str1)
const str3="Singh"
console.log(Array.from(str3))

const newArray=[10,20,30,40,50]
const newArray1=[1,2,3,4,5,6]

const slice_pro=newArray.slice(1,4)
console.log(slice_pro)
console.log(newArray)

const splice_prop=newArray1.splice(1,4)
console.log(splice_prop)
console.log(newArray1)

const single_Array=[1,2,3,4,[3,4,5],5,6,7,[6,7,[5,7]]]
const con_array=single_Array.flat(1) //conveted into single array to depth One

const conArray2=single_Array.flat(2) ////conveted into single array to depth Two

console.log(single_Array)

console.log(con_array)// [ 1, 2, 3, 4, 3, 4, 5, 5, 6, 7, 6, 7, [ 5, 7 ] ]
console.log(conArray2)// [1, 2, 3, 4, 3, 4,5, 5, 6, 7, 6, 7,5, 7]

const a=10
const b=20
const c="Akash"
console.log(Array.of(a,b,c))// [ 10, 20, 'Akash' ] Convert all value to array

const d=Array.of(a,b,c)
console.log(d) // [ 10, 20, 'Akash' ]

//    ++++++++++++++++ Objects +++++++++++++++++++++++++
let obj1={
    name:"Akash",
    Roll_no:13,
    Email:"Akash@gmail.com"
}

let obj2={
    Reg_id:1,
    City:"Mumabi",
    State:"uttarpradesh",
}

console.log(obj1.Roll_no)

console.log(obj2.State)

console.log(obj1["Email"]) // You can also access like this

const {Email}=obj1
console.log(Email) // Another methos to access the value under object

obj1.sir_name="Singh"
console.log(obj1)

console.log(Object.keys(obj1)) /* It print all keys in array format 
[ 'name', 'Roll_no', 'Email', 'sir_name' ] */

console.log(Object.values(obj1))/* It print all value in array format
[ 'Akash', 13, 'Akash@gmail.com', 'Singh' ] */

console.log(Object.entries(obj1)) /* [[ 'name', 'Akash' ],[ 'Roll_no', 13 ],
    [ 'Email', 'Akash@gmail.com' ],[ 'sir_name', 'Singh' ]] */

const key=Symbol("mykey")

const newobject={
    name:"Avinash",
    [key]:"Akash",
    roll_no:10
}

console.log(newobject)

newobject.city=function(){
    console.log("Hello Js")
}

console.log(newobject)
console.log(newobject.city())
newobject.greeting=()=>{
    console.log(`the name is: ${this.name} and Roll_no is:${this["roll_no"]}`)
}
console.log(newobject.greeting())
console.log(newobject)

const User={
    Reg_id:121,
    fullName:{
          First_Name:"Akash",
          Last_name:"Singh"
    }
}

console.log(User) // { Reg_id: 121, fullName: { First_Name: 'Akash', Last_name: 'Singh' } }
console.log(User.fullName.First_Name) // Akash

const User1={
    name:"Akku",
    city:"Mumbai"
}

const User2={
    Id:1,
    Lastname:"Singh"
}

const user3={User1,User2}
console.log(user3)

const user4={...User1,...User2} //Merge array as much you want
console.log(user4) // { name: 'Akku', city: 'Mumbai', Id: 1, Lastname: 'Singh' }
console.log(Object.keys(user4))

const user5=Object.assign({},User1,User2)// //Merge array as much you want
console.log(user5)// { name: 'Akku', city: 'Mumbai', Id: 1, Lastname: 'Singh' }

console.log(User1.hasOwnProperty("name")) //True
