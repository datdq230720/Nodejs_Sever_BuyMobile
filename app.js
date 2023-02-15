var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// test NarutoDemo(Unity)
var bodyParser = require('body-parser')

const session = require('express-session');
const mongoose = require('mongoose');



require('./components/users/model');
require('./components/categories/model');
require('./components/products/model');




// http://localhost:3000/
// Router
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product')
var apiRouter = require('./routes/api')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'iloveyou',
  resave: true,
  saveUninitialized: true,
  cookie: {secure: false}
}));
// test NarutoDemo(Unity)
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect('mongodb+srv://admin:123@cluster0.9znjp.mongodb.net/NodejsNC?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
.catch(err => console.log('>>>>>>>>> DB Error: ', err));

// http://localhost:3000/
// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 * 1. đăng nhập
 * http://localhost:3000/dang-nhap
 * get: chạy ra login
 * post: thực hiện login
 * 
 * 2. đăng xuất
 * http://localhost:3000/dang-xuat
 * get: chạy đăng xuất
 * 
 * 3. Trang chủ
 * http://localhost:3000/product/
 * 
 * 4. sản phẩm
 * http://localhost:3000/danhSach
 * get: xuất danh sách sản phẩm
 * post: thêm mới sản phẩm
 * 
 * 5. chi tiết 1 sản phẩm
 * http://locahost:3000/san-pham/:id/edit
 * get: lấy thông tin chi tiết 1 sản phẩm
 * put: cập nhật thông tin sản phẩm
 * 
 * 6. xóa sản phẩm
 * http://localhost:3000/san-pham/:id/delete
 * delete: xóa 1 sản phẩm 
 * 
 * 7.thống kê
 * http://localhost:3000/san-pham/thongKe
 * get: lấy thống kê sản phẩm, vẽ biểu đồ
 * 
 */
