const productsService = require('./service');

const date = require('../../utils/date');

exports.getProducts = async () => {
    let data = await productsService.getProduct();
    data = data.map((item, index) => {
        item = {
            released: date.format(item.released),
            _id: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
            description: item.description,
            category_id: item.category_id, 
            index: index + 1
        }
        return item;
    })
    return data;
} 
exports.getProductById = async (id) => {
    let product = await productsService.getProductById(id);
    product = {
        released: date.format(product.released),
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
        description: product.description,
        category_id: product.category_id, 
    }
    return product;
  }

exports.insert = async (body) => {
    await productsService.insert(body);
}

exports.delete = async (id) => {
    await productsService.delete(id);
}

exports.update = async (id, product) => {
    await productsService.update(id, product);
}
