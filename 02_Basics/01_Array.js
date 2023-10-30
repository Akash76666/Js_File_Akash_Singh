const myArr=[10,20,30,40,50,"akash"] /* You can pass number and String,boolean or array
 inside the array in same varibale in javascript */
console.log(myArr[1])
console.log(myArr[5])

//  +++++++++++++++++ Types of Array Decalaration  ++++++++++++++

const arr=[10,20,30,40,50] // 1st type
const arr1=["Akash","Akhil","Samay","Sumit"] //2nd type

const arr2=new Array(10,20,30,40,50) // 3rd type

// Array Methods

arr2.push(60) // Adding value to array
arr2.push(70) 
arr2.pop() //Remove last element of array
console.log(arr2)

arr2.unshift(7) // It add the element in start menas at 0 position in array
console.log(arr2)

arr2.shift() // It remove the0 position element of array
console.log(arr2)

console.log(arr2.includes(7)) /* It gives bollean value true or false i.e the value present
in the array or not*/
console.log(arr2)
console.log(arr2.indexOf(10)) /* It gives the index value starts from 0*/ 

console.log(arr2)
let joinarr=arr2.join() //Converted in string 
console.log(typeof arr2) // object
console.log(typeof joinarr) // String
console.log(joinarr) 

console.log("A",arr2)

const myn1=arr2.slice(1,3)/*when you use slice it display the value between range It do
not manipulate or change the original array  and also it do not consider the last range 
like here it gives 20 and 30 */ 

console.log(myn1)/* [ 20, 30 ] */
console.log("B ",arr2) // B  [ 10, 20, 30, 40, 50, 60 ]

const myn2=arr2.splice(1,3) /* It manipulte the array means it extract the value from original
array and it also.
It also print and take the last range*/

console.log("C ",myn2) // C  [ 20, 30, 40 ]
console.log(arr2) // [ 10, 50, 60 ]