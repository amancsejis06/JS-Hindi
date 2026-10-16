// // if statement
// // <,>,<=,>=,==,!=,===
// const temperature = 41

// if(temperature < 40){
//     console.log("Less than 50");
// }
// else{
//     console.log("greater than 40")
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
    
// }
// // console.log(`User power: ${power}`);

//Shorthand notation

const balance = 300
// if (balance >500) console.log("Good");
//writing code in below format is not acceptable in company
// if (balance > 400) console.log("text1"), console.log("Test2");
// if (balance > 400) console.log("text1"), 
// console.log("Test2");

// if (balance < 500){
//     console.log("Less than 500")
// }
// else if (balance < 700){
//     console.log("Less than 700");
    
// }
// else if (balance < 900){
//     console.log("Less than 900");
    
// }
// else {
//     console.log('Less than 1200');
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy");
    
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}