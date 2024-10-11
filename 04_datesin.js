// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 8, 22)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("22-09-2004")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.setTime());
console.log(Date.now()/1000);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// '${newDate.getDay()} and the time'

newDate.toLocaleString('default', {
    weekday: "long",
})