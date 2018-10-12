const {MongoClient, ObjectID} = require('mongodb');
var {faker} = require('faker');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");
  
  //INSERT DATA INTO MONGODB
  // db.collection("Users").insertOne({
  //   name: faker.name.findName(),
  //   age: 38,
  //   locations: "Pleasanton"
  // }, (err, res) => {
  //   if (err) {
  //     console.log(`Error Occured ${err}`);
  //   }
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 3));
  // })
  client.close();
});