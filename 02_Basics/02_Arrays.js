const marvel_heroes=["Iron-man","Spider-man","Captain-America"]

const dcu=["Batman","SuperMan","Aquaman","Flash"]

const new_heroes=marvel_heroes.push(dcu)
console.log("Push Method: ",new_heroes)/* [ 'Iron-man','Spider-man','Captain-America',
[ 'Batman', 'SuperMan', 'Aquaman', 'Flash' ]]  It consider array as value here*/

console.log(marvel_heroes[3]) //[ 'Batman', 'SuperMan', 'Aquaman', 'Flash' ]

console.log(marvel_heroes[3][2]) // It give the value of array inside an array // Aquaman
// Value of dcu on 2 index

const all_heroes=marvel_heroes.concat(dcu)
console.log("Concat Method: ",all_heroes)

const num1=[1,2,3,4,5]
const num2=[6,7,8,9]
const number=num1.concat(num2)
console.log(number)// [1, 2, 3, 4, 5,6, 7, 8, 9]
const number1=num1.push(num2)
console.log(number1)

const newArray=["Akash","Akhilesh","Dharma"]
const newArray2=["Shankar","Ramesh"]

const ConArray=newArray.concat(newArray2)
console.log(ConArray) // [ 'Akash', 'Akhilesh', 'Dharma', 'Shankar', 'Ramesh' ]

//    We can also add two array by Spread method

const SpeadMethod=[...newArray,...newArray2] // We also add as many array we want
console.log(SpeadMethod) // [ 'Akash', 'Akhilesh', 'Dharma', 'Shankar', 'Ramesh' ]

const newArray3=["Sam","Durgesh"]
const SpreadMethod1=[...newArray,...newArray2,...newArray2]
console.log(SpreadMethod1)/* [ 'Akash',  'Akhilesh','Dharma', 'Shankar','Ramesh', 'Shankar',
    'Ramesh'] */

const another_Array=[1,2,3,4,[2,4],5,[6,7,8],6,[3,6,7]]
let real_another_array=another_Array.flat(1) /* It resolve all array in Array and give single 
array [1, 2, 3, 4, 2, 4,5, 6, 7, 8, 6, 3,6, 7] */
console.log(real_another_array)

const array="Akash"
console.log(Array.isArray(array)) // By these nethod we can check it is Array or not

const Array2=Array.from(array) // This function Convert the value into Array
console.log(Array2)

const Array3=Array.from({name:"hitesh"})
console.log(Array3)

const num=1000
const A=200
const B=100
const from_method=Array.of(num,A,B) // Convert all Three value into array
console.log(from_method) // [ 1000, 200, 100 ]
