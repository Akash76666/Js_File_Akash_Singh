const str="Akash"
const count=5
console.log(str+count)

/* String Interpolation Means it allows to injecting variable and arithmetic 
expression inside the String */

console.log(`Hello my name is ${str} and count is ${count}`)
console.log(`This expresiion inside interpolation ${20+20}`)

const str1=new String("Janardan")
console.log(str1)
console.log(`The first element is: ${str1[1]}`)
console.log(`The length of String ${str1.length}`)
console.log(str1.__proto__)

console.log(`The uppercase Methods in String: ${str1.toUpperCase()}`)

console.log(`The CharAt Prorperty in string: ${str1.charAt(5)}`)