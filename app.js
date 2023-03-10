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
 * 1. ????ng nh???p
 * http://localhost:3000/dang-nhap
 * get: ch???y ra login
 * post: th???c hi???n login
 * 
 * 2. ????ng xu???t
 * http://localhost:3000/dang-xuat
 * get: ch???y ????ng xu???t
 * 
 * 3. Trang ch???
 * http://localhost:3000/product/
 * 
 * 4. s???n ph???m
 * http://localhost:3000/danhSach
 * get: xu???t danh s??ch s???n ph???m
 * post: th??m m???i s???n ph???m
 * 
 * 5. chi ti???t 1 s???n ph???m
 * http://locahost:3000/san-pham/:id/edit
 * get: l???y th??ng tin chi ti???t 1 s???n ph???m
 * put: c???p nh???t th??ng tin s???n ph???m
 * 
 * 6. x??a s???n ph???m
 * http://localhost:3000/san-pham/:id/delete
 * delete: x??a 1 s???n ph???m 
 * 
 * 7.th???ng k??
 * http://localhost:3000/san-pham/thongKe
 * get: l???y th???ng k?? s???n ph???m, v??? bi???u ?????
 * 
 */
