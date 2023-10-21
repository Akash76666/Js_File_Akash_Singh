// This type of conversion is correct.
console.log(2>1) //true
console.log(2>=1) //true

// But this types of conversion are not good
console.log("2">1) //tue
console.log(null==0) //false
console.log(null>=0) //true

console.log(undefined==0) //false
console.log(undefined>=0) //false
