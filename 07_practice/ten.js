const arr=[10,20,30,40,50,60]
for (const value of arr) {
    if(value>40){
    console.log(`${value}`)
    }
}

const obj={
    name:"Akash",
    City:"Mumbai",
    arr1:[10,20,30,40]
}
console.log(`Obj is: ${obj.name}`)

const map=new Map()
map.set('Student1','Akash')
map.set('Student2',"Vivek")
map.set('Student3','Gyaan')
map.set('Student4','Dheeraj')
console.log(map)
for (let [key_value,value] of map) {
    console.log(`${key_value}:-${value}`)
}

const myobj={
  name:"Akash",
  Rollno:12,
  greeting:()=>{
    console.log("Hello")
  }
}
for (const value in myobj) {
  console.log(`${value}:-${myobj[value]}`)   
}

const newArr=[10,20,30,40]
for (const key in newArr) {
    console.log(`${key}:-${newArr[key]}`)
}
