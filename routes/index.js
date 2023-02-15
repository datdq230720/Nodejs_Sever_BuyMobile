var express = require('express');
var router = express.Router();

const userController = require('../components/users/controller');

const jwt = require('jsonwebtoken');
const authentication = require('../middle/authentication');
const MoMoService = require('../components/nodejs/MomoDemo2');

router.get('/momo', async function (req, res) {
  res.render('momo');
});
router.post('/momo',async function(req, res, next) {
  const {money} = req.body;
  MoMoService.getMoneyMoMo(money);
  res.render('momo');
 });
router.get('/product', async function (req, res) {
  res.render('product');
});
router.get('/product/:partnerCode/:orderId/:requestId/:amount/:orderInfo/:orderType/:transId/:password', async function (req, res, next) {
  const { email, password} = req.params; 
  const result = await userController.login(email, password);
  if (result) {
      // token lấy ở đây
      const token = jwt.sign({ id: result._id, username: result.username }, 'iloveyou');
      res.json({ status: true, result, token });
  } else {
      res.json({ status: false });
  }
});


// http://localhost:3000/
/* thực hiện đăng nhập. */
/**
 * http://localhost:3000/login
 * method: get
 * detail: Hien thi trang login
 * author: Quoc Dat
 * date: 17/03/2022
 */
router.get('/login', [authentication.checkLogin],  function(req, res, next) {
  res.render('login');
});
/**
 * http://localhost:3000/login
 * method: post
 * detail: Thuc hien dang nhap
 * author: Quoc Dat
 * date: 17/03/2022
 */
router.post('/login', async function(req, res, next) {
  // body: form gửi lên 
  const {email, password } = req.body;
  // Thực hiện kiểm tra đăng nhập
  const result = await userController.login(email, password);
  let message = '';
  if(result){
    // secret key
    const token = jwt.sign({id: result._id, username: result.username}, 'iloveyou');
    req.session.token = token;
    // chuyen qua trang chu
    res.redirect('/product/danhSach');
  } else {
    message = 'Đăng nhập thất bại'+result;
    // dang nhap
    res.render('login', {message: message});
  }

  
});
/**
 * http://localhost:3000/dang-xuat
 * method: post
 * detail: Thuc hien dang xuat
 * author: Quoc Dat
 * date: 17/03/2022
 */
 router.get('/dang-xuat', [authentication.checkLogin], function(req, res, next) {
  res.render('login');
});


;



// // API
// // http://localhost:3000/gui-thong-tin
// router.post('/gui-thong-tin', function(req, res, next) {
//   const {name } = req.body;
//   res.json({name: `Xin chao ${name}!!!`});
// });




// // http://localhost:3000/thongKe
// /* GET home page. */
// router.get('/thongKe', function(req, res, next) {
//   res.render('thongKe');
// });

// // http://localhost:3000/danhSach
// /* GET home page. */
// router.get('/danhSach', function(req, res, next) {
//   res.render('danhSach');
// });









module.exports = router;


// get, post, put, delete.
// get: gõ url trên địa chỉ
// post, put, delete: sumble mit from

// dùng cho Web
// res.render taải 1 trang html, layout
// res.redirect: chuyển sang url

// dùng cho API
// res.json: trả dữ liệu dạng json

