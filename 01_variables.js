const account_ID =94659
let account_Email = "singhkaranvir844@gmail.com"
var account_Password = "12345"
account_City = "Punjab"
let accoynt_State;

// account_ID =666 its not allowed in js to change constant variables
// other variables can be changed like let, var 

console.log(account_ID);

//  console.table is used to write all varibles in one time
console.table([account_ID,account_Email,account_Password,account_City,accoynt_State ])

/*
prefer not to use var 
because of issue in block scope and functional scope
*/