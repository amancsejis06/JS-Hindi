// // let myHeros = ["Aman","spiderman"]

// // Object.prototype.aman = function(){
// //     console.log(`aman is present in all objects`);
    
// // }

// // let myBooks = ["Java","Python"]
// // myHeros.aman()
// // myBooks.aman()


// //Inheritance

// const User = {
//     name:"Chai",
//     email:"text@text.com"
// }

// const Teacher = {
//     makeVideo:true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment:"JS assignment",
//     fullTime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__ = User

// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
        
}

anotherUsername.trueLength()
"aman".trueLength()