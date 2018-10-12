var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db("TodoApp");
  
  db.collection("Todos").insertOne({
    text: "Sample-Text",
    completed: false
  }, (err, result) => {
    if (err) {
      console.log("Unable to insert " + err);
    }
    JSON.stringify(result, undefined, 2);
  });
  client.close();
});