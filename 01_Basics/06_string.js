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

console.log(`The Sub-String method in string: ${str1.substring(1,5)}`)

console.log(`The Slice method in String: ${str1.slice(-8,3)}`)

const str2="      Akash Singh       "
console.log(`The String is: ${str2}`)
console.log(`The Trim method in String: ${str2.trim()}`)
console.log(`The Replace method in String: ${str2.replace('S','D')}`)
console.log(`The Trim-start property: ${str2.trimStart()}`)

const url="http://akashwebsite%20.com/AkashSingh"
const rep=url.replace('%20','5')
console.log(rep)

console.log(str.includes("Akash"))

const str3="All the methods of String"

console.log(`The split method is: ${str3.split('-')}`)
const strcopy=str3.split('',2)  //It gives two letters as Split value [ 'A', 'l' ]
console.log(strcopy)

const strsplit=str3.split(' ',2)
console.log(strsplit) //It gives two split words as Split value ['All','the']