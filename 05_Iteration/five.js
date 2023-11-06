const myArray=["Html","Css","JS","Java"]
myArray.forEach(function (arrItems) {
   console.log(arrItems) /* Html
                            Css
                            JS
                            Java*/
});

myArray.forEach((Item) => {
    console.log(Item)
});


// Another way to print Array Items using named function passing as parameter
function printMe(items) {
    console.log(items)
}
myArray.forEach(printMe)

const myArr=["Akash","Shiv","Avi","Karan"]
myArr.forEach((items,index,arr)=>{
    console.log(items,index,arr) /*Akash 0 [ 'Akash', 'Shiv', 'Avi', 'Karan' ]
                                   Shiv 1 [ 'Akash', 'Shiv', 'Avi', 'Karan' ]
                                   Avi 2 [ 'Akash', 'Shiv', 'Avi', 'Karan' ]
                                   Karan 3 [ 'Akash', 'Shiv', 'Avi', 'Karan' ] */
})


// applyying ForEach  loop on Object which is inside the array
const array1=[
    {
        languageName:"java",
        languagefile:"java"
    },
    {
        languageName:"JavsScript",
        languagefile:"js"
    },
    {
        languageName:"Python",
        languagefile:"py"
    }
]
array1.forEach((items) => {
    console.log(items)
    console.log(`${items.languageName}:-${items.languagefile}`)
});