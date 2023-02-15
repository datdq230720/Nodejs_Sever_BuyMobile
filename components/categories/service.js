
const categoryModel = require('./model');

/**
 *  lấy danh sách thể loại danh mục
 * @returns data
 */
exports.getCategories = async () => {
  // return data;
  const category = await categoryModel.find();
  return category;
}

/**
 * 
 * @param {mã danh mục} id 
 * @returns danh mục
 */
exports.getCategoryById = async (id) => {
  const category = data.filter(item => item._id == id)[0];
  return category;
}

var data = [{
  "_id": 1,
  "name": "Plaintain",
  "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
}, {
  "_id": 2,
  "name": "Cup - Paper 10oz 92959",
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
}, {
  "_id": 3,
  "name": "Cheese - Pied De Vents",
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
}, {
  "_id": 4,
  "name": "Bread Crumbs - Panko",
  "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "_id": 5,
  "name": "Nantucket - Orange Mango Cktl",
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "_id": 6,
  "name": "Fireball Whisky",
  "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
}, {
  "_id": 7,
  "name": "Cheese - Brie, Triple Creme",
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
}, {
  "_id": 8,
  "name": "Steamers White",
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
}, {
  "_id": 9,
  "name": "Scallops - Live In Shell",
  "description": "Fusce consequat. Nulla nisl. Nunc nisl."
}, {
  "_id": 10,
  "name": "Sachet",
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
}]
