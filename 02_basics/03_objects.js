//Singlton


//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Naina",
    'user name':'Aman Kumar',
    [mySym]:"mykey1",
    age:32,
    location:"Teliahat",
    email:'naina@gmail.com',
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"] 
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["age"]);
console.log(JsUser["user name"]);

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = 'aman.jis01@gmail.com'
console.log(JsUser);

// Object.freeze(JsUser) //Freeze object 

JsUser.email = 'kaka@test.com'
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}

// console.log(JsUser.greeting());
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greetingTwo());




