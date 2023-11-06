// for in loop on Object

const myObj={
    js:'JavaScript',
    cpp:'c++',
    css:'Css'
}
for (const key in myObj) {
    console.log(key)       
}
console.log()
// To print Key and Value pair in object
for (const key in myObj) {
    console.log(`${key} for shortcut form is: ${myObj[key]}`)
}

// for in loop on array

const myArr=[10,20,30,40]
for (const [key] in myArr) {
    console.log(`Value of index ${key} is: ${myArr[key]}`)
}

const map=new Map()
map.set('1','Akash')
map.set('2','Vikash')
map.set('3','Naresh')

for (const [key] of map) {
    console.log(`${key}`)
}