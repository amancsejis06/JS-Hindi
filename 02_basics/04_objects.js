const tinderUser = new Object()

tinderUser.id = '123'
tinderUser.name = 'Gyanvi'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// const regularUser = {
//     email: "some@test.com",
//     fullname:{
//         userFullName:{
//             firstName:"aman",
//             lastName:"Kumar"
//         }
//     }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName["firstName"]);
// console.log(regularUser.fullname?.userFullName["firstName"]);

// const obj1 = {1:"One",2:"Two"}
// const obj2 = {3:"three",4:"Four"}
// const obj4 = {5:"Five",6:"Six"}

// // const obj3 = {obj1,obj2}
// // const obj3 = Object.assign({},obj1,obj2,obj4)
// const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

 console.log(tinderUser);
 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.toLocaleString())
 
 
