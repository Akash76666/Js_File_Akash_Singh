"use strict";
let a=10
let b=String(a)
console.log(typeof a)
console.log(typeof b)

let str="32aaa"
let num=Number(str)
console.log(num)
console.log(typeof str)
console.log(typeof num)

let bool=false
let value=Number(bool)
console.log(value)

let bool1=1
let boolvalue=Boolean(bool1)
console.log(boolvalue)

let str1=""
let bool2=Boolean(str1)
console.log(bool2)

const str3="Akash"
const str4="Singh"
console.log("The Name of mine is:",(str3+str4))

const number=10
const number1=20
console.log(number+number1+str3+str4)
console.log(str3+str4+number+number1)
console.log((str3+str4)+" ", (number+number1))
console.log(str3+number1+number)
console.log(str4+number+number)

let number2=10
let pi=number2++
console.log(pi)

let number4=10
let pri=++number4
console.log(pri)


let number3=20

let strf=" Akash Singh "
console.log(strf.length)
console.log(strf.charAt(2))
console.log(strf.includes('i'))
console.log(strf.indexOf('S'))
console.log(strf.lastIndexOf('n'))
console.log(strf.endsWith('h'))
console.log(strf)
console.log(strf.trim())
console.log(strf.split(' ').length)
console.log(strf.replace('S','D'))
let count
if(strf.endsWith(' ')){
    count++;
    console.log(count)
}
