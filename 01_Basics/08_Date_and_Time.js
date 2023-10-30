let myDate=new Date()
console.log(myDate); // 2023-10-30T07:00:23.004Z
console.log(myDate.getDate()) // 30
console.log(myDate.getDay()) // 1
console.log(myDate.getFullYear()) // 2023
console.log(myDate.getHours()) // 7
console.log(myDate.toString()) // Mon Oct 30 2023 07:02:11 GMT+0000 
console.log(myDate.toDateString()) //Mon Oct 30 2023
console.log(myDate.getTime()) // 1698649331633
console.log(myDate.getTimezoneOffset()) //0
console.log(myDate.toLocaleString()) // 10/30/2023, 7:02:11 AM
console.log(myDate.getUTCDate()) // 30
console.log(myDate.getVarDate) 
console.log(myDate.toJSON()) // // 2023-10-30T07:02:11.633Z

console.log(typeof myDate)// Object

// +++++++++++++++++  Setting new date  +++++++++++++++++++++++++++++++

let mycreatedDate=new Date(2023,0,25)
console.log(mycreatedDate) // 2023-01-25T00:00:00.000Z month strats form 0 means 1
console.log(mycreatedDate.toDateString()) // Wed Jan 25 2023
console.log(mycreatedDate.toLocaleString()) // 1/25/2023, 12:00:00 AM

let mydatetime=new Date(2023,3,27,5,6,6) // 2023-04-27T05:06:06.000Z
console.log(mydatetime)
console.log(mydatetime.toDateString()) // Thu Apr 27 2023

console.log(mydatetime.toLocaleString()) // 4/27/2023, 5:06:06 AM

let mycreateDate=new Date("2023-04-14")
console.log(mycreateDate.toLocaleString()) // 4/14/2023, 12:00:00 AM 

let mtDate=new Date("04-03-2023")
console.log(mtDate.toLocaleString())// 4/3/2023, 12:00:00 AM //mm/dd/yy

let myTime=Date.now()
console.log(myTime)

// ++++++++++  Coverting milli-Second to Second  ++++++++++++
let myTimenow=Date.now()
let ValueInSeconds=myTimenow/1000
console.log(Math.floor(ValueInSeconds))// 1698652655
console.log(Math.round(ValueInSeconds)) // 1698652656

console.log(mtDate.toLocaleString('en-In',{timeZone:'UTC'}))

const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(mtDate.toLocaleString('en-GB', { timeZone: 'UTC' }));

const newDateTime=new Date()
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(date));