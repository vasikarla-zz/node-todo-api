const MongoClient = require('mongodb').MongoClient;
var options = { useNewUrlParser: true };
MongoClient.connect('mongodb://localhost:27017/TodoApp', options, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongodb Server")
    } 

    console.log("Connection Sucessful....");

    db.close();
    console.log("Connection Closed....");

});