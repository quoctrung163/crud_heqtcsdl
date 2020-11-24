const { MongoClient } = require('mongodb');
const databaseName = 'crudsinhvien';
const config = { useNewUrlParser: true, useUnifiedTopology: true }
let url = 'mongodb://localhost:27015/';

MongoClient.connect(url, config, (err, db) => {
  if (err) throw err;
  const dbo = db.db(`${databaseName}`);
  dbo.collection('sinhvien').find({}).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
})