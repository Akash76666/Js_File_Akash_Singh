const myArr=[10,20,30,40]
const value=myArr.forEach((items)=>{return items})
console.log(value)

// const codingFile1=[1,2,3,4,5,6,7,8]
// const filterValue1=codingFile.filter((values) => {return values>4}) // It return value by using filter
// console.log(filterValue1) // [ 5, 6, 7, 8 ]

const newArray=[10,20,30,40]
const value1=newArray.filter((items)=>{return items>20})
console.log(value1)

const value2=newArray.filter((values)=>{
    return values>20
})
console.log(value2)

const numArr=[]
const numArr1=[10,20,30,40]
numArr1.forEach((Items)=>{
    // for(let i=0;i<numArr1.length;i++){
        if(Items>20)
        numArr.push(Items)

})
console.log(numArr)
const array1=[
    {title:"Book one", genre:"fiction", publish:1991, edition:2005} ,
    {title:"Book two", genre:"History", publish:1981, edition:2008} ,
    {title:"Book three", genre:"Romance", publish:2001, edition:2012} ,
    {title:"Book four", genre:"Horror", publish:1971, edition:2010} ,
    {title:"Book five", genre:"Horror", publish:2002, edition:2014} 
]

array1.filter((Items)=>{
    // console.log(Items)
     if(Items.edition>2009 && Items.genre==="Romance"){
         console.log()
        console.log(Items)
    }
})

const e_array=[]
const ArrayP=[10,20,30,40]
ArrayP.forEach((Items)=>{
    if(Items>10){
    e_array.push(Items)
}
})
console.log(e_array)