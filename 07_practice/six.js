const user={
     userName:"akash@123",
     Rollno:12,
     email:"akassing@787",
    greting: function greet(state){
        console.log(this)
        console.log(`The username is:${this.userName},Rollno is:${this.Rollno},Email 
        is:${this.email} and ${state}`)
    }
}
console.log(user.userName)
user.greting("uttarpradesh")
user.userName="hitesh"
user.greting("uttarpradesh")

const count=(num1,num2)=>{
    return num1+num2
}
console.log(count(10,20))

const mul=(n1,n2)=>(n1*n2)
console.log(mul(3,4))