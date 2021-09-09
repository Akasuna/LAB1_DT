var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://new_user1010:Ch33k15c4v@cluster0.gt6tl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//cars = [];

const express = require('express');
const app = express();
const port = 443;

app.use(express.static(__dirname + "/public"));

//main().catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/Cars', (req, res) => {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("Transportation");
    
    dbo.collection("Cars").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      
      db.close();
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
