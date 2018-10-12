const {MongoClient, ObjectID} = require('mongodb');
var {faker} = require('faker');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");

    //DELETE MANY
    // db.collection("Users").deleteMany({name: "Raj"}).then((result) => {
    //   console.log(result);
    // });

    //DELETE ONE
    // db.collection("Users").deleteOne({text: "5bc02e905fbaa40e4ce51c4c"}).then((result) => {
    //   console.log(result);
    // });

    //FIND-ONE & DELETE
    db.collection("Users").findOneAndDelete({name: "Dan Collier"}).then((result) => {
      console.log(result);
    });

    //FETCH COUNT
    

  // client.close();
});