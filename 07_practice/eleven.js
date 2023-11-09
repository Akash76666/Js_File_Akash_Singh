const newArr=[10,20,30,40]
newArr.forEach((item,index,arr)=>{
    console.log(`${index}:-${item} and ${arr}`)
})

const myArr=[{
    name:"Akash",
    lastName:"Singh",
    arr:["Akash","Dev"]
   },
     {
    name:"Dusgesh",
    lastName:"Yadav",
    arr:["Akash","Dev"]
   },
    {
    name:"Akash",
    lastName:"Singh",
    arr:["Akash","Dev"]
   }
]
myArr.forEach((value)=>{ 
    console.log(`The firstname is: ${value.name} and Last name is:${value.lastName}
    Array of two Name:${value.arr}`)
})

const newArray=[
    {
        userName:"akash123",
        password:1234,
        arr:[10,20,30,40]
    },
    {
        userName:"akash123",
        password:1234,
        arr:[10,20,30,40]
    },
    {
        userName:"akash123",
        password:1234,
        arr:[10,20,30,40]
    }
]
newArray.forEach((Item)=>console.log(`The username is: ${Item.userName},Password is: ${Item.password} 
            and The array is:${Item.arr}`))