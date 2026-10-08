// // let myDate = new Date()
// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toLocaleString());
// // console.log(typeof myDate);
// // let myCreatedDate = new Date(2023,0,25)
// // let myCreatedDate = new Date("2023-01-15")
// let myCreatedDate = new Date("01-14-2023")
// // console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)

// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))


let lakshyaBirthdate = new Date("12-20-2017")
console.log(lakshyaBirthdate.getTime());

let age = (((((myTimeStamp - lakshyaBirthdate.getTime())/1000)/60)/60)/24)/365
console.log(`Laskhya age is ${age}`);

