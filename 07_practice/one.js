const num1=345.678
const fixedValue=num1.toFixed(1)
console.log(fixedValue)

const precisionValue=num1.toPrecision(3)
console.log(precisionValue)

const value=1000000
console.log(value.toLocaleString())

const number=679.56
console.log(Math.floor(Math.sqrt(number)))

const a=-10
console.log(Math.abs(a))

console.log(Math.pow(a,3))

console.log(Math.PI*a)

const arr=[10,20,30,40]
console.log(Math.min(...arr))
console.log(Math.max(...arr))

const min=10
const max=20
console.log((Math.random()*10)+1)