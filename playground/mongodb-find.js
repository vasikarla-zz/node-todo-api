const {MongoClient, ObjectID} = require('mongodb');
var {faker} = require('faker');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");

  //FETCH TODO's
  // var cursor = db.collection("Todos").find();
  // console.log(cursor.toArray().then((docs) => {
  //   console.log(docs);
  // }, (err) => {
  //   console.log(err);
  // }));

  var cursor = db.collection("Todos").find();
  console.log(cursor.toArray().then((docs, err) => {
    if (err) {
      console.log("Error");
    }
    console.log(JSON.stringify(docs, undefined, 2));
  }));

  // client.close();
});