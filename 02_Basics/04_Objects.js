const user={}
user.Id=121
user.Name="Akash"
user.isLoggedIn=false
console.log(user) // { Id: 121, Name: 'Akash', isLoggedIn: false }

const RegularUser={
    email:"akash76@gmail.com",
    fullName:{
        getfullName:{
           firstName:"Akash",
           lastName:"Singh"
        }
    }
}
console.log(RegularUser)  /* { email: 'akash76@gmail.com',
fullName: { getfullName: { firstName: 'Akash', lastName: 'Singh' } }
  } */
console.log(RegularUser.fullName) // { getfullName: { firstName: 'Akash', lastName: 'Singh'}}
console.log(RegularUser.fullName.getfullName) // { firstName: 'Akash', lastName: 'Singh' }

console.log(RegularUser.fullName.getfullName.firstName) // Akash

const obj1={
    Name:"Akash",
    lastName:"Singh",
    Age:21
}

const obj2={
    Name:"Ganpat",
    email:"akkusin7877@gmail.com"
}
const obj3={obj1,obj2}
console.log(obj3)/* {
    obj1: { Name: 'Akash', lastName: 'Singh', Age: 21 },
    obj2: { Name: 'Ganpat', email: 'akkusin7877@gmail.com' }
  } */

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)// { Name: 'Ganpat',lastName: 'Singh',Age: 21,email: 'akkusin7877@gmail.com'}

const obj5={
    City:"Mumbai",
    Phone_no:89878789899
}

const obj6=Object.assign({},obj1,obj2,obj5)
console.log(obj6)/* {Name: 'Ganpat',lastName: 'Singh',Age: 21,email: 'akkusin7877@gmail.com',
    City: 'Mumbai',Phone_no: 89878789899} */

const obj7={...obj1,...obj2} // Spreading
console.log(obj7)// {Name: 'Ganpat',lastName: 'Singh',Age: 21,email: 'akkusin7877@gmail.com'}

console.log(Object.keys(obj1)) /* [ 'Name', 'lastName', 'Age' ] keys of Object obj1 it
returns in array type */
console.log(Object.values(obj1))/* [ 'Akash', 'Singh', 21 ] values of Object obj1 it 
returns in array type */

console.log(Object.entries(obj1))/* [ [ 'Name', 'Akash' ], [ 'lastName', 'Singh' ], 
[ 'Age', 21 ] ] It returns both key and values in array type */

const object1=[
    {
        id:1,
        name:"Akash",
    },
    {
        id:2,
        name:"Vivek",
    },
    {
        id:3,
        name:"Vaibhav",
    }
]

console.log(object1[1])// { id: 2, name: 'Vivek' } It gives first value
console.log(object1[2].name)// Vaibhav It print the name inside the 2 object 

console.log(user.hasOwnProperty('Id'))/* It give the boolean value the key is present in 
this object or not    True*/

console.log(user.hasOwnProperty('fullName'))// false

const course={
    coursename:"Js full course",
    price:"999",
    CourseTeacher:"Hitesh"
}

// There is one method to see the value under the object
console.log(course.coursename)// Js full course

/*also another method by this method you do not have to write course.coursename 
again and again */
const {price}=course
console.log(price) //999

const {CourseTeacher:teacher}=course /* You can also give the different name to access the key
and value */
console.log(teacher)