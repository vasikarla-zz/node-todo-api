const {MongoClient, ObjectID} = require('mongodb');
var {faker} = require('faker');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");

    //DELETE MANY
    // db.collection("Todos").deleteMany({text: "Walk the Dog"}).then((result) => {
    //   console.log(result);
    // });

    //DELETE ONE
    // db.collection("Todos").deleteOne({text: "Raj"}).then((result) => {
    //   console.log(result);
    // });

    //FIND-ONE & DELETE
    db.collection("Todos").findOneAndDelete({text: "Ryan"}).then((result) => {
      console.log(result);
    });

    //FETCH COUNT
    

  // client.close();
});