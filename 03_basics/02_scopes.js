// // In var no scope is available. hence, we will not use var
// //let and const have scope
// // 
// // {
// // let a = 200
// // const b = 300
// // var c = 20
// // }


// // console.log(a)
// // // console.log(b)
// // console.log(c)
// // /*
// // All variable a,b and c are in global scope.
// // */

// let a = 300
// if (true){
//     let a = 20
//     console.log(`Value of a in if: ${a}`);
    
// }

// console.log(`Value of a outside if block: ${a}`);

// function one(){
//     const username = "Aman"
    
//     function two(){
//         const website = "youtube"
//         console.log(username);
//         }
//         // console.log(website);

//         // two()
        
// }

// one()

if(true){
    const username = "Aman"
    if (username == "Aman"){
        const website = " youtube"
        console.log(username+website);
    }
    // console.log(website);
    }
// console.log(username);

// ++++++++++++++++++++ interesting +++++++

console.log(addOne(5))

function addOne(num){
    return num + 1
}



console.log(addTwo(10))
const addTwo = function(num){
    return num + 2
}

// console.log(addTwo(10))