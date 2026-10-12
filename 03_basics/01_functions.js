function sayMyName(){
    console.log("Aman");
    console.log("Naina");
    console.log("Gyanvi");
    console.log("Lakshya");
    
}

sayMyName()

function addTwoNumbers(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2

} 

const result = addTwoNumbers(3,8)
// console.log("Result: ",result)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Naina"));
console.log(loginUserMessage());

