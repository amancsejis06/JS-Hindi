// function sayMyName(){
//     console.log("Aman");
//     console.log("Naina");
//     console.log("Gyanvi");
//     console.log("Lakshya");
    
// }

// sayMyName()

// function addTwoNumbers(num1,num2){
//     // let result = num1 + num2
//     // return result
//     return num1 + num2

// } 

// const result = addTwoNumbers(3,8)
// // console.log("Result: ",result)

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("Naina"));
// console.log(loginUserMessage());

// //Rest operator

// function calculateCartPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,250,365,5000))

const user = {
    username: "Aman",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject({
    username:"Naina",
    price:399
})

const myNewArray = [200,300,400,5000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,6400,3600]));

