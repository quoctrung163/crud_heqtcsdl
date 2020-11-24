// const { MongoClient } = require('mongodb');
// const databaseName = 'crudsinhvien';
// const config = { useNewUrlParser: true, useUnifiedTopology: true }
// let url = 'mongodb://localhost:27015/';

// MongoClient.connect(url, config, (err, db) => {
//   if (err) throw err;
//   let dbo = db.db(`${databaseName}`);
//   let svArr = [{
//     MSSV: '1710289', Hoten: 'Phan Quốc Trung', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710289@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710233', Hoten: 'Đặng Trần Hữu Nhân', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710233@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710196', Hoten: 'Nguyễn Đăng Khoa', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710196@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1714234', Hoten: 'Hứa Đình Doanh', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1714234@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710264', Hoten: 'Huỳnh Lê Hữu Thành', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710264@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710144', Hoten: 'Nguyễn Đức Đề', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710144@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710156', Hoten: 'Phạm Bá Xuân Duy', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710156@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710204', Hoten: 'Bùi Đức Hoàng Lâm', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710204@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710303', Hoten: 'Phạm Hoàng Việt', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710303@dlu.edu.vn', DienThoai: '0349981228'
//   }, {
//     MSSV: '1710285', Hoten: 'Lê Anh Trí', Namsinh: 1999, DiemMon1: 8, DiemMon2: 7, DiemMon3: 10, Email: '1710289@dlu.edu.vn', DienThoai: '0349981228'
//   }];

//   dbo.collection('sinhvien').insertMany(svArr, (err, res) => {
//     if (err) throw err;
//     console.log('Đã chèn dữ liệu sinh viên thành công!');
//     db.close();
//   });
// })

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});