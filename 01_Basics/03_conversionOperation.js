let a=10
 console.log(typeof a)

let b="20"
console.log(typeof b)

let valueInNumber=Number(b)
console.log(typeof valueInNumber)

let i="30"
let valueinNumber=Number(i) /*It passing the value of i in valueinNumber variable and
passing as number */
console.log(typeof valueinNumber)
console.log(valueinNumber)

let m="32aa"
let valueInNum=Number(m) /* If we try to change semi-String or alpha-numeric number it
print NaN in console */
console.log(typeof valueInNum)
console.log("ss: "+valueInNum)

let n=null
let valueInNumeric=Number(n) /* If we try to change null value it
print 0 in console */
console.log(typeof valueInNumeric)
console.log(valueInNumeric)

// "33" => 33
// "33ab" => NaN
// null => 0
// undefined =>undefined
// "Akash" => NaN
// boolean true => 1

let p=true
let value_num=Number(p)
console.log(typeof value_num)
console.log(value_num)

let bool=1
let BooleanLoggedIn=Boolean(bool)
console.log(typeof BooleanLoggedIn)
console.log(BooleanLoggedIn)

let isLogedIn= ""
let BooleanLoggedin=Boolean(isLogedIn)
console.log(typeof BooleanLoggedin)
console.log(BooleanLoggedin)

let isLoggedIn="Akash"
let BooleanIn=Boolean(isLoggedIn)
console.log(typeof BooleanIn)
console.log(BooleanIn);

// 1 => true 0 => false
// "" => false
// "Akash" => true

let num=565
let StringIn=String(num)
console.log(typeof StringIn)
console.log(StringIn);

let num1=null
let StringValue=String(num1)
console.log(typeof StringValue)
console.log(StringValue)

// 567 => 567 but in String Format
// null => null
//notdefined => notdefined