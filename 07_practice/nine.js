const array=[]
for (let index = 0; index <10; index++) {
    // const element = index;
    // console.log(element)
}

for(let i=0;i<10;i++){
    if(i>5){
    console.log(i)
    console.log(typeof i)
    }
}

const superHero=["Iron-Man","Spider-man","Thor","Black-panther"]
superHero.map((value)=>{
    if(value==="Thor" && true || false){
    console.log(value)}
    })
let i=0
while(i<10){
    console.log(i)
    i=i+1
}


let arr=["Super-man","Batman","Flash","AquaMan","Wonder-women"]
let j=0
while (j<arr.length) {
    console.log(arr[j])
    j=j+2
}

let a=0
do {
    console.log(`The value on index is ${a} is: ${a}`)
    a++
} while (a<10);

const object={
    name:"Akash",
    Rollno:12,
    greeting:()=>{
        console.log("Happy Birthday")
    }
}

for (const item of object) {
    console.log(item)
}

const myarr=[10,20,30,40,50]
for (const arr in myarr) {
    console.log(arr)
}

