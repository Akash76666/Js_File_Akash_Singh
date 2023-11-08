const obj={
    name:"Akash",
    Rollno:1,
    RegId:121
}
console.log(`${Object.keys(obj)} and ${Object.values(obj)}`)
console.log(`Roll no: ${obj.Rollno}`)

obj.City="Mumabi"
console.log(obj)
obj.greeting=function(){
 console.log("Hii")
}
console.log(obj)
console.log(obj.greeting())
obj.value=function () {
    return `${this.name} and ${this.City}`
}
console.log(obj.value())

const obj1={
    name:"akash",
    City:"Mumbai",
    firstName:{
        f_name:"Akash",
        LastName:{
           l_name:"Singh"
        }
    }
}
console.log(obj1.firstName.f_name)

console.log(obj1.firstName.LastName.l_name)

const object1={
    name:"Akash",
    City:"Mumbai",
    Country:"India"
}

const object2={
    f_name:"Akash",
    myCity:"Mumbai",
    myCountry:"India"
}

const object3={...object1,...object2}
console.log(object3)

const object4=Object.assign({},object1,object2)
console.log(object4)