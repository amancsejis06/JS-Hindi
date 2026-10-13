// In var no scope is available. hence, we will not use var
//let and const have scope
// 
// {
// let a = 200
// const b = 300
// var c = 20
// }


// console.log(a)
// // console.log(b)
// console.log(c)
// /*
// All variable a,b and c are in global scope.
// */

let a = 300
if (true){
    let a = 20
    console.log(`Value of a in if: ${a}`);
    
}

console.log(`Value of a outside if block: ${a}`);
