// For each loop doesn't return any value

const coding=["Java","Css","Html","JavaScript"]
const values=coding.forEach((item) => {
    console.log(item)
});                      
console.log(values)

//      ++++++++++ So here We using Filter to return value ++++++++++

const codingFile=[1,2,3,4,5,6,7,8]
const filterValue=codingFile.filter((values) => values>4) // It return value by using filter
console.log(filterValue) // [ 5, 6, 7, 8 ]

const codingFile1=[1,2,3,4,5,6,7,8]
const filterValue1=codingFile.filter((values) => {return values>4}) // It return value by using filter
console.log(filterValue1) // [ 5, 6, 7, 8 ]

const numbers=[]
codingFile1.forEach((num)=>{
   if(num>4){
      numbers.push(num)
    }
})
console.log(numbers) // [ 5, 6, 7, 8 ]

const Book=[
    {title:"Book one", genre:"fiction", publish:1991, edition:2005} ,
    {title:"Book two", genre:"History", publish:1981, edition:2008} ,
    {title:"Book three", genre:"Romance", publish:2001, edition:2012} ,
    {title:"Book four", genre:"Horror", publish:1971, edition:2010} ,
    {title:"Book five", genre:"Horror", publish:2002, edition:2014} ,
    {title:"Book six", genre:"Sci-fi", publish:2003, edition:2006} ,
    {title:"Book seven", genre:"Humour", publish:1988, edition:2019} ,
    {title:"Book eight", genre:"fiction", publish:1989, edition:2004} , 
]
Book.forEach((Items)=>{
    if(Items.edition>2006){
    console.log(`${Items.title}:-${Items.genre}`)
    }
})

const book=Book.filter((values)=>{ return values.edition>2010
})
console.log(book)

const userbook=Book.filter((bk)=>{return bk.genre==="Horror"})
console.log(userbook)

const userbook1=Book.filter((bk)=>{
   return bk.genre==="Horror" && bk.edition>2010
})
console.log(userbook1)