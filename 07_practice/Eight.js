if(true){
    console.log("Akash Singh")
}

temperature=41
if(temperature<40){
    console.log(`The temperature is:${temperature}`)
}
else{
    console.log("greatern than 40")
}

const arr=[10,20,,30,40]
for(let i=0;i<arr.length;i++){
    if(arr[i]>30){
        console.log(arr[i])
    }
}

const values={
    name:"Akash",
    S_name:"Singh",
    arr:[10,20,30,40]
}
for(let i=0;i<values.arr.length;i++){
if(values.arr[i]>20){
    console.log(values.arr[i])
}
}

const key=3
switch (key) {
    case 1:console.log("Monday")
        break;
    case 2:console.log("Tuesday")
    break;
    case 3:console.log("Wednesday")
    break;
    default:console.log("Default key")
        break;
}

const userName={}
if(Object.keys(userName).length===0){
    console.log("true")
}
console.log("false")

let val=null ?? 10
console.log(val)

let val1 = null ?? undefined ?? 20
console.log(val1)

let a=51
a<50? console.log("Smaller than 51"):console.log("Greater than 50")