const score=100
console.log(score)

const count=new Number(200)
console.log(count)
const str= count.toString()
console.log(str) // 200 as String
console.log(typeof str) // String

const num=34.567
console.log(num.toLocaleString(2))
console.log(num.toPrecision(2)) //35
console.log(num.toPrecision(3)) //35.6
// console.log(num.toPrecision(num.toPrecision(4))) // 34.57
const num1=10000000
console.log(num1.toLocaleString()) // 10,000,000

console.log(num1.toLocaleString('en-In')) // 1,00,00,000
console.log(num1.valueOf())
console.log(num1.toExponential(2)) //1.00e+7

console.log(num1.toExponential(4))  // 1.0000e+7
console.log((num1.toFixed(3))) // 10000000.000


//      +++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math)

const number=-345.57
console.log(Math.abs(number)) // It convert negative to positive i.e 345.57
console.log(Math.sqrt(count)) // 14.142135623730951
console.log(Math.round(Math.sqrt(count))) // 14
console.log(Math.round(number)) // -346

const p=2
console.log(Math.pow(p,3)) // 8

const m=34.8
console.log(Math.floor(m)) // It consider the Lower value i.e 34
console.log(Math.ceil(m))  // It consider the higher value i.e 35

const number1=(10,20,30,40)
console.log(Math.min(10,20,20,40))
console.log(Math.max(number1))

console.log(Math.random())// Values Leis Between 0 to 1
console.log(Math.random())

console.log(Math.random()*10)
console.log((Math.random()*10)+1)
console.log(Math.round((Math.random()*10)+1))

console.log(Math.floor((Math.random()*10)+1))

const min=10
const max=20
console.log(Math.floor((Math.random())*(max-min+1)+min)) /* If you want to find the 
range between min value and max value */
