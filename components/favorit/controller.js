const favoritServuce = require('./service');


exports.getFavorit = async (user_id) => {
    let favorit = await favoritServuce.getFavoritService(user_id);
    favorit = favorit.map(item => {
        item = {
            _id: item._id,
            name: item.name,
            price: item.price,
            user_id: item.user_id,
            image: item.image,
        }
        return item;
    })
    return favorit;
}
exports.insert = async (body) => {
    let favorit = await favoritServuce.insert(body);
    return favorit;
}

exports.delete = async (id) => {
    await favoritServuce.delete(id);
}