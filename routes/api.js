var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../components/users/controller');
const productController = require('../components/products/controller');
const favoritController = require('../components/favorit/controller');
const phoneController = require('../components/phones/controller');
const studentController = require('../components/students/controller');

const authentication = require('../middle/authentication');


// http://localhost:3000/api/login
router.post('/login', async function (req, res, next) {
    const { email, password } = req.body;
    const result = await userController.login(email, password);
    console.log("Có chạy nè");
    if (result) {
        // token lấy ở đây
        const token = jwt.sign({ id: result._id, username: result.username }, 'iloveyou');
        res.json({ status: true, result, token });
        // res.json(result);
    } else {
        res.json({ status: false });
    }
});

// http://localhost:3000/api/register
router.post('/register', async function (req, res, next) {
    console.log("Có chạy nè");
    const { email, password, confim_password } = req.body;
    console.log("Có chạy nè");
    const result = await userController.register(email, password, confim_password);
    if (result) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
});

// http://localhost:3000/api/danhSach
// thêm middle kiểm tra login
// khi nào login thì có token ms lấy đc danh sách sản phẩm
router.get('/danhSach', [authentication.checkToken], async function(req, res, next) {
    const product = await productController.getProducts();
    res.json(product);
});
// http://localhost:3000/api/danhSach/:id/detail
// danh sach chi tiet san pham
// khi nào login thì có token ms lấy đc danh sách sản phẩm
router.get('/danhSach/:id/detail', [authentication.checkToken], async function(req, res, next) {
    const { id } = req.params; 
    const product = await productController.getProductById(id);
    res.json(product);
});

// http://localhost:3000/api/danhSach/:id/favorit
// xuat danh sach favorit cua user
router.get('/danhSach/:id/favorit', [authentication.checkToken], async function(req, res, next) {
    const { id } = req.params; 
    const favorit = await favoritController.getFavorit(id);
    res.json(favorit);
});

// http://localhost:3000/api/danhSach/favorit
// thêm favorit vo database
router.post('/danhSach/favorit', async function(req, res, next) {
    let body = req.body;
    const result = await favoritController.insert(body);
    console.log("api: ", body);
    if (result) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
  });


  // Bao ve dot 1
  // http://localhost:3000/api/phone
  router.get('/phone', async function(req, res, next) {
    const phone = await phoneController.getPhones(); 
    res.json(phone);
});
// http://localhost:3000/api/:id/phone
router.get('/:id/phone', async function(req, res, next) {
    const { id } = req.params; 
    const phone = await phoneController.getPhoneId(id); 
    res.json(phone);
});

  // http://localhost:3000/api/student
  router.get('/student', async function(req, res, next) {
    const phone = await studentController.getStudents(); 
    res.json(phone);
});
// http://localhost:3000/api/student/:id/delete
router.delete('/student/:id/delete', async function(req, res, next) {
    // xóa sản phẩm
   const {id} = req.params;
   console.log("id: ", id);
   await studentController.delete(id);
   res.json({result: true});
 });
 // http://localhost:3000/api/student/:id/update
router.post('/student/:id/update', async function(req, res, next) {
    // xóa sản phẩm
    let {body, params } = req;
    body = { ...body};
   console.log("body: ", body);
   await studentController.update(params.id, body);
   res.json({result: true});
 });
// http://localhost:3000/api/student
 router.post('/student', async function(req, res, next) {
    let body = req.body;
    const result = await studentController.insert(body);
    console.log("api: ", body);
    if (result) {
        res.json({ status: true });
    } else {
        res.json({ status: false });
    }
  });



  // Naruto Demo
  // http://localhost:3000/api/login/:email/:password
router.get('/login/:email/:password', async function (req, res, next) {
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

module.exports = router;