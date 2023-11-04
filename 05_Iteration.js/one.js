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