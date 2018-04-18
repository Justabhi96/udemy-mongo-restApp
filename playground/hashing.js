
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var msg = "This value should be hashed";

var hashedMsg = SHA256(msg).toString();
console.log(`msg: ${msg}`);
console.log(`hash: ${hashedMsg}`);

// var data = {
//     id:3
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'secretSalt').toString()
// }
// //Comment these two lines of code to see the 
// //'Data was not manipulated' message to the console
// token.data.id=5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// //this is used to compare the value of the hash with the
// //client's returned hash value 
// resultHash = SHA256(JSON.stringify(token.data)+'secretSalt').toString();

// if(resultHash === token.hash){
//     console.log('Data was not manipulated');
// }
// else{
//     console.log("Data was manipulated by client");
// }

//here we will be doing the same using JWT
var token = jwt.sign(data, 'secret');
console.log(token);
var decoded = jwt.verify(token, 'secret');
console.log(`decode: ${decoded}`);