const myNum=[1,2,3,4,5,6,7]
const num=myNum.map((Items)=>{
   return Items;
})
console.log(num)

const array=[]
const myNum1=[1,2,3,4,5,6,7]
myNum1.forEach((num)=>{
    array.push(num+10)
})
console.log(array)


// +++++++++ Here it is called Chaining we can add map chanining and filter as many as you want +++++

const myNumber=[1,2,3,4,5,6,7,8]
const numbers=myNumber.map((values)=>values*10)// [10, 20, 30, 40,50, 60, 70, 80]
              .map((values)=>values+1)// [11, 21, 31, 41,51, 61, 71, 81]
              .filter((values)=> values>50) // [ 51, 61, 71, 81 ]
console.log(numbers)

const newArray=[10,20,30,40,50]
const chainMap=newArray.map((Items)=>Items*10).map((Items)=>Items+2)
                     .filter((Items)=>(Items>400))
console.log(chainMap) // [ 402, 502 ]