const { MongoClient } = require('mongodb');
const databaseName = 'crudsinhvien';
const config = { useNewUrlParser: true, useUnifiedTopology: true }
let url = 'mongodb://localhost:27015/';
let MSSV = '1710289';

MongoClient.connect(url, config, (err, db) => {
  if (err) throw err;
  const dbo = db.db(`${databaseName}`);
  let removeQuery = { MSSV };
  dbo.collection('sinhvien').deleteOne(removeQuery, (err, obj) => {
    if (err) throw err;
    console.log(`sinh viên có mã ${MSSV} đã bị xoá`);
    db.close();
  })
})