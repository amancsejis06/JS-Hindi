//Primitive data types - string,number,boolean,null,undefined,symbol,BigInt

let name = "Aman"
console.log(typeof name)

let age = 36
console.log(typeof age)

let price = 56.36
console.log(typeof price)

let bigNumber = 462562462466622555555n
console.log(typeof bigNumber)

let sym1 = Symbol("1234")
console.log(typeof sym1)

let isLoggedIn = true
console.log(typeof isLoggedIn)

let temp = null
console.log(typeof temp)

let roomTemp;
console.log(typeof roomTemp)

//Reference (Non primitive) - array,object,function
let numbers = [10,56,89,87,25]
console.log(typeof numbers)

let student1 = {
    'name':'aman',
    'age':65,
    'roll':102,
    'subject':'math'
}

console.log(typeof student1)

let profit = function myProfit(){
 console.log('profit')
}

console.log(typeof profit)