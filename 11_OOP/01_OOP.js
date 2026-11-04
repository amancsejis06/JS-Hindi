// //Object Literal
// const user = {
//     username: "Aman",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got user details from dataabse")
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
        
        

//     }
// }

// console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

//constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("Laksya",12,true)
const userTwo = new User("Gyan",54,false)
console.log(userOne.constructor);
// console.log(userTwo);
console.log(userOne instanceof of User);



