const {SHA256} = require('crypto-js');

var msg = "splendor";
console.log(`Message : ${msg}`);
console.log(`Hash : ${SHA256(msg).toString()}`);

var data = {
    name: "Sample",
};

console.log(SHA256(JSON.stringify(data).toString));