const myArr=[10,20,30,30,50]
const myArr1=[1,2,3,4,5]
console.log(myArr[0])
console.log(myArr.push(60))
console.log(myArr)
console.log(myArr.indexOf(10))
const newArr=myArr.concat(myArr1)
console.log(newArr)

const newArr1=[...myArr,...myArr1]
console.log(newArr1)

myArr.unshift(7)
myArr.shift()
console.log(myArr)

const myArray=[10,20,30,40,50,[40,50,70]]
console.log(myArray)
console.log(myArray[5][1])
const flatProp=myArray.flat(1)
console.log(flatProp)

console.log(flatProp.slice(1,4))
console.log(flatProp)

console.log(flatProp.splice(1,4))
console.log(flatProp)