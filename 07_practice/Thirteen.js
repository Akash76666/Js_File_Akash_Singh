const arr=[10,20,30,40]
arr.push(90)
const newArr=arr.map((Items,index)=>{return Items*10}).map((Item)=>{return Item+2})
console.log(newArr)