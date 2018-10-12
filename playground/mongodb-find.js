const {MongoClient, ObjectID} = require('mongodb');
var {faker} = require('faker');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");

  // //FETCH ALL
  // var cursor = db.collection("Todos").find();
  // console.log(cursor.toArray().then((docs, err) => {
  //   if (err) {
  //     console.log("Error");
  //   }
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }));

  // //FETCH ONLY 1
  // var cursor = db.collection("Todos").find({_id: "5bc02d8206ea0306aefd5237"});
  // console.log(cursor.toArray().then((docs, err) => {
  //   if (err) {
  //     console.log("Error");
  //   }
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }));


    //FETCH COUNT
    var cursor = db.collection("Todos").find().count().then((docs, err) => {
      if (err) {
        console.log("Error");
      }
      console.log(JSON.stringify(docs, undefined, 2));
    });

  // client.close();
});