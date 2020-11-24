const { MongoClient } = require('mongodb');
const databaseName = 'crudsinhvien';
const config = { useNewUrlParser: true, useUnifiedTopology: true }
let url = 'mongodb://localhost:27015/';
let MSSV = '1710285';

MongoClient.connect(url, config, (err, db) => {
  if (err) throw err;
  const dbo = db.db(`${databaseName}`);
  let updateQuery = { MSSV };
  let newScore = {
    $set: { DiemMon1: 10, DiemMon2: 10, DiemMon3: 10 }
  };
  dbo.collection('sinhvien').updateOne(updateQuery, newScore, (err, res) => {
    if (err) throw err;
    console.log(`sinh viên ${MSSV} đã được cập nhật`);
    db.close();
  });
  dbo.collection('sinhvien').find({ MSSV }).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});