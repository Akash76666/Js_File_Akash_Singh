// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
}


for (let index = 0; index < 10; index++) {
    const element=index
    if(element == 5){
        console.log(`Value of: ${element}`)
    }
    console.log(element)
}
for (let i = 0; i < 5; i++) {
    const element = i;
    console.log("Inner loop i:",element)
    for (let j = 0; j < 5; j++) {
        const element1=j
        console.log(`Inner loop j: ${element1} and Inner loop: ${element}`)    
    }
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log("Outer loop i:",element)
    for (let j = 1; j <= 10; j++) {
        const element1=j
        console.log(`${i} * ${j} = ${i*j}`)    
    }
}

//        +++++++ Loop on Array   +++++++
const myArray=["Iron-man","Loki","Spider-Man","Thor","Black-Panther"]
console.log(`The length of array is: ${myArray.length}`)
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(`The elment ${index} of array: ${element}`)
    
}

// Break and Continue in Loop
for (let index = 1; index <= 20; index++) {
    if(index===5){
        console.log(`Detected 5`)
        break
    }
    console.log(index)
}

for (let index = 1; index <= 20; index++) {
    if(index===5){
        console.log(`Detected 5`)
        continue
    }
    console.log(index)
}