//Array

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["Shaktiman","Spiderman","Naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])
console.log(myArr);

// Array methods
myArr.push(10)
myArr.push(25)
console.log(myArr);
myArr.pop()
console.log(myArr)

myArr.unshift(26)
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5))
console.log(myArr.includes(50))

console.log(myArr.indexOf(4));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr)

//slice, splice


