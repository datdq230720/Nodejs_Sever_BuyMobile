var express = require('express');
var router = express.Router();


const productController = require('../components/products/controller');

const categoryController = require('../components/categories/controller');

const upload = require('../middle/upload');
const authentication = require('../middle/authentication');


//momo
// router.post('/momo', async function(req, res, next) {
//   var Momo = momo.PaymentMomo();
//   console.log(Momo);
// });

// http://localhost:3000/product/
/* GET home page. */
router.get('/', [authentication.checkLogin], function(req, res, next) {
  
  res.render('index');
});


/**
 * http://localhost:3000/product/danhSach
 * method: get
 * detail: Lay ds san pham
 * author: Quoc Dat
 * date: 17/03/2022
 */
router.get('/danhSach', [authentication.checkLogin], async function(req, res, next) {
  const data = await productController.getProducts();
  res.render('danhSach', { product: data });
});


/**
 * http://localhost:3000/product/edit
 * method: get
 * detail: lay thong tin chi tiet san pham
 * author: Quoc Dat
 * date: 17/03/2022
 */
 router.get('/edit', function(req, res, next) {
 res.render('chiTiet');
});

router.post('/:id/edit', [upload.single('image')], async function(req, res, next) {
  // them moi san pham vao datbase 
  let {body, file, params } = req;
  delete body.image;
  if(file){
    let image = `http://10.82.70.148:3000/images/${file.filename}`;
    body = { ...body, image: image};
  }
  
  await productController.update(params.id, body);
  res.redirect('/product/edit')
});
// lay thong tin chi tiet san pham
router.get('/:id/edit', async function(req, res, next) {
   const {id} = req.params;
   const product = await productController.getProductById(id);
   const categories = await categoryController.getCategoriesForOneProduct(product.category_id._id); 
  res.render('chitiet', {product: product, categories: categories});
});

/**
 * http://localhost:3000/product/themmoi
 * method: put
 * detail: Thêm mới sản phẩm
 * author: Quoc Dat
 * date: 17/03/2022
 */
 router.post('/themmoi', async function(req, res, next) {
  const categories = await categoryController.getCategories(); 
  res.render('themMoi', { categories: categories});
});
// middleware
 router.post('/danhSach', [upload.single('image')], async function(req, res, next) {
  // them moi san pham vao datbase 
  let {body, file } = req;
  let image = '';
  if(file){
    image = `http://10.82.70.148:3000/images/${file.filename}`
  }
  body = { ...body, image: image}
  await productController.insert(body);
  res.redirect('/product/danhSach')
});




/**
 * http://localhost:3000/product/:id/delete
 * method: delete
 * detail: xoa san pham
 * author: Quoc Dat
 * date: 17/03/2022
 */
 router.delete('/:id/delete', async function(req, res, next) {
   // xóa sản phẩm
  const {id} = req.params;
  await productController.delete(id);
  res.json({result: true});
});

/**
 * http://localhost:3000/product/thongKe
 * method: get
 * detail: thong san pham
 * author: Quoc Dat
 * date: 17/03/2022
 */

 router.get('/thongKe', function(req, res, next) {
  res.render('thongKe');
});
http://localhost:3000/product/nap-the
router.get('/nap-the', function(req, res, next) {
  res.render('nap-the');
});

module.exports = router;