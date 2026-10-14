const user = {
    username:"Lakshya",
    price:564,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Gyan"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     const username = "aman"
//     console.log(this.username);
    
// }

//arrow function
const chai = () => {
    const username = "aman"
    console.log(this);
    
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(10,20))

// Implicit Return

const addTwo = (num1,num2) => num1 + num2

console.log(addTwo(56,54))


