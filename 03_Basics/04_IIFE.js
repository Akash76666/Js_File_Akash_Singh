// Immediately Invoked Function Expressions-IIFE

// It simply means you have to execute the written function immediatly

// Simply it means the global variable do not pollute aur function variable

(function chai(name){
  console.log(`The name is: ${name}`)
})("Akash"); // After every IIfe declaration it is necessary tu put semi-colon(;)

((username)=>{
   console.log(`The username is: ${username}`)
})("Ak123")