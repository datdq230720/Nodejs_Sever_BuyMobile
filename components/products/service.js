/**
 * service: tầng giao tiếp với database
 */
const productModel = require('./model');


/**
 *   Lấy danh sách sản phẩm
 */
exports.getProduct = async () => {
  // return data;
  // select * from product
  const product = await productModel.find().populate('category_id');
  return product;
}

//  Lấy thông tin chi tiét 1 sản phẩm
exports.getProductById = async (id) => {
  // const product = data.filter(item => item._id == id)[0];
  // return product;
  const product = await productModel.findById(id).populate('category_id');
  return product;
}

// 
exports.insert = async (product) => {
  // data.push(product);
  const p = new productModel(product);
  await p.save();
}

exports.delete = async (id) => {
  // data = data.filter(item => item._id != id);
  await productModel.findByIdAndDelete(id);
}

exports.update = async (id, product) => {
  // data = data.map(item => {
  //   if (item._id == id) {
  //     item = { ...item, ...product }
  //   }
  //   return item;
  // });
  await productModel.findByIdAndUpdate(id, product);

}

var data = [{
  "_id": 88,
  "name": "Raspberries - Frozen",
  "price": 88,
  "quantity": 91,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "category_id": {
    "_id": 1,
    "name": "Plaintain",
    "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
  }
}, {
  "_id": 41,
  "name": "Sugar - Sweet N Low, Individual",
  "price": 50,
  "quantity": 50,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "category_id": {
    "_id": 2,
    "name": "Cup - Paper 10oz 92959",
    "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
  }
}, {
  "_id": 76,
  "name": "Haggis",
  "price": 76,
  "quantity": 17,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "category_id": {
    "_id": 3,
    "name": "Cheese - Pied De Vents",
    "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
  }
}, {
  "_id": 5,
  "name": "Broom And Broom Rack White",
  "price": 100,
  "quantity": 77,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "category_id": {
    "_id": 4,
    "name": "Bread Crumbs - Panko",
    "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
  }
}, {
  "_id": 49,
  "name": "Kahlua",
  "price": 59,
  "quantity": 27,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
  "category_id": {
    "_id": 5,
    "name": "Nantucket - Orange Mango Cktl",
    "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
  }
}, {
  "_id": 81,
  "name": "Ham - Cooked Italian",
  "price": 83,
  "quantity": 10,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "category_id": {
    "_id": 6,
    "name": "Fireball Whisky",
    "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
  }
}, {
  "_id": 20,
  "name": "Juice - Propel Sport",
  "price": 66,
  "quantity": 42,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "category_id": {
    "_id": 7,
    "name": "Cheese - Brie, Triple Creme",
    "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
  }
}, {
  "_id": 91,
  "name": "Gatorade - Orange",
  "price": 66,
  "quantity": 7,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "category_id": {
    "_id": 8,
    "name": "Steamers White",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
  }
}, {
  "_id": 26,
  "name": "Quinoa",
  "price": 75,
  "quantity": 22,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "category_id": {
    "_id": 9,
    "name": "Scallops - Live In Shell",
    "description": "Fusce consequat. Nulla nisl. Nunc nisl."
  }
}, {
  "_id": 62,
  "name": "Puree - Blackcurrant",
  "price": 53,
  "quantity": 50,
  "released": "2021-03-31",
  "image": "https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-1-3.jpg",
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "category_id": {
    "_id": 10,
    "name": "Sachet",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
  }
}]
