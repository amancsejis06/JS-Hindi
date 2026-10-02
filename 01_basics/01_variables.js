const accountId = 5642164;
let accountEmail = "mytest@test.com";
var accountPassword = "123645";

accountCity = "Malda";

// accountId = 5453211; // not allowed
console.log(accountId)
/*
Prefer not to use var because of issue in
block scope and functional scope.

*/
accountEmail = "test@test.com";
accountPassword = "253266";
accountCity = "Katihar";

console.table([accountId,accountEmail,accountPassword,accountCity])
