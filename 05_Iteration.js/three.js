// for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
    // console.log(num)
}

const str=["Akash","Deepak","Divakar","Durgesh"]
for (const string of str) {
    console.log(string)
}

const greeting="Akash Singh"
for (const greet of greeting) {
    console.log(`Each character of String is:${greet}`)
}

const map=new Map()

map.set('IN','Insia')
map.set('USA','United States of America')
map.set('Fr','France')
map.set('fr','France')
console.log(map)
for (const map_key of map) {
    console.log(map_key) /*[ 'IN', 'Insia' ]
                          [ 'USA', 'United States of America' ]
                          [ 'Fr', 'France' ]
                          [ 'fr', 'France' ]*/
}

// for Array Distructure for print key and value
for (const [key,value] of map) {
    console.log(key,':-',value) /*IN :- Insia
                                USA :- United States of America
                                Fr :- France
                                fr :- France */
}

const myObj={
    'Name1':'Akash',
    'Name2':'Aniket',
    'Name3':'Nachiket'
}
// for (const [key,value] of myObj) {
//     console.log(`${key} :-${value}`) // It not applied on Object.It will give error
// }