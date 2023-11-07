const myArr=[1,2,3,4,5,6]
myArr.push(20)
console.log(myArr)
myArr.push(1,30)
console.log(myArr.join)
console.log(myArr)
const arr=[10,20,30,40]
const arrJoin=arr.join()
console.log(arrJoin)
console.log(typeof arrJoin)

const mergeArr=[myArr,arr]
console.log(mergeArr)
const ArrMerge=myArr.concat(arr)
console.log(ArrMerge)

let number=10
let str=String(number)
console.log(typeof str)
const strCon=str.concat(" ",20)
console.log(strCon)

console.log(str.replace("0","8"))
console.log(strCon.split(","))

const numeric=34.567
console.log(numeric.toFixed(1))
console.log(numeric.toPrecision(2))

