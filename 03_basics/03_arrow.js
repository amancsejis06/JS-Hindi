const user = {
    username:"Lakshya",
    price:564,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
        
    }
}

user.welcomeMessage()
user.username = "Gyan"
user.welcomeMessage()
console.log(this);
