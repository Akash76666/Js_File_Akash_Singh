const myNum=[1,2,3,4]

const totalValue = myNum.reduce(function (accumulator,currentValue){
    console.log(`Accumulator value : ${accumulator} and current value : ${currentValue}`)
   return accumulator+currentValue
},0)
console.log(totalValue)

const myArr=[10,20,30,40]

const myValue=myArr.reduce((accumulator,currentValue)=>{
    console.log(`Accumulator value : ${accumulator} and 
    current value : ${currentValue}`)
    return accumulator+currentValue
},0)
console.log(myValue)

const shopingCart=[
    {
        Item:"js Course",
        price:999
    },
    {
        Item:"java",
        price:1999
    },
    {
        Item:"js Course",
        price:2999
    }
]
const cart=shopingCart.reduce((acc,Items)=>{
  console.log(`Accumulator:-${acc} and Current Item:-${Items.price}`)
  return acc+Items.price
},0)
console.log(cart)